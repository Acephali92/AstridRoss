'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0D4F4A] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Rating Badge */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20">
        <div className="bg-[#F7C10B] text-[#232021] px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            ))}
          </div>
          <span className="font-bold">4,9 / 5</span>
        </div>
        <p className="text-white/70 text-sm text-center mt-2">
          basierend auf <span className="font-semibold text-white">1.000</span> Bewertungen
        </p>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-white order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="text-[#F7C10B]">Zeit</span> der{' '}
              <span className="text-[#F7C10B]">Ungewissheit</span>
            </h1>
            <p className="text-xl md:text-2xl mb-2 opacity-90">
              von <span className="font-semibold">Astrid Ross</span>
            </p>
            <p className="text-lg md:text-xl italic mb-8 text-white/80">
              &bdquo;Verannis Kampf &ndash; Zwischen Liebe, Pflicht und Überleben&ldquo;
            </p>

            {/* Book Details */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 space-y-2">
              <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm md:text-base">
                <span className="text-white/70">ISBN/EAN:</span>
                <span>9783758326356</span>
                <span className="text-white/70">Verlag:</span>
                <span>BoD – Books on Demand</span>
                <span className="text-white/70">Auflage:</span>
                <span>1. Auflage, erschienen am 28.02.2024</span>
                <span className="text-white/70">Sprache:</span>
                <span>Deutsch</span>
                <span className="text-white/70">Umfang:</span>
                <span>274 Seiten</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.amazon.de/Zeit-Ungewissheit-Geschichte-Familie-Wareck/dp/3758326354"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Jetzt Kaufen
              </a>
              <a
                href="#rezensionen"
                className="btn-secondary text-center inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Rezensionen lesen
              </a>
            </div>
          </div>

          {/* Right Content - Book Cover */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* Book shadow effect */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-black/30 blur-xl rounded-full" />

              {/* Book cover placeholder */}
              <div className="relative w-64 md:w-80 lg:w-96 aspect-[2/3] bg-gradient-to-br from-[#1a6b63] to-[#0D4F4A] rounded-lg shadow-2xl overflow-hidden border-4 border-white/20">
                {/* Silhouette illustration placeholder */}
                <div className="absolute inset-0 flex items-end justify-center">
                  <svg className="w-full h-3/4 text-[#0a3d38]" viewBox="0 0 200 150" fill="currentColor">
                    {/* Adult figure */}
                    <ellipse cx="70" cy="30" rx="15" ry="18" />
                    <path d="M55 48 L85 48 L90 150 L50 150 Z" />
                    <ellipse cx="45" cy="80" rx="8" ry="25" />
                    <ellipse cx="95" cy="80" rx="8" ry="25" />

                    {/* Child figure */}
                    <ellipse cx="140" cy="50" rx="12" ry="14" />
                    <path d="M128 64 L152 64 L156 150 L124 150 Z" />
                    <ellipse cx="118" cy="90" rx="6" ry="20" />
                    <ellipse cx="162" cy="90" rx="6" ry="20" />
                  </svg>
                </div>

                {/* Book title on cover */}
                <div className="absolute top-4 left-4 right-4 text-white">
                  <h3 className="text-lg md:text-xl font-bold leading-tight">Zeit der Ungewissheit</h3>
                  <p className="text-sm opacity-80 mt-1">Astrid Ross</p>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#F7C10B]/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 md:h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,141.89,111.31,221.39,96.44,274.51,86.59,287.31,70.64,321.39,56.44Z"
            fill="#F8F4ED"
          />
        </svg>
      </div>
    </section>
  );
}
