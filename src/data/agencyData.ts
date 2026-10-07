export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  description: string;
  badge: string;
  features: string[];
  idealFor: string;
  deliveryTime: string;
}

export interface DifferentialItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  comment: string;
  highlight: string;
  verified: boolean;
}

export const AGENCY_CONFIG = {
  name: "Ribeiro Studio",
  tagline: "Sua ideia. Nosso design.",
  whatsappNumber: "+1 (607) 281-0151",
  whatsappRaw: "16072810151",
  whatsappUrl: "https://wa.me/16072810151?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20o%20meu%20site%20com%20a%20Ribeiro%20Studio!",
  instagramHandle: "@r.ibeirostudios",
  instagramUrl: "https://instagram.com/r.ibeirostudios",
  location: "Brasil • Atendimento Nacional",
  aboutSummary: "A Ribeiro Studio nasceu com um propósito simples: transformar negócios em marcas mais fortes no digital. Criamos sites modernos, rápidos e estratégicos, combinando com design sofisticado, tecnologia e uma experiência pensada para transmitir confiança e gerar resultados."
};

export const SERVICES: ServiceItem[] = [
  {
    id: "institucional",
    number: "01",
    title: "Sites Institucionais de Autoridade",
    shortDesc: "Posicionamento digital de alto padrão para empresas, escritórios e profissionais liberais.",
    description: "Desenvolvemos a vitrine digital definitiva da sua empresa. Uma estrutura arquitetada para passar credibilidade imediata, apresentar sua equipe, serviços e diferenciais com sofisticação.",
    badge: "Mais Procurado",
    features: [
      "Design 100% exclusivo e responsivo",
      "Páginas de Serviços, Quem Somos e Contato",
      "Otimização inicial para Google (SEO)",
      "Carregamento ultra-rápido (nota 90+ no PageSpeed)",
      "Integração com WhatsApp e formulários seguros"
    ],
    idealFor: "Empresas consolidadas, clínicas, escritórios jurídicos e consultorias",
    deliveryTime: "7 a 14 dias úteis"
  },
  {
    id: "landing-page",
    number: "02",
    title: "Landing Pages de Alta Conversão",
    shortDesc: "Páginas focadas em transformar tráfego pago em clientes e orçamentos no WhatsApp.",
    description: "Cada seção é minuciosamente desenhada segundo os princípios de neuromarketing e copywriting persuasivo para eliminar objeções e conduzir o visitante ao botão de ação.",
    badge: "Foco em Vendas",
    features: [
      "Copywriting estratégico e persuasivo",
      "Gatilhos visuais de autoridade e urgência",
      "Compatível com Meta Ads, Google Ads e TikTok",
      "Carregamento instantâneo em redes móveis",
      "Rastreamento avançado (Pixel, GA4, GTM)"
    ],
    idealFor: "Lançamento de produtos, prestadores de serviços e captação de leads",
    deliveryTime: "5 a 10 dias úteis"
  },
  {
    id: "ecommerce",
    number: "03",
    title: "Lojas Virtuais & Catálogos Digitais",
    shortDesc: "Plataformas de venda com visual minimalista de luxo e checkout sem atrito.",
    description: "Apresente seus produtos físicos ou digitais com a estética dos maiores nomes globais. Experiência de compra fluida, intuitiva e pensada para elevar o ticket médio.",
    badge: "E-Commerce",
    features: [
      "Catálogo dinâmico com fotos em alta resolução",
      "Integração com meios de pagamento nacionais (Pix, Cartão)",
      "Cálculo automático de frete e gestão de estoque",
      "Painel administrativo simples e intuitivo",
      "Checkout otimizado para celular em 1 clique"
    ],
    idealFor: "Marcas autorais, moda, joalherias, cosméticos e indústrias",
    deliveryTime: "15 a 25 dias úteis"
  },
  {
    id: "redesign",
    number: "04",
    title: "Redesign & Modernização de Sites",
    shortDesc: "Atualização completa para sites antigos ou lentos que não transmitem confiança.",
    description: "Se o seu site parece de dez anos atrás ou demora para carregar, você está perdendo clientes diariamente. Reescrevemos a arquitetura e estética do zero preservando seu histórico.",
    badge: "Modernização",
    features: [
      "Diagnóstico completo de deficiências atuais",
      "Nova identidade visual refinada",
      "Migração segura sem perda de posicionamento SEO",
      "Melhoria drástica na velocidade e usabilidade móvel",
      "Suporte e treinamento completo da nova interface"
    ],
    idealFor: "Empresas com sites desatualizados precisando de reposicionamento",
    deliveryTime: "7 a 15 dias úteis"
  }
];

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    number: "01",
    title: "Design Personalizado",
    subtitle: "Zero modelos genéricos",
    description: "Cada linha de código e pixel é desenhada sob medida para a sua marca. Seu concorrente nunca terá um site igual ao seu."
  },
  {
    number: "02",
    title: "Preço Acessível & Justo",
    subtitle: "Alto padrão sem cobrar valores exorbitantes",
    description: "Desenvolvimento enxuto e direto ao ponto que cabe no orçamento da sua empresa com excelente retorno sobre o investimento."
  },
  {
    number: "03",
    title: "Atendimento Próximo",
    subtitle: "Comunicação transparente do início ao fim",
    description: "Você fala diretamente com quem está construindo seu projeto via WhatsApp, sem intermediários ou burocracias de agências engessadas."
  },
  {
    number: "04",
    title: "Alta Performance & Velocidade",
    subtitle: "Carregamento instantâneo que o Google premia",
    description: "Sites construídos com as tecnologias mais modernas do mercado, garantindo notas altas no PageSpeed e melhor retenção no celular."
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    name: "Dr. Marcelo Castilho",
    role: "Diretor Clínico",
    company: "Instituto Castilho de Oftalmologia",
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80",
    comment: "A Ribeiro Studio transformou por completo a percepção da nossa clínica na internet. Os pacientes frequentemente elogiam a facilidade do agendamento e o visual sofisticado do site. Nosso volume de pacientes particulares cresceu já no primeiro mês.",
    highlight: "+160% novos agendamentos particulares",
    verified: true
  },
  {
    id: "2",
    name: "Camila Guimarães",
    role: "Sócia-Fundadora",
    company: "Guimarães & Prado Arquitetura",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    comment: "Eu tinha muito receio de contratar agências que entregam sites lentos ou templates prontos do WordPress. O Pedro e a Ribeiro Studio entregaram uma obra de arte: rápido, elegante e com um suporte impecável no WhatsApp.",
    highlight: "Site carregando em menos de 1 segundo",
    verified: true
  },
  {
    id: "3",
    name: "Rodrigo Vasconcelos",
    role: "CEO & Co-fundador",
    company: "Apex Tech Consulting",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80",
    comment: "Precisávamos de um site institucional para fechar contratos B2B com multinacionais. A credibilidade que o novo site transmitiu foi decisiva na nossa última rodada de propostas comerciais. Investimento pago com sobra.",
    highlight: "Contratos B2B fechados com mais agilidade",
    verified: true
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Diagnóstico & Briefing",
    desc: "Entendemos seu modelo de negócio, seus clientes ideais, objetivos de faturamento e referências visuais."
  },
  {
    step: "02",
    title: "Design Exclusivo",
    desc: "Desenhamos a estrutura visual com foco na autoridade da sua marca e facilidade de navegação."
  },
  {
    step: "03",
    title: "Desenvolvimento & Performance",
    desc: "Codificação moderna, otimização de velocidade para mobile e integração direta com WhatsApp e métricas."
  },
  {
    step: "04",
    title: "Publicação & Suporte",
    desc: "Colocamos seu site no ar em seu domínio próprio com certificado de segurança SSL e suporte contínuo."
  }
];

