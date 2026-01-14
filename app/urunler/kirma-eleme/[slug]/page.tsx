'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { use } from 'react';

const productSlugs: Record<string, keyof typeof import('@/lib/translations').tr.productsPage.crushingScreening> = {
  'stationary-crushing-plants': 'stationary',
  'jaw-crushers': 'jaw',
  'primary-impact-crushers': 'primaryImpact',
  'secondary-impact-crushers': 'secondaryImpact',
  'tertiary-impact-crushers': 'tertiaryImpact',
  'vertical-shaft-impact-crushers': 'verticalShaft',
  'cone-crushers': 'cone',
  'wobbler-feeders': 'wobblerFeeder',
  'vibrating-feeders': 'vibratingFeeder',
  'vibrating-screens': 'vibratingScreen',
  'belt-conveyors': 'beltConveyor',
  'hydraulic-hammer-breaker': 'hydraulicHammer',
};

export default function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { t } = useLanguage();

  const productKey = productSlugs[slug];
  
  if (!productKey) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{t.productsPage.productDetail.productNotFound}</h1>
          <Link href="/urunler/kirma-eleme" className="text-blue-600 hover:underline">
            {t.productsPage.productDetail.goBack}
          </Link>
        </div>
      </div>
    );
  }

  const productsPageAny = t.productsPage as any;
  const crushingScreening = productsPageAny.crushingScreening as unknown as {
    [key: string]: { name: string; description: string; detailedDescription?: string } | string | undefined;
  };
  const product = crushingScreening[productKey] as { name: string; description: string; detailedDescription?: string } | undefined;
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{t.productsPage.productDetail.productNotFound}</h1>
          <Link href="/urunler/kirma-eleme" className="text-blue-600 hover:underline">
            {t.productsPage.productDetail.goBack}
          </Link>
        </div>
      </div>
    );
  }

  const isStationary = slug === 'stationary-crushing-plants';
  const isJaw = slug === 'jaw-crushers';
  const isPrimaryImpact = slug === 'primary-impact-crushers';

  // Sub-products for Stationary Crushing Plants
  const stationaryProducts = isStationary ? [
    { key: 'jawPrimer', slug: 'jaw-primer', image: 'https://picsum.photos/seed/stationary/600/400' },
    { key: 'primaryImpact', slug: 'primary-impact', image: 'https://picsum.photos/seed/stationary/600/400' },
    { key: 'cone', slug: 'cone', image: 'https://picsum.photos/seed/stationary/600/400' },
    { key: 'verticalShaft', slug: 'vertical-shaft', image: 'https://picsum.photos/seed/stationary/600/400' },
  ] : [];

  // Dummy images - using fixed seed values to prevent hydration mismatch
  const productImages = [
    `https://picsum.photos/seed/${slug}-1/1200/600`,
    `https://picsum.photos/seed/${slug}-2/1200/600`,
    `https://picsum.photos/seed/${slug}-3/1200/600`,
  ];

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <section className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">{t.nav.home}</Link>
            <span>/</span>
            <Link href="/urunler" className="hover:text-blue-600">{t.nav.products}</Link>
            <span>/</span>
            <Link href="/urunler/kirma-eleme" className="hover:text-blue-600">{t.productsDropdown.crushingScreening}</Link>
            <span>/</span>
            <span className="text-gray-800">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {product.name}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            {product.description}
          </p>
        </div>
      </section>

      {/* Sub-Products Section (for Stationary Crushing Plants) */}
      {isStationary && stationaryProducts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              {t.productsPage.productDetail.subProducts}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stationaryProducts.map((subProduct) => {
                const productsPageAny = t.productsPage as any;
                const crushingScreeningAny = productsPageAny.crushingScreening as any;
                const subProductData = crushingScreeningAny.stationaryProducts?.[subProduct.key] as {
                  name: string;
                  description: string;
                } | undefined;
                
                if (!subProductData) return null;
                
                return (
                  <div
                    key={subProduct.key}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative h-48 bg-gray-200 overflow-hidden">
                      <Image
                        src={subProduct.image}
                        alt={subProductData.name}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        unoptimized
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        {subProductData.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {subProductData.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Product Images */}
      {!isStationary && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {productImages.map((image, index) => (
                <div key={index} className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`${product.name} - Görsel ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                  />
                </div>
              ))}
            </div>

            {/* Main Product Image */}
            <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden mb-12">
              <Image
                src={productImages[0]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="100vw"
                unoptimized
              />
            </div>
          </div>
        </section>
      )}

      {/* Detailed Description Section (for Stationary Crushing Plants, Jaw Crushers, and Primary Impact Crushers) */}
      {(isStationary || isJaw || isPrimaryImpact) && product.detailedDescription && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                  {product.detailedDescription}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Product Details */}
      <section className={`py-12 ${(isStationary || isJaw || isPrimaryImpact) && product.detailedDescription ? 'bg-white' : isStationary ? 'bg-white' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">{t.productsPage.productDetail.productFeatures}</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {product.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">{t.productsPage.productDetail.highQuality}</h3>
                  <p className="text-gray-600">
                    {t.productsPage.productDetail.highQualityDesc}
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">{t.productsPage.productDetail.reliableService}</h3>
                  <p className="text-gray-600">
                    {t.productsPage.productDetail.reliableServiceDesc}
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">{t.productsPage.productDetail.modernTechnology}</h3>
                  <p className="text-gray-600">
                    {t.productsPage.productDetail.modernTechnologyDesc}
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">{t.productsPage.productDetail.flexibleSolutions}</h3>
                  <p className="text-gray-600">
                    {t.productsPage.productDetail.flexibleSolutionsDesc}
                  </p>
                </div>
              </div>
            </div>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="inline-block bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              {t.productsPage.cta.button}
            </Link>
            <Link
              href="/urunler/kirma-eleme"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {t.productsPage.productDetail.viewOtherProducts}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

