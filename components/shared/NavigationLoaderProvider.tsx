"use client";

import { Suspense } from "react";
import { NavigationLoader } from "@/components/shared/NavigationLoader";

export function NavigationLoaderProvider() {
  return (
    <Suspense fallback={null}>
      <NavigationLoader />
    </Suspense>
  );
}
