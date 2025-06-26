import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

import logo from "../assets/logo/m.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Global Presence', href: '#global-presence' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 md:px-5 backdrop-blur-sm ">
      <div className="max-w-7xl mx-auto px-4 pt-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">             
            <a href="/" className="flex items-center gap-2">
                <img 
                src={logo}
                alt="Codeproofs Logo" 
                className="md:h-32 h-16 w-auto"
                />
               
            </a>           
            </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#a0a0a0] hover:text-[#00ff88] px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-[#00ff88] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#00cc6a] transition-all duration-200 hover:transform hover:-translate-y-1">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#a0a0a0] hover:text-[#00ff88] p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#111111] rounded-lg mt-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#a0a0a0] hover:text-[#00ff88] block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <button className="w-full bg-[#00ff88] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#00cc6a] transition-colors duration-200">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;