import { ShieldCheck, CheckCircle, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";

export function TrustBadges() {
  const badges = [
    {
      icon: ThumbsUp,
      title: "Fast & Reliable",
      description: "Showing up on time and delivering exactly what was promised.",
    },
    {
      icon: ShieldCheck,
      title: "Built to Code",
      description: "Licensed, insured, and uncompromising on safety standards.",
    },
    {
      icon: CheckCircle,
      title: "Clean Work",
      description: "We treat your property with respect and leave it spotless.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {badges.map((badge, idx) => (
            <motion.div
              key={idx}
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mt-1">
                <badge.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{badge.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  {badge.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
