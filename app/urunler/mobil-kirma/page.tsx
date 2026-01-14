'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function MobileCrushingPlants() {
  const { t } = useLanguage();
  const productsPageAny = t.productsPage as any;
  const mobileCrushing = productsPageAny.mobileCrushing as any;

  const products = [
    {
      slug: 'mobile-hard-stone-crushers',
      name: mobileCrushing.hardStone.name,
      description: mobileCrushing.hardStone.description,
      image: 'https://picsum.photos/seed/mobile-hard-stone/600/400'
    },
    {
      slug: 'mobile-jaw-impact-crushers',
      name: mobileCrushing.jawImpact.name,
      description: mobileCrushing.jawImpact.description,
      image: 'https://picsum.photos/seed/mobile-jaw-impact/600/400'
    },
    {
      slug: 'mobile-sand-making-plants',
      name: mobileCrushing.sandMaking.name,
      description: mobileCrushing.sandMaking.description,
      image: 'https://picsum.photos/seed/mobile-sand-making/600/400'
    },
    {
      slug: 'mobile-limestone-crushers',
      name: mobileCrushing.limestone.name,
      description: mobileCrushing.limestone.description,
      image: 'https://picsum.photos/seed/mobile-limestone/600/400'
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t.productsDropdown.mobileCrushing}
          </h1>
          <p className="text-xl text-blue-100">
            {mobileCrushing.subtitle}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Link
                key={index}
                href={`/urunler/mobil-kirma/${product.slug}`}
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {product.description}
                  </p>
                  <div className="text-blue-600 font-medium flex items-center group-hover:translate-x-2 transition-transform">
                    {t.productsPage.productDetail.viewDetails}
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.productsPage.cta.title}</h2>
          <p className="text-xl mb-8 text-blue-100">{t.productsPage.cta.description}</p>
          <Link
            href="/iletisim"
            className="inline-block bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
          >
            {t.productsPage.cta.button}
          </Link>
        </div>
      </section>
    </div>
  );
}
