import React, { useState } from 'react';
import { 
  Bell, 
  CheckCircle2, 
  FileText, 
  Calendar, 
  LayoutDashboard, 
  FolderGit2, 
  Menu, 
  X,
  ShieldCheck,
  Building2,
  ArrowLeft,
  Home
} from 'lucide-react';
import { ProjectInfo, ActivityLog } from '../types';

interface HeaderNavProps {
  project: ProjectInfo;
  activeTab: 'dashboard' | 'timeline' | 'documents' | 'briefing';
  setActiveTab: (tab: 'dashboard' | 'timeline' | 'documents' | 'briefing') => void;
  logs: ActivityLog[];
  onSwitchProject?: () => void;
  onBackToHome?: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  project,
  activeTab,
  setActiveTab,
  logs,
  onSwitchProject,
  onBackToHome,
}) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Visão Geral', icon: LayoutDashboard },
    { id: 'timeline', label: 'Cronograma & Etapas', icon: Calendar },
    { id: 'documents', label: 'Documentos & Pastas', icon: FolderGit2 },
    { id: 'briefing', label: 'Briefing Estruturado', icon: FileText },
  ] as const;

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200/70 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        
        {/* Top utility row */}
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo & Traço Engenharia Branding */}
          <div className="flex items-center gap-3">
            <div className="h-10 px-2 rounded-xl bg-[#071d33] flex items-center justify-center border border-sky-950/30 shadow-xs overflow-hidden shrink-0">
              <img 
                src="/assets/aistudio/LOGO_TRA_O_AZUL_c738d4a2.jpg" 
                alt="Traço Engenharia" 
                className="h-8 w-auto object-contain"
              />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-800 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                  Traço Engenharia
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full bg-sky-50 text-sky-900 border border-sky-200/80">
                  <ShieldCheck className="w-3 h-3 text-sky-600" />
                  Portal Exclusivo
                </span>
              </div>
              <h1 className="text-sm sm:text-base font-semibold text-slate-900 tracking-tight flex items-center gap-2">
                {project.name}
                <span className="text-xs font-normal text-slate-400 hidden md:inline-block">
                  ({project.code})
                </span>
              </h1>
            </div>
          </div>

          {/* Right controls: Status badge, Notifications, User */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Zero Reuniões HIG Pill */}
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100/90 border border-slate-200/80 text-xs text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
              <span>
                <strong className="font-semibold text-slate-900">0 Reuniões</strong> de Status
              </span>
            </div>

            {/* Notifications Button */}
            <div className="relative">
              <button
                id="notifications-button"
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
                title="Notificações em tempo real"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-sky-600 rounded-full ring-2 ring-white" />
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-200/80 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 pb-2 border-b border-slate-100 flex items-center justify-between">
                    <div>
                      <h3 className="text-xs font-semibold text-slate-900">Atualizações Traço Engenharia</h3>
                      <p className="text-[10px] text-slate-500">Transparência técnica 24/7</p>
                    </div>
                    <span className="text-[10px] font-mono text-sky-700 font-semibold px-1.5 py-0.5 rounded bg-sky-50">
                      Ao vivo
                    </span>
                  </div>

                  <div className="max-h-80 overflow-y-auto divide-y divide-slate-100">
                    {logs.map((log) => (
                      <div key={log.id} className="p-3.5 hover:bg-slate-50/80 transition-colors">
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-xs font-semibold text-slate-900">{log.title}</span>
                          <span className="text-[10px] text-slate-400 shrink-0">{log.time}</span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1 line-clamp-2">{log.description}</p>
                        <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
                          <span>{log.author}</span>
                          <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                            {log.phaseName}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="px-4 pt-2 border-t border-slate-100 text-center">
                    <button 
                      onClick={() => { setActiveTab('dashboard'); setShowNotifications(false); }}
                      className="text-xs font-medium text-sky-700 hover:text-sky-900"
                    >
                      Ver feed completo na Visão Geral &rarr;
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Switch Project & Home buttons */}
            {onSwitchProject && (
              <button
                onClick={onSwitchProject}
                className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 transition-colors border border-slate-200/80 cursor-pointer"
                title="Trocar de Edifício / Empreendimento"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-sky-600" />
                <span>Trocar Empreendimento</span>
              </button>
            )}

            {onBackToHome && (
              <button
                onClick={onBackToHome}
                className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-600 transition-colors border border-slate-200/80 cursor-pointer"
                title="Voltar para a Página Principal"
              >
                <Home className="w-3.5 h-3.5 text-slate-500" />
                <span>Site</span>
              </button>
            )}

            {/* Client Avatar / Info */}
            <div className="hidden sm:flex items-center gap-2.5 pl-2 border-l border-slate-200">
              <div className="w-8 h-8 rounded-full bg-[#071d33] text-white flex items-center justify-center font-semibold text-xs border border-sky-500/20 shadow-2xs">
                IA
              </div>
              <div className="text-left text-xs">
                <p className="font-semibold text-slate-900 leading-tight truncate max-w-[140px]">{project.clientName}</p>
                <p className="text-slate-500 text-[10px]">Incorporadora</p>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation: Apple HIG Segmented Control */}
        <div className="hidden md:flex items-center mt-3 pt-2 border-t border-slate-200/50">
          <nav className="inline-flex p-1 rounded-xl bg-slate-100/90 border border-slate-200/60 text-xs font-medium space-x-1 shadow-2xs">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-tab-${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg transition-all ${
                    isActive
                      ? 'bg-[#071d33] text-white shadow-xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-sky-400' : 'text-slate-500'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-3 pb-2 border-t border-slate-200 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-[#071d33] text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-sky-400' : 'text-slate-500'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}

            {onSwitchProject && (
              <button
                onClick={() => {
                  onSwitchProject();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-sky-800 bg-sky-50 hover:bg-sky-100 transition-colors mt-2"
              >
                <ArrowLeft className="w-4 h-4 text-sky-600" />
                <span>Trocar Empreendimento</span>
              </button>
            )}

            {onBackToHome && (
              <button
                onClick={() => {
                  onBackToHome();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <Home className="w-4 h-4 text-slate-500" />
                <span>Voltar à Página Principal</span>
              </button>
            )}
          </div>
        )}

      </div>
    </header>
  );
};
