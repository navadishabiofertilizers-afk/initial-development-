import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "./components/LanguageContext";
import { BUSINESS_INFO } from "./lib/siteData";

export const viewport: Viewport = {
  themeColor: "#1b4332",
  width: "device-width",
  initialScale: 1
};

export const metadata: Metadata = {
  metadataBase: new URL("https://navadishabiofertilizers.com"),
  title: "Nava Disha Bio Fertilizers | गांडूळ खत व जिवंत गांडूळ | Muchandi, Jath, Sangli",
  description:
    "Nava Disha Bio Fertilizers (संचालक: भीमाशंकर बिरादार), बिरादार फार्म, मुचंडी, तालुका जत, जिल्हा सांगली, महाराष्ट्र, भारत. उत्तम प्रतीचे अस्सल गांडूळ खत (Vermicompost / Gandul Khat), जिवंत गांडूळ व स्टार्टर कल्चर थेट फार्मवरून उपलब्ध.",
  keywords: [
    "Nava Disha Bio Fertilizers",
    "Biradar Farm Muchandi",
    "Gandul Khat Jath",
    "Vermicompost Sangli",
    "Live Earthworms Maharashtra",
    "गांडूळ खत जत",
    "गांडूळ खत सांगली",
    "सेंद्रिय खत मुचंडी",
    "Bhimashankar Biradar",
    "Earthworm starter culture",
    "Organic farming Maharashtra"
  ],
  authors: [{ name: BUSINESS_INFO.owner }],
  creator: BUSINESS_INFO.name,
  publisher: BUSINESS_INFO.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    title: "Nava Disha Bio Fertilizers | अस्सल गांडूळ खत व जिवंत गांडूळ | Biradar Farm, Muchandi",
    description:
      "उच्च दर्जाचे अस्सल गांडूळ खत, जिवंत गांडूळ व स्टार्टर कल्चर. संचालक: भीमाशंकर बिरादार, बिरादार फार्म, मुचंडी, तालुका जत, जिल्हा सांगली, महाराष्ट्र, भारत.",
    url: "https://navadishabiofertilizers.com",
    siteName: "Nava Disha Bio Fertilizers",
    locale: "mr_IN",
    alternateLocale: ["hi_IN", "en_IN"],
    type: "website",
    images: [
      {
        url: "/images/farm/compost-in-hands.svg",
        width: 800,
        height: 600,
        alt: "Nava Disha Bio Fertilizers Organic Vermicompost in Hands"
      }
    ]
  },
  icons: {
    icon: "/images/farm/brand-logo.svg",
    apple: "/images/farm/brand-logo.svg"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS_INFO.name,
  description:
    "Producer of authentic organic vermicompost, active live earthworms, and starter cultures for sustainable agriculture at Biradar Farm, Muchandi, Taluka Jath, District Sangli, Maharashtra, India.",
  founder: {
    "@type": "Person",
    name: BUSINESS_INFO.owner
  },
  telephone: BUSINESS_INFO.whatsapp,
  email: BUSINESS_INFO.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Biradar Farm, Muchandi",
    addressLocality: "Taluka Jath",
    addressRegion: "District Sangli, Maharashtra",
    addressCountry: "India"
  },
  sameAs: [BUSINESS_INFO.socials.instagram],
  priceRange: "Contact for price",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Bank Transfer",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Maharashtra, India"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#faf9f6] text-stone-900 selection:bg-emerald-200 selection:text-emerald-950">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
