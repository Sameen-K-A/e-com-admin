'use client'

import { Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CustomersListHeaderProps {
  onFilter: () => void;
  onSearchChange: (value: string) => void;
}

export const CustomersListHeader = ({ onFilter, onSearchChange }: CustomersListHeaderProps) => {
  return (
    <div className="flex items-center justify-between gap-2 h-10">
      <div className="relative flex-1 max-w-md h-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" />
        <Input
          type="text"
          placeholder="Search customers..."
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-9 rounded-3xl h-full text-sm"
        />
      </div>

      <Button
        variant="outline"
        onClick={onFilter}
        className="gap-2 rounded-3xl w-fit md:min-w-32 h-full"
      >
        <Filter className="h-4 w-4" />
        <span className="hidden md:inline">Filter</span>
      </Button>
    </div>
  );
};