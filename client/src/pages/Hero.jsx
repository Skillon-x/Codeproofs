import React from 'react';
import { Code, Zap, Globe } from 'lucide-react';
import Aurora from '../ui/Aurora';
import ShinyText from '../ui/ShinyText';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#00ff88", "#00cc6a", "#33ff99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.8}
        />
      </div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-[#0a0a0a]/60 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-28  lg:px-8 text-center">
        <div className="max-w-4xl mx-auto md:pt-6">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#111111]/80 border border-[#333333] mb-6">
            <Zap className="w-3 h-3 text-[#00ff88] mr-1.5" />
            <span className="text-[#a0a0a0] text-xs sm:text-sm">Transforming Industries Since 2017</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-[#ffffff] mb-4 sm:mb-6 leading-tight">
            Transforming{' '}
            <ShinyText 
              text="Niche Industries" 
              disabled={false} 
              speed={5} 
              className="bg-gradient-to-r from-[#00ff88] to-[#00cc6a] bg-clip-text text-transparent" 
            />
            <br />
            with Intelligent Technology
          </h1>
          
          {/* Subtext */}
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-[#a0a0a0] mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
            At Codeproofs, we build technology that matters. Founded in 2017, we've grown from a specialty startup to a global innovator with offices across India and Indonesia.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12  sm:mb-16 px-4">
            <button className="w-full sm:w-auto bg-[#00ff88] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-[#00cc6a] transition-all duration-200 hover:transform hover:-translate-y-1 hover:shadow-2xl">
              Start Your Journey
            </button>
            <button className="w-full sm:w-auto border-2 border-[#00ff88] text-[#00ff88] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-[#00ff88] hover:text-black transition-all duration-200 hover:transform hover:-translate-y-1">
              Learn More
            </button>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto  px-2">
            <div className="bg-[#111111]/80 backdrop-blur-sm border border-[#333333] rounded-lg p-4 sm:p-6 hover:border-[#00ff88] transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00ff88]/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <Code className="w-5 h-5 sm:w-6 sm:h-6 text-[#00ff88]" />
              </div>
              <h3 className="text-[#ffffff] font-semibold text-base sm:text-lg mb-2">AI-Powered Solutions</h3>
              <p className="text-[#a0a0a0] text-xs sm:text-sm">Advanced analytics and machine learning drive our specialized products for unique market needs.</p>
            </div>
            
            <div className="bg-[#111111]/80 backdrop-blur-sm border border-[#333333] rounded-lg p-4 sm:p-6 hover:border-[#00ff88] transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00ff88]/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-[#00ff88]" />
              </div>
              <h3 className="text-[#ffffff] font-semibold text-base sm:text-lg mb-2">Global Reach</h3>
              <p className="text-[#a0a0a0] text-xs sm:text-sm">Offices across India and Indonesia, serving clients worldwide with localized expertise.</p>
            </div>
            
            <div className="bg-[#111111]/80 backdrop-blur-sm border border-[#333333] rounded-lg p-4 sm:p-6 hover:border-[#00ff88] transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00ff88]/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#00ff88]" />
              </div>
              <h3 className="text-[#ffffff] font-semibold text-base sm:text-lg mb-2">Specialized Focus</h3>
              <p className="text-[#a0a0a0] text-xs sm:text-sm">Deep expertise in niche industries, creating tailored solutions that drive real transformation.</p>
            </div>
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default Hero;