import React from 'react';
import { 
  Building2,
  FileSpreadsheet,
  Users,
  BookOpen,
  Wallet,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: <Building2 size={32} className="text-orange-500" />,
    title: "Company Formation",
    description: "Build web-based solutions that enhance customer experience."
  },
  {
    icon: <FileSpreadsheet size={32} className="text-orange-500" />,
    title: "Company Secretarial Services",
    description: "Make data-driven decisions and utilize technology to reach business goals."
  },
  {
    icon: <Users size={32} className="text-orange-500" />,
    title: "Virtual Office Address",
    description: "Foster customer relationships by effectively serving your market."
  },
  {
    icon: <BookOpen size={32} className="text-orange-500" />,
    title: "Annual Compliance Services",
    description: "Turn your ideas into modern products with our design experts."
  },
  {
    icon: <Wallet size={32} className="text-orange-500" />,
    title: "Payroll Services",
    description: "Expand your business across the globe with minimal effort."
  },
  {
    icon: <FileSpreadsheet size={32} className="text-orange-500" />,
    title: "Bookkeeping Services",
    description: "Steering user behaviors with creative design, data insights & technology."
  }
];

const ExploreServices = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="text-orange-500 font-medium">WELCOME TO REGISTERKARO.IN</div>
        <h2 className="text-4xl font-bold mt-4 mb-16">Explore Our Services</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 rounded-lg hover:shadow-xl transition-shadow bg-white group">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href="#" className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium">
                Learn more
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          ))}
        </div>

        <button className="mt-12 bg-[#1B3B6B] text-white px-8 py-3 rounded-md hover:bg-blue-900 transition-colors">
          See All Services
        </button>
      </div>
    </section>
  );
};

export default ExploreServices;