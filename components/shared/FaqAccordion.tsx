"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SchemaOrg } from "@/components/seo/SchemaOrg";

type Faq = { question: string; answer: string };

export function FaqAccordion({
  faqs,
  title = "Frequently Asked Questions",
  columns = 1,
}: {
  faqs: readonly Faq[] | Faq[];
  title?: string;
  columns?: 1 | 2;
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
  );

  return (
    <section className="py-16">
      <SchemaOrg data={schema} />
      <div
        className={`mx-auto px-4 sm:px-6 lg:px-8 ${
          columns === 2 ? "max-w-6xl" : "max-w-3xl"
        }`}
      >
        <h2 className="mb-8 text-center font-heading text-3xl font-bold text-primary sm:text-4xl">
          {title}
        </h2>
        {columns === 2 ? (
          <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
            {renderList(leftFaqs, 0)}
            {renderList(rightFaqs, splitAt)}
          </div>
        ) : (
          renderList(leftFaqs, 0)
        )}
      </div>
    </section>
  );
}
