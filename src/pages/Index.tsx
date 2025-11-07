import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Portfolio } from '@/components/Portfolio';
import { Contact } from '@/components/Contact';
import { FloatingElements } from '@/components/FloatingElements';

const Index = () => {
  return (
    <main className="relative">
      {/* Floating 3D Elements Background */}
      {/* <FloatingElements /> */}
      
      {/* Navigation */}
      <Navigation />
      
      {/* Page Sections */}
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 bg-card border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Creative Portfolio. Crafted with passion and innovation.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;