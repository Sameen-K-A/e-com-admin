'use client'

import { useState } from "react";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { mockCategories } from "@/constants/mockCategories";
import { PopoverClose } from "@radix-ui/react-popover";

interface FilterState {
  categories: string[];
  publishedStatus: 'all' | 'published' | 'unpublished';
  sortBy: 'name' | 'price' | 'offer' | 'category';
  sortOrder: 'asc' | 'desc';
}

const SORT_OPTIONS: { value: FilterState["sortBy"]; label: string }[] = [
  { value: 'name', label: 'Name' },
  { value: 'price', label: 'Price' },
  { value: 'offer', label: 'Offer %' },
  { value: 'category', label: 'Category' },
];

const STATUS_OPTIONS: { value: FilterState["publishedStatus"]; label: string }[] = [
  { value: 'all', label: 'All Products' },
  { value: 'published', label: 'Published' },
  { value: 'unpublished', label: 'Not Published' },
];

export const ProductFilter = () => {
  const [filters, setFilters] = useState<FilterState>({
    categories: ["all"],
    publishedStatus: "all",
    sortBy: "name",
    sortOrder: "asc",
  });

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
  };

  const toggleCategory = (category: string) => {
    if (category === "all") {
      handleFilterChange({ categories: ["all"] });
    } else {
      let newCategories = filters.categories.includes(category)
        ? filters.categories.filter((c) => c !== category)
        : [...filters.categories.filter((c) => c !== "all"), category];
      if (newCategories.length === 0) {
        newCategories = ["all"];
      }

      handleFilterChange({ categories: newCategories });
    }
  };

  const clearAllFilters = () => {
    const defaultFilters: FilterState = {
      categories: ["all"],
      publishedStatus: 'all',
      sortBy: 'name',
      sortOrder: 'asc',
    };
    setFilters(defaultFilters);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="gap-2 h-9 rounded-3xl w-fit md:min-w-32">
          <Filter className="h-4 w-4" />
          <span className="hidden md:inline">Filter</span>
        </Button>
      </PopoverTrigger>

      <PopoverContent backdrop={true} className="w-80 p-0 mx-2 max-h-[30rem] overflow-x-hidden overflow-y-auto custom-scrollbar" align="center">
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-sm">Filter & Sort</h4>
            <div className="flex items-center gap-1 h-7">
              <Button
                variant="outline"
                size="sm"
                onClick={clearAllFilters}
                className="h-7 text-xs px-2 text-destructive border-red-500 hover:bg-red-500/10"
              >
                Clear all
              </Button>
              <PopoverClose asChild>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearAllFilters}
                  className="h-7 text-xs"
                >
                  Apply filter
                </Button>
              </PopoverClose>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-sm font-medium">Sort by</span>

            <div className="grid grid-cols-4 gap-1">
              {SORT_OPTIONS.map((option) => (
                <Button
                  key={option.value}
                  variant={filters.sortBy === option.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleFilterChange({ sortBy: option.value })}
                  className="text-xs h-7"
                >
                  {option.label}
                </Button>
              ))}
            </div>

            <div className="flex items-center gap-1">
              <Button
                variant={filters.sortOrder === 'asc' ? "default" : "outline"}
                size="sm"
                onClick={() => handleFilterChange({ sortOrder: 'asc' })}
                className="text-xs h-7"
              >
                A→Z
              </Button>
              <Button
                variant={filters.sortOrder === 'desc' ? "default" : "outline"}
                size="sm"
                onClick={() => handleFilterChange({ sortOrder: 'desc' })}
                className="text-xs h-7"
              >
                Z→A
              </Button>
            </div>
          </div>


          {/* Categories */}
          <div className="space-y-1">
            <span className="text-sm font-medium">Categories</span>
            <div className="flex flex-wrap gap-1">
              <Button
                key="all"
                variant={filters.categories.includes("all") ? "default" : "outline"}
                size="sm"
                onClick={() => toggleCategory("all")}
                className="text-xs h-7"
              >
                All
              </Button>
              {mockCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={filters.categories.includes(category.id) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleCategory(category.id)}
                  className="text-xs h-7"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Status */}
          <div className="space-y-1">
            <span className="text-sm font-medium">Status</span>
            <div className="flex gap-1">
              {STATUS_OPTIONS.map((option) => (
                <Button
                  key={option.value}
                  variant={filters.publishedStatus === option.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleFilterChange({ publishedStatus: option.value })}
                  className="text-xs h-7"
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};