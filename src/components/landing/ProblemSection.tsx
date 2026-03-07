import { motion } from "framer-motion";
import { PhoneOff, DollarSign, UserX } from "lucide-react";

const problems = [
  {
    icon: PhoneOff,
    title: "Missed Calls",
    description: "Up to 34% of patient calls go unanswered during business hours. After hours? Even more.",
  },
  {
    icon: DollarSign,
    title: "Lost Revenue",
    description: "Each missed call can cost $150–$300 in lost appointments. That adds up to thousands every month.",
  },
  {
    icon: UserX,
    title: "Patients Leave",
    description: "Most patients won't leave a voicemail — they'll call your competitor instead.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            The Problem
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-4 mb-6 tracking-tight">
            Your phone is your
            <br />
            <span className="text-gradient">biggest bottleneck.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Clinics lose patients every day simply because no one picked up the phone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-soft text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 mx-auto group-hover:bg-primary/15 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
