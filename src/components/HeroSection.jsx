import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-orange-50 py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div className="flex items-center gap-2">
            <Star className="text-yellow-400" fill="currentColor" />
            <span className="font-semibold">Google Rating</span>
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-yellow-400" fill="currentColor" size={16} />
            ))}
          </div>

          <h1 className="text-5xl font-bold leading-tight">
            Your trusted partner<br />
            for compliance business needs
          </h1>

          <p className="text-gray-600 text-lg">
            An online business compliance platform that helps entrepreneurs and other individuals with various registrations, tax filings, and other legal matters.
          </p>

          <div className="flex gap-4">
            <button className="bg-[#1B3B6B] text-white px-8 py-3 rounded-md hover:bg-blue-900 transition-colors">
              Talk An Expert
            </button>
            <button className="flex items-center gap-2 text-[#1B3B6B] hover:text-blue-900">
              See how it works
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
            <div>
              <div className="text-2xl font-bold">4.5+</div>
              <div className="text-gray-600">Customer Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold">20,000+</div>
              <div className="text-gray-600">Clients</div>
            </div>
            <div>
              <div className="text-2xl font-bold">99.8%</div>
              <div className="text-gray-600">Financial Stability</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
            alt="Business professional"
            className="rounded-lg shadow-xl"
            loading="eager"
            priority="true"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;