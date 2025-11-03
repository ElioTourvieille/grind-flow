"use client";

import { Preloaded, usePreloadedQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { signOut } from "@/auth/auth-client";
import { useRouter } from "next/navigation";

type DashboardClientProps = {
  preloadedUser: Preloaded<typeof api.users.getCurrentAppUser>;
};

export default function DashboardClient({ preloadedUser }: DashboardClientProps) {
  const appUser = usePreloadedQuery(preloadedUser);
  const deleteUser = useMutation(api.users.deleteCurrentUser);
  const router = useRouter();

  const handleDeleteAccount = async () => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.")) {
      return;
    }

    try {
      await deleteUser();
      toast.success("Compte supprimé avec succès");
      // Déconnexion et redirection
      await signOut();
      router.push("/");
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
      toast.error("Erreur lors de la suppression du compte");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4 text-white">Dashboard</h1>
      <div className="space-y-4">
        {/* Profil */}
        <div className="bg-[#2A2A2A] p-4 rounded-lg border border-[#333333]">
          <h2 className="font-semibold mb-2 text-white">
            Bienvenue {appUser?.name || appUser?.email || ""}
          </h2>
          {appUser && (
            <div>
              <p className="text-sm text-[#E0E0E0]">Email: {appUser.email}</p>
              <p className="text-sm text-[#34D399] mt-2">✅ Profil synchronisé</p>
            </div>
          )}
        </div>

        {/* Zone danger */}
        <div className="bg-[#2A1A1A] border border-[#4A2A2A] p-4 rounded-lg">
          <h3 className="font-semibold text-[#FF6B6B] mb-2">Zone de danger</h3>
          <p className="text-sm text-[#FF8E8E] mb-4">
            La suppression de votre compte est définitive et irréversible.
          </p>
          <Button 
            variant="destructive" 
            onClick={handleDeleteAccount}
            size="sm"
          >
            Supprimer mon compte
          </Button>
        </div>
      </div>
    </div>
  );
}
