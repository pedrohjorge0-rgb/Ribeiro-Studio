import React, { useState } from 'react';
import { SERVICES, ServiceItem, AGENCY_CONFIG } from '../data/agencyData';
import { Check, ArrowRight, MessageSquare, Clock, Users, Sparkles } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICES[0]);

  const getWhatsAppServiceLink = (serviceTitle: string) => {
    const text = encodeURIComponent(
      `Olá! Tenho interesse no serviço de "${serviceTitle}" da Ribeiro Studio e gostaria de solicitar um orçamento personalizado.`
    );
    return `https://wa.me/${AGENCY_CONFIG.whatsappRaw}?text=${text}`;
  };

  return (
    <section id="servicos" className="py-24 bg-surface relative overflow-hidden">
      
      {/* Background radial highlight */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute left-1/2 -top-40 -translate-x-1/2 w-[800px] h-[500px] bg-brand-gold/[0.04] blur-[150px] rounded-full" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand-gold">
            <span>Soluções Digitais</span>
            <span aria-hidden="true" className="text-foreground-subtle">·</span>
            <span className="text-foreground-muted">Criação de Sites em Geral</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            Projetos sob medida para cada momento da <span className="text-gold-gradient">sua empresa</span>.
          </h2>

          <p className="text-base sm:text-lg text-foreground-muted leading-relaxed">
            Seja um site institucional imponente, uma landing page focada em vendas ou uma loja virtual completa, desenvolvemos a estrutura exata para posicionar sua marca com destaque.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          
          {SERVICES.map((service, index) => {
            const isFeatured = index === 0 || index === 1;
            const colSpan = isFeatured ? 'lg:col-span-6' : 'lg:col-span-6';

            return (
              <div
                key={service.id}
                className={`${colSpan} bg-surface-elevated hover:bg-surface-card border border-border-subtle hover:border-border-gold transition-all duration-300 rounded-sm p-6 sm:p-8 flex flex-col justify-between group shadow-sm`}
              >
                <div>
                  {/* Top metadata line (No pill boxes, unboxed text with separators) */}
                  <div className="flex items-center justify-between pb-6 border-b border-border-subtle text-xs text-foreground-subtle">
                    <span className="font-display text-2xl font-bold text-brand-gold/70 group-hover:text-brand-gold transition-colors tabular-nums">
                      {service.number}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-brand-gold font-medium">{service.badge}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1 text-foreground-muted">
                        <Clock className="w-3.5 h-3.5" />
                        {service.deliveryTime}
                      </span>
                    </div>
                  </div>

                  {/* Title & Short description */}
                  <div className="mt-6 space-y-3">
                    <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-brand-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Deliverables / Checklist */}
                  <div className="mt-6 pt-6 border-t border-border-subtle space-y-2.5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      O que está incluso:
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-foreground-muted">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal for tag */}
                  <div className="mt-6 pt-4 border-t border-border-subtle text-xs text-foreground-subtle">
                    <span className="font-semibold text-foreground-muted">Recomendado para: </span>
                    <span>{service.idealFor}</span>
                  </div>
                </div>

                {/* Card CTA: WhatsApp Direct Link */}
                <div className="mt-8 pt-4">
                  <a
                    href={getWhatsAppServiceLink(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-foreground hover:text-surface bg-surface-card hover:bg-brand-gold border border-border-subtle hover:border-brand-gold transition-all duration-200 rounded-sm group/btn"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-brand-gold group-hover/btn:text-surface transition-colors" />
                    <span>Orçamento para {service.title.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>
            );
          })}

        </div>

        {/* Global Services Bottom Note */}
        <div className="mt-12 p-6 sm:p-8 bg-surface-card border border-border-subtle rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-display text-lg font-bold text-foreground">
              Precisa de um projeto sob medida ou não tem certeza de qual escolher?
            </h4>
            <p className="text-xs sm:text-sm text-foreground-muted">
              Fazemos um diagnóstico gratuito do seu negócio no WhatsApp em menos de 10 minutos.
            </p>
          </div>

          <a
            href={AGENCY_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-surface bg-brand-gold hover:bg-brand-gold-light rounded-sm shadow-gold-subtle transition-all whitespace-nowrap active:scale-[0.98]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Falar com Especialista Agora</span>
          </a>
        </div>

      </div>
    </section>
  );
};
