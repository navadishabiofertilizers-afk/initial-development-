import type { Metadata } from "next";
import ProductDetailPage from "../components/ProductDetailPage";

export const metadata: Metadata = {
  title: "Bhoomi Samrata Premium Vermicompost | Nava Disha Bio Fertilizers",
  description: "Bhoomi Samrata Premium Vermicompost from Nava Disha Bio Fertilizers. Contact us for product characteristics, availability, and suitable use.",
  alternates: { canonical: "https://navadishabiofertilizers.com/bhoomi-samrata-premium" },
  openGraph: {
    title: "Bhoomi Samrata Premium Vermicompost | Nava Disha Bio Fertilizers",
    description: "Contact Nava Disha Bio Fertilizers for characteristics, availability, and suitable use of Bhoomi Samrata Premium Vermicompost.",
    url: "https://navadishabiofertilizers.com/bhoomi-samrata-premium",
    siteName: "Nava Disha Bio Fertilizers",
    type: "website",
    images: [{ url: "/images/photos/production-beds.jpg", width: 1080, height: 1022, alt: "Vermicompost production beds at Biradar Farm; premium product packaging is not shown" }]
  }
};

export default function BhoomiSamrataPremiumPage() {
  return <ProductDetailPage productId="bhoomi-samrata-premium" />;
}
