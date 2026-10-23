/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ProjectInfo, 
  Phase, 
  DocumentItem, 
  ActivityLog, 
  BriefingData 
} from './types';
import { 
  mockProject, 
  mockProjectsList, 
  mockPhases, 
  mockDocuments, 
  mockLogs, 
  initialBriefingData 
} from './data/mockData';
import { LandingPageView } from './components/LandingPageView';
import { ProjectSelectorView } from './components/ProjectSelectorView';
import { HeaderNav } from './components/HeaderNav';
import { DashboardView } from './components/DashboardView';
import { TimelineView } from './components/TimelineView';
import { DocumentsView } from './components/DocumentsView';
import { BriefingWizardView } from './components/BriefingWizardView';
import { FilePreviewModal } from './components/FilePreviewModal';
import { ApprovalModal } from './components/ApprovalModal';
import { AuthModal } from './components/AuthModal';
import { ContactModal } from './components/ContactModal';
import { PortfolioModal } from './components/PortfolioModal';
import { 
  CheckCircle2, 
  Lock, 
  ArrowLeft,
  Building2
} from 'lucide-react';

export default function App() {
  // Navigation View State: 'landing' (Default domain entry) | 'projects-selector' | 'portal'
  const [currentView, setCurrentView] = useState<'landing' | 'projects-selector' | 'portal'>('landing');

  // Client / Incorporadora Auth State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [clientUser, setClientUser] = useState({
    name: 'Rodrigo Alencar',
    company: 'Incorporadora Alencar & Associados',
  });

  // Modals on Landing Page
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [portfolioModalOpen, setPortfolioModalOpen] = useState(false);

  // Active Project Data
  const [projectsList, setProjectsList] = useState<ProjectInfo[]>(mockProjectsList);
  const [project, setProject] = useState<ProjectInfo>(mockProjectsList[0]);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'timeline' | 'documents' | 'briefing'>('dashboard');
  
  // Project Workspace State
  const [phases, setPhases] = useState<Phase[]>(mockPhases);
  const [documents, setDocuments] = useState<DocumentItem[]>(mockDocuments);
  const [logs, setLogs] = useState<ActivityLog[]>(mockLogs);
  const [briefingData, setBriefingData] = useState<BriefingData>(initialBriefingData);

  // Document & Approval Modals
  const [selectedDocument, setSelectedDocument] = useState<DocumentItem | null>(null);
  const [approvalModalOpen, setApprovalModalOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Login handler
  const handleLoginSuccess = (userName: string, companyName: string) => {
    setIsAuthenticated(true);
    setClientUser({
      name: userName || 'Rodrigo Alencar',
      company: companyName || 'Incorporadora Alencar & Associados',
    });
    // Redirect to project selection screen as requested
    setCurrentView('projects-selector');
    showToast(`Bem-vindo, ${userName || 'Incorporador'}! Selecione o seu empreendimento.`);
  };

  // Select project handler
  const handleSelectProject = (selected: ProjectInfo) => {
    setProject(selected);
    setCurrentView('portal');
    setActiveTab('dashboard');
    showToast(`Acessando ${selected.name}`);
  };

  // Logout handler
  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentView('landing');
    showToast('Sessão encerrada com segurança.');
  };

  const handleApproveDocument = (docId: string) => {
    setDocuments(prev => prev.map(doc => {
      if (doc.id === docId) {
        return {
          ...doc,
          approved: true,
          approvedAt: new Date().toLocaleDateString('pt-BR'),
        };
      }
      return doc;
    }));

    const newLog: ActivityLog = {
      id: `log-${Date.now()}`,
      date: 'Hoje',
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      author: clientUser.company,
      role: 'Incorporador',
      title: 'Aprovação concedida para documento técnico',
      description: 'Validação digital registrada com sucesso no portal.',
      type: 'approval',
      phaseName: 'Anteprojeto',
    };
    setLogs(prev => [newLog, ...prev]);
    showToast('✓ Documento aprovado com sucesso!');
  };

  const handleConfirmPhaseApproval = (notes: string) => {
    setPhases(prev => prev.map(p => {
      if (p.id === project.currentPhaseId) {
        return { ...p, progress: 100, status: 'completed' as const };
      }
      return p;
    }));

    setProject(prev => ({
      ...prev,
      decisionsApproved: Math.min(prev.totalDecisions, prev.decisionsApproved + 1),
    }));

    const newLog: ActivityLog = {
      id: `log-${Date.now()}`,
      date: 'Hoje',
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      author: clientUser.company,
      role: 'Incorporador',
      title: 'Fase de Anteprojeto Aprovada Digitalmente',
      description: notes ? `Ressalva do incorporador: "${notes}"` : 'Aprovação sem ressalvas. Próxima fase autorizada.',
      type: 'milestone',
      phaseName: 'Anteprojeto',
    };
    setLogs(prev => [newLog, ...prev]);
    showToast('🎉 Anteprojeto aprovado! Próxima fase autorizada.');
  };

  return (
    <div className="min-h-screen">
      
      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-[#071d33] text-white text-xs px-4 py-3 rounded-2xl shadow-xl border border-sky-400/40 flex items-center gap-2 animate-in fade-in slide-in-from-top-3 duration-200">
          <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. VIEW: LANDING PAGE (Main domain entry) */}
      {currentView === 'landing' && (
        <LandingPageView
          onOpenLogin={() => setAuthModalOpen(true)}
          onOpenContact={() => setContactModalOpen(true)}
          onOpenPortfolio={() => setPortfolioModalOpen(true)}
          onSelectProjectDirect={(projId) => {
            const found = projectsList.find(p => p.id === projId) || projectsList[0];
            setProject(found);
            setCurrentView('portal');
          }}
        />
      )}

      {/* 2. VIEW: PROJECT SELECTOR (Multi-development selection for incorporadoras) */}
      {currentView === 'projects-selector' && (
        <ProjectSelectorView
          projects={projectsList}
          currentClientName={clientUser.company}
          onSelectProject={handleSelectProject}
          onBackToLanding={() => setCurrentView('landing')}
          onLogout={handleLogout}
        />
      )}

      {/* 3. VIEW: CLIENT PORTAL JORNADA DO PROJETO */}
      {currentView === 'portal' && (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-sky-100 selection:text-sky-900 flex flex-col justify-between">
          <div>
            {/* Navigation Bar */}
            <HeaderNav 
              project={project}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              logs={logs}
              onSwitchProject={() => setCurrentView('projects-selector')}
              onBackToHome={() => setCurrentView('landing')}
            />

            {/* Quick Breadcrumb bar to switch development easily */}
            <div className="bg-slate-100/80 border-b border-slate-200/60 px-4 sm:px-6 lg:px-8 py-1.5 text-xs text-slate-500">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setCurrentView('projects-selector')}
                    className="hover:text-sky-700 font-semibold flex items-center gap-1 transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 text-sky-600" />
                    <span>Meus Empreendimentos</span>
                  </button>
                  <span>/</span>
                  <span className="font-semibold text-slate-800">{project.name}</span>
                </div>
                
                <span className="hidden sm:inline text-[11px] text-slate-400">
                  {clientUser.company} • Acompanhamento 24/7
                </span>
              </div>
            </div>

            {/* Main Workspace Area */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
              {activeTab === 'dashboard' && (
                <DashboardView
                  project={project}
                  phases={phases}
                  documents={documents}
                  logs={logs}
                  briefingData={briefingData}
                  setActiveTab={setActiveTab}
                  onSelectDocument={(doc) => setSelectedDocument(doc)}
                  onOpenApprovalModal={() => setApprovalModalOpen(true)}
                />
              )}

              {activeTab === 'timeline' && (
                <TimelineView
                  phases={phases}
                  currentPhaseId={project.currentPhaseId}
                  onOpenApprovalModal={() => setApprovalModalOpen(true)}
                />
              )}

              {activeTab === 'documents' && (
                <DocumentsView
                  documents={documents}
                  onSelectDocument={(doc) => setSelectedDocument(doc)}
                />
              )}

              {activeTab === 'briefing' && (
                <BriefingWizardView
                  initialData={briefingData}
                  onSaveBriefing={(updated) => {
                    setBriefingData(updated);
                    showToast('✓ Briefing gravado com sucesso no portal!');
                  }}
                />
              )}
            </main>
          </div>

          {/* Traço Engenharia Portal Footer */}
          <footer className="mt-16 border-t border-slate-200/70 bg-white py-8 text-xs text-slate-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-8 px-2 rounded-lg bg-[#071d33] flex items-center justify-center border border-sky-950/40">
                  <img 
                    src="/assets/aistudio/LOGO_TRA_O_AZUL_c738d4a2.jpg" 
                    alt="Traço Engenharia" 
                    className="h-6 w-auto object-contain"
                  />
                </div>
                <div>
                  <span className="font-semibold text-slate-900 block sm:inline">Traço Engenharia</span>
                  <span className="hidden sm:inline text-slate-300 mx-2">|</span>
                  <span className="text-slate-500">Portal do Cliente • Excelência em Projetos de Alto Padrão</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-400">
                <button
                  onClick={() => setCurrentView('projects-selector')}
                  className="text-sky-700 hover:text-sky-900 font-semibold"
                >
                  ← Trocar Empreendimento
                </button>
                <span>•</span>
                <span className="flex items-center gap-1 text-[11px]">
                  <Lock className="w-3 h-3 text-sky-600" />
                  Ambiente Criptografado
                </span>
                <span>•</span>
                <span className="text-[11px]">CREA / CAU Homologado</span>
              </div>
            </div>
          </footer>
        </div>
      )}

      {/* Global Interactive Modals */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      <PortfolioModal
        isOpen={portfolioModalOpen}
        onClose={() => setPortfolioModalOpen(false)}
        onSelectProjectForDemo={(projId) => {
          const found = projectsList.find(p => p.id === projId) || projectsList[0];
          setProject(found);
          setCurrentView('portal');
          setActiveTab('dashboard');
        }}
      />

      <FilePreviewModal
        document={selectedDocument}
        onClose={() => setSelectedDocument(null)}
        onApproveDocument={handleApproveDocument}
      />

      <ApprovalModal
        isOpen={approvalModalOpen}
        onClose={() => setApprovalModalOpen(false)}
        onConfirmApproval={handleConfirmPhaseApproval}
      />

    </div>
  );
}
