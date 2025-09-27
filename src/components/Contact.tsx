import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'higoraraujosilva@hotmail.com',
      href: 'mailto:higoraraujosilva@hotmail.com',
    },
    {
      icon: Linkedin,
      label: t('contact.linkedin'),
      value: 'linkedin.com/in/higoraraujosilva',
      href: 'https://linkedin.com/in/higoraraujosilva',
    },
    {
      icon: Github,
      label: t('contact.github'),
      value: 'github.com/higor1104',
      href: 'https://github.com/higor1104',
    }
  ];

  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
              {t('contact.title')}
            </h2>
            <div className="w-24 h-0.5 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              {t('contact.description')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Professional Contact Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {contactInfo.map((item, index) => (
                <Card key={index} className="card-gradient shadow-card hover:shadow-elegant transition-smooth border-0 overflow-hidden">
                  <CardHeader className="pb-6 bg-gradient-to-r from-primary/5 to-transparent">
                    <CardTitle className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-sm">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="font-serif text-xl font-semibold text-foreground">{item.label}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Button
                      variant="ghost"
                      asChild
                      className="w-full justify-start p-0 h-auto hover:bg-transparent"
                    >
                      <a 
                        href={item.href} 
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center justify-between w-full p-4 rounded-sm hover:bg-secondary/30 transition-smooth group"
                      >
                        <span className="text-foreground font-medium text-base">
                          {item.value}
                        </span>
                        <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Professional Portfolio Section */}
            <div className="text-center">
              <Card className="inline-block card-gradient shadow-elegant border-0 overflow-hidden">
                <CardContent className="p-10">
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="p-3 bg-accent/15 rounded-sm">
                      <ExternalLink className="h-6 w-6 text-accent" />
                    </div>
                    <span className="font-serif text-2xl font-semibold text-foreground">Portfólio Digital</span>
                  </div>
                  <Button
                    variant="outline"
                    asChild
                    className="border-2 border-accent/30 hover:bg-accent/10 hover:border-accent/50 px-8 py-3 rounded-sm transition-smooth"
                  >
                    <a 
                      href="https://higor1104.github.io/higorsilva.github.io/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-medium text-base tracking-wide"
                    >
                      higor1104.github.io
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};