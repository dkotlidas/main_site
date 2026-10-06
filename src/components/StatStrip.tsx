type Stat = { value: string; label: string };

const StatStrip = ({ stats }: { stats: Stat[] }) => (
  <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-y py-8 md:grid-cols-4">
    {stats.map((stat) => (
      <div key={stat.label}>
        <dt className="text-[15px] text-muted-foreground">{stat.label}</dt>
        <dd className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl">{stat.value}</dd>
      </div>
    ))}
  </dl>
);

export default StatStrip;
