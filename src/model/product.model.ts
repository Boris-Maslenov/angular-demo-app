export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  brand: string;
  sku: string;
  tags: string[];
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  availabilityStatus: string;
  minimumOrderQuantity: number;
  thumbnail: string;
  images: string[];
  weight: number;
  warrantyInformation: string;
  shippingInformation: string;
  returnPolicy: string;
}
