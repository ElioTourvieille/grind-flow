"use client";

import {
  twoFactorClient,
  magicLinkClient,
  emailOTPClient,
  genericOAuthClient,
  anonymousClient,
  inferAdditionalFields,
} from "better-auth/client/plugins";
import type { auth } from "@/convex/betterAuth/auth";
import { convexClient } from "@convex-dev/better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import { toast } from "sonner";

export const authClient = createAuthClient({
  plugins: [
    inferAdditionalFields<typeof auth>(),
    anonymousClient(),
    magicLinkClient(),
    emailOTPClient(),
    twoFactorClient(),
    genericOAuthClient(),
    convexClient(),
  ],
});

export type AuthClient = typeof authClient;

export const { signIn, signUp, signOut, useSession } = authClient;

export async function onDiscordSignIn() {
  await signIn.social(
    {
      provider: "discord",
      callbackURL: "/dashboard",
    },
    {
      onError: (error) => {
        toast.error(error.error.message);
      },
    }
  );
}
