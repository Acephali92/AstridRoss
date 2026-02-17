import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Basis-URL für absolute URLs (für Produktion anpassen)
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://astridross.de";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Zeit der Ungewissheit – Fantasy Roman über Liebe, Pflicht & Überleben | Astrid Ross",
  description: "Entdecken Sie 'Zeit der Ungewissheit' von Astrid Ross – ein mitreißender Fantasy-Roman über Familie, Widerstandskraft und unerwartete Liebe. Für Fans von Bridgerton & historischer Fantasy. Die Geschichte der Familie Wareck.",
  keywords: ["Astrid Ross", "Zeit der Ungewissheit", "Fantasy Roman", "Familienepos", "Deutsche Literatur", "Familie Wareck", "Bridgerton", "Historische Fantasy", "Deutsche Autorin", "Romantasy"],
  authors: [{ name: "Astrid Ross", url: siteUrl }],
  creator: "Astrid Ross",
  publisher: "BoD – Books on Demand",

  // Open Graph
  openGraph: {
    title: "Zeit der Ungewissheit – Fantasy Roman | Astrid Ross",
    description: "Ein mitreißender Roman über Familie, Widerstandskraft und unerwartete Liebe. Verannis Kampf – Zwischen Liebe, Pflicht und Überleben. Für Fans von Bridgerton & historischer Fantasy.",
    type: "book",
    locale: "de_DE",
    url: siteUrl,
    siteName: "Astrid Ross - Autorin",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zeit der Ungewissheit - Fantasy Roman von Astrid Ross",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Zeit der Ungewissheit – Fantasy Roman | Astrid Ross",
    description: "Ein mitreißender Roman über Familie, Widerstandskraft und unerwartete Liebe. Für Fans von Bridgerton & historischer Fantasy.",
    images: ["/images/og-image.jpg"],
    creator: "@astridross",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification (IDs hier eintragen wenn verfügbar)
  // verification: {
  //   google: "google-site-verification-code",
  // },

  // Alternates für Canonical URL
  alternates: {
    canonical: siteUrl,
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Book",
      "@id": `${siteUrl}/#book`,
      name: "Zeit der Ungewissheit",
      alternateName: "Die Geschichte der Familie Wareck",
      author: {
        "@type": "Person",
        "@id": `${siteUrl}/#author`,
        name: "Astrid Ross",
        url: siteUrl,
      },
      bookFormat: "https://schema.org/Paperback",
      isbn: "9783758326356",
      numberOfPages: 274,
      inLanguage: "de",
      publisher: {
        "@type": "Organization",
        name: "BoD – Books on Demand",
      },
      datePublished: "2024-02-28",
      image: `${siteUrl}/images/book-cover-1.svg`,
      description: "Ein mitreißender Fantasy-Roman über Familie, Widerstandskraft und unerwartete Liebe. Die Geschichte der Familie Wareck.",
      genre: ["Fantasy", "Familienroman", "Historische Romantik"],
      audience: {
        "@type": "Audience",
        audienceType: "Leser von Fantasy und historischer Romantik",
      },
      offers: {
        "@type": "Offer",
        price: "16.99",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: "https://www.amazon.de/Zeit-Ungewissheit-Geschichte-Familie-Wareck/dp/3758326354",
        seller: {
          "@type": "Organization",
          name: "Amazon",
        },
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "12",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#author`,
      name: "Astrid Ross",
      url: siteUrl,
      description: "Autorin von emotionalen Familienepen und Fantasy-Romanen mit historischem Tiefgang.",
      jobTitle: "Autorin",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Astrid Ross - Autorin",
      description: "Offizielle Website der Autorin Astrid Ross",
      publisher: {
        "@id": `${siteUrl}/#author`,
      },
      inLanguage: "de-DE",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Zeit der Ungewissheit – Fantasy Roman | Astrid Ross",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#book`,
      },
      description: "Entdecken Sie 'Zeit der Ungewissheit' von Astrid Ross – ein mitreißender Fantasy-Roman über Familie, Widerstandskraft und unerwartete Liebe.",
      inLanguage: "de-DE",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
