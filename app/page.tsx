import Link from 'next/link';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProductsPreview from '@/components/ProductsPreview';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <Features />
      <ProductsPreview />
      <CTA />
    </div>
  );
}