export const FAQS = [
  {
    question: "Quanto tempo leva para o meu site ficar pronto?",
    answer: "O prazo médio de entrega varia de 5 a 14 dias úteis, dependendo da complexidade do projeto (Landing page ou Site institucional completo). Mantemos contato contínuo no WhatsApp para que você acompanhe cada etapa."
  },
  {
    question: "O site funciona perfeitamente no celular?",
    answer: "Sim! Mais de 80% do tráfego hoje vem de dispositivos móveis. Nossos sites são desenvolvidos com metodologia 'Mobile-First', garantindo carregamento instantâneo e layout adaptado para qualquer tela de smartphone."
  },
  {
    question: "Eu preciso já ter domínio e hospedagem contratados?",
    answer: "Não se preocupe se ainda não tiver. Na Ribeiro Studio auxiliamos você na escolha, registro do seu domínio (.com.br ou .com) e configuração dos servidores mais rápidos do mercado."
  },
  {
    question: "Como funciona a forma de pagamento?",
    answer: "Trabalhamos com condições acessíveis e flexíveis: 50% de entrada no início do projeto e 50% após a aprovação final e publicação, além de opções parceladas no cartão de crédito via Pix ou link seguro."
  },
  {
    question: "Vou conseguir alterar textos ou adicionar fotos no futuro?",
    answer: "Sim. Criamos seu site de forma intuitiva e fornecemos orientações práticas em vídeo para você ou sua equipe gerenciarem informações básicas, além do nosso canal de suporte pós-lançamento."
  }
];
