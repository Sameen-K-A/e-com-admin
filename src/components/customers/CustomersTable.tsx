'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ICustomerTableList } from "@/types/general";

interface CustomersTableProps {
  customers: ICustomerTableList[];
}

export const CustomersTable = ({ customers }: CustomersTableProps) => {

  return (
    <div className="overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow className="border-b border-border hover:bg-transparent">
              <TableHead className="text-left p-2 px-4 w-20 text-sm font-medium text-muted-foreground">
                Customer ID
              </TableHead>
              <TableHead className="text-left p-2 px-4 text-sm font-medium text-muted-foreground">
                Personal info
              </TableHead>
              <TableHead className="text-center p-2 px-4 text-sm font-medium text-muted-foreground">
                Number of orders
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow
                key={customer.customerId}
                className="border-b border-border last:border-b-0 hover:bg-muted/50 transition-all duration-200 ease-in-out"
              >
                <TableCell className="p-2 px-4 w-20 text-left text-sm font-medium text-foreground">
                  {customer.customerId}
                </TableCell>
                <TableCell className="p-2 px-4">
                  <div className="flex flex-col items-start">
                    <span className="whitespace-nowrap">{customer.name}</span>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{customer.email}</span>
                  </div>
                </TableCell>
                <TableCell className="p-2 px-4 text-center text-sm">
                  {customer.numberOfOrders}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};