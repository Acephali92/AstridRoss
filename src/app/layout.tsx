import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zeit der Ungewissheit – Fantasy Roman über Liebe, Pflicht & Überleben | Astrid Ross",
  description: "Entdecken Sie 'Zeit der Ungewissheit' von Astrid Ross – ein mitreißender Fantasy-Roman über Familie, Widerstandskraft und unerwartete Liebe. Die Geschichte der Familie Wareck.",
  keywords: ["Astrid Ross", "Zeit der Ungewissheit", "Fantasy Roman", "Familienepos", "Deutsche Literatur", "Familie Wareck"],
  authors: [{ name: "Astrid Ross" }],
  openGraph: {
    title: "Zeit der Ungewissheit – Fantasy Roman | Astrid Ross",
    description: "Ein mitreißender Roman über Familie, Widerstandskraft und unerwartete Liebe. Verannis Kampf – Zwischen Liebe, Pflicht und Überleben.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
