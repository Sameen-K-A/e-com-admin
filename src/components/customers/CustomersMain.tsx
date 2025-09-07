'use client'

import { CustomersListHeader } from "./CustomersHeader"
import { CustomersTable } from "./CustomersTable";
import { ICustomerTableList } from "@/types/general";
import { mockCustomers } from "@/constants/mockCustomers";

export default function CustomersList() {
  const customers: ICustomerTableList[] = mockCustomers;

  const handleSearch = (value: string) => {
    console.log("Search customers:", value);
  };

  return (
    <div className="h-fit">
      <div className="container mx-auto space-y-4">
        <CustomersListHeader onSearchChange={handleSearch} />
        <CustomersTable customers={customers} />
      </div>
    </div>
  );
};