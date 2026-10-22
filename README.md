# Nava Disha Bio Fertilizers (नवा दिशा बायो फर्टिलायझर्स)

Production-ready, highly polished, mobile-first website for **Nava Disha Bio Fertilizers**, an authentic vermicompost and live earthworm initiative led by **Bhimashankar Biradar** in **Biradar Farm, Muchandi, Taluka Jath, District Sangli, Maharashtra, India**.

---

## 🌾 Verified Business Details

- **Business Name**: Nava Disha Bio Fertilizers
- **Proprietor / Owner**: Bhimashankar Biradar
- **Location**: Biradar Farm, Muchandi, Taluka Jath, District Sangli, Maharashtra, India
- **WhatsApp Business**: [+91 9096948271](https://wa.me/919096948271)
- **Email**: navadishabiofertilizers@gmail.com
- **Instagram**: [nava_disha_biofertilizers](https://www.instagram.com/nava_disha_biofertilizers/)
- **Languages**: Marathi (Default), Hindi, English
- **Delivery Policy**: Local farm dispatch and courier/transport (subject to confirmation and location)
- **Pricing Policy**: "Contact for price" (transparency policy — prices customized by volume and transport)

---

## 🚀 Key Implemented Features

1. **Multilingual Architecture (Marathi, Hindi, English)**:
   - Full translation coverage across navigation, hero, products, farm gallery, about, benefits, FAQs, enquiry form, contact, and footer.
   - Native Devanagari typography with state management and localStorage preference persistence.
   - Default language set to Marathi (`mr`).

2. **WhatsApp Enquiry System**:
   - Reusable URL-encoded helper with pre-filled product enquiries:
     - **Live Earthworms**: Pre-fills enquiry for price, availability, and delivery options.
     - **Vermicompost**: Pre-fills enquiry for pack sizes, prices, and delivery options.
     - **Starter Culture**: Pre-fills enquiry for price and delivery details.
     - **Bulk Orders**: Pre-fills enquiry for quantity-based pricing and transport details.
   - Interactive client-side validated form (Name, 10-digit mobile, product, quantity, location, optional notes) that generates a formatted WhatsApp message and opens the chat directly.
   - Prominent notification explaining that users must press "Send" in WhatsApp.
   - Floating WhatsApp action button with pulsing indicator.

3. **Farm Photo Gallery & Fallbacks**:
   - High-fidelity SVG farm placeholders in `public/images/farm/` representing:
     - Compost held in hands (`compost-in-hands.svg`)
     - Compost handling & screening (`compost-handling.svg`)
     - Production beds (`production-beds.svg`)
     - Shaded farm setup (`shaded-farm-setup.svg`)
   - Interactive lightbox modal for full-size inspection.

4. **Agronomic Integrity & About Process**:
   - 4-step natural production cycle (Pre-conditioning, Shaded beds, Biological digestion, Sieving & Packing).
   - Scientifically accurate benefits of vermicompost (soil aeration, microbial life, water retention, balanced nutrients).
   - Zero invented certifications, guaranteed yields, opening hours, or false prices.

5. **SEO & Performance Optimization**:
   - Dynamic OpenGraph and Twitter cards.
   - Schema.org JSON-LD `LocalBusiness` structured data.
   - Automated `sitemap.ts` and `robots.ts`.
   - Semantic HTML5 tags and mobile-first responsive layout.

---

## 🛠️ Local Setup & Run

### Prerequisites
- Node.js (v18.x or v20.x or v22.x)
- npm or yarn or pnpm

### Steps
```bash
# 1. Navigate to the project directory
cd /home/eazyway/nava-disha-bio-fertilizers

# 2. Install dependencies (if not already installed)
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📷 How to Add / Replace Real Farm Photos

Drop your original photos into the `public/images/farm/` folder matching these filenames:

| Photo Subject | File Location |
| :--- | :--- |
| **Compost held in hands** | `public/images/farm/compost-in-hands.jpg` (or `.svg` / `.png`) |
| **Compost handling & screening** | `public/images/farm/compost-handling.jpg` (or `.svg` / `.png`) |
| **Production beds** | `public/images/farm/production-beds.jpg` (or `.svg` / `.png`) |
| **Shaded farm setup** | `public/images/farm/shaded-farm-setup.jpg` (or `.svg` / `.png`) |

If using `.jpg` or `.png` extensions, update the corresponding `image` and `src` paths in `app/lib/siteData.ts`.

---

## 📝 Updating Products & Contact Information

- **Business & Contact Details**: Update `app/lib/siteData.ts` (phone number, email, address, social links).
- **Translations & Copy**: Modify `app/lib/translations.ts` to adjust Marathi, Hindi, or English copy.
- **WhatsApp Pre-filled Messages**: Adjust strings in `app/lib/whatsapp.ts`.

---

## ☁️ Free-Tier Deployment (Vercel)

The website is optimized for one-click deployment on [Vercel](https://vercel.com):

1. Initialize git and push to your GitHub / GitLab repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Nava Disha Bio Fertilizers website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com), select **Add New Project**, and import the repository.
3. Framework Preset will automatically detect **Next.js**.
4. Click **Deploy**. Vercel will build and assign an SSL-enabled `.vercel.app` domain for free.
