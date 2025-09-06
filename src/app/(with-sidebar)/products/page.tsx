import ProductsList from "@/components/products/Products";

export default function Products() {
  return (
    <div className="space-y-5">
      <h3 className="text-xl md:text-2xl font-bold">Products</h3>
      <ProductsList />
    </div>
  );
};