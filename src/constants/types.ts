export type Product = {
// Future mein String hoga id
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    href: string;
  };

export interface ProductState {
    products: Product[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }

  export interface ProductCardProps {
    products: Product[];
  }

export interface CartItem {
    id: number;
    image: string;
    title: string;
    price: number;
    quantity: number;
}

export interface CarousalProducts {
    products: Product[]
}

export type CardType = {
    src: string;
    title: string;
    category: string;
    content: React.ReactNode;
};

export interface CarouselProps {
    items: JSX.Element[];
    initialScroll?: number;
}

export interface CartState {
    items: CartItem[];
  }