# İshak Paşa Tokat Projesi - Müşteri Bilgilendirme Sitesi

Bu proje, Next.js ve Tailwind CSS kullanılarak oluşturulmuş modern bir müşteri bilgilendirme web sitesidir. İnşaat makineleri, beton ve asfalt tesisleri hakkında bilgi sunmak için tasarlanmıştır.

## 🚀 Özellikler

- **Modern ve Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **Hızlı ve Optimize**: Next.js 16 ile yüksek performans
- **Tailwind CSS**: Modern ve özelleştirilebilir stil sistemi
- **TypeScript**: Tip güvenliği ile daha güvenli kod
- **SEO Optimizasyonu**: Arama motorları için optimize edilmiş

## 📋 Sayfalar

- **Ana Sayfa**: Hero section, istatistikler, özellikler ve ürün önizlemeleri
- **Hakkımızda**: Firma bilgileri, vizyon, misyon ve değerler
- **Ürünler**: Beton, asfalt, kırma-eleme ve yıkama tesisleri
- **Hizmetler**: Tasarım, üretim, bakım, eğitim ve proje yönetimi hizmetleri
- **İletişim**: İletişim formu ve iletişim bilgileri

## 🛠️ Teknolojiler

- [Next.js 16](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Tip güvenliği
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- [React 19](https://react.dev/) - UI kütüphanesi

## 📦 Kurulum

Projeyi klonladıktan sonra:

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## 🏗️ Proje Yapısı

```
ishak_pasa_tokat_projesi/
├── app/
│   ├── hakkimizda/      # Hakkımızda sayfası
│   ├── urunler/         # Ürünler sayfası
│   ├── hizmetler/       # Hizmetler sayfası
│   ├── iletisim/        # İletişim sayfası
│   ├── layout.tsx       # Ana layout
│   ├── page.tsx         # Ana sayfa
│   └── globals.css      # Global stiller
├── components/
│   ├── Header.tsx       # Header/Navbar bileşeni
│   ├── Footer.tsx       # Footer bileşeni
│   ├── Hero.tsx         # Hero section
│   ├── Stats.tsx        # İstatistikler
│   ├── Features.tsx     # Özellikler
│   ├── ProductsPreview.tsx # Ürün önizlemeleri
│   └── CTA.tsx          # Call-to-action
└── public/              # Statik dosyalar
```

## 🎨 Özelleştirme

- Renkler: `app/globals.css` dosyasındaki CSS değişkenlerini düzenleyin
- İçerik: Her sayfa dosyasını düzenleyerek içeriği güncelleyin
- Bileşenler: `components/` klasöründeki bileşenleri özelleştirin

## 📱 Responsive Tasarım

Site tüm ekran boyutlarında optimize edilmiştir:
- Mobil (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large Desktop (1280px+)

## 🚀 Production Build

```bash
# Production build oluşturun
npm run build

# Production sunucusunu başlatın
npm start
```

## 📄 Lisans

Bu proje özel bir projedir.

## 👥 İletişim

Sorularınız için iletişim sayfasından bize ulaşabilirsiniz.
