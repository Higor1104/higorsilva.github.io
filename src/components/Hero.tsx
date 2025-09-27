import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import darkHeroImage from '@/assets/dark-hero-bg.jpg';

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={darkHeroImage} 
          alt="Professional dark academic background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Location */}
          <div className="flex items-center justify-center gap-2 mb-8 text-white/80">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium tracking-wide uppercase">{t('hero.location')}</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance leading-tight">
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <h2 className="text-lg md:text-xl lg:text-2xl font-medium mb-12 text-white/90 tracking-wide">
            {t('hero.subtitle')}
          </h2>

          {/* Description */}
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-base md:text-lg leading-relaxed text-white/75 text-balance font-light">
              {t('hero.description')}
            </p>
          </div>

          {/* CTA Button */}
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-white/5 hover:bg-white/15 text-white border-2 border-white/20 hover:border-white/40 backdrop-blur-sm gap-3 px-12 py-4 text-base font-medium transition-smooth shadow-elegant rounded-sm uppercase tracking-wider"
          >
            {t('hero.cta')}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Professional Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center">
          <div className="w-0.5 h-2 bg-white/40 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};