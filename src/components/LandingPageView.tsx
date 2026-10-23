import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Layers, 
  ShieldCheck, 
  ArrowRight, 
  Phone, 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Lock, 
  Check,
  Sparkles,
  Droplets,
  Wind,
  Flame,
  Zap,
  ShieldAlert
} from 'lucide-react';

interface LandingPageViewProps {
  onOpenLogin: () => void;
  onOpenContact: () => void;
  onOpenPortfolio: () => void;
  onSelectProjectDirect: (projectId: string) => void;
}

export const LandingPageView: React.FC<LandingPageViewProps> = ({
  onOpenLogin,
  onOpenContact,
  onOpenPortfolio,
  onSelectProjectDirect,
}) => {
  // Real project facade images uploaded by the user
  const heroSlides = [
    {
      id: 1,
      image: '/assets/aistudio/fachada_2_f7ca26b5.png',
      title: 'Edifício Villa Bella',
      subtitle: 'Londrina - PR • 28 Pavimentos • Biofilia & Alto Padrão',
      badge: 'Projeto Autoral',
    },
    {
      id: 2,
      image: '/assets/aistudio/Fachada_Noturna__08__ab6bf69e.png',
      title: 'Residencial Horizon Tower',
      subtitle: 'Balneário Camboriú - SC • 36 Pavimentos • Fachada Noturna Iluminada',
      badge: 'Projeto Autoral',
    },
    {
      id: 3,
      image: '/assets/aistudio/FACHADA_-_CAM_2_b10a59ba.jpg',
      title: 'Parque das Figueiras',
      subtitle: 'São Paulo - SP • Simetria Arquitetônica & Madeira Nobre',
      badge: 'Projeto Autoral',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-play hero background slideshow
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, heroSlides.length]);

  // Secondary showcase with real project images
  const [secondarySlide, setSecondarySlide] = useState(0);
  const secondaryProjects = [
    {
      id: 'proj-001',
      name: 'Edifício Villa Bella',
      location: 'Londrina - PR',
      image: '/assets/aistudio/fachada_2_f7ca26b5.png',
      area: '14.850 m²',
      units: '56 Unidades',
      highlight: 'Compatibilização de 8 disciplinas em BIM e 0 retrabalho na fundação.',
    },
    {
      id: 'proj-002',
      name: 'Residencial Horizon Tower',
      location: 'Balneário Camboriú - SC',
      image: '/assets/aistudio/Fachada_Noturna__08__ab6bf69e.png',
      area: '26.400 m²',
      units: '68 Apartamentos',
      highlight: 'Estrutural com protensão não aderente e simulação de conforto térmico.',
    },
    {
      id: 'proj-003',
      name: 'Parque das Figueiras',
      location: 'São Paulo - SP',
      image: '/assets/aistudio/FACHADA_-_CAM_2_b10a59ba.jpg',
      area: '18.900 m²',
      units: '44 Unidades',
      highlight: 'Sistemas hidrossanitários com reuso pluvial integral e fachada ventilada.',
    },
  ];

  const disciplines = [
    { name: 'Arquitetura', icon: Building2, desc: 'Concepção volumétrica e espacial' },
    { name: 'Estrutural', icon: Layers, desc: 'Concreto armado e protendido' },
    { name: 'Hidrossanitário', icon: Droplets, desc: 'Água, esgoto e reúso sustentável' },
    { name: 'Elétrico & Automação', icon: Zap, desc: 'Subestações e circuitos inteligentes' },
    { name: 'Climatização & HVAC', icon: Wind, desc: 'Sistemas VRF e dutados' },
    { name: 'SPDA & Aterramento', icon: Sparkles, desc: 'Proteção atmosférica NBR 5419' },
    { name: 'SDAI & Incêndio', icon: Flame, desc: 'Detecção, alarme e combate' },
    { name: 'Gás Combustível', icon: ShieldAlert, desc: 'Centrais GLP/GN canalizadas' },
  ];

  return (
    <div className="min-h-screen bg-[#071320] text-slate-100 font-sans antialiased selection:bg-sky-500/30 selection:text-white">
      
      {/* 1. TOP NAVBAR (Refined minimal header) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#071320]/80 backdrop-blur-xl border-b border-white/[0.08] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Logo Traço Engenharia */}
          <div className="flex items-center gap-3">
            <div className="h-10 px-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
              <img 
                src="/assets/aistudio/LOGO_TRA_O_AZUL_c738d4a2.jpg" 
                alt="Traço Engenharia" 
                className="h-7 w-auto object-contain rounded-xs"
              />
            </div>
            <div>
              <span className="text-xs font-light tracking-[0.2em] text-white block uppercase">
                Traço Engenharia
              </span>
              <span className="text-[9px] text-sky-400/90 font-light tracking-widest block uppercase">
                Edifícios Residenciais
              </span>
            </div>
          </div>

          {/* Interactive Navigation Buttons (Contato, Portfólio, Login do Cliente) */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            <button
              id="btn-portfolio"
              onClick={onOpenPortfolio}
              className="text-xs font-light tracking-wider px-3.5 py-2 rounded-full border border-white/10 hover:border-white/25 text-slate-300 hover:text-white transition-all cursor-pointer hidden md:inline-flex items-center gap-1.5"
            >
              <Building2 className="w-3.5 h-3.5 text-sky-400/90 stroke-[1.5]" />
              <span>Portfólio</span>
            </button>

            <button
              id="btn-contato"
              onClick={onOpenContact}
              className="text-xs font-light tracking-wider px-3.5 py-2 rounded-full border border-white/10 hover:border-white/25 text-slate-300 hover:text-white transition-all cursor-pointer inline-flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400/90 stroke-[1.5]" />
              <span>Contato</span>
            </button>

            {/* Client Portal Login Button (Refined minimal CTA) */}
            <button
              id="btn-login-cliente"
              onClick={onOpenLogin}
              className="group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-sky-500 hover:bg-sky-400 text-[#071320] font-normal text-xs tracking-wider shadow-sm transition-all cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5 text-[#071320] stroke-[1.75]" />
              <span>Login do Cliente</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#071320] group-hover:translate-x-0.5 transition-transform stroke-[1.75]" />
            </button>

          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION WITH ALTERNATING USER PROJECT IMAGES */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        
        {/* Background Images Carousel with smooth fade transitions */}
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            } transition-transform duration-7000`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
            {/* Multi-gradient subtle architectural overlay for elegant text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071320] via-[#071320]/75 to-[#071320]/50" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#071320]/35 to-[#071320]/85" />
          </div>
        ))}

        {/* Hero Content (Ultra-minimalist, smaller & lighter typography) */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          
          {/* Active Slide Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-slate-300 text-[10px] sm:text-[11px] font-light tracking-[0.2em] uppercase mb-6 animate-in fade-in duration-500">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-sky-300">{heroSlides[currentSlide].badge}</span>
            <span className="text-white/30">•</span>
            <span className="text-white/80">{heroSlides[currentSlide].title}</span>
          </div>

          {/* Top Pre-heading */}
          <p className="text-[10px] sm:text-xs font-light uppercase tracking-[0.28em] text-sky-400/90 mb-3">
            Engenharia & Projetos de Alto Padrão
          </p>

          {/* Refined Minimal Headline */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extralight text-white tracking-[0.06em] uppercase leading-[1.2] max-w-3xl">
            Excelência técnica para <span className="font-normal text-sky-200">edifícios residenciais</span>
          </h1>

          <p className="mt-4 sm:mt-5 text-xs sm:text-sm text-slate-300/80 max-w-xl font-light leading-relaxed tracking-wide">
            Soluções completas para incorporadoras imobiliárias. Acompanhamento em tempo real, previsibilidade e transparência contínua através do nosso Portal do Cliente.
          </p>

          {/* Main Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onOpenLogin}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-sky-500 hover:bg-sky-400 text-[#071320] font-normal text-xs tracking-wider flex items-center justify-center gap-2.5 shadow-sm transition-all cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5 text-[#071320] stroke-[1.75]" />
              <span>Acessar Portal do Cliente</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#071320] stroke-[1.75]" />
            </button>

            <button
              onClick={onOpenPortfolio}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md text-white font-light text-xs tracking-wider border border-white/15 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Building2 className="w-3.5 h-3.5 text-sky-400/90 stroke-[1.5]" />
              <span>Ver Nossos Empreendimentos</span>
            </button>
          </div>

          {/* Carousel Controls (Minimal indicator dots & arrows) */}
          <div className="mt-12 flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
              className="p-1 rounded-full text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Foto anterior"
            >
              <ChevronLeft className="w-3.5 h-3.5 stroke-[1.5]" />
            </button>

            <div className="flex items-center gap-1.5">
              {heroSlides.map((slide, i) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentSlide ? 'w-6 bg-sky-400' : 'w-1.5 bg-white/20 hover:bg-white/50'
                  }`}
                  title={slide.title}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
              className="p-1 rounded-full text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Próxima foto"
            >
              <ChevronRight className="w-3.5 h-3.5 stroke-[1.5]" />
            </button>

            <div className="w-px h-3 bg-white/15" />

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1 rounded-full text-slate-400 hover:text-white transition-colors cursor-pointer"
              title={isPlaying ? 'Pausar rotação automática' : 'Retomar rotação automática'}
            >
              {isPlaying ? <Pause className="w-3 h-3 stroke-[1.5]" /> : <Play className="w-3 h-3 stroke-[1.5]" />}
            </button>
          </div>

        </div>
      </section>

      {/* 3. STATS BAR (Refined Minimal Metrics) */}
      <section className="border-y border-white/[0.08] bg-slate-950/40 backdrop-blur-md py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-light text-sky-400 tracking-tight">18+</div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mt-1 font-light">Anos de Atuação</p>
              <p className="text-[10px] text-slate-500 font-light mt-0.5">Mercado Imobiliário</p>
            </div>
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-light text-white tracking-tight">250.000+</div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mt-1 font-light">M² Projetados</p>
              <p className="text-[10px] text-slate-500 font-light mt-0.5">Edifícios Residenciais</p>
            </div>
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-light text-sky-400 tracking-tight">0</div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mt-1 font-light">Reuniões Inúteis</p>
              <p className="text-[10px] text-slate-500 font-light mt-0.5">Gestão Direta via Portal</p>
            </div>
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-light text-white tracking-tight">100%</div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mt-1 font-light">Plataforma BIM</p>
              <p className="text-[10px] text-slate-500 font-light mt-0.5">Compatibilização Completa</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US? (3 Minimalist Cards) */}
      <section className="py-20 bg-[#071320] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[10px] font-light uppercase tracking-[0.25em] text-sky-400 mb-2">
              Diferenciais Competitivos
            </p>
            <h2 className="text-xl sm:text-3xl font-light text-white tracking-wide uppercase">
              Por que a Traço Engenharia?
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-light mt-3 leading-relaxed">
              Combinamos rigor matemático e cálculo estrutural com metodologia ágil de gestão para eliminar gargalos e retrabalhos na construção civil.
            </p>
          </div>

          {/* The 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Card 1 */}
            <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-7 flex flex-col justify-between hover:border-sky-400/30 transition-all duration-300 group">
              <div>
                <div className="w-10 h-10 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 flex items-center justify-center mb-5">
                  <ShieldCheck className="w-5 h-5 stroke-[1.5]" />
                </div>
                <p className="text-[10px] font-light uppercase tracking-[0.2em] text-sky-400 mb-1">
                  Pilar 01
                </p>
                <h3 className="text-base font-normal text-white tracking-wide mb-2.5">
                  Qualidade e Rigor Construtivo
                </h3>
                <p className="text-xs text-slate-300/80 font-light leading-relaxed">
                  Cálculos milimétricos com dimensionamento estrutural otimizado. Antecipamos interferências entre instalações antes do canteiro de obras, reduzindo o custo de execução.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center gap-1.5 text-[11px] text-sky-400/90 font-light tracking-wider">
                <span>Engenharia de Alto Padrão</span>
                <Check className="w-3.5 h-3.5 stroke-[1.5]" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-7 flex flex-col justify-between hover:border-sky-400/30 transition-all duration-300 group">
              <div>
                <div className="w-10 h-10 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 flex items-center justify-center mb-5">
                  <Clock className="w-5 h-5 stroke-[1.5]" />
                </div>
                <p className="text-[10px] font-light uppercase tracking-[0.2em] text-sky-400 mb-1">
                  Pilar 02
                </p>
                <h3 className="text-base font-normal text-white tracking-wide mb-2.5">
                  Transparência & Zero Reuniões
                </h3>
                <p className="text-xs text-slate-300/80 font-light leading-relaxed">
                  Incorporadoras acompanham tudo em tempo real. O portal oferece aprovação digital, acesso à estrutura de pastas do projeto e status contínuo 24 horas por dia.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center gap-1.5 text-[11px] text-sky-400/90 font-light tracking-wider">
                <span>Zero Reuniões de Alinhamento</span>
                <Check className="w-3.5 h-3.5 stroke-[1.5]" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-7 flex flex-col justify-between hover:border-sky-400/30 transition-all duration-300 group">
              <div>
                <div className="w-10 h-10 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 flex items-center justify-center mb-5">
                  <Sparkles className="w-5 h-5 stroke-[1.5]" />
                </div>
                <p className="text-[10px] font-light uppercase tracking-[0.2em] text-sky-400 mb-1">
                  Pilar 03
                </p>
                <h3 className="text-base font-normal text-white tracking-wide mb-2.5">
                  Engenharia Integrada BIM
                </h3>
                <p className="text-xs text-slate-300/80 font-light leading-relaxed">
                  Desenvolvimento integrado das 8 disciplinas essenciais do edifício residencial. Garantimos compatibilidade com normas dos Corpos de Bombeiros, energia e prefeituras.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center gap-1.5 text-[11px] text-sky-400/90 font-light tracking-wider">
                <span>8 Disciplinas em Sintonia</span>
                <Check className="w-3.5 h-3.5 stroke-[1.5]" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. SECONDARY INTERACTIVE WINDOW (Alternating project images & company highlights) */}
      <section className="py-20 bg-slate-950/70 border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left text: Disciplines & Direct Actions */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[10px] font-light uppercase tracking-[0.25em] text-sky-400 block mb-2">
                  Projetos Autorais
                </span>
                <h2 className="text-xl sm:text-3xl font-light text-white tracking-wide uppercase leading-snug">
                  Engenharia que Transforma o Cenário Urbano
                </h2>
                <p className="text-xs sm:text-sm text-slate-300/80 font-light mt-3 leading-relaxed">
                  A Traço Engenharia desenvolve projetos executivos de edifícios residenciais de ponta a ponta, otimizando a viabilidade da incorporadora e o padrão construtivo.
                </p>
              </div>

              {/* Disciplines Chips */}
              <div>
                <h4 className="text-[10px] font-light uppercase text-slate-400 tracking-[0.2em] mb-3">
                  Disciplinas Desenvolvidas:
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {disciplines.map((d) => {
                    const Icon = d.icon;
                    return (
                      <div key={d.name} className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-2">
                        <Icon className="w-3.5 h-3.5 text-sky-400/90 shrink-0 stroke-[1.5]" />
                        <span className="font-light text-slate-200 text-[11px] tracking-wide truncate">{d.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={onOpenLogin}
                  className="px-5 py-2.5 rounded-full bg-sky-500 hover:bg-sky-400 text-[#071320] font-normal text-xs tracking-wider flex items-center gap-2 transition-all cursor-pointer"
                >
                  <Lock className="w-3 h-3 text-[#071320] stroke-[1.75]" />
                  <span>Acessar Empreendimentos</span>
                </button>
                <button
                  onClick={onOpenContact}
                  className="px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-light text-xs tracking-wider border border-white/10 transition-all cursor-pointer"
                >
                  Falar com Engenharia
                </button>
              </div>
            </div>

            {/* Right: Secondary Alternating Window Showcase with real project images */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-white/15 shadow-2xl">
                
                {/* Image Window */}
                <div className="relative h-72 sm:h-88 w-full overflow-hidden bg-slate-950">
                  <img
                    src={secondaryProjects[secondarySlide].image}
                    alt={secondaryProjects[secondarySlide].name}
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Badge & Counter */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-light tracking-wider text-sky-400 border border-white/10 uppercase">
                      Empreendimento em Destaque
                    </span>
                    <span className="text-[10px] font-light text-white/80 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                      {secondarySlide + 1} / {secondaryProjects.length}
                    </span>
                  </div>

                  {/* Overlay Name on Image */}
                  <div className="absolute bottom-4 left-5 right-5">
                    <p className="text-[10px] font-light uppercase tracking-[0.2em] text-sky-300/90 mb-1">
                      {secondaryProjects[secondarySlide].location}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-light text-white tracking-wide uppercase">
                      {secondaryProjects[secondarySlide].name}
                    </h3>
                  </div>
                </div>

                {/* Window Details Bar with Controls */}
                <div className="p-5 bg-slate-900/90 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.08]">
                  <div>
                    <p className="text-xs text-slate-300/80 font-light leading-relaxed">
                      {secondaryProjects[secondarySlide].highlight}
                    </p>
                    <div className="mt-1.5 flex items-center gap-3 text-[11px] text-slate-400 font-light">
                      <span>Área: <span className="text-slate-200">{secondaryProjects[secondarySlide].area}</span></span>
                      <span>•</span>
                      <span>Unidades: <span className="text-slate-200">{secondaryProjects[secondarySlide].units}</span></span>
                    </div>
                  </div>

                  {/* Nav Arrows */}
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => setSecondarySlide((prev) => (prev - 1 + secondaryProjects.length) % secondaryProjects.length)}
                      className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors cursor-pointer border border-white/10"
                      title="Anterior"
                    >
                      <ChevronLeft className="w-4 h-4 stroke-[1.5]" />
                    </button>
                    <button
                      onClick={() => setSecondarySlide((prev) => (prev + 1) % secondaryProjects.length)}
                      className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors cursor-pointer border border-white/10"
                      title="Próximo"
                    >
                      <ChevronRight className="w-4 h-4 stroke-[1.5]" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. CALL TO ACTION FOR DEVELOPERS & INVESTORS */}
      <section className="py-16 bg-gradient-to-b from-[#071320] to-[#040c14] border-t border-white/[0.08]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 text-[10px] font-light uppercase tracking-[0.2em] mb-4">
            <Lock className="w-3 h-3 stroke-[1.5]" />
            <span>Exclusividade para Incorporadoras</span>
          </div>

          <h2 className="text-xl sm:text-3xl font-light text-white tracking-wide uppercase">
            Acesso aos seus empreendimentos
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-slate-300/80 font-light max-w-xl mx-auto leading-relaxed">
            Tenha visibilidade completa dos seus projetos em andamento ou solicite uma avaliação técnica para a viabilidade do seu próximo terreno.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenLogin}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-sky-500 hover:bg-sky-400 text-[#071320] font-normal text-xs tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5 stroke-[1.75]" />
              <span>Acessar Como Incorporador</span>
            </button>
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-light text-xs tracking-wider border border-white/15 transition-all cursor-pointer"
            >
              Solicitar Contato Técnico
            </button>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="border-t border-white/[0.08] bg-[#030910] py-10 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <div className="h-9 px-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <img 
                  src="/assets/aistudio/LOGO_TRA_O_AZUL_c738d4a2.jpg" 
                  alt="Traço Engenharia" 
                  className="h-6 w-auto object-contain rounded-xs"
                />
              </div>
              <div>
                <span className="font-light tracking-[0.15em] text-white text-xs block uppercase">Traço Engenharia</span>
                <span className="text-[10px] font-light text-slate-500">Edifícios Residenciais & Compatibilização BIM</span>
              </div>
            </div>

            <div className="flex items-center gap-5 text-xs text-slate-300 font-light tracking-wide">
              <button onClick={onOpenPortfolio} className="hover:text-white transition-colors cursor-pointer">Portfólio</button>
              <button onClick={onOpenContact} className="hover:text-white transition-colors cursor-pointer">Contato</button>
              <button onClick={onOpenLogin} className="hover:text-white transition-colors text-sky-400 cursor-pointer">Login do Cliente</button>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-light text-slate-500">
            <p>© {new Date().getFullYear()} Traço Engenharia Ltda. CREA / CAU Homologados.</p>
            <p>Londrina • Curitiba • Balneário Camboriú • São Paulo</p>
          </div>
        </div>
      </footer>

    </div>
  );
};
