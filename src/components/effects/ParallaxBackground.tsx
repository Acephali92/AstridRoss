'use client';

import { useSyncExternalStore } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxBackgroundProps {
  imageSrc?: string;
  overlayOpacity?: number;
}

// useSyncExternalStore pattern for hydration-safe client detection
const emptySubscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

function useIsClient() {
  return useSyncExternalStore(emptySubscribe, getClientSnapshot, getServerSnapshot);
}

export default function ParallaxBackground({
  imageSrc = '/images/backgrounds/fantasy-castle.jpg',
  overlayOpacity = 0.7,
}: ParallaxBackgroundProps) {
  const isClient = useIsClient();
  const { scrollY } = useScroll();

  // Parallax effect - image moves slower than scroll
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0.3]);

  if (!isClient) {
    return (
      <div className="fixed inset-0 z-0 bg-[#0a0a0f]" />
    );
  }

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-[120%]"
        style={{ y }}
      >
        <Image
          src={imageSrc}
          alt="Fantasy Background"
          fill
          priority
          quality={85}
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Dark gradient overlay - creates depth */}
      <motion.div
        className="absolute inset-0"
        style={{ opacity }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom,
              rgba(10, 10, 15, ${overlayOpacity}) 0%,
              rgba(10, 10, 15, ${overlayOpacity * 0.8}) 30%,
              rgba(18, 17, 26, ${overlayOpacity * 0.9}) 70%,
              rgba(10, 10, 15, ${overlayOpacity}) 100%
            )`,
          }}
        />
      </motion.div>

      {/* Vignette effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 20%, rgba(10, 10, 15, 0.8) 100%)',
        }}
      />

      {/* Subtle color tint for mystical atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30"
        style={{
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, transparent 50%, rgba(212, 168, 83, 0.15) 100%)',
        }}
      />
    </div>
  );
}
