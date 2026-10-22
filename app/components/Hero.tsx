"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Sprout, ShieldCheck, Truck, ArrowRight, MapPin, Award } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { buildWhatsAppUrl, PRODUCT_WHATSAPP_MESSAGES } from "../lib/whatsapp";
import { BUSINESS_INFO } from "../lib/siteData";

export default function Hero() {
  const { t } = useLanguage();
  const whatsappUrl = buildWhatsAppUrl(PRODUCT_WHATSAPP_MESSAGES.general);

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#1b4332] via-[#244f3b] to-[#163628] text-white pt-8 pb-16 lg:py-20">
      {/* Decorative background blurs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8c5e3c]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 bg-[#122b20]/90 border border-emerald-400/30 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium text-emerald-200 shadow-sm">
              <Sprout className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t("hero_tag")}</span>
            </div>

            {/* Main Agricultural Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight sm:leading-tight">
              <span className="block text-emerald-100/90 text-2xl sm:text-3xl md:text-4xl font-semibold mb-1">
                {t("hero_title_prefix")}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-200 to-amber-200">
                {t("hero_title_highlight")}
              </span>
            </h1>

            {/* Subtitle with Farm identity */}
            <p className="text-base sm:text-lg text-emerald-100/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t("hero_subtitle")}
            </p>

            {/* Verified Location & Owner Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 text-sm text-emerald-200">
              <div className="flex items-center gap-1.5 bg-emerald-900/60 border border-emerald-700/50 px-3 py-1.5 rounded-lg max-w-md text-left">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm leading-tight">{t("hero_location_badge")}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-emerald-900/60 border border-emerald-700/50 px-3 py-1.5 rounded-lg">
                <Award className="w-4 h-4 text-amber-300 shrink-0" />
                <span>{t("proprietor_label")} {BUSINESS_INFO.owner}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1faa4f] text-gray-950 font-bold text-base sm:text-lg px-7 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 active:translate-y-0"
              >
                <MessageCircle className="w-6 h-6 fill-current text-gray-950 shrink-0" />
                <span>{t("hero_cta_whatsapp")}</span>
              </a>

              <Link
                href="/#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-900/80 hover:bg-emerald-800 text-white font-semibold text-base px-6 py-4 rounded-2xl border border-emerald-600/40 transition-all hover:border-emerald-500"
              >
                <span>{t("hero_cta_explore")}</span>
                <ArrowRight className="w-4 h-4 text-emerald-300" />
              </Link>
            </div>

            {/* Value Proposition Badges */}
            <div className="pt-6 border-t border-emerald-800/60 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <div className="w-9 h-9 rounded-xl bg-emerald-800/80 flex items-center justify-center text-emerald-300 shrink-0 border border-emerald-700">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-emerald-100">{t("hero_badge_organic")}</span>
              </div>

              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <div className="w-9 h-9 rounded-xl bg-emerald-800/80 flex items-center justify-center text-emerald-300 shrink-0 border border-emerald-700">
                  <Sprout className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-emerald-100">{t("hero_badge_direct")}</span>
              </div>

              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <div className="w-9 h-9 rounded-xl bg-emerald-800/80 flex items-center justify-center text-emerald-300 shrink-0 border border-emerald-700">
                  <Truck className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-emerald-100">{t("hero_badge_delivery")}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase Card with Real Photography */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Card Container */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#122b20] to-[#1d4332] border border-emerald-500/40 p-3 shadow-2xl">
                
                {/* Hero Showcase Image */}
                <div className="relative h-72 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden shadow-inner border border-emerald-700/50">
                  <Image
                    src="/images/photos/farmer-field.jpg"
                    alt="Bhimashankar Biradar at Biradar Farm, Muchandi"
                    fill
                    priority
                    className="object-cover"
                  />
                  
                  {/* Floating Micro Badge */}
                  <div className="absolute top-3 left-3 bg-gray-950/85 backdrop-blur-md border border-emerald-500/40 px-3 py-1.5 rounded-xl text-xs font-semibold text-emerald-300 flex items-center gap-1.5 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{t("hero_sample_badge")}</span>
                  </div>

                  <div className="absolute bottom-3 right-3 bg-emerald-950/90 backdrop-blur-md border border-emerald-500/40 px-3 py-1.5 rounded-xl text-xs text-white flex items-center gap-1 shadow-lg">
                    <span>{t("hero_farm_badge")}</span>
                  </div>
                </div>

                {/* Bottom Card Summary */}
                <div className="p-4 bg-[#143224] rounded-2xl mt-3 border border-emerald-800/60">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-emerald-300 uppercase tracking-wider font-semibold">
                        Nava Disha Bio Fertilizers
                      </p>
                      <p className="text-base font-bold text-white mt-0.5">
                        {t("hero_card_product")}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-[#8c5e3c]/40 text-amber-200 border border-[#8c5e3c] px-2.5 py-1 rounded-lg text-xs font-semibold">
                        {t("products_price_label")}
                      </span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
