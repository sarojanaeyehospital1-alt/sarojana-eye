import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { CallButton } from "@/components/shared/CallButton";
import { MobileBottomBar } from "@/components/shared/MobileBottomBar";
import { StickyBookButton } from "@/components/shared/StickyBookButton";
import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { NavigationLoaderProvider } from "@/components/shared/NavigationLoaderProvider";
import { PrefetchRoutes } from "@/components/shared/PrefetchRoutes";
import { HOSPITAL, SITE_URL } from "@/lib/constants/hospital";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${HOSPITAL.name} | Best Eye Hospital in Hasthinapuram, Hyderabad`,
    template: `%s | ${HOSPITAL.name}`,
  },
  description:
    "Sarojana Eye Hospital in Hasthinapuram, Hyderabad offers LASIK, cataract surgery, glaucoma treatment & comprehensive eye care. 20+ years | 25,000+ patients.",
  applicationName: HOSPITAL.name,
  keywords: [
    "eye hospital in Hasthinapuram Hyderabad",
    "best eye hospital Hasthinapuram",
    "LASIK surgery Hyderabad",
    "cataract surgery Hasthinapuram",
    "Sarojana Eye Hospital",
    "eye doctor near Nagarjuna Sagar Road",
  ],
  icons: {
    icon: [
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/images/favicon.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon.png", type: "image/png", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
    ],
    shortcut: [{ url: "/favicon-32.png", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: HOSPITAL.name,
    images: [
      {
        url: "/images/banner.png",
        width: 1200,
        height: 630,
        alt: `${HOSPITAL.name} Hasthinapuram Hyderabad`,
      },
    ],
  },
  other: {
    "geo.region": "IN-TG",
    "geo.placename": "Hasthinapuram, Hyderabad",
    "geo.position": `${HOSPITAL.coordinates.lat};${HOSPITAL.coordinates.lng}`,
    ICBM: `${HOSPITAL.coordinates.lat}, ${HOSPITAL.coordinates.lng}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#1A7A8A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex min-h-screen flex-col font-body antialiased pb-16 sm:pb-0">
        <LocalBusinessSchema />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <NavigationLoaderProvider />
        <PrefetchRoutes />
        <WhatsAppButton />
        <CallButton />
        <StickyBookButton />
        <MobileBottomBar />
        <ScrollToTop />
      </body>
    </html>
  );
}
