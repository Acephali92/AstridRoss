'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

function generateParticles(): Particle[] {
  const items: Particle[] = [];
  const count = 15; // Reduced for subtlety

  for (let i = 0; i < count; i++) {
    items.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 6 + 8, // Slower, more gentle
      delay: Math.random() * 8,
      opacity: Math.random() * 0.3 + 0.1, // Very subtle
    });
  }
  return items;
}

export default function MagicParticles() {
  // Generate particles once on initial render (lazy initializer avoids re-generation)
  const [particles] = useState<Particle[]>(generateParticles);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: `rgba(212, 168, 83, ${particle.opacity})`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [particle.opacity * 0.5, particle.opacity, particle.opacity * 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
