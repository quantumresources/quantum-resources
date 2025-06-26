
import { Calendar, Globe, Zap, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Calendar, label: "Years of Experience", value: "30+" },
    { icon: Globe, label: "Industries Served", value: "6+" },
    { icon: Zap, label: "Energy Contribution", value: "50%+" },
    { icon: TrendingUp, label: "Founded", value: "2025" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Quantum Resources</h2>
            <p className="text-lg text-gray-600 mb-6">
              Quantum Resources was founded in 2025 by a team of professionals with vast experience in 
              supply chain management over three decades in various MNCs. We are in the business of 
              commodity trading, shipping, and various other management consultancy assignments.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              In this rapidly growing Indian economy, there is heavy reliance on high energy consumption 
              across various sectors. Coal caters to more than half of India's energy requirements. We 
              currently focus on supply of thermal coal to several industries such as cement, power, 
              textile, steel, paper, and chemicals.
            </p>
            
            <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-600">
              <h3 className="text-xl font-semibold text-purple-800 mb-2">Our Mission</h3>
              <p className="text-purple-700">
                To be the trusted partner in supply chain management, delivering reliable energy solutions 
                that power India's economic growth while maintaining the highest standards of service and integrity.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl p-6 text-white text-center">
                <stat.icon className="mx-auto mb-3 text-yellow-400" size={40} />
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-purple-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Coal Trading Excellence</h3>
          <div className="bg-gray-50 rounded-2xl p-8">
            <p className="text-lg text-gray-600 mb-6">
              Our coal trading business specializes in sourcing and supplying high-quality coal to power plants, 
              industrial consumers, and other traders. With a strong network of suppliers and logistics partners, 
              we ensure reliable and efficient coal delivery to meet the energy demands of our clients.
            </p>
            <p className="text-lg text-gray-600">
              Our experienced team navigates the complexities of the coal market, managing risks and capitalizing 
              on opportunities to provide competitive pricing and exceptional service. We understand that energy 
              security is crucial for industrial growth, and we're committed to being a reliable partner in your 
              success story.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
