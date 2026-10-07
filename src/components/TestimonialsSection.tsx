import React from 'react';
import { TESTIMONIALS, AGENCY_CONFIG } from '../data/agencyData';
import { Quote, CheckCircle2, Star, ArrowRight } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-surface border-t border-border-subtle relative overflow-hidden">
      
      {/* Background radial accent */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute right-10 bottom-10 w-[500px] h-[400px] bg-brand-gold/[0.04] blur-[140px] rounded-full" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand-gold">
            <span>Prova Social & Confiança</span>
            <span aria-hidden="true" className="text-foreground-subtle">·</span>
            <span className="text-foreground-muted">Depoimentos Reais</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            A opinião de quem já confiou na <span className="text-gold-gradient">Ribeiro Studio</span>.
          </h2>

          <p className="text-base sm:text-lg text-foreground-muted leading-relaxed">
            Mais do que entregar arquivos de design, nos tornamos parceiros de crescimento de cada empresa atendida.
          </p>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-surface-elevated hover:bg-surface-card border border-border-subtle hover:border-border-gold transition-all duration-300 rounded-sm p-7 flex flex-col justify-between space-y-6 shadow-sm"
            >
              <div className="space-y-4">
                {/* Gold Stars */}
                <div className="flex items-center gap-1 text-brand-gold" aria-label="Avaliação 5 estrelas">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold" />
                  ))}
                </div>

                {/* Highlight Quote */}
                <p className="text-sm font-semibold text-brand-gold leading-snug">
                  "{item.highlight}"
                </p>

                {/* Detailed Comment */}
                <p className="text-sm text-foreground-muted leading-relaxed">
                  "{item.comment}"
                </p>
              </div>

              {/* Author & Verification */}
              <div className="pt-6 border-t border-border-subtle flex items-center gap-3.5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border border-border-gold/50 shrink-0"
                />

                <div className="text-xs">
                  <div className="flex items-center gap-1.5 font-semibold text-foreground">
                    <span>{item.name}</span>
                    <span title="Cliente verificado" className="inline-flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold" />
                    </span>
                  </div>
                  <p className="text-foreground-muted mt-0.5">
                    {item.role} · <span className="text-foreground-subtle">{item.company}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Process Steps Section (natural extension to explain HOW we deliver this standard) */}
        <div className="mt-24 pt-16 border-t border-border-subtle">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
              Metodologia Transparente
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mt-1">
              Como funciona o processo de criação do seu site
            </h3>
            <p className="text-xs sm:text-sm text-foreground-muted mt-2">
              Da ideia inicial até o site no ar gerando contatos para o seu negócio, sem complicações.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 bg-surface-card border border-border-subtle rounded-sm space-y-3">
              <span className="font-display text-2xl font-bold text-brand-gold/70 tabular-nums">01</span>
              <h4 className="font-semibold text-sm text-foreground">Diagnóstico & Alinhamento</h4>
              <p className="text-xs text-foreground-muted leading-relaxed">
                Entendemos sua história, concorrentes, público-alvo e definimos os objetivos de conversão do projeto.
              </p>
            </div>

            <div className="p-6 bg-surface-card border border-border-subtle rounded-sm space-y-3">
              <span className="font-display text-2xl font-bold text-brand-gold/70 tabular-nums">02</span>
              <h4 className="font-semibold text-sm text-foreground">Design Exclusivo</h4>
              <p className="text-xs text-foreground-muted leading-relaxed">
                Criamos a interface visual de alto padrão alinhada com as cores e prestígio da sua marca.
              </p>
            </div>

            <div className="p-6 bg-surface-card border border-border-subtle rounded-sm space-y-3">
              <span className="font-display text-2xl font-bold text-brand-gold/70 tabular-nums">03</span>
              <h4 className="font-semibold text-sm text-foreground">Desenvolvimento & Otimização</h4>
              <p className="text-xs text-foreground-muted leading-relaxed">
                Programação ultra-rápida, integrações com WhatsApp e configuração de segurança SSL.
              </p>
            </div>

            <div className="p-6 bg-surface-card border border-border-subtle rounded-sm space-y-3">
              <span className="font-display text-2xl font-bold text-brand-gold/70 tabular-nums">04</span>
              <h4 className="font-semibold text-sm text-foreground">Lançamento & Suporte</h4>
              <p className="text-xs text-foreground-muted leading-relaxed">
                Publicação no seu domínio oficial e treinamento para sua equipe gerenciar o canal de contatos.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
