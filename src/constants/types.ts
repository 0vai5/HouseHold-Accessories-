export interface product {
    id: string
    image: string
    title: string
    price: number
}

export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    instock: boolean;
  }
