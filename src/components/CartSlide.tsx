import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingBagIcon } from "lucide-react";
import { Button } from "./ui/button";
import CartCard from "./CartCard";

const CartSlide = () => {
  return (
    <section className="m-0">
      {/* TODO: Overflow in the CartCards would be Managed */}
      <Sheet>
        <SheetTrigger asChild>
          <button className="w-10 h-10 flex items-center justify-center m-0">
            <ShoppingBagIcon className="font-lg text-black" />
          </button>
        </SheetTrigger>
        <SheetContent className="w-3/4 lg:w-full h-full bg-white drop-shadow-[-100px 0px 30px -10px rgba(0,0,0,0.1)]">
          <h1 className="head-text">Cart</h1>
          <div className="overflow-y-auto h-2/3">
            <CartCard />
          </div>
          {/* Setting the Buttons to Bottom */}
          <div className="flex justify-evenly gap-5 items-center flex-col z-10 p-4">
            <Button size="xl">View Cart</Button>
            <Button variant="outline" size="xl">Checkout</Button>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default CartSlide;
