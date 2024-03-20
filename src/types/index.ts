export interface ICartItem {
  id: number;
  rate: number;
  rate_count: number;
  reviews: number;
  price: number;
  fake_price: number;
  quantity: number;
  cartQTY: number;
  title: string;
  logo: string;
  category: string;
  discount: string;
  sizes: string[];
  images: { id: number; src: string }[];
}
