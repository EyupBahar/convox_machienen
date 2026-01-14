'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Hakkimizda() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.about.title}</h1>
          <p className="text-xl text-blue-100">
            {t.about.subtitle}
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">{t.about.companyTitle}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t.about.companyText1}
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t.about.companyText2}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{t.about.vision.title}</h3>
                <p className="text-gray-600">
                  {t.about.vision.text}
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{t.about.mission.title}</h3>
                <p className="text-gray-600">
                  {t.about.mission.text}
                </p>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">{t.about.values.title}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h4 className="font-semibold text-gray-800 mb-2">{t.about.values.quality.title}</h4>
                  <p className="text-gray-600 text-sm">
                    {t.about.values.quality.text}
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🤝</div>
                  <h4 className="font-semibold text-gray-800 mb-2">{t.about.values.trust.title}</h4>
                  <p className="text-gray-600 text-sm">
                    {t.about.values.trust.text}
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">💡</div>
                  <h4 className="font-semibold text-gray-800 mb-2">{t.about.values.innovation.title}</h4>
                  <p className="text-gray-600 text-sm">
                    {t.about.values.innovation.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
