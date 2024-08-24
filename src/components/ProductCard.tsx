import React from 'react'
import { Card, CardContent, CardHeader, Button } from '@/components'
import Link from 'next/link'
import Image from 'next/image'
import { HeartIcon, ShoppingBagIcon } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '@/app/store';
import { CartItem, product } from '@/constants/types'
import { addToCart } from '@/features/cart/CartSlice'

const ProductCard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((state: RootState) => state.products);

  const HandleAddToCart = (product: product) => {
    const cartItem: CartItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
    };
    dispatch(addToCart(cartItem));
};
  return (
    <section className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-center gap-4 p-4'>
            {products.map((card, index) => (
                <Card key={index} className='w-[300px] '>
                    <Link key={index} href={'/product/' + card.title}>
                        <CardHeader className='w-full h-[300px] md:h-[275px]'>
                            <div className="relative w-full h-full flex justify-center">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    width={400}
                                    height={200}
                                    className='h-auto w-auto'
                                    priority={true}
                                />
                                <div className='cursor-pointer absolute top-4 right-4'>
                                    <HeartIcon className="h-6 w-6 text-black" />
                                </div>
                            </div>
                        </CardHeader>
                    </Link>
                    <CardContent>
                        <div className="flex justify-center items-center flex-col gap-3">
                            <Link key={index} href={'/product/' + card.title}>
                                <div className="flex justify-between gap-10 items-center py-4">
                                    <div>
                                        <p className="text-slate-900 text-lg">
                                            {card.title}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-slate-900 font-semibold">
                                            Rs. {card.price}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                            <div className="flex justify-between items-center">
                                <Button
                                    size={'xl'}
                                    variant={'outline'}
                                    className='hover:bg-primary/90 hover:text-white'
                                    onClick={() => HandleAddToCart(card)}
                                >
                                    <ShoppingBagIcon className='h-6 w-6 text-slate-700 hover:text-white mr-3' />Add To Bag
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </section>
  )
}

export default ProductCard