'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Wifi, Shield, Leaf, Train, Users, DollarSign, BarChart } from 'lucide-react';

const features = [
  {
    icon: <Wifi className="w-8 h-8 text-primary-500" />,
    title: 'Smart Technology',
    description: 'Advanced building management systems and IoT integration.',
  },
  {
    icon: <Shield className="w-8 h-8 text-primary-500" />,
    title: 'Security',
    description: '24/7 surveillance and access control systems.',
  },
  {
    icon: <Leaf className="w-8 h-8 text-primary-500" />,
    title: 'Sustainability',
    description: 'LEED-certified buildings with energy-efficient systems.',
  },
  {
    icon: <Train className="w-8 h-8 text-primary-500" />,
    title: 'Connectivity',
    description: 'Direct access to major transportation hubs.',
  },
];

const successStories = [
  {
    company: 'TechGlobal Inc.',
    logo: 'https://images.pexels.com/photos/2977547/pexels-photo-2977547.jpeg',
    quote: 'Moving to this location has significantly improved our team\'s productivity and collaboration.',
    spokesperson: 'Sarah Chen, CEO',
  },
  {
    company: 'Innovation Labs',
    logo: 'https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg',
    quote: 'The smart building features and sustainable design align perfectly with our company values.',
    spokesperson: 'Michael Roberts, COO',
  },
];

export default function CommercialPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen">
      {/* Sliding Showcase */}
      <section className="pt-32 pb-24 bg-dark-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="heading-xl mb-6">
              Premium <span className="gold-gradient-text">Commercial Spaces</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              State-of-the-art office spaces designed for modern businesses and future growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-[3/4]">
                  <img
                    src={`https://images.pexels.com/photos/${1743373 + index}/pexels-photo-${1743373 + index}.jpeg`}
                    alt={`Commercial Space ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold mb-2">Premium Office Tower {index + 1}</h3>
                    <p className="text-primary-500">Available Q2 2024</p>
                    <button className="btn btn-primary mt-4">Learn More</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section ref={ref} className="py-24 bg-dark-800">
        <div className="container">
          <h2 className="heading-lg text-center mb-16">Investment Potential</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-dark-700 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6">ROI Calculator</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Space Size (sq ft)
                    </label>
                    <input
                      type="number"
                      className="w-full bg-dark-600 border border-dark-500 rounded-lg p-3 text-white"
                      placeholder="5000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Lease Term (years)
                    </label>
                    <select className="w-full bg-dark-600 border border-dark-500 rounded-lg p-3 text-white">
                      <option>3</option>
                      <option>5</option>
                      <option>10</option>
                    </select>
                  </div>
                  <button className="btn btn-primary w-full">
                    Calculate ROI
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Average ROI', value: '15%' },
                  { label: 'Occupancy Rate', value: '95%' },
                  { label: 'Property Value Growth', value: '8%' },
                  { label: 'Operating Costs', value: '-25%' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-dark-700 p-6 rounded-lg text-center"
                  >
                    <div className="text-3xl font-bold text-primary-500 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Hub */}
      <section className="py-24 bg-dark">
        <div className="container">
          <h2 className="heading-lg text-center mb-16">Building Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-800 p-8 rounded-lg text-center"
              >
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Advantages */}
      <section className="py-24 bg-dark-800">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-lg mb-6">Strategic Location</h2>
              <p className="text-gray-300 mb-8">
                Situated in the heart of the business district with excellent connectivity and surrounding amenities.
              </p>
              
              <div className="space-y-4">
                {[
                  'Direct access to metro station',
                  'Walking distance to major hotels',
                  'Premium dining and retail options',
                  'Close to international airport',
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary-500" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video rounded-lg overflow-hidden"
            >
              <img
                src="https://images.pexels.com/photos/1098982/pexels-photo-1098982.jpeg"
                alt="Location map"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-24 bg-dark">
        <div className="container">
          <h2 className="heading-lg text-center mb-16">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-dark-800 p-8 rounded-lg"
              >
                <img
                  src={story.logo}
                  alt={story.company}
                  className="w-16 h-16 rounded object-cover mb-6"
                />
                <h3 className="text-xl font-semibold mb-2">{story.company}</h3>
                <p className="text-gray-300 italic mb-4">"{story.quote}"</p>
                <p className="text-primary-500">{story.spokesperson}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}