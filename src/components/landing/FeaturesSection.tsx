import { motion } from "framer-motion";
import { Shield, Globe, Zap, BarChart3, Calendar, Bell } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Your patient data is encrypted and protected. We meet all healthcare privacy standards.",
  },
  {
    icon: Globe,
    title: "Multi-Language",
    description: "Serve patients in English, Spanish, and more. No language barriers.",
  },
  {
    icon: Zap,
    title: "Instant Setup",
    description: "Go live in under 24 hours. No hardware, no IT team required.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "AI books appointments directly into your calendar based on real-time availability.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "See call volumes, booking rates, and patient insights at a glance.",
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    description: "Get notified immediately for urgent calls or emergency situations.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Features
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-4 mb-6 tracking-tight">
            Everything your clinic
            <br />
            <span className="text-gradient">needs to thrive.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-soft"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
