export interface PriceItem {
  name: string;
  price: string;
}

export interface PriceGroup {
  groupName: string;
  items: PriceItem[];
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  rating: number;
  priceList: PriceGroup[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}