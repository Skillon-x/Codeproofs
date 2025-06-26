import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Award, TrendingUp } from 'lucide-react';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      position: 'CEO',
      company: 'Elite Racing Solutions',
      image: '/api/placeholder/64/64',
      rating: 5,
      text: 'GallopyingPower transformed our racing analytics completely. The AI predictions increased our winning accuracy by 45% and the insights are incredibly detailed. Best investment we\'ve made for our racing operations.',
      industry: 'Horse Racing',
      result: '45% increase in winning accuracy',
      product: 'GallopyingPower'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      position: 'Marketplace Director',
      company: 'Premium Equine Trading',
      image: '/api/placeholder/64/64',
      rating: 5,
      text: 'GallopyingGears revolutionized how we connect buyers and sellers. The platform\'s security features and professional verification system built incredible trust in our marketplace.',
      industry: 'Horse Trading',
      result: '200% increase in successful transactions',
      product: 'GallopyingGears'
    },
    {
      id: 3,
      name: 'Michael Rodriguez',
      position: 'Operations Manager',
      company: 'TJM Industries Ltd',
      image: '/api/placeholder/64/64',
      rating: 5,
      text: 'The TJM ERP system streamlined our entire business operations. From inventory to financial reporting, everything is now automated and we\'ve reduced operational costs by 40%.',
      industry: 'Manufacturing',
      result: '40% reduction in operational costs',
      product: 'TJM ERP'
    },
    {
      id: 4,
      name: 'Priya Sharma',
      position: 'Head of Analytics',
      company: 'Mumbai Racing Club',
      image: '/api/placeholder/64/64',
      rating: 5,
      text: 'The level of detail in race analysis is phenomenal. Codeproofs\' AI technology gives us insights we never thought possible. Our members love the expert predictions.',
      industry: 'Racing Analytics',
      result: '60% improvement in member satisfaction',
      product: 'GallopyingPower'
    },
    {
      id: 5,
      name: 'James Thompson',
      position: 'Founder',
      company: 'Global Horse Exchange',
      image: '/api/placeholder/64/64',
      rating: 5,
      text: 'Working with Codeproofs was a game-changer. Their understanding of niche markets and ability to deliver specialized solutions is unmatched in the industry.',
      industry: 'Equine Commerce',
      result: '150% growth in platform users',
      product: 'GallopyingGears'
    }
  ];

  const stats = [
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Success Stories' },
    { number: '7+', label: 'Years of Trust' },
    { number: '3', label: 'Industry Awards' }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-[#111111] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/10 via-transparent to-[#00cc6a]/10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#0a0a0a]/80 border border-[#333333] mb-6">
            <Award className="w-3 h-3 text-[#00ff88] mr-1.5" />
            <span className="text-[#a0a0a0] text-xs sm:text-sm">Client Success</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ffffff] mb-4 sm:mb-6">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-[#00ff88] to-[#00cc6a] bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-[#a0a0a0] max-w-4xl mx-auto leading-relaxed">
            Discover how leading companies across niche industries have transformed their operations with our specialized technology solutions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-[#0a0a0a]/60 backdrop-blur-sm border border-[#333333] rounded-lg p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00ff88] mb-2">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-[#a0a0a0]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Testimonial Display */}
        <div className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-[#333333] rounded-2xl overflow-hidden mb-12 sm:mb-16">
          <div className="p-6 sm:p-8 lg:p-12">
            {/* Product Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/20 mb-6">
              <span className="text-xs font-medium text-[#00ff88]">
                {testimonials[activeTestimonial].product}
              </span>
            </div>

            {/* Quote */}
            <div className="relative mb-8">
              <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[#00ff88]/20" />
              <blockquote className="text-lg sm:text-xl lg:text-2xl text-[#ffffff] leading-relaxed pl-8">
                "{testimonials[activeTestimonial].text}"
              </blockquote>
            </div>

            {/* Author Info & Result */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center mb-4 lg:mb-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#111111] rounded-full border border-[#333333] flex items-center justify-center mr-4">
                  <span className="text-lg sm:text-xl font-bold text-[#00ff88]">
                    {testimonials[activeTestimonial].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-[#ffffff]">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-sm text-[#00ff88]">
                    {testimonials[activeTestimonial].position}
                  </p>
                  <p className="text-xs sm:text-sm text-[#a0a0a0]">
                    {testimonials[activeTestimonial].company}
                  </p>
                </div>
              </div>

              <div className="text-left lg:text-right">
                <div className="flex items-center mb-2 lg:justify-end">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#00ff88] fill-current" />
                  ))}
                </div>
                <p className="text-sm font-semibold text-[#00ff88] mb-1">
                  {testimonials[activeTestimonial].result}
                </p>
                <p className="text-xs text-[#a0a0a0]">
                  {testimonials[activeTestimonial].industry}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center space-x-4 mb-12 sm:mb-16">
          <button
            onClick={prevTestimonial}
            className="p-3 bg-[#111111] border border-[#333333] rounded-lg hover:border-[#00ff88] hover:bg-[#00ff88]/10 transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5 text-[#a0a0a0] hover:text-[#00ff88]" />
          </button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === activeTestimonial
                    ? 'bg-[#00ff88]'
                    : 'bg-[#333333] hover:bg-[#666666]'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextTestimonial}
            className="p-3 bg-[#111111] border border-[#333333] rounded-lg hover:border-[#00ff88] hover:bg-[#00ff88]/10 transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5 text-[#a0a0a0] hover:text-[#00ff88]" />
          </button>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-[#0a0a0a]/60 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 hover:transform hover:-translate-y-2 cursor-pointer ${
                index === activeTestimonial
                  ? 'border-[#00ff88]'
                  : 'border-[#333333] hover:border-[#00ff88]/50'
              }`}
              onClick={() => setActiveTestimonial(index)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-[#00ff88] fill-current" />
                  ))}
                </div>
                <span className="text-xs px-2 py-1 bg-[#00ff88]/10 text-[#00ff88] rounded">
                  {testimonial.product}
                </span>
              </div>
              
              <p className="text-sm text-[#a0a0a0] mb-4 line-clamp-3">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#111111] rounded-full border border-[#333333] flex items-center justify-center mr-3">
                  <span className="text-xs font-bold text-[#00ff88]">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#ffffff]">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[#a0a0a0]">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Testimonials;