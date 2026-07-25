#!/usr/bin/env python3
"""Generate lib/constants/services.ts with full service content."""

from pathlib import Path

OUTPUT = Path(__file__).resolve().parent.parent / "lib" / "constants" / "services.ts"

HEADER = '''import type { LaserProcedure, Service } from "@/lib/types";

export const SERVICES: Service[] = [
'''

FOOTER = '''
];

export const LASER_PROCEDURES: LaserProcedure[] = [
  {
    id: "lasik",
    title: "LASIK",
    slug: "lasik",
    fullName: "Laser-Assisted In Situ Keratomileusis",
    desc: "The world's most popular laser vision correction procedure for myopia, hyperopia, and astigmatism",
    icon: "Zap",
    details:
      "LASIK reshapes the cornea beneath a thin flap to correct refractive errors with rapid visual recovery for suitable candidates.",
    benefits: [
      "Quick recovery for most patients",
      "Minimal discomfort",
      "Proven track record worldwide",
    ],
  },
  {
    id: "trans-prk",
    title: "TRANS PRK",
    slug: "trans-prk",
    fullName: "Transepithelial Photorefractive Keratectomy",
    desc: "Touchless, bladeless laser eye surgery — no flap, no contact with the eye",
    icon: "Sparkles",
    details:
      "TRANS PRK is a no-touch surface procedure that removes epithelium and reshapes the cornea in a single laser step—ideal for thinner corneas or active lifestyles.",
    benefits: [
      "No flap-related risks",
      "Suitable for thinner corneas in many cases",
      "Good for contact/sports lifestyles",
    ],
  },
  {
    id: "smartsurf",
    title: "SMARTSURF",
    slug: "smartsurf",
    fullName: "Smart Surface Ablation",
    desc: "Advanced surface ablation technology for superior visual outcomes and reduced dry eye",
    icon: "Star",
    details:
      "SMARTSURF is an advanced surface ablation approach designed for smooth ablation profiles, comfort, and quality vision with attention to dry-eye concerns.",
    benefits: [
      "Flapless surface treatment",
      "Focus on visual quality",
      "Option when LASIK flap is not ideal",
    ],
  },
  {
    id: "intralase",
    title: "INTRALASE",
    slug: "intralase",
    fullName: "IntraLase Femtosecond LASIK",
    desc: "100% blade-free LASIK using femtosecond laser for precise flap creation",
    icon: "Layers",
    details:
      "IntraLase uses a femtosecond laser to create a precise corneal flap without a mechanical blade, enhancing predictability of flap architecture.",
    benefits: [
      "Blade-free flap creation",
      "High precision",
      "Customisable flap parameters",
    ],
  },
  {
    id: "smile",
    title: "SMILE",
    slug: "smile",
    fullName: "Small Incision Lenticule Extraction",
    desc: "The latest generation of minimally invasive laser vision correction — flapless and precise",
    icon: "Smile",
    details:
      "SMILE removes a small lenticule through a tiny incision without a large flap, offering minimally invasive correction for eligible myopic patients.",
    benefits: [
      "Flapless keyhole approach",
      "Potentially less dry eye impact",
      "Fast return to many activities",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export const SERVICE_CATEGORIES = [
  "All",
  "Diagnostic",
  "Surgical",
  "Medical",
  "Optical",
  "Laser",
] as const;

export const SERVICE_FILTER_TABS = SERVICE_CATEGORIES;
'''

