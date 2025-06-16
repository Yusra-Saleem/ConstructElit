'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Ruler, Compass, Cog, PaintBucket, Trees } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: <Building2 size={40} className="text-primary-500" />,
    title: 'Construction Management',
    description: 'Comprehensive management of construction projects from inception to completion, ensuring quality, timeliness, and budget adherence.',
    link: '/capabilities/construction-management',
  },
  {
    icon: <Ruler size={40} className="text-primary-500" />,
    title: 'Civil Engineering',
    description: 'Expert design and execution of infrastructure projects including roads, bridges, dams, and water systems with precision engineering.',
    link: '/capabilities/civil-engineering',
  },
  {
    icon: <Compass size={40} className="text-primary-500" />,
    title: 'Architectural Design',
    description: 'Creative and functional architectural solutions that merge aesthetics with practicality, resulting in stunning yet functional spaces.',
    link: '/capabilities/architectural-design',
  },
  {
    icon: <Cog size={40} className="text-primary-500" />,
    title: 'Mechanical Systems',
    description: 'Design and implementation of advanced mechanical, electrical, and plumbing systems for optimal building performance.',
    link: '/capabilities/mechanical-systems',
  },
  {
    icon: <PaintBucket size={40} className="text-primary-500" />,
    title: 'Interior Fit-Out',
    description: 'High-end interior finishing services that transform spaces with attention to detail and premium materials.',
    link: '/capabilities/interior-fit-out',
  },
  {
    icon: <Trees size={40} className="text-primary-500" />,
    title: 'Sustainable Building',
    description: 'Environmentally responsible construction practices and green building certifications for reduced environmental impact.',
    link: '/capabilities/sustainable-building',
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section ref={ref} className="section-padding bg-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary-500/5 to-transparent" />
      
      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="subheading inline-block mb-4">Our Capabilities</span>
          <h2 className="heading-lg mb-6">
            Comprehensive <span className="gold-gradient-text">Construction Services</span>
          </h2>
          <p className="text-gray-300">
            We provide end-to-end construction solutions with the highest standards of quality and innovation. Our diverse capabilities allow us to tackle projects of any scale and complexity.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glassmorphism rounded-lg p-8 backdrop-blur-lg transition-all duration-300 hover:bg-white/15 hover:shadow-lg hover:shadow-primary-500/10 group"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <Link 
                href={service.link} 
                className="inline-flex items-center text-primary-500 font-medium group-hover:text-primary-300 transition-colors"
              >
                Learn more
                <svg 
                  className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}