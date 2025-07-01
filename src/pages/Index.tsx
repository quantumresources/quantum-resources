import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Footer from '@/components/Footer';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useState } from 'react';
import ContactDialog from '@/components/ContactDialog';

const Index = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Team />
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-600 to-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how Quantum Resources can power your business with reliable supply chain solutions
          </p>
          <ContactDialog>
            <button className="bg-white text-purple-800 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 text-lg">
              Contact us
            </button>
          </ContactDialog>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
