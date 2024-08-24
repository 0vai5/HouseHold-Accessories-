import {
  ProductList,
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger
} from "@/components";
import React from "react";
import { ArrowDownAZIcon, ArrowDownNarrowWide, ArrowUpAZ, ArrowUpNarrowWide } from 'lucide-react'

const page = () => {
  return (
    <section className="container">
      <div className="flex justify-between items-center">
        <h1 className="head-text">Products</h1>
        <div>
          {/* Sort Functionality */}
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Sort</MenubarTrigger>
              <MenubarContent>
                <MenubarItem><ArrowUpNarrowWide /> Price Low - Hight</MenubarItem>
                <MenubarItem><ArrowDownNarrowWide />Price High - Low</MenubarItem>
                <MenubarItem><ArrowUpAZ />Product A - Z</MenubarItem>
                <MenubarItem><ArrowDownAZIcon />Product Z - A</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
      <ProductList />
    </section>
  );
};

export default page;
