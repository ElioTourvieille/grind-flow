"use client"

import { ReactNode, useState } from "react";
import { ArrowRightIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn("relative group block p-2 h-full cursor-pointer")}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <AnimatePresence>
          {isHovered && (
            <motion.span
              className="absolute inset-0 h-full w-full bg-emerald-800/10 block rounded-2xl"
              layoutId="hoverBackground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.15 } }}
              exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
            />
          )}
        </AnimatePresence>
        <div className="relative z-20 max-w-sm min-h-64 flex flex-col items-start gap-4 card-gradient">
          <div className="flex items-center rounded bg-linear-to-br from-emerald-700 to-emerald-300 p-2 text-white">
            {icon}
          </div>
          <div className="flex w-full min-w-0 flex-col items-start justify-center gap-2 text-base">
            <h3 className="mb-2 py-2 text-xl font-bold leading-6 text-white">
              {title}
            </h3>
            <p className="text-neutral-200 max-w-prose">
              {description}
            </p>        
          </div>
        </div>
      </div>
    </div>
  );
}