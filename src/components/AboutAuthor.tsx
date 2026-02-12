'use client';

export default function AboutAuthor() {
  return (
    <section className="py-16 md:py-24 bg-[#0D4F4A]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute -inset-4 bg-[#F7C10B]/20 rounded-3xl transform rotate-3" />

                {/* Author image placeholder */}
                <div className="relative aspect-[3/4] bg-gradient-to-br from-[#1a6b63] to-[#0D4F4A] rounded-2xl overflow-hidden border-4 border-white/20">
                  {/* Silhouette placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-48 h-48 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                    </svg>
                  </div>

                  {/* Overlay gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0D4F4A] to-transparent" />
                </div>

                {/* Decorative dots */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-30">
                  <svg viewBox="0 0 100 100" fill="none">
                    {[...Array(5)].map((_, row) =>
                      [...Array(5)].map((_, col) => (
                        <circle
                          key={`${row}-${col}`}
                          cx={10 + col * 20}
                          cy={10 + row * 20}
                          r="4"
                          fill="#F7C10B"
                        />
                      ))
                    )}
                  </svg>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2 text-white">
              <p className="text-[#F7C10B] text-sm uppercase tracking-wider font-medium mb-2">
                Buchautorin
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Astrid Ross
              </h2>

              <div className="space-y-6 text-white/90 leading-relaxed">
                <p>
                  1993 in Kiel geboren und in Bielefeld aufgewachsen, verbindet in ihrem Leben und
                  Schreiben die Liebe zur Geschichte, die Faszination für die Natur und eine tiefe
                  Leidenschaft für Geschichten. Seit 2009 lebt sie in der Schweiz, wo sie nach dem
                  Abitur zunächst sechs Semester Geschichte studierte – ein Fach, das bis heute ihr
                  Hobby prägt: Das Sammeln historischer Fakten und Anekdoten begleitet sie ebenso
                  wie das Lesen und Schreiben.
                </p>
                <p>
                  Heute vereint Astrid Ross ihre vielfältigen Interessen in ihren Büchern: eine
                  Melange aus historischer Recherche, botanischem Wissen und der Freude am Erschaffen
                  fesselnder Welten. Mit einem Blick für Details und einem Gespür für emotionale Tiefe
                  schreibt sie Geschichten, die Leser sowohl in vergangene Zeiten als auch in grüne,
                  lebendige Landschaften entführen – immer mit einem Hauch von Magie.
                </p>
              </div>

              {/* Social Links */}
              <div className="mt-8 flex gap-4">
                <a
                  href="#"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Kontakt aufnehmen
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
