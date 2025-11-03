"use client";

import { Button } from "./ui/button";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { onDiscordSignIn } from "@/auth/auth-client";

const DiscordButton = () => {
  return (
    <Button
      variant="primary"
      size="xl"
      className="font-semibold"
      onClick={() => onDiscordSignIn()}
    >
      <DiscordLogoIcon className="size-6 mr-2" />
      Essayer avec Discord
    </Button>
  );
};

export default DiscordButton;
