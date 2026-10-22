"use client";

import React from "react";
import { MessageCircle, Mail, MapPin, Truck, PhoneCall, ExternalLink } from "lucide-react";
import { InstagramIcon } from "./Icons";
import { useLanguage } from "./LanguageContext";
import { BUSINESS_INFO } from "../lib/siteData";
import { buildWhatsAppUrl, PRODUCT_WHATSAPP_MESSAGES } from "../lib/whatsapp";

export default function ContactSection() {
  const { t } = useLanguage();
  const whatsappUrl = buildWhatsAppUrl(PRODUCT_WHATSAPP_MESSAGES.general);

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#f4f1ea] text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100/90 border border-emerald-300 text-emerald-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <PhoneCall className="w-3.5 h-3.5 text-emerald-700" />
            <span>{t("contact_tag")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b4332] tracking-tight">
            {t("contact_title")}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            {t("contact_subtitle")}
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* WhatsApp Card */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                {t("contact_whatsapp_label")}
              </span>
              <p className="text-lg font-bold text-stone-900 mt-1">
                {BUSINESS_INFO.whatsapp}
              </p>
              <p className="text-xs text-stone-500 mt-2">
                {t("contact_whatsapp_desc")}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1faa4f] text-gray-950 font-bold text-xs py-2.5 px-4 rounded-xl shadow-sm transition-all"
              >
                <span>{t("contact_action_whatsapp")}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-800 mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-amber-800 uppercase tracking-wider">
                {t("contact_email_label")}
              </span>
              <p className="text-sm font-bold text-stone-900 mt-1 break-all">
                {BUSINESS_INFO.email}
              </p>
              <p className="text-xs text-stone-500 mt-2">
                {t("contact_email_desc")}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100">
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="w-full flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs py-2.5 px-4 rounded-xl border border-stone-300 transition-all"
              >
                <span>{t("contact_action_email")}</span>
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-800 mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-blue-800 uppercase tracking-wider">
                {t("contact_location_label")}
              </span>
              <p className="text-sm font-bold text-stone-900 mt-1 leading-snug">
                {BUSINESS_INFO.address.formatted}
              </p>
              <p className="text-xs text-stone-500 mt-2">
                {t("proprietor_label")} {BUSINESS_INFO.owner}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100">
              <span className="inline-flex items-center gap-1.5 text-xs text-stone-600 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>{t("contact_visit_badge")}</span>
              </span>
            </div>
          </div>

          {/* Instagram Card */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-100 flex items-center justify-center text-rose-600 mb-4">
                <InstagramIcon className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-rose-700 uppercase tracking-wider">
                {t("contact_instagram_label")}
              </span>
              <p className="text-sm font-bold text-stone-900 mt-1">
                @nava_disha_biofertilizers
              </p>
              <p className="text-xs text-stone-500 mt-2">
                {t("contact_instagram_desc")}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100">
              <a
                href={BUSINESS_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow-sm transition-all"
              >
                <span>{t("contact_action_instagram")}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Delivery Terms & Transport Banner */}
        <div className="mt-12 bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 shrink-0">
            <Truck className="w-7 h-7" />
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-stone-900">
              {t("contact_transport_title")}
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {t("contact_transport_desc")}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
