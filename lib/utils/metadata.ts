import type { Metadata } from "next";
import { HOSPITAL, SITE_URL } from "@/lib/constants/hospital";

type MetaInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
};

const LOCAL_KEYWORDS = [
  "eye hospital in Hasthinapuram Hyderabad",
  "best eye hospital Hasthinapuram",
  "eye hospital near Nagarjuna Sagar Road Hyderabad",
  "LASIK surgery Hyderabad",
  "cataract surgery Hasthinapuram",
  "glaucoma treatment Hyderabad",
  "SMILE laser surgery Hyderabad",
  "TRANS PRK Hyderabad",
  "Sarojana Eye Hospital",
  "eye specialist Hasthinapuram",
  "ophthalmologist near Nagarjuna School Hyderabad",
];

export function createMetadata({
  title,
  description,
  path = "",
  keywords = [],
  image = "/images/banner.png",
  imageAlt,
}: MetaInput): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title.includes(HOSPITAL.name)
    ? title
    : `${title} | ${HOSPITAL.name}, Hasthinapuram, Hyderabad`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;
  const ogAlt =
    imageAlt ??
    `${HOSPITAL.name} – Best Eye Hospital in Hasthinapuram, Hyderabad`;

  return {
    title: fullTitle,
    description,
    keywords: [...LOCAL_KEYWORDS, ...keywords],
    authors: [{ name: HOSPITAL.name }],
    creator: HOSPITAL.name,
    publisher: HOSPITAL.name,
    category: "healthcare",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: HOSPITAL.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  };
}
