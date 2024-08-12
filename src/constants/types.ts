export interface NewArrivalItem {
    image: string
    title: string
    price: number
}

export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
    instock: boolean;
  }
