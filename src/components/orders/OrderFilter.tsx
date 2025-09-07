'use client'

import { useState } from "react";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import type { DateRange } from "react-day-picker";
import { PopoverClose } from "@radix-ui/react-popover";

interface OrderFilterState {
  status: string[];
  sortBy: "date" | "total" | "status" | "customer";
  sortOrder: "asc" | "desc";
  dateRange: DateRange | undefined;
}

const SORT_OPTIONS: { value: OrderFilterState["sortBy"]; label: string }[] = [
  { value: "date", label: "Date" },
  { value: "total", label: "Total" },
  { value: "status", label: "Status" },
  { value: "customer", label: "Customer" },
];

const STATUS_OPTIONS = [
  { value: "all", label: "All Orders" },
  { value: "Delivered", label: "Delivered" },
  { value: "Shipped", label: "Shipped" },
  { value: "Processing", label: "Processing" },
  { value: "Cancelled", label: "Cancelled" },
  { value: "Pending", label: "Pending" },
];

export const OrderFilter = () => {
  const [filters, setFilters] = useState<OrderFilterState>({
    status: ["all"],
    sortBy: "date",
    sortOrder: "asc",
    dateRange: undefined,
  });

  const handleFilterChange = (newFilters: Partial<OrderFilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const toggleStatus = (status: string) => {
    if (status === "all") {
      handleFilterChange({ status: ["all"] });
    } else {
      let newStatus = filters.status.includes(status)
        ? filters.status.filter((s) => s !== status)
        : [...filters.status.filter((s) => s !== "all"), status];

      if (newStatus.length === 0) {
        newStatus = ["all"];
      }

      handleFilterChange({ status: newStatus });
    }
  };

  const clearAllFilters = () => {
    setFilters({
      status: ["all"],
      sortBy: "date",
      sortOrder: "asc",
      dateRange: undefined,
    });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="gap-2 h-9 rounded-3xl w-fit md:min-w-32">
          <Filter className="h-4 w-4" />
          <span className="hidden md:inline">Filter</span>
        </Button>
      </PopoverTrigger>

      <PopoverContent
        backdrop={true}
        className="w-80 p-0 mx-2 max-h-[30rem] overflow-x-hidden overflow-y-auto custom-scrollbar"
        align="center"
      >
        <div className="p-4 space-y-4">
          {/* Header */}
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

          {/* Sort By */}
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
                variant={filters.sortOrder === "asc" ? "default" : "outline"}
                size="sm"
                onClick={() => handleFilterChange({ sortOrder: "asc" })}
                className="text-xs h-7"
              >
                Asc
              </Button>
              <Button
                variant={filters.sortOrder === "desc" ? "default" : "outline"}
                size="sm"
                onClick={() => handleFilterChange({ sortOrder: "desc" })}
                className="text-xs h-7"
              >
                Desc
              </Button>
            </div>
          </div>

          {/* Status */}
          <div className="space-y-1">
            <span className="text-sm font-medium">Status</span>
            <div className="flex flex-wrap gap-1">
              {STATUS_OPTIONS.map((option) => (
                <Button
                  key={option.value}
                  variant={filters.status.includes(option.value) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleStatus(option.value)}
                  className="text-xs h-7"
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Date Range */}
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Date Range</span>
              {filters.dateRange?.from && (
                <p className="text-xs text-muted-foreground">
                  {filters.dateRange.to
                    ? `${format(filters.dateRange.from, "MMM d, yyyy")} - ${format(
                      filters.dateRange.to,
                      "MMM d, yyyy"
                    )}`
                    : format(filters.dateRange.from, "MMM d, yyyy")}
                </p>
              )}
            </div>
            <Calendar
              mode="range"
              selected={filters.dateRange}
              onSelect={(range) => handleFilterChange({ dateRange: range })}
              disabled={(date) => date > new Date()}
              numberOfMonths={1}
              className="rounded-md border w-full"
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};