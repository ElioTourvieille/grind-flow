import { mutation } from "./_generated/server";
import { authComponent } from "./auth";

// Migration : Synchronise tous les users BetterAuth existants vers la table users
export const migrateExistingUsers = mutation({
  args: {},
  handler: async (ctx) => {
    // Cette fonction doit être appelée manuellement depuis le dashboard Convex
    // Elle ne peut pas lister tous les users du component directement
    // Tu dois la déclencher manuellement après t'être connecté
    
    const authUser = await authComponent.getAuthUser(ctx);
    
    // Vérifie si l'user existe déjà dans users
    const existingAppUser = await ctx.db
      .query("users")
      .withIndex("by_authUserId", (q) => q.eq("authUserId", authUser._id))
      .first();

    if (!existingAppUser) {
      // Crée l'utilisateur
      await ctx.db.insert("users", {
        authUserId: authUser._id,
        name: authUser.name,
        email: authUser.email,
        image: authUser.image || undefined,
        emailVerified: authUser.emailVerified,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });
      
      return { success: true, message: "Utilisateur migré avec succès" };
    }
    
    return { success: false, message: "Utilisateur déjà existant dans la table users" };
  },
});

// Supprime un utilisateur de la table users (pas de BetterAuth)
export const deleteAppUser = mutation({
  args: {},
  handler: async (ctx) => {
    const authUser = await authComponent.getAuthUser(ctx);
    
    const appUser = await ctx.db
      .query("users")
      .withIndex("by_authUserId", (q) => q.eq("authUserId", authUser._id))
      .first();

    if (appUser) {
      await ctx.db.delete(appUser._id);
      return { success: true };
    }
    
    return { success: false, message: "Utilisateur non trouvé" };
  },
});
