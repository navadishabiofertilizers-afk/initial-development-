export const BUSINESS_INFO = {
  name: "Nava Disha Bio Fertilizers",
  owner: "Bhimashankar Biradar",
  address: {
    farm: "Biradar Farm",
    village: "Muchandi",
    taluka: "Taluka Jath",
    district: "District Sangli",
    state: "Maharashtra",
    country: "India",
    city: "Jath",
    formatted: "Biradar Farm, Muchandi, Taluka Jath, District Sangli, Maharashtra, India"
  },
  whatsapp: "+91 9096948271",
  whatsappRaw: "919096948271",
  email: "navadishabiofertilizers@gmail.com",
  socials: {
    instagram: "https://www.instagram.com/nava_disha_biofertilizers/",
    facebook: null,
    youtube: null
  },
  delivery: {
    modes: ["Local delivery", "Courier / Transport"],
    terms: "Subject to confirmation and location"
  },
  pricePolicy: "Contact for price"
} as const;

export interface ProductItem {
  id: string;
  nameKey: string;
  descriptionKey: string;
  featuresKey: string;
  whatsappKey: "earthworms" | "vermicompost" | "starterCulture" | "bulkOrders" | "bhoomiSamrata" | "bhoomiSamrataPremium" | string;
  image: string;
  badgeKey: string;
  slug?: string;
  targetRoute?: string;
}

// The Two Distinct Flagship Products of Nava Disha Bio Fertilizers
export const TWO_MAIN_PRODUCTS: ProductItem[] = [
  {
    id: "bhoomi-samrata",
    slug: "bhoomi-samrata",
    nameKey: "prod_bs_name",
    descriptionKey: "prod_bs_desc",
    featuresKey: "prod_bs_features",
    whatsappKey: "bhoomiSamrata",
    image: "/images/photos/compost-hands.jpg",
    badgeKey: "prod_bs_badge",
    targetRoute: "/bhoomi-samrata"
  },
  {
    id: "bhoomi-samrata-premium",
    slug: "bhoomi-samrata-premium",
    nameKey: "prod_bsp_name",
    descriptionKey: "prod_bsp_desc",
    featuresKey: "prod_bsp_features",
    whatsappKey: "bhoomiSamrataPremium",
    image: "/images/photos/production-beds.jpg",
    badgeKey: "prod_bsp_badge",
    targetRoute: "/bhoomi-samrata-premium"
  }
];

export const PRODUCTS: ProductItem[] = [
  {
    id: "live-earthworms",
    nameKey: "prod_worms_name",
    descriptionKey: "prod_worms_desc",
    featuresKey: "prod_worms_features",
    whatsappKey: "earthworms",
    image: "/images/photos/earthworms-culture.jpg",
    badgeKey: "prod_worms_badge"
  },
  {
    id: "vermicompost",
    nameKey: "prod_compost_name",
    descriptionKey: "prod_compost_desc",
    featuresKey: "prod_compost_features",
    whatsappKey: "vermicompost",
    image: "/images/photos/compost-hands.jpg",
    badgeKey: "prod_compost_badge"
  },
  {
    id: "starter-culture",
    nameKey: "prod_culture_name",
    descriptionKey: "prod_culture_desc",
    featuresKey: "prod_culture_features",
    whatsappKey: "starterCulture",
    image: "/images/photos/earthworms-culture.jpg",
    badgeKey: "prod_culture_badge"
  },
  {
    id: "bulk-orders",
    nameKey: "prod_bulk_name",
    descriptionKey: "prod_bulk_desc",
    featuresKey: "prod_bulk_features",
    whatsappKey: "bulkOrders",
    image: "/images/photos/production-beds.jpg",
    badgeKey: "prod_bulk_badge"
  }
];

export const GALLERY_ITEMS = [
  {
    id: "gallery-1",
    src: "/images/photos/compost-hands.jpg",
    titleKey: "gallery_hands_title",
    descKey: "gallery_hands_desc",
    tagKey: "gallery_hands_tag"
  },
  {
    id: "gallery-2",
    src: "/images/photos/farmer-field.jpg",
    titleKey: "gallery_handling_title",
    descKey: "gallery_handling_desc",
    tagKey: "gallery_handling_tag"
  },
  {
    id: "gallery-3",
    src: "/images/photos/production-beds.jpg",
    titleKey: "gallery_beds_title",
    descKey: "gallery_beds_desc",
    tagKey: "gallery_beds_tag"
  },
  {
    id: "gallery-4",
    src: "/images/photos/earthworms-culture.jpg",
    titleKey: "gallery_setup_title",
    descKey: "gallery_setup_desc",
    tagKey: "gallery_setup_tag"
  }
];
