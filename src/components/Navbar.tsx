import React, { useState, useEffect } from 'react';
import { AGENCY_CONFIG } from '../data/agencyData';
import { MessageSquare, Instagram, Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface/90 backdrop-blur-md border-b border-border-subtle py-3.5 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (Single text element in display face) */}
        <a
          href="#"
          className="group flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm"
          aria-label="Ribeiro Studio - Início"
        >
          <span className="font-display text-xl sm:text-2xl font-bold tracking-wider text-foreground group-hover:text-brand-gold transition-colors">
            RIBEIRO <span className="text-brand-gold">STUDIO</span>
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground-muted" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-foreground transition-colors hover:underline decoration-brand-gold decoration-2 underline-offset-8"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={AGENCY_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @r.ibeirostudios"
            className="text-foreground-muted hover:text-brand-gold transition-colors p-2 rounded-lg hover:bg-surface-elevated"
            title="Siga no Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>

          <a
            href={AGENCY_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-surface bg-brand-gold hover:bg-brand-gold-light rounded-sm transition-all duration-200 shadow-gold-subtle hover:shadow-gold-strong whitespace-nowrap active:scale-[0.98]"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Solicitar Orçamento</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={AGENCY_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-surface bg-brand-gold rounded-sm"
          >
            <span>Orçamento</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground-muted hover:text-foreground focus-visible:outline-none"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-elevated border-b border-border-subtle px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-foreground-muted hover:text-brand-gold rounded-md hover:bg-surface transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-border-subtle flex flex-col gap-2.5">
            <a
              href={AGENCY_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-surface bg-brand-gold hover:bg-brand-gold-light rounded-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Orçamento no WhatsApp</span>
            </a>
            <a
              href={AGENCY_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-xs text-foreground-muted py-2 hover:text-brand-gold transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram: {AGENCY_CONFIG.instagramHandle}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
