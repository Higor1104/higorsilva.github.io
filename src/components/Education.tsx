import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

export const Education = () => {
  const { t } = useLanguage();

  const education = [
    {
      icon: GraduationCap,
      title: 'Bacharel em Sistemas de Informação',
      institution: 'Universidade do Cotemig',
      period: 'Fev 2011 – Mai 2016',
      description: 'Desenvolvimento de websites, apresentando todas as fases de entrega desde o conceito ideal até a documentação e apresentação.',
      type: 'degree'
    },
    {
      icon: Award,
      title: 'Oracle Certified Associate',
      institution: 'Oracle Corporation',
      period: 'Mai 2015',
      description: 'Programador Java SE 7 - Certificação oficial Oracle',
      type: 'certification'
    },
    {
      icon: BookOpen,
      title: 'Curso Técnico',
      institution: 'Formação Profissional Senai',
      period: 'Jul 2009 – Dez 2010',
      description: 'Conceitos de software e hardware, manutenção de computadores, servidores Windows e Linux, conceitos de eletricidade.',
      type: 'technical'
    }
  ];

  const currentStudies = [
    'Quarkus Framework',
    'Cloud Native Applications',
    'Advanced Microservices Patterns',
    'Kubernetes Advanced',
    'DevOps Best Practices',
    'System Architecture Design'
  ];

  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
            {t('education.title')}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 mb-12">
            {education.map((item, index) => (
              <Card key={index} className="card-gradient shadow-card hover:shadow-elegant transition-smooth">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg mt-1">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-bold text-primary mb-2">
                        {item.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <span className="font-medium text-muted-foreground">
                          {item.institution}
                        </span>
                        <Badge variant="outline" className="w-fit">
                          {item.period}
                        </Badge>
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Current Studies */}
          <Card className="card-gradient shadow-card border-2 border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <BookOpen className="h-6 w-6 text-accent" />
                </div>
                <span className="font-serif text-xl">Estudos Atuais</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Atualmente expandindo minha expertise e explorando casos práticos de uso, 
                sempre buscando oportunidades para aplicar e compartilhar conhecimento em 
                projetos profissionais.
              </p>
              <div className="flex flex-wrap gap-2">
                {currentStudies.map((study, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-smooth"
                  >
                    {study}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};