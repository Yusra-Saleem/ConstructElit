'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Slide data for the hero slider
const slides = [
  {
    title: "Building the Future with Precision",
    description: "Creating iconic structures that define skylines and transform communities across the globe.",
    image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920",
    buttonText: "Explore Our Projects",
    buttonLink: "/projects"
  },
  {
    title: "Engineering Excellence",
    description: "Pushing the boundaries of what's possible with innovative construction techniques and sustainable practices.",
    image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920",
    buttonText: "Our Capabilities",
    buttonLink: "/capabilities"
  },
  {
    title: "Global Expertise, Local Insight",
    description: "Bringing worldwide experience and local knowledge to every project, no matter the scale.",
    image: "https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=1920",
    buttonText: "About Our Company",
    buttonLink: "/company"
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-advance the slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background image with overlay */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark/90" />
        </div>
      ))}

      {/* Content container */}
      <div className="container relative h-full flex flex-col justify-center items-start pt-24">
        <div className="max-w-3xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-opacity duration-1000 ${
                index === current ? 'block' : 'hidden'
              }`}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block py-1 px-3 mb-4 border-l-4 border-primary-500 bg-dark/50 backdrop-blur-sm text-primary-500 font-medium"
              >
                ConstructElite Global
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="heading-xl mb-6 leading-tight"
              >
                {slide.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl text-gray-200 mb-8 max-w-2xl"
              >
                {slide.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Link href={slide.buttonLink} className="btn btn-primary">
                  {slide.buttonText}
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link href="/contact" className="btn btn-outline">
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Slider controls */}
        <div className="absolute bottom-12 left-0 right-0">
          <div className="container flex items-center justify-start">
            <div className="flex space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current ? 'w-12 bg-primary-500' : 'w-3 bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}