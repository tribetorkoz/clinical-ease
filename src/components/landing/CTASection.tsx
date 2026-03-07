import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden p-12 sm:p-20 text-center"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-card border border-border rounded-3xl" />
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[100px] rounded-full" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
              Stop losing patients
              <br />
              <span className="text-gradient">to voicemail.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Join the clinics that never miss a call. Setup takes 24 hours,
              and your first 7 days are free.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" className="h-13 px-8 rounded-xl">
                Start Free Trial
                <ArrowRight className="ml-1 w-4 h-4" />
              </Button>
              <Button variant="heroOutline" size="lg" className="h-13 px-8 rounded-xl">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
