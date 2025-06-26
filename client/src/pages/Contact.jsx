import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Globe, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyUQap1_Z85rx7zsYsVyvuQA8dZepocyfyXz9ZcOfIjO1qGY4qEdOUcRyq5lb6xLGcx/exec';
      
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('company', formData.company);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('service', formData.service);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('timestamp', new Date().toISOString());

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
        });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const offices = [
    {
      country: 'India',
      city: 'Bengaluru',
      flag: '🇮🇳',
      address: 'Koramangala, Bengaluru, Karnataka 560034',
      phone: '+91 80 4567 8900',
      email: 'bengaluru@codeproofs.com',
      hours: 'Mon-Fri: 9:00 AM - 7:00 PM IST',
      isHQ: true
    },
    {
      country: 'Malaysia',
      city: 'Kuala Lumpur',
      flag: '🇲🇾',
      address: 'KLCC, Kuala Lumpur 50088',
      phone: '+60 3 2181 2345',
      email: 'kualalumpur@codeproofs.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM MYT',
      isHQ: false
    },
    {
      country: 'Indonesia',
      city: 'Jakarta',
      flag: '🇮🇩',
      address: 'Sudirman, Jakarta 12190',
      phone: '+62 21 5790 1234',
      email: 'jakarta@codeproofs.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM WIB',
      isHQ: false
    }
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get in touch via email',
      value: 'hello@codeproofs.com',
      action: 'Send Email'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: '24/7 support available',
      value: '+91 80 4567 8900',
      action: 'Call Now'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our experts',
      value: 'Available now',
      action: 'Start Chat'
    },
    {
      icon: Globe,
      title: 'Schedule Demo',
      description: 'Book a product demo',
      value: 'Free consultation',
      action: 'Book Demo'
    }
  ];

  const services = [
    'GallopyingPower (Racing Analytics)',
    'GallopyingGears (Horse Trading)',
    'TJM ERP (Enterprise Solution)',
    'Custom Development',
    'AI Consulting',
    'General Inquiry'
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#00ff88]/10 via-transparent to-[#00cc6a]/10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#111111]/80 border border-[#333333] mb-6">
            <Mail className="w-3 h-3 text-[#00ff88] mr-1.5" />
            <span className="text-[#a0a0a0] text-xs sm:text-sm">Get In Touch</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ffffff] mb-4 sm:mb-6">
            Let's{' '}
            <span className="bg-gradient-to-r from-[#00ff88] to-[#00cc6a] bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-[#a0a0a0] max-w-4xl mx-auto leading-relaxed">
            Ready to transform your industry with specialized technology solutions? We'd love to hear about your project and discuss how we can help drive your business forward.
          </p>
        </div>

        {/* Contact Methods Grid */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 sm:mb-20">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-[#111111]/80 backdrop-blur-sm border border-[#333333] rounded-xl p-6 text-center hover:border-[#00ff88] transition-all duration-300 hover:transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="w-12 h-12 bg-[#00ff88]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <method.icon className="w-6 h-6 text-[#00ff88]" />
              </div>
              <h3 className="text-lg font-semibold text-[#ffffff] mb-2">
                {method.title}
              </h3>
              <p className="text-sm text-[#a0a0a0] mb-2">
                {method.description}
              </p>
              <p className="text-sm font-medium text-[#00ff88] mb-4">
                {method.value}
              </p>
              <button className="text-xs bg-[#00ff88]/10 text-[#00ff88] px-4 py-2 rounded-lg border border-[#00ff88]/20 hover:bg-[#00ff88] hover:text-black transition-all duration-200">
                {method.action}
              </button>
            </div>
          ))}
        </div> */}

        {/* Main Contact Form and Office Info */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16 sm:mb-20">
          {/* Contact Form */}
          <div className="bg-[#111111]/80 backdrop-blur-sm border border-[#333333] rounded-2xl p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-[#ffffff] mb-6">
              Send us a Message
            </h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-[#00ff88] mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-[#ffffff] mb-2">
                  Message Sent Successfully!
                </h4>
                <p className="text-[#a0a0a0]">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#ffffff] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#333333] rounded-lg text-[#ffffff] placeholder-[#666666] focus:border-[#00ff88] focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#ffffff] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#333333] rounded-lg text-[#ffffff] placeholder-[#666666] focus:border-[#00ff88] focus:outline-none transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#ffffff] mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#333333] rounded-lg text-[#ffffff] placeholder-[#666666] focus:border-[#00ff88] focus:outline-none transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#ffffff] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#333333] rounded-lg text-[#ffffff] placeholder-[#666666] focus:border-[#00ff88] focus:outline-none transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#ffffff] mb-2">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#333333] rounded-lg text-[#ffffff] focus:border-[#00ff88] focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#ffffff] mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#333333] rounded-lg text-[#ffffff] placeholder-[#666666] focus:border-[#00ff88] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project and requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:transform hover:-translate-y-1 flex items-center justify-center space-x-2 ${
                    isSubmitting 
                      ? 'bg-[#666666] text-[#a0a0a0] cursor-not-allowed' 
                      : 'bg-[#00ff88] text-black hover:bg-[#00cc6a]'
                  }`}
                >
                  <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Office Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#ffffff] mb-6">
              Our Global Offices
            </h3>
            
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-[#111111]/80 backdrop-blur-sm border border-[#333333] rounded-xl p-6 hover:border-[#00ff88] transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{office.flag}</span>
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h4 className="text-lg font-semibold text-[#ffffff]">
                        {office.city}, {office.country}
                      </h4>
                      {office.isHQ && (
                        <span className="ml-2 px-2 py-1 bg-[#00ff88]/10 text-[#00ff88] text-xs rounded border border-[#00ff88]/20">
                          HQ
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 text-[#00ff88] mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-[#a0a0a0]">{office.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-[#00ff88] mr-3 flex-shrink-0" />
                    <span className="text-[#a0a0a0]">{office.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-[#00ff88] mr-3 flex-shrink-0" />
                    <span className="text-[#a0a0a0]">{office.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-[#00ff88] mr-3 flex-shrink-0" />
                    <span className="text-[#a0a0a0]">{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-[#111111]/50 backdrop-blur-sm border border-[#333333] rounded-xl p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-[#ffffff] text-center mb-8">
            Frequently Asked Questions
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-base font-semibold text-[#ffffff] mb-2">
                How quickly can you start a project?
              </h4>
              <p className="text-sm text-[#a0a0a0]">
                We typically begin new projects within 1-2 weeks of contract signing, depending on project scope and current capacity.
              </p>
            </div>
            <div>
              <h4 className="text-base font-semibold text-[#ffffff] mb-2">
                Do you offer ongoing support?
              </h4>
              <p className="text-sm text-[#a0a0a0]">
                Yes, we provide 24/7 support and maintenance packages for all our solutions to ensure optimal performance.
              </p>
            </div>
            <div>
              <h4 className="text-base font-semibold text-[#ffffff] mb-2">
                Can you customize existing products?
              </h4>
              <p className="text-sm text-[#a0a0a0]">
                Absolutely! All our solutions can be customized to meet your specific industry requirements and business needs.
              </p>
            </div>
            <div>
              <h4 className="text-base font-semibold text-[#ffffff] mb-2">
                What industries do you specialize in?
              </h4>
              <p className="text-sm text-[#a0a0a0]">
                We focus on niche industries including horse racing, equine trading, and specialized manufacturing sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;