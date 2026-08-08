import Link from "next/link";
import { Glasses } from "lucide-react";

export function OpticalsSection() {
  return (
    <section className="border-y border-border bg-teal-50/50 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center lg:flex-row lg:text-left">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-4">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-600/15 text-teal-700">
            <Glasses className="h-5 w-5" />
          </span>
          <div className="space-y-1 text-sm sm:text-base">
            <p className="font-heading text-lg font-bold text-teal-800">
              INDIRA OPTICALS
            </p>
            <p className="text-muted">
              by Sarojana Eye Hospital — frames, spectacles &amp; contact lenses
              at our Hasthinapuram centre
            </p>
          </div>
        </div>
        <Link
          href="/opticals"
          className="rounded-lg border border-primary px-5 py-2.5 text-sm font-semibold text-primary hover:bg-white"
        >
          Explore Opticals
        </Link>
      </div>
    </section>
  );
}
