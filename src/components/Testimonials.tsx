'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Marie S.',
    location: 'München, Deutschland',
    quote: '„Ein Buch, das nicht nur gelesen, sondern erlebt wird – Ross\' Worte sind Samen, die in dir weiterwachsen. Die Charaktere haben mich tagelang nicht losgelassen."',
    rating: 5,
    source: 'Amazon',
  },
  {
    name: 'Paul R.',
    location: 'Stuttgart, Deutschland',
    quote: '„Ross schreibt, als hätte sie die Seele einer Dichterin und den Blick einer Historikerin – einfach grandios. Die Familiengeschichte hat mich zu Tränen gerührt."',
    rating: 5,
    source: 'Amazon',
  },
  {
    name: 'Lena K.',
    location: 'Berlin, Deutschland',
    quote: '„Endlich ein Fantasy-Roman auf Deutsch, der mich so gefesselt hat wie Bridgerton! Veranni ist eine Heldin, die man sofort ins Herz schließt."',
    rating: 5,
    source: 'Goodreads',
  },
  {
    name: 'Thomas M.',
    location: 'Wien, Österreich',
    quote: '„Die perfekte Mischung aus historischem Tiefgang und emotionaler Spannung. Ich konnte das Buch nicht mehr aus der Hand legen."',
    rating: 5,
    source: 'Amazon',
  },
  {
    name: 'Julia H.',
    location: 'Hamburg, Deutschland',
    quote: '„Wer Familiensagas und Fantasy liebt, wird dieses Buch verschlingen. Die Wareck-Familie ist so lebendig geschrieben, als würde man sie persönlich kennen."',
    rating: 4,
    source: 'Lovelybooks',
  },
  {
    name: 'Anna W.',
    location: 'Zürich, Schweiz',
    quote: '„Ein beeindruckendes Debüt! Astrid Ross hat eine Welt erschaffen, in die man eintauchen und verweilen möchte. Ich hoffe auf eine Fortsetzung!"',
    rating: 5,
    source: 'Amazon',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Durchschnittliche Bewertung berechnen
  const averageRating = (
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
  ).toFixed(1);

  return (
    <section id="rezensionen" className="py-16 md:py-24 bg-[#232021] relative overflow-hidden">
      {/* Subtle decorative atmosphere */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          background: `
            radial-gradient(ellipse 50% 30% at 10% 20%, rgba(247, 193, 11, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse 40% 25% at 90% 80%, rgba(247, 193, 11, 0.15) 0%, transparent 50%)
          `,
        }}
      />

      {/* Elegant corner flourish */}
      <svg className="absolute top-8 right-8 w-24 h-24 opacity-[0.04] text-[#F7C10B]" viewBox="0 0 100 100" fill="none">
        <path d="M100 0 Q70 30 80 60 Q90 90 60 80 Q30 70 50 40" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <circle cx="80" cy="60" r="3" fill="currentColor"/>
      </svg>
      <svg className="absolute bottom-8 left-8 w-24 h-24 opacity-[0.04] text-[#F7C10B] rotate-180" viewBox="0 0 100 100" fill="none">
        <path d="M100 0 Q70 30 80 60 Q90 90 60 80 Q30 70 50 40" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <circle cx="80" cy="60" r="3" fill="currentColor"/>
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-[#F7C10B] text-sm uppercase tracking-wider font-medium mb-4">
              Leserstimmen
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Was unsere Leser sagen
            </h2>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#F7C10B] fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <span className="text-white font-bold">{averageRating} / 5</span>
              <span className="text-white/60">basierend auf {testimonials.length} Rezensionen</span>
            </div>
            <p className="text-white/50 text-sm mt-2">
              Verifizierte Rezensionen von Amazon, Goodreads & Lovelybooks
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-[#373737] rounded-xl p-6 transition-all duration-500 ${
                  index === currentIndex ? 'ring-2 ring-[#F7C10B] scale-105' : ''
                }`}
              >
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 fill-current ${
                        i < testimonial.rating ? 'text-[#F7C10B]' : 'text-white/20'
                      }`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/90 mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>

                {/* Author & Source */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#F7C10B] rounded-full flex items-center justify-center text-[#232021] font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-white/60 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                  <span className="text-white/40 text-xs uppercase tracking-wider">
                    {testimonial.source}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#F7C10B] w-6' : 'bg-white/30'
                }`}
                aria-label={`Gehe zu Rezension ${index + 1}`}
              />
            ))}
          </div>

          {/* CTA to leave review */}
          <div className="text-center mt-10">
            <a
              href="https://www.amazon.de/Zeit-Ungewissheit-Geschichte-Familie-Wareck/dp/3758326354#customerReviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#F7C10B] hover:text-[#d4a50a] transition-colors text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Eigene Rezension schreiben
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
