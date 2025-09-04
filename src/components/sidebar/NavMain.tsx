"use client";

import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import type { IsidebarItems } from "@/types/general"
import { usePathname, useRouter } from 'next/navigation';

interface NavMainProps {
  sidebarData: IsidebarItems[];
}

export function NavMain({ sidebarData }: NavMainProps) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {sidebarData.map((item) => {
            const isActive = pathname === item.url;
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  tooltip={item.title}
                  className={`cursor-pointer ${isActive ? "bg-primary-gradient text-white" : "hover:bg-muted"}`}
                  onClick={() => router.push(item.url)}
                >
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}