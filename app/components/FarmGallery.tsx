"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Camera, Maximize2, X, Info } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { GALLERY_ITEMS } from "../lib/siteData";
import { TranslationDictionary } from "../lib/translations";

export default function FarmGallery() {
  const { t } = useLanguage();
  const [activeItem, setActiveItem] = useState<(typeof GALLERY_ITEMS)[0] | null>(null);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#f4f1ea] text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#2d6a4f]/10 border border-[#2d6a4f]/30 text-[#1b4332] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5 text-[#2d6a4f]" />
            <span>प्रत्यक्ष फार्म युनिट</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b4332] tracking-tight">
            {t("gallery_title")}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            {t("gallery_subtitle")}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item) => {
            const title = t(item.titleKey as keyof TranslationDictionary) as string;
            const desc = t(item.descKey as keyof TranslationDictionary) as string;
            const tag = t(item.tagKey as keyof TranslationDictionary) as string;

            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="group relative bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* Image Box */}
                <div className="relative h-60 w-full overflow-hidden bg-stone-100">
                  <Image
                    src={item.src}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Corner Tag */}
                  <div className="absolute top-3 left-3 bg-[#1b4332]/85 text-emerald-100 text-[11px] font-semibold px-2.5 py-1 rounded-md shadow">
                    {tag}
                  </div>

                  {/* Zoom Icon Button */}
                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 text-stone-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Caption Details */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-stone-900 text-sm group-hover:text-emerald-700 transition-colors">
                      {title}
                    </h3>
                    <p className="mt-1 text-xs text-stone-500 leading-relaxed line-clamp-2">
                      {desc}
                    </p>
                  </div>
                  <div className="mt-3 text-[11px] font-medium text-emerald-700 flex items-center gap-1">
                    <span>तपशील पाहण्यासाठी क्लिक करा</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Guidance Notice */}
        <div className="mt-10 bg-emerald-50 border border-emerald-200 rounded-xl p-4 max-w-2xl mx-auto flex items-center gap-3 text-xs text-emerald-900">
          <Info className="w-4 h-4 text-emerald-700 shrink-0" />
          <p>
            मूळ फार्म छायाचित्रे (हातातील खत, हाताळणी, बेड्स व शेडनेट) जत फार्मवरून थेट घेतली आहेत. मूळ फाइल्स <code className="bg-emerald-100 px-1 py-0.5 rounded font-mono text-emerald-950">public/images/farm/</code> मध्ये समाविष्ट केल्यावर त्वरित दिसतील.
          </p>
        </div>

        {/* Lightbox Modal */}
        {activeItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setActiveItem(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-stone-900 rounded-3xl overflow-hidden border border-stone-700 shadow-2xl text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-stone-200 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-80 sm:h-96 w-full bg-black">
                <Image
                  src={activeItem.src}
                  alt={t(activeItem.titleKey as keyof TranslationDictionary) as string}
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div className="p-6 bg-stone-950 border-t border-stone-800">
                <div className="inline-block text-xs font-semibold text-emerald-400 mb-1">
                  {t(activeItem.tagKey as keyof TranslationDictionary)}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {t(activeItem.titleKey as keyof TranslationDictionary)}
                </h3>
                <p className="mt-2 text-sm text-stone-300 leading-relaxed">
                  {t(activeItem.descKey as keyof TranslationDictionary)}
                </p>
                <div className="mt-4 pt-3 border-t border-stone-800 text-xs text-stone-400 flex items-center justify-between">
                  <span>Nava Disha Bio Fertilizers • Jath, Sangli</span>
                  <button
                    type="button"
                    onClick={() => setActiveItem(null)}
                    className="text-emerald-400 hover:underline"
                  >
                    बंद करा (Close)
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
