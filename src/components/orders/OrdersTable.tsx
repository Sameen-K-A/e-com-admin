'use client'

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { IOrder } from "@/types/general";
import { ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation";

interface OrderTableProps {
  orders: IOrder[];
}

export const OrderTable = ({ orders }: OrderTableProps) => {
  const router = useRouter();

  return (
    <div className="overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow className="border-b border-border hover:bg-transparent">
              <TableHead className="text-left p-2 px-4 text-sm font-medium text-muted-foreground">
                Order ID
              </TableHead>
              <TableHead className="text-left p-2 px-4 text-sm font-medium text-muted-foreground">
                Customer
              </TableHead>
              <TableHead className="text-center p-2 px-4 text-sm font-medium text-muted-foreground">
                Date
              </TableHead>
              <TableHead className="text-center p-2 px-4 text-sm font-medium text-muted-foreground">
                Items
              </TableHead>
              <TableHead className="text-center p-2 px-4 text-sm font-medium text-muted-foreground">
                Status
              </TableHead>
              <TableHead className="text-center p-2 px-4 text-sm font-medium text-muted-foreground">
                Total
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order.id}
                className="border-b border-border last:border-b-0 cursor-pointer hover:bg-muted/50 transition-all duration-200 ease-in-out"
                onClick={() => router.push(ROUTE.ORDER_DETAILS(order.id))}
              >
                <TableCell className="p-4 text-left text-sm font-medium text-foreground">
                  {order.id}
                </TableCell>
                <TableCell className="p-4">
                  <div className="flex flex-col items-start">
                    <span className="whitespace-nowrap">{order.customer.name}</span>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{order.customer.email}</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center text-sm text-muted-foreground">
                  {order.dateOfOrder}
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex justify-center">
                    <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
                      {order.products.slice(0, 2).map((pro, index) => (
                        <Avatar key={index} className="h-8 w-8" data-slot="avatar">
                          <AvatarImage src={pro.product.images[0]} alt={`Product ${index + 1}`} />
                          <AvatarFallback>{index + 1}</AvatarFallback>
                        </Avatar>
                      ))}
                      {order.products.length > 2 && (
                        <div className="h-8 w-8 rounded-full z-10 bg-muted flex items-center justify-center text-xs border">
                          +{order.products.length - 2}
                        </div>
                      )}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <Badge
                    variant={
                      order.fulfillmentStatus === 'Delivered' ? 'green' :
                        order.fulfillmentStatus === 'Shipped' ? 'blue' :
                          order.fulfillmentStatus === 'Processing' ? 'orange' :
                            order.fulfillmentStatus === 'Cancelled' ? 'red' :
                              'yellow'
                    }
                    className="whitespace-nowrap w-fit"
                  >
                    {order.fulfillmentStatus}
                  </Badge>
                </TableCell>
                <TableCell className="p-4 text-center text-sm font-medium">
                  ₹{order.total.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};