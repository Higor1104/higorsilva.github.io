import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSelector } from '@/components/LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { key: 'about', label: t('nav.about') },
    { key: 'skills', label: t('nav.skills') },
    { key: 'education', label: t('nav.education') },
    { key: 'contact', label: t('nav.contact') },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm shadow-card border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className={`font-serif text-xl font-bold transition-smooth ${
            isScrolled ? 'text-primary' : 'text-white'
          }`}>
            HALES
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className={`font-medium transition-smooth ${
                  isScrolled 
                    ? 'text-foreground hover:text-primary' 
                    : 'text-white hover:text-accent'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSelector />
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className={`md:hidden ${
                isScrolled ? '' : 'text-white hover:text-accent'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className={`text-left font-medium py-2 transition-smooth ${
                    isScrolled 
                      ? 'text-foreground hover:text-primary' 
                      : 'text-white hover:text-accent'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};