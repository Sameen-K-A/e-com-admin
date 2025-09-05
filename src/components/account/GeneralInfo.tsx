"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { teamMembers } from "@/constants/mockAdminMembers"
import { Mail } from "lucide-react"

export function GeneralInformation() {
  const userInfo = teamMembers[0];

  return (
    <div className="flex items-center gap-4 mb-10">
      <Avatar className="h-16 w-16 ring-2 ring-border/30 rounded-sm">
        <AvatarImage src="" className="rounded-sm" alt="Profile" />
        <AvatarFallback className="text-lg font-medium rounded-sm">{userInfo.name[0]}</AvatarFallback>
      </Avatar>

      <div>
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-lg font-semibold text-foreground">{userInfo.name}</h3>
          <Badge variant="secondary" className="bg-blue-500/10 text-blue-700 border-blue-500">
            {userInfo.role}
          </Badge>
        </div>

        <div className="flex items-center gap-2 text-muted-foreground">
          <Mail className="h-4 w-4" />
          <span>{userInfo.email}</span>
        </div>
      </div>
    </div>
  )
}