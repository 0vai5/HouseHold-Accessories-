import React from "react";
import { ProductFilter } from "@/components";

const page = () => {
  return (
    <section className="container">
      <div className="flex justify-between items-center">
        <h1 className="head-text">Products</h1>
      </div>
      <ProductFilter />
    </section>
  );
};

export default page;
