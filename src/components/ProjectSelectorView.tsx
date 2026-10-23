import React, { useState } from 'react';
import { ProjectInfo } from '../types';
import { 
  Building2, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Layers, 
  LogOut, 
  Home, 
  Plus, 
  Search,
  Sparkles,
  ShieldCheck,
  Briefcase
} from 'lucide-react';

interface ProjectSelectorViewProps {
  projects: ProjectInfo[];
  currentClientName: string;
  onSelectProject: (project: ProjectInfo) => void;
  onBackToLanding: () => void;
  onLogout: () => void;
}

export const ProjectSelectorView: React.FC<ProjectSelectorViewProps> = ({
  projects,
  currentClientName,
  onSelectProject,
  onBackToLanding,
  onLogout,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCity, setFilterCity] = useState('all');

  const filteredProjects = projects.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = filterCity === 'all' || p.city.includes(filterCity);
    return matchesSearch && matchesCity;
  });

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans antialiased flex flex-col justify-between">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          
          {/* Logo & Corporate Client badge */}
          <div className="flex items-center gap-3">
            <button 
              onClick={onBackToLanding}
              className="h-10 px-2 rounded-xl bg-[#071d33] flex items-center justify-center border border-sky-400/20 shadow-xs hover:border-sky-400/50 transition-colors"
              title="Voltar para a Página Principal"
            >
              <img 
                src="/assets/aistudio/LOGO_TRA_O_AZUL_c738d4a2.jpg" 
                alt="Traço Engenharia" 
                className="h-7 w-auto object-contain rounded"
              />
            </button>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                  Traço Engenharia
                </span>
                <span className="text-slate-400 text-xs hidden sm:inline">•</span>
                <span className="text-xs text-slate-300 hidden sm:inline flex items-center gap-1">
                  <Briefcase className="w-3 h-3 text-sky-400" />
                  Painel da Incorporadora
                </span>
              </div>
              <h1 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                {currentClientName}
              </h1>
            </div>
          </div>

          {/* Right Action buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onBackToLanding}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-slate-300 hover:text-white transition-colors border border-white/10"
            >
              <Home className="w-3.5 h-3.5 text-sky-400" />
              <span>Página Inicial</span>
            </button>

            <button
              onClick={onLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-xs text-red-300 hover:text-red-200 transition-colors border border-red-500/20"
              title="Desconectar da conta"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Desconectar</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex-1 w-full">
        
        {/* Welcome Section */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 text-[10px] font-light uppercase tracking-[0.2em] mb-2">
              <Sparkles className="w-3 h-3 text-sky-400 stroke-[1.5]" />
              Gestão Multidisciplinar Centralizada
            </div>
            <h2 className="text-xl sm:text-2xl font-light text-white tracking-wide uppercase">
              Selecione o Empreendimento
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-light mt-1 max-w-2xl leading-relaxed">
              Como parceiro incorporador da Traço Engenharia, selecione qual dos seus edifícios em desenvolvimento você deseja acompanhar hoje.
            </p>
          </div>

          {/* Quick Filter / Search */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5 stroke-[1.5]" />
              <input
                type="text"
                placeholder="Buscar empreendimento..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-4 py-2 bg-slate-800/60 border border-white/10 rounded-full text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 w-52 sm:w-64 font-light"
              />
            </div>
          </div>
        </div>

        {/* Empreendimentos Grid: Cards with Facade Image and Overlayed Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((proj) => {
            return (
              <div
                key={proj.id}
                onClick={() => onSelectProject(proj)}
                className="group relative rounded-2xl overflow-hidden bg-slate-800/80 border border-white/10 hover:border-sky-400/50 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between transform hover:-translate-y-0.5"
              >
                {/* Facade Image with High-Contrast Dark Gradient Overlay and Building Name OVER the Image */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-950">
                  <img
                    src={proj.facadeImage || '/assets/aistudio/fachada_2_f7ca26b5.png'}
                    alt={proj.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  
                  {/* Subtle Multi-stage Vignette & Gradient for maximum readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/20" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] font-light tracking-wider text-sky-400 border border-sky-400/30 flex items-center gap-1.5 shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                      {proj.statusBadge || 'Em Andamento'}
                    </span>

                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono font-light text-slate-300 border border-white/10">
                      {proj.code}
                    </span>
                  </div>

                  {/* Building Name Written OVER the Image (Clean, Minimalist & Architectural) */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-[10px] uppercase font-light text-sky-300 tracking-[0.2em] flex items-center gap-1.5 mb-1 drop-shadow">
                      <Building2 className="w-3.5 h-3.5 text-sky-400 stroke-[1.5]" />
                      <span>{proj.typology || 'Residencial de Alto Padrão'}</span>
                    </p>

                    {/* Prominent Overlay Title - Clean, elegant & lighter */}
                    <h3 className="text-xl sm:text-2xl font-light text-white tracking-wide uppercase drop-shadow-md leading-tight group-hover:text-sky-200 transition-colors">
                      {proj.name}
                    </h3>

                    {/* Address & City */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-300/90 font-light mt-1.5 drop-shadow">
                      <MapPin className="w-3.5 h-3.5 text-sky-400/90 shrink-0 stroke-[1.5]" />
                      <span className="truncate">{proj.address} • {proj.city}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Specifications & Direct CTA */}
                <div className="p-5 sm:p-6 bg-slate-900/95 border-t border-white/[0.08] space-y-4">
                  
                  {/* Progress Indicator */}
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-slate-400 font-light">Progresso Geral do Projeto</span>
                      <span className="font-normal text-sky-400">{proj.overallProgress}% concluído</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full transition-all duration-500"
                        style={{ width: `${proj.overallProgress}%` }}
                      />
                    </div>
                  </div>

                  {/* Quick specs grid */}
                  <div className="grid grid-cols-3 gap-3 py-2 border-y border-white/[0.06] text-xs">
                    <div>
                      <span className="text-slate-400 text-[10px] block font-light">Área Construída</span>
                      <strong className="text-slate-200 font-normal">{proj.totalArea}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block font-light">Gabarito</span>
                      <strong className="text-slate-200 font-normal">{proj.floors || '28 Pavimentos'}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block font-light">Unidades</span>
                      <strong className="text-slate-200 font-normal">{proj.units || '56 Unidades'}</strong>
                    </div>
                  </div>

                  {/* Technical Leads */}
                  <div className="text-[11px] text-slate-400 font-light flex items-center justify-between">
                    <span>Resp: <span className="text-slate-300 font-light">{proj.architectInCharge}</span></span>
                    <span className="text-sky-400/90 font-light tracking-wide">0 Reuniões de Status</span>
                  </div>

                  {/* Primary Button */}
                  <div className="pt-1">
                    <button
                      type="button"
                      className="w-full py-2.5 px-4 rounded-full bg-sky-500/10 hover:bg-sky-500 text-sky-300 hover:text-[#071320] font-normal text-xs tracking-wider flex items-center justify-center gap-2 border border-sky-400/30 transition-all cursor-pointer"
                    >
                      <span>Acessar Jornada do Projeto</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform stroke-[1.75]" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative Note for Developers */}
        <div className="mt-12 p-6 rounded-3xl bg-slate-800/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/20 text-sky-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Novo Empreendimento em Estudo de Viabilidade?</h4>
              <p className="text-xs text-slate-400">
                A Traço Engenharia realiza o estudo preliminar de massa e volumetria para novas aquisições de terreno.
              </p>
            </div>
          </div>

          <button
            onClick={() => alert('Para cadastrar um novo empreendimento na sua conta, nossa equipe técnica fará o onboarding do lote e plano diretor.')}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-2 transition-colors shrink-0"
          >
            <Plus className="w-4 h-4 text-sky-400" />
            <span>Cadastrar Novo Empreendimento</span>
          </button>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950 py-6 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img 
              src="/assets/aistudio/LOGO_TRA_O_AZUL_c738d4a2.jpg" 
              alt="Traço Engenharia" 
              className="h-5 w-auto object-contain rounded"
            />
            <span>Traço Engenharia • Sistema de Gestão para Incorporadoras</span>
          </div>
          <div>
            <span>Londrina • Curitiba • São Paulo • Balneário Camboriú</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
