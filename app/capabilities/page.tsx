'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Cloud, Shield, Cpu, Zap } from 'lucide-react';

const capabilities = [
  {
    icon: <Code className="w-12 h-12 text-primary-500" />,
    title: 'Construction Management',
    description: 'End-to-end project management with advanced tracking and reporting systems.',
  },
  {
    icon: <Database className="w-12 h-12 text-primary-500" />,
    title: 'Civil Engineering',
    description: 'Innovative structural solutions backed by cutting-edge engineering principles.',
  },
  {
    icon: <Cloud className="w-12 h-12 text-primary-500" />,
    title: 'Architectural Design',
    description: 'Creative architectural solutions that blend aesthetics with functionality.',
  },
  {
    icon: <Shield className="w-12 h-12 text-primary-500" />,
    title: 'Safety & Compliance',
    description: 'Industry-leading safety standards and regulatory compliance measures.',
  },
  {
    icon: <Cpu className="w-12 h-12 text-primary-500" />,
    title: 'Smart Building Systems',
    description: 'Integration of IoT and smart technologies for modern building management.',
  },
  {
    icon: <Zap className="w-12 h-12 text-primary-500" />,
    title: 'Sustainable Solutions',
    description: 'Green building practices and renewable energy system implementation.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Planning & Analysis',
    description: 'Comprehensive project planning and requirement analysis.',
  },
  {
    number: '02',
    title: 'Design & Engineering',
    description: 'Detailed architectural and engineering design development.',
  },
  {
    number: '03',
    title: 'Construction',
    description: 'Efficient construction with quality control measures.',
  },
  {
    number: '04',
    title: 'Testing & Delivery',
    description: 'Thorough testing and seamless project handover.',
  },
];

export default function CapabilitiesPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full"
            poster="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
          >
            <source src="https://example.com/video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-dark/80" />
        </div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="heading-xl mb-6">
              Building Tomorrow's <span className="gold-gradient-text">Infrastructure</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Leveraging cutting-edge technology and decades of expertise to deliver exceptional construction solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section ref={ref} className="py-24 bg-dark-800">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Our Core Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive construction solutions powered by innovation and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-700 p-8 rounded-lg hover:bg-dark-600 transition-all duration-300"
              >
                <div className="mb-6">{capability.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-dark">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach to delivering excellence in every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-primary-500 opacity-20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-full h-px bg-primary-500/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}