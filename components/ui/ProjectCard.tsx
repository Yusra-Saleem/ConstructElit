'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  description: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group rounded-lg overflow-hidden bg-dark-800 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60" />
        
        {/* Category badge */}
        <span className="absolute top-4 left-4 py-1 px-3 bg-primary-500 text-dark-900 rounded-full text-sm font-medium">
          {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
        </span>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 transition-colors group-hover:text-primary-500">
          {project.title}
        </h3>
        
        <div className="flex items-center gap-x-4 text-sm text-gray-400 mb-4">
          <div className="flex items-center">
            <MapPin size={14} className="mr-1" />
            {project.location}
          </div>
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {project.year}
          </div>
        </div>
        
        <p className="text-gray-300 mb-5 line-clamp-3">
          {project.description}
        </p>
        
        <Link
          href={`/projects/${project.id}`}
          className="inline-flex items-center text-primary-500 font-medium group-hover:text-primary-300 transition-colors"
        >
          View Project
          <ExternalLink size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}