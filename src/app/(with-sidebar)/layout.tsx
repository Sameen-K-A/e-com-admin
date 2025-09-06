'use client'

import { AppSidebar } from "@/components/sidebar/AppSidebar";
import { Header } from "@/components/sidebar/Header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import type { IsidebarItems } from "@/types/general"
import { IoCart, IoSettingsSharp, IoHome } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { BiSolidCollection } from "react-icons/bi";
import { MdCategory } from "react-icons/md";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constants/routes";

export default function WithSidebarLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const sidebarData: IsidebarItems[] = [
    {
      title: "Dashboard",
      url: ROUTE.DASHBOARD,
      icon: IoHome,
      onClick: () => router.push(ROUTE.DASHBOARD),
    },
    {
      title: "Products",
      url: ROUTE.PRODUCTS,
      icon: BiSolidCollection,
      onClick: () => router.push(ROUTE.PRODUCTS),
    },
    {
      title: "Categories",
      url: ROUTE.CATEGORIES,
      icon: MdCategory,
      onClick: () => router.push(ROUTE.CATEGORIES),
    },
    {
      title: "Orders",
      url: ROUTE.ORDERS,
      icon: IoCart,
      onClick: () => router.push(ROUTE.ORDERS),
    },
    {
      title: "Customers",
      url: ROUTE.CUSTOMERS,
      icon: FaUsers,
      onClick: () => router.push(ROUTE.CUSTOMERS),
    },
    {
      title: "Accounts",
      url: ROUTE.ACCOUNTS,
      icon: IoSettingsSharp,
      onClick: () => router.push(ROUTE.ACCOUNTS),
    },
  ];

  return (
    <SidebarProvider>
      <AppSidebar variant="inset" sidebarData={sidebarData} />
      <SidebarInset className="p-4">
        <Header sidebarData={sidebarData} />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}