"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Menu, X, Globe, MapPin } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { Language } from "../lib/translations";
import { buildWhatsAppUrl, PRODUCT_WHATSAPP_MESSAGES } from "../lib/whatsapp";
import { BUSINESS_INFO } from "../lib/siteData";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const languages: { code: Language; label: string; short: string }[] = [
    { code: "mr", label: "मराठी", short: "मराठी" },
    { code: "hi", label: "हिंदी", short: "हिंदी" },
    { code: "en", label: "English", short: "EN" }
  ];

  const quickWhatsAppUrl = buildWhatsAppUrl(PRODUCT_WHATSAPP_MESSAGES.general);

  const navLinks = [
    { href: "#home", label: t("nav_home") as string },
    { href: "#products", label: t("nav_products") as string },
    { href: "#gallery", label: t("nav_gallery") as string },
    { href: "#about", label: t("nav_about") as string },
    { href: "#benefits", label: t("nav_benefits") as string },
    { href: "#faq", label: t("nav_faq") as string },
    { href: "#contact", label: t("nav_contact") as string }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#1b4332]/95 backdrop-blur-md border-b border-[#2d6a4f]/50 text-white transition-all shadow-md">
      {/* Top micro bar for location and direct contact */}
      <div className="bg-[#122b20] border-b border-[#24523d] py-1.5 px-4 text-xs text-emerald-200">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.district}, {BUSINESS_INFO.address.state}</span>
            <span className="hidden sm:inline text-emerald-400/50">•</span>
            <span className="hidden sm:inline text-emerald-300 font-medium">संचालक: {BUSINESS_INFO.owner}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden md:inline text-emerald-300/80">स्थानिक व कुरिअर वितरण उपलब्ध</span>
            <a
              href={`tel:${BUSINESS_INFO.whatsappRaw}`}
              className="hover:text-emerald-100 font-semibold flex items-center gap-1"
            >
              📞 {BUSINESS_INFO.whatsapp}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Name */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-400 bg-emerald-950 shrink-0 shadow">
              <Image
                src="/images/farm/brand-logo.svg"
                alt="Nava Disha Bio Fertilizers Logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                Nava Disha
              </span>
              <span className="text-xs uppercase tracking-widest text-emerald-300 font-medium">
                Bio Fertilizers • जत
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-emerald-100 hover:text-white hover:bg-emerald-800/40 rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Language Selector & WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-[#132c21] p-1 rounded-xl border border-emerald-800/80">
              <Globe className="w-4 h-4 text-emerald-400 ml-1.5 mr-1 shrink-0" />
              {languages.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => setLanguage(item.code)}
                  aria-label={`Switch to ${item.label}`}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                    language === item.code
                      ? "bg-emerald-600 text-white shadow-sm font-bold"
                      : "text-emerald-300 hover:text-white hover:bg-emerald-900/60"
                  }`}
                >
                  {item.short}
                </button>
              ))}
            </div>

            {/* Quick WhatsApp Action Button */}
            <a
              href={quickWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-gray-950 font-bold text-sm px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4 fill-current text-gray-950" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            {/* Mobile language switch */}
            <div className="flex bg-[#132c21] p-0.5 rounded-lg border border-emerald-800/60">
              {languages.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => setLanguage(item.code)}
                  className={`px-2 py-1 text-[11px] font-semibold rounded-md ${
                    language === item.code
                      ? "bg-emerald-600 text-white font-bold"
                      : "text-emerald-300"
                  }`}
                >
                  {item.short}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-emerald-900/80 text-emerald-200 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#163628] border-b border-emerald-800 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-emerald-800/80">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-emerald-100 hover:bg-emerald-800/50 rounded-lg"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href={quickWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-gray-950 font-bold py-3 rounded-xl shadow-md text-sm"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>{t("hero_cta_whatsapp")}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
