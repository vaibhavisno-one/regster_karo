import React from 'react';
import { Apple, PlaySquare, CheckCircle } from 'lucide-react';

const statistics = [
  { number: '1M+', label: 'CUSTOMERS' },
  { number: '12+', label: 'YEARS OF EXCELLENCE' },
  { number: '41+', label: 'R&D ENGINEERS' },
  { number: '78+', label: 'COUNTRIES' },
  { number: '3287+', label: 'PARTNERS' },
  { number: '41+', label: 'AWARDS RECEIVED' }
];

const features = [
  { icon: <CheckCircle size={20} />, text: 'Instant results' },
  { icon: <CheckCircle size={20} />, text: 'User-friendly interface' },
  { icon: <CheckCircle size={20} />, text: 'Personalized customization' }
];

const MobileAppSection = () => {
  return (
    <>
      {/* Mobile App Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold leading-tight">
              Manage Your Services by your Mobile Phone
            </h2>
            <p className="text-gray-300 text-lg">
              Download our app to manage and track your services. Our app enables you to stay in touch with our experts and aids you in tracking your progress.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="flex items-center gap-2 bg-black px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
              >
                <Apple size={24} />
                <div>
                  <div className="text-xs">Get it on</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 bg-black px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
              >
                <PlaySquare size={24} />
                <div>
                  <div className="text-xs">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80"
              alt="Mobile app interface"
              className="rounded-3xl shadow-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-orange-500 font-medium">WHY REGISTER KARO</div>
            <h2 className="text-3xl font-bold mt-4">Some Numbers are important</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Signup Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Welcome to your new digital reality. Now.
          </h2>
          <div className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-2 mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors">
                Submit
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  {feature.icon}
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileAppSection;