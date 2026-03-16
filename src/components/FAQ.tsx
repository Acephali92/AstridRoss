'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Worum geht es im Buch von Astrid Ross?',
    answer: 'Das Buch erzählt die Geschichte der Familie Wareck in einer Zeit der Ungewissheit. Es verbindet Elemente von Fantasy, Familiendrama und historischer Fiktion zu einem emotionalen und spannenden Leseerlebnis.',
  },
  {
    question: 'Für wen ist dieses Buch ideal?',
    answer: 'Das Buch ist ideal für Leser, die emotionale Familiengeschichten, Fantasy-Elemente und gut recherchierte historische Details schätzen. Es spricht besonders Fans von Familienepos und romantischer Fantasy an.',
  },
  {
    question: 'Bietet das Buch Beispiele oder Fallstudien aus der Praxis?',
    answer: 'Als fiktionales Werk enthält das Buch keine Fallstudien im klassischen Sinne, jedoch sind die Charaktere und ihre Herausforderungen so lebensnah gestaltet, dass Leser sich leicht mit ihnen identifizieren können.',
  },
  {
    question: 'Ist das Buch in digitalen Formaten verfügbar?',
    answer: 'Ja, das Buch ist sowohl als Taschenbuch als auch in verschiedenen digitalen Formaten erhältlich. Sie können es bei Amazon, eBay und anderen Online-Buchhandlungen erwerben.',
  },
  {
    question: 'Wo kann ich das Buch kaufen?',
    answer: 'Das Buch ist bei verschiedenen Händlern erhältlich, darunter Amazon, eBay, Ernster, Medimops, Seko und dem Bundesamt Magische Wesen. Scrollen Sie nach oben, um die direkten Links zu allen Shops zu finden.',
  },
  {
    question: 'Kann ich ein signiertes Exemplar des Buches bekommen?',
    answer: 'Für signierte Exemplare können Sie direkt mit der Autorin über das Kontaktformular in Verbindung treten. Astrid Ross freut sich über jeden persönlichen Kontakt mit ihren Lesern.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-[#F8F4ED]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#232021] mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-[#232021]/70">
              Hier finden Sie Antworten auf die am häufigsten gestellten Fragen zu Astrid Ross und ihrem Roman „Zeit der Ungewissheit“.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[#232021] pr-4">{faq.question}</span>
                  <div
                    className={`w-8 h-8 bg-[#F7C10B] rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-45' : ''
                    }`}
                  >
                    <svg className="w-4 h-4 text-[#232021]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-[#232021]/80 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
