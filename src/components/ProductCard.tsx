import React from "react";
import { Card, CardContent, CardHeader, Button } from "@/components";
import Link from "next/link";
import Image from "next/image";
import { HeartIcon, ShoppingBagIcon, X } from "lucide-react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import { CartItem, product, ProductCardProps } from "@/constants/types";
import { addToCart } from "@/features/cart/CartSlice";

const ProductCard: React.FC<ProductCardProps & { wishlist: boolean }> = ({
  products,
  wishlist,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = (product: product) => {
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
    <>
      {/* <section className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-center gap-4 p-4">
        {products.map((card) => (
          <Card key={card.id} className="w-[300px]">
            <Link href={`/product/${card.id}`}>
              <CardHeader className="w-full h-[300px] md:h-[275px]">
                <div className="relative w-full h-full flex justify-center">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={400}
                    height={200}
                    className="h-auto w-auto"
                    priority={true}
                  />
                  <div className="cursor-pointer absolute top-1 right-1">
                    {wishlist ? (
                      <X className="h-6 w-6 text-black" />
                    ) : (
                      <HeartIcon className="h-6 w-6 text-black" />
                    )}
                  </div>
                </div>
              </CardHeader>
            </Link>
            <CardContent>
              <div className="flex justify-center items-center flex-col gap-3">
                <Link href={`/product/${card.id}`}>
                  <div className="flex justify-between gap-10 items-center py-4">
                    <div>
                      <p className="text-slate-900 text-lg">{card.title}</p>
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
                    size={"xl"}
                    variant={"outline"}
                    className="hover:bg-primary/90 hover:text-white"
                    onClick={() => handleAddToCart(card)}
                  >
                    <ShoppingBagIcon className="h-6 w-6 text-slate-700 hover:text-white mr-3" />
                    Add To Bag
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section> */}
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  alt={product.title}
                  src={product.image}
                  width={300}
                  height={100}
                  className="lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/product/${product.id}`}>
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
        </div>
      </div>
    </>
  );
};

export default ProductCard;
