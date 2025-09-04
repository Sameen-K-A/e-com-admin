'use client'

import { SidebarTrigger } from '@/components/ui/sidebar'
import { MobileSheet } from './MobileSheet'
import type { IsidebarItems } from '@/types/general';

interface HeaderProps {
  sidebarData: IsidebarItems[];
};

export function Header({ sidebarData }: HeaderProps) {
  return (
    <header className="flex h-[var(--header-height)] shrink-0 mb-8 sm:mb-5 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-[var(--header-height)]">
      <div className="hidden md:flex w-full items-center justify-between">
        <SidebarTrigger />
      </div>
      <div className="flex md:hidden w-full items-center justify-between">
        <h3 className='font-logo text-2xl font-bold mt-3 mb-2'>E-Com</h3>
        <MobileSheet sidebarData={sidebarData} />
      </div>
    </header>
  )
};