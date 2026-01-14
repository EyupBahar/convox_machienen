'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Stats() {
  const { t } = useLanguage();

  const stats = [
    { number: '15+', label: t.stats.experience },
    { number: '500+', label: t.stats.projects },
    { number: '50+', label: t.stats.customers },
    { number: '24/7', label: t.stats.support },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
