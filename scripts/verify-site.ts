import { TRANSLATIONS } from "../app/lib/translations";
import { PRODUCT_WHATSAPP_MESSAGES, buildWhatsAppUrl, buildEnquiryMessage } from "../app/lib/whatsapp";
import { PRODUCTS, BUSINESS_INFO } from "../app/lib/siteData";
import fs from "fs";
import path from "path";

console.log("🧪 Starting Automated Site Verification Tests...\n");

let passed = 0;
let failed = 0;

function assert(condition: boolean, message: string) {
  if (condition) {
    console.log(`  ✅ PASS: ${message}`);
    passed++;
  } else {
    console.error(`  ❌ FAIL: ${message}`);
    failed++;
  }
}

// Test 1: Verify Business Details & Updated Location
assert(BUSINESS_INFO.whatsappRaw === "918767653352", "Raw WhatsApp number is 918767653352");
assert(BUSINESS_INFO.owner === "Bhimashankar Biradar", "Owner is Bhimashankar Biradar");
assert(
  BUSINESS_INFO.address.formatted === "Biradar Farm, Muchandi, Taluka Jath, District Sangli, Maharashtra, India",
  "Formatted address is exact: Biradar Farm, Muchandi, Taluka Jath, District Sangli, Maharashtra, India"
);
assert(BUSINESS_INFO.address.farm === "Biradar Farm", "Farm is Biradar Farm");
assert(BUSINESS_INFO.address.village === "Muchandi", "Village is Muchandi");
assert(BUSINESS_INFO.address.taluka === "Taluka Jath", "Taluka is Taluka Jath");
assert(BUSINESS_INFO.address.district === "District Sangli", "District is District Sangli");

// Test 2: Verify Exact Pre-filled Messages
const expectedMessages = {
  earthworms: "Hello Nava Disha Bio Fertilizers, I am interested in buying live earthworms. Please share the price, availability and delivery options.",
  vermicompost: "Hello Nava Disha Bio Fertilizers, I am interested in buying vermicompost. Please share pack sizes, prices and delivery options.",
  starterCulture: "Hello Nava Disha Bio Fertilizers, I am interested in earthworm starter culture. Please share the price and delivery details.",
  bulkOrders: "Hello Nava Disha Bio Fertilizers, I would like to enquire about a bulk agricultural order. Please share quantity-based pricing and transport details."
};

for (const [key, msg] of Object.entries(expectedMessages)) {
  const k = key as keyof typeof expectedMessages;
  assert(PRODUCT_WHATSAPP_MESSAGES[k] === msg, `Exact prefilled message for ${key}`);
  const url = buildWhatsAppUrl(PRODUCT_WHATSAPP_MESSAGES[k]);
  assert(url.startsWith("https://wa.me/918767653352?text="), `WhatsApp URL format for ${key}`);
  assert(decodeURIComponent(url.split("text=")[1]) === msg, `URL encoding roundtrip matches for ${key}`);
}

// Test 3: Form Enquiry Message Generation
const testForm = {
  customerName: "Ramesh Patil",
  mobileNumber: "9876543210",
  product: "Vermicompost",
  quantity: "1 Ton",
  deliveryLocation: "Muchandi, Jath",
  message: "Need quote for sugarcane"
};
const enquiryMsg = buildEnquiryMessage(testForm);
assert(enquiryMsg.includes("Ramesh Patil"), "Enquiry contains customer name");
assert(enquiryMsg.includes("9876543210"), "Enquiry contains mobile number");
assert(enquiryMsg.includes("Vermicompost"), "Enquiry contains product name");
assert(enquiryMsg.includes("1 Ton"), "Enquiry contains quantity");
assert(enquiryMsg.includes("Muchandi, Jath"), "Enquiry contains delivery location");

// Test 4: Verify Translations Completeness & Parity
const languages = ["mr", "hi", "en"] as const;
const mrKeys = Object.keys(TRANSLATIONS.mr);

assert(mrKeys.length >= 80, `Marathi has comprehensive key count (${mrKeys.length} keys)`);

for (const lang of languages) {
  const langKeys = Object.keys(TRANSLATIONS[lang]);
  assert(langKeys.length === mrKeys.length, `${lang} has complete dictionary key parity (${langKeys.length} keys)`);
  for (const k of mrKeys) {
    const val = (TRANSLATIONS[lang] as unknown as Record<string, unknown>)[k];
    if (!val) {
      assert(false, `Key '${k}' missing or empty in ${lang}`);
    }
  }
}

// Test 5: Verify Product Count
assert(PRODUCTS.length === 4, "Configured exactly 4 core products");

// Test 6: Verify Farm Placeholder Images Exist
const requiredImages = [
  "compost-in-hands.svg",
  "compost-handling.svg",
  "production-beds.svg",
  "shaded-farm-setup.svg",
  "brand-logo.svg"
];

for (const img of requiredImages) {
  const p = path.join(process.cwd(), "public/images/farm", img);
  assert(fs.existsSync(p), `Image file exists: public/images/farm/${img}`);
}

// Test 7: Verify Social Links Policy (No invented Facebook or YouTube)
assert(BUSINESS_INFO.socials.facebook === null, "Facebook is null / unconfigured");
assert(BUSINESS_INFO.socials.youtube === null, "YouTube is null / unconfigured");
assert(BUSINESS_INFO.socials.instagram.includes("nava_disha_foundation_muchandi"), "Instagram link configured correctly");

console.log(`\n📊 Test Summary: ${passed} Passed, ${failed} Failed.`);
if (failed > 0) process.exit(1);
