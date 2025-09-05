import { AdminTeamTable } from "@/components/account/AdminMembers";
import { GeneralInformation } from "@/components/account/GeneralInfo";
import { InviteMembers } from "@/components/account/Invite";
import { SecuritySection } from "@/components/account/Security";

export default function Accounts() {
  return (
    <div className="space-y-5">
      <h3 className="text-xl md:text-2xl font-bold">Accounts</h3>
      <GeneralInformation />
      <InviteMembers />
      <AdminTeamTable />
      <SecuritySection />
    </div>
  );
}