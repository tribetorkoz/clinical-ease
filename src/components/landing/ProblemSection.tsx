import { motion } from "framer-motion";
import { TrendingDown, PhoneOff, UserX, DollarSign, Clock, Users } from "lucide-react";

const stats = [
  {
    icon: PhoneOff,
    value: "30–34%",
    label: "Calls go unanswered",
    source: "Practice Builders, 2025",
  },
  {
    icon: DollarSign,
    value: "$200K–$500K",
    label: "Revenue lost per clinic/year",
    source: "Patient10x, 2025",
  },
  {
    icon: UserX,
    value: "67–80%",
    label: "Patients won't leave voicemail",
    source: "Simbo AI, 2025",
  },
  {
    icon: Clock,
    value: "72%",
    label: "Patients book by phone",
    source: "notifyMD, 2024",
  },
  {
    icon: TrendingDown,
    value: "$150B",
    label: "No-show losses annually (US)",
    source: "Curogram, 2025",
  },
  {
    icon: Users,
    value: "78%",
    label: "Physicians report staff shortage",
    source: "Athenahealth",
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
            Every missed call is a
            <br />
            <span className="text-gradient">lost patient.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Small clinics lose hundreds of thousands in revenue every year because they
            simply can't answer the phone fast enough.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-soft"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground mb-3">{stat.label}</div>
              <div className="text-xs text-muted-foreground/60">{stat.source}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
