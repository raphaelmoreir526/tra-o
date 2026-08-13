import React, { useState } from 'react';
import { DocumentItem, DocumentCategory } from '../types';
import { 
  Folder, 
  FileText, 
  Eye, 
  Download, 
  Lock, 
  Search, 
  Filter, 
  FileCode2, 
  Image as ImageIcon, 
  FileCheck2, 
  ShieldAlert,
  FolderOpen
} from 'lucide-react';

interface DocumentsViewProps {
  documents: DocumentItem[];
  onSelectDocument: (doc: DocumentItem) => void;
}

export const DocumentsView: React.FC<DocumentsViewProps> = ({
  documents,
  onSelectDocument,
}) => {
  const [selectedFolder, setSelectedFolder] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories: DocumentCategory[] = [
    'Briefing', 
    'Plantas', 
    '3D Render', 
    'Projeto Legal', 
    'Projetos Complementares',
    'Memoriais',
    'CAD'
  ];

  const folders = [
    { id: 'All', name: 'Todos os Arquivos', count: documents.length },
    { id: 'Phase1', name: '📁 01. Briefing & Programa', phaseId: 1, count: documents.filter(d => d.phaseId === 1).length },
    { id: 'Phase2', name: '📁 02. Anteprojeto & 3D', phaseId: 2, count: documents.filter(d => d.phaseId === 2).length },
    { id: 'Phase3', name: '📁 03. Projeto Legal & Prefeitura', phaseId: 3, count: documents.filter(d => d.phaseId === 3).length },
    { id: 'Phase4', name: '📁 04. Projeto Executivo & Eng.', phaseId: 4, count: documents.filter(d => d.phaseId === 4).length },
  ];

  const filteredDocs = documents.filter((doc) => {
    // Folder filter
    if (selectedFolder === 'Phase1' && doc.phaseId !== 1) return false;
    if (selectedFolder === 'Phase2' && doc.phaseId !== 2) return false;
    if (selectedFolder === 'Phase3' && doc.phaseId !== 3) return false;
    if (selectedFolder === 'Phase4' && doc.phaseId !== 4) return false;

    // Category filter
    if (selectedCategory !== 'All' && doc.category !== selectedCategory) return false;

    // Search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return (
        doc.name.toLowerCase().includes(q) ||
        doc.description?.toLowerCase().includes(q) ||
        doc.category.toLowerCase().includes(q)
      );
    }

    return true;
  });

  const getFileIcon = (previewType: DocumentItem['previewType']) => {
    switch (previewType) {
      case 'image':
        return <ImageIcon className="w-5 h-5 text-emerald-700" />;
      case 'pdf':
        return <FileText className="w-5 h-5 text-amber-700" />;
      case 'dwg':
        return <FileCode2 className="w-5 h-5 text-blue-700" />;
      default:
        return <FileText className="w-5 h-5 text-stone-600" />;
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Top Banner & Security Status */}
      <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
              Drive Centralizado do Projeto
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded bg-stone-100 text-stone-700 border border-stone-200">
              <Lock className="w-3 h-3 text-stone-500" />
              Somente Leitura (Protegido)
            </span>
          </div>
          <h2 className="text-2xl font-light text-stone-900 mt-1">
            Repositório Oficial de Documentos
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Acesse as versões finais de plantas, relatórios e imagens 3D. Todos os arquivos são mantidos em modo de leitura com controle rígido de versionamento.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[#fbfbf9] px-3.5 py-2 rounded-xl border border-stone-200 text-xs text-stone-600 shrink-0">
          <ShieldAlert className="w-4 h-4 text-stone-500" />
          <span>Controle de Versão Ativo</span>
        </div>
      </div>

      {/* Main Drive Layout: Folders Sidebar + Documents Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Left Column: Folders Navigation */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white rounded-2xl p-4 border border-stone-200/80 shadow-xs">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3 px-2">
              Estrutura de Pastas
            </h3>
            
            <div className="space-y-1">
              {folders.map((folder) => {
                const isActive = selectedFolder === folder.id;
                return (
                  <button
                    key={folder.id}
                    id={`folder-btn-${folder.id}`}
                    onClick={() => setSelectedFolder(folder.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-[#2d3732] text-white'
                        : 'text-stone-700 hover:bg-stone-100/80'
                    }`}
                  >
                    <span className="truncate">{folder.name}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-500'
                    }`}>
                      {folder.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Filter Categories */}
          <div className="bg-white rounded-2xl p-4 border border-stone-200/80 shadow-xs">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3 px-2">
              Filtrar por Categoria
            </h3>
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                  selectedCategory === 'All'
                    ? 'bg-stone-800 text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                Todas
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                    selectedCategory === cat
                      ? 'bg-stone-800 text-white'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Search Bar & Documents Grid */}
        <div className="lg:col-span-3 space-y-4">
          
          {/* Search Bar */}
          <div className="bg-white rounded-xl p-3 border border-stone-200/80 shadow-xs flex items-center gap-3">
            <Search className="w-4 h-4 text-stone-400 ml-1" />
            <input
              id="document-search-input"
              type="text"
              placeholder="Buscar por nome do arquivo, termo de busca ou descrição..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs text-stone-800 placeholder-stone-400 focus:outline-none bg-transparent"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="text-xs text-stone-400 hover:text-stone-700 px-2"
              >
                Limpar
              </button>
            )}
          </div>

          {/* Documents Cards List */}
          {filteredDocs.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-stone-200/80">
              <FolderOpen className="w-12 h-12 text-stone-300 mx-auto mb-3" />
              <h3 className="text-sm font-medium text-stone-800">Nenhum arquivo encontrado</h3>
              <p className="text-xs text-stone-500 mt-1">
                Tente ajustar os termos de busca ou mudar a pasta selecionada.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredDocs.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-white rounded-2xl border border-stone-200/80 p-4 hover:border-stone-300 transition-all flex flex-col justify-between group shadow-xs hover:shadow-sm"
                >
                  <div>
                    {/* Top file badges */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-stone-100 text-stone-700">
                          {getFileIcon(doc.previewType)}
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-semibold text-stone-400 block">
                            {doc.category}
                          </span>
                          <span className="text-xs font-mono text-stone-500">
                            {doc.version}
                          </span>
                        </div>
                      </div>

                      {/* Read-Only & Approved Badge */}
                      <div className="flex items-center gap-1.5">
                        <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-medium border border-stone-200">
                          <Lock className="w-3 h-3 text-stone-400" />
                          Leitura
                        </span>
                        {doc.approved && (
                          <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-medium border border-emerald-200">
                            <FileCheck2 className="w-3 h-3 text-emerald-600" />
                            Aprovado
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Thumbnail preview if available */}
                    {doc.thumbnailUrl && (
                      <div 
                        onClick={() => onSelectDocument(doc)}
                        className="relative h-36 rounded-xl overflow-hidden mb-3 border border-stone-100 cursor-pointer group-hover:opacity-95 transition-opacity"
                      >
                        <img 
                          src={doc.thumbnailUrl} 
                          alt={doc.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-stone-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-medium gap-1.5">
                          <Eye className="w-4 h-4" />
                          <span>Visualizar em Alta Definição</span>
                        </div>
                      </div>
                    )}

                    {/* File Title & Description */}
                    <h4 
                      onClick={() => onSelectDocument(doc)}
                      className="text-xs font-medium text-stone-900 hover:text-stone-700 cursor-pointer line-clamp-1"
                    >
                      {doc.name}
                    </h4>

                    <p className="text-[11px] text-stone-500 mt-1 line-clamp-2 leading-relaxed">
                      {doc.description}
                    </p>
                  </div>

                  {/* Card Footer: Metadata & Actions */}
                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="text-[10px] text-stone-400">
                      {doc.size} • Atualizado em {doc.updatedAt}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        id={`view-doc-${doc.id}`}
                        onClick={() => onSelectDocument(doc)}
                        className="px-2.5 py-1 rounded-lg bg-stone-100 text-stone-700 hover:bg-stone-200 text-xs font-medium transition-colors flex items-center gap-1"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Abrir</span>
                      </button>

                      <a
                        href={`data:text/plain;charset=utf-8,${encodeURIComponent(`Download mock do arquivo ${doc.name}`)}`}
                        download={doc.name}
                        className="p-1 rounded-lg text-stone-500 hover:text-stone-800 hover:bg-stone-100 transition-colors"
                        title="Baixar Cópia Local"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
