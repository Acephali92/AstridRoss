'use client';

const tags = [
  { label: 'Emotional', icon: '❤️' },
  { label: 'Spannend', icon: '⚡' },
  { label: 'Familienepos', icon: '👨‍👩‍👧‍👦' },
  { label: 'Fantasy', icon: '✨' },
];

export default function ForWhom() {
  return (
    <section id="lernen" className="py-16 md:py-24 bg-[#F8F4ED]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#232021] mb-6">
            Für wen ist es
          </h2>

          <p className="text-lg md:text-xl text-[#232021]/80 mb-10 max-w-2xl mx-auto">
            Für alle, die glauben, dass große Literatur Leidenschaft, Intelligenz und Mut braucht
            – hier ist ihr nächstes Lieblingsbuch.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#F7C10B] text-[#232021] px-6 py-3 rounded-full font-semibold text-lg flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow cursor-default"
              >
                <span>{tag.icon}</span>
                {tag.label}
              </span>
            ))}
          </div>

          {/* Description */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-[#232021] mb-6">
              Ein mitreißender Roman über Familie, Widerstandskraft und unerwartete Liebe
            </h3>
            <p className="text-[#232021]/80 text-lg leading-relaxed">
              Tauchen Sie ein in eine Welt voller Intrigen, emotionaler Konflikte und packender
              Überlebensgeschichten. Verannis unbeugsamer Wille und Nesettas Kampf gegen die
              Dunkelheit zeigen: In der Stunde der Krise entscheidet sich, wer man wirklich ist.
            </p>
          </div>

          {/* Teaser */}
          <div className="mt-12 text-center">
            <p className="text-xl md:text-2xl text-[#232021]/70">
              Führt dich in die{' '}
              <span className="text-[#0D4F4A] font-semibold">verborgenen Geheimnisse</span>
              {' '}von ...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
