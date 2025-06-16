'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Home, Coffee, Trees as Tree, Car } from 'lucide-react';

const properties = [
  {
    title: 'The Residences at Harbor Point',
    type: 'Luxury Apartments',
    location: 'Waterfront District',
    image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg',
    price: 'From $1.2M',
  },
  {
    title: 'Parkview Townhomes',
    type: 'Modern Townhouses',
    location: 'Central Park Area',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
    price: 'From $850K',
  },
  {
    title: 'Sky Villas',
    type: 'Penthouses',
    location: 'Downtown',
    image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg',
    price: 'From $2.5M',
  },
];

const amenities = [
  { icon: <Coffee className="w-6 h-6" />, name: 'Café & Restaurant' },
  { icon: <Tree className="w-6 h-6" />, name: 'Garden & Park' },
  { icon: <Car className="w-6 h-6" />, name: 'Secure Parking' },
  { icon: <Home className="w-6 h-6" />, name: 'Concierge' },
];

const testimonials = [
  {
    quote: "Living here has exceeded all our expectations. The attention to detail and quality of finishes is outstanding.",
    author: "Sarah Johnson",
    residence: "Harbor Point Penthouse",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
  {
    quote: "The community amenities and location make this the perfect place to call home. Couldn't be happier with our choice.",
    author: "Michael Chen",
    residence: "Parkview Townhouse",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
  },
];

export default function ResidentialPage() {
  const [activeProperty, setActiveProperty] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen">
      {/* Dynamic Grid Layout */}
      <section className="pt-32 pb-24 bg-dark-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="heading-xl mb-6">
              Luxury Living <span className="gold-gradient-text">Redefined</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover exceptional residential properties that blend sophisticated design with unparalleled comfort.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-[4/5]">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                    <p className="text-primary-500 mb-1">{property.type}</p>
                    <div className="flex items-center text-gray-300">
                      <MapPin size={16} className="mr-2" />
                      {property.location}
                    </div>
                    <p className="text-white font-semibold mt-2">{property.price}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-24 bg-dark-800">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-lg mb-6">Experience Luxury Living</h2>
              <p className="text-gray-300 mb-8">
                Our residential properties offer more than just a home - they provide a lifestyle. With premium amenities and thoughtfully designed spaces, every day feels like a retreat.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-300">
                    <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500">
                      {amenity.icon}
                    </div>
                    <span>{amenity.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] rounded-lg overflow-hidden"
            >
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                alt="Luxury amenities"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floor Plan Viewer */}
      <section ref={ref} className="py-24 bg-dark">
        <div className="container">
          <h2 className="heading-lg text-center mb-16">Interactive Floor Plans</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="bg-dark-800 p-8 rounded-lg">
                <img
                  src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
                  alt="Floor plan"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Customize Your Space</h3>
              <p className="text-gray-300 mb-8">
                Explore our interactive floor plans and customize your future home with different finishes and layouts.
              </p>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Unit Type
                  </label>
                  <select className="w-full bg-dark-700 border border-dark-600 rounded-lg p-3 text-white">
                    <option>1 Bedroom + Den</option>
                    <option>2 Bedroom</option>
                    <option>3 Bedroom</option>
                    <option>Penthouse</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Floor Level
                  </label>
                  <select className="w-full bg-dark-700 border border-dark-600 rounded-lg p-3 text-white">
                    <option>Podium (1-3)</option>
                    <option>Low Rise (4-10)</option>
                    <option>Mid Rise (11-20)</option>
                    <option>High Rise (21+)</option>
                  </select>
                </div>
                <button className="btn btn-primary w-full">
                  Schedule a Virtual Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Section */}
      <section className="py-24 bg-dark-800">
        <div className="container">
          <h2 className="heading-lg text-center mb-16">Discover the Neighborhood</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Dining', 'Shopping', 'Parks', 'Transit'].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-700 rounded-lg overflow-hidden group cursor-pointer"
              >
                <div className="aspect-square">
                  <img
                    src={`https://images.pexels.com/photos/${1850021 + index}/pexels-photo-${1850021 + index}.jpeg`}
                    alt={category}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{category}</h3>
                  <p className="text-gray-300">
                    Explore nearby {category.toLowerCase()} options within walking distance.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-dark">
        <div className="container">
          <h2 className="heading-lg text-center mb-16">Resident Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-dark-800 p-8 rounded-lg"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.author}</h3>
                    <p className="text-primary-500">{testimonial.residence}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}