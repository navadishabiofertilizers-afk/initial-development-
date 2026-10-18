"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { buildWhatsAppUrl, PRODUCT_WHATSAPP_MESSAGES } from "../lib/whatsapp";

export default function FaqSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: t("faq1_q"), a: t("faq1_a") },
    { q: t("faq2_q"), a: t("faq2_a") },
    { q: t("faq3_q"), a: t("faq3_a") },
    { q: t("faq4_q"), a: t("faq4_a") },
    { q: t("faq5_q"), a: t("faq5_a") }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappUrl = buildWhatsAppUrl(PRODUCT_WHATSAPP_MESSAGES.general);

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#fbfbfa] text-stone-900 border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-stone-100 border border-stone-300 text-stone-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
            <span>{t("faq_tag")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b4332] tracking-tight">
            {t("faq_title")}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            {t("faq_subtitle")}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-stone-200/90 shadow-sm overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-[#1b4332] hover:bg-stone-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 bg-emerald-100" : ""}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-stone-600 leading-relaxed border-t border-stone-100 bg-[#fdfdfc] animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Callout */}
        <div className="mt-12 bg-emerald-50 border border-emerald-200 rounded-3xl p-6 sm:p-8 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-left space-y-1">
            <h3 className="text-lg font-bold text-emerald-950">
              {t("faq_cta_title")}
            </h3>
            <p className="text-sm text-emerald-800">
              {t("faq_cta_desc")}
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1faa4f] text-gray-950 font-bold px-5 py-3 rounded-xl shadow transition-all shrink-0 active:scale-95 text-sm"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>{t("faq_cta_button")}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
