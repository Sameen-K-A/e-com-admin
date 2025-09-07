'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X, ChevronRight, CloudUpload } from 'lucide-react';
import { ICategory, IProduct } from '@/types/general';
import { useRouter } from 'next/navigation';
import { ROUTE } from '@/constants/routes';
import Image from 'next/image';
import { mockCategories } from '@/constants/mockCategories';

interface IProductFormProps {
  selectedProduct?: IProduct
}

export const ProductForm = ({ selectedProduct }: IProductFormProps) => {

  const [product, setProduct] = useState<IProduct>({
    id: selectedProduct?.id || "new_prodct",
    name: selectedProduct?.name || '',
    description: selectedProduct?.description || '',
    category: selectedProduct?.category || "",
    isPublished: selectedProduct?.isPublished || false,
    stocks: selectedProduct?.stocks || 0,
    originalPrice: selectedProduct?.originalPrice || 0,
    offerPercentage: selectedProduct?.offerPercentage || 0,
    images: selectedProduct?.images ? [...selectedProduct.images] : []
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const updateField = <K extends keyof IProduct>(key: K, value: IProduct[K]) => {
    setProduct((prev) => ({ ...prev, [key]: value }));
  };

  const removeImage = (imageName: string) => {
    updateField('images', product.images.filter((img) => img !== imageName));
  };

  const addImages = (newImages: string[]) => {
    updateField('images', [...product.images, ...newImages]);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newImages: string[] = [];
    Array.from(files).forEach((file) => {
      const url = URL.createObjectURL(file);
      newImages.push(url);
    });

    addImages(newImages);

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="max-w-full mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 cursor-default">
          <span className="text-muted-foreground cursor-pointer" onClick={() => router.push(ROUTE.PRODUCTS)}>Products</span>
          <span className="text-muted-foreground"><ChevronRight size={12} /></span>
          <span className="text-foreground font-medium">{product.id}</span>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-1">
          <Button variant="outline" className='w-32' onClick={() => router.push(ROUTE.PRODUCTS)}>Cancel</Button>
          <Button className="w-32" onClick={() => router.push(ROUTE.PRODUCTS)}>Save</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-lg border p-4 space-y-4">
            <h2 className="font-semibold text-lg">Product Information</h2>
            <div>
              <Label htmlFor="productName">Product Name</Label>
              <Input
                id="productName"
                placeholder='Enter product name'
                value={product.name}
                onChange={(e) => updateField('name', e.target.value)}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="category">Category</Label>
              <Select value={product.category} onValueChange={(val) => updateField('category', val)}>
                <SelectTrigger className="mt-1 w-full">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {mockCategories.map((cat: ICategory) => (
                    <SelectItem key={cat.id} value={cat.name}>{cat.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder='Enter product description'
                value={product.description}
                onChange={(e) => updateField('description', e.target.value)}
                className="mt-1 min-h-[120px] resize-none max-h-[150px]"
              />
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <h2 className="font-semibold text-lg mb-4">
              Product Images <span className="text-muted-foreground text-sm font-normal">({product.images.length}/5 images)</span>
            </h2>
            <div className="flex flex-wrap gap-3 mb-4">
              {product.images.map((image, index) => (
                <div key={index} className="relative group">
                  <Image
                    src={image}
                    alt="Product"
                    className="aspect-square object-cover rounded-lg border"
                    width={96}
                    height={96}
                  />
                  <button
                    onClick={() => removeImage(image)}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center text-white"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-2 border-dashed border-border rounded-lg p-4">
              <div className="text-center">
                <CloudUpload className="mx-auto h-5 w-5 text-muted-foreground mb-2" />
                <Button
                  variant="ghost"
                  onClick={handleUploadClick}
                  className="text-foreground font-medium"
                >
                  Choose a file Or Drag and Drop it here
                </Button>
                <p className="text-sm text-muted-foreground">
                  PNG, JPEG, up to 12Mb
                </p>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/png,image/jpeg,image/jpg"
                onChange={handleFileSelect}
                className="hidden"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg border p-4 space-y-4">
            <h2 className="font-semibold text-lg">Need to publish?</h2>
            <div className="flex items-center justify-between">
              <Label htmlFor="publish">Yes Publish</Label>
              <Switch
                id="publish"
                checked={product.isPublished}
                onCheckedChange={(val) => updateField('isPublished', val)}
              />
            </div>
          </div>

          <div className="rounded-lg border p-4 space-y-4">
            <h2 className="font-semibold text-lg">Stock Level</h2>
            <div>
              <Label htmlFor="quantity">Quantity</Label>
              <Input
                id="quantity"
                type='number'
                value={product.stocks}
                onChange={(e) => updateField('stocks', Number(e.target.value))}
                className="mt-1"
              />
            </div>
          </div>

          <div className="rounded-lg border p-4 space-y-4">
            <h2 className="font-semibold text-lg">Pricing</h2>
            <div>
              <Label htmlFor="originalPrice">Original Price</Label>
              <Input
                id="originalPrice"
                type='number'
                value={product.originalPrice}
                onChange={(e) => updateField('originalPrice', Number(e.target.value))}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="offerPercentage">Offer Percentage %</Label>
              <Input
                id="offerPercentage"
                value={product.offerPercentage}
                type='number'
                onChange={(e) => updateField('offerPercentage', Number(e.target.value))}
                className="mt-1"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Fixed Bottom Buttons */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 border-t px-4 py-2 flex gap-2 bg-background">
        <Button variant="outline" onClick={() => router.push(ROUTE.PRODUCTS)} className="flex-1">Cancel</Button>
        <Button className="flex-1" onClick={() => router.push(ROUTE.PRODUCTS)}>Save</Button>
      </div>

      {/* Add padding to prevent content overlap on mobile */}
      <div className="md:hidden h-15" />
    </div>
  );
};