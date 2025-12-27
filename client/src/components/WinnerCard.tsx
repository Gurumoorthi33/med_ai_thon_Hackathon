import { Trophy, Award, Medal } from "lucide-react";
import { cn } from "@/lib/utils";

interface WinnerCardProps {
  rank: "grand" | "runner-up" | "finalist";
  teamName: string;
  projectTitle: string;
  description: string;
}

export function WinnerCard({ rank, teamName, projectTitle, description }: WinnerCardProps) {
  const isGrand = rank === "grand";
  const isRunnerUp = rank === "runner-up";

  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden transition-all duration-300 border",
        isGrand 
          ? "bg-gradient-to-br from-yellow-50 to-amber-100 border-amber-200 shadow-xl shadow-amber-500/10 p-8 md:p-10 col-span-1 md:col-span-2 lg:col-span-3 transform hover:-translate-y-1"
          : isRunnerUp
            ? "bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200 shadow-lg p-6 hover:-translate-y-1"
            : "bg-white border-border shadow-sm p-6 hover:shadow-md hover:border-primary/20"
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={cn(
          "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
          isGrand ? "bg-amber-500 text-white" : isRunnerUp ? "bg-slate-400 text-white" : "bg-primary/10 text-primary"
        )}>
          {isGrand ? "Grand Winner" : isRunnerUp ? "Runner Up" : "Finalist"}
        </div>
        {isGrand && <Trophy className="w-8 h-8 text-amber-500" />}
        {isRunnerUp && <Medal className="w-6 h-6 text-slate-400" />}
        {!isGrand && !isRunnerUp && <Award className="w-5 h-5 text-primary/40" />}
      </div>

      <h3 className={cn(
        "font-display font-bold mb-2",
        isGrand ? "text-3xl text-amber-900" : "text-xl text-foreground"
      )}>
        {projectTitle}
      </h3>
      
      <p className={cn(
        "font-medium mb-4",
        isGrand ? "text-amber-700" : "text-primary"
      )}>
        Team: {teamName}
      </p>
      
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
