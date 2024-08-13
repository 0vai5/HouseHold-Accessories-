'use client'

import { ShoppingBagIcon } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, Badge, Button, Separator, CartCard } from '@/components';
import { useSelector } from 'react-redux'

const CartSlide = () => {
  const items = useSelector((state: any) => state.cart.items);
  return (
    <section className="m-0">
      <Sheet>
        <SheetTrigger asChild>
          <button className="w-10 h-10 flex items-center justify-center m-0 relative">
            <ShoppingBagIcon className="font-xl text-black" />
            {items.length > 0 && (
              <Badge className="absolute top-0 right-0">
                {items.length}
              </Badge>
            )}
          </button>
        </SheetTrigger>
        <SheetContent className="md:min-w-1/2 min-w-full h-full bg-white drop-shadow-[-100px 0px 30px -10px rgba(0,0,0,0.1)] mt-0">
          <h1 className="head-text">Cart</h1>
          <Separator />
          <div className="overflow-y-auto h-[55vh]">
            <CartCard />
          </div>
          <Separator />
          <div className="flex justify-evenly items-center flex-col gap-5 py-10">
            <div className="flex justify-center items-end gap-4 flex-col">
              <span className="text-black text-lg font-semibold flex gap-5">Subtotal <p className="text-lg font-bold text-black">Rs. {items.reduce((total: number, item: any) => total + item.price * item.quantity, 0)}.00</p></span>
              <h3 className='text-lg font-base text-black'>Taxes and Shipping Calculated at Checkout</h3>
            </div>
            <Button variant="secondary" size="xl">Checkout</Button>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default CartSlide;
