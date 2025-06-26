import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="/favicon.ico" 
              alt="Quantum Resources"
              className="h-10 w-auto"
            />
            <span className="ml-3 text-xl font-bold text-gray-900">Quantum Resources</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Services</a>
              <a href="#team" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Team</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <a href="#home" className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium">About</a>
              <a href="#services" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium">Services</a>
              <a href="#team" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium">Team</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
