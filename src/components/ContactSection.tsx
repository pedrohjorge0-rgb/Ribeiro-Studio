import React, { useState } from 'react';
import { AGENCY_CONFIG } from '../data/agencyData';
import { MessageSquare, Send, CheckCircle2, Phone, Mail, Instagram, MapPin, Clock, ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    serviceType: 'Site Institucional',
    urgency: 'Padrão (1 a 2 semanas)',
    budgetRange: 'Acessível / Personalizado',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSendViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) {
      alert('Por favor, informe seu nome.');
      return;
    }

    const messageLines = [
      `*SOLICITAÇÃO DE ORÇAMENTO - RIBEIRO STUDIO*`,
      `• *Nome:* ${formData.name}`,
      formData.company ? `• *Empresa:* ${formData.company}` : '',
      formData.phone ? `• *Telefone/WhatsApp:* ${formData.phone}` : '',
      formData.email ? `• *E-mail:* ${formData.email}` : '',
      `• *Tipo de Projeto:* ${formData.serviceType}`,
      `• *Prazo Estimado:* ${formData.urgency}`,
      formData.message ? `• *Detalhes da Ideia:* ${formData.message}` : '',
    ].filter(Boolean).join('\n');

    const encoded = encodeURIComponent(messageLines);
    const waUrl = `https://wa.me/${AGENCY_CONFIG.whatsappRaw}?text=${encoded}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contato" className="py-24 bg-surface-elevated border-t border-border-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand-gold">
            <span>Inicie seu Projeto</span>
            <span aria-hidden="true" className="text-foreground-subtle">·</span>
            <span className="text-foreground-muted">Solicitar Orçamento</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            Pronto para transformar sua ideia em um <span className="text-gold-gradient">site de alto padrão</span>?
          </h2>

          <p className="text-base sm:text-lg text-foreground-muted leading-relaxed">
            Preencha os campos abaixo para receber um orçamento detalhado ou envie uma mensagem direta no WhatsApp para resposta imediata.
          </p>
        </div>

        {/* 2-Column Layout: Form & Agency Contacts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Briefing / Contact Form */}
          <div className="lg:col-span-7 bg-surface-card border border-border-gold/50 rounded-md p-6 sm:p-8 shadow-card-elevated">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-brand-gold/10 border border-brand-gold/40 flex items-center justify-center text-brand-gold">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Mensagem Enviada com Sucesso!
                </h3>
                <p className="text-sm text-foreground-muted max-w-md mx-auto leading-relaxed">
                  Obrigado pelo contato! Nossa equipe da Ribeiro Studio já está analisando as informações e responderá em até 1 hora no WhatsApp ou e-mail informado.
                </p>

                <div className="pt-6">
                  <a
                    href={AGENCY_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-surface bg-brand-gold hover:bg-brand-gold-light rounded-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Abrir Conversa Direta no WhatsApp</span>
                  </a>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-foreground-subtle hover:text-foreground underline"
                  >
                    Enviar outra solicitação
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSendViaWhatsApp} className="space-y-6">
                <div>
                  <h3 className="text-sm uppercase tracking-wider font-semibold text-foreground">
                    Briefing Rápido do Seu Projeto
                  </h3>
                  <p className="text-xs text-foreground-muted mt-1">
                    Leva menos de 1 minuto para preencher.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-foreground-muted mb-1.5">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex: Carlos Ribeiro"
                      className="w-full px-3.5 py-2.5 text-sm bg-surface border border-border-subtle focus:border-brand-gold rounded-sm text-foreground placeholder:text-foreground-subtle focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-xs font-medium text-foreground-muted mb-1.5">
                      Empresa ou Negócio
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Ex: Ribeiro Advocacia"
                      className="w-full px-3.5 py-2.5 text-sm bg-surface border border-border-subtle focus:border-brand-gold rounded-sm text-foreground placeholder:text-foreground-subtle focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-foreground-muted mb-1.5">
                      WhatsApp com DDD *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Ex: (11) 98765-4321"
                      className="w-full px-3.5 py-2.5 text-sm bg-surface border border-border-subtle focus:border-brand-gold rounded-sm text-foreground placeholder:text-foreground-subtle focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-foreground-muted mb-1.5">
                      Seu Melhor E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="carlos@empresa.com.br"
                      className="w-full px-3.5 py-2.5 text-sm bg-surface border border-border-subtle focus:border-brand-gold rounded-sm text-foreground placeholder:text-foreground-subtle focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="serviceType" className="block text-xs font-medium text-foreground-muted mb-1.5">
                      Tipo de Site Desejado
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-surface border border-border-subtle focus:border-brand-gold rounded-sm text-foreground focus:outline-none transition-colors"
                    >
                      <option value="Site Institucional">Site Institucional Corporativo</option>
                      <option value="Landing Page">Landing Page de Alta Conversão</option>
                      <option value="E-Commerce / Catálogo">Loja Virtual / Catálogo de Produtos</option>
                      <option value="Redesign / Modernização">Redesign de Site Existente</option>
                      <option value="Outro / Projeto Personalizado">Outro Projeto Personalizado</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="urgency" className="block text-xs font-medium text-foreground-muted mb-1.5">
                      Prazo Desejado
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-surface border border-border-subtle focus:border-brand-gold rounded-sm text-foreground focus:outline-none transition-colors"
                    >
                      <option value="Padrão (1 a 2 semanas)">Prazo Padrão (1 a 2 semanas)</option>
                      <option value="Urgente (menos de 7 dias)">Urgência (menos de 7 dias)</option>
                      <option value="Planejando para o próximo mês">Planejando para o próximo mês</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-foreground-muted mb-1.5">
                    Conte um pouco sobre sua ideia e expectativas
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva o que sua empresa faz, referências visuais que você admira ou funcionalidades que precisa..."
                    className="w-full px-3.5 py-2.5 text-sm bg-surface border border-border-subtle focus:border-brand-gold rounded-sm text-foreground placeholder:text-foreground-subtle focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Primary WhatsApp Action Button & Secondary Option */}
                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 py-3.5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-surface bg-brand-gold hover:bg-brand-gold-light rounded-sm shadow-gold-subtle hover:shadow-gold-strong transition-all duration-200 active:scale-[0.99] cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-surface" />
                    <span>Enviar Briefing e Iniciar no WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-center text-foreground-subtle">
                    Seus dados estão protegidos. Respondemos diretamente no WhatsApp sem spam.
                  </p>
                </div>
              </form>
            )}

          </div>

          {/* Right Column: Direct Channels & Agency Information */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct WhatsApp Callout Card */}
            <div className="bg-surface-card border border-border-subtle rounded-md p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs text-brand-gold uppercase tracking-wider font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Atendimento Prioritário</span>
              </div>

              <h4 className="font-display text-xl font-bold text-foreground">
                Prefere conversar diretamente agora?
              </h4>

              <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                Tire suas dúvidas técnicas, apresente suas ideias ou peça uma estimativa de preço direto no WhatsApp com atendimento humanizado.
              </p>

              <div className="pt-2">
                <a
                  href={AGENCY_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-foreground hover:text-brand-gold bg-surface hover:bg-surface-elevated border border-border-subtle hover:border-brand-gold/50 rounded-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-gold" />
                  <span>WhatsApp: {AGENCY_CONFIG.whatsappNumber}</span>
                </a>
              </div>
            </div>

            {/* Contact Channels List */}
            <div className="bg-surface-card border border-border-subtle rounded-md p-6 space-y-5 text-xs sm:text-sm">
              <div className="flex items-start gap-3.5">
                <Instagram className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Instagram Oficial</p>
                  <a
                    href={AGENCY_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground-muted hover:text-brand-gold transition-colors"
                  >
                    {AGENCY_CONFIG.instagramHandle}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-border-subtle">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Abrangência</p>
                  <p className="text-foreground-muted">
                    {AGENCY_CONFIG.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-border-subtle">
                <Clock className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Horário de Operação</p>
                  <p className="text-foreground-muted">
                    Segunda a Sábado · 08h00 às 20h00 (Horário de Brasília)
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Quote / Banner */}
            <div className="p-6 bg-surface-subtle/50 border border-border-gold/30 rounded-md">
              <p className="font-display text-sm italic text-foreground leading-relaxed">
                "{AGENCY_CONFIG.tagline}"
              </p>
              <p className="text-xs text-brand-gold mt-2 font-medium">
                — Compromisso de Qualidade Ribeiro Studio
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
