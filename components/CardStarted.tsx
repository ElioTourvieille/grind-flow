import { Button } from "./ui/button";
import { DiscordLogoIcon } from "@radix-ui/react-icons";

const CardStarted = () => {
  return (
    <div className="z-20 w-full min-h-64 flex flex-col items-center justify-center gap-4 card-gradient">
      <div className="flex w-full min-w-0 flex-col items-center justify-center gap-2 text-base">
        <h3 className="mb-2 py-2 text-2xl font-bold leading-6 text-white">
          Prêt à améliorer ton edge ?
        </h3>
        <p className="text-neutral-200 max-w-prose">
          Essaye Grind Flow dès maintenant avec Discord et découvre comment il
          peut t'aider à améliorer ton edge.
        </p>
      </div>

      <Button variant="primary" size="xl" className="font-semibold">
        <DiscordLogoIcon className="size-6 mr-2" />
        Essayer avec Discord
      </Button>
    </div>
  );
};

export default CardStarted;
