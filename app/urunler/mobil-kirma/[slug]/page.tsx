'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { use } from 'react';

const productSlugs: Record<string, string> = {
  'mobile-hard-stone-crushers': 'hardStone',
  'mobile-jaw-impact-crushers': 'jawImpact',
  'mobile-sand-making-plants': 'sandMaking',
  'mobile-limestone-crushers': 'limestone',
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
          <Link href="/urunler/mobil-kirma" className="text-blue-600 hover:underline">
            {t.productsPage.productDetail.goBack}
          </Link>
        </div>
      </div>
    );
  }

  const mobileCrushing = t.productsPage.mobileCrushing as unknown as {
    [key: string]: { name: string; description: string } | string | undefined;
  };
  const product = mobileCrushing[productKey] as { name: string; description: string } | undefined;
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{t.productsPage.productDetail.productNotFound}</h1>
          <Link href="/urunler/mobil-kirma" className="text-blue-600 hover:underline">
            {t.productsPage.productDetail.goBack}
          </Link>
        </div>
      </div>
    );
  }

  // Check if this is Mobile Hard Stone Crushers to show sub-products
  const isHardStone = slug === 'mobile-hard-stone-crushers';
  const hardStoneProducts = isHardStone ? [
    { key: 'jc1', slug: 'jc-1', image: 'https://picsum.photos/seed/mobile/600/400' },
    { key: 'jc2', slug: 'jc-2', image: 'https://picsum.photos/seed/mobile/600/400' },
    { key: 'jc3', slug: 'jc-3', image: 'https://picsum.photos/seed/mobile/600/400' },
    { key: 'jcv1', slug: 'jcv-1', image: 'https://picsum.photos/seed/mobile/600/400' },
    { key: 'jcv2', slug: 'jcv-2', image: 'https://picsum.photos/seed/mobile/600/400' },
    { key: 'jcv3', slug: 'jcv-3', image: 'https://picsum.photos/seed/mobile/600/400' },
  ] : [];

  // Check if this is Mobile Sand Making Plants (Vertical Shaft Crushers) to show sub-products
  const isSandMaking = slug === 'mobile-sand-making-plants';
  const sandMakingProducts = isSandMaking ? [
    { key: 'v70', slug: 'v-70', image: 'https://picsum.photos/seed/compact/600/400' },
    { key: 'v80', slug: 'v-80', image: 'https://picsum.photos/seed/compact/600/400' },
    { key: 'v90', slug: 'v-90', image: 'https://picsum.photos/seed/compact/600/400' },
    { key: 't75', slug: 't-75', image: 'https://picsum.photos/seed/compact/600/400' },
    { key: 't100', slug: 't-100', image: 'https://picsum.photos/seed/compact/600/400' },
    { key: 't120', slug: 't-120', image: 'https://picsum.photos/seed/compact/600/400' },
  ] : [];

  // Check if this is Mobile Jaw and Impact Crushers to show sub-products
  const isJawImpact = slug === 'mobile-jaw-impact-crushers';
  const jawImpactProducts = isJawImpact ? [
    { key: 'jc1', slug: 'jc-1', image: 'https://picsum.photos/seed/stationary/600/400' },
    { key: 'jc2', slug: 'jc-2', image: 'https://picsum.photos/seed/stationary/600/400' },
    { key: 'jc3', slug: 'jc-3', image: 'https://picsum.photos/seed/stationary/600/400' },
    { key: 'jcv1', slug: 'jcv-1', image: 'https://picsum.photos/seed/stationary/600/400' },
    { key: 'jcv2', slug: 'jcv-2', image: 'https://picsum.photos/seed/stationary/600/400' },
    { key: 'jcv3', slug: 'jcv-3', image: 'https://picsum.photos/seed/stationary/600/400' },
  ] : [];

  // Check if this is Mobile Limestone Crushers to show sub-products
  const isLimestone = slug === 'mobile-limestone-crushers';
  const limestoneProducts = isLimestone ? [
    { key: 'pl1', slug: 'pl-1', image: 'https://picsum.photos/seed/cement/600/400' },
    { key: 'pl2', slug: 'pl-2', image: 'https://picsum.photos/seed/cement/600/400' },
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
            <Link href="/urunler/mobil-kirma" className="hover:text-blue-600">{t.productsDropdown.mobileCrushing}</Link>
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

      {/* Sub-Products Section (for Mobile Hard Stone Crushers) */}
      {isHardStone && hardStoneProducts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              {t.productsPage.productDetail.subProducts}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hardStoneProducts.map((subProduct) => {
                const subProductData = t.productsPage.mobileCrushing.hardStoneProducts[subProduct.key as keyof typeof t.productsPage.mobileCrushing.hardStoneProducts] as {
                  name: string;
                  description: string;
                };
                
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

      {/* Sub-Products Section (for Mobile Sand Making Plants - Vertical Shaft Crushers) */}
      {isSandMaking && sandMakingProducts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              {t.productsPage.productDetail.subProducts}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sandMakingProducts.map((subProduct) => {
                const subProductData = t.productsPage.mobileCrushing.sandMakingProducts[subProduct.key as keyof typeof t.productsPage.mobileCrushing.sandMakingProducts] as {
                  name: string;
                  description: string;
                };
                
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

      {/* Sub-Products Section (for Mobile Jaw and Impact Crushers) */}
      {isJawImpact && jawImpactProducts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              {t.productsPage.productDetail.subProducts}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jawImpactProducts.map((subProduct) => {
                const subProductData = t.productsPage.mobileCrushing.jawImpactProducts[subProduct.key as keyof typeof t.productsPage.mobileCrushing.jawImpactProducts] as {
                  name: string;
                  description: string;
                };
                
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

      {/* Sub-Products Section (for Mobile Limestone Crushers) */}
      {isLimestone && limestoneProducts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              {t.productsPage.productDetail.subProducts}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {limestoneProducts.map((subProduct) => {
                const subProductData = t.productsPage.mobileCrushing.limestoneProducts[subProduct.key as keyof typeof t.productsPage.mobileCrushing.limestoneProducts] as {
                  name: string;
                  description: string;
                };
                
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
      {!isHardStone && !isJawImpact && !isSandMaking && !isLimestone && (
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

      {/* Product Details */}
      <section className={`py-12 ${isHardStone || isJawImpact || isSandMaking || isLimestone ? 'bg-white' : 'bg-gray-50'}`}>
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
              href="/urunler/mobil-kirma"
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


