import { motion } from "framer-motion";
import { Phone, Mic, Brain, Calendar, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Patient Calls",
    description: "Patient dials your clinic number — works with your existing phone system via Twilio.",
  },
  {
    icon: Mic,
    title: "Voice AI Answers",
    description: "Natural-sounding AI receptionist answers instantly, in multiple languages.",
  },
  {
    icon: Brain,
    title: "AI Understands",
    description: "Powered by Claude AI to understand context, urgency, and patient intent.",
  },
  {
    icon: Calendar,
    title: "Books Appointment",
    description: "Automatically checks availability and books directly into your schedule.",
  },
  {
    icon: BarChart3,
    title: "You See Everything",
    description: "Real-time dashboard with call summaries, analytics, and patient insights.",
  },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/3 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-4 mb-6 tracking-tight">
            Setup in 24 hours.
            <br />
            <span className="text-gradient">Works forever.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-card border border-border flex items-center justify-center mb-4 shadow-soft relative z-10">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-xs text-primary font-medium mb-1">Step {i + 1}</div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
