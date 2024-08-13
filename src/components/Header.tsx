import React from 'react';
import Image from 'next/image';
import { Heart, UserCircle2 } from 'lucide-react';
import { CartSlide, MobileNav, NavItems, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components';
import Link from 'next/link';

const Header = () => {
    return (
        <header className={'header glassmorphism'}>
            <div className='flex items-center justify-between p-4'>
                <div className="md:hidden block flex items-center">
                    <MobileNav />
                </div>
                <Link href={'/'}>
                    <Image 
                    src="/unimart-transparent 2.png" 
                    alt="Logo" 
                    width={120} 
                    height={100} 
                    className='h-auto w-auto' />
                </Link>
            </div>
            <div className='flex items-center justify-between gap-5 p-4'>
                <div className="hidden md:block">
                    <NavItems />
                </div>
                <TooltipProvider>
                    <div className="flex items-center gap-4">
                        <Tooltip>
                            <TooltipTrigger>
                                <Link href={'/wishlist'}>
                                    <Heart className="h-6 w-6" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>Wishlist</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger>
                                <Link href={'/account'}>
                                    <UserCircle2 className="h-6 w-6" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>Account</TooltipContent>
                        </Tooltip>

                        {/* TODO: Tooltip Fixture */}
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
