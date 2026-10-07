import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-foreground font-sans selection:bg-brand-gold/30 selection:text-brand-gold-light relative">
      {/* Top Fixed Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="conteudo-principal">
        {/* 1. Seção inicial impactante */}
        <HeroSection />

        {/* 2. Sobre / Quem sou */}
        <AboutSection />

        {/* 3. Serviços */}
        <ServicesSection />

        {/* 4. Depoimentos */}
        <TestimonialsSection />

        {/* 5. Formulário de contato & Briefing Interativo */}
        <ContactSection />

        {/* FAQ - Dúvidas Frequentes */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Flutuante com status online */}
      <FloatingWhatsApp />
    </div>
  );
}
