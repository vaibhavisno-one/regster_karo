import React from 'react';
import { Lightbulb, Rocket, Play } from 'lucide-react';

const VideoIntroduction = () => {
  return (
    <section className="bg-[#1B3B6B] text-white py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold">Our Video Introductions</h2>
          <p className="text-gray-300">
            Visit purus egestas tellus pharelius. Mattis eget sed faucibus magna volutpate pellentesque a diam tincidunt apis dur.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-orange-500 rounded-full">
                <Lightbulb size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Explore ideas together</h3>
                <p className="text-gray-300">Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-orange-500 rounded-full">
                <Rocket size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Bring those ideas to life</h3>
                <p className="text-gray-300">Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative group cursor-pointer">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
            alt="Video thumbnail"
            className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
            <div className="bg-orange-500 p-4 rounded-full">
              <Play size={32} fill="white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoIntroduction;