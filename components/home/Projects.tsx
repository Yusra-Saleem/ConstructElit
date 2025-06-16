'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { ExternalLink, ArrowRight } from 'lucide-react';
import ProjectCard from '../ui/ProjectCard';

// Project categories
const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'skyscrapers', name: 'Skyscrapers' },
  { id: 'residential', name: 'Residential' },
  { id: 'commercial', name: 'Commercial' },
  { id: 'infrastructure', name: 'Infrastructure' },
];

// Project data
const projects = [
  {
    id: 1,
    title: 'Azure Heights Tower',
    category: 'skyscrapers',
    location: 'Dubai, UAE',
    year: '2023',
    image: 'https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'A 75-story luxury mixed-use skyscraper featuring residential, hotel, and commercial spaces with cutting-edge sustainable design.',
  },
  {
    id: 2,
    title: 'Oceanfront Residences',
    category: 'residential',
    location: 'Miami, USA',
    year: '2022',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Premium beachfront luxury residences with 200 units, featuring smart home technology and panoramic ocean views.',
  },
  {
    id: 3,
    title: 'Global Commerce Center',
    category: 'commercial',
    location: 'Singapore',
    year: '2021',
    image: 'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'State-of-the-art commercial complex with office spaces, retail outlets, and conference facilities in the heart of Singapore\'s business district.',
  },
  {
    id: 4,
    title: 'Meridian Bridge',
    category: 'infrastructure',
    location: 'London, UK',
    year: '2020',
    image: 'https://images.pexels.com/photos/1769356/pexels-photo-1769356.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'An iconic cable-stayed bridge spanning the Thames River, featuring pedestrian walkways and integrated public art installations.',
  },
  {
    id: 5,
    title: 'Solstice Tower',
    category: 'skyscrapers',
    location: 'Toronto, Canada',
    year: '2023',
    image: 'https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'A 60-story sustainable office tower with zero-carbon footprint, vertical gardens, and advanced energy management systems.',
  },
  {
    id: 6,
    title: 'Harmony Gardens Complex',
    category: 'residential',
    location: 'Barcelona, Spain',
    year: '2022',
    image: 'https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'An eco-friendly residential community with 350 units centered around shared green spaces and sustainable living principles.',
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section ref={ref} className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3254088/pexels-photo-3254088.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-fixed bg-cover bg-center opacity-5" />
      
      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="subheading inline-block mb-4">Our Portfolio</span>
          <h2 className="heading-lg mb-6">
            Landmark <span className="gold-gradient-text">Projects</span>
          </h2>
          <p className="text-gray-300">
            Explore our portfolio of landmark projects that showcase our expertise in creating exceptional structures across the globe. Each project represents our commitment to quality, innovation, and architectural excellence.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-500 text-dark-900 font-medium'
                  : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View all projects button */}
        <div className="text-center mt-12">
          <Link href="/projects" className="btn btn-primary">
            View All Projects
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}