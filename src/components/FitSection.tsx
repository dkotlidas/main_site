import { CheckCircle, XCircle } from "lucide-react";

const goodFit = [
  "E-commerce brands spending €3K+/month on ads",
  "Lead gen businesses that need qualified pipeline",
  "Agencies that want to improve client results",
  "Teams that need tracking & attribution fixed",
];

const notFit = [
  "Businesses with no existing product-market fit",
  "One-off requests with no ongoing commitment",
  "Budgets under €1K/month in ad spend",
];

const FitSection = () => {
  return (
    <section className="py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="text-primary font-heading font-semibold tracking-widest uppercase text-sm mb-3">Who I Work With</p>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold">Is This a Good Fit?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h3 className="font-heading font-bold text-lg mb-5">Good fit ✅</h3>
            <ul className="space-y-3">
              {goodFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h3 className="font-heading font-bold text-lg mb-5">Not the right fit ❌</h3>
            <ul className="space-y-3">
              {notFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitSection;
