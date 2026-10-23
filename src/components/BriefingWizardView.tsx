import React, { useState, useEffect } from 'react';
import { BriefingData, DisciplineAnswers } from '../types';
import { disciplinesData, briefingMeta } from '../data/briefingDisciplinesData';
import { 
  Building, 
  Droplets, 
  Zap, 
  PhoneCall, 
  CloudLightning, 
  Bell, 
  Wind, 
  Flame, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  FileText, 
  Check, 
  Copy, 
  ChevronRight, 
  Info, 
  FolderCheck, 
  SlidersHorizontal, 
  X,
  Sparkles
} from 'lucide-react';

interface BriefingWizardViewProps {
  initialData: BriefingData;
  onSaveBriefing: (updatedData: BriefingData) => void;
}

export const BriefingWizardView: React.FC<BriefingWizardViewProps> = ({
  initialData,
  onSaveBriefing,
}) => {
  const allDisciplineIds = disciplinesData.map(d => d.id);
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>(
    initialData.selectedDisciplines && initialData.selectedDisciplines.length > 0
      ? initialData.selectedDisciplines
      : allDisciplineIds
  );

  const [activeDisciplineId, setActiveDisciplineId] = useState<string>(() => {
    if (initialData.selectedDisciplines && initialData.selectedDisciplines.length > 0) {
      return initialData.selectedDisciplines[0];
    }
    return 'arq';
  });

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<DisciplineAnswers>(initialData.disciplineAnswers || {});
  const [showSummary, setShowSummary] = useState<boolean>(false);
  const [showDisciplineModal, setShowDisciplineModal] = useState<boolean>(false);
  const [savedToast, setSavedToast] = useState<boolean>(false);
  const [copiedToast, setCopiedToast] = useState<boolean>(false);

  useEffect(() => {
    if (initialData.disciplineAnswers) {
      setAnswers(initialData.disciplineAnswers);
    }
    if (initialData.selectedDisciplines && initialData.selectedDisciplines.length > 0) {
      setSelectedDisciplines(initialData.selectedDisciplines);
    }
  }, [initialData]);

  const activeDisciplinesList = disciplinesData.filter(d => selectedDisciplines.includes(d.id));
  const currentDiscipline = activeDisciplinesList.find(d => d.id === activeDisciplineId) || activeDisciplinesList[0] || disciplinesData[0];
  const currentQuestion = currentDiscipline.questions[currentQuestionIndex] || currentDiscipline.questions[0];

  const getDisciplineAnsweredCount = (disciplineId: string) => {
    const disc = disciplinesData.find(d => d.id === disciplineId);
    if (!disc) return 0;
    return disc.questions.filter(q => !!answers[q.id]?.selectedOptionId).length;
  };

  const totalQuestionsInSelected = activeDisciplinesList.reduce((acc, d) => acc + d.questions.length, 0);
  const totalAnsweredInSelected = activeDisciplinesList.reduce((acc, d) => acc + getDisciplineAnsweredCount(d.id), 0);
  const progressPercent = totalQuestionsInSelected > 0 
    ? Math.round((totalAnsweredInSelected / totalQuestionsInSelected) * 100) 
    : 0;

  const getDisciplineIcon = (id: string, className = "w-4 h-4") => {
    switch (id) {
      case 'arq':
        return <Building className={className} />;
      case 'hid':
        return <Droplets className={className} />;
      case 'ele':
        return <Zap className={className} />;
      case 'tel':
        return <PhoneCall className={className} />;
      case 'spda':
        return <CloudLightning className={className} />;
      case 'sdai':
        return <Bell className={className} />;
      case 'clim':
        return <Wind className={className} />;
      case 'gas':
        return <Flame className={className} />;
      default:
        return <FileText className={className} />;
    }
  };

  const triggerAutoSave = (updatedAnswers: DisciplineAnswers, updatedSelectedDisciplines?: string[]) => {
    const timestamp = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    const selected = updatedSelectedDisciplines || selectedDisciplines;
    const updatedData: BriefingData = {
      ...initialData,
      selectedDisciplines: selected,
      disciplineAnswers: updatedAnswers,
      lastSavedAt: `Hoje às ${timestamp}`,
      isCompleted: totalAnsweredInSelected >= totalQuestionsInSelected && totalQuestionsInSelected > 0,
    };
    onSaveBriefing(updatedData);
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 2000);
  };

  const handleSelectOption = (questionId: string, optionId: string) => {
    const newAnswers = {
      ...answers,
      [questionId]: {
        ...answers[questionId],
        selectedOptionId: optionId,
      },
    };
    setAnswers(newAnswers);
    triggerAutoSave(newAnswers);
  };

  const handleCustomTextChange = (questionId: string, text: string) => {
    const current = answers[questionId] || { selectedOptionId: '' };
    const newAnswers = {
      ...answers,
      [questionId]: {
        ...current,
        customText: text,
      },
    };
    setAnswers(newAnswers);
    triggerAutoSave(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentDiscipline.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const currentDiscIndex = activeDisciplinesList.findIndex(d => d.id === currentDiscipline.id);
      if (currentDiscIndex < activeDisciplinesList.length - 1) {
        setActiveDisciplineId(activeDisciplinesList[currentDiscIndex + 1].id);
        setCurrentQuestionIndex(0);
      } else {
        setShowSummary(true);
      }
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSelectDisciplineTab = (discId: string) => {
    setActiveDisciplineId(discId);
    setCurrentQuestionIndex(0);
    setShowSummary(false);
  };

  const handleToggleDiscipline = (discId: string) => {
    let updated: string[];
    if (selectedDisciplines.includes(discId)) {
      if (selectedDisciplines.length <= 1) return;
      updated = selectedDisciplines.filter(id => id !== discId);
    } else {
      updated = allDisciplineIds.filter(id => id === discId || selectedDisciplines.includes(id));
    }
    setSelectedDisciplines(updated);
    if (!updated.includes(activeDisciplineId)) {
      setActiveDisciplineId(updated[0]);
      setCurrentQuestionIndex(0);
    }
    triggerAutoSave(answers, updated);
  };

  const handleSelectAllDisciplines = () => {
    setSelectedDisciplines(allDisciplineIds);
    triggerAutoSave(answers, allDisciplineIds);
  };

  const handleCopySummary = () => {
    let summaryText = `RESUMO DO BRIEFING TÉCNICO - TRAÇO ENGENHARIA\nEdifício Residencial Multifamiliar\nData: ${new Date().toLocaleDateString('pt-BR')}\nDisciplinas Selecionadas: ${activeDisciplinesList.length} de ${disciplinesData.length}\nProgresso: ${totalAnsweredInSelected}/${totalQuestionsInSelected} respondidas (${progressPercent}%)\n\n`;

    activeDisciplinesList.forEach(disc => {
      summaryText += `=== ${disc.name.toUpperCase()} ===\n`;
      disc.questions.forEach((q, idx) => {
        const ans = answers[q.id];
        const selectedOpt = q.options.find(o => o.id === ans?.selectedOptionId);
        let val = 'Não respondido';
        if (selectedOpt) {
          val = selectedOpt.label;
          if (selectedOpt.isCustom && ans?.customText) {
            val += `: "${ans.customText}"`;
          }
        }
        summaryText += `${idx + 1}. ${q.title}: ${val}\n`;
      });
      summaryText += `\n`;
    });

    navigator.clipboard.writeText(summaryText);
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 3000);
  };

  const currentAnswer = answers[currentQuestion.id];
  const isLastQuestionInDiscipline = currentQuestionIndex === currentDiscipline.questions.length - 1;
  const isLastDiscipline = activeDisciplinesList.findIndex(d => d.id === currentDiscipline.id) === activeDisciplinesList.length - 1;

  return (
    <div className="space-y-6 animate-in fade-in duration-150">
      
      {/* Top Banner & HIG Navigation Toolbar */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-800 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              Traço Engenharia • {briefingMeta.titulo}
            </span>
            <span className="inline-flex items-center text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-medium">
              v{briefingMeta.versao}
            </span>
            {savedToast && (
              <span className="inline-flex items-center gap-1 text-[10px] text-sky-900 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200 animate-in fade-in">
                <Check className="w-3 h-3 text-sky-600" />
                Salvo automaticamente
              </span>
            )}
          </div>
          <h2 className="text-xl sm:text-2xl font-light text-slate-900 mt-1 tracking-tight">
            Questionário de Briefing Multidisciplinar
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5 max-w-2xl">
            Padrão Human Interface Guidelines: navegação limpa, tipografia clara e respostas com opções dinâmicas.
          </p>
        </div>

        {/* Action Controls & Progress */}
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          
          {/* Discipline Selector Button (Apple Inset Pill) */}
          <button
            id="choose-disciplines-btn"
            onClick={() => setShowDisciplineModal(true)}
            className="px-3.5 py-2.5 rounded-xl text-xs font-semibold border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 transition-colors flex items-center gap-2 shadow-2xs"
            title="Escolher quais disciplinas você deseja responder"
          >
            <SlidersHorizontal className="w-4 h-4 text-sky-600" />
            <span>
              Disciplinas ({selectedDisciplines.length} de {disciplinesData.length})
            </span>
          </button>

          {/* Progress Indicator Card */}
          <div className="bg-slate-50/90 px-4 py-2 rounded-2xl border border-slate-200/80 text-xs text-right min-w-[160px]">
            <div className="flex justify-between items-center mb-1 text-[11px] text-slate-500">
              <span className="font-medium">Conclusão</span>
              <strong className="text-slate-900 font-semibold">{progressPercent}%</strong>
            </div>
            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-sky-600 transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-[10px] text-slate-400 block mt-1">
              {totalAnsweredInSelected} de {totalQuestionsInSelected} perguntas
            </span>
          </div>

          {/* Summary / Form Toggle */}
          <button
            id="toggle-summary-btn"
            onClick={() => setShowSummary(!showSummary)}
            className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 ${
              showSummary 
                ? 'bg-[#071d33] text-white border-[#071d33] shadow-xs' 
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 shadow-2xs'
            }`}
          >
            <FolderCheck className="w-4 h-4 text-sky-400" />
            <span>{showSummary ? 'Voltar ao Questionário' : 'Ver Resumo'}</span>
          </button>
        </div>
      </div>

      {/* DISCIPLINE CHOOSER MODAL (HIG Inset Grouped Style) */}
      {showDisciplineModal && (
        <div className="fixed inset-0 z-50 bg-[#071d33]/50 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-sky-50 text-sky-800">
                  <SlidersHorizontal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Disciplinas do Briefing
                  </h3>
                  <p className="text-xs text-slate-500">
                    Selecione as disciplinas que você deseja responder agora
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowDisciplineModal(false)}
                className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center justify-between text-xs px-1">
              <span className="text-slate-500">
                {selectedDisciplines.length} de {disciplinesData.length} disciplinas selecionadas
              </span>
              <button
                onClick={handleSelectAllDisciplines}
                className="text-sky-700 hover:text-sky-900 font-semibold"
              >
                Selecionar Todas
              </button>
            </div>

            {/* Disciplines Grouped List */}
            <div className="space-y-1.5 max-h-[360px] overflow-y-auto pr-1">
              {disciplinesData.map((disc) => {
                const isChecked = selectedDisciplines.includes(disc.id);
                const answered = getDisciplineAnsweredCount(disc.id);

                return (
                  <button
                    key={disc.id}
                    onClick={() => handleToggleDiscipline(disc.id)}
                    className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all ${
                      isChecked 
                        ? 'bg-sky-50/50 border-sky-200 text-slate-900' 
                        : 'bg-white border-slate-200/70 text-slate-400 hover:bg-slate-50/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-lg flex items-center justify-center border transition-colors ${
                        isChecked ? 'bg-[#071d33] border-[#071d33] text-white' : 'border-slate-300 bg-white'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5 text-sky-400" />}
                      </div>

                      <div className={isChecked ? 'text-sky-800' : 'text-slate-400'}>
                        {getDisciplineIcon(disc.id, "w-4 h-4")}
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className={`text-xs font-semibold ${isChecked ? 'text-slate-900' : 'text-slate-400'}`}>
                            {disc.name}
                          </span>
                          <span className="text-[10px] text-slate-400">
                            (15 perguntas)
                          </span>
                        </div>
                      </div>
                    </div>

                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                      answered === disc.questions.length
                        ? 'bg-emerald-100 text-emerald-800 font-semibold'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {answered}/{disc.questions.length} respondidas
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-end">
              <button
                onClick={() => setShowDisciplineModal(false)}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#071d33] text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors shadow-xs"
              >
                Confirmar Seleção ({selectedDisciplines.length} ativas)
              </button>
            </div>

          </div>
        </div>
      )}

      {/* APPLE HIG SEGMENTED DISCIPLINE TABS */}
      <div className="bg-white rounded-2xl p-1.5 sm:p-2 border border-slate-200/80 shadow-xs overflow-x-auto">
        <div className="flex items-center gap-1 min-w-max">
          {activeDisciplinesList.map((disc) => {
            const isSelected = disc.id === currentDiscipline.id && !showSummary;
            const answeredCount = getDisciplineAnsweredCount(disc.id);
            const isFullyAnswered = answeredCount === disc.questions.length;

            return (
              <button
                key={disc.id}
                id={`disc-tab-${disc.id}`}
                onClick={() => handleSelectDisciplineTab(disc.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-[#071d33] text-white shadow-xs font-semibold'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <div className={isSelected ? 'text-sky-400' : 'text-slate-400'}>
                  {getDisciplineIcon(disc.id)}
                </div>

                <span>{disc.name}</span>

                <span className={`text-[10px] px-1.5 py-0.2 rounded-md font-mono ${
                  isSelected
                    ? 'bg-white/15 text-white'
                    : isFullyAnswered
                    ? 'bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200/60'
                    : 'bg-slate-100 text-slate-500'
                }`}>
                  {isFullyAnswered ? '✓' : `${answeredCount}/${disc.questions.length}`}
                </span>
              </button>
            );
          })}

          <button
            onClick={() => setShowDisciplineModal(true)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors border border-dashed border-slate-300 ml-1"
            title="Adicionar ou remover disciplinas"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-sky-600" />
            <span>Filtro ({selectedDisciplines.length}/8)</span>
          </button>
        </div>
      </div>

      {/* QUESTIONNAIRE CARD OR CONSOLIDATED SUMMARY */}
      {!showSummary ? (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs min-h-[480px] flex flex-col justify-between animate-in fade-in">
          
          <div>
            {/* Header: Discipline indicator, Step Counter, Question Title */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-[#071d33] text-white border border-sky-400/20 shadow-xs">
                  {getDisciplineIcon(currentDiscipline.id, "w-5 h-5 text-sky-400")}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase tracking-wider text-sky-900 font-semibold">
                      {currentDiscipline.name}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs text-slate-500 font-medium">
                      Pergunta {currentQuestionIndex + 1} de {currentDiscipline.questions.length}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mt-0.5 tracking-tight">
                    {currentQuestion.title}
                  </h3>
                </div>
              </div>

              {/* HIG Stepper Dots */}
              <div className="flex flex-wrap items-center gap-1 max-w-xs justify-end">
                {currentDiscipline.questions.map((q, qIndex) => {
                  const isCurrent = qIndex === currentQuestionIndex;
                  const isAnswered = !!answers[q.id]?.selectedOptionId;

                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentQuestionIndex(qIndex)}
                      title={`Pergunta ${qIndex + 1}: ${q.title}`}
                      className={`h-2 rounded-full transition-all ${
                        isCurrent 
                          ? 'w-6 bg-[#071d33]' 
                          : isAnswered 
                          ? 'w-2 bg-sky-500' 
                          : 'w-2 bg-slate-200 hover:bg-slate-300'
                      }`}
                    />
                  );
                })}
              </div>
            </div>

            {/* Apple HIG Callout Box for Dica Técnica */}
            {currentQuestion.hint && (
              <div className="mt-4 p-3.5 rounded-2xl bg-sky-50/70 border border-sky-200/70 text-xs text-sky-950 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <strong className="font-semibold text-sky-950">Dica técnica da Traço:</strong> {currentQuestion.hint}
                </div>
              </div>
            )}

            {/* Alternatives (Apple Inset Grouped Selectable List) */}
            <div className="mt-6 space-y-2.5">
              {currentQuestion.options.map((option) => {
                const isSelected = currentAnswer?.selectedOptionId === option.id;

                return (
                  <div key={option.id} className="space-y-2">
                    <button
                      id={`opt-${option.id}`}
                      onClick={() => handleSelectOption(currentQuestion.id, option.id)}
                      className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                        isSelected
                          ? 'bg-sky-50/70 border-sky-400 text-slate-950 shadow-xs ring-1 ring-sky-300/60'
                          : 'bg-slate-50/50 text-slate-800 border-slate-200/80 hover:bg-slate-100/70 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        {/* Apple HIG Radio Icon */}
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                          isSelected 
                            ? 'border-sky-600 bg-sky-600 text-white' 
                            : 'border-slate-300 bg-white'
                        }`}>
                          {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>

                        <span className={`text-xs sm:text-sm ${isSelected ? 'font-semibold text-slate-900' : 'font-medium text-slate-700'}`}>
                          {option.label}
                        </span>
                      </div>

                      {isSelected && (
                        <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                      )}
                    </button>

                    {/* Custom Textarea for "Outra resposta (descreva)" */}
                    {option.isCustom && isSelected && (
                      <div className="pl-6 pt-1 animate-in fade-in duration-150">
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                          Descreva com detalhes a sua especificação personalizada:
                        </label>
                        <input
                          type="text"
                          value={currentAnswer?.customText || ''}
                          onChange={(e) => handleCustomTextChange(currentQuestion.id, e.target.value)}
                          placeholder="Digite aqui sua resposta personalizada..."
                          className="w-full p-3 rounded-xl border border-sky-300 text-xs text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 shadow-2xs"
                          autoFocus
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stepper Navigation Toolbar */}
          <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={handlePrevQuestion}
              disabled={currentQuestionIndex === 0}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 disabled:opacity-30 disabled:hover:text-slate-600 transition-colors flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Anterior</span>
            </button>

            <button
              id="next-question-btn"
              onClick={handleNextQuestion}
              className="px-6 py-2.5 bg-[#071d33] text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-xs"
            >
              <span>
                {isLastQuestionInDiscipline 
                  ? (isLastDiscipline ? 'Finalizar e Ver Resumo' : 'Próxima Disciplina')
                  : 'Próxima Pergunta'}
              </span>
              <ArrowRight className="w-4 h-4 text-sky-400" />
            </button>
          </div>

        </div>
      ) : (
        /* CONSOLIDATED SUMMARY (APPLE HIG INSET CARDS) */
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6 animate-in fade-in">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs uppercase tracking-wider text-sky-800 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                Traço Engenharia • Visão Geral Consolidada
              </span>
              <h3 className="text-xl font-semibold text-slate-900 mt-1 tracking-tight">
                Resumo Técnico das Disciplinas Selecionadas
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Exibindo respostas de {activeDisciplinesList.length} disciplinas ({totalAnsweredInSelected} de {totalQuestionsInSelected} perguntas respondidas).
              </p>
            </div>

            <div className="flex items-center gap-2">
              {copiedToast && (
                <span className="text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg font-medium flex items-center gap-1 animate-in fade-in">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  Copiado!
                </span>
              )}
              <button
                onClick={handleCopySummary}
                className="px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <Copy className="w-3.5 h-3.5 text-sky-600" />
                <span>Copiar Resumo Técnico</span>
              </button>
            </div>
          </div>

          {/* Grid of Selected Disciplines */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeDisciplinesList.map((disc) => {
              const answeredCount = getDisciplineAnsweredCount(disc.id);
              const isFullyAnswered = answeredCount === disc.questions.length;

              return (
                <div 
                  key={disc.id}
                  className="bg-slate-50/70 rounded-2xl p-4 border border-slate-200/80 flex flex-col justify-between shadow-2xs"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200/60">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-xl bg-[#071d33] text-white">
                          {getDisciplineIcon(disc.id, "w-3.5 h-3.5 text-sky-400")}
                        </div>
                        <h4 className="text-xs font-semibold text-slate-900">{disc.name}</h4>
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                        isFullyAnswered ? 'bg-emerald-100 text-emerald-800 font-semibold' : 'bg-slate-200 text-slate-600'
                      }`}>
                        {answeredCount}/{disc.questions.length}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs max-h-72 overflow-y-auto pr-1">
                      {disc.questions.map((q, idx) => {
                        const ans = answers[q.id];
                        const opt = q.options.find(o => o.id === ans?.selectedOptionId);

                        return (
                          <div key={q.id} className="text-[11px] leading-tight pb-1.5 border-b border-slate-200/40 last:border-0">
                            <span className="text-slate-500 block truncate font-medium">
                              {idx + 1}. {q.title}
                            </span>
                            {opt ? (
                              <span className="text-slate-900 font-semibold block mt-0.5">
                                • {opt.label}
                                {opt.isCustom && ans?.customText && (
                                  <span className="text-sky-700 block italic ml-2">
                                    "{ans.customText}"
                                  </span>
                                )}
                              </span>
                            ) : (
                              <span className="text-slate-400 italic block mt-0.5">• Não respondido</span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/60">
                    <button
                      onClick={() => handleSelectDisciplineTab(disc.id)}
                      className="w-full py-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-[11px] font-semibold text-slate-800 transition-colors flex items-center justify-center gap-1 shadow-2xs"
                    >
                      <span>Preencher / Editar {disc.name}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-sky-600" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
};
