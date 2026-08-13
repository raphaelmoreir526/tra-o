import React, { useState } from 'react';
import { BriefingData } from '../types';
import { 
  CheckCircle2, 
  Sparkles, 
  Save, 
  ArrowRight, 
  ArrowLeft, 
  Compass, 
  Home, 
  DollarSign, 
  Sliders, 
  Check, 
  FileCheck,
  AlertCircle
} from 'lucide-react';

interface BriefingWizardViewProps {
  initialData: BriefingData;
  onSaveBriefing: (updatedData: BriefingData) => void;
}

export const BriefingWizardView: React.FC<BriefingWizardViewProps> = ({
  initialData,
  onSaveBriefing,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<BriefingData>(initialData);
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  const totalSteps = 4;
  const progressPercent = Math.round((currentStep / totalSteps) * 100);

  const handleChange = (field: keyof BriefingData, value: any) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    setSavedSuccess(false);
  };

  const handleSaveDraft = () => {
    const timestamp = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    const updated = { ...formData, lastSavedAt: `Hoje às ${timestamp}` };
    setFormData(updated);
    onSaveBriefing(updated);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleFinish = () => {
    const updated = { ...formData, isCompleted: true };
    setFormData(updated);
    onSaveBriefing(updated);
    setSavedSuccess(true);
  };

  const stylesList = [
    { name: 'Contemporâneo Minimalista', desc: 'Linhas puras, vãos livres, grandes panos de vidro e concreto aparente.' },
    { name: 'Arquitetura Biofílica', desc: 'Integração intensa com a natureza, madeira nobre, luz e ventilação cruzada.' },
    { name: 'Neoclássico Elegante', desc: 'Simetria, colunas imponentes, pé-direito duplo e molduras clássicas.' },
    { name: 'Industrial de Luxo', desc: 'Vigas metálicas expostas, tijolo aparente refinado e iluminação cênica.' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Top Banner & Step Progress Bar */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
                Questionário Inicial
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                Passo {currentStep} de {totalSteps}
              </span>
            </div>
            <h2 className="text-2xl font-light text-stone-900 mt-1">
              Briefing Estruturado do Projeto
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Mapeamento de hábitos e necessidades da família para orientar o arquiteto na criação do anteprojeto perfeito.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {savedSuccess && (
              <span className="text-xs text-emerald-700 font-medium flex items-center gap-1 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Rascunho Salvo!
              </span>
            )}

            <button
              id="briefing-save-draft-btn"
              onClick={handleSaveDraft}
              className="px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium transition-colors flex items-center gap-1.5"
            >
              <Save className="w-4 h-4" />
              <span>Salvar Rascunho</span>
            </button>
          </div>
        </div>

        {/* Wizard Progress Bar */}
        <div className="mt-6 pt-6 border-t border-stone-100">
          <div className="flex justify-between text-xs font-medium text-stone-600 mb-2">
            <span>
              {currentStep === 1 && 'Etapa 1: Estilo & Conceito'}
              {currentStep === 2 && 'Etapa 2: Programa de Ambientes'}
              {currentStep === 3 && 'Etapa 3: Orçamento & Prazos'}
              {currentStep === 4 && 'Etapa 4: Detalhes & Revisão Final'}
            </span>
            <span className="text-stone-400 font-mono">{progressPercent}% Preenchido</span>
          </div>

          <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#2d3732] transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Step Content Container */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-xs min-h-[420px] flex flex-col justify-between">
        
        {/* STEP 1: Estilo & Conceito */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-in fade-in">
            <div>
              <h3 className="text-lg font-medium text-stone-900 flex items-center gap-2">
                <Compass className="w-5 h-5 text-stone-700" />
                <span>Escolha o Estilo Arquitetônico Dominante</span>
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Selecione o conceito visual que melhor reflete a identidade desejada para a residência.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stylesList.map((st) => {
                const isSelected = formData.style === st.name;
                return (
                  <button
                    key={st.name}
                    onClick={() => handleChange('style', st.name)}
                    className={`p-4 rounded-xl border text-left transition-all relative ${
                      isSelected
                        ? 'bg-[#2d3732] text-white border-[#2d3732] shadow-sm'
                        : 'bg-stone-50/50 text-stone-800 border-stone-200 hover:bg-stone-100/60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold">{st.name}</h4>
                      {isSelected && <Check className="w-4 h-4 text-emerald-400" />}
                    </div>
                    <p className={`text-xs mt-2 leading-relaxed ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                      {st.desc}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-stone-100">
              <label className="block text-xs font-semibold text-stone-700 mb-2">
                Preferência de Orientação Solar & Iluminação Natural
              </label>
              <input
                type="text"
                value={formData.solarOrientationPreference}
                onChange={(e) => handleChange('solarOrientationPreference', e.target.value)}
                className="w-full p-3 rounded-xl border border-stone-200 text-xs text-stone-900 focus:outline-none focus:border-stone-400 bg-stone-50/30"
                placeholder="Ex: Sol da manhã na suíte master, área de lazer ensolarada à tarde."
              />
            </div>
          </div>
        )}

        {/* STEP 2: Programa de Ambientes */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-in fade-in">
            <div>
              <h3 className="text-lg font-medium text-stone-900 flex items-center gap-2">
                <Home className="w-5 h-5 text-stone-700" />
                <span>Programa de Ambientes & Rotina da Família</span>
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Defina o dimensionamento básico e os espaços indispensáveis para o projeto.
              </p>
            </div>

            {/* Counters Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                <label className="block text-xs font-semibold text-stone-700">Número de Suítes</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleChange('suites', Math.max(1, formData.suites - 1))}
                    className="w-8 h-8 rounded-lg bg-white border border-stone-300 text-stone-700 font-bold hover:bg-stone-100"
                  >
                    -
                  </button>
                  <span className="text-base font-semibold text-stone-900">{formData.suites}</span>
                  <button
                    onClick={() => handleChange('suites', formData.suites + 1)}
                    className="w-8 h-8 rounded-lg bg-white border border-stone-300 text-stone-700 font-bold hover:bg-stone-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                <label className="block text-xs font-semibold text-stone-700">Membros da Família</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleChange('familyMembers', Math.max(1, formData.familyMembers - 1))}
                    className="w-8 h-8 rounded-lg bg-white border border-stone-300 text-stone-700 font-bold hover:bg-stone-100"
                  >
                    -
                  </button>
                  <span className="text-base font-semibold text-stone-900">{formData.familyMembers}</span>
                  <button
                    onClick={() => handleChange('familyMembers', formData.familyMembers + 1)}
                    className="w-8 h-8 rounded-lg bg-white border border-stone-300 text-stone-700 font-bold hover:bg-stone-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                <label className="block text-xs font-semibold text-stone-700">Vagas de Garagem</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleChange('parkingSpaces', Math.max(1, formData.parkingSpaces - 1))}
                    className="w-8 h-8 rounded-lg bg-white border border-stone-300 text-stone-700 font-bold hover:bg-stone-100"
                  >
                    -
                  </button>
                  <span className="text-base font-semibold text-stone-900">{formData.parkingSpaces}</span>
                  <button
                    onClick={() => handleChange('parkingSpaces', formData.parkingSpaces + 1)}
                    className="w-8 h-8 rounded-lg bg-white border border-stone-300 text-stone-700 font-bold hover:bg-stone-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Checkbox Toggles for Features */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-stone-700 mb-2">
                Inclusões Especiais Selecionadas
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { key: 'hasPool', label: 'Piscina com Prainha' },
                  { key: 'hasGourmet', label: 'Espaço Gourmet Integrado' },
                  { key: 'hasHomeOffice', label: 'Home Office Privativo' },
                  { key: 'hasWineCellar', label: 'Adega Climatizada' },
                  { key: 'hasAutomation', label: 'Infra de Automação' },
                ].map((item) => {
                  const val = formData[item.key as keyof BriefingData] as boolean;
                  return (
                    <button
                      key={item.key}
                      onClick={() => handleChange(item.key as keyof BriefingData, !val)}
                      className={`p-3 rounded-xl border text-left text-xs font-medium flex items-center justify-between transition-colors ${
                        val 
                          ? 'bg-[#2d3732] text-white border-[#2d3732]' 
                          : 'bg-stone-50 text-stone-700 border-stone-200'
                      }`}
                    >
                      <span>{item.label}</span>
                      {val && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Orçamento & Prazos */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-in fade-in">
            <div>
              <h3 className="text-lg font-medium text-stone-900 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-stone-700" />
                <span>Expectativa de Investimento & Prioridades</span>
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Alinhamento financeiro para garantir a viabilidade construtiva sem surpresas.
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-2">
                Faixa de Investimento Estimada para a Obra Completa
              </label>
              <select
                value={formData.budgetRange}
                onChange={(e) => handleChange('budgetRange', e.target.value)}
                className="w-full p-3 rounded-xl border border-stone-200 text-xs text-stone-900 bg-stone-50/50 focus:outline-none"
              >
                <option value="R$ 1.8M - R$ 2.5M">R$ 1.8M - R$ 2.5M</option>
                <option value="R$ 2.8M - R$ 3.5M">R$ 2.8M - R$ 3.5M (Recomendado para 480m²)</option>
                <option value="R$ 3.5M - R$ 5.0M">R$ 3.5M - R$ 5.0M (Acabamentos de Altíssimo Padrão)</option>
                <option value="Acima de R$ 5.0M">Acima de R$ 5.0M</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-2">
                Palavras-Chave e Materiais Preferidos
              </label>
              <div className="flex flex-wrap gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs">
                {formData.inspirationKeywords.map((kw, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 font-medium">
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: Detalhes & Revisão Final */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-in fade-in">
            <div>
              <h3 className="text-lg font-medium text-stone-900 flex items-center gap-2">
                <Sliders className="w-5 h-5 text-stone-700" />
                <span>Detalhes Finais & Observações do Cliente</span>
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Descreva desejos específicos ou particularidades que você gostaria que o arquiteto levasse em consideração.
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-2">
                Observações Adicionais e Pedidos Especiais
              </label>
              <textarea
                rows={4}
                value={formData.specialRequests}
                onChange={(e) => handleChange('specialRequests', e.target.value)}
                className="w-full p-3 rounded-xl border border-stone-200 text-xs text-stone-900 bg-stone-50/50 focus:outline-none focus:border-stone-400"
                placeholder="Ex: Espaço para adega climatizada de 150 garrafas, iluminação noturna cênica na piscina..."
              />
            </div>

            {/* Summary Box */}
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-2">
              <span className="font-semibold text-stone-800 block text-xs uppercase tracking-wider">
                Resumo do Briefing
              </span>
              <div className="grid grid-cols-2 gap-2 text-stone-600">
                <p>Estilo: <strong className="text-stone-900">{formData.style}</strong></p>
                <p>Suítes: <strong className="text-stone-900">{formData.suites}</strong></p>
                <p>Garagem: <strong className="text-stone-900">{formData.parkingSpaces} vagas</strong></p>
                <p>Faixa de Orçamento: <strong className="text-stone-900">{formData.budgetRange}</strong></p>
              </div>
            </div>
          </div>
        )}

        {/* Step Navigation Controls */}
        <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between">
          <button
            id="briefing-prev-step-btn"
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
            className="px-4 py-2 rounded-xl text-xs font-medium text-stone-600 hover:text-stone-900 disabled:opacity-30 disabled:hover:text-stone-600 transition-colors flex items-center gap-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Anterior</span>
          </button>

          {currentStep < totalSteps ? (
            <button
              id="briefing-next-step-btn"
              onClick={() => setCurrentStep(currentStep + 1)}
              className="px-5 py-2.5 bg-[#2d3732] text-white rounded-xl text-xs font-medium hover:bg-stone-800 transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <span>Próximo Passo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              id="briefing-finish-btn"
              onClick={handleFinish}
              className="px-5 py-2.5 bg-emerald-800 text-white rounded-xl text-xs font-medium hover:bg-emerald-900 transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <FileCheck className="w-4 h-4" />
              <span>Finalizar & Concluir Briefing</span>
            </button>
          )}
        </div>

      </div>

    </div>
  );
};
