import React from 'react';
import { AGENCY_CONFIG } from '../data/agencyData';
import { MessageSquare, ArrowRight, ShieldCheck, Zap, Award } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-surface bg-subtle-mesh">
      {/* Subtle ambient gold glow in background */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-gold/10 blur-[130px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Quiet kicker text (No pill enclosures) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-brand-gold">
              <span>Agência Digital de Alto Padrão</span>
              <span aria-hidden="true" className="text-foreground-subtle">·</span>
              <span className="text-foreground-muted">Presença & Confiança</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] text-balance">
              Sua ideia. <br />
              <span className="text-gold-gradient">Nosso design.</span>
            </h1>

            {/* Subtitle / Proposition */}
            <p className="text-base sm:text-lg text-foreground-muted max-w-xl font-normal leading-relaxed">
              Criamos sites modernos, rápidos e estratégicos para empresas que não aceitam o amadorismo e desejam transmitir autoridade inquestionável no digital.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={AGENCY_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-surface bg-brand-gold hover:bg-brand-gold-light transition-all duration-200 rounded-sm shadow-gold-subtle hover:shadow-gold-strong active:scale-[0.98] group"
              >
                <MessageSquare className="w-4 h-4 text-surface" />
                <span>Solicitar Orçamento no WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs sm:text-sm font-semibold tracking-wider text-foreground hover:text-brand-gold bg-surface-elevated hover:bg-surface-card border border-border-subtle hover:border-brand-gold/40 transition-colors rounded-sm"
              >
                <span>Conhecer Nossos Serviços</span>
              </a>
            </div>

            {/* Quantitative trust markers directly adjacent to hero proposition */}
            <div className="pt-6 border-t border-border-subtle grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="font-display text-xl sm:text-2xl font-bold text-foreground tabular-nums">
                  100%
                </p>
                <p className="text-xs text-foreground-muted mt-0.5">
                  Design Exclusivo sob medida
                </p>
              </div>

              <div>
                <p className="font-display text-xl sm:text-2xl font-bold text-brand-gold tabular-nums">
                  &lt; 1.2s
                </p>
                <p className="text-xs text-foreground-muted mt-0.5">
                  Velocidade em redes móveis
                </p>
              </div>

              <div>
                <p className="font-display text-xl sm:text-2xl font-bold text-foreground tabular-nums">
                  Direto
                </p>
                <p className="text-xs text-foreground-muted mt-0.5">
                  Atendimento sem intermediários
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Marquee Hero Showcase Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Gold frame backdrop */}
              <div className="relative rounded-lg overflow-hidden border border-border-gold shadow-2xl bg-surface-card">
                
                {/* Browser top bar mockup */}
                <div className="bg-surface-elevated px-4 py-2.5 border-b border-border-subtle flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  </div>
                  <div className="text-[11px] font-mono text-foreground-subtle tracking-tight flex items-center gap-1.5">
                    <ShieldCheck className="w-3 h-3 text-brand-gold" />
                    <span>ribeirostudio.com.br</span>
                  </div>
                  <div className="w-6" />
                </div>

                {/* Hero preview image with fallback container */}
                <div className="relative aspect-[16/10] bg-surface-subtle overflow-hidden">
                  <img
                    src="/src/assets/images/hero_web_agency_1791344034541.jpg"
                    alt="Exemplo de interface web sofisticada desenvolvida pela Ribeiro Studio"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  
                  {/* Subtle gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
                </div>

                {/* Card footer details */}
                <div className="p-4 bg-surface-elevated flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-brand-gold" />
                    <span className="text-foreground-muted">Otimizado para Alta Conversão</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-brand-gold font-medium">
                    <Award className="w-3.5 h-3.5" />
                    <span>Padrão Internacional</span>
                  </div>
                </div>

              </div>

              {/* Decorative accent card */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-surface-card/95 backdrop-blur-md border border-border-gold/50 p-4 rounded-sm shadow-xl hidden sm:block max-w-[240px]">
                <p className="text-[11px] uppercase tracking-wider text-brand-gold font-semibold">
                  Garantia de Qualidade
                </p>
                <p className="text-xs text-foreground mt-1 leading-snug">
                  Desenvolvimento focado em gerar confiança e clientes no WhatsApp.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
