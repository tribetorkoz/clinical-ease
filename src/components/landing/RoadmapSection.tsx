import { motion } from "framer-motion";

const phases = [
  {
    phase: "Phase 0",
    title: "Stealth Build",
    timeline: "Month 1–2",
    items: [
      "Build core Voice AI (booking + FAQ)",
      "Simple clinic dashboard",
      "HIPAA-compliant setup",
      "3–5 free pilot clinics",
    ],
  },
  {
    phase: "Phase 1",
    title: "Validation",
    timeline: "Month 3–5",
    items: [
      "First 10 paying clinics",
      "Product refinement from real feedback",
      "Onboarding automation",
      "Target: $5K–$10K MRR",
    ],
  },
  {
    phase: "Phase 2",
    title: "Growth",
    timeline: "Month 6–12",
    items: [
      "Structured cold outreach",
      "Billing company partnerships",
      "Google Calendar integration",
      "Target: $20K–$40K MRR",
    ],
  },
  {
    phase: "Phase 3",
    title: "Scale",
    timeline: "Month 13–18",
    items: [
      "Mobile app for clinics",
      "Automated follow-up system",
      "Emergency detection & routing",
      "Target: $60K–$120K MRR",
    ],
  },
];

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Roadmap
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-4 mb-6 tracking-tight">
            From zero to
            <br />
            <span className="text-gradient">$120K MRR.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300"
            >
              <div className="text-xs font-medium text-primary mb-1">{phase.phase}</div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{phase.title}</h3>
              <div className="text-sm text-muted-foreground mb-4">{phase.timeline}</div>
              <ul className="space-y-2">
                {phase.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
