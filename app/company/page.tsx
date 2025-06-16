'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ArrowRight, Award, Users, Target, BarChart as ChartBar } from 'lucide-react';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';

const timelineEvents = [
  {
    year: '1995',
    title: 'Company Founded',
    description: 'Started with a vision to transform the construction industry through innovation.',
    image: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    year: '2005',
    title: 'International Expansion',
    description: 'Opened offices in Dubai and Singapore, marking our global presence.',
    image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    year: '2015',
    title: 'Sustainability Initiative',
    description: 'Launched our green building program and achieved LEED certification.',
    image: 'https://images.pexels.com/photos/3316922/pexels-photo-3316922.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    year: '2023',
    title: 'Digital Transformation',
    description: 'Implemented AI and machine learning in construction management.',
    image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1200'
  }
];

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO',
    department: 'Executive',
    image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Leading innovation in construction for over 20 years.'
  },
  {
    name: 'Michael Chen',
    role: 'Chief Architect',
    department: 'Design',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Award-winning architect with a passion for sustainable design.'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Project Director',
    department: 'Operations',
    image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Specialized in managing complex infrastructure projects.'
  }
];

const departments = ['All', 'Executive', 'Design', 'Operations', 'Engineering'];

const stats = [
  { value: 28, label: 'Years of Excellence', icon: <Award className="w-8 h-8 text-primary-500" /> },
  { value: 5000, label: 'Team Members', icon: <Users className="w-8 h-8 text-primary-500" /> },
  { value: 650, label: 'Projects Completed', icon: <Target className="w-8 h-8 text-primary-500" /> },
  { value: 115, label: 'Industry Awards', icon: <ChartBar className="w-8 h-8 text-primary-500" /> }
];

export default function CompanyPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const filteredTeam = selectedDepartment === 'All'
    ? teamMembers
    : teamMembers.filter(member => member.department === selectedDepartment);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1920')",
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-dark/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Building Tomorrow's World Today
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Three decades of excellence in construction and innovation
              </p>
              <Link 
                href="#our-story" 
                className="btn btn-primary"
              >
                Learn Our Story
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="our-story" className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              From our humble beginnings to becoming a global leader in construction
            </p>
          </div>

          <div className="hidden lg:block">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={3}
              navigation
              autoplay={{ delay: 5000 }}
              className="timeline-slider"
            >
              {timelineEvents.map((event, index) => (
                <SwiperSlide key={index}>
                  <motion.div 
                    className="bg-dark-700 rounded-lg overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="aspect-video">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-primary-500 text-2xl font-bold mb-2">
                        {event.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-gray-400">{event.description}</p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="lg:hidden space-y-6">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-dark-700 rounded-lg overflow-hidden"
              >
                <div className="aspect-video">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-primary-500 text-2xl font-bold mb-2">
                    {event.year}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-400">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={ref} className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Meet the visionaries driving our success and innovation
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-4">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    selectedDepartment === dept
                      ? 'bg-primary-500 text-dark'
                      : 'bg-dark-700 text-white hover:bg-dark-600'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg bg-dark-700"
              >
                <div className="aspect-[3/4]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-500 mb-2">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-500">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-dark mb-2">
                  {stat.value}+
                </div>
                <div className="text-dark-800 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}