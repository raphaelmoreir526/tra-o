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
    <div className="fixed inset-0 z-50 bg-[#071d33]/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-sky-50 text-sky-800 flex items-center justify-center border border-sky-200/60">
            <FileCheck2 className="w-5 h-5 text-sky-600" />
          </div>
          <div>
            <span className="text-[10px] uppercase font-semibold text-sky-800 tracking-wider">
              Traço Engenharia • Validação Digital
            </span>
            <h3 className="text-lg font-semibold text-slate-900">
              Aprovação Oficial do {phaseName}
            </h3>
          </div>
        </div>

        <p className="text-xs text-slate-600 mt-3 leading-relaxed">
          Ao confirmar a aprovação, você valida as plantas, volumetrias 3D e memoriais descritivos da etapa atual, autorizando o início dos trabalhos técnicos da próxima fase sem necessidade de reuniões presenciais.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Observações ou Ressalvas Específicas (Opcional)
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ex: Aprovado conforme apresentado. Manter os brises amadeirados na fachada."
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
            />
          </div>

          <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
            <input
              type="checkbox"
              id="terms-check"
              checked={agreedTerms}
              onChange={(e) => setAgreedTerms(e.target.checked)}
              className="mt-0.5 rounded text-sky-600 focus:ring-sky-500"
            />
            <label htmlFor="terms-check" className="text-[11px] text-slate-600 leading-tight">
              Declaro que revisei os documentos anexos no Drive e concordo com as soluções técnicas da Traço Engenharia.
            </label>
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Cancelar
            </button>

            <button
              type="submit"
              disabled={!agreedTerms}
              className="px-5 py-2.5 bg-[#071d33] text-white rounded-xl text-xs font-semibold hover:bg-slate-800 disabled:opacity-40 transition-colors shadow-xs flex items-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>Assinar & Confirmar Aprovação</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
