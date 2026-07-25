import type { MetadataRoute } from "next";
import { DOCTORS } from "@/lib/constants/doctors";
import { SITE_URL } from "@/lib/constants/hospital";
import { SERVICES } from "@/lib/constants/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" },
    { path: "/doctors", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" },
    { path: "/laser-procedures", priority: 0.85, changeFrequency: "monthly" },
    { path: "/appointments", priority: 0.9, changeFrequency: "weekly" },
    { path: "/gallery", priority: 0.7, changeFrequency: "weekly" },
    { path: "/insurance", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.85, changeFrequency: "monthly" },
  ];

  const pages = staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  const doctorRoutes = DOCTORS.map((doctor) => ({
    url: `${SITE_URL}/doctors/${doctor.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const serviceRoutes = SERVICES.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...pages, ...doctorRoutes, ...serviceRoutes];
}
