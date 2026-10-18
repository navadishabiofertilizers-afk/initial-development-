"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Copy, ExternalLink, HelpCircle } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { buildEnquiryMessage, buildWhatsAppUrl, EnquiryFormData } from "../lib/whatsapp";

export default function EnquiryForm() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState<EnquiryFormData>({
    customerName: "",
    mobileNumber: "",
    product: "",
    quantity: "",
    deliveryLocation: "",
    message: ""
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<string>("");

  const productOptions = [
    { value: "Live Earthworms (जिवंत गांडूळ)", label: "जिवंत गांडूळ (Live Earthworms)" },
    { value: "Vermicompost (गांडूळ खत)", label: "गांडूळ खत (Vermicompost / Gandul Khat)" },
    { value: "Starter Culture (गांडूळ स्टार्टर कल्चर)", label: "गांडूळ स्टार्टर कल्चर (Starter Culture)" },
    { value: "Bulk Agricultural Order (घाऊक शेती ऑर्डर)", label: "घाऊक शेती ऑर्डर (Bulk Agricultural Order)" },
    { value: "General Enquiry (इतर विचारणा)", label: "इतर चौकशी / सल्ला (General Enquiry)" }
  ];

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.customerName.trim() || formData.customerName.trim().length < 2) {
      newErrors.customerName = t("form_validation_name") as string;
    }

    // Clean phone number (strip whitespace and +91 prefix for length check)
    const cleanPhone = formData.mobileNumber.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.mobileNumber = t("form_validation_mobile") as string;
    }

    if (!formData.product || formData.product.trim().length === 0) {
      newErrors.product = t("form_validation_product") as string;
    }

    if (!formData.quantity.trim()) {
      newErrors.quantity = t("form_validation_quantity") as string;
    }

    if (!formData.deliveryLocation.trim()) {
      newErrors.deliveryLocation = t("form_validation_location") as string;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = buildEnquiryMessage(formData);
    const url = buildWhatsAppUrl(message);

    setSubmittedMessage(message);
    setSubmittedUrl(url);

    // Open WhatsApp in new tab
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(submittedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section id="enquire" className="py-16 sm:py-24 bg-white text-stone-900 border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Form Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100/90 border border-emerald-300 text-emerald-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Send className="w-3.5 h-3.5 text-emerald-700" />
            <span>थेट व्हॉट्सॲप चौकशी</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b4332] tracking-tight">
            {t("form_title")}
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed">
            {t("form_subtitle")}
          </p>
        </div>

        {/* Main Form Container */}
        <div className="bg-[#fcfbf7] rounded-3xl border border-stone-300/80 p-6 sm:p-10 shadow-lg">
          
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Customer Name */}
              <div>
                <label htmlFor="customerName" className="block text-sm font-bold text-stone-800 mb-2">
                  {t("form_name_label")}
                </label>
                <input
                  type="text"
                  id="customerName"
                  value={formData.customerName}
                  onChange={(e) => {
                    setFormData({ ...formData, customerName: e.target.value });
                    if (errors.customerName) setErrors({ ...errors, customerName: undefined });
                  }}
                  placeholder={t("form_name_placeholder") as string}
                  className={`w-full px-4 py-3 rounded-xl border bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.customerName
                      ? "border-red-500 focus:ring-red-400"
                      : "border-stone-300 focus:border-emerald-600 focus:ring-emerald-200"
                  }`}
                />
                {errors.customerName && (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.customerName}</span>
                  </p>
                )}
              </div>

              {/* Mobile Number */}
              <div>
                <label htmlFor="mobileNumber" className="block text-sm font-bold text-stone-800 mb-2">
                  {t("form_mobile_label")}
                </label>
                <input
                  type="tel"
                  id="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={(e) => {
                    setFormData({ ...formData, mobileNumber: e.target.value });
                    if (errors.mobileNumber) setErrors({ ...errors, mobileNumber: undefined });
                  }}
                  placeholder={t("form_mobile_placeholder") as string}
                  className={`w-full px-4 py-3 rounded-xl border bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.mobileNumber
                      ? "border-red-500 focus:ring-red-400"
                      : "border-stone-300 focus:border-emerald-600 focus:ring-emerald-200"
                  }`}
                />
                {errors.mobileNumber && (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.mobileNumber}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Product Dropdown */}
              <div>
                <label htmlFor="product" className="block text-sm font-bold text-stone-800 mb-2">
                  {t("form_product_label")}
                </label>
                <select
                  id="product"
                  value={formData.product}
                  onChange={(e) => {
                    setFormData({ ...formData, product: e.target.value });
                    if (errors.product) setErrors({ ...errors, product: undefined });
                  }}
                  className={`w-full px-4 py-3 rounded-xl border bg-white text-stone-900 focus:outline-none focus:ring-2 transition-all ${
                    errors.product
                      ? "border-red-500 focus:ring-red-400"
                      : "border-stone-300 focus:border-emerald-600 focus:ring-emerald-200"
                  }`}
                >
                  <option value="">{t("form_product_placeholder")}</option>
                  {productOptions.map((opt, i) => (
                    <option key={i} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                {errors.product && (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.product}</span>
                  </p>
                )}
              </div>

              {/* Quantity */}
              <div>
                <label htmlFor="quantity" className="block text-sm font-bold text-stone-800 mb-2">
                  {t("form_quantity_label")}
                </label>
                <input
                  type="text"
                  id="quantity"
                  value={formData.quantity}
                  onChange={(e) => {
                    setFormData({ ...formData, quantity: e.target.value });
                    if (errors.quantity) setErrors({ ...errors, quantity: undefined });
                  }}
                  placeholder={t("form_quantity_placeholder") as string}
                  className={`w-full px-4 py-3 rounded-xl border bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.quantity
                      ? "border-red-500 focus:ring-red-400"
                      : "border-stone-300 focus:border-emerald-600 focus:ring-emerald-200"
                  }`}
                />
                {errors.quantity && (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.quantity}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Delivery Location */}
            <div>
              <label htmlFor="deliveryLocation" className="block text-sm font-bold text-stone-800 mb-2">
                {t("form_location_label")}
              </label>
              <input
                type="text"
                id="deliveryLocation"
                value={formData.deliveryLocation}
                onChange={(e) => {
                  setFormData({ ...formData, deliveryLocation: e.target.value });
                  if (errors.deliveryLocation) setErrors({ ...errors, deliveryLocation: undefined });
                }}
                placeholder={t("form_location_placeholder") as string}
                className={`w-full px-4 py-3 rounded-xl border bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.deliveryLocation
                    ? "border-red-500 focus:ring-red-400"
                    : "border-stone-300 focus:border-emerald-600 focus:ring-emerald-200"
                }`}
              />
              {errors.deliveryLocation && (
                <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.deliveryLocation}</span>
                </p>
              )}
            </div>

            {/* Optional Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-stone-800 mb-2">
                {t("form_message_label")}
              </label>
              <textarea
                id="message"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={t("form_message_placeholder") as string}
                className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 transition-all resize-y"
              />
            </div>

            {/* Transparency Instruction Banner */}
            <div className="bg-emerald-50 border border-emerald-300/80 rounded-2xl p-4 flex items-start gap-3 text-xs sm:text-sm text-emerald-950">
              <HelpCircle className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                {t("form_direct_whatsapp_note")}
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1faa4f] text-gray-950 font-bold text-base sm:text-lg py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Send className="w-5 h-5 fill-current" />
              <span>{t("form_submit_button")}</span>
            </button>
          </form>

          {/* Post Submission Confirmation & Helper Modal / Card */}
          {submittedUrl && (
            <div className="mt-8 pt-6 border-t border-stone-300/80 bg-white rounded-2xl p-6 border shadow-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <div className="space-y-2 flex-1">
                  <h4 className="text-base font-bold text-emerald-950">
                    {t("form_success_modal_title")}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600">
                    {t("form_success_modal_body")}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <a
                      href={submittedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#25D366] text-gray-950 font-bold text-xs px-4 py-2 rounded-xl shadow"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>व्हॉट्सॲप पुन्हा उघडा (Open WhatsApp)</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopy}
                      className="inline-flex items-center gap-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold px-4 py-2 rounded-xl border border-stone-300"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copied ? "कॉपी झाले! (Copied)" : "मेसेज कॉपी करा (Copy Text)"}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
