"use client";

import React, { useEffect, useState } from "react";
import { Sparkles, X, MessageCircle } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { buildWhatsAppUrl, PRODUCT_WHATSAPP_MESSAGES } from "../lib/whatsapp";

export default function OnlineOrderingAnnouncement() {
  const { t } = useLanguage();
  const [dismissed, setDismissed] = useState(false);
  const [importantContentVisible, setImportantContentVisible] = useState(false);

  useEffect(() => {
    const observedSections = document.querySelectorAll("#products, #enquire, #product-enquiry");
    if (observedSections.length === 0) return;

    const visibleSections = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visibleSections.add(entry.target);
        else visibleSections.delete(entry.target);
      }
      setImportantContentVisible(visibleSections.size > 0);
    });

    observedSections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  if (dismissed || importantContentVisible) return null;

  const quickWhatsAppUrl = buildWhatsAppUrl(PRODUCT_WHATSAPP_MESSAGES.general);

  return (
    <aside
      aria-label={t("announcement_text") as string}
      role="status"
      className="fixed bottom-24 left-3 sm:left-6 z-40 w-[min(17rem,calc(100vw-7rem))] bg-[#122b20]/95 backdrop-blur-md text-white border border-emerald-500/40 rounded-2xl shadow-xl p-3"
    >
      <div className="flex items-start gap-3">
        <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 shrink-0 mt-0.5">
          <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
        </div>

        <div className="flex-1 pr-1">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300">
              {t("announcement_label") as string}
            </span>
          </div>

          <p className="text-xs text-emerald-100/90 leading-snug">
            {t("announcement_text") as string}
          </p>

          <div className="mt-2.5 flex items-center gap-2">
            <a
              href={quickWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-gray-950 font-bold text-xs px-3 py-1.5 rounded-lg shadow transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current text-gray-950" />
              <span>{t("announcement_cta") as string}</span>
            </a>

            <button
              type="button"
              onClick={() => setDismissed(true)}
              className="text-xs text-emerald-200 hover:text-white px-2 py-1 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
            >
              {t("announcement_close") as string}
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label={t("announcement_close") as string}
          className="text-emerald-200 hover:text-white p-1 rounded-lg hover:bg-emerald-900/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
}
