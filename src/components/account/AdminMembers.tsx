"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { EllipsisVertical, Users } from "lucide-react"
import { teamMembers } from "@/constants/mockAdminMembers"
import { IAdminMember } from "@/types/general"

export function AdminTeamTable() {
  const handleRoleChange = (memberId: string, newRole: string) => {
    console.log(`Changing role for member ${memberId} to ${newRole}`)
  }

  const handleStatusChange = (memberId: string, newStatus: string) => {
    console.log(`Changing status for member ${memberId} to ${newStatus}`)
  }

  return (
    <div className="border border-border rounded-lg p-4">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
          <Users className="h-5 w-5" />
          Admin Team
        </h2>
        <p className="text-sm text-muted-foreground mt-1">Manage team members, roles, and permissions.</p>
      </div>
      <div className="overflow-hidden">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow className="border-b border-border hover:bg-transparent">
              <TableHead className="text-left whitespace-nowrap p-2 px-4 text-sm font-medium text-muted-foreground">
                SL
              </TableHead>
              <TableHead className="text-left whitespace-nowrap p-2 px-4 flex-1 text-sm font-medium text-muted-foreground">
                Member
              </TableHead>
              <TableHead className="text-center whitespace-nowrap p-2 px-4 text-sm font-medium text-muted-foreground">
                Role
              </TableHead>
              <TableHead className="text-right whitespace-nowrap p-2 px-4 text-sm font-medium text-muted-foreground">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teamMembers.map((member: IAdminMember, index: number) => (
              <TableRow
                key={member.id}
                className={`"border-b border-border last:border-b-0 ${member.status === "active" ? "bg-background" : "bg-red-500/5"} hover:bg-muted/50 transition-all duration-200 ease-in-out cursor-pointer`}
              >
                <TableCell className="p-2 px-4 text-left text-sm whitespace-nowrap">
                  {index + 1}
                </TableCell>
                <TableCell className="p-2 px-4 text-left text-sm whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 rounded-sm">
                      <AvatarImage src={member.avatar} alt={member.name} className="rounded-sm" />
                      <AvatarFallback className="rounded-sm">{member.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{member.name}</div>
                      <div className="text-sm text-muted-foreground">{member.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="p-2 px-4 text-center">
                  <Badge variant="blue">
                    {member.role}
                  </Badge>
                </TableCell>
                <TableCell className="p-2 px-4 text-sm text-right whitespace-nowrap">
                  {member.role === "Super Admin" ? (
                    <span className="text-xs text-muted-foreground">Protected</span>
                  ) : (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="hover:bg-background">
                          <EllipsisVertical />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        {member.role === "Admin" ? (
                          <DropdownMenuItem onClick={() => handleRoleChange(member.id, "Member")}>Set as Member</DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem onClick={() => handleRoleChange(member.id, "Admin")}>Set as Admin</DropdownMenuItem>
                        )}
                        <DropdownMenuSeparator />
                        {member.status === "active" ? (
                          <DropdownMenuItem onClick={() => handleStatusChange(member.id, "inactive")} className="text-red-600">
                            Deactivate
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem onClick={() => handleStatusChange(member.id, "active")} className="text-green-600">
                            Activate
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
};