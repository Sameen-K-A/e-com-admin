"use client";

import { Sheet, SheetContent, SheetHeader, SheetClose, SheetTrigger } from '@/components/ui/sheet';
import type { IsidebarItems } from "@/types/general";
import { ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import * as React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import LogoutButton from './Logout';

interface MobileSheetProps {
  sidebarData: IsidebarItems[];
}

export function MobileSheet({ sidebarData }: MobileSheetProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const handleItemClick = (item: IsidebarItems) => {
    if (item.onClick) {
      item.onClick();
    } else {
      router.push(item.url);
    }
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="p-2 rounded-md border bg-background"
          aria-label="Open menu"
        >
          <Menu size={18} />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="p-0 w-screen max-w-full">
        <SheetHeader className="flex flex-row px-4 pt-4">
          <SheetClose asChild>
            <button
              className="p-2 rounded-md border bg-background hover:bg-muted transition-colors"
              aria-label="Back"
            >
              <ChevronLeft size={18} />
            </button>
          </SheetClose>
        </SheetHeader>
        <div className="px-4 pb-4 flex flex-col h-full gap-1.5 overflow-y-auto">
          {sidebarData.map((item) => {
            const isActive = pathname.startsWith(item.url);
            return (
              <button
                key={item.title}
                className={`flex items-center gap-2 p-2 rounded-lg text-left transition-colors ${isActive ? "bg-primary-gradient text-white" : "hover:bg-muted"}`}
                onClick={() => handleItemClick(item)}
              >
                {item.icon && <item.icon />}
                <span>{item.title}</span>
                <ChevronRight size={16} className='ml-auto' strokeWidth={1.5} />
              </button>
            );
          })}
          <LogoutButton className='mt-auto' />
        </div>
      </SheetContent>
    </Sheet>
  );
}