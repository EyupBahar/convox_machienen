'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CementSilos() {
  const { t } = useLanguage();
  const productsPageAny = t.productsPage as any;
  const cementSilos = productsPageAny.cementSilos as any;

  const products = [
    {
      slug: 'horizontal-cement-silo',
      name: cementSilos.horizontal.name,
      description: cementSilos.horizontal.description,
      image: 'https://picsum.photos/seed/horizontal-silo/600/400'
    },
    {
      slug: 'cs-50-cement-silo',
      name: cementSilos.cs50.name,
      description: cementSilos.cs50.description,
      image: 'https://picsum.photos/seed/cs-50/600/400'
    },
    {
      slug: 'cs-75-cement-silo',
      name: cementSilos.cs75.name,
      description: cementSilos.cs75.description,
      image: 'https://picsum.photos/seed/cs-75/600/400'
    },
    {
      slug: 'cs-100-cement-silo',
      name: cementSilos.cs100.name,
      description: cementSilos.cs100.description,
      image: 'https://picsum.photos/seed/cs-100/600/400'
    },
    {
      slug: 'cs-200-bolted-cement-silo',
      name: cementSilos.cs200.name,
      description: cementSilos.cs200.description,
      image: 'https://picsum.photos/seed/cs-200/600/400'
    },
    {
      slug: 'cs-300-bolted-cement-silo',
      name: cementSilos.cs300.name,
      description: cementSilos.cs300.description,
      image: 'https://picsum.photos/seed/cs-300/600/400'
    },
    {
      slug: 'cs-500-bolted-cement-silo',
      name: cementSilos.cs500.name,
      description: cementSilos.cs500.description,
      image: 'https://picsum.photos/seed/cs-500/600/400'
    },
    {
      slug: 'cs-1000-bolted-cement-silo',
      name: cementSilos.cs1000.name,
      description: cementSilos.cs1000.description,
      image: 'https://picsum.photos/seed/cs-1000/600/400'
    },
    {
      slug: 'cs-2000-bolted-cement-silo',
      name: cementSilos.cs2000.name,
      description: cementSilos.cs2000.description,
      image: 'https://picsum.photos/seed/cs-2000/600/400'
    },
    {
      slug: 'cs-3000-bolted-cement-silo',
      name: cementSilos.cs3000.name,
      description: cementSilos.cs3000.description,
      image: 'https://picsum.photos/seed/cs-3000/600/400'
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t.productsDropdown.cementSilos}
          </h1>
          <p className="text-xl text-blue-100">
            {cementSilos.subtitle}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Link
                key={index}
                href={`/urunler/cement-silos/${product.slug}`}
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
