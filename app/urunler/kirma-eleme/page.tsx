'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CrushingScreeningPlants() {
  const { t } = useLanguage();

  const products = [
    {
      slug: 'stationary-crushing-plants',
      name: t.productsPage.crushingScreening.stationary.name,
      description: t.productsPage.crushingScreening.stationary.description,
      image: 'https://picsum.photos/seed/stationary-crushing/600/400'
    },
    {
      slug: 'jaw-crushers',
      name: t.productsPage.crushingScreening.jaw.name,
      description: t.productsPage.crushingScreening.jaw.description,
      image: 'https://picsum.photos/seed/jaw-crusher/600/400'
    },
    {
      slug: 'primary-impact-crushers',
      name: t.productsPage.crushingScreening.primaryImpact.name,
      description: t.productsPage.crushingScreening.primaryImpact.description,
      image: 'https://picsum.photos/seed/primary-impact/600/400'
    },
    {
      slug: 'secondary-impact-crushers',
      name: t.productsPage.crushingScreening.secondaryImpact.name,
      description: t.productsPage.crushingScreening.secondaryImpact.description,
      image: 'https://picsum.photos/seed/secondary-impact/600/400'
    },
    {
      slug: 'tertiary-impact-crushers',
      name: t.productsPage.crushingScreening.tertiaryImpact.name,
      description: t.productsPage.crushingScreening.tertiaryImpact.description,
      image: 'https://picsum.photos/seed/tertiary-impact/600/400'
    },
    {
      slug: 'vertical-shaft-impact-crushers',
      name: t.productsPage.crushingScreening.verticalShaft.name,
      description: t.productsPage.crushingScreening.verticalShaft.description,
      image: 'https://picsum.photos/seed/vertical-shaft/600/400'
    },
    {
      slug: 'cone-crushers',
      name: t.productsPage.crushingScreening.cone.name,
      description: t.productsPage.crushingScreening.cone.description,
      image: 'https://picsum.photos/seed/cone-crusher/600/400'
    },
    {
      slug: 'wobbler-feeders',
      name: t.productsPage.crushingScreening.wobblerFeeder.name,
      description: t.productsPage.crushingScreening.wobblerFeeder.description,
      image: 'https://picsum.photos/seed/wobbler-feeder/600/400'
    },
    {
      slug: 'vibrating-feeders',
      name: t.productsPage.crushingScreening.vibratingFeeder.name,
      description: t.productsPage.crushingScreening.vibratingFeeder.description,
      image: 'https://picsum.photos/seed/vibrating-feeder/600/400'
    },
    {
      slug: 'vibrating-screens',
      name: t.productsPage.crushingScreening.vibratingScreen.name,
      description: t.productsPage.crushingScreening.vibratingScreen.description,
      image: 'https://picsum.photos/seed/vibrating-screen/600/400'
    },
    {
      slug: 'belt-conveyors',
      name: t.productsPage.crushingScreening.beltConveyor.name,
      description: t.productsPage.crushingScreening.beltConveyor.description,
      image: 'https://picsum.photos/seed/belt-conveyor/600/400'
    },
    {
      slug: 'hydraulic-hammer-breaker',
      name: t.productsPage.crushingScreening.hydraulicHammer.name,
      description: t.productsPage.crushingScreening.hydraulicHammer.description,
      image: 'https://picsum.photos/seed/hydraulic-hammer/600/400'
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t.productsDropdown.crushingScreening}
          </h1>
          <p className="text-xl text-blue-100">
            {t.productsPage.crushingScreening.subtitle}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Link
                key={index}
                href={`/urunler/kirma-eleme/${product.slug}`}
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
