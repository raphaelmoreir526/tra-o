import React, { useState } from 'react';
import { Phase, PhaseStatus, TaskItem } from '../types';
import { 
  CheckCircle2, 
  Clock, 
  User, 
  Calendar, 
  ChevronRight, 
  AlertCircle, 
  FileCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface TimelineViewProps {
  phases: Phase[];
  currentPhaseId: number;
  onOpenApprovalModal: () => void;
}

export const TimelineView: React.FC<TimelineViewProps> = ({
  phases,
  currentPhaseId,
  onOpenApprovalModal,
}) => {
  const [selectedPhaseId, setSelectedPhaseId] = useState<number>(currentPhaseId);

  const selectedPhase = phases.find(p => p.id === selectedPhaseId) || phases[0];

  const getStatusBadge = (status: PhaseStatus) => {
    switch (status) {
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            Concluído
          </span>
        );
      case 'in_progress':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse"></span>
            Em Andamento
          </span>
        );
      case 'pending_approval':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-900 border border-blue-200">
            <AlertCircle className="w-3 h-3 text-blue-600" />
            Pendente de Aprovação
          </span>
        );
      case 'upcoming':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600 border border-stone-200">
            <Clock className="w-3 h-3 text-stone-400" />
            Previsto
          </span>
        );
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Header Description */}
      <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
            Cronograma & Jornada
          </span>
          <h2 className="text-xl sm:text-2xl font-light text-stone-900 mt-1">
            As 4 Fases do Seu Projeto
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
            Acompanhe o cronograma macro de desenvolvimento. Cada etapa possui entregáveis específicos e prazos previstos com total previsibilidade.
          </p>
        </div>

        <div className="bg-[#fbfbf9] px-4 py-3 rounded-xl border border-stone-200 text-xs shrink-0">
          <span className="text-stone-500 block text-[10px] uppercase font-semibold">Fase Ativa Atual</span>
          <span className="font-semibold text-stone-900 flex items-center gap-1.5 mt-0.5">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            Fase 02: Anteprojeto (65%)
          </span>
        </div>
      </div>

      {/* 4-Phase Interactive Timeline Stepper Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {phases.map((phase) => {
          const isSelected = selectedPhaseId === phase.id;
          const isActiveCurrent = phase.id === currentPhaseId;

          return (
            <button
              key={phase.id}
              id={`timeline-phase-card-${phase.id}`}
              onClick={() => setSelectedPhaseId(phase.id)}
              className={`p-5 rounded-2xl border text-left transition-all relative overflow-hidden group ${
                isSelected
                  ? 'bg-[#2d3732] text-white border-[#2d3732] shadow-md ring-2 ring-[#2d3732]/20'
                  : 'bg-white text-stone-800 border-stone-200/80 hover:border-stone-300 hover:bg-stone-50/50'
              }`}
            >
              {/* Active Badge Marker */}
              {isActiveCurrent && (
                <div className={`absolute top-0 right-0 px-2.5 py-0.5 rounded-bl-lg text-[10px] font-semibold tracking-wider uppercase ${
                  isSelected ? 'bg-amber-400 text-stone-900' : 'bg-amber-100 text-amber-900'
                }`}>
                  Fase Ativa
                </div>
              )}

              <div className="flex items-center justify-between gap-2">
                <span className={`text-xs font-mono font-medium ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                  {phase.code}
                </span>
                <span className="text-[10px] text-stone-400">{phase.duration}</span>
              </div>

              <h3 className={`text-base font-medium mt-2 tracking-tight ${isSelected ? 'text-white' : 'text-stone-900'}`}>
                {phase.name}
              </h3>

              <p className={`text-xs mt-1.5 line-clamp-2 ${isSelected ? 'text-stone-300 font-light' : 'text-stone-500'}`}>
                {phase.summary}
              </p>

              {/* Progress & Responsible Info */}
              <div className="mt-4 pt-3 border-t border-current/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5">
                  <User className={`w-3.5 h-3.5 ${isSelected ? 'text-stone-300' : 'text-stone-400'}`} />
                  <span className={`text-[11px] ${isSelected ? 'text-stone-300' : 'text-stone-600'}`}>
                    {phase.responsible.split(' ')[1] || phase.responsible}
                  </span>
                </div>
                
                <div className="font-semibold text-xs">
                  {phase.progress}%
                </div>
              </div>

              {/* Progress Line */}
              <div className="w-full bg-stone-200/40 h-1 rounded-full mt-3 overflow-hidden">
                <div 
                  className={`h-full transition-all duration-500 ${isSelected ? 'bg-white' : 'bg-[#2d3732]'}`} 
                  style={{ width: `${phase.progress}%` }}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Phase Detail Breakdown */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
        
        {/* Detail Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-100">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-stone-500 font-semibold px-2.5 py-0.5 rounded bg-stone-100">
                {selectedPhase.code}
              </span>
              {getStatusBadge(selectedPhase.status)}
            </div>
            <h3 className="text-2xl font-light text-stone-900 mt-2">
              {selectedPhase.name}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-3xl leading-relaxed">
              {selectedPhase.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {selectedPhase.status === 'in_progress' && (
              <button
                id="timeline-approve-phase-btn"
                onClick={onOpenApprovalModal}
                className="px-4 py-2 bg-[#2d3732] text-white rounded-xl text-xs font-medium hover:bg-stone-800 transition-colors shadow-xs flex items-center gap-2"
              >
                <FileCheck className="w-4 h-4" />
                <span>Aprovar Entrega Desta Fase</span>
              </button>
            )}
          </div>
        </div>

        {/* Phase Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-b border-stone-100 text-xs">
          <div>
            <span className="text-stone-400 block text-[10px] uppercase font-semibold">Prazo Previsto</span>
            <span className="font-semibold text-stone-800">{selectedPhase.duration}</span>
          </div>
          <div>
            <span className="text-stone-400 block text-[10px] uppercase font-semibold">Período Estimado</span>
            <span className="font-semibold text-stone-800">{selectedPhase.startDate} a {selectedPhase.endDate}</span>
          </div>
          <div>
            <span className="text-stone-400 block text-[10px] uppercase font-semibold">Responsável Técnico</span>
            <span className="font-semibold text-stone-800">{selectedPhase.responsible}</span>
          </div>
          <div>
            <span className="text-stone-400 block text-[10px] uppercase font-semibold">Função na Obra</span>
            <span className="font-semibold text-stone-800">{selectedPhase.responsibleRole}</span>
          </div>
        </div>

        {/* Task Deliverables List */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-stone-900 mb-4 flex items-center gap-2">
            <span>Checklist & Entregáveis da Fase</span>
            <span className="text-xs font-normal text-stone-500">
              ({selectedPhase.tasks.filter(t => t.status === 'done').length} de {selectedPhase.tasks.length} concluídos)
            </span>
          </h4>

          <div className="divide-y divide-stone-100 border border-stone-200/70 rounded-xl overflow-hidden bg-[#fbfbf9]">
            {selectedPhase.tasks.map((task, index) => (
              <div 
                key={task.id}
                className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-white transition-colors"
              >
                <div className="flex items-start sm:items-center gap-3">
                  <div className={`mt-0.5 sm:mt-0 p-1 rounded-full ${
                    task.status === 'done'
                      ? 'bg-emerald-100 text-emerald-700'
                      : task.status === 'in_progress'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-stone-200 text-stone-500'
                  }`}>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className={`text-xs font-medium text-stone-900 ${task.status === 'done' ? 'line-through text-stone-500' : ''}`}>
                      {task.title}
                    </p>
                    <p className="text-[11px] text-stone-500 mt-0.5">
                      Responsável: {task.responsible}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs shrink-0 self-end sm:self-center">
                  <span className="text-stone-400 text-[11px]">
                    {task.deliverableDate}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-medium ${
                    task.status === 'done'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200/60'
                      : task.status === 'in_progress'
                      ? 'bg-amber-50 text-amber-900 border border-amber-200/60'
                      : 'bg-stone-100 text-stone-600'
                  }`}>
                    {task.status === 'done' ? 'Concluído' : task.status === 'in_progress' ? 'Em Execução' : 'A Iniciar'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
