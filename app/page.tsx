import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCards from "./components/ProductCards";
import FarmGallery from "./components/FarmGallery";
import AboutSection from "./components/AboutSection";
import BenefitsSection from "./components/BenefitsSection";
import FaqSection from "./components/FaqSection";
import EnquiryForm from "./components/EnquiryForm";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <>
      {/* 1. Responsive Header & Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Four Product Cards */}
        <ProductCards />

        {/* 4. Real Farm Photo Gallery */}
        <FarmGallery />

        {/* 5. About the Business & Production Process */}
        <AboutSection />

        {/* 6. Accurate Scientific Benefits of Vermicompost */}
        <BenefitsSection />

        {/* 7. Frequently Asked Questions */}
        <FaqSection />

        {/* 8. Direct WhatsApp Enquiry Form */}
        <EnquiryForm />

        {/* 9. Contact Section with Location, WhatsApp, Email, Instagram */}
        <ContactSection />
      </main>

      {/* 10. Footer & Floating WhatsApp CTA */}
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
