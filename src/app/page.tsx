import BackgroundDecorations from '@/components/ui/BackgroundDecorations';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import SleighCarousel from '@/components/sections/SleighCarousel';
import ProductGrid from '@/components/products/ProductGrid';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden flex flex-col pt-16">
      <BackgroundDecorations />
      <Navbar />
      
      <div className="relative z-10 flex-1 flex flex-col">
        <Hero />
        <SleighCarousel />
        <ProductGrid />
        <Faq />
        <Footer />
      </div>
    </main>
  );
}
