'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const officeLocations = [
  { name: 'New York', country: 'USA', address: '123 Construction Avenue' },
  { name: 'London', country: 'UK', address: '456 Building Street' },
  { name: 'Dubai', country: 'UAE', address: '789 Tower Boulevard' },
  { name: 'Singapore', country: 'Singapore', address: '321 Development Road' },
  { name: 'Sydney', country: 'Australia', address: '654 Engineering Plaza' },
];

const footerLinks = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/company' },
      { name: 'Leadership', href: '/company/leadership' },
      { name: 'History', href: '/company/history' },
      { name: 'Careers', href: '/careers' },
      { name: 'News', href: '/news' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Construction', href: '/capabilities/construction' },
      { name: 'Engineering', href: '/capabilities/engineering' },
      { name: 'Architecture', href: '/capabilities/architecture' },
      { name: 'Project Management', href: '/capabilities/project-management' },
      { name: 'Sustainability', href: '/capabilities/sustainability' },
    ],
  },
  {
    title: 'Projects',
    links: [
      { name: 'Mega Projects', href: '/projects/mega' },
      { name: 'Residential', href: '/projects/residential' },
      { name: 'Commercial', href: '/projects/commercial' },
      { name: 'Infrastructure', href: '/projects/infrastructure' },
      { name: 'Industrial', href: '/projects/industrial' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark-800 pt-16 pb-8 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <span className="text-primary-500 text-2xl font-bold">ConstructElite</span>
            </Link>
            <p className="text-gray-400 mb-8 max-w-md">
              Building the future with precision. We are a global construction company with a reputation for excellence and innovation in every project we undertake.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-white font-semibold text-lg mb-6">{group.title}</h3>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-primary-500 transition-colors flex items-center">
                      <ArrowRight size={16} className="mr-2" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-12 pb-8">
          <h3 className="text-white font-semibold text-lg mb-6">Global Presence</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {officeLocations.map((office) => (
              <div key={office.name} className="flex items-start space-x-3">
                <MapPin className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="text-white font-medium">{office.name}, {office.country}</h4>
                  <p className="text-gray-400 text-sm">{office.address}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} ConstructElite-By YUSRA SALEEM. All rights reserved.
            </div>
            <div className="flex space-x-8">
              <Link href="/privacy" className="text-gray-500 hover:text-primary-500 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-primary-500 text-sm">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-500 hover:text-primary-500 text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}