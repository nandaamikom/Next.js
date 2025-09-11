import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import TrustedCompanies from "@/components/sections/TrustedCompanies";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import PlatformPreview from "@/components/sections/PlatformPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <TrustedCompanies />
      <Features />
      <HowItWorks />
      <PlatformPreview />
      <WhyChooseUs />
      <Testimonials />
      <Pricing />
      <CTA />
    </Layout>
  );
}
