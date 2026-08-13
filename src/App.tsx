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
  mockPhases, 
  mockDocuments, 
  mockLogs, 
  initialBriefingData 
} from './data/mockData';
import { HeaderNav } from './components/HeaderNav';
import { DashboardView } from './components/DashboardView';
import { TimelineView } from './components/TimelineView';
import { DocumentsView } from './components/DocumentsView';
import { BriefingWizardView } from './components/BriefingWizardView';
import { FilePreviewModal } from './components/FilePreviewModal';
import { ApprovalModal } from './components/ApprovalModal';
import { 
  Building2, 
  CheckCircle2, 
  ShieldCheck, 
  Lock, 
  HelpCircle,
  FileCheck2,
  ExternalLink
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'timeline' | 'documents' | 'briefing'>('dashboard');
  const [project, setProject] = useState<ProjectInfo>(mockProject);
  const [phases, setPhases] = useState<Phase[]>(mockPhases);
  const [documents, setDocuments] = useState<DocumentItem[]>(mockDocuments);
  const [logs, setLogs] = useState<ActivityLog[]>(mockLogs);
  const [briefingData, setBriefingData] = useState<BriefingData>(initialBriefingData);

  const [selectedDocument, setSelectedDocument] = useState<DocumentItem | null>(null);
  const [approvalModalOpen, setApprovalModalOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
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

    // Add log entry
    const newLog: ActivityLog = {
      id: `log-${Date.now()}`,
      date: 'Hoje',
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      author: project.clientName,
      role: 'Cliente Exclusivo',
      title: 'Aprovação concedida para documento técnico',
      description: 'Validação digital registrada com sucesso no portal.',
      type: 'approval',
      phaseName: 'Anteprojeto',
    };
    setLogs(prev => [newLog, ...prev]);
    showToast('✓ Documento aprovado com sucesso!');
  };

  const handleConfirmPhaseApproval = (notes: string) => {
    // Update active phase status
    setPhases(prev => prev.map(p => {
      if (p.id === project.currentPhaseId) {
        return { ...p, progress: 100, status: 'completed' as const };
      }
      return p;
    }));

    // Increment decisions approved count
    setProject(prev => ({
      ...prev,
      decisionsApproved: Math.min(prev.totalDecisions, prev.decisionsApproved + 1),
    }));

    // Add log
    const newLog: ActivityLog = {
      id: `log-${Date.now()}`,
      date: 'Hoje',
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      author: project.clientName,
      role: 'Cliente Exclusivo',
      title: 'Fase de Anteprojeto Aprovada Digitalmente',
      description: notes ? `Ressalva do cliente: "${notes}"` : 'Aprovação sem ressalvas. Fase 03 autorizada.',
      type: 'milestone',
      phaseName: 'Anteprojeto',
    };
    setLogs(prev => [newLog, ...prev]);
    showToast('🎉 Anteprojeto aprovado! Próxima fase autorizada.');
  };

  return (
    <div className="min-h-screen bg-[#fbfbf9] text-stone-900 font-sans antialiased selection:bg-stone-200 selection:text-stone-900 flex flex-col justify-between">
      
      <div>
        {/* Navigation Bar */}
        <HeaderNav 
          project={project}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          logs={logs}
        />

        {/* Global Toast Notification */}
        {toastMessage && (
          <div className="fixed top-20 right-6 z-50 bg-[#2d3732] text-white text-xs px-4 py-3 rounded-xl shadow-xl border border-stone-700 flex items-center gap-2 animate-in fade-in slide-in-from-top-3 duration-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{toastMessage}</span>
          </div>
        )}

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

      {/* Modals */}
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

      {/* Minimalist Portal Footer */}
      <footer className="mt-16 border-t border-stone-200/60 bg-white py-8 text-xs text-stone-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#2d3732] text-white flex items-center justify-center font-bold text-[10px]">
              PJ
            </div>
            <span className="font-medium text-stone-800">Portal Jornada do Projeto</span>
            <span className="text-stone-300">|</span>
            <span className="text-stone-400">Transparência 24/7 para Arquitetura de Alto Padrão</span>
          </div>

          <div className="flex items-center gap-4 text-stone-400">
            <span className="flex items-center gap-1 text-[11px]">
              <Lock className="w-3 h-3 text-stone-400" />
              Ambiente Criptografado
            </span>
            <span>•</span>
            <span className="text-[11px]">CAU & CREA Homologado</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
