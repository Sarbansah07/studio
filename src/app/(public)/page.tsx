import Hero from "@/components/pages/home/Hero";
import WhyAiseo from "@/components/pages/home/WhyAiseo";
import CoreModules from "@/components/pages/home/CoreModules";
import HowItWorks from "@/components/pages/home/HowItWorks";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <WhyAiseo />
      <CoreModules />
      <HowItWorks />
    </div>
  );
}
