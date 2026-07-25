const fs = require("fs");
const path = require("path");

function svg({ title, subtitle, w = 1200, h = 800, accent = "#1A7A8A" }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${accent}"/>
      <stop offset="100%" stop-color="#0F5A68"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <circle cx="${w * 0.72}" cy="${h * 0.42}" r="${Math.min(w, h) * 0.18}" fill="rgba(255,255,255,0.12)"/>
  <circle cx="${w * 0.72}" cy="${h * 0.42}" r="${Math.min(w, h) * 0.08}" fill="rgba(255,255,255,0.25)"/>
  <text x="60" y="${h * 0.42}" fill="white" font-family="Georgia, serif" font-size="42" font-weight="700">${title}</text>
  <text x="60" y="${h * 0.42 + 48}" fill="rgba(255,255,255,0.85)" font-family="Arial, sans-serif" font-size="22">${subtitle}</text>
</svg>`;
}

const dir = path.join("public", "images");
fs.mkdirSync(dir, { recursive: true });
fs.mkdirSync(path.join("public", "icons"), { recursive: true });

const files = {
  "hero-eye-surgery.svg": svg({
    title: "Sarojana Eye Hospital",
    subtitle: "Advanced Eye Care • Hasthinapuram, Hyderabad",
  }),
  "dr-karunakar.svg": svg({
    title: "Dr. Karunakar Reddy",
    subtitle: "Phaco & LASIK Surgeon",
    w: 600,
    h: 600,
  }),
  "dr-anitha.svg": svg({
    title: "Dr. Anitha Reddy",
    subtitle: "Phaco & LASIK Surgeon",
    w: 600,
    h: 600,
    accent: "#22A8BF",
  }),
  "hospital-interior.svg": svg({
    title: "Hospital Care",
    subtitle: "Clinical Excellence in Hyderabad",
    w: 1200,
    h: 630,
  }),
};

for (const [name, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(dir, name), content);
}

fs.writeFileSync(
  path.join("public", "logo.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <circle cx="100" cy="100" r="96" fill="#1A7A8A"/>
  <circle cx="100" cy="100" r="58" fill="none" stroke="white" stroke-width="8"/>
  <circle cx="100" cy="100" r="22" fill="white"/>
  <circle cx="108" cy="92" r="6" fill="#22A8BF"/>
</svg>`,
);

console.log("placeholders created");
