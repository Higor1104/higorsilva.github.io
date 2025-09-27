import { BookOpen, Globe, Code, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Code,
      title: 'Enterprise Java Expertise',
      description: '8+ anos de experiência',
    },
    {
      icon: Globe,
      title: 'Experiência Internacional',
      description: 'Brasil, Portugal, Bélgica',
    },
    {
      icon: BookOpen,
      title: 'Desenvolvimento Profissional Contínuo',
      description: 'Quarkus, Cloud, DevOps',
    },
    {
      icon: TrendingUp,
      title: 'Arquiteturas Empresariais',
      description: 'Microserviços & Cloud-Native',
    },
  ];

  return (
    <section id="about" className="py-32 bg-gradient-subtle">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
              {t('about.title')}
            </h2>
            <div className="w-24 h-0.5 bg-accent mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Content */}
            <div className="space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-foreground font-light mb-6">
                  {t('about.intro')}
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground font-light mb-6">
                  {t('about.migration')}
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground font-light mb-8">
                  {t('about.certification')}
                </p>
              </div>

              {/* Philosophy Quote */}
              <div className="relative p-8 bg-card rounded-sm border-l-4 border-primary shadow-card">
                <div className="absolute top-4 left-4 text-4xl text-primary/20 font-serif">"</div>
                <p className="text-lg leading-relaxed text-foreground font-medium italic pl-6">
                  {t('about.learning')}
                </p>
              </div>
            </div>

            {/* Professional Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <Card key={index} className="card-gradient shadow-card hover:shadow-elegant transition-smooth border-0">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <item.icon className="h-12 w-12 text-primary mx-auto" />
                    </div>
                    <h3 className="font-serif font-semibold text-base mb-3 text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-medium">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};