'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Urunler() {
  const { t } = useLanguage();

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.productsPage.title}</h1>
          <p className="text-xl text-blue-100">
            {t.productsPage.subtitle}
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {productCategories.map((category, categoryIndex) => (
            <div key={category.id} id={category.id} className="mb-20 scroll-mt-20">
              <div className="flex items-center mb-8">
                <span className="text-5xl mr-4">{category.icon}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  {category.title}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {category.products.map((product, productIndex) => (
                  <div
                    key={productIndex}
                    className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {product.name}
                    </h3>
                    <p className="text-gray-600">
                      {product.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
