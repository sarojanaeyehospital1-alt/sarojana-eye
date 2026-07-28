export type HospitalStat = {
  value: string;
  label: string;
  icon: string;
};

export type Address = {
  street: string;
  landmark: string;
  city: string;
  state: string;
  pin: string;
  full: string;
};

export type DoctorQualification = {
  title: string;
  detail: string;
  icon: string;
};

export type DoctorAffiliation = {
  role: string;
  hospital: string;
  tag: string;
};

export type DoctorStat = {
  value: string;
  label: string;
};

export type Doctor = {
  id: string;
  slug: string;
  name: string;
  title: string;
  specialisation: string;
  categoryLabel: string;
  meetLabel: string;
  qualifications: string[];
  qualificationDetails: DoctorQualification[];
  experience: string;
  affiliations: DoctorAffiliation[];
  phone: string;
  email?: string;
  stats: readonly DoctorStat[];
  expertise: string[];
  image: string;
  bio: string;
  bioExtra: string;
  previousHospital: string;
  shortBadges: string[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDesc: string;
};

export type ServiceCategory =
  | "All"
  | "Diagnostic"
  | "Surgical"
  | "Medical"
  | "Optical"
  | "Laser";

export type ServiceStep = {
  number: string;
  title: string;
  desc: string;
};

export type ServiceRecovery = {
  milestone: string;
  note: string;
};

export type ServiceContent = {
  whatIs: string;
  whyImportant: { title: string; desc: string }[];
  steps: ServiceStep[];
  candidates: {
    suitable: string[];
    avoid: string[];
  };
  recovery: ServiceRecovery[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
  metaTitle: string;
  metaDesc: string;
};

export type Service = {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  icon: string;
  /** Card/thumbnail image path under /public */
  image: string;
  /** Accessible SEO-friendly alt text for service image */
  imageAlt: string;
  category: Exclude<ServiceCategory, "All">;
  keywords: string[];
  benefits: string[];
  /** @deprecated use content.whatIs — kept for homepage cards */
  definition: string;
  importance: string;
  approach: string[];
  whoNeeds: string[];
  recovery: string;
  whyChoose: string[];
  faqs: { question: string; answer: string }[];
  content: ServiceContent;
};

export type LaserProcedure = {
  id: string;
  title: string;
  slug: string;
  fullName: string;
  desc: string;
  icon: string;
  details: string;
  benefits: string[];
};

export type NavLink = {
  label: string;
  href: string;
};
