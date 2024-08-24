export interface product {
    id: string;
    title: string;
    image: string;
    price: number;
    category: string
}

export interface ProductState {
    products: product[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }

export interface CartItem {
    id: string;
    image: string;
    title: string;
    price: number;
    quantity: number;
}

export interface CarousalProducts {
    products: product[]
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