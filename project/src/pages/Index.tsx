import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Specifications } from '@/components/Specifications';
import { CTA } from '@/components/CTA';
import { FAQSection } from '@/components/FeedbackAndFAQ';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Specifications />
        <BeforeAfterSection />
        <FAQSection />
        <CTA />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Index;
