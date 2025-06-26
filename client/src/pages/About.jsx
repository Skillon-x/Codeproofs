import React from 'react';
import { Brain, Target, Rocket, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '7+', label: 'Years of Innovation' },
    { number: '50+', label: 'Successful Projects' },
    { number: '3', label: 'Global Offices' },
    { number: '25+', label: 'Industry Experts' }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Driven Insights',
      description: 'Advanced machine learning algorithms that transform raw data into actionable business intelligence.'
    },
    {
      icon: Target,
      title: 'Precision Solutions',
      description: 'Tailored technology solutions designed specifically for unique industry challenges and requirements.'
    },
    {
      icon: Rocket,
      title: 'Rapid Innovation',
      description: 'Agile development processes that deliver cutting-edge solutions faster than traditional approaches.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Diverse group of specialists with deep domain knowledge across multiple niche industries.'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Rigorous testing and quality control processes ensure reliable, enterprise-grade solutions.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Growth',
      description: 'Future-proof architectures that grow with your business and adapt to changing market demands.'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/10 via-transparent to-[#00cc6a]/10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#111111]/80 border border-[#333333] mb-6">
            <Target className="w-3 h-3 text-[#00ff88] mr-1.5" />
            <span className="text-[#a0a0a0] text-xs sm:text-sm">About Codeproofs</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ffffff] mb-4 sm:mb-6">
            Building Technology That{' '}
            <span className="bg-gradient-to-r from-[#00ff88] to-[#00cc6a] bg-clip-text text-transparent">
              Matters
            </span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-[#a0a0a0] max-w-4xl mx-auto leading-relaxed">
            Our specialized solutions leverage advanced analytics and AI-powered insights to transform industries one innovation at a time. We focus on creating meaningful impact through technology that drives real business transformation.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-[#111111]/50 backdrop-blur-sm border border-[#333333] rounded-lg p-4 sm:p-6 hover:border-[#00ff88] transition-all duration-300">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00ff88] mb-2">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-[#a0a0a0]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#ffffff] mb-6">
              Specialized Products for Unique Markets
            </h3>
            <div className="space-y-4 text-[#a0a0a0]">
              <p className="text-sm sm:text-base leading-relaxed">
                Since our founding in 2017, we've built a reputation for delivering specialized technology solutions that address the unique challenges of niche industries. Our approach combines deep domain expertise with cutting-edge technology to create products that truly make a difference.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                From advanced gallery management systems to comprehensive ERP solutions, our products are designed with AI-powered precision to serve markets that demand specialized attention and innovative thinking.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Our global presence across India and Indonesia allows us to understand diverse market needs while maintaining the agility of a startup and the reliability of an established technology partner.
              </p>
            </div>
            
            <div className="mt-8">
              <button className="bg-[#00ff88] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#00cc6a] transition-all duration-200 hover:transform hover:-translate-y-1">
                Learn Our Story
              </button>
            </div>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className="relative">
            <div className="bg-[#111111] border border-[#333333] rounded-xl p-6 sm:p-8 h-64 sm:h-80 lg:h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#00ff88]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 sm:w-10 sm:h-10 text-[#00ff88]" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-[#ffffff] mb-2">Innovation Hub</h4>
                <p className="text-sm text-[#a0a0a0]">Where ideas transform into intelligent solutions</p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#00ff88]/20 rounded-full blur-sm"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#00cc6a]/20 rounded-full blur-sm"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#ffffff] text-center mb-8 sm:mb-12">
            What Sets Us Apart
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-[#111111]/80 backdrop-blur-sm border border-[#333333] rounded-lg p-4 sm:p-6 hover:border-[#00ff88] transition-all duration-300 hover:transform hover:-translate-y-2 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00ff88]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#00ff88]/20 transition-colors">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#00ff88]" />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-[#ffffff] mb-2 sm:mb-3">
                  {feature.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#a0a0a0] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;