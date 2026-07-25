import type { ReactNode } from "react";

type SchemaOrgProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function SchemaOrg({ data }: SchemaOrgProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function JsonLd({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
