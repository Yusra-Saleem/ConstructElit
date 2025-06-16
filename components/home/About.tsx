'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { ArrowRight, Award, Clock, Users, Target } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} className="section-padding bg-dark-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-primary-500/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-primary-500/10 blur-3xl" />
      
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="subheading inline-block mb-4">About ConstructElite</span>
            <h2 className="heading-lg mb-6 font-bold">
              Building Excellence <span className="gold-gradient-text">Since 1995</span>
            </h2>
            <p className="text-gray-300 mb-6">
              For nearly three decades, ConstructElite has been at the forefront of the construction industry, pioneering innovative building techniques and delivering exceptional projects across six continents. Our commitment to excellence, sustainability, and cutting-edge design has established us as a global leader in construction.
            </p>
            <p className="text-gray-300 mb-8">
              We blend technical expertise with creative vision to transform ambitious ideas into remarkable structures that stand the test of time. Our diverse portfolio spans iconic skyscrapers, sophisticated commercial developments, large-scale infrastructure, and intricate residential properties.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <Award className="text-primary-500 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold mb-1">Award Winning</h4>
                  <p className="text-sm text-gray-400">Multiple international recognitions</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="text-primary-500 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold mb-1">On-Time Delivery</h4>
                  <p className="text-sm text-gray-400">98% project completion rate</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Users className="text-primary-500 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold mb-1">Expert Team</h4>
                  <p className="text-sm text-gray-400">Over 5,000 skilled professionals</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Target className="text-primary-500 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold mb-1">Precision Focus</h4>
                  <p className="text-sm text-gray-400">Exacting standards in every detail</p>
                </div>
              </div>
            </div>
            
            <Link href="/company" className="btn btn-primary">
              Learn More About Us
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-[4/3] relative z-10 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="ConstructElite team meeting" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary-500 rounded-lg"></div>
            <div className="absolute -bottom-4 -left-4 glassmorphism p-6 rounded-lg max-w-xs">
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-300 text-sm">
                To be the world's most trusted construction partner, delivering innovative and sustainable solutions that transform communities and environments.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}