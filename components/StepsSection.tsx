"use client"

import { ReactNode } from "react";

interface StepProps {
  stepNumber: number;
  title: string;
  description: string;
  icon: ReactNode;
  isLast?: boolean;
}

function Step({ stepNumber, title, description, icon, isLast = false }: StepProps) {
  return (
    <div className="relative flex items-start gap-6">
      <div className="flex flex-col items-center">
        {stepNumber > 1 && (
          <div className="w-0.5 h-8 bg-emerald-400/30 mb-2" />
        )}
        
        <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 border-emerald-400 bg-background">
          <div className="text-emerald-400">
            {icon}
          </div>
        </div>
        
        {!isLast && (
          <div className="w-0.5 h-24 bg-emerald-400/30 mt-2" />
        )}
      </div>

      <div className="flex-1 pt-1">
        <div className="text-sm font-medium text-emerald-400 mb-2">
          STEP {stepNumber}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">
          {title}
        </h3>
        <p className="text-gray-300 leading-relaxed max-w-prose">
          {description}
        </p>
      </div>
    </div>
  );
}

interface StepsSectionProps {
  steps: Array<{
    title: string;
    description: string;
    icon: ReactNode;
  }>;
}

export default function StepsSection({ steps }: StepsSectionProps) {
  return (
    <section className="w-full bg-background px-4 sm:px-6 lg:px-16 py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-6xl font-bold mb-20 text-center text-white">
          Comment ça marche ?
        </h2>
        
        <div className="space-y-0">
          {steps.map((step, index) => (
            <Step
              key={index}
              stepNumber={index + 1}
              title={step.title}
              description={step.description}
              icon={step.icon}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

