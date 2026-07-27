import type { Metadata } from "next";
import { Images } from "lucide-react";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { PageHeroWave } from "@/components/shared/PageHeroWave";
import { GALLERY_ITEMS } from "@/lib/constants/gallery";
import { createMetadata } from "@/lib/utils/metadata";

export const metadata: Metadata = createMetadata({
  title: "Hospital Gallery | Sarojana Eye Hospital Hasthinapuram Hyderabad",
  description:
    "Photo gallery of Sarojana Eye Hospital in Hasthinapuram, Hyderabad — clinic interiors, eye care facilities, and hospital exterior near Nagarjuna Sagar Road.",
  path: "/gallery",
  image: "/images/banner.png",
  keywords: [
    "Sarojana Eye Hospital gallery",
    "eye hospital photos Hasthinapuram",
    "eye clinic photos Hyderabad",
  ],
});

export default function GalleryPage() {
  return (
    <>
      <PageHeroWave
        title="Gallery"
        subtitle="A look at Sarojana Eye Hospital, our team, and the care environment in Hasthinapuram"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Gallery", href: "/gallery" },
        ]}
        icon={<Images className="h-12 w-12 text-white" />}
      />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <GalleryGrid items={GALLERY_ITEMS} />
      </section>
    </>
  );
}
