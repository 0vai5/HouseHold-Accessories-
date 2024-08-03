import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavItems from "./NavItems";
import {
    ShoppingBagIcon
} from "lucide-react"
import { Button } from "./ui/button";
import CartCard from "./CartCard";


const CartSlide = () => {
    return (
        <section className="m-0">
            {/* TODO: Overflow in the CartCards would me Managed */}
            <Sheet>
                <SheetTrigger asChild>
                    <button className="w-10 h-5 flex items-center justify-center m-0">
                        <ShoppingBagIcon className="font-lg text-black " />
                    </button>
                </SheetTrigger>
                <SheetContent className="bg-white drop-shadow-[-100px 0px 30px -10px rgba(0,0,0,0.1)]">
                    <h1 className="head-text">
                        Cart
                    </h1>
                    <div>
                      <CartCard />
                    </div>
                    {/* TODO: Setting the Buttons to Bottom */}
                    <div className="flex justify-evenly gap-5 items-center flex-col">
                        <Button size={'xl'}>View Cart</Button>
                        <Button variant={'outline'} size={'xl'}>Checkout</Button>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    );
};

export default CartSlide;