"use client";

import React from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useSession } from "@/auth/auth-client";

export function UserSyncProvider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const appUser = useQuery(api.users.getCurrentAppUser);
  const syncUser = useMutation(api.users.syncOrCreateUser);
  const [syncAttempted, setSyncAttempted] = React.useState(false);

  React.useEffect(() => {
    if (session?.user && appUser === null && !syncAttempted) {
      setSyncAttempted(true);
      syncUser()
        .then(() => {
          console.log("✅ Utilisateur synchronisé avec succès");
        })
        .catch((error) => {
          console.error("❌ Erreur lors de la synchronisation:", error);
          setSyncAttempted(false);
        });
    }
  }, [session?.user, appUser, syncAttempted, syncUser]);

  return <>{children}</>;
}
