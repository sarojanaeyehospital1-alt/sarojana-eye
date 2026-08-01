"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SchemaOrg } from "@/components/seo/SchemaOrg";

type Faq = { question: string; answer: string };

export function FaqAccordion({
  faqs,
  title = "Frequently Asked Questions",
  columns = 1,
  embedded = false,
}: {
  faqs: readonly Faq[] | Faq[];
  title?: string;
  columns?: 1 | 2;
  /** When true, skip outer section padding (use inside detail pages). */
  embedded?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const splitAt = Math.ceil(faqs.length / 2);
  const leftFaqs = columns === 2 ? faqs.slice(0, splitAt) : faqs;
  const rightFaqs = columns === 2 ? faqs.slice(splitAt) : [];

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

  const renderList = (list: readonly Faq[] | Faq[], startIndex: number) => (
    <div className="space-y-3">
      {list.map((faq, i) => {
        const index = startIndex + i;
        const open = openIndex === index;
        return (
          <div
            key={faq.question}
            className="overflow-hidden rounded-xl border border-border bg-white shadow-brand"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left sm:px-5 sm:py-4"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : index)}
            >
              <span className="text-sm font-medium leading-snug text-foreground sm:text-base">
                {faq.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-primary transition ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>
            {open ? (
              <div className="border-t border-border px-4 py-3.5 text-sm leading-relaxed text-muted sm:px-5 sm:py-4">
                {faq.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );

  const heading = (
    <h2
      className={`font-heading font-bold text-primary ${
        embedded
          ? "mb-5 text-left text-xl text-teal-800 sm:text-2xl"
          : "mb-6 text-center text-2xl sm:mb-8 sm:text-3xl lg:text-4xl"
      }`}
    >
      {title}
    </h2>
  );

  const body =
    columns === 2 ? (
      <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
        {renderList(leftFaqs, 0)}
        {renderList(rightFaqs, splitAt)}
      </div>
    ) : (
      renderList(leftFaqs, 0)
    );

  if (embedded) {
    return (
      <section>
        <SchemaOrg data={schema} />
        {heading}
        {body}
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-16">
      <SchemaOrg data={schema} />
      <div
        className={`mx-auto px-4 sm:px-6 lg:px-8 ${
          columns === 2 ? "max-w-6xl" : "max-w-3xl"
        }`}
      >
        {heading}
        {body}
      </div>
    </section>
  );
}
