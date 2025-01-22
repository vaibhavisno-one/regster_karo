import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Search, 
  ChevronDown,
  Mail
} from 'lucide-react';

const NavBar = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#1B3B6B] text-white py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="mailto:www.registerkaro.in" className="flex items-center gap-2">
              <Mail size={16} />
              www.registerkaro.in
            </a>
            <a href="tel:+918447746183" className="flex items-center gap-2">
              +918447746183
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={16} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={16} /></a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white shadow-sm py-4 z-nav">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <img src="/vite.svg" alt="Register Karo" className="h-8" />
            <span className="font-bold text-xl">Register Karo</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <a href="#" className="hover:text-orange-500">Home</a>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-orange-500">
                Our Services
                <ChevronDown size={16} />
              </button>
            </div>
            <a href="#" className="hover:text-orange-500">Blog</a>
            <a href="#" className="hover:text-orange-500">Contact Us</a>
            <a href="#" className="hover:text-orange-500">About us</a>
            <button aria-label="Search">
              <Search size={20} />
            </button>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors">
              Talk An Expert
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
