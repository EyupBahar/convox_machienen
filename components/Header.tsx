'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/lib/translations';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const { language, setLanguage, t } = useLanguage();

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  const productsMenuItems = [
    { key: 'concreteBatching', href: '/urunler/beton' },
    { key: 'crushingScreening', href: '/urunler/kirma-eleme' },
    { key: 'mobileCrushing', href: '/urunler/mobil-kirma' },
    { key: 'gravelWashing', href: '/urunler/cakil-yikama' },
    { key: 'asphaltPlant', href: '/urunler/asfalt' },
    { key: 'mobileConcrete', href: '/urunler/mobil-beton' },
    { key: 'cementSilos', href: '/urunler/cement-silos' },
    { key: 'glassRecycler', href: '/urunler/cam-geri-donusum' },
  ];

  return (
    <header className="bg-gray-800 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-xl">
              İPT
            </div>
            <span className="text-xl font-semibold text-white">
              İshak Paşa Tokat
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Homepage */}
            <Link 
              href="/" 
              className="text-white hover:text-orange-500 font-medium transition-colors uppercase text-sm"
            >
              {t.nav.home}
            </Link>

            {/* Corporate */}
            <div 
              className="relative"
              onMouseEnter={() => setHoveredMenu('corporate')}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <Link 
                href="/hakkimizda" 
                className={`flex items-center space-x-1 font-medium transition-colors uppercase text-sm ${
                  hoveredMenu === 'corporate' ? 'text-orange-500' : 'text-white hover:text-orange-500'
                }`}
              >
                <span>{t.nav.corporate}</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {hoveredMenu === 'corporate' && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <Link
                    href="/hakkimizda"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    {t.nav.about}
                  </Link>
                </div>
              )}
            </div>

            {/* Products */}
            <div 
              className="relative"
              onMouseEnter={() => setHoveredMenu('products')}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <Link 
                href="/urunler" 
                className={`flex items-center space-x-1 font-medium transition-colors uppercase text-sm relative pb-1 ${
                  hoveredMenu === 'products' ? 'text-orange-500' : 'text-white hover:text-orange-500'
                }`}
              >
                <span>{t.nav.products}</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                {hoveredMenu === 'products' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"></span>
                )}
              </Link>
              {hoveredMenu === 'products' && (
                <div className="absolute top-full left-0 mt-0 w-64 bg-white shadow-lg border border-gray-200 py-2 z-50">
                  {productsMenuItems.map((item, index) => (
                    <Link
                      key={item.key}
                      href={item.href}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors text-sm"
                    >
                      {t.productsDropdown[item.key as keyof typeof t.productsDropdown]}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* References */}
            <Link 
              href="/hizmetler" 
              className="hidden text-white hover:text-orange-500 font-medium transition-colors uppercase text-sm"
            >
              {t.nav.references}
            </Link>

            {/* E-Catalog */}
            <Link 
              href="/urunler" 
              className="text-white hover:text-orange-500 font-medium transition-colors uppercase text-sm"
            >
              {t.nav.eCatalog}
            </Link>

            {/* Contact Us */}
            <div 
              className="relative"
              onMouseEnter={() => setHoveredMenu('contact')}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <Link 
                href="/iletisim" 
                className={`flex items-center space-x-1 font-medium transition-colors uppercase text-sm ${
                  hoveredMenu === 'contact' ? 'text-orange-500' : 'text-white hover:text-orange-500'
                }`}
              >
                <span>{t.nav.contact}</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {hoveredMenu === 'contact' && (
                <div className="absolute top-full right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <Link
                    href="/iletisim"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    {t.nav.contact}
                  </Link>
                </div>
              )}
            </div>
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-600 hover:bg-gray-700 transition-colors"
                aria-label="Select Language"
              >
                <span className="text-xl">{currentLanguage.flag}</span>
                <svg
                  className={`w-4 h-4 transition-transform text-white ${isLangMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLangMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsLangMenuOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center space-x-2 ${
                          language === lang.code ? 'bg-blue-50 text-blue-600' : 'text-black'
                        }`}
                      >
                        <span className="text-xl">{lang.flag}</span>
                        <span className="font-medium ">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-1 px-2 py-2 rounded-lg border border-gray-600"
                aria-label="Select Language"
              >
                <span className="text-lg">{currentLanguage.flag}</span>
              </button>

              {isLangMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsLangMenuOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center space-x-2 ${
                          language === lang.code ? 'bg-blue-50 text-blue-600' : ''
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="font-medium text-sm">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <button
              className="text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link
              href="/"
              className="block text-white hover:text-orange-500 font-medium py-2 uppercase text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.home}
            </Link>
            <Link
              href="/hakkimizda"
              className="block text-white hover:text-orange-500 font-medium py-2 uppercase text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.corporate}
            </Link>
            <Link
              href="/urunler"
              className="block text-white hover:text-orange-500 font-medium py-2 uppercase text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.products}
            </Link>
            <Link
              href="/hizmetler"
              className="hidden block text-white hover:text-orange-500 font-medium py-2 uppercase text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.references}
            </Link>
            <Link
              href="/urunler"
              className="block text-white hover:text-orange-500 font-medium py-2 uppercase text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.eCatalog}
            </Link>
            <Link
              href="/iletisim"
              className="block bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium text-center uppercase text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.contact}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
