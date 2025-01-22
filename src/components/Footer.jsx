import React from 'react';
import { Facebook, Instagram, ArrowUp } from 'lucide-react';

const partnerLogos = [
  { name: 'Coinbase', url: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Coinbase.png' },
  { name: 'Spotify', url: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg' },
  { name: 'Slack', url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg' },
  { name: 'Dropbox', url: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Dropbox_Icon.svg' },
  { name: 'Webflow', url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Webflow_logo.svg' },
  { name: 'Zoom', url: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Zoom_logo.svg' }
];

const footerLinks = {
  'START A BUSINESS': [
    'Features',
    'Solutions',
    'Integrations',
    'Enterprise Solutions'
  ],
  'GOVERNMENT REGISTRATION': [
    'Partners',
    'Community',
    'Developers',
    'App',
    'Blog'
  ],
  'COMPLIANCE & TAX': [
    'Channels',
    'Scale',
    'Watch the Demo',
    'Our Competition'
  ],
  'BIS & CDSCO': [
    'About Us',
    'News',
    'Leadership',
    'Media Kit'
  ]
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1B3B6B] text-white">
      {/* Partner Logos */}
      <div className="container mx-auto px-4 py-12 border-b border-gray-700">
        <div className="flex flex-wrap justify-between items-center gap-8">
          {partnerLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.url}
              alt={logo.name}
              className="h-8 opacity-50 hover:opacity-100 transition-opacity filter brightness-0 invert"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-1">
            <p className="text-lg mb-6">
              Design outstanding interfaces with advanced Figma features in a matter of minutes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-orange-500 transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors" aria-label="Google">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/>
                  <circle cx="12" cy="12" r="4"/>
                </svg>
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4 text-orange-500">{title}</h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="text-gray-400">
            © 2024 RegisterKaro. All Rights Reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="p-2 bg-orange-500 rounded-full hover:bg-orange-600 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;