def ts_string(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")

def render_faqs(faqs):
    lines = ["    faqs: ["]
    for faq in faqs:
        lines.append("      {")
        lines.append(f'        question: "{ts_string(faq["question"])}",')
        lines.append(f'        answer: "{ts_string(faq["answer"])}",')
        lines.append("      },")
    lines.append("    ],")
    return "\n".join(lines)

def render_content(content):
    lines = ["    content: {"]
    lines.append(f'      whatIs: "{ts_string(content["whatIs"])}",')
    lines.append("      whyImportant: [")
    for item in content["whyImportant"]:
        lines.append("        {")
        lines.append(f'          title: "{ts_string(item["title"])}",')
        lines.append(f'          desc: "{ts_string(item["desc"])}",')
        lines.append("        },")
    lines.append("      ],")
    lines.append("      steps: [")
    for step in content["steps"]:
        lines.append("        {")
        lines.append(f'          number: "{step["number"]}",')
        lines.append(f'          title: "{ts_string(step["title"])}",')
        lines.append(f'          desc: "{ts_string(step["desc"])}",')
        lines.append("        },")
    lines.append("      ],")
    lines.append("      candidates: {")
    lines.append("        suitable: [")
    for s in content["candidates"]["suitable"]:
        lines.append(f'          "{ts_string(s)}",')
    lines.append("        ],")
    lines.append("        avoid: [")
    for s in content["candidates"]["avoid"]:
        lines.append(f'          "{ts_string(s)}",')
    lines.append("        ],")
    lines.append("      },")
    lines.append("      recovery: [")
    for r in content["recovery"]:
        lines.append("        {")
        lines.append(f'          milestone: "{ts_string(r["milestone"])}",')
        lines.append(f'          note: "{ts_string(r["note"])}",')
        lines.append("        },")
    lines.append("      ],")
    lines.append("      faqs: [")
    for faq in content["faqs"]:
        lines.append("        {")
        lines.append(f'          question: "{ts_string(faq["question"])}",')
        lines.append(f'          answer: "{ts_string(faq["answer"])}",')
        lines.append("        },")
    lines.append("      ],")
    lines.append("      relatedServices: [")
    for slug in content["relatedServices"]:
        lines.append(f'        "{slug}",')
    lines.append("      ],")
    lines.append(f'      metaTitle: "{ts_string(content["metaTitle"])}",')
    lines.append(f'      metaDesc: "{ts_string(content["metaDesc"])}",')
    lines.append("    },")
    return "\n".join(lines)

def render_service(s):
    lines = ["  {"]
    lines.append(f'    id: "{s["id"]}",')
    lines.append(f'    title: "{ts_string(s["title"])}",')
    lines.append(f'    slug: "{s["slug"]}",')
    lines.append(f'    shortDesc: "{ts_string(s["shortDesc"])}",')
    lines.append(f'    icon: "{s["icon"]}",')
    lines.append(f'    category: "{s["category"]}",')
    lines.append("    keywords: [")
    for kw in s["keywords"]:
        lines.append(f'      "{ts_string(kw)}",')
    lines.append("    ],")
    lines.append("    benefits: [")
    for b in s["benefits"]:
        lines.append(f'      "{ts_string(b)}",')
    lines.append("    ],")
    lines.append(f'    definition: "{ts_string(s["definition"])}",')
    lines.append(f'    importance: "{ts_string(s["importance"])}",')
    lines.append("    approach: [")
    for a in s["approach"]:
        lines.append(f'      "{ts_string(a)}",')
    lines.append("    ],")
    lines.append("    whoNeeds: [")
    for w in s["whoNeeds"]:
        lines.append(f'      "{ts_string(w)}",')
    lines.append("    ],")
    lines.append(f'    recovery: "{ts_string(s["recovery"])}",')
    lines.append("    whyChoose: [")
    for w in s["whyChoose"]:
        lines.append(f'      "{ts_string(w)}",')
    lines.append("    ],")
    lines.append(render_faqs(s["faqs"]))
    lines.append(render_content(s["content"]))
    lines.append("  },")
    return "\n".join(lines)

# Service data loaded from external JSON for maintainability
import json
DATA_FILE = Path(__file__).resolve().parent / "services-data.json"

if __name__ == "__main__":
    services = json.loads(DATA_FILE.read_text(encoding="utf-8"))
    parts = [HEADER]
    for svc in services:
        parts.append(render_service(svc))
    parts.append(FOOTER)
    OUTPUT.write_text("\n".join(parts), encoding="utf-8")
    print(f"Wrote {OUTPUT}")
