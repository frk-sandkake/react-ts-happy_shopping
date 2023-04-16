
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  imageUrl: string;
  rating: number;
  tags: string[];
  reviews: [];
};

export interface Reviews {
  id: string;
  username: string;
  rating: number;
  description: string;
};

export type ProductType = {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  imageUrl: string;
  rating: number;
  tags: string[];
  reviews: [];
};

export type ReviewType = {
  id: string;
  username: string;
  rating: number;
  description: string;
}

export const product: ProductType = {
  id: '1',
  title: 'Example Product',
  description: '...',
  price: 10,
  discountedPrice: 7,
  imageUrl: '...',
  rating: 20,
  tags: ['...','...'],
  reviews: [],
};

export const review: ReviewType = {
    id: "1",
    username: "...",
    rating: 5,
    description: "..."
};
