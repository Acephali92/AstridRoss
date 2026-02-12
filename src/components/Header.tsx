'use client';

import { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'Über das Buch', href: '#ueber-das-buch', icon: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  )},
  { label: 'Was du lernen wirst', href: '#lernen', icon: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  )},
  { label: 'Kapitel', href: '#kapitel', icon: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
    </svg>
  )},
  { label: 'Testimonials', href: '#rezensionen', icon: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  )},
  { label: 'Autorin', href: '#autorin', icon: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  )},
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {/* Flower Icon */}
            <div className="w-10 h-10 flex items-center justify-center">
              <svg className="w-8 h-8 text-[#0D4F4A]" viewBox="0 0 40 40" fill="currentColor">
                {/* Flower petals */}
                <ellipse cx="20" cy="12" rx="6" ry="10" fill="#0D4F4A" opacity="0.8"/>
                <ellipse cx="12" cy="20" rx="10" ry="6" fill="#0D4F4A" opacity="0.8"/>
                <ellipse cx="28" cy="20" rx="10" ry="6" fill="#0D4F4A" opacity="0.8"/>
                <ellipse cx="20" cy="28" rx="6" ry="10" fill="#0D4F4A" opacity="0.8"/>
                {/* Center */}
                <circle cx="20" cy="20" r="5" fill="#F7C10B"/>
              </svg>
            </div>
            <span className="text-xl font-semibold text-[#232021]">Astrid Ross</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-1.5 text-sm text-[#232021]/70 hover:text-[#0D4F4A] transition-colors"
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#jetzt-kaufen"
              className="bg-[#232021] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#373737] transition-colors"
            >
              Jetzt Entdecken
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#232021]"
            aria-label="Menü öffnen"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 text-[#232021]/70 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
              <Link
                href="#jetzt-kaufen"
                onClick={() => setMobileMenuOpen(false)}
                className="mx-4 mt-2 bg-[#232021] text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-[#373737] transition-colors"
              >
                Jetzt Entdecken
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
