
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/aa83f738-7924-4993-91e7-1fc5b8f1cc2e.png" 
                alt="Quantum Resources"
                className="h-10 w-auto mr-3"
              />
              <span className="text-xl font-bold">Quantum Resources</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted partner in supply chain management with three decades of expertise 
              in commodity trading, shipping, and management consultancy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-purple-600 p-2 rounded-lg hover:bg-purple-700 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-purple-600 p-2 rounded-lg hover:bg-purple-700 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-white transition-colors">Our Team</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="text-purple-400" size={18} />
                <span className="text-gray-300">info@quantumresources.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-purple-400" size={18} />
                <span className="text-gray-300">+91 XXX XXX XXXX</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-purple-400 mt-1" size={18} />
                <span className="text-gray-300">India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Quantum Resources. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
