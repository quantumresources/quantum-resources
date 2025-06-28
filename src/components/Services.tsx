import { Truck, BarChart3, Handshake, MapPin, Clock, Shield, Send } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: MapPin,
      title: "Coal Sourcing & Supply",
      description: "Sourcing and supplying high-quality coal from reputable mines and suppliers to meet your energy demands.",
      features: ["Premium quality coal", "Reliable supplier network", "Flexible supply contracts"]
    },
    {
      icon: Truck,
      title: "Logistics Management",
      description: "Managing comprehensive logistics and transportation to ensure timely and efficient delivery.",
      features: ["End-to-end logistics", "Real-time tracking", "Optimized routes"]
    },
    {
      icon: BarChart3,
      title: "Market Analysis",
      description: "Providing detailed market analysis and insights to inform strategic business decisions.",
      features: ["Market intelligence", "Price forecasting", "Risk assessment"]
    },
    {
      icon: Handshake,
      title: "Competitive Pricing",
      description: "Offering competitive pricing and flexible contract terms tailored to your business needs.",
      features: ["Transparent pricing", "Flexible terms", "Cost optimization"]
    },
    {
      icon: Send,
      title: "Freight Forwarding",
      description: "Comprehensive freight solutions for air, land, and sea cargo, ensuring timely and efficient delivery worldwide.",
      features: [
        "Customs clearance & documentation",
        "Warehousing & distribution",
        "Global partner network",
        "Personalized logistics solutions"
      ]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Reliable Supply",
      description: "Consistent coal supplies to meet your energy demands without interruption."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Expert navigation of complex logistics and regulatory environments."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What we do</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive coal trading solutions backed by three decades of industry expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.slice(0, 3).map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                <service.icon className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-500 flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.slice(3).map((service, index) => (
            <div key={index + 3} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                <service.icon className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-500 flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Key Benefits</h3>
            <p className="text-purple-100">Why choose Quantum Resources as your supply chain partner</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="text-yellow-400" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-purple-100">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Industries We Serve</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Cement", "Power", "Textile", "Steel", "Paper", "Chemicals"].map((industry) => (
              <span key={industry} className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
