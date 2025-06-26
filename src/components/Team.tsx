
import { User, Award, Target, TrendingUp } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: "C. Murugeswaran",
      position: "Managing Director",
      icon: User,
      description: "Leading the company with decades of supply chain expertise and strategic vision."
    },
    {
      name: "M. Vijayalakshmi",
      position: "Joint Managing Director",
      icon: Award,
      description: "Driving operational excellence and ensuring quality standards across all services."
    },
    {
      name: "M. Anubhav Rishikesh",
      position: "Strategic Analyst",
      icon: Target,
      description: "Analyzing market trends and developing strategic insights for business growth."
    },
    {
      name: "M. Rahul Abhishek",
      position: "Planning - Commercial & Finance",
      icon: TrendingUp,
      description: "Managing commercial operations and financial planning for sustainable growth."
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Management Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Led by seasoned professionals with extensive experience in supply chain management across various multinational corporations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <member.icon className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-purple-600 font-medium mb-3">{member.position}</p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Leadership Excellence</h3>
            <p className="text-gray-600 max-w-4xl mx-auto">
              Our leadership team brings together over three decades of combined experience in supply chain management, 
              having worked with various multinational corporations. This wealth of expertise enables us to navigate 
              complex market dynamics and deliver exceptional value to our clients in the rapidly growing Indian economy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
