import Hero from "@/components/sections/Hero";
import BrandMarquee from "@/components/sections/BrandMarquee";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import UseCases from "@/components/sections/UseCases";
import Reviews from "@/components/sections/Reviews";
import Pricing from "@/components/sections/Pricing";

export default function Index() {
  return (
    <div>
      <Hero />
      <BrandMarquee />
      <HowItWorks />
      <Features />
      <UseCases />
      <Reviews />
      <Pricing />
    </div>
  );
}
