import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$299",
    period: "/month",
    description: "For small clinics (1–2 doctors)",
    minutes: "800 minutes included",
    features: [
      "AI voice receptionist 24/7",
      "Appointment booking",
      "Call summaries & transcripts",
      "Email notifications",
      "Basic analytics dashboard",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$499",
    period: "/month",
    description: "For growing practices (3–5 doctors)",
    minutes: "1,500 minutes included",
    features: [
      "Everything in Starter",
      "Multi-language support",
      "EHR integration",
      "Priority routing for emergencies",
      "Advanced analytics & insights",
      "Custom voice personality",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$799",
    period: "/month",
    description: "For multi-location clinics",
    minutes: "3,000 minutes included",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom AI training",
      "HIPAA compliance certified",
      "API access & webhooks",
      "Multi-location management",
      "SLA guarantee",
    ],
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-4 mb-6 tracking-tight">
            8% the cost of a
            <br />
            <span className="text-gradient">receptionist.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            No contracts. No setup fees. Cancel anytime.
            <br />
            Additional minutes at $0.35/min.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlighted
                  ? "bg-card border-2 border-primary shadow-elevated glow-primary"
                  : "bg-card border border-border"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
              </div>

              <div className="mb-1">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <div className="text-sm text-primary font-medium mb-6">{plan.minutes}</div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "hero" : "heroOutline"}
                className="w-full rounded-xl"
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
