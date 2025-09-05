'use client'

import { useState } from "react";
import { CustomersListHeader } from "./CustomersHeader"
import { CustomersTable } from "./CustomersTable";
import { ICustomerTableList } from "@/types/general";
import { mockCustomers } from "@/constants/mockCustomers";

export default function CustomersList() {
  const [customers] = useState<ICustomerTableList[]>(mockCustomers);

  const handleFilter = () => {
    console.log("Filter customers");
  };

  const handleSearch = (value: string) => {
    console.log("Search customers:", value);
  };

  return (
    <div className="h-fit">
      <div className="container mx-auto space-y-4">
        <CustomersListHeader
          onFilter={handleFilter}
          onSearchChange={handleSearch}
        />
        <CustomersTable customers={customers} />
      </div>
    </div>
  );
};