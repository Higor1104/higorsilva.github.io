import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <main className="container mx-auto px-4 py-12">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="about" className="text-sm font-medium">
              {t('nav.about')}
            </TabsTrigger>
            <TabsTrigger value="skills" className="text-sm font-medium">
              {t('nav.skills')}
            </TabsTrigger>
            <TabsTrigger value="education" className="text-sm font-medium">
              {t('nav.education')}
            </TabsTrigger>
            <TabsTrigger value="contact" className="text-sm font-medium">
              {t('nav.contact')}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="about" className="mt-0">
            <About />
          </TabsContent>
          
          <TabsContent value="skills" className="mt-0">
            <Skills />
          </TabsContent>
          
          <TabsContent value="education" className="mt-0">
            <Education />
          </TabsContent>
          
          <TabsContent value="contact" className="mt-0">
            <Contact />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
