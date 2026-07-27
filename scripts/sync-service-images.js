const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const srcDir = path.join("public", "images", "servicess");
const destDir = path.join("public", "images", "services");

const map = {
  "Headache Clinic.png": "headache-clinic.webp",
  "Comprehensive Eye Check up.png": "comprehensive-eye-checkup.webp",
  "Computerised Eye Testing.png": "computerised-eye-testing.webp",
  "Contact Lens Prescription.png": "contact-lens.webp",
  "Phacoemulsification.png": "phacoemulsification.webp",
  "Sutureless 1.0.L. Surgery.png": "sutureless-iol-surgery.webp",
  "Diabetic Eye Care.png": "diabetic-eye-care.webp",
  "Paediatric Eye Care.png": "paediatric-eye-care.webp",
  "Glaucoma Evaluation.png": "glaucoma.webp",
  "Pterygium surgeries.png": "pterygium-surgery.webp",
  "Retina evaluation.png": "retina-evaluation.webp",
  "LASIK.png": "lasik.webp",
  "TRANS PRK.png": "trans-prk.webp",
  "SMARTSURF.png": "smartsurf.webp",
  "INTRALASE.png": "intralase.webp",
  "SMILE.png": "smile.webp",
};

fs.mkdirSync(destDir, { recursive: true });

(async () => {
  for (const [from, to] of Object.entries(map)) {
    const input = path.join(srcDir, from);
    const output = path.join(destDir, to);
    if (!fs.existsSync(input)) {
      console.log("MISSING SOURCE", from);
      continue;
    }
    await sharp(input)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(output);
    console.log("OK", to, Math.round(fs.statSync(output).size / 1024) + "KB");
  }
})();
