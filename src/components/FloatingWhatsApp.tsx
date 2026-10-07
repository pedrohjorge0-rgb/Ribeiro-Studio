import React, { useState } from 'react';
import { AGENCY_CONFIG } from '../data/agencyData';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      customMsg.trim() || 'Olá! Gostaria de um orçamento para o meu site com a Ribeiro Studio.'
    );
    window.open(`https://wa.me/${AGENCY_CONFIG.whatsappRaw}?text=${text}`, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
    setCustomMsg('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Pop-up Chat Card when opened */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Atendimento rápido Ribeiro Studio"
          className="mb-3 w-80 sm:w-96 bg-surface-elevated border border-border-gold rounded-lg shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
        >
          {/* Card Header */}
          <div className="bg-surface-card p-4 border-b border-border-subtle flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-brand-gold/20 border border-brand-gold flex items-center justify-center font-display font-bold text-xs text-brand-gold">
                  RS
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-surface-card" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">Ribeiro Studio</p>
                <p className="text-[11px] text-brand-gold flex items-center gap-1">
                  <span>Online agora</span>
                  <span aria-hidden="true">·</span>
                  <span>Resposta em minutos</span>
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-foreground-muted hover:text-foreground p-1 rounded-sm focus-visible:outline-none"
              aria-label="Fechar janela do WhatsApp"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Balloon Message */}
          <div className="p-4 bg-surface space-y-3">
            <div className="bg-surface-card border border-border-subtle p-3 rounded-md text-xs text-foreground-muted leading-relaxed">
              <p className="font-semibold text-foreground mb-1">
                Olá! Seja bem-vindo à Ribeiro Studio. 👋
              </p>
              <p>
                Tem alguma dúvida sobre criação de sites, prazos ou quer um orçamento sem compromisso? Digite sua mensagem abaixo ou clique para abrir no WhatsApp:
              </p>
            </div>

            {/* Quick Suggestions */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              <button
                type="button"
                onClick={() => setCustomMsg('Olá! Gostaria de saber os valores para um site institucional.')}
                className="text-[11px] px-2.5 py-1 bg-surface-elevated hover:bg-surface-card border border-border-subtle text-foreground-muted hover:text-brand-gold rounded-sm transition-colors text-left"
              >
                Orçamento de Site
              </button>
              <button
                type="button"
                onClick={() => setCustomMsg('Olá! Preciso de uma Landing Page com entrega rápida.')}
                className="text-[11px] px-2.5 py-1 bg-surface-elevated hover:bg-surface-card border border-border-subtle text-foreground-muted hover:text-brand-gold rounded-sm transition-colors text-left"
              >
                Landing Page Ágil
              </button>
            </div>
          </div>

          {/* Input & Direct Send Form */}
          <form onSubmit={handleSend} className="p-3 bg-surface-card border-t border-border-subtle flex items-center gap-2">
            <input
              type="text"
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1 px-3 py-2 text-xs bg-surface border border-border-subtle focus:border-brand-gold rounded-sm text-foreground placeholder:text-foreground-subtle focus:outline-none"
            />
            <button
              type="submit"
              className="p-2 bg-brand-gold hover:bg-brand-gold-light text-surface rounded-sm transition-colors flex items-center justify-center cursor-pointer"
              title="Iniciar conversa no WhatsApp"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 bg-brand-gold hover:bg-brand-gold-light text-surface font-semibold text-xs rounded-full shadow-gold-strong transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold-light cursor-pointer"
        aria-label="Abrir conversa no WhatsApp da Ribeiro Studio"
        aria-expanded={isOpen}
      >
        {/* Pulsing beacon dot */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-surface opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-surface" />
        </span>

        <MessageSquare className="w-4 h-4 fill-surface" />
        <span className="uppercase tracking-wider font-bold">WhatsApp</span>

        {/* Floating tooltip when closed */}
        {!isOpen && (
          <span className="hidden sm:inline-block border-l border-surface/30 pl-2 text-[11px] font-medium opacity-90">
            Fale conosco
          </span>
        )}
      </button>

    </div>
  );
};
