import OrdersList from "@/components/orders/OrdersList";

export default function Orders() {
  return (
    <div className="space-y-5">
      <h3 className="text-xl md:text-2xl font-bold">Orders</h3>
      <OrdersList />
    </div>
  );
}