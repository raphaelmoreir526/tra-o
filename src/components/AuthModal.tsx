import React, { useState } from 'react';
import { 
  X, 
  Lock, 
  Mail, 
  Building2, 
  User, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  KeyRound
} from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (userName: string, companyName: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
}) => {
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('diretoria@alencarempree.com.br');
  const [password, setPassword] = useState('••••••••••••');
  const [companyName, setCompanyName] = useState('Incorporadora Alencar & Associados');
  const [name, setName] = useState('Rodrigo Alencar');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess(tab === 'login' ? 'Rodrigo Alencar' : name, tab === 'login' ? 'Incorporadora Alencar & Associados' : companyName);
      onClose();
    }, 600);
  };

  const handleQuickDemoLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess('Rodrigo Alencar', 'Incorporadora Alencar & Associados');
      onClose();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header with Dark Navy Accent */}
        <div className="bg-[#071d33] px-6 py-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="h-10 px-2 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
              <img 
                src="/assets/aistudio/LOGO_TRA_O_AZUL_c738d4a2.jpg" 
                alt="Traço Engenharia" 
                className="h-7 w-auto object-contain rounded"
              />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-sky-400 uppercase tracking-wider">Área Restrita</p>
              <h2 className="text-lg font-bold tracking-tight">Portal do Cliente & Incorporadora</h2>
            </div>
          </div>

          <p className="mt-2 text-xs text-slate-300">
            Acompanhe em tempo real todos os projetos e empreendimentos da sua incorporadora.
          </p>

          {/* Tab Selector */}
          <div className="mt-5 grid grid-cols-2 p-1 bg-white/10 rounded-xl text-xs font-medium">
            <button
              type="button"
              onClick={() => setTab('login')}
              className={`py-2 rounded-lg transition-all ${
                tab === 'login' ? 'bg-sky-500 text-white font-semibold shadow-xs' : 'text-slate-300 hover:text-white'
              }`}
            >
              Entrar no Portal
            </button>
            <button
              type="button"
              onClick={() => setTab('register')}
              className={`py-2 rounded-lg transition-all ${
                tab === 'register' ? 'bg-sky-500 text-white font-semibold shadow-xs' : 'text-slate-300 hover:text-white'
              }`}
            >
              Criar Usuário & Senha
            </button>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {/* Quick Demo Access banner */}
          <div className="mb-5 p-3.5 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-sky-600 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-sky-950">Ambiente de Demonstração</p>
                <p className="text-[11px] text-sky-700">Acesse instantaneamente como Incorporadora</p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleQuickDemoLogin}
              disabled={isLoading}
              className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-[#071d33] text-white hover:bg-sky-900 transition-colors shrink-0 shadow-2xs"
            >
              Entrar Direto &rarr;
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {tab === 'register' && (
              <>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nome Completo
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Carlos Eduardo Silveira"
                      className="w-full pl-9 pr-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nome da Incorporadora / Construtora
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Ex: Alphaville Empreendimentos"
                      className="w-full pl-9 pr-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>
              </>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                E-mail Corporativo
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="voce@incorporadora.com.br"
                  className="w-full pl-9 pr-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-semibold text-slate-700">
                  Senha de Acesso
                </label>
                {tab === 'login' && (
                  <button 
                    type="button" 
                    onClick={() => alert('Para redefinição de chave técnica, fale diretamente com o suporte da Traço Engenharia.')}
                    className="text-[11px] text-sky-600 hover:text-sky-800"
                  >
                    Esqueceu?
                  </button>
                )}
              </div>
              <div className="relative">
                <KeyRound className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Sua senha segura"
                  className="w-full pl-9 pr-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 py-3 px-4 rounded-xl bg-[#071d33] hover:bg-sky-950 text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>{tab === 'login' ? 'Acessar Empreendimentos' : 'Criar Conta e Acessar'}</span>
                  <ArrowRight className="w-4 h-4 text-sky-400" />
                </>
              )}
            </button>
          </form>

          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            <span>Acesso seguro com criptografia de ponta a ponta</span>
          </div>
        </div>
      </div>
    </div>
  );
};
