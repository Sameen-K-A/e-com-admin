'use client'

import { ProductListHeader } from "./ProductListHeader";
import { ProductTable } from "./ProductTable";
import { IProduct } from "@/types/general";
import { mockProducts } from "@/constants/mockProducts";

export default function ProductsList() {
  const products: IProduct[] = mockProducts;

  const handleSearch = () => {
    console.log({
      title: "Filter Products",
      description: "Filter functionality would be implemented here."
    });
  };

  return (
    <div className="h-fit">
      <div className="container mx-auto space-y-4">
        <ProductListHeader onSearchChange={handleSearch} />
        <ProductTable products={products} />
      </div>
    </div>
  );
};