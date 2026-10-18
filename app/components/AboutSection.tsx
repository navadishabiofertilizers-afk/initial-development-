"use client";

import React from "react";
import Image from "next/image";
import { UserCheck, MapPin, CheckCircle, Factory, Layers, SunMedium, Sparkles } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { BUSINESS_INFO } from "../lib/siteData";

export default function AboutSection() {
  const { t } = useLanguage();

  const processSteps = [
    {
      num: "01",
      icon: Layers,
      title: t("about_step1_title"),
      desc: t("about_step1_desc")
    },
    {
      num: "02",
      icon: SunMedium,
      title: t("about_step2_title"),
      desc: t("about_step2_desc")
    },
    {
      num: "03",
      icon: Sparkles,
      title: t("about_step3_title"),
      desc: t("about_step3_desc")
    },
    {
      num: "04",
      icon: Factory,
      title: t("about_step4_title"),
      desc: t("about_step4_desc")
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-stone-100 border border-stone-300 text-stone-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <UserCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>{t("about_tag")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b4332] tracking-tight">
            {t("about_title")}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            {t("about_subtitle")}
          </p>
        </div>

        {/* Business Story & Proprietor Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden bg-[#1b4332] p-3 shadow-xl">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/farm/shaded-farm-setup.svg"
                  alt="Nava Disha Farm Setup - Biradar Farm, Muchandi"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Founder Tag Card */}
              <div className="bg-[#122b20] rounded-2xl p-4 mt-3 border border-emerald-800/80 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                      {t("about_owner_title")}
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      {BUSINESS_INFO.owner}
                    </h3>
                  </div>
                  <div className="text-right text-xs text-emerald-300">
                    <span className="block font-medium">Nava Disha Bio Fertilizers</span>
                    <span className="text-emerald-400/80">मुचंडी, जत, सांगली</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Mission & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-emerald-800 font-semibold text-xs sm:text-sm bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 max-w-full">
              <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>{t("about_location_label")}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 leading-snug">
              {t("about_headline")}
            </h3>

            <p className="text-stone-700 text-base leading-relaxed">
              {t("about_p1")}
            </p>

            <p className="text-stone-700 text-base leading-relaxed">
              {t("about_p2")}
            </p>

            {/* Core Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-stone-800">
                  {t("about_commitment_1")}
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-stone-800">
                  {t("about_commitment_2")}
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-stone-800">
                  {t("about_commitment_3")}
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-stone-800">
                  {t("about_commitment_4")}
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* 4-Step Production Timeline */}
        <div className="mt-8 pt-12 border-t border-stone-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-[#1b4332]">
              {t("about_process_title")}
            </h3>
            <p className="text-sm text-stone-600 mt-2">
              {t("about_process_subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div
                  key={idx}
                  className="relative bg-[#fcfbf7] rounded-2xl p-6 border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-black text-stone-300">
                        {step.num}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-[#1b4332] mb-2 leading-snug">
                      {step.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-200/60 text-[11px] font-semibold text-emerald-700">
                    {t("about_step_prefix")} {step.num}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
