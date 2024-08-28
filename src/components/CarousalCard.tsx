'use client'

import React from 'react';
import { Button, Card, CardContent, CardHeader } from '@/components';
import Image from 'next/image';
import { HeartIcon, ShoppingBagIcon } from 'lucide-react';
import { CarousalProducts, CartItem, Product } from '@/constants/types';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/features/cart/CartSlice';

const CarousalCard: React.FC<CarousalProducts> = ({ products }) => {
    const dispatch = useDispatch();

    const HandleAddToCart = (product: Product) => {
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
        <section className='mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex justify-between items-center gap-5'>
           {products.map((product) => (
            <div key={product.id} className="group relative w-[60rem]">
              <div className="aspect-h-1 aspect-w-1 rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 h-[35vh] lg:w-[15vw] relative">
                <Image
                  alt={product.title}
                  src={product.image}
                  width={500}
                  height={100}
                  className="object-cover object-center lg:h-full lg:w-full"
                />
                {/* Heart Icon */}
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">Rs. {product.price}</p>
              </div>
            </div>
          ))}
        </section>
    );
};

export default CarousalCard;
