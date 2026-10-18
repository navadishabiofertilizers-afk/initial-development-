"use client";

import React from "react";
import { Wind, Droplets, Microscope, Sparkles, CheckCircle2 } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function BenefitsSection() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Wind,
      title: t("benefit1_title"),
      desc: t("benefit1_desc"),
      color: "emerald"
    },
    {
      icon: Microscope,
      title: t("benefit2_title"),
      desc: t("benefit2_desc"),
      color: "amber"
    },
    {
      icon: Droplets,
      title: t("benefit3_title"),
      desc: t("benefit3_desc"),
      color: "blue"
    },
    {
      icon: Sparkles,
      title: t("benefit4_title"),
      desc: t("benefit4_desc"),
      color: "green"
    }
  ];

  return (
    <section id="benefits" className="py-16 sm:py-24 bg-[#1b4332] text-white relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8c5e3c]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#2d6a4f]/60 border border-emerald-400/30 text-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>कृषी विज्ञान आधारित तथ्ये</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t("benefits_title")}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-emerald-100/80 leading-relaxed">
            {t("benefits_subtitle")}
          </p>
        </div>

        {/* 4 Scientifically Sound Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-[#143325]/90 border border-emerald-700/60 rounded-3xl p-6 sm:p-7 shadow-lg hover:shadow-2xl hover:border-emerald-500/80 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-emerald-800/80 border border-emerald-600/50 flex items-center justify-center text-emerald-300 mb-6 shadow-inner">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                    {benefit.title}
                  </h3>

                  <p className="text-emerald-100/75 text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-emerald-800/50 flex items-center gap-2 text-xs text-emerald-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>शास्त्रीयदृष्ट्या सिद्ध फायदा</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scientific Agronomic Note */}
        <div className="mt-14 max-w-3xl mx-auto text-center bg-[#122b20] border border-emerald-800 rounded-2xl p-4 sm:p-5 text-xs text-emerald-200/90 leading-relaxed">
          <p>
            टीप: गांडूळ खताचे परिणाम जमिनीचा प्रकार, हवामान, सिंचन व्यवस्था व पिकाच्या स्थितीवर अवलंबून असतात. आम्ही शेतीचे कोणतेही अतिरंजित किंवा अवास्तव हमी देत नसून, नैसर्गिक सेंद्रिय घटकांचे प्रमाण वाढवून जमिनीची मूलभूत सुपीकता टिकवण्यावर भर देतो.
          </p>
        </div>

      </div>
    </section>
  );
}
