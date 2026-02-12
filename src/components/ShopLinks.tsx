'use client';

const shops = [
  {
    name: 'Amazon',
    url: 'https://www.amazon.de/Zeit-Ungewissheit-Geschichte-Familie-Wareck/dp/3758326354',
    logo: (
      <svg className="w-24 h-8" viewBox="0 0 120 40" fill="currentColor">
        <text x="10" y="28" fontSize="20" fontWeight="bold">amazon</text>
      </svg>
    ),
  },
  {
    name: 'eBay',
    url: 'https://www.ebay.de/itm/226489936286',
    logo: (
      <svg className="w-16 h-8" viewBox="0 0 80 40" fill="currentColor">
        <text x="5" y="28" fontSize="20" fontWeight="bold">eBay</text>
      </svg>
    ),
  },
  {
    name: 'Ernster',
    url: 'https://www.ernster.com/de/detail/ISBN-9783758326356/Ross-Astrid/Zeit-der-Ungewissheit',
    logo: (
      <svg className="w-20 h-8" viewBox="0 0 100 40" fill="currentColor">
        <text x="5" y="28" fontSize="18" fontWeight="bold">Ernster</text>
      </svg>
    ),
  },
  {
    name: 'Medimops',
    url: 'https://www.medimops.de/astrid-ross-zeit-der-ungewissheit-die-geschichte-der-familie-wareck-taschenbuch-M03758326354.html',
    logo: (
      <svg className="w-24 h-8" viewBox="0 0 120 40" fill="currentColor">
        <text x="5" y="28" fontSize="16" fontWeight="bold">medimops</text>
      </svg>
    ),
  },
  {
    name: 'Seko',
    url: 'https://www.seko-online.de/shop/item/9783756285372',
    logo: (
      <svg className="w-16 h-8" viewBox="0 0 80 40" fill="currentColor">
        <text x="5" y="28" fontSize="18" fontWeight="bold">SEKO</text>
      </svg>
    ),
  },
  {
    name: 'Bundesamt Magische Wesen',
    url: 'https://bundesamt-magische-wesen.de/shop/zeit-der-ungewissheit-die-geschichte-der-familie-wareck-von-astrid-ross/',
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="currentColor">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" fill="none"/>
        <text x="12" y="26" fontSize="16" fontWeight="bold">B</text>
      </svg>
    ),
  },
];

export default function ShopLinks() {
  return (
    <section className="py-12 bg-[#F8F4ED]">
      <div className="container mx-auto px-4">
        <p className="text-center text-[#232021]/60 mb-8 text-sm uppercase tracking-wider font-medium">
          Erhältlich bei
        </p>

        {/* Scrolling logos container */}
        <div className="relative overflow-hidden">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#F8F4ED] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#F8F4ED] to-transparent z-10" />

          {/* Scrolling track */}
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {shops.map((shop, index) => (
              <a
                key={`first-${index}`}
                href={shop.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 mx-8 opacity-60 hover:opacity-100 transition-opacity duration-300 text-[#232021]"
                title={shop.name}
              >
                {shop.logo}
              </a>
            ))}
            {/* Duplicate set for seamless loop */}
            {shops.map((shop, index) => (
              <a
                key={`second-${index}`}
                href={shop.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 mx-8 opacity-60 hover:opacity-100 transition-opacity duration-300 text-[#232021]"
                title={shop.name}
              >
                {shop.logo}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
