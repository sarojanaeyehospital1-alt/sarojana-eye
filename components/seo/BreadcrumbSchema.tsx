import { SITE_URL } from "@/lib/constants/hospital";
import { SchemaOrg } from "@/components/seo/SchemaOrg";

type Crumb = { name: string; href: string };

export function BreadcrumbSchema({
  items,
  id,
}: {
  items: Crumb[];
  id?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    ...(id ? { "@id": id } : {}),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };

  return <SchemaOrg data={data} />;
}
