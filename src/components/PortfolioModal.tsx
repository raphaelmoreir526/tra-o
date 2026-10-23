import React, { useState } from 'react';
import { 
  X, 
  Building2, 
  MapPin, 
  Maximize2, 
  Layers, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProjectForDemo?: (projectId: string) => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  isOpen,
  onClose,
  onSelectProjectForDemo,
}) => {
  const [filter, setFilter] = useState<'all' | 'residencial' | 'corporativo' | 'biophilic'>('all');

  if (!isOpen) return null;

  const portfolioItems = [
    {
      id: 'proj-001',
      title: 'Edifício Villa Bella',
      category: 'residencial',
      typology: 'Torre Residencial de Alto Padrão',
      location: 'Londrina - PR • Gleba Palhano',
      area: '14.850 m²',
      units: '56 Unidades (4 Suítes)',
      floors: '28 Pavimentos',
      disciplines: ['Arquitetura', 'Estrutural', 'BIM', 'Hidrossanitário', 'Climatização'],
      image: '/assets/aistudio/fachada_2_f7ca26b5.png',
      description: 'Empreendimento icônico com biofilia integrada nas sacadas, térreo com pé-direito triplo e eficiência energética máxima.',
      status: 'Em Concepção & Projetos',
    },
    {
      id: 'proj-002',
      title: 'Residencial Horizon Tower',
      category: 'residencial',
      typology: 'Skyscraper Residencial Premium',
      location: 'Balneário Camboriú - SC • Barra Sul',
      area: '26.400 m²',
      units: '68 Apartamentos Vista Mar',
      floors: '36 Pavimentos',
      disciplines: ['Estrutural', 'Climatização VRF', 'SDAI', 'SPDA', 'Gás'],
      image: '/assets/aistudio/Fachada_Noturna__08__ab6bf69e.png',
      description: 'Fachada contemporânea iluminada, fundações profundas de alto desempenho e climatização central de baixo consumo.',
      status: 'Projeto Legal Aprovado',
    },
    {
      id: 'proj-003',
      title: 'Parque das Figueiras',
      category: 'biophilic',
      typology: 'Residencial Boutique Sustentável',
      location: 'São Paulo - SP • Jardins',
      area: '18.900 m²',
      units: '44 Apartamentos Garden & Penthouses',
      floors: '22 Pavimentos',
      disciplines: ['Arquitetura', 'Hidrossanitário Sustentável', 'Reúso Pluvial', 'Incêndio'],
      image: '/assets/aistudio/FACHADA_-_CAM_2_b10a59ba.jpg',
      description: 'Simetria arquitetônica em madeira nobre e concreto aparente, certificação de sustentabilidade e reaproveitamento de águas.',
      status: 'Fase de Briefing Consolidado',
    },
    {
      id: 'proj-004',
      title: 'Lumière Grand Tower',
      category: 'corporativo',
      typology: 'Complexo Triple A Corporativo & Residencial',
      location: 'Curitiba - PR • Batel',
      area: '12.300 m²',
      units: '32 Residências Suspensas',
      floors: '18 Pavimentos',
      disciplines: ['Estrutural em Aço/Concreto', 'Automação', 'BIM 5D', 'Elétrico'],
      image: '/assets/aistudio/fachada_2_f7ca26b5.png',
      description: 'Um por andar com 310m² privativos, lajes nervuradas protendidas para vãos livres de 12 metros sem pilares internos.',
      status: 'Projeto Executivo Concluído',
    },
  ];

  const filtered = portfolioItems.filter(item => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#071d33] text-white p-6 md:p-8 flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold uppercase tracking-widest mb-1">
              <span>Portfólio de Alta Complexidade</span>
              <span>•</span>
              <span>Traço Engenharia</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">
              Obras e Projetos Referência
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">
              Mais de 250.000m² projetados com rigor milimétrico, compatibilização BIM integrada e zero retrabalho na obra.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Toolbar */}
        <div className="p-4 border-b border-slate-200/70 bg-slate-50 flex items-center justify-between gap-3 overflow-x-auto">
          <div className="flex items-center gap-2">
            {[
              { id: 'all', label: 'Todos os Projetos' },
              { id: 'residencial', label: 'Torres Residenciais' },
              { id: 'corporativo', label: 'Corporativo & Boutique' },
              { id: 'biophilic', label: 'Biofílicos & Sustentáveis' },
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id as any)}
                className={`text-xs px-3.5 py-1.5 rounded-xl font-medium transition-all shrink-0 ${
                  filter === f.id
                    ? 'bg-[#071d33] text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200/70'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <span className="text-xs text-slate-400 hidden sm:inline">
            Exibindo <strong>{filtered.length}</strong> projetos
          </span>
        </div>

        {/* Projects Grid */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map(proj => (
              <div 
                key={proj.id}
                className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Photo with Overlay Title */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-medium text-white border border-white/20">
                        {proj.status}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-sky-400">
                        {proj.typology}
                      </p>
                      <h3 className="text-lg font-bold text-white tracking-tight drop-shadow-md">
                        {proj.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span>{proj.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Specs */}
                  <div className="p-4 space-y-3">
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {proj.description}
                    </p>

                    <div className="grid grid-cols-3 gap-2 py-2 border-y border-slate-100 text-[11px]">
                      <div>
                        <span className="text-slate-400 block">Área Total</span>
                        <strong className="text-slate-800">{proj.area}</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Gabarito</span>
                        <strong className="text-slate-800">{proj.floors}</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Unidades</span>
                        <strong className="text-slate-800">{proj.units}</strong>
                      </div>
                    </div>

                    {/* Disciplines Chips */}
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-slate-400 block mb-1.5">
                        Disciplinas Desenvolvidas:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {proj.disciplines.map(d => (
                          <span 
                            key={d}
                            className="px-2 py-0.5 rounded-md bg-sky-50 text-sky-900 border border-sky-100 text-[10px] font-medium"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-4 pt-0">
                  {onSelectProjectForDemo && (
                    <button
                      onClick={() => {
                        onClose();
                        onSelectProjectForDemo(proj.id);
                      }}
                      className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-[#071d33] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>Abrir na Jornada do Projeto</span>
                      <ChevronRight className="w-4 h-4 text-sky-400" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
