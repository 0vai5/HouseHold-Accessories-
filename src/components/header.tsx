import Image from 'next/image';
import MobileNav from './MobileNav';
import NavItems from './NavItems';
import { Heart, UserCircle2 } from 'lucide-react';
import CartSlide from './CartSlide';

const Header = () => {
    return (
        <header className="header">
            <div className='flex align-center justify-between'>
                <div className="md:hidden block flex justify-center items-center">
                    <MobileNav />
                </div>
                <Image src="/unimart-transparent 2.png" alt="Logo" width={120} height={100} />
            </div>
            <div className='flex justify-evenly items-center gap-10'>
                <div className="hidden md:block">
                    <NavItems />
                </div>
                <Heart />
                <UserCircle2 />
                <CartSlide />
            </div>

        </header>
    )
}

export default Header