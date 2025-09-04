'use client'

import { AppSidebar } from "@/components/sidebar/AppSidebar";
import { Header } from "@/components/sidebar/Header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import type { IsidebarItems } from "@/types/general"
import { IoCart, IoSettingsSharp, IoHome } from "react-icons/io5";
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
      title: "Orders",
      url: ROUTE.ORDERS,
      icon: IoCart,
      onClick: () => router.push(ROUTE.ORDERS),
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