import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { LASER_PROCEDURES } from "@/lib/constants/services";
import { getIcon } from "@/lib/utils/icons";

export function LaserProcedures() {
  return (
    <section className="bg-primary-dark py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          title="Advanced Laser Eye Procedures"
          subtitle="LASIK surgery in Hasthinapuram with multiple vision-correction options"
          light
        />
        <div className="snap-x-mandatory flex gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-5 lg:overflow-visible">
          {LASER_PROCEDURES.map((proc) => {
            const Icon = getIcon(proc.icon);
            return (
              <Link
                key={proc.id}
                href={`/services/${proc.slug}`}
                className="snap-start min-w-[240px] rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur transition hover:bg-white/15 lg:min-w-0"
              >
                <Icon className="mb-3 h-7 w-7 text-primary-light" />
                <h3 className="font-heading text-xl font-bold">{proc.title}</h3>
                <p className="mt-1 text-xs text-white/70">{proc.fullName}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/85">
                  {proc.desc}
                </p>
              </Link>
            );
          })}
        </div>
        <p className="mt-8 text-center text-sm font-medium text-primary-light">
          All Procedures Are Performed by Fellowship-Trained Surgeons
        </p>
        <div className="mt-6 text-center">
          <Link
            href="/laser-procedures"
            className="inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-primary-dark hover:bg-background"
          >
            Am I Eligible for LASIK?
          </Link>
        </div>
      </div>
    </section>
  );
}
