import { HOSPITAL, SITE_URL } from "@/lib/constants/hospital";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { SERVICES } from "@/lib/constants/services";

export function LocalBusinessSchema() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "@id": `${SITE_URL}/#clinic`,
      name: HOSPITAL.name,
      alternateName: "Sarojana Eye Hospitals",
      description:
        "Best eye hospital in Hasthinapuram, Hyderabad offering LASIK, SMILE, TRANS PRK, SMARTSURF, INTRALASE, cataract surgery, glaucoma treatment, retina care and comprehensive ophthalmology services near Nagarjuna Sagar Road.",
      url: SITE_URL,
      telephone: `+91${HOSPITAL.phone}`,
      email: HOSPITAL.email,
      image: [
        `${SITE_URL}/images/banner.png`,
        `${SITE_URL}/images/footer.png`,
        ...SERVICES.slice(0, 6).map((s) => `${SITE_URL}${s.image}`),
      ],
      logo: `${SITE_URL}/images/logo.png`,
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Plot No. 6/W, Hasthinapuram Central, Near Nagarjuna School, Nagarjuna Sagar Road",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500079",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: HOSPITAL.coordinates.lat,
        longitude: HOSPITAL.coordinates.lng,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "10:00",
          closes: "13:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "17:00",
          closes: "20:00",
        },
      ],
      medicalSpecialty: ["https://schema.org/Ophthalmology"],
      areaServed: [
        {
          "@type": "City",
          name: "Hyderabad",
        },
        {
          "@type": "Place",
          name: "Hasthinapuram",
        },
        {
          "@type": "Place",
          name: "Nagarjuna Sagar Road",
        },
      ],
      availableLanguage: ["en", "te", "hi"],
      hasMap: HOSPITAL.mapsUrl,
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: ["Cash", "UPI", "Debit Card", "Credit Card"],
      sameAs: [
        HOSPITAL.social.facebook,
        HOSPITAL.social.instagram,
        HOSPITAL.social.youtube,
        HOSPITAL.social.gmb,
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: `+91${HOSPITAL.phone}`,
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Telugu", "Hindi"],
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Eye Care Services",
        itemListElement: SERVICES.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: service.title,
            description: service.shortDesc,
            url: `${SITE_URL}/services/${service.slug}`,
            image: `${SITE_URL}${service.image}`,
          },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: HOSPITAL.name,
      description:
        "Official website of Sarojana Eye Hospital, Hasthinapuram, Hyderabad — LASIK, SMILE, TRANS PRK, cataract, glaucoma and comprehensive eye care.",
      publisher: { "@id": `${SITE_URL}/#clinic` },
      inLanguage: "en-IN",
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: HOSPITAL.name,
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo.png`,
      sameAs: [
        HOSPITAL.social.facebook,
        HOSPITAL.social.instagram,
        HOSPITAL.social.youtube,
        HOSPITAL.social.gmb,
      ],
    },
  ];

  return <SchemaOrg data={data} />;
}
