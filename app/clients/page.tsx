'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Building2, Users, Trophy, BarChart as ChartBar } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

const successStories = [
  {
    title: "Azure Heights Tower",
    client: "Global Development Corp",
    description: "Completed ahead of schedule with innovative sustainable solutions",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    title: "Oceanfront Residences",
    client: "Coastal Living Ltd",
    description: "Award-winning luxury residential complex with smart technology",
    image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    title: "Tech Innovation Hub",
    client: "Future Systems Inc",
    description: "State-of-the-art facility with net-zero carbon footprint",
    image: "https://images.pexels.com/photos/1743373/pexels-photo-1743373.jpeg?auto=compress&cs=tinysrgb&w=1200"
  }
];

const categories = [
  "All",
  "Commercial",
  "Residential",
  "Infrastructure",
  "Industrial"
];

const clients = [
  {
    name: "Global Corp",
    category: "Commercial",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200",
    projects: 12,
    years: 5
  },
  // Add more clients...
];

const caseStudies = [
  {
    title: "Sustainable Office Complex",
    metrics: {
      timeReduction: "25%",
      costSavings: "$2.5M",
      energyEfficiency: "40%"
    },
    image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  // Add more case studies...
];

const benefits = [
  {
    icon: <Building2 className="w-12 h-12 text-primary-500" />,
    title: "Expert Project Management",
    description: "Dedicated team of professionals ensuring seamless execution"
  },
  {
    icon: <Users className="w-12 h-12 text-primary-500" />,
    title: "Collaborative Approach",
    description: "Partnership-focused methodology for optimal results"
  },
  {
    icon: <Trophy className="w-12 h-12 text-primary-500" />,
    title: "Award-winning Solutions",
    description: "Internationally recognized for excellence in construction"
  },
  {
    icon: <ChartBar className="w-12 h-12 text-primary-500" />,
    title: "Data-driven Decisions",
    description: "Advanced analytics for informed project planning"
  }
];

export default function ClientsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="h-full"
        >
          {successStories.map((story, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${story.image})` }}
                />
                <div className="absolute inset-0 bg-dark/70" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="container mx-auto px-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="max-w-3xl"
                    >
                      <h1 className="text-4xl md:text-6xl font-bold mb-4">{story.title}</h1>
                      <p className="text-xl md:text-2xl mb-2 text-primary-500">{story.client}</p>
                      <p className="text-lg md:text-xl text-gray-300">{story.description}</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Client Portfolio Grid */}
      <section ref={ref} className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeCategory === category
                    ? "bg-primary-500 text-dark"
                    : "bg-dark-700 text-white hover:bg-dark-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients
              .filter(client => activeCategory === "All" || client.category === activeCategory)
              .map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold mb-2">{client.name}</h3>
                      <p className="text-sm text-gray-300">
                        {client.projects} Projects • {client.years} Years Partnership
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Partner With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg bg-dark-800 hover:bg-dark-700 transition-colors"
              >
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}