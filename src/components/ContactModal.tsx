import React, { useState } from 'react';
import { 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  Clock, 
  Building2, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    tipoProjeto: 'Edifício Residencial Multifamiliar',
    mensagem: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 md:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Direct Contact Details & WhatsApp CTA */}
        <div className="bg-[#071d33] text-white p-6 md:p-8 md:w-2/5 flex flex-col justify-between shrink-0">
          <div>
            <div className="h-10 px-2 rounded-xl bg-white/10 border border-white/15 inline-flex items-center justify-center mb-5">
              <img 
                src="/assets/aistudio/LOGO_TRA_O_AZUL_c738d4a2.jpg" 
                alt="Traço Engenharia" 
                className="h-7 w-auto object-contain rounded"
              />
            </div>

            <p className="text-[11px] font-semibold text-sky-400 uppercase tracking-widest">
              Fale Conosco
            </p>
            <h2 className="text-xl font-bold tracking-tight mt-1">
              Traço Engenharia
            </h2>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Atendimento técnico direto para incorporadoras, construtoras e investidores imobiliários.
            </p>

            <div className="mt-6 space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Sede Operacional</p>
                  <p className="text-slate-300">Av. Ayrton Senna da Silva, 500 - Sala 1202</p>
                  <p className="text-slate-400">Gleba Palhano • Londrina - PR</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Telefone Direto</p>
                  <p className="text-slate-300">(43) 3344-8890</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <div>
                  <p className="font-semibold text-white">E-mail Técnico</p>
                  <p className="text-slate-300">contato@tracoengenharia.com.br</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Horário de Atendimento</p>
                  <p className="text-slate-300">Segunda a Sexta: 08h às 18h30</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10">
            <a
              href="https://wa.me/5543999999999?text=Olá,%20gostaria%20de%20conversar%20sobre%20um%20novo%20projeto%20com%20a%20Traço%20Engenharia."
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wide shadow-lg transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chamar no WhatsApp Direto</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="p-6 md:p-8 md:w-3/5 overflow-y-auto">
          {sent ? (
            <div className="py-12 flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Mensagem Enviada!</h3>
              <p className="text-xs text-slate-500 mt-2 max-w-xs">
                Nossa diretoria de engenharia entrará em contato em até 4 horas úteis.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight">
                  Inicie seu Novo Empreendimento
                </h3>
                <p className="text-xs text-slate-500">
                  Preencha os dados e receba nossa apresentação técnica e viabilidade.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Seu Nome
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Roberto Andrade"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Incorporadora / Empresa
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nome da Construtora"
                    value={formData.empresa}
                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(43) 99999-9999"
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  E-mail Corporativo
                </label>
                <input
                  type="email"
                  required
                  placeholder="contato@empresa.com.br"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Tipologia do Empreendimento
                </label>
                <select
                  value={formData.tipoProjeto}
                  onChange={(e) => setFormData({ ...formData, tipoProjeto: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
                >
                  <option value="Edifício Residencial Multifamiliar">Edifício Residencial Vertical (Torre)</option>
                  <option value="Edifício Comercial / Corporativo">Edifício Comercial / Corporativo</option>
                  <option value="Condomínio Horizontal de Alto Padrão">Condomínio Horizontal de Alto Padrão</option>
                  <option value="Compatibilização BIM Multidisciplinar">Compatibilização Multidisciplinar BIM</option>
                  <option value="Outro">Outra Tipologia</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Resumo das Necessidades ou Terreno
                </label>
                <textarea
                  rows={3}
                  placeholder="Ex: Terreno de 2.500m² para 60 apartamentos de alto padrão..."
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-[#071d33] hover:bg-sky-950 text-white font-semibold text-xs tracking-wide flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
              >
                <Send className="w-4 h-4 text-sky-400" />
                <span>Solicitar Contato & Proposta Técnica</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
