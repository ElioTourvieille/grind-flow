import { getToken } from "@/auth/auth-server";
import { preloadQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import DashboardClient from "./dashboard-client";

export default async function DashboardPage() {
  const token = await getToken();
  
  // Précharge les données utilisateur depuis le serveur
  const preloadedUser = await preloadQuery(
    api.users.getCurrentAppUser,
    {},
    { token }
  );

  return <DashboardClient preloadedUser={preloadedUser} />;
}
