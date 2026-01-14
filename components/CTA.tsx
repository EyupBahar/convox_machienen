'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {t.cta.title}
        </h2>
        <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
          {t.cta.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/iletisim"
            className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors"
          >
            {t.cta.contact}
          </Link>
          <Link
            href="/hakkimizda"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-700 transition-colors"
          >
            {t.cta.learnMore}
          </Link>
        </div>
      </div>
    </section>
  );
}
