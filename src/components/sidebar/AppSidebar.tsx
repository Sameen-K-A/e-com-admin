"use client";

import { NavMain } from './NavMain'
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem } from '@/components/ui/sidebar'
import type { IsidebarItems } from "@/types/general"


type AppSidebarProps = React.ComponentProps<typeof Sidebar> & { sidebarData: IsidebarItems[] };

export function AppSidebar({ sidebarData: _sidebarData, ...props }: AppSidebarProps) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className='font-logo text-2xl font-bold ml-2 mt-3 mb-2'>
            E-Com
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain sidebarData={_sidebarData} />
      </SidebarContent>
    </Sidebar>
  )
};