"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { HOSPITAL } from "@/lib/constants/hospital";
import { getIcon } from "@/lib/utils/icons";

function parseStat(value: string) {
  const numeric = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");
  return { numeric, suffix };
}

function AnimatedValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const { numeric, suffix } = parseStat(value);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 40;
    const timer = setInterval(() => {
      frame += 1;
      setCount(Math.round((numeric * frame) / total));
      if (frame >= total) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, [inView, numeric]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function StatsCounter() {
  return (
    <section className="bg-primary py-12">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {HOSPITAL.stats.map((stat, index) => {
          const Icon = getIcon(stat.icon);
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass-card rounded-2xl border-l-4 border-l-white p-5 text-white"
            >
              <Icon className="mb-3 h-7 w-7 text-white/90" />
              <p className="font-heading text-3xl font-bold">
                <AnimatedValue value={stat.value} />
              </p>
              <p className="mt-1 text-sm text-white/85">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
