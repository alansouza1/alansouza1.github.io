export type Locale = 'en' | 'pt';

export const translations: Record<Locale, Record<string, any>> = {
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      badge: 'Building software. Learning every day.',
      subtitle: 'Software Development Intern @ WAE Tecnologia · Computer Science @ FIAP',
      fallbackBio: 'Computer Science student at FIAP and Software Development Intern at WAE Tecnologia. Focused on building clean, efficient software with modern web technologies.',
      viewProjects: 'View Projects',
      getInTouch: 'Get in Touch',
      currentFocus: 'Current Focus',
      currentFocusValue: 'Full Stack Development',
      repos: 'Repos',
    },
    skills: {
      title: 'Technical Arsenal',
    },
    experience: {
      title: 'Professional Experience',
      wae: {
        role: 'Software Development Intern',
        description: 'Support for the development team in analysis, coding, and system testing phases. Participation in system maintenance and evolution, API and database integration, technical documentation, and user support. Also involved in the project development lifecycle, including planning, development, testing, and deployment, as well as introductory training in GeneXus.',
      },
      synplai: {
        role: 'Volunteer Developer',
        description: 'Contribution to the development and maintenance of systems using Python and Django. Work on bug fixing, issue investigation, new feature development, and code refactoring across different system modules, including clients, vehicles, scheduling, inventory, and finance.',
      },
    },
    education: {
      title: 'Education',
      fiap: {
        role: "Bachelor's Degree in Computer Science",
        description: 'Computer Science degree with focus on software engineering, artificial intelligence, data science, algorithms and cybersecurity.',
      },
      trybe: {
        role: 'Full Stack Web Development',
        description: 'More than 1,500 hours of training focused on software development, frontend, backend, computer science, software engineering, agile methodologies and soft skills.',
      },
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'A collection of my recent work, ranging from web applications to open-source tools.',
      seeAll: 'See all on GitHub',
      noDescription: 'No description provided for this repository.',
    },
    contact: {
      title: "Let's build something",
      titleHighlight: 'extraordinary',
      titleSuffix: 'together.',
      subtitle: 'Have a question, a project idea, or just want to say hi? My inbox is always open!',
      sendEmail: 'Send an Email',
    },
    footer: {
      builtWith: 'Built with React & Tailwind.',
      backToTop: 'Back to top',
    },
  },
  pt: {
    nav: {
      about: 'Sobre',
      projects: 'Projetos',
      experience: 'Experiência',
      contact: 'Contato',
    },
    hero: {
      badge: 'Construindo software. Aprendendo todos os dias.',
      subtitle: 'Estagiário de Desenvolvimento @ WAE Tecnologia · Ciência da Computação @ FIAP',
      fallbackBio: 'Estudante de Ciência da Computação na FIAP e Estagiário de Desenvolvimento na WAE Tecnologia. Focado em construir software limpo e eficiente com tecnologias web modernas.',
      viewProjects: 'Ver Projetos',
      getInTouch: 'Entrar em Contato',
      currentFocus: 'Foco Atual',
      currentFocusValue: 'Desenvolvimento Full Stack',
      repos: 'Repos',
    },
    skills: {
      title: 'Arsenal Técnico',
    },
    experience: {
      title: 'Experiência Profissional',
      wae: {
        role: 'Estagiário de Desenvolvimento',
        description: 'Apoio ao time de desenvolvimento nas etapas de análise, codificação e testes de sistemas. Participação na manutenção e evolução de sistemas, integração de APIs e bancos de dados, documentação técnica e suporte aos usuários. Também participo do ciclo de desenvolvimento de projetos, incluindo planejamento, desenvolvimento, testes e implantação, além de treinamento introdutório em GeneXus.',
      },
      synplai: {
        role: 'Desenvolvedor Voluntário',
        description: 'Contribuição no desenvolvimento e manutenção de sistemas utilizando Python e Django. Atuação na correção de bugs, investigação de problemas, desenvolvimento de novas funcionalidades e refatoração de código em diferentes módulos do sistema, incluindo clientes, veículos, agendamento, estoque e financeiro.',
      },
    },
    education: {
      title: 'Educação',
      fiap: {
        role: 'Bacharelado em Ciência da Computação',
        description: 'Graduação em Ciência da Computação com foco em engenharia de software, inteligência artificial, ciência de dados, algoritmos e cibersegurança.',
      },
      trybe: {
        role: 'Desenvolvimento Web Full Stack',
        description: 'Mais de 1.500 horas de formação focada em desenvolvimento de software, frontend, backend, ciência da computação, engenharia de software, metodologias ágeis e soft skills.',
      },
    },
    projects: {
      title: 'Projetos em Destaque',
      subtitle: 'Uma coleção dos meus trabalhos recentes, de aplicações web a ferramentas open-source.',
      seeAll: 'Ver todos no GitHub',
      noDescription: 'Nenhuma descrição fornecida para este repositório.',
    },
    contact: {
      title: 'Vamos construir algo',
      titleHighlight: 'extraordinário',
      titleSuffix: 'juntos.',
      subtitle: 'Tem uma pergunta, uma ideia de projeto ou só quer trocar uma ideia? Minha caixa de entrada está sempre aberta!',
      sendEmail: 'Enviar um Email',
    },
    footer: {
      builtWith: 'Feito com React & Tailwind.',
      backToTop: 'Voltar ao topo',
    },
  },
};
