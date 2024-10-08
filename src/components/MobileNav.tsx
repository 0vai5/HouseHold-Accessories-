import { NavItems, Sheet, SheetContent, SheetTrigger } from '@/components'
import {
  Menu
} from "lucide-react"
import Link from "next/link";
import Image from "next/image"


const MobileNav = () => {
  return (
    <section className="block md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button className="w-10 h-5 flex items-center justify-center">
            <Menu className="font-lg text-black " />
          </button>
        </SheetTrigger>
        <SheetContent side={'left'} className="bg-white drop-shadow-[-100px 0px 30px -10px rgba(0,0,0,0.1)]">
          <div>
            <Link href="/">
              <Image
                src={'/unimart-transparent.png'}
                alt="Company Logo"
                width={150}
                height={100}
                className='h-auto w-auto'
                priority={true}
              />
            </Link>
          </div>
          <NavItems />
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;