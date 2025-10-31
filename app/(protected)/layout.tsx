import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getToken } from "@/auth/auth-server";

export default async function ProtectedLayout({ children }: { children: ReactNode }) {
  const token = await getToken();

  if (!token) {
    // redirige vers la page de connexion avec la cible pour revenir après login
    redirect(`/sign-in?next=${encodeURIComponent('/')}`);
  }

  return <>{children}</>;
}