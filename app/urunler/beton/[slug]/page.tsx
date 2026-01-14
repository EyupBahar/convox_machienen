'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { use } from 'react';

const productSlugs: Record<string, keyof typeof import('@/lib/translations').tr.productsPage.concreteBatching> = {
  'stationary-concrete-plants': 'stationary',
  'mobile-concrete-plants': 'mobile',
  'compact-concrete-plants': 'compact',
  'dry-type-concrete-plants': 'dryType',
  'cement-silos': 'cementSilos',
  'concrete-mixers': 'mixers',
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
          <Link href="/urunler/beton" className="text-blue-600 hover:underline">
            {t.productsPage.productDetail.goBack}
          </Link>
        </div>
      </div>
    );
  }

  type ProductDetail = {
    name: string;
    description: string;
    detailTitle: string;
    detailDescription: string;
  };

  // Safely access the product by key with proper type casting
  // Using unknown first to avoid type conflicts, then casting to allow indexing
  const concreteBatching = t.productsPage.concreteBatching as unknown as {
    [key: string]: ProductDetail | string | {
      [key: string]: { name: string; description: string };
    } | undefined;
  };
  const product = concreteBatching[productKey] as ProductDetail | undefined;
  
  if (!product || !product.detailTitle || !product.detailDescription) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{t.productsPage.productDetail.productNotFound}</h1>
          <Link href="/urunler/beton" className="text-blue-600 hover:underline">
            {t.productsPage.productDetail.goBack}
          </Link>
        </div>
      </div>
    );
  }

  // Check if this is Stationary Concrete Plants to show sub-products
  const isStationary = slug === 'stationary-concrete-plants';
  const stationaryProducts = isStationary ? [
    { key: 'stationary30', slug: 'stationary-30' },
    { key: 'stationary60', slug: 'stationary-60' },
    { key: 'stationary100', slug: 'stationary-100' },
    { key: 'stationary120', slug: 'stationary-120' },
    { key: 'stationary160', slug: 'stationary-160' },
    { key: 'stationary240', slug: 'stationary-240' },
  ] : [];

  // Check if this is Mobile Concrete Plants to show sub-products
  const isMobile = slug === 'mobile-concrete-plants';
  const mobileProducts = isMobile ? [
    { key: 'mobile30', slug: 'mobile-30' },
    { key: 'mobile60', slug: 'mobile-60' },
    { key: 'mobile100', slug: 'mobile-100' },
    { key: 'mobile120', slug: 'mobile-120' },
    { key: 'mobicom30', slug: 'mobicom-30' },
    { key: 'mobicom45', slug: 'mobicom-45' },
    { key: 'prefeedingConveyor', slug: 'prefeeding-conveyor' },
  ] : [];

  // Check if this is Compact Concrete Plants to show sub-products
  const isCompact = slug === 'compact-concrete-plants';
  const compactProducts = isCompact ? [
    { key: 'compact30Skip', slug: 'compact-30-skip' },
    { key: 'compact60Skip', slug: 'compact-60-skip' },
    { key: 'compact100Skip', slug: 'compact-100-skip' },
    { key: 'compact120Skip', slug: 'compact-120-skip' },
    { key: 'compact60Belt', slug: 'compact-60-belt' },
  ] : [];

  // Check if this is Dry Type Concrete Plants to show sub-products
  const isDryType = slug === 'dry-type-concrete-plants';
  const dryTypeProducts = isDryType ? [
    { key: 'dryMix60', slug: 'drymix-60' },
    { key: 'dryMix100', slug: 'drymix-100' },
  ] : [];

  // Check if this is Cement Silos to show sub-products
  const isCementSilos = slug === 'cement-silos';
  const cementSilosProductsGeneral = isCementSilos ? [
    { key: 'horizontal', slug: 'horizontal-cement-silo' },
    { key: 'cs50', slug: 'cs-50-cement-silo' },
    { key: 'cs100', slug: 'cs-100-cement-silo' },
    { key: 'cs200', slug: 'cs-200-bolted-cement-silo' },
    { key: 'cs300', slug: 'cs-300-bolted-cement-silo' },
  ] : [];
  const cementSilosProductsWithDetails = isCementSilos ? [
    { key: 'cs300', slug: 'cs-300-bolted-cement-silo' },
    { key: 'cs500', slug: 'cs-500-bolted-cement-silo' },
    { key: 'cs1000', slug: 'cs-1000-bolted-cement-silo' },
    { key: 'cs2000', slug: 'cs-2000-bolted-cement-silo' },
    { key: 'cs3000', slug: 'cs-3000-bolted-cement-silo' },
  ] : [];

  // Check if this is Concrete Mixers to show sub-products
  const isMixers = slug === 'concrete-mixers';
  const mixersProducts = isMixers ? [
    { key: 'doubleShaft', slug: 'double-shaft-concrete-mixer', image: 'https://picsum.photos/seed/stationary/600/400' },
    { key: 'singleShaft', slug: 'single-shaft-concrete-mixer', image: 'https://picsum.photos/seed/mobile/600/400' },
    { key: 'planetaryType', slug: 'planetary-type-concrete-mixer', image: 'https://picsum.photos/seed/compact/600/400' },
    { key: 'panType', slug: 'pan-type-concrete-mixer', image: 'https://picsum.photos/seed/drytype/600/400' },
  ] : [];

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
            <Link href="/urunler/beton" className="hover:text-blue-600">{t.productsPage.concreteBatching.title}</Link>
            <span>/</span>
            <span className="text-gray-800">{product.detailTitle}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {product.detailTitle}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            {product.detailDescription}
          </p>
        </div>
      </section>

      {/* Sub-Products Section (for Stationary Concrete Plants) */}
      {isStationary && stationaryProducts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              {t.productsPage.productDetail.subProducts}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stationaryProducts.map((subProduct) => {
                const concreteBatchingAny = t.productsPage.concreteBatching as any;
                const subProductData = concreteBatchingAny.stationaryProducts?.[subProduct.key] as {
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
                        src={`https://picsum.photos/seed/${subProduct.slug}/600/400`}
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

      {/* Sub-Products Section (for Mobile Concrete Plants) */}
      {isMobile && mobileProducts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              {t.productsPage.productDetail.subProducts}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mobileProducts.map((subProduct) => {
                const subProductData = t.productsPage.mobileConcrete[subProduct.key as keyof typeof t.productsPage.mobileConcrete] as {
                  name: string;
                  description: string;
                };
                
                return (
                  <Link
                    key={subProduct.key}
                    href={`/urunler/mobil-beton/${subProduct.slug}`}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="relative h-48 bg-gray-200 overflow-hidden">
                      <Image
                        src={`https://picsum.photos/seed/${subProduct.slug}/600/400`}
                        alt={subProductData.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        unoptimized
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                        {subProductData.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {subProductData.description}
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
      )}

      {/* Sub-Products Section (for Compact Concrete Plants) */}
      {isCompact && compactProducts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              {t.productsPage.productDetail.subProducts}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {compactProducts.map((subProduct) => {
                const concreteBatchingAny = t.productsPage.concreteBatching as any;
                const subProductData = concreteBatchingAny.compactProducts?.[subProduct.key] as {
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
                        src={`https://picsum.photos/seed/${subProduct.slug}/600/400`}
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

      {/* Sub-Products Section (for Dry Type Concrete Plants) */}
      {isDryType && dryTypeProducts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              {t.productsPage.productDetail.subProducts}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dryTypeProducts.map((subProduct) => {
                const concreteBatchingAny = t.productsPage.concreteBatching as any;
                const subProductData = concreteBatchingAny.dryTypeProducts?.[subProduct.key] as {
                  name: string;
                  description: string;
                } | undefined;
                
                if (!subProductData) return null;
                
                return (
                  <Link
                    key={subProduct.key}
                    href={`/urunler/beton/${subProduct.slug}`}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="relative h-48 bg-gray-200 overflow-hidden">
                      <Image
                        src={`https://picsum.photos/seed/${subProduct.slug}/600/400`}
                        alt={subProductData.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        unoptimized
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                        {subProductData.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {subProductData.description}
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
      )}

      {/* Sub-Products Section (for Cement Silos - General) */}
      {isCementSilos && cementSilosProductsGeneral.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              {t.productsPage.productDetail.subProducts}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cementSilosProductsGeneral.map((subProduct) => {
                const subProductData = t.productsPage.cementSilos[subProduct.key as keyof typeof t.productsPage.cementSilos] as {
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
                        src={`https://picsum.photos/seed/${subProduct.slug}/600/400`}
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

      {/* Sub-Products Section (for Cement Silos - With View Details) */}
      {isCementSilos && cementSilosProductsWithDetails.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              {t.productsPage.productDetail.subProducts}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cementSilosProductsWithDetails.map((subProduct) => {
                const subProductData = t.productsPage.cementSilos[subProduct.key as keyof typeof t.productsPage.cementSilos] as {
                  name: string;
                  description: string;
                };
                
                return (
                  <Link
                    key={subProduct.key}
                    href={`/urunler/cement-silos/${subProduct.slug}`}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="relative h-48 bg-gray-200 overflow-hidden">
                      <Image
                        src={`https://picsum.photos/seed/${subProduct.slug}/600/400`}
                        alt={subProductData.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        unoptimized
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                        {subProductData.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {subProductData.description}
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
      )}

      {/* Sub-Products Section (for Concrete Mixers) */}
      {isMixers && mixersProducts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              {t.productsPage.productDetail.subProducts}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mixersProducts.map((subProduct) => {
                const concreteBatchingAny = t.productsPage.concreteBatching as any;
                const subProductData = concreteBatchingAny.mixersProducts?.[subProduct.key] as {
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

      {/* Product Details */}
      <section className={`py-12 ${isStationary || isMobile || isCompact || isDryType || isCementSilos || isMixers ? 'bg-white' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">{t.productsPage.productDetail.productFeatures}</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {product.detailDescription}
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
              href="/urunler/beton"
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

