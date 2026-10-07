import React from 'react';
import { AGENCY_CONFIG } from '../data/agencyData';
import { Instagram, MessageSquare, ArrowUp, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface border-t border-border-subtle text-foreground-muted text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border-subtle items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-display text-xl font-bold tracking-wider text-foreground block">
              RIBEIRO <span className="text-brand-gold">STUDIO</span>
            </span>

            <p className="text-foreground-muted text-xs leading-relaxed max-w-sm">
              {AGENCY_CONFIG.tagline}
            </p>

            <p className="text-foreground-subtle text-xs leading-relaxed max-w-sm">
              Especialistas em desenvolvimento de sites profissionais, landing pages de alta conversão e soluções digitais de alto padrão para marcas em todo o Brasil.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={AGENCY_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-surface-elevated hover:bg-surface-card border border-border-subtle hover:border-brand-gold text-foreground-muted hover:text-brand-gold rounded-sm transition-colors"
                aria-label="Perfil do Instagram da Ribeiro Studio"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={AGENCY_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-surface-elevated hover:bg-surface-card border border-border-subtle hover:border-brand-gold text-foreground-muted hover:text-brand-gold rounded-sm transition-colors"
                aria-label="WhatsApp da Ribeiro Studio"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav links column */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Navegação
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="hover:text-brand-gold transition-colors">Sobre a Agência</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-brand-gold transition-colors">Serviços Oferecidos</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-brand-gold transition-colors">Depoimentos de Clientes</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-brand-gold transition-colors">Solicitar Orçamento</a>
              </li>
            </ul>
          </div>

          {/* Contact Direct Info */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Canais Diretos
            </p>
            <div className="space-y-2 text-foreground-muted">
              <p>
                <strong className="text-foreground">WhatsApp:</strong>{' '}
                <a
                  href={AGENCY_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold transition-colors underline"
                >
                  {AGENCY_CONFIG.whatsappNumber}
                </a>
              </p>
              <p>
                <strong className="text-foreground">Instagram:</strong>{' '}
                <a
                  href={AGENCY_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold transition-colors"
                >
                  {AGENCY_CONFIG.instagramHandle}
                </a>
              </p>
              <p>
                <strong className="text-foreground">Atendimento:</strong> {AGENCY_CONFIG.location}
              </p>
              <p className="text-foreground-subtle text-[11px] pt-1">
                Segunda a Sábado das 08h às 20h
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Quiet Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-foreground-subtle text-[11px]">
          <div>
            © {new Date().getFullYear()} Ribeiro Studio. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <span>Privacidade & Transparência</span>
            <span aria-hidden="true">·</span>
            <span>Termos de Serviço</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-foreground-muted hover:text-brand-gold transition-colors focus-visible:outline-none"
              aria-label="Voltar ao topo da página"
            >
              <span>Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
