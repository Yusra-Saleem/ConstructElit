'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Timeline data
const timelineData = [
  {
    year: '2023',
    title: 'Azure Heights Tower',
    location: 'Dubai, UAE',
    description: 'Completed the 75-story mixed-use skyscraper, now the third tallest building in Dubai.',
    image: 'https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=1200',
    status: 'Completed',
  },
  {
    year: '2022',
    title: 'Oceanfront Residences',
    location: 'Miami, USA',
    description: 'Luxury beachfront residential complex with 200 units, featuring smart home technology.',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200',
    status: 'Completed',
  },
  {
    year: '2024',
    title: 'Meridian Bridge',
    location: 'London, UK',
    description: 'An iconic cable-stayed bridge spanning the Thames River, with integrated art installations.',
    image: 'https://images.pexels.com/photos/1769356/pexels-photo-1769356.jpeg?auto=compress&cs=tinysrgb&w=1200',
    status: 'In Progress - 75%',
  },
  {
    year: '2025',
    title: 'Solstice Tower',
    location: 'Toronto, Canada',
    description: 'A 60-story sustainable office tower with zero-carbon footprint and advanced energy systems.',
    image: 'https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=1200',
    status: 'In Progress - 40%',
  },
  {
    year: '2026',
    title: 'Central Station Redevelopment',
    location: 'Berlin, Germany',
    description: 'Comprehensive renovation of Berlins historic central station, preserving heritage elements.',
    image: 'https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg?auto=compress&cs=tinysrgb&w=1200',
    status: 'Planning Phase',
  },
];

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="section-padding bg-dark-800 relative overflow-hidden">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="subheading inline-block mb-4">Project Timeline</span>
          <h2 className="heading-lg mb-6">
            From Vision to <span className="gold-gradient-text">Reality</span>
          </h2>
          <p className="text-gray-300">
            Track our landmark projects from conception to completion. Our meticulous planning and execution ensure that each project progresses smoothly and meets our exacting standards.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline navigation */}
          <div className="flex items-center justify-between mb-12">
            <div className="w-full bg-dark-600 h-1 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: `${(activeIndex / (timelineData.length - 1)) * 100}%` }}
                transition={{ duration: 0.5 }}
                className="timeline-progress h-full"
              />
            </div>
          </div>

          <div className="flex justify-between mb-8">
            {timelineData.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative flex flex-col items-center ${
                  index === activeIndex ? 'text-primary-500' : 'text-gray-500'
                }`}
              >
                <span className="text-lg font-bold">{item.year}</span>
                <div
                  className={`w-4 h-4 rounded-full mt-2 transition-colors ${
                    index === activeIndex ? 'bg-primary-500' : 'bg-gray-600'
                  }`}
                />
                {index < timelineData.length - 1 && (
                  <div
                    className={`absolute top-11 left-6 w-full h-0.5 ${
                      index < activeIndex ? 'bg-primary-500' : 'bg-gray-600'
                    }`}
                    style={{ width: 'calc(100% - 12px)' }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Active timeline item */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 md:order-1">
              <h3 className="heading-md mb-2">{timelineData[activeIndex].title}</h3>
              <div className="flex items-center gap-x-4 text-lg text-gray-300 mb-4">
                <div>{timelineData[activeIndex].location}</div>
                <div>•</div>
                <div className={timelineData[activeIndex].status.includes('Completed') ? 'text-green-500' : timelineData[activeIndex].status.includes('Planning') ? 'text-blue-500' : 'text-yellow-500'}>
                  {timelineData[activeIndex].status}
                </div>
              </div>
              <p className="text-gray-300 text-lg mb-6">{timelineData[activeIndex].description}</p>
              
              {/* Progress indicator for in-progress projects */}
              {timelineData[activeIndex].status.includes('In Progress') && (
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span>{timelineData[activeIndex].status.split(' - ')[1]}</span>
                  </div>
                  <div className="w-full bg-dark-600 h-2 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: timelineData[activeIndex].status.split(' - ')[1].replace('%', '') + '%' }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="bg-primary-500 h-full rounded-full"
                    />
                  </div>
                </div>
              )}
              
              {/* Timeline navigation buttons */}
              <div className="flex space-x-4">
                <button
                  onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
                  disabled={activeIndex === 0}
                  className={`px-4 py-2 rounded border ${
                    activeIndex === 0
                      ? 'border-gray-700 text-gray-700 cursor-not-allowed'
                      : 'border-white text-white hover:bg-white/10'
                  }`}
                >
                  Previous
                </button>
                <button
                  onClick={() => setActiveIndex(Math.min(timelineData.length - 1, activeIndex + 1))}
                  disabled={activeIndex === timelineData.length - 1}
                  className={`px-4 py-2 rounded border ${
                    activeIndex === timelineData.length - 1
                      ? 'border-gray-700 text-gray-700 cursor-not-allowed'
                      : 'border-white text-white hover:bg-white/10'
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-xl shadow-primary-500/10">
                <img
                  src={timelineData[activeIndex].image}
                  alt={timelineData[activeIndex].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}