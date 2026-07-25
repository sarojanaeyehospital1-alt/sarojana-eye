"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SchemaOrg } from "@/components/seo/SchemaOrg";

type Faq = { question: string; answer: string };

export function FaqAccordion({
  faqs,
  title = "Frequently Asked Questions",
}: {
  faqs: readonly Faq[] | Faq[];
  title?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-16">
      <SchemaOrg data={schema} />
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="mb-8 text-center font-heading text-3xl font-bold text-primary sm:text-4xl">
          {title}
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-border bg-white shadow-brand"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : index)}
                >
                  <span className="font-medium text-foreground">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {open ? (
                  <div className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted">
                    {faq.answer}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
