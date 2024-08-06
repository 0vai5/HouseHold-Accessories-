import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingBagIcon } from "lucide-react";
import { Button } from "./ui/button";
import CartCard from "./CartCard";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

const CartSlide = () => {
  return (
    <section className="m-0">
      <Sheet>
        <SheetTrigger asChild>
          <button className="w-10 h-10 flex items-center justify-center m-0 relative">
            <ShoppingBagIcon className="font-xl text-black" />
            {/* Conditional Rengerding to be done */}
            <Badge className="absolute top-0 right-0">0</Badge>
          </button>
        </SheetTrigger>
        <SheetContent className="md:min-w-1/2 min-w-full h-full bg-white drop-shadow-[-100px 0px 30px -10px rgba(0,0,0,0.1)] mt-0">
          <h1 className="head-text">Cart</h1>
          <Separator />
          <div className="overflow-y-auto h-2/3">
            <CartCard />
          </div>
          {/* Setting the Buttons to Bottom */}
          <div className="flex justify-evenly items-center flex-col z-10 py-10 shadow-md">
            <div className="flex justify-center items-end gap-4 flex-col">
              <span className="text-slate-800 text-lg font-semibold flex gap-5">Subtotal <p className="text-xl font-bold text-black">Rs. 1000</p></span>
              <h3 className = 'text-xl font-semibold text-slate-700'>Taxes and Shipping Calculated at Checkout</h3>
            </div>
            <Button variant="secondary" size="xl">Checkout</Button>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default CartSlide;
