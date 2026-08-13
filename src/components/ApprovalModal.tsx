import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  FileCheck2, 
  ShieldCheck, 
  Sparkles,
  Lock
} from 'lucide-react';

interface ApprovalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmApproval: (notes: string) => void;
  phaseName?: string;
}

export const ApprovalModal: React.FC<ApprovalModalProps> = ({
  isOpen,
  onClose,
  onConfirmApproval,
  phaseName = 'Anteprojeto (Fase 02)',
}) => {
  if (!isOpen) return null;

  const [notes, setNotes] = useState<string>('');
  const [agreedTerms, setAgreedTerms] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (agreedTerms) {
      onConfirmApproval(notes);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-stone-400 hover:text-stone-800 hover:bg-stone-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <FileCheck2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] uppercase font-semibold text-emerald-800 tracking-wider">
              Validação Digital de Entrega
            </span>
            <h3 className="text-lg font-medium text-stone-900">
              Aprovação Oficial do {phaseName}
            </h3>
          </div>
        </div>

        <p className="text-xs text-stone-600 mt-3 leading-relaxed">
          Ao confirmar a aprovação, você valida as plantas, volumetrias 3D e memorial descritivo da fase atual, autorizando o início dos trabalhos técnicos da próxima etapa sem necessidade de reuniões presenciais.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1.5">
              Observações ou Ressalvas Específicas (Opcional)
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ex: Aprovado conforme apresentado. Manter os acabamentos amadeirados na fachada."
              className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-none focus:border-stone-400"
            />
          </div>

          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200/80">
            <input
              type="checkbox"
              id="terms-check"
              checked={agreedTerms}
              onChange={(e) => setAgreedTerms(e.target.checked)}
              className="mt-0.5 rounded text-[#2d3732] focus:ring-stone-500"
            />
            <label htmlFor="terms-check" className="text-[11px] text-stone-600 leading-tight">
              Declaro que revisei os documentos anexos no Drive e concordo com as soluções arquitetônicas apresentadas.
            </label>
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
            >
              Cancelar
            </button>

            <button
              type="submit"
              disabled={!agreedTerms}
              className="px-5 py-2.5 bg-[#2d3732] text-white rounded-xl text-xs font-medium hover:bg-stone-800 disabled:opacity-40 transition-colors shadow-xs flex items-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Assinar & Confirmar Aprovação</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
