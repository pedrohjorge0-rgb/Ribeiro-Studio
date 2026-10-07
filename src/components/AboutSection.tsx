import React from 'react';
import { AGENCY_CONFIG, DIFFERENTIALS } from '../data/agencyData';
import { Check, Sparkles, Target, Compass, Clock, Shield } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-surface-elevated border-t border-border-subtle relative overflow-hidden">
      
      {/* Background glow element */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand-gold">
            <span>Manifesto de Marca</span>
            <span aria-hidden="true" className="text-foreground-subtle">·</span>
            <span className="text-foreground-muted">Quem Somos</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            Construímos a presença digital que sua empresa <span className="text-gold-gradient">merece ter</span>.
          </h2>
          
          <p className="text-base sm:text-lg text-foreground-muted leading-relaxed">
            {AGENCY_CONFIG.aboutSummary}
          </p>
        </div>

        {/* 2-Column Story & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-6 space-y-6 text-foreground-muted text-sm sm:text-base leading-relaxed">
            <p>
              No mercado atual, o site da sua empresa é o primeiro ponto de contato com clientes de alto potencial. Um site lento, com design genérico ou difícil de navegar no celular custa contratos fechados e enfraquece a credibilidade que você levou anos para construir.
            </p>
            <p>
              Na <strong className="text-foreground font-semibold">Ribeiro Studio</strong>, eliminamos a burocracia das agências convencionais. Desenvolvemos soluções personalizadas que equilibram <strong className="text-brand-gold font-semibold">estética de luxo</strong>, <strong className="text-foreground font-semibold">velocidade extrema</strong> e <strong className="text-foreground font-semibold">foco comercial</strong>.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-sm bg-surface-card border border-border-subtle">
                <Target className="w-5 h-5 text-brand-gold mb-2" />
                <h3 className="text-sm font-semibold text-foreground">Foco em Confiança</h3>
                <p className="text-xs text-foreground-muted mt-1">
                  Arquitetura pensada para fazer sua empresa parecer a escolha mais segura e qualificada.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-surface-card border border-border-subtle">
                <Compass className="w-5 h-5 text-brand-gold mb-2" />
                <h3 className="text-sm font-semibold text-foreground">Estratégia Nacional</h3>
                <p className="text-xs text-foreground-muted mt-1">
                  Atendemos marcas em todo o Brasil que buscam expansão e consolidação digital.
                </p>
              </div>
            </div>
          </div>

          {/* Comparative Card: O Modelo Convencional vs Ribeiro Studio */}
          <div className="lg:col-span-6">
            <div className="bg-surface-card border border-border-gold/60 rounded-md p-6 sm:p-8 shadow-card-elevated">
              <div className="flex items-center justify-between pb-6 border-b border-border-subtle">
                <div>
                  <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
                    Diferencial Claro
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mt-1">
                    Por que a Ribeiro Studio?
                  </h3>
                </div>
                <Sparkles className="w-6 h-6 text-brand-gold" />
              </div>

              <div className="divide-y divide-border-subtle mt-4 text-xs sm:text-sm">
                
                <div className="py-3.5 flex items-start justify-between gap-4">
                  <span className="text-foreground-muted">Design & Exclusividade</span>
                  <span className="text-foreground font-medium text-right text-brand-gold">
                    100% exclusivo sob medida (Zero templates)
                  </span>
                </div>

                <div className="py-3.5 flex items-start justify-between gap-4">
                  <span className="text-foreground-muted">Comunicação</span>
                  <span className="text-foreground font-medium text-right">
                    Direta no WhatsApp com o especialista
                  </span>
                </div>

                <div className="py-3.5 flex items-start justify-between gap-4">
                  <span className="text-foreground-muted">Desempenho & Velocidade</span>
                  <span className="text-foreground font-medium text-right">
                    Otimizado para nota 90+ no Google
                  </span>
                </div>

                <div className="py-3.5 flex items-start justify-between gap-4">
                  <span className="text-foreground-muted">Prazo de Entrega</span>
                  <span className="text-foreground font-medium text-right">
                    Ágil: 5 a 14 dias úteis
                  </span>
                </div>

                <div className="py-3.5 flex items-start justify-between gap-4">
                  <span className="text-foreground-muted">Investimento</span>
                  <span className="text-foreground font-medium text-right text-brand-gold">
                    Preço acessível & justo sem taxas ocultas
                  </span>
                </div>

              </div>

              <div className="mt-6 pt-4 border-t border-border-subtle">
                <a
                  href={AGENCY_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-surface bg-brand-gold hover:bg-brand-gold-light transition-colors rounded-sm"
                >
                  <span>Conhecer nossos planos pelo WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Competitive Differentials Grid */}
        <div className="mt-16 pt-12 border-t border-border-subtle">
          <div className="text-left mb-10">
            <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
              Pilares de Excelência
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mt-1">
              Diferenciais que geram valor real para o seu negócio
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIFFERENTIALS.map((item) => (
              <div
                key={item.number}
                className="p-6 bg-surface-card hover:bg-surface-card-hover border border-border-subtle hover:border-border-gold transition-all duration-300 rounded-sm space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-bold text-brand-gold/60 group-hover:text-brand-gold transition-colors tabular-nums">
                    {item.number}
                  </span>
                  <Check className="w-4 h-4 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h4 className="font-semibold text-base text-foreground group-hover:text-brand-gold transition-colors">
                  {item.title}
                </h4>
                
                <p className="text-xs font-medium text-brand-gold/80">
                  {item.subtitle}
                </p>
                
                <p className="text-xs text-foreground-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
