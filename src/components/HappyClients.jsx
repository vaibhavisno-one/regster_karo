import React from 'react';
import { ArrowRight } from 'lucide-react';

const clientLogos = Array(12).fill(null).map((_, i) => ({
  id: i + 1,
  icon: <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
    <span className="text-gray-400 text-xl font-bold">C{i + 1}</span>
  </div>
}));

const HappyClients = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Happy Clients</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-8">
          {clientLogos.map((logo) => (
            <div key={logo.id} className="flex items-center justify-center transform hover:scale-110 transition-transform">
              {logo.icon}
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#" className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium">
            Show more
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HappyClients;