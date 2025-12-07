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
    title: "Sony WH-1000XM5 Headphones",
    description: "Industry-leading noise cancellation with 30h battery life.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop",
    link: "https://example.com/affiliate-headphones",
  },
  {
    id: "2",
    title: "Keychron K2 Mechanical Keyboard",
    description: "Wireless mechanical keyboard with RGB backlight.",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=200&h=200&fit=crop",
    link: "https://example.com/affiliate-keyboard",
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
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
};

// ============================================
// 🎯 EDIT YOUR SOCIAL LINKS HERE
// ============================================

export const socialLinks = [
  { name: "Instagram", url: "https://instagram.com/yourprofile", icon: "instagram" },
  { name: "YouTube", url: "https://youtube.com/@yourchannel", icon: "youtube" },
  { name: "Telegram", url: "https://t.me/yourchannel", icon: "telegram" },
  { name: "Twitter", url: "https://twitter.com/yourprofile", icon: "twitter" },
];
