import FeaturedProducts from "@/components/landing-page/featured-product-card";
import HeroSection from "@/components/landing-page/hero-section";
import RecentlyLaunchedProducts from "@/components/landing-page/recently-launched-projects";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <FeaturedProducts />

      <RecentlyLaunchedProducts />
    </div>
  );
}
