import {
  Award,
  Cpu,
  HeartHandshake,
  MapPinned,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const REASONS = [
  {
    icon: Stethoscope,
    title: "Fellowship-Trained Surgeons",
    desc: "FICO UK credentials and L.V. Prasad / Aravind training pedigree.",
  },
  {
    icon: Award,
    title: "20+ Years of Surgical Excellence",
    desc: "Decades of cataract, LASIK, and comprehensive eye care experience.",
  },
  {
    icon: Cpu,
    title: "Advanced Technology & Equipment",
    desc: "Modern diagnostics and surgical systems for precise outcomes.",
  },
  {
    icon: HeartHandshake,
    title: "Personalised Care for Every Patient",
    desc: "Clear counselling and treatment plans tailored to your eyes.",
  },
  {
    icon: MapPinned,
    title: "Convenient Hasthinapuram Location",
    desc: "Easy access near Nagarjuna School, Nagarjuna Sagar Road.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance Reimbursement Available",
    desc: "Support for claims across insurance providers (cashless not available).",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          title="Why Patients Trust Us"
          subtitle="Why choose Sarojana Eye Hospital in Hasthinapuram, Hyderabad"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-white p-6 shadow-brand"
            >
              <item.icon className="mb-3 h-8 w-8 text-primary" />
              <h3 className="font-heading text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
