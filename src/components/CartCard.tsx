import { Check, X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';

const CartCard = () => {
  const cart = [
    {
      id: 1,
      name: 'Product 1',
      price: 1000,
      quantity: 2,
      image: 'https://via.placeholder.com/150',
      instock: true,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 1199,
      quantity: 2,
      image: 'https://via.placeholder.com/150',
      instock: false,
    },
    {
      id: 3,
      name: 'Product 2',
      price: 1199,
      quantity: 2,
      image: 'https://via.placeholder.com/150',
      instock: false,
    },
    {
      id: 4,
      name: 'Product 2',
      price: 1199,
      quantity: 2,
      image: 'https://via.placeholder.com/150',
      instock: false,
    },
    {
      id: 5,
      name: 'Product 2',
      price: 1199,
      quantity: 2,
      image: 'https://via.placeholder.com/150',
      instock: false,
    },

  ];

  // const renderQuantityOptions = (quantity: number) => {
  //   const options = [];
  //   for (let i = 1; i <= 10; i++) {
  //     options.push(
  //       <option key={i} value={i}>
  //         {i}
  //       </option>
  //     );
  //   }
  //   return options;
  // };

  return (
    <>
      {cart.length > 0 ? (
        // Cart Items Holder
        <section className="flex justify-center  flex-col items-center gap-10 my-5">
          {cart.map((item) => (
            <div key={item.id} className='flex justify-between md:item-center items-start md:flex-row flex-col gap-10 flex-wrap rounded-lg bg-white shadow-md p-5'>
              <div className='flex justify-between item-center gap-6'>
                <div className='flex justify-evenly items-center md:flex-row flex-col gap-5'>
                  <Image src={item.image} alt={item.name} width={100} height={100} />
                </div>
                <div className='self-start'>
                  <h3 className='font-semibold text-black text-lg'>{item.name}</h3>
                </div>
              </div>
              <div className="flex justify-between gap-10 md:gap-6">
                <div className="flex justify-center gap-0">
                  <Button size={'icon'} className='h-7'>+</Button>
                  <div className='h-10 w-10 flex justify-center font-semibold'>{item.quantity}</div>
                  <Button size={"icon"} className='h-7'>-</Button>
                </div>
                <div>
                  <h2 className='font-semibold text-black text-lg'>Rs. {item.price}.00</h2>
                </div>
                <Button variant='outline' size={'icon'}>
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
