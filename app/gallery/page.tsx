import type { Metadata } from "next";
import Image from "next/image";
import { Images } from "lucide-react";
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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_ITEMS.map((item, index) => (
            <figure
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-border bg-white shadow-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-teal-50">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={75}
                  priority={index < 3}
                  loading={index < 3 ? "eager" : "lazy"}
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
