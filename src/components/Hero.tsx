'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { trackBuyButtonClick } from '@/lib/tracking';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const bookScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const handleBuyClick = (retailer: string) => {
    trackBuyButtonClick(retailer, 'hero_cta');
  };

  return (
    <section
      ref={containerRef}
      id="ueber-das-buch"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Hero Content Container */}
      <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
        {/* Centered Author Title Section */}
        <motion.div
          className="text-center mb-20 md:mb-28"
          style={{ y: titleY, opacity: titleOpacity }}
        >
          {/* Small Tagline Above */}
          <motion.p
            className="text-[#a8a3b3] text-sm md:text-base uppercase tracking-[0.3em] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Fantasy-Autorin
          </motion.p>

          {/* Main Author Name with Golden Glow */}
          <motion.h1
            className="font-cinzel text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span
              className="relative inline-block text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(135deg, #d4a853 0%, #f5e6c4 40%, #d4a853 60%, #a88a42 100%)',
                filter: 'drop-shadow(0 0 60px rgba(212, 168, 83, 0.5))',
              }}
            >
              Astrid Ross
            </span>
            {/* Animated glow layer */}
            <motion.span
              className="absolute inset-0 text-[#d4a853] opacity-50 blur-sm"
              aria-hidden="true"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              Astrid Ross
            </motion.span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-[#a8a3b3] font-light italic max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            &bdquo;Geschichten, die das Herz berühren und die Seele entführen&rdquo;
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            className="flex items-center justify-center gap-4 mt-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-[#d4a853]/50" />
            <div className="w-2 h-2 rotate-45 bg-[#d4a853]" />
            <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-[#d4a853]/50" />
          </motion.div>
        </motion.div>

        {/* Book Showcase Section */}
        <motion.div
          className="max-w-6xl mx-auto"
          style={{ scale: bookScale }}
        >
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Book Cover with Epic Effects */}
            <motion.div
              className="flex justify-center order-1"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="relative group" style={{ perspective: '1000px' }}>
                {/* Intense glow behind book */}
                <div
                  className="absolute -inset-12 rounded-3xl opacity-40 group-hover:opacity-60 transition-all duration-700"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(212, 168, 83, 0.4) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                  }}
                />

                {/* Floating animation wrapper */}
                <motion.div
                  className="relative"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {/* Book with 3D effect */}
                  <div
                    className="relative book-cover-container transition-all duration-700 ease-out group-hover:scale-105"
                    style={{
                      transform: 'rotateY(-8deg) rotateX(3deg)',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Gold border glow */}
                    <div
                      className="absolute -inset-1.5 rounded-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'linear-gradient(45deg, #d4a853, #8b5cf6, #d4a853, #8b5cf6)',
                        backgroundSize: '300% 300%',
                        animation: 'gradient-shift 4s ease infinite',
                        filter: 'blur(6px)',
                      }}
                    />

                    <Image
                      src="/images/book-cover-1.svg"
                      alt="Buchcover: Zeit der Ungewissheit von Astrid Ross"
                      width={420}
                      height={610}
                      priority
                      className="relative w-full h-auto rounded-sm"
                      style={{
                        filter: 'drop-shadow(0 30px 60px rgba(0, 0, 0, 0.6))',
                      }}
                    />
                  </div>
                </motion.div>

                {/* Reflection under book */}
                <div
                  className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[70%] h-[30px] rounded-[50%] opacity-25"
                  style={{
                    background: 'radial-gradient(ellipse, rgba(212, 168, 83, 0.5) 0%, transparent 70%)',
                    filter: 'blur(15px)',
                  }}
                />
              </div>
            </motion.div>

            {/* Book Details */}
            <motion.div
              className="text-center md:text-left order-2"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {/* Genre Badge */}
              <div className="inline-flex items-center gap-2 bg-[#8b5cf6]/20 border border-[#8b5cf6]/30 text-[#a8a3b3] px-4 py-2 rounded-full mb-6 text-sm font-medium">
                <svg className="w-4 h-4 text-[#8b5cf6]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Historische Fantasy & Romantik
              </div>

              {/* Book Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f5f0e6] mb-4 leading-tight">
                Zeit der{' '}
                <span
                  className="text-[#d4a853]"
                  style={{ textShadow: '0 0 40px rgba(212, 168, 83, 0.5)' }}
                >
                  Ungewissheit
                </span>
              </h2>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-[#a8a3b3] mb-8 italic">
                Die Geschichte der Familie Wareck
              </p>

              {/* Rating */}
              <div className="flex items-center justify-center md:justify-start gap-3 mb-8">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#d4a853] fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[#d4a853] font-semibold">4,9 / 5</span>
                <span className="text-[#8a8494] text-sm">(12 Rezensionen)</span>
              </div>

              {/* Book Info */}
              <div className="glass-dark rounded-xl p-6 mb-8">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-[#8a8494]">Seiten:</span>
                    <span className="ml-2 text-[#f5f0e6]">274</span>
                  </div>
                  <div>
                    <span className="text-[#8a8494]">Preis:</span>
                    <span className="ml-2 text-[#d4a853] font-semibold">€ 16,99</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start" id="jetzt-kaufen">
                <a
                  href="https://www.amazon.de/Zeit-Ungewissheit-Geschichte-Familie-Wareck/dp/3758326354?tag=astridross-21"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleBuyClick('amazon')}
                  className="btn-primary inline-flex items-center justify-center gap-2 text-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Jetzt Kaufen
                </a>
                <a
                  href="#newsletter"
                  className="btn-secondary inline-flex items-center justify-center gap-2 text-lg"
                >
                  Kostenlose Leseprobe
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#shop-links"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Nach unten scrollen zu weiteren Inhalten"
      >
        <div className="flex flex-col items-center gap-2 text-[#8a8494] hover:text-[#d4a853] transition-colors duration-200">
          <span className="text-xs uppercase tracking-[0.2em]">Entdecken</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.a>
    </section>
  );
}
