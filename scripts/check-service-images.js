const fs = require("fs");
const path = require("path");
const text = fs.readFileSync("lib/constants/services.ts", "utf8");
const imgs = [...text.matchAll(/image:\s*"([^"]+)"/g)].map((m) => m[1]);
const uniq = [...new Set(imgs)];
let miss = 0;
for (const p of uniq) {
  const full = path.join("public", p.replace(/^\//, ""));
  const ok = fs.existsSync(full);
  if (!ok) miss++;
  console.log(ok ? "OK" : "MISS", p);
}
console.log("total", uniq.length, "missing", miss);
