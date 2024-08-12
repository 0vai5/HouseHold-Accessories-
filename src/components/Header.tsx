import React from 'react';
import Image from 'next/image';
import { Heart, UserCircle2 } from 'lucide-react';
import { CartSlide, MobileNav, NavItems, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components';

const Header = () => {
    return (
        <header className={'header glassmorphism'}>
            <div className='flex items-center justify-between p-4'>
                <div className="md:hidden block flex items-center">
                    <MobileNav />
                </div>
                
                <Image src="/unimart-transparent 2.png" alt="Logo" width={120} height={100} />
            </div>

            <div className='flex items-center justify-between gap-5 p-4'>
                <div className="hidden md:block">
                    <NavItems />
                </div>

                <TooltipProvider>
                    <div className="flex items-center gap-4">
                        <Tooltip>
                            <TooltipTrigger>
                                <Heart className="h-6 w-6" />
                            </TooltipTrigger>
                            <TooltipContent>Wishlist</TooltipContent>
                        </Tooltip>
                        
                        <Tooltip>
                            <TooltipTrigger>
                                <UserCircle2 className="h-6 w-6" />
                            </TooltipTrigger>
                            <TooltipContent>Account</TooltipContent>
                        </Tooltip>

                        {/* <Tooltip>
                            <TooltipTrigger>
                                <CartSlide />
                            </TooltipTrigger>
                            <TooltipContent>Shopping Bag</TooltipContent>
                        </Tooltip> */}
                        <CartSlide />
                    </div>
                </TooltipProvider>
            </div>
        </header>
    );
}

export default Header;
