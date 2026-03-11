import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Ingredients } from '@/components/Ingredients';
import { Products } from '@/components/Products';
import { ProductEducation } from '@/components/ProductEducation';
import { FAQSection } from '@/components/FeedbackAndFAQ';
import { CTA } from '@/components/CTA';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { DividerBanner } from '@/components/DividerBanner';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <DividerBanner />
        <Products />
        <ProductEducation />
        <DividerBanner />
        <FAQSection />
        <CTA />
        <ContactSection />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Index;
