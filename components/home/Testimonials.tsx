'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Testimonial data
const testimonials = [
  {
    quote: "ConstructElite delivered our headquarters on time and within budget. Their attention to detail and innovative approach to problem-solving made the complex project seamless.",
    author: "Sarah Johnson",
    position: "CEO",
    company: "Global Finance Corp",
    image: "https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    quote: "Working with ConstructElite on our residential development was exceptional. Their team's expertise in sustainable building practices helped us achieve LEED Platinum certification.",
    author: "Michael Chen",
    position: "Development Director",
    company: "Greenview Properties",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    quote: "The precision and craftsmanship ConstructElite brought to our bridge project was remarkable. Their engineering solutions overcame significant site challenges while maintaining aesthetic excellence.",
    author: "Emma Rodriguez",
    position: "Chief Engineer",
    company: "Metropolitan Infrastructure Authority",
    image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    quote: "ConstructElite transformed our vision into an architectural masterpiece. Their collaborative approach ensured our museum not only met functional requirements but became a landmark in itself.",
    author: "David Okafor",
    position: "Board President",
    company: "National Arts Foundation",
    image: "https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="section-padding bg-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2469/el-capitan-mountain-landscape-nature.jpg?auto=compress&cs=tinysrgb&w=1920')] bg-fixed bg-cover bg-center opacity-5" />
      
      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="subheading inline-block mb-4">Testimonials</span>
          <h2 className="heading-lg mb-6">
            What Our <span className="gold-gradient-text">Clients Say</span>
          </h2>
          <p className="text-gray-300">
            We take pride in exceeding our clients' expectations and delivering exceptional results. Here's what some of our satisfied clients have to say about working with ConstructElite.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative py-8">
            {/* Large quote icon */}
            <div className="absolute top-0 left-0 opacity-10">
              <Quote size={120} className="text-primary-500" />
            </div>
            
            {/* Testimonial carousel */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 glassmorphism rounded-lg p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="order-2 md:order-1 flex-1">
                  <p className="text-xl md:text-2xl italic text-gray-200 mb-8">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].author}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{testimonials[currentIndex].author}</h4>
                      <p className="text-gray-400">
                        {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Navigation controls */}
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-gray-600 text-gray-400 hover:bg-primary-500 hover:text-dark hover:border-primary-500 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentIndex === index ? 'bg-primary-500 w-6' : 'bg-gray-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-gray-600 text-gray-400 hover:bg-primary-500 hover:text-dark hover:border-primary-500 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}