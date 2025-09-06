"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Package, Eye, EyeOff, Tag, ImageIcon, ChevronRight } from "lucide-react"
import type { IProduct } from "@/types/general"
import { useRouter } from "next/navigation"
import { ROUTE } from "@/constants/routes"
import Image from "next/image"

interface ProductDetailsProps {
  product: IProduct
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const router = useRouter();
  const discountedPrice = product.originalPrice * (1 - product.offerPercentage / 100)
  const savings = product.originalPrice - discountedPrice

  const getStockStatus = (stocks: number) => {
    if (stocks === 0) return { label: "Out of Stock", variant: "red" as const }
    if (stocks <= 10) return { label: "Low Stock", variant: "orange" as const }
    return { label: "In Stock", variant: "green" as const }
  }

  const stockStatus = getStockStatus(product.stocks)

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 cursor-default">
          <span className="text-muted-foreground cursor-pointer" onClick={() => router.push(ROUTE.PRODUCTS)}>Products</span>
          <span className="text-muted-foreground"><ChevronRight size={12} /></span>
          <span className="text-foreground font-medium">{product.id}</span>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-1">
          <Button variant="outline" className='w-32' onClick={() => router.push(ROUTE.PRODUCTS)}>Back</Button>
          <Button className="w-32" onClick={() => router.push(ROUTE.EDIT_PRODUCT(product.id))}>Edit</Button>
        </div>
      </div>

      {/* Status Badges */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <Badge variant={product.isPublished ? "green" : "red"} className="flex items-center gap-1">
          {product.isPublished ? <Eye className="h-3 w-3" /> : <EyeOff className="h-3 w-3" />}
          {product.isPublished ? "Published" : "Not Published yet"}
        </Badge>
        <Badge variant={stockStatus.variant} className="flex items-center gap-1">
          <Package className="h-3 w-3" />
          {stockStatus.label}
        </Badge>
        <Badge variant="outline" className="flex items-center gap-1">
          <Tag className="h-3 w-3" />
          {product.category}
        </Badge>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Gallery */}
        <div className="space-y-4 w-full md:w-1/3">
          <div>
            <div className="p-0">
              {product.images.length > 0 ? (
                <div className="aspect-square relative overflow-hidden rounded-lg">
                  <Image
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-square flex items-center justify-center bg-muted rounded-lg">
                  <div className="text-center">
                    <ImageIcon className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">No images available</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Thumbnail Gallery */}
          {product.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Information */}
        <div className="space-y-6 w-full md:w-2/3">

          <div className="">
            <h1 className="text-xl font-bold text-balance">{product.name}</h1>
            <p className="text-sm text-muted-foreground">Product ID: {product.id}</p>
          </div>

          <div>
            <h3>Description</h3>
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Pricing */}
          <div>
            <h3>
              Pricing
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Original Price</span>
                <span className={product.offerPercentage > 0 ? "line-through text-muted-foreground" : "font-semibold"}>
                  ${product.originalPrice.toFixed(2)}
                </span>
              </div>

              {product.offerPercentage > 0 && (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Discount ({product.offerPercentage}%)</span>
                    <span className="text-green-600 font-medium">-${savings.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between border-t pt-2">
                    <span className="font-medium">Sale Price</span>
                    <span className="text-xl font-bold text-primary">${discountedPrice.toFixed(2)}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Stock Information */}
          <div>
            <h3 className="flex items-center gap-2">
              Stock Information
            </h3>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Available Quantity</span>
                <span className="font-semibold">{product.stocks} units</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile/Tablet Fixed Bottom Buttons */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 border-t px-4 py-2 flex gap-2 bg-background">
        <Button variant="outline" onClick={() => router.push(ROUTE.PRODUCTS)} className="flex-1">Back</Button>
        <Button className="flex-1" onClick={() => router.push(ROUTE.EDIT_PRODUCT(product.id))}>Edit</Button>
      </div>

      {/* Add padding to prevent content overlap on mobile */}
      <div className="md:hidden h-15" />
    </>
  )
}