"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { buildWhatsAppUrl, PRODUCT_WHATSAPP_MESSAGES } from "../lib/whatsapp";

export default function FloatingWhatsApp() {
  const { t } = useLanguage();
  const whatsappUrl = buildWhatsAppUrl(PRODUCT_WHATSAPP_MESSAGES.general);

  return (
    <aside aria-label="WhatsApp Quick Contact" className="fixed bottom-6 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Nava Disha Bio Fertilizers on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-gray-950 shadow-2xl hover:bg-[#20ba59] transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400"
      >
        {/* Pulsing ring animation */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="relative z-10 w-7 h-7 sm:w-8 sm:h-8 fill-current text-gray-950" />

        {/* Hover label */}
        <span className="absolute right-full mr-3.5 top-1/2 -translate-y-1/2 whitespace-nowrap bg-stone-900/90 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
          {t("floating_whatsapp_label")}
        </span>
      </a>
    </aside>
  );
}
