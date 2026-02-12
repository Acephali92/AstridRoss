'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section id="ueber-das-buch" className="relative bg-gradient-to-br from-[#F8F4ED] via-[#F5F0E8] to-[#EDE8E0] py-12 md:py-20 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
                  {/* Book cover image - no border, pure floating effect */}
                  <div
                    className="relative w-72 md:w-80 lg:w-[400px] transition-all duration-700 ease-out group-hover:scale-[1.03]"
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
              {/* Rating Badge */}
              <div className="inline-flex items-center gap-2 bg-[#F7C10B] text-[#232021] px-5 py-2.5 rounded-full mb-4 shadow-lg shadow-[#F7C10B]/30">
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
                basierend auf <span className="font-semibold text-[#232021]">1.000</span> Bewertungen
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
                    „Verannis Kampf – Zwischen Liebe, Pflicht und Überleben"
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
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start" id="jetzt-kaufen">
                <a
                  href="https://www.amazon.de/Zeit-Ungewissheit-Geschichte-Familie-Wareck/dp/3758326354"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[#2A8C82] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#238377] transition-all duration-300 hover:shadow-xl hover:shadow-[#2A8C82]/30 hover:-translate-y-1 inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Jetzt Kaufen
                </a>
                <a
                  href="#rezensionen"
                  className="group border-2 border-[#232021] text-[#232021] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#232021] hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Rezensionen lesen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
