import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { authComponent } from "./auth";

export const syncOrCreateUser = mutation({
  args: {},
  handler: async (ctx) => {
    const authUser = await authComponent.getAuthUser(ctx);
    
    const existingUser = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("authUserId"), authUser._id))
      .first();

    if (existingUser) {
      const hasChanged = 
        existingUser.name !== authUser.name ||
        existingUser.email !== authUser.email ||
        existingUser.image !== authUser.image ||
        existingUser.emailVerified !== authUser.emailVerified;

      if (hasChanged) {
        await ctx.db.patch(existingUser._id, {
          name: authUser.name,
          email: authUser.email,
          image: authUser.image || "",
          emailVerified: authUser.emailVerified,
          updatedAt: Date.now(),
        });
      }
      
      return existingUser._id;
    }

    const userId = await ctx.db.insert("users", {
      authUserId: authUser._id,
      name: authUser.name,
      email: authUser.email,
      image: authUser.image || "",
      emailVerified: authUser.emailVerified,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    return userId;
  },
});

export const getCurrentAppUser = query({
  args: {},
  handler: async (ctx) => {
    const authUser = await authComponent.safeGetAuthUser(ctx);
    
    if (!authUser) return null;

    return ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("authUserId"), authUser._id))
      .first();
  },
});

export const deleteCurrentUser = mutation({
  args: {},
  handler: async (ctx) => {
    const authUser = await authComponent.getAuthUser(ctx);
    
    // 1. Supprime de la table users applicative
    const appUser = await ctx.db
      .query("users")
      .withIndex("by_authUserId", (q) => q.eq("authUserId", authUser._id))
      .first();

    if (appUser) {
      await ctx.db.delete(appUser._id);
    }

    // 2. Supprime de BetterAuth via l'adapter
    await ctx.runMutation(authComponent.component.adapter.deleteOne, {
      input: {
        model: "user",
        where: [{
          field: "_id",
          value: authUser._id,
          operator: "eq",
        }],
      },
    });

    return { success: true, message: "Utilisateur supprimé avec succès" };
  },
});
