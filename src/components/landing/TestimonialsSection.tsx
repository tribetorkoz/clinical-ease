import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Family Medicine, Austin TX",
    quote: "We were losing 30+ calls a day. CLINICALL AI picks up every single one now. Our bookings increased by 40% in the first month.",
    rating: 5,
  },
  {
    name: "Dr. James Rodriguez",
    role: "Dental Practice, Miami FL",
    quote: "The setup was incredibly easy. Our patients love that they can call anytime and actually get help — not just a voicemail.",
    rating: 5,
  },
  {
    name: "Dr. Emily Chen",
    role: "Pediatrics, San Francisco CA",
    quote: "It's like having a perfect receptionist who never takes a break. The cost savings alone made this a no-brainer.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-4 mb-6 tracking-tight">
            Trusted by clinics
            <br />
            <span className="text-gradient">across America.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6">"{item.quote}"</p>
              <div>
                <div className="font-semibold text-foreground">{item.name}</div>
                <div className="text-sm text-muted-foreground">{item.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
