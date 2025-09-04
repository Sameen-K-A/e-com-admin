"use client"

import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { IProduct } from "@/types/general"

interface ProductTableProps {
  products: IProduct[]
}

export const ProductTable = ({ products }: ProductTableProps) => {
  return (
    <div className="overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow className="border-b border-border hover:bg-transparent">
              <TableHead className="text-left whitespace-nowrap p-2 px-4 text-sm font-medium text-muted-foreground">
                ID
              </TableHead>
              <TableHead className="text-left whitespace-nowrap p-2 px-4 pl-15 text-sm font-medium text-muted-foreground">
                Product
              </TableHead>
              <TableHead className="text-center whitespace-nowrap p-2 px-4 text-sm font-medium text-muted-foreground">
                Categories
              </TableHead>
              <TableHead className="text-center whitespace-nowrap p-2 px-4 text-sm font-medium text-muted-foreground">
                Price
              </TableHead>
              <TableHead className="text-center whitespace-nowrap p-2 px-4 text-sm font-medium text-muted-foreground">
                Stock Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.id}
                className="border-b border-border last:border-b-0 hover:bg-muted/50 transition-all duration-200 ease-in-out cursor-pointer"
              >
                <TableCell className="p-4 text-left text-sm whitespace-nowrap text-muted-foreground">
                  {product.id}
                </TableCell>
                <TableCell className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-muted rounded-md flex items-center justify-center">
                      <Avatar className="h-8 w-8 rounded-full cursor-pointer">
                        <AvatarImage src="Logo" alt="Logo" />
                      </Avatar>
                    </div>
                    <span className="text-sm font-medium whitespace-nowrap text-foreground">{product.name}</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-sm text-center whitespace-nowrap text-muted-foreground">
                  {product.category}
                </TableCell>
                <TableCell className="p-4 text-sm font-medium whitespace-nowrap text-center text-foreground">
                  {product.price}
                </TableCell>
                <TableCell className="p-4 text-center">
                  <Badge
                    variant={product.stockStatus === "Available" ? "green" : "red"} className="whitespace-nowrap" >
                    {product.stockStatus}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}