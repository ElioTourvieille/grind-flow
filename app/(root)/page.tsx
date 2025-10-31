import CardStarted from "@/components/CardStarted";
import FeatureCard from "@/components/FeatureCard";
import { HeroSection } from "@/components/HeroSection";
import StepsSection from "@/components/StepsSection";
import {
  BrainCircuit,
  ChartNoAxesCombined,
  NotebookPenIcon,
  Link as LinkIcon,
  BarChart3,
  TrendingUp,
} from "lucide-react";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <HeroSection />

      <section className="w-full bg-background px-4 sm:px-6 lg:px-16 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-6xl font-bold mb-8 text-center text-white">
              Fonctionnalités principales
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed text-center">
              Découvrez commment Grind Flow peut vous aider afin de simplifier
              votre progression dans le poker.
            </p>
          </div>
          <div className="flex items-center justify-center flex-wrap gap-6">
          <FeatureCard
            title="Module Étude & Annotation IA"
            description="Centralise tout ton apprentissage (vidéos, docs, articles) et créer des fiches automatiques à partir de tes annotations."
            icon={<NotebookPenIcon className="w-6 h-6" />}
          />
          <FeatureCard
            title="Module Analyse de mains"
            description="Analyse tes mains (saisie ou import .txt/.hh) avec parsing automatique et feedback IA pour identifier tes leaks et t'améliorer."
            icon={<BrainCircuit className="w-6 h-6" />}
          />
          <FeatureCard
            title="Module Résultats & Stats"
            description="Analyse tes résultats et stats de jeu avec l'IA pour identifier tes forces, faiblesses et optimiser ton plan d'étude."
            icon={<ChartNoAxesCombined className="w-6 h-6" />}
          />
          </div>
        </div>
      </section>

      <StepsSection
        steps={[
          {
            title: "Connecte toi",
            description:
              "Crée un compte ou connecte toi via Discord pour commencer à utiliser Grind Flow.",
            icon: <LinkIcon className="w-5 h-5" />,
          },
          {
            title: "Analyse tes mains",
            description:
              "L'IA analyse tes mains jouées (saisie ou import .txt/.hh) avec parsing automatique et feedback IA pour identifier tes leaks et t'améliorer.",
            icon: <BarChart3 className="w-5 h-5" />,
          },
          {
            title: "Améliore ton edge",
            description:
              "Garde tes annotations et résultats pour analyser tes parties et t'améliorer.",
            icon: <TrendingUp className="w-5 h-5" />,
          },
        ]}
      />

      <section className="w-full bg-background px-4 sm:px-6 lg:px-16 py-24 flex items-center justify-center">
        <div className="w-full max-w-3xl mx-auto">
          <CardStarted />
        </div>
      </section>

      <Footer />
    </main>
  );
}
