'use client'

import { useState } from "react";
import { ProductListHeader } from "./ProductListHeader";
import { ProductTable } from "./ProductTable";
import { IProduct } from "@/types/general";
import { mockProducts } from "@/constants/mockProducts";

export default function ProductsList() {
  const [products] = useState<IProduct[]>(mockProducts);

  const handleAddProduct = () => {
    console.log({
      title: "Add Product",
      description: "Add product functionality would be implemented here."
    });
  };

  const handleFilter = () => {
    console.log({
      title: "Filter Products",
      description: "Filter functionality would be implemented here."
    });
  };

  const handleSearch = () => {
    console.log({
      title: "Filter Products",
      description: "Filter functionality would be implemented here."
    });
  };

  return (
    <div className="h-fit">
      <div className="container mx-auto space-y-4">
        <ProductListHeader
          onAddProduct={handleAddProduct}
          onFilter={handleFilter}
          onSearchChange={handleSearch}
        />

        <ProductTable
          products={products}
        />
      </div>
    </div>
  );
};