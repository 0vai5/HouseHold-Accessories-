"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/features/products/ProductSlice";
import { RootState, AppDispatch } from "@/app/store";
import ProductCard from "@/components/ProductCard";

const ProductList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { status, error, products } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  return (
    <section className="h-full">
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && (
        <ProductCard products={products} wishlist={false} />
      )}
    </section>
  );
};

export default ProductList;
