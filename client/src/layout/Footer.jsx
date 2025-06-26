import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import logo from "../assets/logo/m.png"
const Footer = () => {
  const footerLinks = {
    Products: [
      'GalleryingPower',
      'GalleryingGear',
      'TJM ERP',
      'Enterprise Solutions'
    ],
    Company: [
      'About Us',
      'Careers',
      'News',
      'Contact'
    ],
    Resources: [
      'Documentation',
      'API Reference',
      'Support',
      'Community'
    ],
    Legal: [
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'GDPR'
    ]
  };

  return (
    <footer className="bg-[#111111] border-t border-[#333333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src={logo}
                alt="Codeproofs" 
                className="md:h-32 h-16 w-auto"
                />
            </div>
            <p className="text-[#a0a0a0] mb-6 max-w-md">
              Transforming niche industries with intelligent technology. Building specialized solutions that drive innovation and growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#a0a0a0] hover:text-[#00ff88] transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-[#a0a0a0] hover:text-[#00ff88] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-[#a0a0a0] hover:text-[#00ff88] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-[#a0a0a0] hover:text-[#00ff88] transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-[#ffffff] font-semibold mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#a0a0a0] hover:text-[#00ff88] transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Global Presence */}
        <div className="mt-12 pt-8 border-t border-[#333333]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-[#ffffff] font-semibold mb-2">
                Globally Connected, Locally Focused
              </h4>
              <div className="flex flex-wrap gap-4 text-sm text-[#a0a0a0]">
                <span>🇮🇳 India</span>
                <span>🇲🇾 Malaysia</span>
                <span>🇮🇩 Indonesia</span>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-[#a0a0a0] text-sm">
                Ready to Transform Your Industry?
              </p>
              <button className="mt-2 bg-[#00ff88] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#00cc6a] transition-all duration-200 hover:transform hover:-translate-y-1">
                Let's Connect
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-[#333333] text-center">
          <p className="text-[#666666] text-sm">
            © 2024 Codeproofs. All rights reserved. | Transforming ideas into digital excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;