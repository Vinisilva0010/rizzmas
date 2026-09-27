export type ProductCategory = "arvores" | "iluminacao" | "decoracao" | "guirlandas" | "presentes";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: ProductCategory;
  platform: "shopee";
  affiliateUrl: string;
  tags: string[];
  active: boolean;
  rating?: number;
  reviewCount?: number;
  soldCount?: number;
  shopName?: string;
  highlights?: string[];
  badge?: string;
  priceCheckedAt?: string;
}
