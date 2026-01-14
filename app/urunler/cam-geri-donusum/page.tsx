'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function GlassRecycler() {
  const { t } = useLanguage();

  const products = [
    {
      name: t.productsDropdown.glassRecycler,
      description: "Cam geri dönüşüm sistemleri ile çevre dostu üretim. Yüksek verimlilik ve kalite garantisi.",
      image: 'https://picsum.photos/seed/glass-recycler/600/400'
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t.productsDropdown.glassRecycler}
          </h1>
          <p className="text-xl text-blue-100">
            Cam geri dönüşüm sistemleri ile çevre dostu üretim
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
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
                </div>
              </div>
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


