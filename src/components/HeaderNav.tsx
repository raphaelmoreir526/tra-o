import React, { useState } from 'react';
import { 
  Building2, 
  Bell, 
  CheckCircle2, 
  FileText, 
  Calendar, 
  LayoutDashboard, 
  FolderGit2, 
  HelpCircle,
  Menu,
  X,
  ChevronDown,
  Lock
} from 'lucide-react';
import { ProjectInfo, ActivityLog } from '../types';

interface HeaderNavProps {
  project: ProjectInfo;
  activeTab: 'dashboard' | 'timeline' | 'documents' | 'briefing';
  setActiveTab: (tab: 'dashboard' | 'timeline' | 'documents' | 'briefing') => void;
  logs: ActivityLog[];
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  project,
  activeTab,
  setActiveTab,
  logs,
}) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Visão Geral', icon: LayoutDashboard },
    { id: 'timeline', label: 'Cronograma & Etapas', icon: Calendar },
    { id: 'documents', label: 'Documentos & Drive', icon: FolderGit2 },
    { id: 'briefing', label: 'Briefing Estruturado', icon: FileText },
  ] as const;

  return (
    <header className="sticky top-0 z-40 bg-[#fbfbf9]/90 backdrop-blur-md border-b border-stone-200/60 transition-all">
      {/* Top utility bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo & Project Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#2d3732] flex items-center justify-center text-white shadow-sm">
              <Building2 className="w-5 h-5 stroke-[1.75]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest text-stone-500 font-medium">
                  Portal do Cliente
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  100% Transparência
                </span>
              </div>
              <h1 className="text-base sm:text-lg font-medium text-stone-900 tracking-tight flex items-center gap-2">
                {project.name}
                <span className="text-xs font-normal text-stone-500 hidden sm:inline-block">
                  ({project.code})
                </span>
              </h1>
            </div>
          </div>

          {/* Right controls: Zero Reuniões Badge, Notifications, User */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            {/* Zero Reuniões Pill */}
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100/80 border border-stone-200 text-xs text-stone-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-stone-600" />
              <span>
                <strong className="font-semibold text-stone-900">0 Reuniões</strong> de Status
              </span>
            </div>

            {/* Notifications Button */}
            <div className="relative">
              <button
                id="notifications-button"
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors focus:outline-none"
                title="Notificações em tempo real"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-stone-800 rounded-full ring-2 ring-[#fbfbf9]" />
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-xl shadow-lg border border-stone-200 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 pb-2 border-b border-stone-100 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-stone-900">Atualizações Recentes</h3>
                    <span className="text-xs text-stone-500">24/7 Transparência</span>
                  </div>
                  <div className="max-h-80 overflow-y-auto divide-y divide-stone-100">
                    {logs.map((log) => (
                      <div key={log.id} className="p-3.5 hover:bg-stone-50/80 transition-colors">
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-xs font-medium text-stone-800">{log.title}</span>
                          <span className="text-[10px] text-stone-400 whitespace-nowrap">{log.time}</span>
                        </div>
                        <p className="text-xs text-stone-600 mt-1 line-clamp-2">{log.description}</p>
                        <div className="mt-2 flex items-center justify-between text-[11px] text-stone-400">
                          <span>{log.author} ({log.role})</span>
                          <span className="px-1.5 py-0.5 rounded bg-stone-100 text-stone-600">{log.phaseName}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 pt-2 border-t border-stone-100 text-center">
                    <button 
                      onClick={() => { setActiveTab('dashboard'); setShowNotifications(false); }}
                      className="text-xs font-medium text-stone-700 hover:text-stone-900"
                    >
                      Ver feed completo na Visão Geral &rarr;
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Client Avatar / Info */}
            <div className="hidden sm:flex items-center gap-2.5 pl-2 border-l border-stone-200">
              <div className="w-8 h-8 rounded-full bg-stone-200 text-stone-700 flex items-center justify-center font-medium text-xs">
                FA
              </div>
              <div className="text-left text-xs">
                <p className="font-medium text-stone-900 leading-tight">{project.clientName}</p>
                <p className="text-stone-500 text-[10px]">Cliente Exclusivo</p>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-stone-600 hover:text-stone-900 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation Tabs (Law of Hick - Clean 4 main options) */}
        <nav className="hidden md:flex items-center gap-1 mt-3 pt-2 border-t border-stone-200/50">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-tab-${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-[#2d3732] text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/70'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-stone-500'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-3 pb-2 border-t border-stone-200 space-y-1">
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
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-[#2d3732] text-white'
                      : 'text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        )}

      </div>
    </header>
  );
};
