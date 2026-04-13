import { Zap } from "lucide-react";

export function PromoBanner() {
  return (
    <div className="bg-secondary text-secondary-foreground py-2 px-4 text-center font-bold text-sm tracking-wide">
      <div className="flex items-center justify-center gap-2">
        <Zap className="w-4 h-4" />
        <span>SPRING SPECIAL: 15% OFF ALL ELECTRICAL PROJECTS!</span>
        <Zap className="w-4 h-4 hidden sm:block" />
      </div>
    </div>
  );
}
