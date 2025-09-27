import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center">
          <div className="font-serif text-2xl font-bold mb-4">
            Higor Araujo Leite e Silva
          </div>
          
          <div className="text-sm text-primary-foreground/80 mb-4">
            Senior Software Engineer • Zaventem, Belgium
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
            <a 
              href="mailto:higoraraujosilva@hotmail.com"
              className="hover:text-accent transition-smooth"
            >
              higoraraujosilva@hotmail.com
            </a>
            <span className="text-primary-foreground/50">•</span>
            <a 
              href="https://linkedin.com/in/higoraraujosilva"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-smooth"
            >
              LinkedIn
            </a>
            <span className="text-primary-foreground/50">•</span>
            <a 
              href="https://github.com/higor1104"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-smooth"
            >
              GitHub
            </a>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-4 text-xs text-primary-foreground/60">
            © {currentYear} Higor Araujo Leite e Silva. {t('footer.rights')}
          </div>
        </div>
      </div>
    </footer>
  );
};