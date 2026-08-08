import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsCounter } from "@/components/home/StatsCounter";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { LaserProcedures } from "@/components/home/LaserProcedures";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { AppointmentCTA } from "@/components/home/AppointmentCTA";
import { LocationMap } from "@/components/home/LocationMap";
import { InsuranceSection } from "@/components/home/InsuranceSection";
import { OpticalsSection } from "@/components/home/OpticalsSection";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { HOME_FAQS } from "@/lib/constants/hospital";
import { createMetadata } from "@/lib/utils/metadata";

export const metadata: Metadata = createMetadata({
  title:
    "Best Eye Hospital in Hasthinapuram Hyderabad | LASIK & Cataract Surgery | Sarojana Eye Hospital",
  description:
    "Looking for the best eye hospital in Hasthinapuram, Hyderabad? Sarojana Eye Hospital near Nagarjuna Sagar Road offers LASIK, cataract, glaucoma & retina care. 20+ years | 25,000+ patients. Book today.",
  path: "/",
  image: "/images/banner.png",
  keywords: [
    "best eye hospital in Hasthinapuram Hyderabad",
    "best eye doctor in Hyderabad",
    "eye hospital near Nagarjuna Sagar Road Hyderabad",
    "LASIK eye surgery Hasthinapuram",
    "cataract surgery near me Hyderabad",
  ],
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsCounter />
      <ServicesOverview />
      <LaserProcedures />
      <WhyChooseUs />
      <AppointmentCTA />
      <LocationMap />
      <OpticalsSection />
      <InsuranceSection />
      <FaqAccordion faqs={HOME_FAQS} columns={2} />
    </>
  );
}
