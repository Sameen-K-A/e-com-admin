'use client'

import React, { useState } from "react";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constants/routes";

interface ILogoutButtonProps {
  className?: string;
};

export default function LogoutButton({ className }: ILogoutButtonProps) {
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className={`${className} hover:scale-100 cursor-pointer bg-red-500/5 text-red-500 hover:bg-red-500 hover:text-white justify-start transition-colors duration-300 ease-in-out`}>
          <LogOut />
          <span>Logout</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-left">Confirm Logout</DialogTitle>
          <DialogDescription className="text-left">
            Are you sure you want to logout? You will need to sign in again to access
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end gap-2">
          <DialogClose asChild>
            <Button variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <Button
            variant="destructive"
            onClick={() => router.push(ROUTE.LOGIN)}
          >
            Yes, Logout
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};