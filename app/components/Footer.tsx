"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { InstagramIcon } from "./Icons";
import { useLanguage } from "./LanguageContext";
import { BUSINESS_INFO } from "../lib/siteData";
import { Language } from "../lib/translations";
import { buildWhatsAppUrl, PRODUCT_WHATSAPP_MESSAGES } from "../lib/whatsapp";

const COPYRIGHT_YEAR = 2026;

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
                  {t("nav_brand_sub")}
                </span>
              </div>
            </div>

            <p className="text-sm text-emerald-200/80 leading-relaxed">
              {t("footer_tagline")}
            </p>

            <div className="pt-2 text-xs text-emerald-300/70 space-y-1">
              <p>{t("proprietor_label")} <strong className="text-emerald-200">{BUSINESS_INFO.owner}</strong></p>
              <p>{t("location_label")} {BUSINESS_INFO.address.formatted}</p>
            </div>
          </div>

          {/* Distinct Products Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-emerald-400 pl-2">
              {t("nav_products")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/bhoomi-samrata" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-400">🌿</span>
                  <span>{t("nav_prod_bs")}</span>
                </Link>
              </li>
              <li>
                <Link href="/bhoomi-samrata-premium" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-amber-300">⭐</span>
                  <span>{t("nav_prod_bsp")}</span>
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/#products" className="text-xs text-emerald-300/70 hover:text-white transition-colors">
                  {t("hero_cta_explore")} →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-emerald-400 pl-2">
              {t("footer_quick_links")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/#home" className="hover:text-white transition-colors">{t("nav_home")}</Link>
              </li>
              <li>
                <Link href="/#gallery" className="hover:text-white transition-colors">{t("nav_gallery")}</Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-white transition-colors">{t("nav_about")}</Link>
              </li>
              <li>
                <Link href="/#benefits" className="hover:text-white transition-colors">{t("nav_benefits")}</Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">{t("nav_faq")}</Link>
              </li>
              <li>
                <Link href="/#enquire" className="hover:text-white transition-colors">{t("nav_enquire_now")}</Link>
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
                className="flex items-center gap-2 hover:text-white text-emerald-200"
              >
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="truncate">{BUSINESS_INFO.email}</span>
              </a>

              <div className="flex items-start gap-2 text-emerald-200/90 text-xs leading-relaxed">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address.formatted}</span>
              </div>

              {BUSINESS_INFO.socials.instagram && (
                <div className="pt-2">
                  <a
                    href={BUSINESS_INFO.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-pink-300 hover:text-pink-200"
                  >
                    <InstagramIcon className="w-4 h-4 text-pink-400" />
                    <span>Instagram Profile</span>
                  </a>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Language Switcher & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/60">
          <p>© {COPYRIGHT_YEAR} {BUSINESS_INFO.name}. All rights reserved.</p>

          {/* Duplicate Language Toggle in Footer */}
          <div className="flex items-center gap-2">
            <span className="text-emerald-400/80">{t("lang_select_label")}:</span>
            <div className="flex bg-[#0d2118] p-1 rounded-lg border border-emerald-800">
              {languages.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => setLanguage(item.code)}
                  className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                    language === item.code
                      ? "bg-emerald-700 text-white font-bold"
                      : "text-emerald-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <p className="text-[11px] text-emerald-400/50 text-center sm:text-right">
            {t("footer_bottom_note")}
          </p>
        </div>
      </div>
    </footer>
  );
}
