'use client'

import { ProductDetails } from "@/components/products/ProductDetails";
import { mockProducts } from "@/constants/mockProducts";
import { IProduct } from "@/types/general";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const productId = params.id;
  const product: IProduct | undefined = mockProducts.find((product: IProduct) => product.id === productId);

  if (!product) {
    return
  }

  return (
    <div>
      <h3 className="text-xl md:text-2xl font-bold">Product Details</h3>
      <ProductDetails product={product} />
    </div>
  )
}