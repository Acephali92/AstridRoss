'use client';

import { useState } from 'react';

const chapters = [
  {
    number: 1,
    title: 'Eine Familie am Abgrund',
    description: 'Als Renald Wareck schwer verletzt aus dem Ausland zurückkehrt, droht seinen Töchtern Veranni und Dorika der gesellschaftliche und finanzielle Absturz. Ohne Versorger und mit einem unerwarteten Erbvetter vor der Tür scheint das Schicksal gegen sie zu spielen. Doch damit nicht genug: Ihre Cousine Nesetta ist auf derselben Reise verschollen – und die Zeit läuft davon.',
    highlights: [
      'Eine langfristige Karrierevision schaffen',
      'Verstehe deine Stärken und Schwächen',
      'Erreichbare Karriereziele setzen',
    ],
  },
  {
    number: 2,
    title: 'Verannis Kampfgeist: Kein Raum für Niederlagen',
    description: 'Veranni Wareck, entschlossen und mutig, weigert sich, das Schicksal hinzunehmen. Während ihr Vater ums Überleben kämpft, setzt sie alles daran, ihre Schwester Dorika standesgemäß zu verheiraten, um die Familie zu retten. Doch ihre Pläne reichen weiter: Um Nesetta zu finden, reist sie in die Hauptstadt – und trifft dort auf zwei Männer, die ihr Leben durcheinanderwirbeln.',
    highlights: [
      'Die Kraft des professionellen Networkings',
      'Effektiver Beziehungsaufbau',
      'Nutzung von Mentoring und Partnerschaften',
    ],
  },
  {
    number: 3,
    title: 'Nesettas Überlebenskampf: Fremd, verletzt und allein',
    description: 'Während Veranni in der Hauptstadt kämpft, ringt ihre Cousine Nesetta in der Fremde um ihr Leben. Verletzt und ohne Verbündete, findet sie unerwartet Hilfe bei einem gescheiterten Attentäter, der selbst nach Sinn und Halt sucht. Ihr Weg ist geprägt von Gefahr, Vertrauensbrüchen – und der Frage, ob sie je nach Hause zurückkehren kann.',
    highlights: [
      'Strategien für eine effektive Jobsuche',
      'Verhandlung von Stellenangeboten',
      'Kontinuierliches Lernen und Verbesserung der Fähigkeiten',
    ],
  },
];

export default function ChapterOverview() {
  const [activeChapter, setActiveChapter] = useState(0);

  return (
    <section id="kapitel" className="py-16 md:py-24 bg-[#F8F4ED]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#232021] mb-4">
              Was steht im Buch?
            </h2>
            <p className="text-[#232021]/70 max-w-2xl mx-auto">
              Videos können mit Einstellungen wie „16:9&rdquo;, „4:3&rdquo; und „9:16&rdquo; Seitenverhältnissen
              angepasst werden. Stelle sicher, dass diese Einstellungen mit der Art der Videos
              übereinstimmen, die du über das URL-Feld einfügst, um ein perfektes Layout zu erzielen.
            </p>
          </div>

          {/* Video placeholder */}
          <div className="mb-12">
            <div className="aspect-video bg-[#232021] rounded-2xl overflow-hidden relative group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-[#F7C10B] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-[#232021] ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
                <p className="text-white text-lg">Buchtrailer ansehen</p>
              </div>
            </div>
          </div>

          {/* Chapters */}
          <div className="space-y-6">
            {chapters.map((chapter, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                  activeChapter === index ? 'shadow-xl' : 'shadow-md'
                }`}
              >
                <button
                  onClick={() => setActiveChapter(activeChapter === index ? -1 : index)}
                  className="w-full p-6 flex items-center gap-4 text-left"
                >
                  <div className="w-12 h-12 bg-[#F7C10B] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#232021] font-bold text-lg">{chapter.number}</span>
                  </div>
                  <div className="flex-grow">
                    <p className="text-[#232021]/60 text-sm">Kapitel {chapter.number}</p>
                    <h3 className="text-xl font-bold text-[#232021]">{chapter.title}</h3>
                  </div>
                  <svg
                    className={`w-6 h-6 text-[#232021]/60 transition-transform ${
                      activeChapter === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {activeChapter === index && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <p className="text-[#232021]/80 mt-4 mb-6 leading-relaxed">
                      {chapter.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {chapter.highlights.map((highlight, hIndex) => (
                        <span
                          key={hIndex}
                          className="bg-[#0D4F4A]/10 text-[#0D4F4A] px-4 py-2 rounded-full text-sm font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-xl text-[#232021] mb-6">
              Jetzt bestellen und eintauchen in eine Welt voller Spannung, Romantik und
              unvergesslicher Charaktere!
            </p>
            <p className="text-[#232021]/70 mb-8">
              Erlebe die spannende Welt von ... durch die dramatische Familiengeschichte der Familie Wareck
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.amazon.de/Zeit-Ungewissheit-Geschichte-Familie-Wareck/dp/3758326354"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Jetzt Kaufen
              </a>
              <a href="#rezensionen" className="btn-secondary !text-[#232021] !border-[#232021] hover:!bg-[#232021] hover:!text-white">
                Rezensionen lesen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
