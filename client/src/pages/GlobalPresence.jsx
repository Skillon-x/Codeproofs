"use client";
import React from 'react';
import WorldMap from '../ui/world-map';
import { motion } from 'motion/react';
import { Globe, MapPin, Users, Building } from 'lucide-react';

const GlobalPresence = () => {
  const offices = [
    {
      country: 'India',
      city: 'Bengaluru',
      flag: '🇮🇳',
      description: 'Our headquarters and main development center',
      team: '15+ Engineers',
      focus: 'AI Development & Innovation'
    },
    {
      country: 'Malaysia',
      city: 'Kuala Lumpur',
      flag: '🇲🇾',
      description: 'Regional hub for Southeast Asian markets',
      team: '8+ Specialists',
      focus: 'Market Expansion & Support'
    },
    {
      country: 'Indonesia',
      city: 'Jakarta',
      flag: '🇮🇩',
      description: 'Local expertise for Indonesian market needs',
      team: '6+ Consultants',
      focus: 'Client Relations & Solutions'
    }
  ];

  return (
    <section id="global-presence" className="py-16 sm:py-20 lg:py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#111111]/80 border border-[#333333] mb-6">
            <Globe className="w-3 h-3 text-[#00ff88] mr-1.5" />
            <span className="text-[#a0a0a0] text-xs sm:text-sm">Global Network</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ffffff] mb-4 sm:mb-6">
            Globally Connected,{" "}
            <span className="text-[#a0a0a0]">
              {"Locally Focused".split("").map((word, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}>
                  {word}
                </motion.span>
              ))}
            </span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-[#a0a0a0] max-w-4xl mx-auto leading-relaxed">
            Our strategic offices across Asia enable us to deliver specialized solutions with deep local market understanding while maintaining global technology standards and innovation excellence.
          </p>
        </div>

        {/* World Map */}
        <div className="mb-16 sm:mb-20">
          <WorldMap
            dots={[
              {
                start: {
                  lat: 12.9716, // Bengaluru
                  lng: 77.5946,
                },
                end: {
                  lat: 3.1390, // Kuala Lumpur
                  lng: 101.6869,
                },
              },
              {
                start: {
                  lat: 12.9716, // Bengaluru
                  lng: 77.5946,
                },
                end: {
                  lat: -6.2088, // Jakarta
                  lng: 106.8456,
                },
              },
              {
                start: {
                  lat: 3.1390, // Kuala Lumpur
                  lng: 101.6869,
                },
                end: {
                  lat: -6.2088, // Jakarta
                  lng: 106.8456,
                },
              },
              {
                start: {
                  lat: 12.9716, // Bengaluru
                  lng: 77.5946,
                },
                end: {
                  lat: 40.7128, // New York
                  lng: -74.0060,
                },
              },
              {
                start: {
                  lat: 12.9716, // Bengaluru
                  lng: 77.5946,
                },
                end: {
                  lat: 51.5074, // London
                  lng: -0.1278,
                },
              },
              {
                start: {
                  lat: 3.1390, // Kuala Lumpur
                  lng: 101.6869,
                },
                end: {
                  lat: 35.6762, // Tokyo
                  lng: 139.6503,
                },
              },
              {
                start: {
                  lat: -6.2088, // Jakarta
                  lng: 106.8456,
                },
                end: {
                  lat: -33.8688, // Sydney
                  lng: 151.2093,
                },
              },
              {
                start: {
                  lat: 12.9716, // Bengaluru
                  lng: 77.5946,
                },
                end: {
                  lat: 1.3521, // Singapore
                  lng: 103.8198,
                },
              },
              {
                start: {
                  lat: 3.1390, // Kuala Lumpur
                  lng: 101.6869,
                },
                end: {
                  lat: 37.7749, // San Francisco
                  lng: -122.4194,
                },
              },
              {
                start: {
                  lat: -6.2088, // Jakarta
                  lng: 106.8456,
                },
                end: {
                  lat: 52.5200, // Berlin
                  lng: 13.4050,
                },
              },
              {
                start: {
                  lat: 12.9716, // Bengaluru
                  lng: 77.5946,
                },
                end: {
                  lat: 25.2048, // Dubai
                  lng: 55.2708,
                },
              },
              {
                start: {
                  lat: 3.1390, // Kuala Lumpur
                  lng: 101.6869,
                },
                end: {
                  lat: 22.3193, // Hong Kong
                  lng: 114.1694,
                },
              },
              {
                start: {
                  lat: 12.9716, // Bengaluru
                  lng: 77.5946,
                },
                end: {
                  lat: -26.2041, // Johannesburg, South Africa
                  lng: 28.0473,
                },
              },
              {
                start: {
                  lat: 3.1390, // Kuala Lumpur
                  lng: 101.6869,
                },
                end: {
                  lat: 30.0444, // Cairo, Egypt
                  lng: 31.2357,
                },
              },
              {
                start: {
                  lat: -6.2088, // Jakarta
                  lng: 106.8456,
                },
                end: {
                  lat: 6.5244, // Lagos, Nigeria
                  lng: 3.3792,
                },
              },
              {
                start: {
                  lat: 12.9716, // Bengaluru
                  lng: 77.5946,
                },
                end: {
                  lat: -23.5505, // São Paulo, Brazil
                  lng: -46.6333,
                },
              },
              {
                start: {
                  lat: 3.1390, // Kuala Lumpur
                  lng: 101.6869,
                },
                end: {
                  lat: -34.6037, // Buenos Aires, Argentina
                  lng: -58.3816,
                },
              },
              {
                start: {
                  lat: -6.2088, // Jakarta
                  lng: 106.8456,
                },
                end: {
                  lat: 4.7110, // Bogotá, Colombia
                  lng: -74.0721,
                },
              },
              {
                start: {
                  lat: 12.9716, // Bengaluru
                  lng: 77.5946,
                },
                end: {
                  lat: -12.0464, // Lima, Peru
                  lng: -77.0428,
                },
              },
              {
                start: {
                  lat: 3.1390, // Kuala Lumpur
                  lng: 101.6869,
                },
                end: {
                  lat: 19.4326, // Mexico City, Mexico
                  lng: -99.1332,
                },
              }
            ]}
          />
        </div>

        {/* Office Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {offices.map((office, index) => (
            <motion.div
              key={office.country}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#111111]/80 backdrop-blur-sm border border-[#333333] rounded-xl p-6 hover:border-[#00ff88] transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{office.flag}</span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#ffffff]">
                    {office.country}
                  </h3>
                  <p className="text-sm text-[#00ff88]">{office.city}</p>
                </div>
              </div>
              
              <p className="text-sm text-[#a0a0a0] mb-4 leading-relaxed">
                {office.description}
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center text-xs text-[#a0a0a0]">
                  <Users className="w-3 h-3 mr-2 text-[#00ff88]" />
                  {office.team}
                </div>
                <div className="flex items-center text-xs text-[#a0a0a0]">
                  <Building className="w-3 h-3 mr-2 text-[#00ff88]" />
                  {office.focus}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Stats */}
        <div className="bg-[#111111]/50 backdrop-blur-sm border border-[#333333] rounded-xl p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-[#ffffff] text-center mb-8">
            Our Global Impact
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#00ff88] mb-2">3</div>
              <div className="text-xs sm:text-sm text-[#a0a0a0]">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#00ff88] mb-2">29+</div>
              <div className="text-xs sm:text-sm text-[#a0a0a0]">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#00ff88] mb-2">24/7</div>
              <div className="text-xs sm:text-sm text-[#a0a0a0]">Global Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#00ff88] mb-2">5+</div>
              <div className="text-xs sm:text-sm text-[#a0a0a0]">Time Zones</div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default GlobalPresence;