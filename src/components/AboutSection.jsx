import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="text-orange-500 font-medium">WELCOME TO REGISTERKARO.IN</div>
          <h2 className="text-4xl font-bold">About Register Karo</h2>
          <p className="text-gray-600">
            We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years and I'm extremely pleased with their performance, ability to execute, and willingness to adapt in our ever changing environment. Perry is an outstanding leader who is fanatical about customer satisfaction. He has built a solid team which has consistently delivered on projects thereby exceeding everyone's expectations.
          </p>
          <button className="bg-[#1B3B6B] text-white px-8 py-3 rounded-md hover:bg-blue-900 transition-colors">
            Learn More
          </button>
        </div>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
            alt="Team photo"
            className="rounded-lg shadow-xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;