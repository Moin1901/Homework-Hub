import ActionSection from "@/components/homeBanner/action";
import WelcomeBanner from "@/components/homeBanner/banner";
import FeatureSection from "@/components/homeBanner/feature";
import TestimonialSection from "@/components/homeBanner/testimonial";
import Image from "next/image";
export const metadata = {
  title: "Home : Work Manager",
};
export default function Home() {
  return (
    <div>
      <WelcomeBanner />
      <FeatureSection />
      <ActionSection />
      <TestimonialSection />
    </div>
  );
}
