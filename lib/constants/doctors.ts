import type { Doctor } from "@/lib/types";
import { HOSPITAL } from "@/lib/constants/hospital";

export const DOCTORS: Doctor[] = [
  {
    id: "dr-chirra-karunakar-reddy",
    slug: "dr-chirra-karunakar-reddy",
    name: "Dr. Chirra Karunakar Reddy",
    title: "MBBS, M.S. (Ophthal), F.I.C.O (U.K.)",
    specialisation: "Phaco & LASIK Surgeon",
    qualifications: [
      "MBBS",
      "M.S. (Ophthalmology)",
      "F.I.C.O – Fellow of International Council of Ophthalmology (U.K.)",
      "Fellowship in Anterior Segment Diseases – Aravind Eye Hospital, Madurai",
    ],
    shortBadges: ["MBBS", "MS Ophthal", "FICO UK", "Aravind Fellowship"],
    qualificationDetails: [
      {
        title: "MBBS",
        detail: "Bachelor of Medicine & Bachelor of Surgery",
        icon: "GraduationCap",
      },
      {
        title: "M.S. Ophthalmology",
        detail: "Specialisation degree in Ophthalmology",
        icon: "Microscope",
      },
      {
        title: "F.I.C.O (U.K.)",
        detail: "Fellow of the International Council of Ophthalmology, United Kingdom",
        icon: "Globe2",
      },
      {
        title: "Fellowship — Anterior Segment Diseases",
        detail: "Aravind Eye Hospital, Madurai — specialised anterior segment training",
        icon: "Hospital",
      },
    ],
    experience:
      "Former Senior Consultant Ophthalmologist – Yashoda Hospital, Malakpet",
    affiliations: [
      {
        role: "Senior Consultant Ophthalmologist",
        hospital: "Yashoda Hospital, Malakpet",
        tag: "Former",
      },
      {
        role: "Fellowship — Anterior Segment Diseases",
        hospital: "Aravind Eye Hospital, Madurai",
        tag: "Training",
      },
      {
        role: "Lead Surgeon",
        hospital: HOSPITAL.name,
        tag: "Current",
      },
    ],
    phone: "9391043236",
    expertise: [
      "LASIK Surgery",
      "Phacoemulsification",
      "Cataract Surgery",
      "Anterior Segment",
      "Contact Lens",
      "Diabetic Eye Care",
    ],
    image: "/images/chirra-karunakar.webp",
    bio: "Dr. Chirra Karunakar Reddy is a highly experienced ophthalmologist with a Fellowship from the International Council of Ophthalmology, UK, and specialized training from the prestigious Aravind Eye Hospital, Madurai. With over two decades of surgical excellence, he leads Sarojana Eye Hospital with a commitment to restoring and preserving vision for patients across Hasthinapuram and Hyderabad.",
    bioExtra:
      "Patients trust Dr. Karunakar for clear counselling, precise surgical planning, and personalised care across cataract, LASIK, and anterior segment conditions. His practice blends international fellowship standards with compassionate local care near Nagarjuna Sagar Road.",
    previousHospital: "Yashoda Hospital, Malakpet",
    faqs: [
      {
        question: "What does Dr. Chirra Karunakar Reddy specialise in?",
        answer:
          "Dr. Karunakar specialises in Phacoemulsification (cataract), LASIK and laser vision correction, anterior segment diseases, and comprehensive ophthalmology at Sarojana Eye Hospital, Hasthinapuram.",
      },
      {
        question: "How do I book an appointment with Dr. Chirra Karunakar Reddy?",
        answer:
          "You can book online via our appointments page, call +91 93910 43236, or WhatsApp the same number. We confirm slots within 2 hours during working hours.",
      },
      {
        question: "What are the consultation timings?",
        answer: `${HOSPITAL.timings.display}. ${HOSPITAL.timings.note}.`,
      },
      {
        question: "What is the consultation fee?",
        answer:
          "Consultation fees depend on the evaluation required. Please call the hospital for current charges and any package options related to surgery counselling.",
      },
    ],
    metaTitle:
      "Dr. Chirra Karunakar Reddy — Phaco & LASIK Surgeon | Sarojana Eye Hospital, Hyderabad",
    metaDesc:
      "Consult Dr. Chirra Karunakar Reddy, MBBS MS Ophthal FICO UK, Phaco & LASIK Surgeon at Sarojana Eye Hospital, Hasthinapuram Hyderabad. Book appointment: Mon–Sat, 10AM–1PM & 5PM–8PM.",
  },
  {
    id: "dr-papagari-anitha-reddy",
    slug: "dr-papagari-anitha-reddy",
    name: "Dr. Papagari Anitha Reddy",
    title: "MBBS, D.O.",
    specialisation: "Phaco & LASIK Surgeon",
    qualifications: [
      "MBBS",
      "D.O. (Diploma in Ophthalmology)",
      "Former Associate – L.V. Prasad Eye Hospital",
    ],
    shortBadges: ["MBBS", "D.O.", "LV Prasad"],
    qualificationDetails: [
      {
        title: "MBBS",
        detail: "Bachelor of Medicine & Bachelor of Surgery",
        icon: "GraduationCap",
      },
      {
        title: "D.O. (Diploma in Ophthalmology)",
        detail: "Specialised diploma training in ophthalmology",
        icon: "Microscope",
      },
      {
        title: "Former Associate — L.V. Prasad Eye Hospital",
        detail:
          "Clinical association with one of the world's most respected eye care institutes",
        icon: "Hospital",
      },
    ],
    experience:
      "Former Associate, L.V. Prasad Eye Hospital (World-renowned eye care institute)",
    affiliations: [
      {
        role: "Associate",
        hospital: "L.V. Prasad Eye Hospital",
        tag: "Former",
      },
      {
        role: "Consultant Ophthalmologist",
        hospital: HOSPITAL.name,
        tag: "Current",
      },
    ],
    phone: "9848416815",
    expertise: [
      "LASIK Surgery",
      "Phacoemulsification",
      "Paediatric Eye Care",
      "General Ophthalmology",
      "Cataract Surgery",
      "Contact Lens",
    ],
    image: "/images/anithareddy.webp",
    bio: "Dr. Papagari Anitha Reddy brings exceptional training from L.V. Prasad Eye Hospital, one of the world's most respected eye care institutions. Her expertise in phacoemulsification and LASIK surgery, combined with her compassionate approach, makes her a trusted eye care specialist for patients of all ages in Hasthinapuram, Hyderabad.",
    bioExtra:
      "Families appreciate her calm, clear explanations and child-friendly approach to paediatric eye concerns, alongside skilled surgical care for cataract and refractive needs.",
    previousHospital: "L.V. Prasad Eye Hospital",
    faqs: [
      {
        question: "What does Dr. Papagari Anitha Reddy specialise in?",
        answer:
          "Dr. Anitha specialises in Phaco & LASIK surgery, paediatric eye care, and general ophthalmology at Sarojana Eye Hospital, Hasthinapuram, Hyderabad.",
      },
      {
        question: "How do I book an appointment with Dr. Papagari Anitha Reddy?",
        answer:
          "Book online, call +91 98484 16815, or use WhatsApp. Our team will confirm your preferred morning or evening slot.",
      },
      {
        question: "What are the consultation timings?",
        answer: `${HOSPITAL.timings.display}. ${HOSPITAL.timings.note}.`,
      },
      {
        question: "What is the consultation fee?",
        answer:
          "Fees vary by consultation type. Please contact the hospital for the latest consultation charges before your visit.",
      },
    ],
    metaTitle:
      "Dr. Papagari Anitha Reddy — Phaco & LASIK Surgeon | Sarojana Eye Hospital, Hyderabad",
    metaDesc:
      "Consult Dr. Papagari Anitha Reddy, MBBS D.O., Phaco & LASIK Surgeon (LV Prasad associate) at Sarojana Eye Hospital, Hasthinapuram Hyderabad. Book Mon–Sat appointments.",
  },
];

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return DOCTORS.find((d) => d.slug === slug);
}
