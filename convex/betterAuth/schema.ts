
import { defineSchema } from "convex/server";
import { tables } from "./generatedSchema";

// Don't add custom fields or change types to the generated schema
// here, use Better Auth's schema config for that:
// https://www.better-auth.com/docs/concepts/database#extending-core-schema
//
// Or, for tables that aren't supported for schema extension, you can track
// Better Auth tables with your own app tables using triggers:
// https://convex-better-auth.netlify.app/triggers
import { defineTable } from "convex/server";
import { v } from "convex/values";

const schema = defineSchema({
  ...tables,
  // Table users pour ton application (distincte de la table "user" de BetterAuth)
  users: defineTable({
    authUserId: v.string(), // Référence vers BetterAuth user.id
    name: v.string(),
    email: v.string(),
    image: v.optional(v.string()),
    emailVerified: v.boolean(),
    createdAt: v.number(),
    updatedAt: v.number(),
    // Ajoute tes champs custom ici
    // role: v.optional(v.string()),
    // credits: v.optional(v.number()),
  })
    .index("by_authUserId", ["authUserId"])
    .index("by_email", ["email"]),
});

export default schema;
