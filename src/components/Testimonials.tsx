'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Sophie M.',
    location: 'Berlin, Deutschland',
    quote: '„Zeit der Ungewissheit“ hat mich von der ersten Seite an gefesselt. Die Charaktere sind so lebendig und die Geschichte so emotional – ich konnte es nicht aus der Hand legen!',
    rating: 5,
  },
  {
    name: 'Paul R.',
    location: 'Stuttgart, Deutschland',
    quote: '„Ross schreibt, als hätte sie die Seele einer Dichterin und den Blick einer Historikerin – einfach grandios."',
    rating: 5,
  },
  {
    name: 'Finn B.',
    location: 'Hamburg, Deutschland',
    quote: 'Ein fantastisches Familienepos mit genau der richtigen Mischung aus Spannung und Gefühl. Astrid Ross ist eine Entdeckung für alle Fantasy-Fans.',
    rating: 5,
  },
  {
    name: 'Marie Schmitt',
    location: 'München, Deutschland',
    quote: '„Ein Buch, das nicht nur gelesen, sondern erlebt wird – Ross\' Worte sind Samen, die in Ihnen weiterwachsen."',
    rating: 5,
  },
  {
    name: 'Elena L.',
    location: 'Köln, Deutschland',
    quote: 'Ich liebe die botanischen Details und wie sie mit der Handlung verwoben sind. Man merkt, wie viel Herzblut und Recherche in diesem Buch stecken.',
    rating: 5,
  },
  {
    name: 'Jan W.',
    location: 'Frankfurt, Deutschland',
    quote: 'Eine packende Geschichte über Mut und Zusammenhalt. Verannis Weg hat mich tief berührt. Ich freue mich schon auf weitere Werke der Autorin!',
    rating: 5,
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

  return (
    <section id="rezensionen" className="py-16 md:py-24 bg-[#232021]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-[#F7C10B] text-sm uppercase tracking-wider font-medium mb-4">
              Kundenstimmen
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Was unsere Leser sagen
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#F7C10B] fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <span className="text-white font-bold">4,9 / 5</span>
              <span className="text-white/60">basierend auf 1.000 Bewertungen</span>
            </div>
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
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#F7C10B] fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/90 mb-6 leading-relaxed italic">
                  {testimonial.quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F7C10B] rounded-full flex items-center justify-center text-[#232021] font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-white/60 text-sm">{testimonial.location}</p>
                  </div>
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
        </div>
      </div>
    </section>
  );
}
