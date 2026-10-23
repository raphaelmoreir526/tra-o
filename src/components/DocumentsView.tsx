import React, { useState } from 'react';
import { DocumentItem } from '../types';
import { 
  Folder, 
  FolderOpen, 
  FileText, 
  Image as ImageIcon, 
  FileCode2, 
  ChevronDown, 
  ChevronRight, 
  Eye, 
  Download,
  Lock,
  CheckCircle2
} from 'lucide-react';

interface DocumentsViewProps {
  documents: DocumentItem[];
  onSelectDocument: (doc: DocumentItem) => void;
}

interface FolderDefinition {
  id: number;
  name: string;
  description: string;
  phaseId: number;
}

export const DocumentsView: React.FC<DocumentsViewProps> = ({
  documents,
  onSelectDocument,
}) => {
  // Folder structure with 05. Documentos Complementares added
  const folders: FolderDefinition[] = [
    { 
      id: 1, 
      name: '01. Briefing & Programa', 
      description: 'Levantamento de necessidades, topografia e alinhamento conceitual',
      phaseId: 1 
    },
    { 
      id: 2, 
      name: '02. Anteprojeto & 3D', 
      description: 'Plantas humanizadas, maquetes 3D e estudos volumétricos',
      phaseId: 2 
    },
    { 
      id: 3, 
      name: '03. Projeto Legal & Prefeitura', 
      description: 'Projetos técnicos legais e pranchas de submissão',
      phaseId: 3 
    },
    { 
      id: 4, 
      name: '04. Projeto Executivo & Eng.', 
      description: 'Caderno executivo, projetos complementares de engenharia e detalhamentos',
      phaseId: 4 
    },
    { 
      id: 5, 
      name: '05. Documentos Complementares', 
      description: 'Sondagem de solo, levantamentos planialtimétricos e regulamento do condomínio',
      phaseId: 5 
    },
  ];

  // Open folders state (by default open folders that have files)
  const [openFolders, setOpenFolders] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true,
    4: false,
    5: true,
  });

  const toggleFolder = (folderId: number) => {
    setOpenFolders(prev => ({
      ...prev,
      [folderId]: !prev[folderId],
    }));
  };

  const expandAll = () => {
    const allOpen: Record<number, boolean> = {};
    folders.forEach(f => { allOpen[f.id] = true; });
    setOpenFolders(allOpen);
  };

  const collapseAll = () => {
    const allClosed: Record<number, boolean> = {};
    folders.forEach(f => { allClosed[f.id] = false; });
    setOpenFolders(allClosed);
  };

  const getFileIcon = (previewType: DocumentItem['previewType']) => {
    switch (previewType) {
      case 'image':
        return <ImageIcon className="w-4 h-4 text-emerald-700 shrink-0" />;
      case 'pdf':
        return <FileText className="w-4 h-4 text-amber-700 shrink-0" />;
      case 'dwg':
        return <FileCode2 className="w-4 h-4 text-blue-700 shrink-0" />;
      default:
        return <FileText className="w-4 h-4 text-stone-600 shrink-0" />;
    }
  };

  return (
    <div className="space-y-4 animate-in fade-in duration-150">
      
      {/* Folder Structure Header */}
      <div className="flex items-center justify-between pb-2 border-b border-stone-200/80">
        <div className="flex items-center gap-2.5">
          <Folder className="w-5 h-5 text-stone-800" />
          <h2 className="text-lg font-medium text-stone-900 tracking-tight">
            Estrutura de Pastas
          </h2>
          <span className="text-xs text-stone-400 font-normal">
            ({folders.length} pastas)
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <button
            onClick={expandAll}
            className="text-stone-500 hover:text-stone-900 font-medium px-2 py-1 rounded hover:bg-stone-100 transition-colors"
          >
            Expandir todas
          </button>
          <span className="text-stone-300">•</span>
          <button
            onClick={collapseAll}
            className="text-stone-500 hover:text-stone-900 font-medium px-2 py-1 rounded hover:bg-stone-100 transition-colors"
          >
            Recolher todas
          </button>
        </div>
      </div>

      {/* Folders List */}
      <div className="space-y-3">
        {folders.map((folder) => {
          const isOpen = !!openFolders[folder.id];
          const folderDocs = documents.filter(doc => doc.phaseId === folder.phaseId);

          return (
            <div 
              key={folder.id}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs transition-all"
            >
              {/* Folder Header Item */}
              <button
                onClick={() => toggleFolder(folder.id)}
                className={`w-full p-4 flex items-center justify-between text-left transition-colors ${
                  isOpen ? 'bg-sky-50/30 border-b border-slate-100' : 'hover:bg-slate-50/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="text-slate-400">
                    {isOpen ? (
                      <ChevronDown className="w-4 h-4 text-sky-700" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    )}
                  </div>

                  <div className="p-2 rounded-xl bg-sky-50 text-sky-800 border border-sky-100">
                    {isOpen ? (
                      <FolderOpen className="w-5 h-5 text-sky-600" />
                    ) : (
                      <Folder className="w-5 h-5 text-sky-700" />
                    )}
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      {folder.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 hidden sm:block">
                      {folder.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-medium">
                    {folderDocs.length} {folderDocs.length === 1 ? 'arquivo' : 'arquivos'}
                  </span>
                </div>
              </button>

              {/* Folder Contents (Files List) */}
              {isOpen && (
                <div className="divide-y divide-slate-100 bg-white">
                  {folderDocs.length === 0 ? (
                    <div className="py-6 px-8 text-center text-xs text-stone-400 italic">
                      Nenhum arquivo inserido nesta pasta até o momento.
                    </div>
                  ) : (
                    folderDocs.map((doc) => (
                      <div
                        key={doc.id}
                        className="p-3.5 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-stone-50/80 transition-colors"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="p-1.5 rounded bg-stone-100">
                            {getFileIcon(doc.previewType)}
                          </div>

                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span 
                                onClick={() => onSelectDocument(doc)}
                                className="text-xs font-medium text-stone-900 truncate hover:text-stone-700 cursor-pointer"
                              >
                                {doc.name}
                              </span>
                              <span className="text-[10px] font-mono text-stone-400 shrink-0">
                                {doc.version}
                              </span>
                              {doc.approved && (
                                <span className="inline-flex items-center gap-0.5 text-[10px] text-emerald-800 font-medium px-1.5 py-0.2 rounded bg-emerald-50 border border-emerald-200 shrink-0">
                                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                  Aprovado
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-stone-400 mt-0.5 truncate max-w-xl">
                              {doc.description || `${doc.category} • Atualizado em ${doc.updatedAt}`}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-end gap-3 shrink-0 text-xs">
                          <span className="text-[11px] text-stone-400 hidden md:inline">
                            {doc.size}
                          </span>
                          <span className="text-[11px] text-stone-400 hidden lg:inline">
                            {doc.updatedAt}
                          </span>

                          <div className="flex items-center gap-1.5 pl-2 sm:border-l border-stone-200">
                            <button
                              onClick={() => onSelectDocument(doc)}
                              className="px-2.5 py-1 text-xs rounded-lg text-stone-700 bg-stone-100 hover:bg-stone-200 transition-colors flex items-center gap-1 font-medium"
                            >
                              <Eye className="w-3.5 h-3.5 text-stone-600" />
                              <span>Abrir</span>
                            </button>

                            <a
                              href={`data:text/plain;charset=utf-8,${encodeURIComponent(`Cópia do arquivo: ${doc.name}`)}`}
                              download={doc.name}
                              className="p-1.5 text-stone-500 hover:text-stone-800 rounded-lg hover:bg-stone-100 transition-colors"
                              title="Baixar arquivo"
                            >
                              <Download className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};
