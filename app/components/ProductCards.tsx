"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, CheckCircle2, Truck, ShieldAlert } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { PRODUCTS } from "../lib/siteData";
import { buildWhatsAppUrl, PRODUCT_WHATSAPP_MESSAGES } from "../lib/whatsapp";
import { TranslationDictionary } from "../lib/translations";

export default function ProductCards() {
  const { t } = useLanguage();

  return (
    <section id="products" className="py-16 sm:py-24 bg-[#fbfbfa] text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-100/80 border border-emerald-300 text-emerald-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <span>{t("products_tag")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b4332] tracking-tight">
            {t("products_title")}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            {t("products_subtitle")}
          </p>
        </div>

        {/* 4 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => {
            const productName = t(product.nameKey as keyof TranslationDictionary) as string;
            const productDesc = t(product.descriptionKey as keyof TranslationDictionary) as string;
            const productFeatures = (t(product.featuresKey as keyof TranslationDictionary) as string[]) || [];
            const badgeText = t(product.badgeKey as keyof TranslationDictionary) as string;
            
            // Generate exact WhatsApp pre-filled URL as per specification
            const prefilledText = PRODUCT_WHATSAPP_MESSAGES[product.whatsappKey];
            const whatsappUrl = buildWhatsAppUrl(prefilledText);

            return (
              <div
                key={product.id}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5"
              >
                {/* Product Image Preview */}
                <div className="relative h-52 w-full bg-stone-100 overflow-hidden border-b border-stone-100">
                  <Image
                    src={product.image}
                    alt={productName}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-[#1b4332]/90 backdrop-blur-sm text-emerald-100 text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    {badgeText}
                  </div>
                </div>

                {/* Product Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-[#1b4332] leading-snug group-hover:text-emerald-700 transition-colors">
                      {productName}
                    </h3>
                    
                    <p className="text-stone-600 text-sm leading-relaxed line-clamp-3">
                      {productDesc}
                    </p>

                    {/* Features List */}
                    <ul className="pt-2 space-y-2 border-t border-stone-100 text-xs text-stone-700">
                      {productFeatures.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing Notice & Action */}
                  <div className="pt-4 border-t border-stone-100 space-y-3">
                    {/* Price policy strictly without invented prices */}
                    <div className="flex items-center justify-between bg-stone-50 px-3.5 py-2 rounded-xl border border-stone-200">
                      <span className="text-xs text-stone-500 font-medium">{t("products_rate_label")}</span>
                      <span className="text-sm font-bold text-[#704829] tracking-tight">
                        {t("products_price_label")}
                      </span>
                    </div>

                    {/* Delivery Note */}
                    <div className="flex items-center gap-1.5 text-[11px] text-stone-500 px-1">
                      <Truck className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <span>{t("products_delivery_note")}</span>
                    </div>

                    {/* WhatsApp Action Button with exact prefilled text */}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1faa4f] text-gray-950 font-bold text-sm py-3 px-4 rounded-xl shadow hover:shadow-md transition-all active:scale-[0.98]"
                    >
                      <MessageCircle className="w-4 h-4 fill-current text-gray-950" />
                      <span>{t("products_enquire_button")}</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Note on Transparency */}
        <div className="mt-12 bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 max-w-4xl mx-auto text-amber-900">
          <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm space-y-1">
            <p className="font-semibold text-amber-950">
              {t("transparency_title")}
            </p>
            <p className="text-amber-800 leading-relaxed">
              {t("transparency_text")}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
