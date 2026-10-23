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
  FolderGit2, 
  Calendar, 
  ShieldCheck, 
  Sparkles,
  ChevronRight,
  Eye,
  AlertCircle,
  FileText
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

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Client Welcome & Project Hero Header (Apple HIG Card) */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-900 border border-sky-200/60 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Traço Engenharia • Acompanhamento 24/7</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-light text-slate-900 tracking-tight">
              Bem-vindo ao <span className="font-semibold">{project.name}</span>!
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Bem-vindo ao portal da sua obra. Acompanhe a evolução do projeto em tempo real, acesse pranchas técnicas e valide entregas de forma assíncrona, com a qualidade técnica da <strong>Traço Engenharia</strong>.
            </p>
          </div>

          {/* Overall Progress Widget (HIG Circular Gauge) */}
          <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-200/80 flex items-center gap-5 min-w-[280px]">
            <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
              <svg className="w-16 h-16 transform -rotate-90">
                <circle
                  cx="32"
                  cy="32"
                  r="26"
                  stroke="currentColor"
                  strokeWidth="5"
                  className="text-slate-200"
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
                  className="text-[#071d33] transition-all duration-1000 ease-out"
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>
              <span className="absolute text-sm font-semibold text-slate-900">
                {project.overallProgress}%
              </span>
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">
                Progresso Geral
              </span>
              <p className="text-sm font-semibold text-slate-900 mt-0.5">
                Em andamento: <strong className="text-sky-700">{project.overallProgress}%</strong>
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Fase Atual: <strong>{currentPhase.name}</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Quick Highlights Grid */}
        <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Localização</span>
            <span className="font-medium text-slate-800">{project.city}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Área Construída</span>
            <span className="font-medium text-slate-800">{project.totalArea}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Entrega Prevista</span>
            <span className="font-medium text-slate-800">{project.estimatedCompletion}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Decisões Aprovadas</span>
            <span className="font-medium text-slate-800">{project.decisionsApproved} de {project.totalDecisions} validadas</span>
          </div>
        </div>
      </section>

      {/* Active Phase Banner & Pending Approval Callout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Active Phase Banner (Traço Midnight Navy) */}
        <div className="lg:col-span-2 bg-[#071d33] text-white rounded-3xl p-6 sm:p-7 shadow-sm flex flex-col justify-between border border-sky-950/40">
          <div>
            <div className="flex items-center justify-between gap-4">
              <span className="px-2.5 py-1 rounded-full bg-white/10 text-white text-xs font-medium border border-white/15 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                {currentPhase.code} • Ativa Agora
              </span>
              <span className="text-xs text-slate-300 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                Prazo: {currentPhase.duration}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-light mt-4 text-white">
              {currentPhase.name} <span className="text-sky-300 font-normal">({currentPhase.progress}% concluído)</span>
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed font-light">
              {currentPhase.description}
            </p>

            {/* Task Checklist Snippet */}
            <div className="mt-5 space-y-2 bg-white/5 rounded-2xl p-4 border border-white/10">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-200 block">
                Entregáveis Recentes da Fase
              </span>
              {currentPhase.tasks.slice(0, 3).map((task) => (
                <div key={task.id} className="flex items-center justify-between text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className={`w-4 h-4 ${task.status === 'done' ? 'text-sky-400' : 'text-slate-400'}`} />
                    <span className={task.status === 'done' ? 'line-through text-slate-400' : ''}>
                      {task.title}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400">{task.deliverableDate}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-slate-300">
              Responsável Técnico: <strong>{currentPhase.responsible}</strong>
            </span>
            <button
              id="dashboard-timeline-btn"
              onClick={() => setActiveTab('timeline')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-300 hover:text-white transition-colors"
            >
              <span>Ver cronograma detalhado</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Action Pending Callout (HIG Surface) */}
        <div className="bg-sky-50/50 border border-sky-200/70 rounded-3xl p-6 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center gap-2 text-sky-900 font-semibold text-xs uppercase tracking-wider">
              <AlertCircle className="w-4 h-4 text-sky-700" />
              <span>Validação Necessária</span>
            </div>

            <h4 className="text-base font-semibold text-slate-900 mt-3">
              Aprovação do Anteprojeto 3D
            </h4>
            
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              As pranchas e volumetria da fachada estão disponíveis. Valide as soluções arquitetônicas diretamente pelo portal da Traço Engenharia.
            </p>

            <div className="mt-4 p-3 bg-white/90 rounded-xl border border-sky-200/50 text-xs space-y-1">
              <div className="flex justify-between text-slate-700">
                <span>Versão Oficial:</span>
                <strong className="font-semibold text-slate-900">v2.1 (Ajustes Finais)</strong>
              </div>
              <div className="flex justify-between text-slate-700">
                <span>Status da Validação:</span>
                <span className="text-sky-800 font-medium">Pendente de Aceite</span>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <button
              id="dashboard-approve-btn"
              onClick={onOpenApprovalModal}
              className="w-full py-2.5 px-4 bg-[#071d33] text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors shadow-xs flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4 text-sky-400" />
              <span>Revisar & Aprovar Agora</span>
            </button>
            
            <button
              id="dashboard-view-3d-btn"
              onClick={() => {
                const renderDoc = documents.find(d => d.id === 'doc-4');
                if (renderDoc) onSelectDocument(renderDoc);
              }}
              className="w-full py-2 px-4 bg-white text-slate-700 hover:text-slate-900 rounded-xl text-xs font-medium border border-slate-200 hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5 text-slate-500" />
              <span>Visualizar Renders 3D</span>
            </button>
          </div>
        </div>

      </div>

      {/* 4 Shortcut Action Cards (HIG Inset Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <button
          id="shortcut-timeline"
          onClick={() => setActiveTab('timeline')}
          className="p-5 bg-white rounded-2xl border border-slate-200/80 hover:border-sky-300 hover:shadow-xs text-left transition-all group"
        >
          <div className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center text-sky-700 group-hover:bg-[#071d33] group-hover:text-white transition-colors">
            <Calendar className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-semibold text-slate-900 mt-3 group-hover:text-sky-900 flex items-center justify-between">
            <span>Cronograma & Prazos</span>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </h4>
          <p className="text-xs text-slate-500 mt-1">
            Visualizar as 4 etapas e marcos contratuais.
          </p>
        </button>

        <button
          id="shortcut-documents"
          onClick={() => setActiveTab('documents')}
          className="p-5 bg-white rounded-2xl border border-slate-200/80 hover:border-sky-300 hover:shadow-xs text-left transition-all group"
        >
          <div className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center text-sky-700 group-hover:bg-[#071d33] group-hover:text-white transition-colors">
            <FolderGit2 className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-semibold text-slate-900 mt-3 group-hover:text-sky-900 flex items-center justify-between">
            <span>Documentos & Pastas</span>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </h4>
          <p className="text-xs text-slate-500 mt-1">
            Estrutura organizada nas 5 pastas técnicas.
          </p>
        </button>

        <button
          id="shortcut-briefing"
          onClick={() => setActiveTab('briefing')}
          className="p-5 bg-white rounded-2xl border border-slate-200/80 hover:border-sky-300 hover:shadow-xs text-left transition-all group"
        >
          <div className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center text-sky-700 group-hover:bg-[#071d33] group-hover:text-white transition-colors">
            <FileText className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-semibold text-slate-900 mt-3 group-hover:text-sky-900 flex items-center justify-between">
            <span>Briefing Estruturado</span>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </h4>
          <p className="text-xs text-slate-500 mt-1">
            Questionário das 8 disciplinas técnicas.
          </p>
        </button>

        <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80 text-left">
          <div className="w-9 h-9 rounded-xl bg-sky-100 flex items-center justify-center text-sky-800">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-semibold text-slate-900 mt-3">
            Garantia Técnica Traço
          </h4>
          <p className="text-xs text-slate-500 mt-1">
            Projetos compatibilizados e homologados.
          </p>
        </div>

      </div>

      {/* Lower Section: Real-time Feed & Technical Team Contacts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Real-time Activity Logs Feed */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-semibold text-slate-900">Histórico de Transparência</h3>
              <p className="text-xs text-slate-500">Registro automatizado de validações e uploads</p>
            </div>
            <span className="text-[10px] font-mono text-sky-700 font-semibold px-2 py-0.5 rounded bg-sky-50 border border-sky-200/60">
              100% Auditável
            </span>
          </div>

          <div className="space-y-4 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-100">
            {logs.map((log) => (
              <div key={log.id} className="relative pl-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div className="absolute left-1.5 top-1 w-4 h-4 rounded-full bg-[#071d33] ring-4 ring-white flex items-center justify-center text-white">
                  <div className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
                </div>
                
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-900">{log.title}</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px]">
                      {log.phaseName}
                    </span>
                  </div>
                  <p className="text-slate-600 mt-0.5">{log.description}</p>
                </div>

                <div className="text-slate-400 text-[11px] shrink-0 sm:text-right">
                  <span className="block font-medium text-slate-700">{log.author}</span>
                  <span>{log.date} às {log.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Team Contact Cards */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-base font-semibold text-slate-900">Traço Engenharia</h3>
              <span className="text-[10px] font-semibold text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-200/70">
                Equipe Titular
              </span>
            </div>
            <p className="text-xs text-slate-500 mb-4">Engenheiros e arquitetos responsáveis pela sua obra</p>

            <div className="space-y-3">
              {/* Architect */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#071d33] text-white flex items-center justify-center font-semibold text-xs border border-sky-400/20">
                  SM
                </div>
                <div className="text-xs">
                  <span className="font-semibold text-slate-900 block">{project.architectInCharge}</span>
                  <span className="text-slate-500">Arquiteta Titular • Autoria do Projeto</span>
                </div>
              </div>

              {/* Engineer */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#071d33] text-white flex items-center justify-center font-semibold text-xs border border-sky-400/20">
                  GS
                </div>
                <div className="text-xs">
                  <span className="font-semibold text-slate-900 block">{project.engineerInCharge}</span>
                  <span className="text-slate-500">Engenheiro Civil • Traço Engenharia</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
            <p className="leading-relaxed">
              Dúvidas técnicas? Utilize o portal para apontamentos assíncronos nos documentos ou solicite suporte direto à equipe de engenharia.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};
