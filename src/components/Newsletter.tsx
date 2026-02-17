'use client';

import { useState } from 'react';
import { trackNewsletterSignup } from '@/lib/tracking';

// Email validation regex - checks for proper format
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email.trim());
}

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !isValidEmail(email)) {
      setErrorMessage('Bitte gib eine gültige E-Mail-Adresse ein.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // WICHTIG: Hier die echte Newsletter-API-URL eintragen
      // Beispiele: Mailerlite, ConvertKit, Mailchimp, etc.
      // const response = await fetch('/api/newsletter', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email }),
      // });

      // Simuliert erfolgreiche Anmeldung (für Demo)
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Tracking
      trackNewsletterSignup('footer_section');

      setStatus('success');
      setEmail('');
    } catch {
      setErrorMessage('Ein Fehler ist aufgetreten. Bitte versuche es später erneut.');
      setStatus('error');
    }
  };

  return (
    <section id="newsletter" className="py-16 md:py-20 bg-gradient-to-br from-[#0D4F4A] to-[#2A8C82] relative overflow-hidden">
      {/* Soft magical glow effect */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 50%, rgba(247, 193, 11, 0.2) 0%, transparent 60%),
            radial-gradient(ellipse 80% 40% at 20% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)
          `,
        }}
      />

      {/* Subtle sparkle dust */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: `
          radial-gradient(circle at 15% 25%, #F7C10B 1px, transparent 1px),
          radial-gradient(circle at 85% 15%, #F7C10B 0.8px, transparent 0.8px),
          radial-gradient(circle at 45% 85%, #F7C10B 1px, transparent 1px),
          radial-gradient(circle at 75% 65%, #F7C10B 0.6px, transparent 0.6px)
        `,
        backgroundSize: '300px 300px',
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
            <svg className="w-8 h-8 text-[#F7C10B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Exklusive Einblicke & Bonus-Kapitel
          </h2>

          {/* Subheadline */}
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Melde dich an und erhalte <span className="text-[#F7C10B] font-semibold">die ersten 3 Kapitel kostenlos</span> –
            plus exklusive Hintergrundgeschichten zur Familie Wareck.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <svg className="w-5 h-5 text-[#F7C10B]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Kapitel 1–3 als PDF
            </div>
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <svg className="w-5 h-5 text-[#F7C10B]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Exklusive Kurzgeschichten
            </div>
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <svg className="w-5 h-5 text-[#F7C10B]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Buch-2-Updates zuerst
            </div>
          </div>

          {/* Form */}
          {status === 'success' ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-3 text-[#F7C10B]">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg font-semibold">Perfekt!</span>
              </div>
              <p className="text-white mt-3">
                Prüfe dein Postfach – deine Leseprobe ist unterwegs!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Deine E-Mail-Adresse"
                  className="flex-1 px-5 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#F7C10B] focus:border-transparent transition-all"
                  disabled={status === 'loading'}
                  aria-label="E-Mail-Adresse"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-8 py-4 bg-[#F7C10B] text-[#232021] font-semibold rounded-xl hover:bg-[#d4a50a] transition-all hover:shadow-lg hover:shadow-[#F7C10B]/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[160px]"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Moment...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Leseprobe sichern
                    </>
                  )}
                </button>
              </div>

              {/* Error Message */}
              {status === 'error' && (
                <p className="text-red-300 text-sm mt-3 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errorMessage}
                </p>
              )}

              {/* Privacy Note */}
              <p className="text-white/50 text-xs mt-4">
                Kein Spam. Jederzeit abmeldbar. Deine Daten sind sicher.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
