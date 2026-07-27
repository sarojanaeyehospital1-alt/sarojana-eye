export const SITE_URL = "https://sarojanaeyehospital.com";

export const HOSPITAL = {
  name: "Sarojana Eye Hospital",
  tagline: "Restoring Vision, Changing Lives",
  subTagline: "20+ Years of Excellence in Advanced Eye Care",
  phone: "9391043236",
  phoneDisplay: "+91 93910 43236",
  phoneHref: "tel:+919391043236",
  whatsapp: "919391043236",
  whatsappUrl: "https://wa.me/919391043236",
  email: "sarojanaeyehospital1@gmail.com",
  address: {
    street: "Plot No. 6/W, Hasthinapuram Central",
    landmark: "Near Nagarjuna School, Nagarjuna Sagar Road",
    city: "Hyderabad",
    state: "Telangana",
    pin: "500 079",
    full: "Plot No. 6/W, Hasthinapuram Central, Near Nagarjuna School, Nagarjuna Sagar Road, Hyderabad - 500 079",
  },
  coordinates: {
    lat: 17.3234,
    lng: 78.5432,
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Sarojana+Eye+Hospital+Hasthinapuram+Hyderabad",
  mapsEmbed:
    "https://www.google.com/maps?q=Sarojana+Eye+Hospital+Hasthinapuram+Hyderabad&output=embed",
  stats: [
    { value: "20+", label: "Years of Excellence", icon: "Award" },
    { value: "25K+", label: "Happy Patients", icon: "Heart" },
    { value: "10K+", label: "Procedures Performed", icon: "Eye" },
    { value: "15K+", label: "Treatments Completed", icon: "Activity" },
  ],
  timings: {
    morning: "10:00 AM to 1:00 PM",
    evening: "5:00 PM to 8:00 PM",
    holiday: "Sunday",
    note: "Closed on Sundays",
    display: "Mon–Sat: 10AM–1PM & 5PM–8PM",
  },
  emergency: {
    available: false,
    note: "Emergency 24/7 and ambulance services are not available. For emergencies, please contact the nearest emergency center.",
  },
  insurance: {
    cashless: false,
    reimbursement: true,
    note: "Reimbursement is available for all insurance providers. Cashless insurance is currently not available.",
  },
  social: {
    facebook: "https://www.facebook.com/sarojanaeyehospital",
    instagram: "https://www.instagram.com/sarojanaeyehospital",
    youtube: "https://www.youtube.com/@sarojanaeyehospital",
    gmb: "https://www.google.com/maps/search/?api=1&query=Sarojana+Eye+Hospital+Hasthinapuram+Hyderabad",
  },
  payments: ["Cash", "UPI", "Debit/Credit Card"],
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Doctors", href: "/doctors" },
  { label: "Services", href: "/services" },
  { label: "Laser Procedures", href: "/laser-procedures" },
  { label: "Gallery", href: "/gallery" },
  { label: "Insurance", href: "/insurance" },
  { label: "Contact", href: "/contact" },
] as const;

export const HOME_FAQS = [
  {
    question: "Where is Sarojana Eye Hospital located?",
    answer:
      "Sarojana Eye Hospital is located at Plot No. 6/W, Hasthinapuram Central, Near Nagarjuna School, Nagarjuna Sagar Road, Hyderabad - 500 079. It is a trusted eye hospital near Nagarjuna Sagar Road in Hasthinapuram.",
  },
  {
    question: "What are the appointment timings?",
    answer:
      "We are open Monday to Saturday from 10:00 AM to 1:00 PM and 5:00 PM to 8:00 PM. The hospital is closed on Sundays.",
  },
  {
    question: "Which doctors are available at Sarojana Eye Hospital?",
    answer:
      "Our expert surgeons are Dr. Chirra Karunakar Reddy (MBBS, M.S. Ophthal, F.I.C.O UK) and Dr. Papagari Anitha Reddy (MBBS, D.O.), both Phaco & LASIK surgeons with training from leading institutes including Aravind Eye Hospital and L.V. Prasad Eye Hospital.",
  },
  {
    question: "Is LASIK surgery available at Sarojana Eye Hospital?",
    answer:
      "Yes. LASIK surgery is available in Hasthinapuram at Sarojana Eye Hospital, along with TRANS PRK, SMARTSURF, INTRALASE, and SMILE laser vision correction procedures performed by fellowship-trained surgeons.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book online via our appointments page, call +91 93910 43236, or WhatsApp us at +91 93910 43236. We will confirm your slot within 2 hours during working hours.",
  },
  {
    question: "Is cashless insurance available?",
    answer:
      "Cashless insurance is currently not available. Insurance reimbursement is available for all providers — patients pay at the counter and claim from their insurer with the documents we provide.",
  },
  {
    question: "What is the cost of LASIK surgery in Hyderabad?",
    answer:
      "LASIK cost depends on the technology recommended (LASIK, SMILE, TRANS PRK, etc.) and your eye evaluation. Visit us for a detailed assessment and transparent pricing tailored to your needs.",
  },
  {
    question: "Is cataract surgery safe?",
    answer:
      "Modern phacoemulsification and sutureless IOL surgery are among the safest and most successful procedures in medicine. Our surgeons perform these surgeries with advanced technology and careful post-operative care.",
  },
  {
    question: "What should I bring for my first visit?",
    answer:
      "Please bring a valid photo ID, previous eye reports or prescriptions, your spectacles or contact lenses, a list of current medications, and insurance documents if you plan to claim reimbursement.",
  },
  {
    question: "Is Sarojana Eye Hospital open on Sundays?",
    answer:
      "No. Sarojana Eye Hospital is closed on Sundays. We are open Monday to Saturday during morning and evening clinics.",
  },
  {
    question: "Do you treat children's eye conditions?",
    answer:
      "Yes. Our paediatric eye care services cover vision screening, squint, lazy eye (amblyopia), and general eye concerns in children with a child-friendly approach.",
  },
  {
    question: "What laser procedures are available?",
    answer:
      "We offer LASIK, TRANS PRK, SMARTSURF, INTRALASE, and SMILE — advanced laser vision correction options for myopia, hyperopia, and astigmatism at our Hasthinapuram centre.",
  },
] as const;
