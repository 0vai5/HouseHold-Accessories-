export interface product {
    id: string
    image: string
    title: string
    price: number
    category: string
}

export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    instock: boolean;
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
