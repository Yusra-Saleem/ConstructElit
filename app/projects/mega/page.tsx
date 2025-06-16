'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Users, Clock, DollarSign, BarChart, Award, Globe, Zap, Target } from 'lucide-react';

const heroProjects = [
  {
    title: 'Neo Tokyo Skybridge',
    location: 'Tokyo, Japan',
    status: 'Completed 2024',
    value: '$8.5B',
    image: 'https://images.pexels.com/photos/2869565/pexels-photo-2869565.jpeg?auto=compress&cs=tinysrgb&w=1920',
    description: 'Revolutionary elevated transportation network connecting 12 districts across Tokyo metropolitan area.',
  },
  {
    title: 'Atlantis Mega Complex',
    location: 'Dubai, UAE',
    status: 'In Progress - 85%',
    value: '$12.3B',
    image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1920',
    description: 'Underwater luxury resort and research facility featuring the world\'s largest aquarium dome.',
  },
  {
    title: 'Quantum City',
    location: 'Singapore',
    status: 'Planning Phase',
    value: '$15.7B',
    image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1920',
    description: 'Smart city development with AI-integrated infrastructure and carbon-negative architecture.',
  },
];

const achievements = [
  { icon: <DollarSign className="w-12 h-12 text-primary-500" />, value: '$45B+', label: 'Total Project Value', description: 'Combined value of all mega projects' },
  { icon: <Building2 className="w-12 h-12 text-primary-500" />, value: '28', label: 'Mega Projects', description: 'Completed worldwide' },
  { icon: <Users className="w-12 h-12 text-primary-500" />, value: '150K+', label: 'Jobs Created', description: 'Direct and indirect employment' },
  { icon: <Globe className="w-12 h-12 text-primary-500" />, value: '18', label: 'Countries', description: 'Global project presence' },
];

const capabilities = [
  {
    icon: <Zap className="w-8 h-8 text-primary-500" />,
    title: 'Advanced Engineering',
    description: 'Cutting-edge structural and systems engineering for complex mega developments.',
  },
  {
    icon: <Target className="w-8 h-8 text-primary-500" />,
    title: 'Project Orchestration',
    description: 'Seamless coordination of multiple stakeholders and complex project phases.',
  },
  {
    icon: <Award className="w-8 h-8 text-primary-500" />,
    title: 'Innovation Leadership',
    description: 'Pioneering new construction technologies and sustainable building practices.',
  },
  {
    icon: <BarChart className="w-8 h-8 text-primary-500" />,
    title: 'Risk Management',
    description: 'Comprehensive risk assessment and mitigation strategies for large-scale projects.',
  },
];

const projectShowcase = [
  {
    title: 'Vertical Forest Towers',
    location: 'Milan, Italy',
    year: '2023',
    image: 'https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg?auto=compress&cs=tinysrgb&w=1200',
    stats: { height: '200m', trees: '2,000+', co2: '30 tons/year' },
  },
  {
    title: 'Floating Solar Farm',
    location: 'Netherlands',
    year: '2022',
    image: 'https://images.pexels.com/photos/3316922/pexels-photo-3316922.jpeg?auto=compress&cs=tinysrgb&w=1200',
    stats: { capacity: '50MW', panels: '180,000', homes: '15,000' },
  },
  {
    title: 'Underground Metro Hub',
    location: 'London, UK',
    year: '2024',
    image: 'https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=1200',
    stats: { depth: '40m', platforms: '12', capacity: '100K/day' },
  },
];

export default function MegaProjectsPage() {
  const [currentHero, setCurrentHero] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroProjects.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Dynamic Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {heroProjects.map((project, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ${
              index === currentHero ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <motion.div
              style={{ y: backgroundY }}
              className="absolute inset-0 scale-110"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/50" />
          </div>
        ))}
        
        <div className="container relative h-full flex items-center">
          <div className="max-w-4xl">
            <motion.div
              key={currentHero}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="inline-block px-4 py-2 bg-primary-500/20 border border-primary-500 rounded-full text-primary-500 text-sm font-medium mb-6">
                {heroProjects[currentHero].status}
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                {heroProjects[currentHero].title}
              </h1>
              <div className="flex items-center gap-x-6 text-xl text-gray-300 mb-6">
                <span>{heroProjects[currentHero].location}</span>
                <span>•</span>
                <span className="text-primary-500 font-semibold">{heroProjects[currentHero].value}</span>
              </div>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                {heroProjects[currentHero].description}
              </p>
              <div className="flex gap-4">
                <button className="btn btn-primary">
                  Explore Project
                </button>
                <button className="btn btn-outline">
                  View Portfolio
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hero Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-3">
            {heroProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentHero(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentHero ? 'w-12 bg-primary-500' : 'w-3 bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section ref={ref} className="py-24 bg-dark-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3254088/pexels-photo-3254088.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-fixed bg-cover bg-center opacity-5" />
        
        <div className="container relative">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">
              Redefining <span className="gold-gradient-text">Possibilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our mega projects push the boundaries of engineering and design, creating landmarks that shape the future of urban development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <div className="text-4xl font-bold text-primary-500 mb-2">
                  {achievement.value}
                </div>
                <h3 className="text-xl font-semibold mb-2">{achievement.label}</h3>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-24 bg-dark">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">
              Engineering <span className="gold-gradient-text">Marvels</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Each project represents a breakthrough in construction technology and sustainable design.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projectShowcase.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-lg bg-dark-800"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className="text-primary-500 text-sm">{project.year}</span>
                  </div>
                  <p className="text-gray-400 mb-6">{project.location}</p>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(project.stats).map(([key, value], statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-lg font-bold text-primary-500">{value}</div>
                        <div className="text-xs text-gray-400 uppercase">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-dark-800">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">
              Mega Project <span className="gold-gradient-text">Expertise</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our specialized capabilities enable us to tackle the world's most ambitious construction challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-6 p-8 bg-dark-700 rounded-lg hover:bg-dark-600 transition-colors duration-300"
              >
                <div className="flex-shrink-0">{capability.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                  <p className="text-gray-300">{capability.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-primary-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1574843/pexels-photo-1574843.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
        
        <div className="container relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
              Ready to Build the Extraordinary?
            </h2>
            <p className="text-xl text-dark-800 mb-8 max-w-2xl mx-auto">
              Partner with us to bring your mega project vision to life with unparalleled expertise and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-dark-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-dark-800 transition-colors">
                Start Your Project
              </button>
              <button className="border-2 border-dark-900 text-dark-900 px-8 py-4 rounded-lg font-semibold hover:bg-dark-900 hover:text-white transition-colors">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}