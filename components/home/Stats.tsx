'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Stats data
const statsData = [
  { label: 'Years of Excellence', value: 28 },
  { label: 'Projects Completed', value: 650 },
  { label: 'Global Offices', value: 22 },
  { label: 'Industry Awards', value: 115 },
];

export default function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // For animation of counter
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    if (inView) {
      const intervals = statsData.map((stat, index) => {
        return setInterval(() => {
          setCounts(prevCounts => {
            const newCounts = [...prevCounts];
            if (newCounts[index] < stat.value) {
              const increment = Math.ceil(stat.value / 50);
              newCounts[index] = Math.min(newCounts[index] + increment, stat.value);
            }
            return newCounts;
          });
        }, 30);
      });

      return () => intervals.forEach(interval => clearInterval(interval));
    }
  }, [inView]);

  return (
    <section 
      ref={ref}
      className="py-24 bg-primary-500 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1574843/pexels-photo-1574843.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-fixed bg-cover bg-center opacity-10" />
      
      <div className="container relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div 
                className="text-5xl md:text-6xl font-bold text-dark-900 mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                {counts[index]}+
              </motion.div>
              <div className="text-xl text-dark-800 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}