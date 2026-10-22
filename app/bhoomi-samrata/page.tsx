import type { Metadata } from "next";
import ProductDetailPage from "../components/ProductDetailPage";

export const metadata: Metadata = {
  title: "Bhoomi Samrata Vermicompost | Nava Disha Bio Fertilizers",
  description: "Bhoomi Samrata Vermicompost from Biradar Farm, Muchandi. Contact Nava Disha Bio Fertilizers for availability and product details.",
  alternates: { canonical: "https://navadishabiofertilizers.com/bhoomi-samrata" },
  openGraph: {
    title: "Bhoomi Samrata Vermicompost | Nava Disha Bio Fertilizers",
    description: "Bhoomi Samrata Vermicompost from Biradar Farm, Muchandi. Contact us for availability and product details.",
    url: "https://navadishabiofertilizers.com/bhoomi-samrata",
    siteName: "Nava Disha Bio Fertilizers",
    type: "website",
    images: [{ url: "/images/photos/compost-hands.jpg", width: 1080, height: 606, alt: "Vermicompost held in hands at the farm" }]
  }
};

export default function BhoomiSamrataPage() {
  return <ProductDetailPage productId="bhoomi-samrata" />;
}
