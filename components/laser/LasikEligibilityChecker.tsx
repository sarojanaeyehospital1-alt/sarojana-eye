"use client";

import { useState } from "react";
import { ClipboardCheck } from "lucide-react";

const QUESTIONS = [
  {
    id: "age",
    question: "Are you 18 years or older?",
  },
  {
    id: "stable",
    question: "Has your spectacle power been stable for at least 1 year?",
  },
  {
    id: "pregnant",
    question: "Are you currently free from pregnancy / breastfeeding?",
  },
  {
    id: "health",
    question:
      "Do you have healthy corneas without active eye infection or advanced glaucoma?",
  },
];

export function LasikEligibilityChecker() {
  const [answers, setAnswers] = useState<Record<string, boolean | null>>(
    Object.fromEntries(QUESTIONS.map((q) => [q.id, null])),
  );
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = QUESTIONS.every((q) => answers[q.id] !== null);
  const eligible = QUESTIONS.every((q) => answers[q.id] === true);

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-card">
      <div className="border-b border-border bg-teal-50/80 px-4 py-4 sm:px-6 sm:py-5">
        <div className="flex items-start gap-3 sm:items-center">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-600 text-white sm:h-11 sm:w-11">
            <ClipboardCheck className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <h3 className="font-heading text-lg font-semibold text-teal-800 sm:text-2xl">
              LASIK Eligibility Checker
            </h3>
            <p className="mt-0.5 text-xs text-muted sm:text-sm">
              Quick guidance only — final suitability needs a clinical evaluation.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3 p-4 sm:space-y-4 sm:p-6">
        {QUESTIONS.map((q) => (
          <fieldset
            key={q.id}
            className="rounded-xl border border-border bg-background/40 p-3.5 sm:rounded-2xl sm:p-4"
          >
            <legend className="px-1 text-sm font-medium text-foreground">
              {q.question}
            </legend>
            <div className="mt-3 flex gap-2">
              {[true, false].map((val) => (
                <button
                  key={String(val)}
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setAnswers((prev) => ({ ...prev, [q.id]: val }));
                  }}
                  className={`min-h-10 flex-1 rounded-xl px-4 py-2 text-sm font-semibold transition sm:flex-none ${
                    answers[q.id] === val
                      ? "bg-teal-600 text-white shadow-card"
                      : "border border-border bg-white text-muted hover:border-teal-600 hover:text-teal-700"
                  }`}
                >
                  {val ? "Yes" : "No"}
                </button>
              ))}
            </div>
          </fieldset>
        ))}

        <button
          type="button"
          disabled={!allAnswered}
          onClick={() => setSubmitted(true)}
          className="w-full rounded-xl bg-teal-600 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-800 disabled:opacity-50"
        >
          See Result
        </button>

        {submitted ? (
          <div
            className={`rounded-2xl p-4 text-sm ${
              eligible
                ? "border border-success/30 bg-success/10 text-foreground"
                : "border border-warning/30 bg-warning/10 text-foreground"
            }`}
          >
            {eligible ? (
              <p>
                Based on your answers, you may be a candidate for LASIK or
                another laser procedure. Book a detailed corneal evaluation at
                our Hasthinapuram centre to confirm.
              </p>
            ) : (
              <p>
                You may not be an ideal LASIK candidate right now, or another
                option (TRANS PRK / SMARTSURF / SMILE) may suit you better.
                Visit Sarojana Eye Hospital for a personalised assessment.
              </p>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
