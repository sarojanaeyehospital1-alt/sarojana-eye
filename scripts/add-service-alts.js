const fs = require("fs");
const path = "lib/constants/services.ts";
let text = fs.readFileSync(path, "utf8");

const alts = {
  "headache-clinic.webp":
    "Headache Clinic for eye-related headaches at Sarojana Eye Hospital, Hasthinapuram, Hyderabad",
  "comprehensive-eye-checkup.webp":
    "Comprehensive eye checkup and full eye health assessment at Sarojana Eye Hospital, Hasthinapuram, Hyderabad",
  "computerised-eye-testing.webp":
    "Computerised eye testing and digital refraction at Sarojana Eye Hospital, Hasthinapuram, Hyderabad",
  "contact-lens.webp":
    "Contact lens fitting and prescription at Sarojana Eye Hospital, Hasthinapuram, Hyderabad",
  "phacoemulsification.webp":
    "Phacoemulsification and sutureless IOL cataract surgery at Sarojana Eye Hospital, Hasthinapuram, Hyderabad",
  "diabetic-eye-care.webp":
    "Diabetic eye care and retinopathy screening at Sarojana Eye Hospital, Hasthinapuram, Hyderabad",
  "paediatric-eye-care.webp":
    "Paediatric eye care for children at Sarojana Eye Hospital, Hasthinapuram, Hyderabad",
  "glaucoma.webp":
    "Glaucoma evaluation and eye pressure management at Sarojana Eye Hospital, Hasthinapuram, Hyderabad",
  "pterygium-surgery.webp":
    "Pterygium surgery treatment at Sarojana Eye Hospital, Hasthinapuram, Hyderabad",
  "retina-evaluation.webp":
    "Retina evaluation and advanced retinal imaging at Sarojana Eye Hospital, Hasthinapuram, Hyderabad",
  "lasik.webp":
    "LASIK laser eye surgery at Sarojana Eye Hospital, Hasthinapuram, Hyderabad",
  "trans-prk.webp":
    "TRANS PRK flapless laser vision correction at Sarojana Eye Hospital, Hasthinapuram, Hyderabad",
  "smartsurf.webp":
    "SMARTSURF surface laser eye surgery at Sarojana Eye Hospital, Hasthinapuram, Hyderabad",
  "intralase.webp":
    "INTRALASE bladeless femtosecond LASIK at Sarojana Eye Hospital, Hasthinapuram, Hyderabad",
  "smile.webp":
    "SMILE flapless laser vision correction at Sarojana Eye Hospital, Hasthinapuram, Hyderabad",
};

let count = 0;
for (const [file, alt] of Object.entries(alts)) {
  const needle = `image: "/images/services/${file}",`;
  const replacement = `image: "/images/services/${file}",\n    imageAlt: "${alt}",`;
  if (!text.includes(needle)) {
    console.log("MISSING", file);
    continue;
  }
  if (text.includes(`image: "/images/services/${file}",\n    imageAlt:`)) {
    console.log("SKIP already has alt", file);
    continue;
  }
  text = text.replace(needle, replacement);
  count++;
  console.log("OK", file);
}

fs.writeFileSync(path, text);
console.log("updated", count);
