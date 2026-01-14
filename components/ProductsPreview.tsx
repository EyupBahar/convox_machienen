'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ProductsPreview() {
  const { t } = useLanguage();

  const productsMenuItems = [
    { key: 'concreteBatching', href: '/urunler/beton', image: 'https://picsum.photos/seed/concrete/400/300' },
    { key: 'crushingScreening', href: '/urunler/kirma-eleme', image: 'https://picsum.photos/seed/crushing/400/300' },
    { key: 'mobileCrushing', href: '/urunler/mobil-kirma', image: 'https://picsum.photos/seed/mobile-crushing/400/300' },
    { key: 'gravelWashing', href: '/urunler/cakil-yikama', image: 'https://picsum.photos/seed/gravel/400/300' },
    { key: 'asphaltPlant', href: '/urunler/asfalt', image: 'https://picsum.photos/seed/asphalt/400/300' },
    { key: 'mobileConcrete', href: '/urunler/mobil-beton', image: 'https://picsum.photos/seed/mobile-concrete/400/300' },
    { key: 'cementSilos', href: '/urunler/cement-silos', image: 'https://picsum.photos/seed/cement/400/300' },
    { key: 'glassRecycler', href: '/urunler/cam-geri-donusum', image: 'https://picsum.photos/seed/glass/400/300' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t.products.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.products.subtitle}
          </p>
        </div>
        
        <div className="relative px-16 py-8">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="!pb-20"
          >
          {productsMenuItems.map((item) => (
            <SwiperSlide key={item.key}>
            <Link
                href={item.href}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group block h-full"
            >
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={t.productsDropdown[item.key as keyof typeof t.productsDropdown]}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center group-hover:text-blue-600 transition-colors">
                    {t.productsDropdown[item.key as keyof typeof t.productsDropdown]}
              </h3>
                  <div className="text-blue-600 font-medium text-center flex items-center justify-center group-hover:translate-x-2 transition-transform">
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
            </SwiperSlide>
          ))}
          </Swiper>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/urunler"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            {t.products.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}
