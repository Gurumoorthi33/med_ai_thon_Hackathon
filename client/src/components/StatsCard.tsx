import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  delay?: number;
}

export function StatsCard({ label, value, icon: Icon, delay = 0 }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl p-6 shadow-lg shadow-primary/5 border border-border flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-1">
        {value}
      </h3>
      <p className="text-muted-foreground font-medium text-sm uppercase tracking-wider">
        {label}
      </p>
    </motion.div>
  );
}
