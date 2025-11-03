import { cn } from "@/lib/utils";
import Image from "next/image";
import DiscordButton from "./DiscordButton";

export function HeroSection() {
  return (
    <section className="relative w-full h-full bg-background px-4 sm:px-6 lg:px-8 py-32">
      <div
        className={cn(
          "absolute inset-0",
          "bg-size-[25px_25px]",
          "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex bg-background mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-12 lg:gap-20">
        <div className="flex-1 flex flex-col items-start z-20 space-y-6 lg:space-y-8">
          <h1 className="relative flex flex-col items-start h1 text-white">
            Master <br /> your Grind.
            <span className="bg-linear-to-b from-emerald-200 to-emerald-700 bg-clip-text text-transparent">
              Stay in Flow.
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-xl leading-relaxed">
            Grind Flow est une plateforme pour maîtriser votre grind. Elle vous
            aide à rester en flow et améliorer votre étude du poker, boosté par
            l'IA.
          </p>
          <DiscordButton />
        </div>

        <div className="shrink-0 w-full max-w-[45%] lg:max-w-[50%] z-20 border border-emerald-900 rounded-xl p-4 shadow-xl bg-background relative overflow-hidden">
          <Image
            src="/hero.png"
            alt="Hero"
            width={600}
            height={600}
            className="z-20 rounded-xl h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
