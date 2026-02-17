'use client';

import Image from 'next/image';
import { trackBuyButtonClick } from '@/lib/tracking';

export default function Hero() {
  const handleBuyClick = (retailer: string) => {
    trackBuyButtonClick(retailer, 'hero_cta');
  };

  return (
    <section id="ueber-das-buch" className="relative bg-gradient-to-br from-[#F8F4ED] via-[#F5F0E8] to-[#EDE8E0] py-12 md:py-20 overflow-hidden">
      {/* Misty fantasy background with soft magical atmosphere */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Soft misty gradient layers */}
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            background: `
              radial-gradient(ellipse 120% 80% at 80% 20%, rgba(42, 140, 130, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse 100% 60% at 20% 80%, rgba(247, 193, 11, 0.08) 0%, transparent 40%),
              radial-gradient(ellipse 80% 100% at 50% 100%, rgba(13, 79, 74, 0.12) 0%, transparent 60%)
            `,
          }}
        />

        {/* Soft light rays from top */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[60%] opacity-[0.08]"
          style={{
            background: 'conic-gradient(from 180deg at 50% 0%, transparent 40%, rgba(247, 193, 11, 0.3) 50%, transparent 60%)',
          }}
        />

        {/* Subtle fog/mist effect at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48 opacity-[0.15]"
          style={{
            background: 'linear-gradient(to top, rgba(248, 244, 237, 0.8), transparent)',
          }}
        />

        {/* Decorative vine/floral corner accents */}
        <svg className="absolute top-0 left-0 w-48 h-48 opacity-[0.08] text-[#0D4F4A]" viewBox="0 0 200 200" fill="none">
          <path d="M0 0 Q60 20 40 80 Q20 140 80 120 Q140 100 100 160" stroke="currentColor" strokeWidth="1" fill="none"/>
          <circle cx="40" cy="80" r="4" fill="currentColor" opacity="0.5"/>
          <circle cx="80" cy="120" r="3" fill="currentColor" opacity="0.4"/>
          <path d="M30 70 Q45 65 50 80" stroke="currentColor" strokeWidth="0.8" fill="none"/>
          <path d="M70 110 Q85 105 90 120" stroke="currentColor" strokeWidth="0.8" fill="none"/>
        </svg>

        <svg className="absolute top-0 right-0 w-48 h-48 opacity-[0.08] text-[#0D4F4A] transform scale-x-[-1]" viewBox="0 0 200 200" fill="none">
          <path d="M0 0 Q60 20 40 80 Q20 140 80 120 Q140 100 100 160" stroke="currentColor" strokeWidth="1" fill="none"/>
          <circle cx="40" cy="80" r="4" fill="currentColor" opacity="0.5"/>
          <circle cx="80" cy="120" r="3" fill="currentColor" opacity="0.4"/>
          <path d="M30 70 Q45 65 50 80" stroke="currentColor" strokeWidth="0.8" fill="none"/>
          <path d="M70 110 Q85 105 90 120" stroke="currentColor" strokeWidth="0.8" fill="none"/>
        </svg>

        {/* Subtle sparkle/magic dust effect */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, #F7C10B 1px, transparent 1px),
                           radial-gradient(circle at 80% 20%, #F7C10B 0.5px, transparent 0.5px),
                           radial-gradient(circle at 60% 70%, #F7C10B 1px, transparent 1px),
                           radial-gradient(circle at 10% 80%, #F7C10B 0.5px, transparent 0.5px),
                           radial-gradient(circle at 90% 60%, #F7C10B 1px, transparent 1px)`,
          backgroundSize: '400px 400px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left Column - Book Cover */}
            <div className="flex justify-center md:justify-start">
              <div className="relative group" style={{ perspective: '1000px' }}>
                {/* Soft realistic shadow under the book */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[30px] bg-black/40 rounded-[50%] transition-all duration-500 group-hover:w-[75%] group-hover:bg-black/50"
                  style={{
                    filter: 'blur(20px)',
                    transform: 'translateX(-50%) translateY(15px)',
                  }}
                />

                {/* Floating animation wrapper with 3D transform */}
                <div className="relative animate-float">
                  {/* Book cover image - CLS-optimized container */}
                  <div
                    className="relative book-cover-container transition-all duration-700 ease-out group-hover:scale-[1.03]"
                    style={{
                      transform: 'rotateY(-5deg) rotateX(2deg)',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <Image
                      src="/images/book-cover-1.svg"
                      alt="Buchcover: Zeit der Ungewissheit von Astrid Ross - Ein Fantasy-Roman über Familie, Liebe und Überleben"
                      width={400}
                      height={580}
                      priority
                      className="w-full h-auto"
                      style={{
                        filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.25)) drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15))',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Book Details */}
            <div className="text-center md:text-left">
              {/* Genre Badge */}
              <div className="inline-flex items-center gap-2 bg-[#0D4F4A]/10 text-[#0D4F4A] px-4 py-1.5 rounded-full mb-4 text-sm font-medium">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Für Fans von Bridgerton & historischer Fantasy
              </div>

              {/* Rating Badge */}
              <div className="inline-flex items-center gap-2 bg-[#F7C10B] text-[#232021] px-5 py-2.5 rounded-full mb-4 shadow-lg shadow-[#F7C10B]/30 ml-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <span className="font-bold">4,9 / 5</span>
              </div>
              <p className="text-[#232021]/60 text-sm mb-8">
                basierend auf <span className="font-semibold text-[#232021]">12</span> verifizierten Rezensionen
              </p>

              {/* Glassmorphism card for title area */}
              <div className="relative">
                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#232021] mb-3 leading-tight">
                  Zeit der{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10">Ungewissheit</span>
                    <span className="absolute bottom-1 left-0 w-full h-3 bg-[#F7C10B] -z-0 rounded-sm"></span>
                  </span>
                </h1>

                {/* Author */}
                <p className="text-xl text-[#232021]/80 mb-6">
                  von <span className="font-semibold text-[#2A8C82]">Astrid Ross</span>
                </p>

                {/* Subtitle with glassmorphism effect */}
                <div className="relative mb-10">
                  <div className="absolute -inset-4 bg-white/40 backdrop-blur-sm rounded-2xl -z-10" />
                  <p className="text-2xl md:text-3xl font-bold text-[#232021]/90 italic leading-relaxed py-4">
                    „Verannis Kampf – Zwischen Liebe, Pflicht und Überleben&rdquo;
                  </p>
                </div>
              </div>

              {/* Book Details - Clean List with subtle styling */}
              <div className="space-y-3 mb-10 bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/60 shadow-sm">
                <div className="flex flex-col md:flex-row md:gap-4">
                  <span className="text-[#2A8C82] text-sm font-medium min-w-[100px]">ISBN/EAN:</span>
                  <span className="text-[#232021] font-medium">9783758326356</span>
                </div>
                <div className="flex flex-col md:flex-row md:gap-4">
                  <span className="text-[#2A8C82] text-sm font-medium min-w-[100px]">Verlag:</span>
                  <span className="text-[#232021]">BoD – Books on Demand</span>
                </div>
                <div className="flex flex-col md:flex-row md:gap-4">
                  <span className="text-[#2A8C82] text-sm font-medium min-w-[100px]">Auflage:</span>
                  <span className="text-[#232021]">1. Auflage, erschienen am 28.02.2024</span>
                </div>
                <div className="flex flex-col md:flex-row md:gap-4">
                  <span className="text-[#2A8C82] text-sm font-medium min-w-[100px]">Sprache:</span>
                  <span className="text-[#232021]">Deutsch</span>
                </div>
                <div className="flex flex-col md:flex-row md:gap-4">
                  <span className="text-[#2A8C82] text-sm font-medium min-w-[100px]">Umfang:</span>
                  <span className="text-[#232021]">274 Seiten</span>
                </div>
                <div className="flex flex-col md:flex-row md:gap-4">
                  <span className="text-[#2A8C82] text-sm font-medium min-w-[100px]">Preis:</span>
                  <span className="text-[#232021] font-semibold">€ 16,99 (Taschenbuch)</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start" id="jetzt-kaufen">
                <a
                  href="https://www.amazon.de/Zeit-Ungewissheit-Geschichte-Familie-Wareck/dp/3758326354?tag=astridross-21&utm_source=website&utm_medium=cta&utm_campaign=hero_buy"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleBuyClick('amazon')}
                  className="group bg-[#2A8C82] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#238377] transition-all duration-300 hover:shadow-xl hover:shadow-[#2A8C82]/30 hover:-translate-y-1 inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Jetzt Kaufen – € 16,99
                </a>
                <a
                  href="#newsletter"
                  className="group border-2 border-[#232021] text-[#232021] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#232021] hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Kostenlose Leseprobe
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-6 text-sm text-[#232021]/60">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-[#2A8C82]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Sicherer Kauf
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-[#2A8C82]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                  </svg>
                  Kostenloser Versand ab €29
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
