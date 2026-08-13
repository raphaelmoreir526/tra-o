import React, { useState } from 'react';
import { DocumentItem } from '../types';
import { 
  X, 
  Download, 
  Lock, 
  CheckCircle2, 
  ZoomIn, 
  ZoomOut, 
  FileText, 
  Send, 
  ShieldCheck,
  MessageSquare
} from 'lucide-react';

interface FilePreviewModalProps {
  document: DocumentItem | null;
  onClose: () => void;
  onApproveDocument: (docId: string) => void;
}

export const FilePreviewModal: React.FC<FilePreviewModalProps> = ({
  document,
  onClose,
  onApproveDocument,
}) => {
  if (!document) return null;

  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [commentText, setCommentText] = useState<string>('');
  const [comments, setComments] = useState<string[]>([
    'Ajustar altura do balcão da cozinha para 92cm.',
    'Aprovação prévia da área da piscina concedida.',
  ]);

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      setComments([...comments, commentText]);
      setCommentText('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-stone-200 overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-stone-100 flex items-center justify-between gap-4 bg-[#fbfbf9]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-stone-200/80 flex items-center justify-center text-stone-700">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold text-stone-500">
                  {document.version}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-stone-100 text-stone-700 border border-stone-200">
                  <Lock className="w-3 h-3 text-stone-500" />
                  Somente Leitura
                </span>
              </div>
              <h3 className="text-sm font-semibold text-stone-900 truncate max-w-md">
                {document.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`data:text/plain;charset=utf-8,${encodeURIComponent(`Download de ${document.name}`)}`}
              download={document.name}
              className="p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
              title="Baixar arquivo"
            >
              <Download className="w-5 h-5" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-stone-400 hover:text-stone-800 hover:bg-stone-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Preview Canvas & Comments Drawer */}
        <div className="flex-1 overflow-y-auto p-6 bg-stone-50 grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Visual Canvas Area */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center bg-stone-200/50 rounded-xl p-4 border border-stone-200 relative min-h-[360px]">
            
            {/* Zoom controls */}
            {document.thumbnailUrl && (
              <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-xs p-1 rounded-lg border border-stone-200 text-xs shadow-xs z-10">
                <button 
                  onClick={() => setZoomLevel(Math.max(50, zoomLevel - 25))}
                  className="p-1 hover:bg-stone-100 rounded text-stone-600"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="px-2 font-mono text-stone-700 text-[11px]">{zoomLevel}%</span>
                <button 
                  onClick={() => setZoomLevel(Math.min(200, zoomLevel + 25))}
                  className="p-1 hover:bg-stone-100 rounded text-stone-600"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>
            )}

            {document.thumbnailUrl ? (
              <div className="overflow-auto max-h-[460px] w-full flex items-center justify-center">
                <img
                  src={document.thumbnailUrl}
                  alt={document.name}
                  style={{ transform: `scale(${zoomLevel / 100})` }}
                  className="max-w-full h-auto rounded-lg shadow-sm transition-transform duration-200"
                  referrerPolicy="no-referrer"
                />
              </div>
            ) : (
              <div className="text-center p-8">
                <FileText className="w-16 h-16 text-stone-400 mx-auto mb-3" />
                <p className="text-xs font-semibold text-stone-700">Documento Técnico PDF / DWG</p>
                <p className="text-[11px] text-stone-500 mt-1 max-w-xs">
                  Este arquivo está pré-visualizado em modo de conformidade técnica. Você pode baixar a cópia local vetorial para análise em CAD ou leitores de PDF.
                </p>
              </div>
            )}
          </div>

          {/* Right Column: File Details & Async Feedback */}
          <div className="space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl border border-stone-200 text-xs space-y-2">
                <span className="text-[10px] uppercase font-semibold text-stone-400 block">
                  Metadados do Arquivo
                </span>
                <p><strong className="text-stone-900">Fase:</strong> {document.phaseName}</p>
                <p><strong className="text-stone-900">Tamanho:</strong> {document.size}</p>
                <p><strong className="text-stone-900">Data de Envio:</strong> {document.updatedAt}</p>
                <p><strong className="text-stone-900">Status:</strong> {document.approved ? '✓ Versão Oficial Aprovada' : 'Aguardando Validação'}</p>
              </div>

              {/* Async Feedback Section */}
              <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-3">
                <span className="text-xs font-semibold text-stone-800 flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-stone-600" />
                  <span>Notas & Feedbacks Assíncronos</span>
                </span>

                <div className="max-h-36 overflow-y-auto space-y-2 text-xs">
                  {comments.map((c, i) => (
                    <div key={i} className="p-2 rounded bg-stone-50 text-stone-700 text-[11px]">
                      {c}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleAddComment} className="flex gap-2">
                  <input
                    type="text"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Adicionar nota técnica..."
                    className="w-full p-2 bg-stone-50 border border-stone-200 rounded-lg text-xs focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="p-2 bg-[#2d3732] text-white rounded-lg text-xs hover:bg-stone-800"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            </div>

            {/* Approve Action Button */}
            {!document.approved ? (
              <button
                onClick={() => {
                  onApproveDocument(document.id);
                  onClose();
                }}
                className="w-full py-2.5 px-4 bg-emerald-800 text-white rounded-xl text-xs font-medium hover:bg-emerald-900 transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Aprovar Este Documento</span>
              </button>
            ) : (
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200/60 text-emerald-900 text-xs text-center font-medium flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Documento Aprovado pelo Cliente</span>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
