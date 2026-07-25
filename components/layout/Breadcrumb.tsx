import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

type Crumb = { name: string; href: string };

export function Breadcrumb({
  items,
  light = false,
}: {
  items: Crumb[];
  light?: boolean;
}) {
  return (
    <>
      <BreadcrumbSchema items={items} />
      <nav
        aria-label="Breadcrumb"
        className={`mb-6 text-sm ${light ? "text-white/70" : "text-muted"}`}
      >
        <ol className="flex flex-wrap items-center gap-1.5">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {index > 0 && <span aria-hidden="true">›</span>}
                {isLast ? (
                  <span
                    className={`font-medium ${
                      light ? "text-white" : "text-foreground"
                    }`}
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className={
                      light
                        ? "text-white/85 transition-colors hover:text-white"
                        : "text-primary transition-colors hover:text-primary-dark"
                    }
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
