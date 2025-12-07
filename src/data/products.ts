export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

// ============================================
// 🎯 EDIT YOUR PRODUCTS HERE
// Just update this array to change your links!
// ============================================

export const products: Product[] = [
  {
    id: "1",
    title: "Wood Smart Multipurpose Foldable Laptop Table",
    description: "Laptop Table with Cup Holder, Study Table, Bed Table, Breakfast Table, Foldable and Portable/Ergonomic & Rounded Edges/Non-Slip Legs (Black), 59 cm, 8 cm",
    image: "https://m.media-amazon.com/images/I/71xiQD+sh8L._SL1500_.jpg",
    link: "https://amzn.to/4pyekPR",
  },
  {
    id: "2",
    title: "2000 ml Silicone Bottle  (Pack of 3, Multicolor)",
    description: "SeaRegal 3 pcs Unbreakable Water Bottle with Motivational Time Marker",
    image: "/photos/bottle.jpeg",
    link: "https://fkrt.co/5UY8aA",
  },
  {
    id: "3",
    title: "Logitech MX Master 3S Mouse",
    description: "Precision tracking with ultra-quiet clicks.",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=200&h=200&fit=crop",
    link: "https://example.com/affiliate-mouse",
  },
  {
    id: "4",
    title: "Samsung T7 Portable SSD 1TB",
    description: "Ultra-fast external storage with USB 3.2.",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=200&h=200&fit=crop",
    link: "https://example.com/affiliate-ssd",
  },
  {
    id: "5",
    title: "Anker 737 Power Bank",
    description: "140W output, 24,000mAh capacity for laptops.",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=200&h=200&fit=crop",
    link: "https://example.com/affiliate-powerbank",
  },
  {
    id: "6",
    title: "BenQ ScreenBar Monitor Light",
    description: "Reduce eye strain with asymmetric lighting.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    link: "https://example.com/affiliate-screenbar",
  },
];

// ============================================
// 🎯 EDIT YOUR PROFILE INFO HERE
// ============================================

export const profileInfo = {
  name: "TechDeals",
  tagline: "Curated Tech & Exclusive Deals",
  avatar: "/photos/profile.png",
};

// ============================================
// 🎯 EDIT YOUR SOCIAL LINKS HERE
// ============================================

export const socialLinks = [
  { name: "Instagram", url: "https://www.instagram.com/vipul.va.88/", icon: "instagram" },
  { name: "YouTube", url: "https://www.youtube.com/@vipul_daires", icon: "youtube" },
];
