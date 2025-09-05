"use client"

import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { IProduct } from "@/types/general"
import { Button } from "../ui/button"
import { EllipsisVertical } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { ROUTE } from "@/constants/routes"
import { useRouter } from "next/navigation"

interface ProductTableProps {
  products: IProduct[]
}

export const ProductTable = ({ products }: ProductTableProps) => {
  const router = useRouter();

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
                Offer %
              </TableHead>
              <TableHead className="text-center whitespace-nowrap p-2 px-4 text-sm font-medium text-muted-foreground">
                Published
              </TableHead>
              <TableHead className="text-right whitespace-nowrap p-2 text-sm font-medium text-muted-foreground" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.id}
                className="border-b border-border last:border-b-0 hover:bg-muted/50 transition-all duration-200 ease-in-out cursor-pointer"
                onClick={() => router.push(ROUTE.PRODUCT_DETAILS(product.id))}
              >
                <TableCell className="p-4 text-left text-sm whitespace-nowrap text-muted-foreground">
                  {product.id}
                </TableCell>
                <TableCell className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-muted rounded-md flex items-center justify-center">
                      <Avatar className="h-8 w-8 rounded-full cursor-pointer">
                        <AvatarImage src={product.images[0]} alt="Product image" />
                      </Avatar>
                    </div>
                    <span className="text-sm font-medium whitespace-nowrap text-foreground">{product.name}</span>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-sm text-center whitespace-nowrap text-muted-foreground">
                  {product.category}
                </TableCell>
                <TableCell className="p-4 text-sm font-medium whitespace-nowrap text-center text-foreground">
                  ₹{(product.originalPrice * (1 - product.offerPercentage / 100)).toFixed(2)} / <span className="text-muted-foreground text-xs line-through">₹{product.originalPrice.toFixed(2)}</span>
                </TableCell>
                <TableCell className="p-4 text-sm font-medium whitespace-nowrap text-center text-foreground">
                  {product.offerPercentage}%
                </TableCell>
                <TableCell className="p-4 text-center">
                  <Badge
                    variant={product.isPublished ? "green" : "red"} className="whitespace-nowrap" >
                    {product.isPublished ? 'Published' : 'Not published'}
                  </Badge>
                </TableCell>
                <TableCell className="p-2 text-right w-10">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="hover:bg-background">
                        <EllipsisVertical />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={(e) => { e.stopPropagation(); router.push(ROUTE.EDIT_PRODUCT(product.id)) }}>Edit</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}