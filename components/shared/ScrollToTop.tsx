"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/** Mobile scroll-up; desktop uses StickyBookButton stack */
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      title="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-[210px] right-[20px] z-40 flex h-11 w-11 items-center justify-center rounded-full border border-teal-100 bg-white text-teal-700 shadow-brand transition hover:bg-teal-50 sm:hidden"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
