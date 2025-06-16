'use client';

import React, { useState } from 'react';
import { 
  ComposableMap, 
  Geographies, 
  Geography, 
  Marker
} from 'react-simple-maps';
import { motion } from 'framer-motion';

const geoUrl = 'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

interface Location {
  name: string;
  coords: [number, number];
  country: string;
}

interface WorldMapProps {
  locations: Location[];
}

export default function WorldMap({ locations }: WorldMapProps) {
  const [activeLocation, setActiveLocation] = useState<Location | null>(null);

  return (
    <div className="relative">
      <ComposableMap
        projectionConfig={{ scale: 140 }}
        width={800}
        height={400}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#2A2A2A"
                stroke="#1A1A1A"
                strokeWidth={0.5}
                style={{
                  default: { outline: 'none' },
                  hover: { fill: '#3A3A3A', outline: 'none' },
                  pressed: { outline: 'none' },
                }}
              />
            ))
          }
        </Geographies>
        
        {locations.map((location) => (
          <Marker
            key={location.name}
            coordinates={location.coords}
            onMouseEnter={() => setActiveLocation(location)}
            onMouseLeave={() => setActiveLocation(null)}
          >
            <motion.circle
              r={5}
              fill="#D4AF37"
              initial={{ r: 5 }}
              animate={{ 
                r: activeLocation?.name === location.name ? 8 : 5,
                fill: activeLocation?.name === location.name ? '#F1E199' : '#D4AF37'
              }}
              transition={{ duration: 0.3 }}
            />
          </Marker>
        ))}
      </ComposableMap>
      
      {activeLocation && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute bg-dark-600 text-white p-2 rounded text-sm"
          style={{
            left: `${(activeLocation.coords[0] + 180) * 100 / 360}%`,
            top: `${(90 - activeLocation.coords[1]) * 100 / 180}%`,
            transform: 'translate(-50%, -130%)',
          }}
        >
          {activeLocation.name}, {activeLocation.country}
        </motion.div>
      )}
    </div>
  );
}