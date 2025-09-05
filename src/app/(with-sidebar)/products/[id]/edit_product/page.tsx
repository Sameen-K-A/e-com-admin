'use client'

import { useParams } from "next/navigation";
import { ProductForm } from "@/components/products/ProductForm";
import { mockProducts } from "@/constants/mockProducts";
import { IProduct } from "@/types/general";

export default function EditProductPage() {
  const params = useParams();
  const productId = params.id;
  const product: IProduct | undefined = mockProducts.find((product: IProduct) => product.id === productId);

  return (
    <div>
      <h3 className="text-xl md:text-2xl font-bold">Edit Product</h3>
      <ProductForm selectedProduct={product} />
    </div>
  );
}
