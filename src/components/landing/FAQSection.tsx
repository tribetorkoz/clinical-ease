import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How quickly can I get started?",
    answer: "Most clinics are up and running within 24 hours. We handle the setup, connect to your phone system, and configure the AI for your specific practice.",
  },
  {
    question: "Is it HIPAA compliant?",
    answer: "Yes. All patient data is encrypted end-to-end, and we maintain full HIPAA compliance. We sign a BAA with every clinic.",
  },
  {
    question: "Will patients know they're talking to AI?",
    answer: "Our AI sounds natural and conversational. Most patients report a positive experience. The AI identifies itself transparently when asked.",
  },
  {
    question: "Can it handle emergencies?",
    answer: "Yes. The AI is trained to recognize urgent situations and immediately routes emergency calls to your on-call staff or directs patients to 911.",
  },
  {
    question: "Does it work with my existing phone system?",
    answer: "CLINICALL AI works with any phone system. We provide a dedicated number or can forward from your existing line — no hardware changes needed.",
  },
  {
    question: "What happens if I go over my included minutes?",
    answer: "Additional minutes are billed at $0.35/minute. You'll get alerts as you approach your limit so there are never surprises.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-4 mb-6 tracking-tight">
            Questions?
            <br />
            <span className="text-gradient">We've got answers.</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="font-medium text-foreground">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-200 shrink-0 ml-4 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-40 pb-5" : "max-h-0"
                }`}
              >
                <p className="px-5 text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
