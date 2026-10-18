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
  whatsapp: "+91 87676 53352",
  whatsappRaw: "918767653352",
  email: "navadishabiofertilizers@gmail.com",
  socials: {
    instagram: "https://www.instagram.com/nava_disha_foundation_muchandi?cplk=ZmcxbHA1MDZreXdq",
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
  whatsappKey: "earthworms" | "vermicompost" | "starterCulture" | "bulkOrders";
  image: string;
  badgeKey: string;
}

export const PRODUCTS: ProductItem[] = [
  {
    id: "live-earthworms",
    nameKey: "prod_worms_name",
    descriptionKey: "prod_worms_desc",
    featuresKey: "prod_worms_features",
    whatsappKey: "earthworms",
    image: "/images/farm/production-beds.svg",
    badgeKey: "prod_worms_badge"
  },
  {
    id: "vermicompost",
    nameKey: "prod_compost_name",
    descriptionKey: "prod_compost_desc",
    featuresKey: "prod_compost_features",
    whatsappKey: "vermicompost",
    image: "/images/farm/compost-in-hands.svg",
    badgeKey: "prod_compost_badge"
  },
  {
    id: "starter-culture",
    nameKey: "prod_culture_name",
    descriptionKey: "prod_culture_desc",
    featuresKey: "prod_culture_features",
    whatsappKey: "starterCulture",
    image: "/images/farm/compost-handling.svg",
    badgeKey: "prod_culture_badge"
  },
  {
    id: "bulk-orders",
    nameKey: "prod_bulk_name",
    descriptionKey: "prod_bulk_desc",
    featuresKey: "prod_bulk_features",
    whatsappKey: "bulkOrders",
    image: "/images/farm/shaded-farm-setup.svg",
    badgeKey: "prod_bulk_badge"
  }
];

export const GALLERY_ITEMS = [
  {
    id: "gallery-1",
    src: "/images/farm/compost-in-hands.svg",
    titleKey: "gallery_hands_title",
    descKey: "gallery_hands_desc",
    tagKey: "gallery_hands_tag"
  },
  {
    id: "gallery-2",
    src: "/images/farm/compost-handling.svg",
    titleKey: "gallery_handling_title",
    descKey: "gallery_handling_desc",
    tagKey: "gallery_handling_tag"
  },
  {
    id: "gallery-3",
    src: "/images/farm/production-beds.svg",
    titleKey: "gallery_beds_title",
    descKey: "gallery_beds_desc",
    tagKey: "gallery_beds_tag"
  },
  {
    id: "gallery-4",
    src: "/images/farm/shaded-farm-setup.svg",
    titleKey: "gallery_setup_title",
    descKey: "gallery_setup_desc",
    tagKey: "gallery_setup_tag"
  }
];
