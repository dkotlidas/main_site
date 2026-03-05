import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { value: 500, prefix: "€", suffix: "K+", label: "Ad Spend Managed" },
  { value: 15, prefix: "", suffix: "+", label: "Clients" },
  { value: 11.93, prefix: "", suffix: "x", label: "Best ROAS", decimal: true },
  { value: 5, prefix: "", suffix: "+", label: "Years Experience" },
];

const StatsBar = () => {
  return (
    <section className="py-12 border-y border-border bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

function StatItem({ value, prefix, suffix, label, decimal }: {
  value: number; prefix: string; suffix: string; label: string; decimal?: boolean;
}) {
  const end = decimal ? Math.floor(value * 100) : value;
  const { count, ref } = useCountUp(end, 2000);
  const display = decimal ? (count / 100).toFixed(2) : count;

  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl md:text-4xl font-heading font-extrabold gradient-text">
        {prefix}{display}{suffix}
      </p>
      <p className="text-muted-foreground text-sm mt-1">{label}</p>
    </div>
  );
}

export default StatsBar;
