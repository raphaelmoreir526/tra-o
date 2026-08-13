import React from 'react';
import { 
  ProjectInfo, 
  Phase, 
  DocumentItem, 
  ActivityLog, 
  BriefingData 
} from '../types';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Clock, 
  FileText, 
  FolderGit2, 
  Calendar, 
  UserCheck, 
  ShieldCheck, 
  Sparkles,
  ChevronRight,
  Eye,
  Download,
  AlertCircle
} from 'lucide-react';

interface DashboardViewProps {
  project: ProjectInfo;
  phases: Phase[];
  documents: DocumentItem[];
  logs: ActivityLog[];
  briefingData: BriefingData;
  setActiveTab: (tab: 'dashboard' | 'timeline' | 'documents' | 'briefing') => void;
  onSelectDocument: (doc: DocumentItem) => void;
  onOpenApprovalModal: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  project,
  phases,
  documents,
  logs,
  briefingData,
  setActiveTab,
  onSelectDocument,
  onOpenApprovalModal,
}) => {
  const currentPhase = phases.find(p => p.id === project.currentPhaseId) || phases[1];
  const pendingDocsCount = documents.filter(d => !d.approved).length;

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Client Welcome & Project Hero Header */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-xs relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-stone-100/50 rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Acompanhamento Exclusivo 24/7</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-light text-stone-900 tracking-tight">
              Olá, <span className="font-semibold">{project.clientName}</span>.
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              Bem-vindo ao portal da sua obra. Acompanhe a evolução do projeto em tempo real, acesse pranchas técnicas e valide entregas de forma assíncrona, sem necessidade de reuniões presenciais.
            </p>
          </div>

          {/* Overall Progress Widget */}
          <div className="bg-[#fbfbf9] p-5 rounded-xl border border-stone-200/90 flex items-center gap-5 min-w-[280px]">
            <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
              <svg className="w-16 h-16 transform -rotate-90">
                <circle
                  cx="32"
                  cy="32"
                  r="26"
                  stroke="currentColor"
                  strokeWidth="5"
                  className="text-stone-200"
                  fill="transparent"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="26"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeDasharray={163}
                  strokeDashoffset={163 - (163 * project.overallProgress) / 100}
                  className="text-[#2d3732] transition-all duration-1000 ease-out"
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>
              <span className="absolute text-sm font-semibold text-stone-900">
                {project.overallProgress}%
              </span>
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-wider font-semibold text-stone-500">
                Progresso Geral
              </span>
              <p className="text-sm font-medium text-stone-900 mt-0.5">
                Em andamento: <strong className="font-semibold text-[#2d3732]">45%</strong>
              </p>
              <p className="text-xs text-stone-500 mt-1">
                Fase Atual: <strong>{currentPhase.name}</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Quick Highlights Grid */}
        <div className="mt-8 pt-6 border-t border-stone-100 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div>
            <span className="text-stone-400 block text-[10px] uppercase font-semibold">Localização</span>
            <span className="font-medium text-stone-800">{project.city}</span>
          </div>
          <div>
            <span className="text-stone-400 block text-[10px] uppercase font-semibold">Área Construída</span>
            <span className="font-medium text-stone-800">{project.totalArea}</span>
          </div>
          <div>
            <span className="text-stone-400 block text-[10px] uppercase font-semibold">Entrega Prevista</span>
            <span className="font-medium text-stone-800">{project.estimatedCompletion}</span>
          </div>
          <div>
            <span className="text-stone-400 block text-[10px] uppercase font-semibold">Decisões Aprovadas</span>
            <span className="font-medium text-stone-800">{project.decisionsApproved} de {project.totalDecisions} validadas</span>
          </div>
        </div>
      </section>

      {/* Active Phase Action Box & Pending Approval Callout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Active Phase Banner */}
        <div className="lg:col-span-2 bg-[#2d3732] text-white rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-4">
              <span className="px-2.5 py-1 rounded-full bg-white/10 text-white text-xs font-medium border border-white/15">
                {currentPhase.code} • Ativa Agora
              </span>
              <span className="text-xs text-stone-300 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                Prazo: {currentPhase.duration}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-light mt-4 text-white">
              {currentPhase.name} <span className="text-stone-300 font-normal">({currentPhase.progress}% concluído)</span>
            </h3>

            <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed font-light">
              {currentPhase.description}
            </p>

            {/* Task Checklist Snippet */}
            <div className="mt-5 space-y-2.5 bg-white/5 rounded-xl p-4 border border-white/10">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-300 block">
                Entregáveis Recentes da Fase
              </span>
              {currentPhase.tasks.slice(0, 3).map((task) => (
                <div key={task.id} className="flex items-center justify-between text-xs text-stone-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className={`w-4 h-4 ${task.status === 'done' ? 'text-emerald-400' : 'text-stone-400'}`} />
                    <span className={task.status === 'done' ? 'line-through text-stone-400' : ''}>
                      {task.title}
                    </span>
                  </div>
                  <span className="text-[10px] text-stone-400">{task.deliverableDate}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-stone-300">
              Responsável: <strong>{currentPhase.responsible}</strong>
            </span>
            <button
              id="dashboard-timeline-btn"
              onClick={() => setActiveTab('timeline')}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-white hover:text-emerald-200 transition-colors"
            >
              <span>Ver cronograma detalhado</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Action Pending / Zero Meetings Benefit Box */}
        <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-amber-900 font-medium text-sm">
              <AlertCircle className="w-4 h-4 text-amber-700" />
              <span>Validação Necessária</span>
            </div>

            <h4 className="text-base font-medium text-stone-900 mt-3">
              Aprovação do Anteprojeto 3D
            </h4>
            
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              As maquetes fotorrealistas e volumetria da fachada estão disponíveis. Você pode aprovar digitalmente ou solicitar pequenas revisões diretamente no portal.
            </p>

            <div className="mt-4 p-3 bg-white/80 rounded-lg border border-amber-200/50 text-xs space-y-1">
              <div className="flex justify-between text-stone-700">
                <span>Versão Atual:</span>
                <strong className="font-semibold">v2.1 (Ajustes Finais)</strong>
              </div>
              <div className="flex justify-between text-stone-700">
                <span>Status da Aprovação:</span>
                <span className="text-amber-800 font-medium">Pendente de Aceite</span>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <button
              id="dashboard-approve-btn"
              onClick={onOpenApprovalModal}
              className="w-full py-2.5 px-4 bg-[#2d3732] text-white rounded-xl text-xs font-medium hover:bg-stone-800 transition-colors shadow-xs flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Revisar & Aprovar Agora</span>
            </button>
            
            <button
              id="dashboard-view-3d-btn"
              onClick={() => {
                const renderDoc = documents.find(d => d.id === 'doc-4');
                if (renderDoc) onSelectDocument(renderDoc);
              }}
              className="w-full py-2 px-4 bg-white text-stone-700 hover:text-stone-900 rounded-xl text-xs font-medium border border-stone-200/80 hover:bg-stone-50 transition-colors flex items-center justify-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5 text-stone-500" />
              <span>Visualizar Renders 3D</span>
            </button>
          </div>
        </div>

      </div>

      {/* 4 Shortcut Action Cards (Law of Hick - Clear Navigation Shortcuts) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <button
          id="shortcut-timeline"
          onClick={() => setActiveTab('timeline')}
          className="p-5 bg-white rounded-xl border border-stone-200/80 hover:border-stone-300 hover:shadow-sm text-left transition-all group"
        >
          <div className="w-9 h-9 rounded-lg bg-stone-100 flex items-center justify-center text-stone-700 group-hover:bg-[#2d3732] group-hover:text-white transition-colors">
            <Calendar className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-medium text-stone-900 mt-3 group-hover:text-[#2d3732] flex items-center justify-between">
            <span>Cronograma & Prazos</span>
            <ChevronRight className="w-4 h-4 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
          </h4>
          <p className="text-xs text-stone-500 mt-1">
            Visualizar as 4 fases e previsões de entrega.
          </p>
        </button>

        <button
          id="shortcut-documents"
          onClick={() => setActiveTab('documents')}
          className="p-5 bg-white rounded-xl border border-stone-200/80 hover:border-stone-300 hover:shadow-sm text-left transition-all group"
        >
          <div className="w-9 h-9 rounded-lg bg-stone-100 flex items-center justify-center text-stone-700 group-hover:bg-[#2d3732] group-hover:text-white transition-colors">
            <FolderGit2 className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-medium text-stone-900 mt-3 group-hover:text-[#2d3732] flex items-center justify-between">
            <span>Drive do Projeto</span>
            <ChevronRight className="w-4 h-4 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
          </h4>
          <p className="text-xs text-stone-500 mt-1">
            Plantas, 3D e arquivos organizados por fase.
          </p>
        </button>

        <button
          id="shortcut-briefing"
          onClick={() => setActiveTab('briefing')}
          className="p-5 bg-white rounded-xl border border-stone-200/80 hover:border-stone-300 hover:shadow-sm text-left transition-all group"
        >
          <div className="w-9 h-9 rounded-lg bg-stone-100 flex items-center justify-center text-stone-700 group-hover:bg-[#2d3732] group-hover:text-white transition-colors">
            <FileText className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-medium text-stone-900 mt-3 group-hover:text-[#2d3732] flex items-center justify-between">
            <span>Briefing de Necessidades</span>
            <ChevronRight className="w-4 h-4 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
          </h4>
          <p className="text-xs text-stone-500 mt-1">
            {briefingData.isCompleted ? '✓ Questionário preenchido e gravado' : 'Formulário passo a passo pendente'}
          </p>
        </button>

        <div className="p-5 bg-stone-50 rounded-xl border border-stone-200/70 text-left">
          <div className="w-9 h-9 rounded-lg bg-stone-200/60 flex items-center justify-center text-stone-700">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-medium text-stone-900 mt-3">
            Garantia de Transparência
          </h4>
          <p className="text-xs text-stone-500 mt-1">
            Arquivos protegidos em modo <strong>Somente Leitura</strong>.
          </p>
        </div>

      </div>

      {/* Lower Section: Real-time Feed & Technical Team Contacts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Real-time Activity Logs Feed */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-stone-200/80 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-medium text-stone-900">Histórico de Transparência</h3>
              <p className="text-xs text-stone-500">Registro automatizado de postagens e validações</p>
            </div>
            <span className="text-xs text-stone-400 font-mono">100% Auditável</span>
          </div>

          <div className="space-y-4 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-stone-100">
            {logs.map((log) => (
              <div key={log.id} className="relative pl-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div className="absolute left-1.5 top-1 w-4 h-4 rounded-full bg-[#2d3732] ring-4 ring-white flex items-center justify-center text-white">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
                
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-stone-900">{log.title}</span>
                    <span className="px-2 py-0.5 rounded bg-stone-100 text-stone-600 text-[10px]">
                      {log.phaseName}
                    </span>
                  </div>
                  <p className="text-stone-600 mt-0.5">{log.description}</p>
                </div>

                <div className="text-stone-400 text-[11px] shrink-0 sm:text-right">
                  <span className="block font-medium text-stone-700">{log.author}</span>
                  <span>{log.date} às {log.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Team Contact Cards */}
        <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="text-base font-medium text-stone-900 mb-1">Equipe do Projeto</h3>
            <p className="text-xs text-stone-500 mb-4">Profissionais técnicos responsáveis pela sua obra</p>

            <div className="space-y-3">
              {/* Architect */}
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-stone-800 text-white flex items-center justify-center font-medium text-xs">
                  SM
                </div>
                <div className="text-xs">
                  <span className="font-semibold text-stone-900 block">{project.architectInCharge}</span>
                  <span className="text-stone-500">Arquiteta Titular • Autoria do Projeto</span>
                </div>
              </div>

              {/* Engineer */}
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-stone-700 text-white flex items-center justify-center font-medium text-xs">
                  GS
                </div>
                <div className="text-xs">
                  <span className="font-semibold text-stone-900 block">{project.engineerInCharge}</span>
                  <span className="text-stone-500">Engenheiro Civil • Estrutura & Prefeitura</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-stone-100 text-xs text-stone-500">
            <p className="leading-relaxed">
              Dúvidas pontuais? Você pode anexar notas diretamente nos documentos do Drive ou contatar a equipe via assistente assíncrono.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};
