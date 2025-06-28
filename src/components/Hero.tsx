import { ArrowRight, Globe, Shield, Zap } from 'lucide-react';
import ContactDialog from './ContactDialog';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Trusted Partner in
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> Supply Chain Management</span>
            </h1>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Three decades of expertise in commodity trading, shipping, and management consultancy. 
              Powering India's growing economy with reliable thermal coal solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-white text-purple-800 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 flex items-center justify-center group"
                onClick={() => {
                  const section = document.getElementById('services');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Explore Our Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <ContactDialog>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-800 transition-all duration-300">
                  Contact Us
                </button>
              </ContactDialog>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Globe className="text-yellow-400 mb-4" size={40} />
              <h3 className="text-white text-xl font-semibold mb-2">Global Network</h3>
              <p className="text-purple-100">Extensive supplier and logistics partnerships across India</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Shield className="text-yellow-400 mb-4" size={40} />
              <h3 className="text-white text-xl font-semibold mb-2">Trusted Expertise</h3>
              <p className="text-purple-100">30+ years of experience in supply chain management</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Zap className="text-yellow-400 mb-4" size={40} />
              <h3 className="text-white text-xl font-semibold mb-2">Energy Solutions</h3>
              <p className="text-purple-100">Reliable thermal coal supply for small and medium industries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
