'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ConcreteBatchingPlants() {
  const { t } = useLanguage();

  // Concrete Batching Plants specific products - using fixed seed values to prevent hydration mismatch
  const concreteBatchingProducts = [
    {
      slug: 'stationary-concrete-plants',
      key: 'stationary',
      image: 'https://picsum.photos/seed/stationary/600/400'
    },
    {
      slug: 'mobile-concrete-plants',
      key: 'mobile',
      image: 'https://picsum.photos/seed/mobile/600/400'
    },
    {
      slug: 'compact-concrete-plants',
      key: 'compact',
      image: 'https://picsum.photos/seed/compact/600/400'
    },
    {
      slug: 'dry-type-concrete-plants',
      key: 'dryType',
      image: 'https://picsum.photos/seed/drytype/600/400'
    },
    {
      slug: 'cement-silos',
      key: 'cementSilos',
      image: 'https://picsum.photos/seed/cement/600/400'
    },
    {
      slug: 'concrete-mixers',
      key: 'mixers',
      image: 'https://picsum.photos/seed/mixers/600/400'
    },
  ];

  // All product categories
  const productCategories = [
    {
      id: 'beton',
      title: t.productsPage.concrete.title,
      icon: '🏗️',
      products: [
        t.productsPage.concrete.stationary,
        t.productsPage.concrete.mobile,
        t.productsPage.concrete.compact,
        t.productsPage.concrete.dry,
      ],
    },
    {
      id: 'asfalt',
      title: t.productsPage.asphalt.title,
      icon: '🛣️',
      products: [
        t.productsPage.asphalt.stationary,
        t.productsPage.asphalt.mobile,
        t.productsPage.asphalt.bitumen,
        t.productsPage.asphalt.recycling,
      ],
    },
    {
      id: 'kirma',
      title: t.productsPage.crushing.title,
      icon: '⚙️',
      products: [
        t.productsPage.crushing.jaw,
        t.productsPage.crushing.impact,
        t.productsPage.crushing.cone,
        t.productsPage.crushing.screening,
      ],
    },
    {
      id: 'yikama',
      title: t.productsPage.washing.title,
      icon: '💧',
      products: [
        t.productsPage.washing.sand,
        t.productsPage.washing.aggregate,
        t.productsPage.washing.water,
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t.productsPage.concreteBatching.title}
          </h1>
          <p className="text-xl text-blue-100">
            {t.productsPage.concreteBatching.subtitle}
          </p>
        </div>
      </section>

      {/* Concrete Batching Plants Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {concreteBatchingProducts.map((product) => {
              const concreteBatchingAny = t.productsPage.concreteBatching as any;
              const productData = concreteBatchingAny[product.key] as {
                name: string;
                description: string;
              } | undefined;
              
              if (!productData) return null;
              
              return (
                <Link
                  key={product.slug}
                  href={`/urunler/beton/${product.slug}`}
                  className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-64 bg-gray-200 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={productData.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      unoptimized
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {productData.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {productData.description}
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
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t.productsPage.cta.title}
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            {t.productsPage.cta.description}
          </p>
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
