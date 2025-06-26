import React, { useState } from 'react';
import { Image, ShoppingCart, Building2, ArrowRight, CheckCircle, Zap } from 'lucide-react';

const Products = () => {
  const [activeProduct, setActiveProduct] = useState(0);

  const products = [
    {
      id: 'gallopyingpower',
      name: 'GallopyingPower',
      icon: Image,
      tagline: 'Horse Racing Analytics & Predictions',
      description: 'Advanced AI-powered platform for horse racing predictions and analytics. Get comprehensive insights, expert strategies, and data-driven recommendations to enhance your racing decisions.',
      features: [
        'AI-powered race outcome predictions',
        'Advanced handicap analysis and ratings',
        'Real-time racing intelligence dashboard',
        'Expert strategy guides and tips',
        'Comprehensive race card analysis',
        'Performance tracking and statistics'
      ],
      benefits: [
        'Increase winning accuracy by 40%',
        'Access to professional racing insights',
        'Data-driven decision making',
        'Expert-level analysis for every race'
      ],
      color: 'from-[#00ff88] to-[#00cc6a]'
    },
    {
      id: 'gallopyinggears',
      name: 'GallopyingGears',
      icon: ShoppingCart,
      tagline: 'Premier Horse Trading Marketplace',
      description: 'Complete marketplace platform for horse trading and sales. Connect buyers and sellers with professional services, verified listings, and secure transaction processing.',
      features: [
        'Comprehensive horse marketplace',
        'Professional seller verification system',
        'Advanced search and filtering options',
        'Secure payment and escrow services',
        'Professional horse assessment services',
        'Community features and expert support'
      ],
      benefits: [
        'Access to premium horse inventory',
        'Secure and trusted transactions',
        'Professional trading community',
        'Expert guidance throughout the process'
      ],
      color: 'from-[#00cc6a] to-[#33ff99]'
    },
    {
      id: 'tjmerp',
      name: 'TJM ERP',
      icon: Building2,
      tagline: 'Enterprise Planning Solution',
      description: 'Comprehensive ERP system tailored for TJM industries, integrating all business processes from inventory management to financial reporting in one unified platform.',
      features: [
        'Integrated financial management and reporting',
        'Supply chain and inventory optimization',
        'Human resources and payroll management',
        'Project management and resource allocation',
        'Real-time business intelligence dashboards',
        'Compliance and regulatory reporting tools'
      ],
      benefits: [
        'Streamline business operations across departments',
        'Reduce operational costs by 40%',
        'Improve decision-making with real-time data',
        'Ensure regulatory compliance automatically'
      ],
      color: 'from-[#33ff99] to-[#00ff88]'
    }
  ];

  return (
    <section id="products" className="py-16 sm:py-20 lg:py-24 bg-[#111111] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#00ff88]/10 via-transparent to-[#00cc6a]/10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#0a0a0a]/80 border border-[#333333] mb-6">
            <Zap className="w-3 h-3 text-[#00ff88] mr-1.5" />
            <span className="text-[#a0a0a0] text-xs sm:text-sm">Our Solutions</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ffffff] mb-4 sm:mb-6">
            Solutions That Drive{' '}
            <span className="bg-gradient-to-r from-[#00ff88] to-[#00cc6a] bg-clip-text text-transparent">
              Industries Forward
            </span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-[#a0a0a0] max-w-4xl mx-auto leading-relaxed">
            Our specialized product portfolio is designed to transform how professionals work across unique markets, delivering AI-powered insights and streamlined workflows.
          </p>
        </div>

        {/* Product Navigation */}
        <div className="flex flex-col sm:flex-row justify-center mb-12 sm:mb-16 space-y-2 sm:space-y-0 sm:space-x-4">
          {products.map((product, index) => (
            <button
              key={product.id}
              onClick={() => setActiveProduct(index)}
              className={`px-4 sm:px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                activeProduct === index
                  ? 'bg-[#00ff88] text-black'
                  : 'bg-[#0a0a0a]/80 text-[#a0a0a0] border border-[#333333] hover:border-[#00ff88] hover:text-[#00ff88]'
              }`}
            >
              <product.icon className="w-4 h-4" />
              <span className="text-sm sm:text-base">{product.name}</span>
            </button>
          ))}
        </div>

        {/* Active Product Display */}
        <div className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-[#333333] rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Product Info */}
            <div className="p-6 sm:p-8 lg:p-12">
              <div className="flex items-center mb-6">
               
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {products[activeProduct].name}
                  </h3>
                  <p className="text-sm sm:text-base text-[#00ff88]">
                    {products[activeProduct].tagline}
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#a0a0a0] mb-8 leading-relaxed">
                {products[activeProduct].description}
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-[#ffffff] mb-4">Key Features</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {products[activeProduct].features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-[#00ff88] mt-0.5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-[#a0a0a0]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="border border-[#00ff88] text-[#00ff88] px-6 py-3 rounded-lg font-semibold hover:bg-[#00ff88] hover:text-black transition-all duration-200">
                    Request Demo
                  </button>
                </div>
              </div>
            </div>

            {/* Product Benefits */}
            <div className="bg-[#111111]/50 p-6 sm:p-8 lg:p-12 border-l border-[#333333]">
              <h4 className="text-xl sm:text-2xl font-bold text-[#ffffff] mb-6">
                Key Benefits
              </h4>
              
              <div className="space-y-4 mb-8">
                {products[activeProduct].benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#00ff88] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-[#a0a0a0]">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Stats/Metrics */}
              <div className="bg-[#0a0a0a]/60 rounded-lg p-4 sm:p-6 border border-[#333333]">
                <h5 className="text-base sm:text-lg font-semibold text-[#ffffff] mb-4">
                  Impact Metrics
                </h5>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-[#00ff88]">99.9%</div>
                    <div className="text-xs text-[#a0a0a0]">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-[#00ff88]">24/7</div>
                    <div className="text-xs text-[#a0a0a0]">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-[#00ff88]">50+</div>
                    <div className="text-xs text-[#a0a0a0]">Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-[#00ff88]">5★</div>
                    <div className="text-xs text-[#a0a0a0]">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;