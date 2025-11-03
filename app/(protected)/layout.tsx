import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getToken } from "@/auth/auth-server";
import { UserSyncProvider } from "@/components/providers/user-sync-provider";

export default async function ProtectedLayout({ children }: { children: ReactNode }) {
  const token = await getToken();

  if (!token) {
    redirect(`/sign-in?next=${encodeURIComponent('/')}`);
  }

  return <UserSyncProvider>{children}</UserSyncProvider>;
}
