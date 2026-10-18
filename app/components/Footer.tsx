"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { InstagramIcon } from "./Icons";
import { useLanguage } from "./LanguageContext";
import { BUSINESS_INFO } from "../lib/siteData";
import { Language } from "../lib/translations";
import { buildWhatsAppUrl, PRODUCT_WHATSAPP_MESSAGES } from "../lib/whatsapp";

export default function Footer() {
  const { language, setLanguage, t } = useLanguage();
  const whatsappUrl = buildWhatsAppUrl(PRODUCT_WHATSAPP_MESSAGES.general);

  const languages: { code: Language; label: string }[] = [
    { code: "mr", label: "मराठी" },
    { code: "hi", label: "हिंदी" },
    { code: "en", label: "English" }
  ];

  return (
    <footer className="bg-[#122b20] text-emerald-100 border-t border-[#1e4836] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-emerald-400 bg-emerald-950 shrink-0">
                <Image
                  src="/images/farm/brand-logo.svg"
                  alt="Nava Disha Bio Fertilizers Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight block">
                  Nava Disha
                </span>
                <span className="text-xs text-emerald-400 tracking-wider uppercase font-semibold">
                  Bio Fertilizers • जत
                </span>
              </div>
            </div>

            <p className="text-sm text-emerald-200/80 leading-relaxed">
              {t("footer_tagline")}
            </p>

            <div className="pt-2 text-xs text-emerald-300/70 space-y-1">
              <p>संचालक: <strong className="text-emerald-200">{BUSINESS_INFO.owner}</strong></p>
              <p>स्थान: {BUSINESS_INFO.address.formatted}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-emerald-400 pl-2">
              {t("footer_quick_links")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">{t("nav_home")}</a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">{t("nav_products")}</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">{t("nav_gallery")}</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">{t("nav_about")}</a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-white transition-colors">{t("nav_benefits")}</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">{t("nav_faq")}</a>
              </li>
              <li>
                <a href="#enquire" className="hover:text-white transition-colors">{t("nav_enquire_now")}</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-emerald-400 pl-2">
              {t("footer_contact_info")}
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white text-emerald-200"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>{BUSINESS_INFO.whatsapp}</span>
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-2 hover:text-white text-emerald-200 break-all"
              >
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{BUSINESS_INFO.email}</span>
              </a>

              <div className="flex items-start gap-2 text-emerald-200">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.district}, {BUSINESS_INFO.address.state}</span>
              </div>

              <a
                href={BUSINESS_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white text-emerald-200"
              >
                <InstagramIcon className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Instagram Profile</span>
              </a>
            </div>
          </div>

          {/* Language Switcher in Footer */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-emerald-400 pl-2">
              {t("lang_select_label")}
            </h4>
            <div className="flex flex-col gap-2">
              {languages.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => setLanguage(item.code)}
                  className={`px-3 py-2 text-xs font-semibold rounded-xl text-left transition-all ${
                    language === item.code
                      ? "bg-emerald-600 text-white font-bold"
                      : "bg-[#163829] text-emerald-300 hover:bg-[#1a4432] hover:text-white"
                  }`}
                >
                  {item.label} {language === item.code ? "✓" : ""}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/60 text-center sm:text-left">
          <p>{t("footer_legal")}</p>
          <p className="flex items-center gap-1.5">
            <span>सेंद्रिय शेती • जत, सांगली, महाराष्ट्र</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
