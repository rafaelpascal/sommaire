import BgGradient from "@/components/common/BgGradient";
import DemoSection from "@/components/home/demo-section";
import HeroSection from "@/components/home/hero-section";

export default function Home() {
  return (
    <div className="relative w-full">
      <BgGradient />
      <div className="flex flex-col">
        <HeroSection />
        <DemoSection />
      </div>
    </div>
  );
}
