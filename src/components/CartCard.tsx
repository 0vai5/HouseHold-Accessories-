import { X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { Button } from '@/components';
import { CartItem } from '@/constants/types';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, deleteFromCart, increaseQuantity } from '@/features/cart/CartSlice';

const CartCard: React.FC = () => {
  const cart: CartItem[] = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();
  return (
    <>
      {cart.length > 0 ? (
        <section className="flex justify-center flex-col items-center gap-10 my-5">
          {cart.map((item) => (
            <div key={item.id} className='flex justify-between md:item-center items-start md:flex-row flex-col gap-10 flex-wrap rounded-lg bg-white shadow-md p-5'>
              <div className='flex justify-between items-center gap-6'>
                <div className='flex justify-evenly items-center md:flex-row flex-col gap-5'>
                  <Image 
                  src={item.image} 
                  alt={item.title} 
                  width={100} 
                  height={100} />
                </div>
                <div className='self-start'>
                  <h3 className='font-semibold text-black text-lg'>{item.title}</h3>
                </div>
              </div>
              <div className="flex justify-between gap-10 md:gap-6">
                <div className="flex justify-center gap-0">
                  <Button 
                  size='icon' 
                  className='h-7'
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  >
                    +
                  </Button>
                  <div className='h-10 w-10 flex justify-center items-center font-semibold'>{item.quantity}</div>
                  <Button 
                  size='icon' 
                  className='h-7'
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    -
                  </Button>
                </div>
                <div>
                  <h2 className='font-base text-black text-lg'>Rs. {item.price * item.quantity}.00</h2>
                </div>
                <Button 
                variant='outline' 
                size='icon'
                className='h-7'
                onClick={() => dispatch(deleteFromCart(item.id))}
                >
                  <X />
                </Button>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <h1>No Items in the Cart</h1>
      )}
    </>
  );
};

export default CartCard;
