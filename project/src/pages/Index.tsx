import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Ingredients } from '@/components/Ingredients';
import { Products } from '@/components/Products';
import { Testimonials } from '@/components/Testimonials';
import { FAQSection } from '@/components/FeedbackAndFAQ';
import { CTA } from '@/components/CTA';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Ingredients />
        <Products />
        <Testimonials />
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
