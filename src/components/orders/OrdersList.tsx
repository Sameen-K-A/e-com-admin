'use client'

import { OrderListHeader } from "./OrderListHeader"
import { OrderTable } from "./OrdersTable";
import { IOrder } from "@/types/general";
import mockOrders from "@/constants/mockOrders";

export default function OrdersList() {
  const orders: IOrder[] = mockOrders;

  const handleSearch = (value: string) => {
    console.log("Search orders:", value);
  };

  return (
    <div className="h-fit">
      <div className="container mx-auto space-y-4">
        <OrderListHeader onSearchChange={handleSearch} />
        <OrderTable orders={orders} />
      </div>
    </div>
  );
};