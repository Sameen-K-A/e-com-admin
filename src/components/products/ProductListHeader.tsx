'use client'

import { Plus, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation";

interface ProductListHeaderProps {
  onFilter: () => void;
  onSearchChange: (value: string) => void;
}

export const ProductListHeader = ({ onFilter, onSearchChange }: ProductListHeaderProps) => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between gap-2 h-10">

      <div className="relative flex-1 max-w-md h-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" />
        <Input
          type="text"
          placeholder="Search products..."
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-9 rounded-3xl h-full text-sm"
        />
      </div>

      <div className="flex gap-1 h-9">
        <Button
          variant="outline"
          onClick={onFilter}
          className="gap-2 h-9 rounded-3xl w-fit md:min-w-32"
        >
          <Filter className="h-4 w-4" />
          <span className="hidden md:inline">Filter</span>
        </Button>

        <Button onClick={() => router.push(ROUTE.ADD_PRODUCT)} className="gap-2 rounded-3xl w-fit md:min-w-32 h-9">
          <Plus className="h-4 w-4" />
          <span className="hidden md:inline">Add Product</span>
        </Button>
      </div>
    </div>
  );
};
