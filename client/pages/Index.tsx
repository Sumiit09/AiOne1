import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import SecondaryIntro from "@/components/sections/SecondaryIntro";
import UseCases from "@/components/sections/UseCases";
import Reviews from "@/components/sections/Reviews";
import Pricing from "@/components/sections/Pricing";
import AboutSection from "@/components/sections/AboutSection";

export default function Index() {
  return (
    <div>
      <Hero />
      <SecondaryIntro />
      <AboutSection />
      <Features />
      <UseCases />
      <Reviews />
      <Pricing />
    </div>
  );
}
