import { Check, X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

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

  const renderQuantityOptions = (quantity: number) => {
    const options = [];
    for (let i = 1; i <= 10; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  return (
    <>
      {cart.length > 0 ? (
        // Cart Items Holder
        <div className="flex justify-center  flex-col items-center gap-10 my-10">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-center items-center gap-10 w-full bg-slate-200 p-4 rounded-md">
              <Image src={item.image} alt={'Product Image'} width={100} height={100} />
              <div className="flex flex-col justify-between items-center">
                <div>
                  <h4 className="text-lg font-semibold">{item.name}</h4>
                  <p className="text-base text-slate-800">Rs. {item.price}</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  {item.instock ? (
                    <>
                      <Check className="text-green-700" />
                      <p className="text-slate-800 font-semibold">In Stock</p>
                    </>
                  ) : (
                    <>
                      <X className="text-red-700" />
                      <p className="text-slate-800 font-semibold">Out of Stock</p>
                    </>
                  )}
                </div>
              </div>
              <div>
                <select name="quantity" id="quantity" defaultValue={item.quantity}>
                  {renderQuantityOptions(item.quantity)}
                </select>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1>No Items in the Cart</h1>
      )}
    </>
  );
};

export default CartCard;
