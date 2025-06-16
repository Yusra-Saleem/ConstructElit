'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, MapPin, Briefcase, Clock, ArrowRight } from 'lucide-react';

const jobListings = [
  {
    id: 1,
    title: 'Senior Project Manager',
    department: 'Construction',
    location: 'New York, USA',
    type: 'Full-time',
    experience: '8+ years',
    description: 'Lead complex construction projects from inception to completion.',
  },
  {
    id: 2,
    title: 'Structural Engineer',
    department: 'Engineering',
    location: 'London, UK',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Design and analyze structural systems for large-scale projects.',
  },
  {
    id: 3,
    title: 'BIM Coordinator',
    department: 'Technology',
    location: 'Dubai, UAE',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Manage BIM processes and coordinate with project stakeholders.',
  },
];

const benefits = [
  {
    title: 'Health & Wellness',
    description: 'Comprehensive medical, dental, and vision coverage.',
    icon: '🏥',
  },
  {
    title: 'Professional Development',
    description: 'Continuous learning and certification support.',
    icon: '📚',
  },
  {
    title: 'Work-Life Balance',
    description: 'Flexible working hours and remote options.',
    icon: '⚖️',
  },
  {
    title: 'Financial Benefits',
    description: '401(k) matching and performance bonuses.',
    icon: '💰',
  },
];

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredJobs = jobListings.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
            alt="Career opportunities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark/80" />
        </div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="heading-xl mb-6">
              Build Your Career with <span className="gold-gradient-text">ConstructElite</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Join our team of innovators and help shape the future of construction.
            </p>
            <div className="relative max-w-xl">
              <input
                type="text"
                placeholder="Search for opportunities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white pr-12"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Listings */}
      <section ref={ref} className="py-24 bg-dark-800">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Open Positions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover your next opportunity to make an impact.
            </p>
          </div>

          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-700 rounded-lg p-6 hover:bg-dark-600 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-300">
                      <div className="flex items-center">
                        <Briefcase size={16} className="mr-2" />
                        {job.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2" />
                        {job.type}
                      </div>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-0 btn btn-primary">
                    Apply Now
                    <ArrowRight size={18} className="ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-dark">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Why Join Us</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer competitive benefits and a culture of innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-700 p-6 rounded-lg text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}