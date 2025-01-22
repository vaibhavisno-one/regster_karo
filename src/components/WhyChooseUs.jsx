import React from 'react';
import { Shield, Star, Users } from 'lucide-react';

const features = [
  {
    icon: <Shield size={32} className="text-orange-500" />,
    title: "Confidential & Safe",
    description: "All your private information is safe with us"
  },
  {
    icon: <Shield size={32} className="text-green-500" />,
    title: "No Hidden Fee",
    description: "Everything is put before you with no hidden charges or conditions"
  },
  {
    icon: <Star size={32} className="text-blue-500" />,
    title: "Guaranteed Satisfaction",
    description: "We ensure that you stay 100% satisfied with our offered services"
  },
  {
    icon: <Users size={32} className="text-purple-500" />,
    title: "Expert CA/CS Assistance",
    description: "Prompt support from our in-house expert professionals"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-orange-500 font-medium">WHY REGISTERKARO.IN</div>
          <h2 className="text-4xl font-bold mt-4">Why Choose Register Karo</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            It is with consistent services and results that build trust with the people and that in turn help us to serve the business better.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;