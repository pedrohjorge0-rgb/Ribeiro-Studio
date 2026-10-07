import React, { useState } from 'react';
import { FAQS, AGENCY_CONFIG } from '../data/agencyData';
import { ChevronDown, MessageSquare } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-surface border-t border-border-subtle relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand-gold">
            <span>Perguntas Frequentes</span>
            <span aria-hidden="true" className="text-foreground-subtle">·</span>
            <span className="text-foreground-muted">Transparência Total</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight text-balance">
            Tudo o que você precisa saber antes de iniciar seu site
          </h2>

          <p className="text-sm sm:text-base text-foreground-muted max-w-xl mx-auto">
            Esclarecemos as principais dúvidas sobre processos, prazos e investimentos.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-surface-elevated border border-border-subtle hover:border-border-gold/40 rounded-sm overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-sm sm:text-base text-foreground">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-brand-gold transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-foreground-muted leading-relaxed border-t border-border-subtle/50 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Small Note */}
        <div className="mt-10 text-center">
          <p className="text-xs text-foreground-subtle">
            Ainda com alguma dúvida específica para o seu modelo de negócio?{' '}
            <a
              href={AGENCY_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:underline font-semibold"
            >
              Fale diretamente no WhatsApp &rarr;
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
