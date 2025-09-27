import { Code, Cloud, Database, Cog, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

export const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      icon: Code,
      title: t('skills.programming'),
      skills: [
        'Java 11-21',
        'Spring Boot 3',
        'Spring Security',
        'Microserviços',
        'Spring WebFlux',
        'REST APIs',
        'Angular',
        'TypeScript'
      ]
    },
    {
      icon: Cloud,
      title: t('skills.cloud'),
      skills: [
        'AWS (Lambda, SNS, SQS, RDS)',
        'Microsoft Azure',
        'Docker',
        'Kubernetes',
        'OpenShift',
        'Red Hat'
      ]
    },
    {
      icon: Database,
      title: t('skills.databases'),
      skills: [
        'MySQL',
        'Oracle',
        'Redis',
        'Cassandra (NoSQL)',
        'Neo4J',
        'PostgreSQL'
      ]
    },
    {
      icon: Cog,
      title: t('skills.devops'),
      skills: [
        'CI/CD (Jenkins, GitLab, GitHub Actions)',
        'Gradle',
        'Maven',
        'ELK Stack',
        'Grafana',
        'Dynatrace',
        'SonarQube'
      ]
    },
    {
      icon: Lightbulb,
      title: t('skills.practices'),
      skills: [
        'Scrum/Kanban',
        'Microsserviços Containerizados',
        'Arquitetura Reativa',
        'Práticas de Segurança',
        'Code Review',
        'TDD'
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
            {t('skills.title')}
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="card-gradient shadow-card hover:shadow-elegant transition-smooth">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="font-serif text-lg">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="text-xs bg-secondary/50 hover:bg-secondary transition-smooth"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};