const fs = require("fs");
const path = "lib/constants/services.ts";
let s = fs.readFileSync(path, "utf8");

const map = {
  "headache-clinic": "/images/gallery/bhan6742.webp",
  "comprehensive-eye-checkup": "/images/gallery/bhan6743.webp",
  "computerised-eye-testing": "/images/gallery/bhan6744.webp",
  "contact-lens": "/images/gallery/bhan6745.webp",
  phacoemulsification: "/images/gallery/bhan6747.webp",
  "diabetic-eye-care": "/images/gallery/bhan6749.webp",
  "paediatric-eye-care": "/images/gallery/bhan6751.webp",
  glaucoma: "/images/gallery/bhan6753.webp",
  "pterygium-surgery": "/images/gallery/bhan6755.webp",
  "retina-evaluation": "/images/gallery/bhan6757.webp",
  lasik: "/images/gallery/bhan6772.webp",
};

const laserIdx = s.indexOf("export const LASER");
const head = s.slice(0, laserIdx);
const tail = s.slice(laserIdx);
let updated = head;

for (const [id, img] of Object.entries(map)) {
  const re = new RegExp(`(id: "${id}"[\\s\\S]*?icon: "[^"]+",\\n)`);
  if (!re.test(updated)) {
    console.error("miss", id);
    process.exit(1);
  }
  updated = updated.replace(re, (m) => {
    if (m.includes("image:")) return m;
    return `${m}    image: "${img}",\n`;
  });
}

fs.writeFileSync(path, updated + tail);
console.log("ok");
