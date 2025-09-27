import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'pt' | 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    'nav.about': 'Perfil Profissional',
    'nav.skills': 'Competências Técnicas',
    'nav.education': 'Formação Acadêmica',
    'nav.contact': 'Contacto Profissional',
    'hero.title': 'Higor Araujo Leite e Silva',
    'hero.subtitle': 'Engenheiro de Software Sênior',
    'hero.description': 'Engenheiro de Software especializado em desenvolvimento Java corporativo, com vasta experiência na concepção e modernização de aplicações empresariais escaláveis e seguras. Reconhecida expertise em ecossistema Java, Spring Framework e arquiteturas de microserviços, complementada por sólida formação em DevOps e plataformas de computação em nuvem.',
    'hero.location': 'Zaventem, Reino da Bélgica',
    'hero.cta': 'Estabelecer Contacto',
    'about.title': 'Perfil Profissional',
    'about.intro': 'Engenheiro de Software Sênior com experiência consolidada na concepção, desenvolvimento e modernização de aplicações empresariais de alta complexidade. Especialização técnica aprofundada em Java, ecossistema Spring e arquiteturas de microserviços, sustentada por formação abrangente em metodologias DevOps, plataformas de computação em nuvem e administração de sistemas de gestão de bases de dados.',
    'about.migration': 'Demonstro competência técnica especializada na migração de sistemas legados para soluções conteinerizadas e arquitecturas cloud-native. Presentemente, dedico-me ao aprofundamento de conhecimentos em Quarkus Framework e à investigação de casos de implementação em ambientes empresariais.',
    'about.certification': 'Detentor de certificações profissionais em tecnologias Java e metodologias ágeis de desenvolvimento. Fluência profissional em inglês e português, com conhecimentos fundamentais de francês e holandês. Experiência profissional consolidada em mercados internacionais: Brasil, Portugal e Bélgica.',
    'about.learning': 'Orientado por uma filosofia de aprendizagem contínua e desenvolvimento profissional permanente, considero que a aquisição constante de conhecimento constitui o fundamento essencial para a excelência técnica e a inovação sustentável.',
    'skills.title': 'Competências Técnicas Especializadas',
    'skills.programming': 'Desenvolvimento & Frameworks',
    'skills.cloud': 'Computação em Nuvem & Contentorização',
    'skills.databases': 'Sistemas de Gestão de Bases de Dados',
    'skills.devops': 'DevOps & Observabilidade de Sistemas',
    'skills.practices': 'Metodologias e Práticas Modernas',
    'education.title': 'Formação Académica & Certificações Profissionais',
    'contact.title': 'Contacto Profissional',
    'contact.description': 'Encontro-me disponível para estabelecer contactos profissionais e explorar oportunidades de colaboração empresarial. Agradeço o interesse em estabelecer uma comunicação formal.',
    'contact.email': 'Correio Electrónico',
    'contact.linkedin': 'LinkedIn Profissional',
    'contact.github': 'Repositório GitHub',
    'footer.rights': 'Todos os direitos reservados.',
  },
  en: {
    'nav.about': 'Professional Profile',
    'nav.skills': 'Technical Competencies',
    'nav.education': 'Academic Credentials',
    'nav.contact': 'Professional Contact',
    'hero.title': 'Higor Araujo Leite e Silva',
    'hero.subtitle': 'Senior Software Engineer',
    'hero.description': 'Senior Software Engineer specializing in enterprise Java development, with extensive experience in the design and modernization of scalable and secure enterprise applications. Demonstrated expertise in Java ecosystem, Spring Framework, and microservices architectures, complemented by comprehensive knowledge in DevOps methodologies and cloud computing platforms.',
    'hero.location': 'Zaventem, Kingdom of Belgium',
    'hero.cta': 'Establish Contact',
    'about.title': 'Professional Profile',
    'about.intro': 'Senior Software Engineer with proven experience in the conception, development, and modernization of complex enterprise applications. Deep technical specialization in Java, Spring ecosystem, and microservices architectures, supported by comprehensive expertise in DevOps methodologies, cloud computing platforms, and database management systems administration.',
    'about.migration': 'Demonstrate specialized technical competency in the migration of legacy systems to containerized solutions and cloud-native architectures. Currently dedicated to advancing knowledge in Quarkus Framework and investigating implementation cases in enterprise environments.',
    'about.certification': 'Holder of professional certifications in Java technologies and agile development methodologies. Professional fluency in English and Portuguese, with fundamental knowledge of French and Dutch. Established professional experience in international markets: Brazil, Portugal, and Belgium.',
    'about.learning': 'Guided by a philosophy of continuous learning and permanent professional development, I consider that constant knowledge acquisition constitutes the essential foundation for technical excellence and sustainable innovation.',
    'skills.title': 'Specialized Technical Competencies',
    'skills.programming': 'Development & Frameworks',
    'skills.cloud': 'Cloud Computing & Containerization',
    'skills.databases': 'Database Management Systems',
    'skills.devops': 'DevOps & Systems Observability',
    'skills.practices': 'Modern Methodologies & Practices',
    'education.title': 'Academic Credentials & Professional Certifications',
    'contact.title': 'Professional Contact',
    'contact.description': 'I remain available to establish professional contacts and explore opportunities for business collaboration. I appreciate your interest in establishing formal communication.',
    'contact.email': 'Electronic Mail',
    'contact.linkedin': 'Professional LinkedIn',
    'contact.github': 'GitHub Repository',
    'footer.rights': 'All rights reserved.',
  },
  fr: {
    'nav.about': 'Profil Professionnel',
    'nav.skills': 'Compétences Techniques',
    'nav.education': 'Formation Académique',
    'nav.contact': 'Contact Professionnel',
    'hero.title': 'Higor Araujo Leite e Silva',
    'hero.subtitle': 'Ingénieur Logiciel Senior',
    'hero.description': 'Ingénieur Logiciel Senior spécialisé dans le développement Java d\'entreprise, avec une vaste expérience dans la conception et la modernisation d\'applications d\'entreprise évolutives et sécurisées. Expertise démontrée dans l\'écosystème Java, Spring Framework et architectures de microservices, complétée par une connaissance approfondie des méthodologies DevOps et plateformes de cloud computing.',
    'hero.location': 'Zaventem, Royaume de Belgique',
    'hero.cta': 'Établir le Contact',
    'about.title': 'Profil Professionnel',
    'about.intro': 'Ingénieur Logiciel Senior avec une expérience éprouvée dans la conception, le développement et la modernisation d\'applications d\'entreprise complexes. Spécialisation technique approfondie en Java, écosystème Spring et architectures de microservices, soutenue par une expertise complète en méthodologies DevOps, plateformes de cloud computing et administration de systèmes de gestion de bases de données.',
    'about.migration': 'Démontre une compétence technique spécialisée dans la migration de systèmes legacy vers des solutions conteneurisées et architectures cloud-native. Actuellement dédié à l\'approfondissement des connaissances en Quarkus Framework et à l\'investigation de cas d\'implémentation dans des environnements d\'entreprise.',
    'about.certification': 'Détenteur de certifications professionnelles en technologies Java et méthodologies de développement agile. Maîtrise professionnelle de l\'anglais et du portugais, avec connaissances fondamentales du français et du néerlandais. Expérience professionnelle établie sur les marchés internationaux : Brésil, Portugal et Belgique.',
    'about.learning': 'Guidé par une philosophie d\'apprentissage continu et de développement professionnel permanent, je considère que l\'acquisition constante de connaissances constitue le fondement essentiel de l\'excellence technique et de l\'innovation durable.',
    'skills.title': 'Compétences Techniques Spécialisées',
    'skills.programming': 'Développement & Frameworks',
    'skills.cloud': 'Cloud Computing & Conteneurisation',
    'skills.databases': 'Systèmes de Gestion de Bases de Données',
    'skills.devops': 'DevOps & Observabilité des Systèmes',
    'skills.practices': 'Méthodologies et Pratiques Modernes',
    'education.title': 'Formation Académique & Certifications Professionnelles',
    'contact.title': 'Contact Professionnel',
    'contact.description': 'Je demeure disponible pour établir des contacts professionnels et explorer des opportunités de collaboration d\'entreprise. J\'apprécie votre intérêt à établir une communication formelle.',
    'contact.email': 'Courrier Électronique',
    'contact.linkedin': 'LinkedIn Professionnel',
    'contact.github': 'Dépôt GitHub',
    'footer.rights': 'Tous droits réservés.',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};