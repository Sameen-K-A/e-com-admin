'use client'

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface CustomersListHeaderProps {
  onSearchChange: (value: string) => void;
}

export const CustomersListHeader = ({ onSearchChange }: CustomersListHeaderProps) => {
  return (
    <div className="relative flex-1 max-w-md h-10">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" />
      <Input
        type="text"
        placeholder="Search customers..."
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-9 rounded-3xl h-full text-sm"
      />
    </div>
  );
};