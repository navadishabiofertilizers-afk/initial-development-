"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";
import EnquiryForm from "./EnquiryForm";
import { useLanguage } from "./LanguageContext";
import { TWO_MAIN_PRODUCTS } from "../lib/siteData";
import { buildWhatsAppUrl, PRODUCT_WHATSAPP_MESSAGES, ProductMessageKey } from "../lib/whatsapp";
import { TranslationDictionary } from "../lib/translations";

export default function ProductDetailPage({ productId }: { productId: "bhoomi-samrata" | "bhoomi-samrata-premium" }) {
  const { t } = useLanguage();
  const product = TWO_MAIN_PRODUCTS.find((item) => item.id === productId)!;
  const productName = t(product.nameKey as keyof TranslationDictionary) as string;
  const description = t(product.descriptionKey as keyof TranslationDictionary) as string;
  const features = t(product.featuresKey as keyof TranslationDictionary) as string[];
  const isPremium = product.id === "bhoomi-samrata-premium";
  const otherProduct = TWO_MAIN_PRODUCTS.find((item) => item.id !== product.id)!;
  const otherProductRoute = otherProduct.targetRoute!;
  const whatsappMessage = PRODUCT_WHATSAPP_MESSAGES[product.whatsappKey as ProductMessageKey];

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="bg-[#f4f1ea] py-8 sm:py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-7 flex flex-wrap items-center gap-2 text-sm text-stone-600">
              <Link href="/" className="rounded underline-offset-4 hover:text-emerald-900 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700">
                {t("breadcrumb_home")}
              </Link>
              <span aria-hidden="true">/</span>
              <Link href="/#products" className="rounded underline-offset-4 hover:text-emerald-900 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700">
                {t("breadcrumb_products")}
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="font-medium text-emerald-950">{productName}</span>
            </nav>

            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
              <div className="order-2 lg:order-1">
                <span className="inline-flex rounded-full border border-emerald-800/20 bg-white px-3 py-1 text-xs font-semibold text-emerald-900">
                  {t(product.badgeKey as keyof TranslationDictionary)}
                </span>
                <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#1b4332] sm:text-4xl lg:text-5xl">
                  {productName}
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-stone-700 sm:text-lg">{description}</p>
                <p className="mt-4 text-sm leading-relaxed text-stone-600">{t("prod_contact_us_for_details")}</p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={buildWhatsAppUrl(whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 font-bold text-gray-950 shadow-sm transition-colors hover:bg-[#20ba59] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800 focus-visible:ring-offset-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    {t("products_enquire_button")}
                  </a>
                  <Link
                    href={otherProductRoute}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-emerald-900/25 bg-white px-5 py-3 font-semibold text-emerald-950 transition-colors hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800 focus-visible:ring-offset-2"
                  >
                    {t("other_product_cta")} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <figure className="order-1 lg:order-2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-emerald-900/10 bg-white shadow-xl">
                  <Image
                    src={product.image}
                    alt={isPremium ? "Vermicompost production beds at Biradar Farm" : "Vermicompost held in hands at the farm"}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                {isPremium && <figcaption className="mt-2 text-xs leading-relaxed text-stone-600">{t("prod_premium_image_note")}</figcaption>}
              </figure>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div className="rounded-3xl border border-emerald-900/10 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-bold text-[#1b4332]">{t("prod_specs_title")}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-stone-700">
                {features.map((feature) => <li key={feature} className="flex gap-3"><span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-700" />{feature}</li>)}
              </ul>
              <div className="mt-6 border-t border-stone-200 pt-5">
                <h3 className="font-semibold text-stone-900">{t("prod_app_guidance_title")}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{t("prod_app_guidance_contact")}</p>
              </div>
              <p className="mt-5 rounded-xl bg-amber-50 p-4 text-sm leading-relaxed text-amber-950">{t("prod_pack_contact")}</p>
            </div>
            <div className="scroll-mt-28" id="product-enquiry">
              <EnquiryForm
                key={product.id}
                fixedProductName={isPremium ? "Bhoomi Samrata Premium Vermicompost" : "Bhoomi Samrata Vermicompost"}
                fixedProductLabel={productName}
              />
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 rounded font-semibold text-emerald-900 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700">
            <ArrowLeft className="h-4 w-4" /> {t("back_to_home")}
          </Link>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
