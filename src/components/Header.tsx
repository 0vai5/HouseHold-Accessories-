import Image from 'next/image';
import { Heart, UserCircle2 } from 'lucide-react';
import { CartSlide, MobileNav, NavItems, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components';

const Header = () => {
    return (
        <header className="header">
            <div className='flex align-center justify-between'>
                <div className="md:hidden block flex justify-center items-center">
                    <MobileNav />
                </div>
                <Image src="/unimart-transparent 2.png" alt="Logo" width={120} height={100} />
            </div>
            <div className='flex justify-evenly items-center gap-5'>
                <div className="hidden md:block">
                    <NavItems />
                </div>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger><Heart /></TooltipTrigger>
                        <TooltipContent>Wishlist</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger><UserCircle2 /></TooltipTrigger>
                        <TooltipContent>Account</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger><CartSlide /></TooltipTrigger>
                        <TooltipContent>Shopping Bag</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>

        </header>
    )
}

export default Header