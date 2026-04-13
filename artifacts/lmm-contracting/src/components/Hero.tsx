import { ArrowRight, Wrench, Paintbrush, Zap, Home } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Construction Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-primary/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 border border-secondary/50 text-secondary font-bold text-sm tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(255,193,7,0.3)]">
              Pittsburgh, PA
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white leading-[1.1] tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Pittsburgh's Premier <br />
            <span className="text-secondary">Contracting Partner.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 font-medium mb-10 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From expert electrical panel upgrades to full home renovations and investor property turnovers. One call does it all.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-900 bg-secondary rounded-xl hover:bg-secondary/90 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,193,7,0.4)]"
            >
              Get Free Estimate
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 backdrop-blur-sm transition-all"
            >
              Explore Services
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Service Icons Bar */}
      <motion.div
        className="absolute bottom-0 left-0 w-full transform translate-y-1/2 hidden md:block z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: "50%" }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <div className="max-w-5xl mx-auto px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-6 grid grid-cols-4 gap-4 border border-gray-100">
            {[
              { icon: Zap, label: "Electrical", color: "text-blue-600", bg: "bg-blue-50" },
              { icon: Wrench, label: "Plumbing", color: "text-gray-700", bg: "bg-gray-100" },
              { icon: Home, label: "Renovation", color: "text-blue-600", bg: "bg-blue-50" },
              { icon: Paintbrush, label: "Finishing", color: "text-gray-700", bg: "bg-gray-100" },
            ].map((service, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center text-center p-4 rounded-xl hover:bg-gray-50 transition-colors group cursor-default">
                <div className={`w-14 h-14 rounded-full ${service.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-7 h-7 ${service.color}`} />
                </div>
                <span className="font-bold text-gray-900">{service.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
