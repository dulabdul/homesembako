import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import AboutSection from '@/components/sections/AboutSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import CtaBanner from '@/components/sections/CtaBanner';
import ProductSection from '@/components/sections/ProductSection';
import Testimonials from '@/components/sections/Testimonials';
import ContactSection from '@/components/sections/ContactSection';
import WelcomeSection from '@/components/sections/WelcomeSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      {/* <StatsSection /> */}
      <ProductSection />
      <CtaBanner />
      <AboutSection />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection />
    </>
  );
}
