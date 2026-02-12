'use client';

export default function Hero() {
  return (
    <section id="ueber-das-buch" className="bg-[#F8F4ED] py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            {/* Left Column - Book Cover */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                {/* Book shadow */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[85%] h-8 bg-black/20 blur-xl rounded-full" />

                {/* Book Cover */}
                <div className="relative w-72 md:w-80 lg:w-96 aspect-[2/3] rounded-lg overflow-hidden shadow-2xl border border-white/20">
                  {/* Book background with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a6b63] via-[#0D4F4A] to-[#0a3d38]" />

                  {/* Crack/shatter effect overlay */}
                  <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 200 300" fill="none">
                      <path d="M100 0 L95 50 L110 80 L90 120 L105 160 L85 200 L100 250 L95 300" stroke="white" strokeWidth="1" opacity="0.5"/>
                      <path d="M50 100 L80 110 L90 120 L120 115 L150 105" stroke="white" strokeWidth="0.5" opacity="0.3"/>
                      <path d="M40 180 L70 190 L105 160 L140 175 L170 165" stroke="white" strokeWidth="0.5" opacity="0.3"/>
                      <path d="M0 150 L30 145 L50 160 L90 120 L130 140 L160 130 L200 145" stroke="white" strokeWidth="0.5" opacity="0.2"/>
                    </svg>
                  </div>

                  {/* Golden glow at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#F7C10B]/30 to-transparent" />

                  {/* Book title on cover */}
                  <div className="absolute top-6 left-6 right-6 text-white">
                    <h3 className="text-xl md:text-2xl font-bold leading-tight mb-2">Zeit der Ungewissheit</h3>
                    <p className="text-sm opacity-80">Astrid Ross</p>
                  </div>

                  {/* Silhouettes */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end">
                    <svg className="w-3/4 h-auto" viewBox="0 0 200 180" fill="none">
                      {/* Adult silhouette (left) */}
                      <g fill="#0a3d38" opacity="0.9">
                        {/* Head */}
                        <ellipse cx="70" cy="45" rx="18" ry="22" />
                        {/* Body */}
                        <path d="M45 67 L95 67 L100 180 L40 180 Z" />
                        {/* Arms hint */}
                        <ellipse cx="38" cy="100" rx="8" ry="28" />
                        <ellipse cx="102" cy="100" rx="8" ry="28" />
                      </g>

                      {/* Child silhouette (right) */}
                      <g fill="#0a3d38" opacity="0.9">
                        {/* Head */}
                        <ellipse cx="140" cy="70" rx="14" ry="17" />
                        {/* Body */}
                        <path d="M122 87 L158 87 L162 180 L118 180 Z" />
                        {/* Arms hint */}
                        <ellipse cx="115" cy="115" rx="6" ry="22" />
                        <ellipse cx="165" cy="115" rx="6" ry="22" />
                      </g>
                    </svg>
                  </div>

                  {/* Border frame */}
                  <div className="absolute inset-2 border border-white/20 rounded pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Right Column - Book Details */}
            <div className="text-center md:text-left">
              {/* Rating Badge */}
              <div className="inline-flex items-center gap-2 bg-[#F7C10B] text-[#232021] px-4 py-2 rounded-full mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <span className="font-bold">4,9 / 5</span>
              </div>
              <p className="text-[#232021]/60 text-sm mb-8 -mt-4 md:ml-2">
                basierend auf <span className="font-semibold text-[#232021]">1.000</span> Bewertungen
              </p>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#232021] mb-2 leading-tight">
                Zeit der{' '}
                <span className="relative inline-block">
                  Ungewissheit
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-[#F7C10B] -z-10"></span>
                </span>
              </h1>

              {/* Author */}
              <p className="text-xl text-[#232021]/80 mb-6">
                von <span className="font-semibold">Astrid Ross</span>
              </p>

              {/* Subtitle */}
              <p className="text-2xl md:text-3xl font-bold text-[#232021]/90 italic mb-10 leading-relaxed">
                „Verannis Kampf – Zwischen Liebe, Pflicht und Überleben"
              </p>

              {/* Book Details - Clean List */}
              <div className="space-y-3 mb-10">
                <div className="flex flex-col md:flex-row md:gap-4">
                  <span className="text-[#232021]/50 text-sm font-medium min-w-[100px]">ISBN/EAN:</span>
                  <span className="text-[#232021]">9783758326356</span>
                </div>
                <div className="flex flex-col md:flex-row md:gap-4">
                  <span className="text-[#232021]/50 text-sm font-medium min-w-[100px]">Verlag:</span>
                  <span className="text-[#232021]">BoD – Books on Demand</span>
                </div>
                <div className="flex flex-col md:flex-row md:gap-4">
                  <span className="text-[#232021]/50 text-sm font-medium min-w-[100px]">Auflage:</span>
                  <span className="text-[#232021]">1. Auflage, erschienen am 28.02.2024</span>
                </div>
                <div className="flex flex-col md:flex-row md:gap-4">
                  <span className="text-[#232021]/50 text-sm font-medium min-w-[100px]">Sprache:</span>
                  <span className="text-[#232021]">Deutsch</span>
                </div>
                <div className="flex flex-col md:flex-row md:gap-4">
                  <span className="text-[#232021]/50 text-sm font-medium min-w-[100px]">Umfang:</span>
                  <span className="text-[#232021]">274 Seiten</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start" id="jetzt-kaufen">
                <a
                  href="https://www.amazon.de/Zeit-Ungewissheit-Geschichte-Familie-Wareck/dp/3758326354"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F7C10B] text-[#232021] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#d4a50a] transition-all hover:shadow-lg inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Jetzt Kaufen
                </a>
                <a
                  href="#rezensionen"
                  className="border-2 border-[#232021] text-[#232021] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#232021] hover:text-white transition-all inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Rezensionen lesen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
