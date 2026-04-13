import { ArrowRight, Zap, Home, Building2, Hammer, Shovel } from "lucide-react";
import { motion } from "framer-motion";

export function Portfolio() {
  const projects = [
    { type: "Electrical", title: "Meticulous Panel Wiring", icon: Zap, color: "text-secondary" },
    { type: "Renovation", title: "Modern Kitchen Remodel", icon: Home, color: "text-primary" },
    { type: "Commercial", title: "Exterior Meter & Conduit", icon: Building2, color: "text-secondary" },
    { type: "New Construction", title: "Framing & Subpanel Setup", icon: Hammer, color: "text-secondary" },
    { type: "Site Prep", title: "Underground Service Trenching", icon: Shovel, color: "text-primary" },
    { type: "Electrical", title: "Clean Residential Panel", icon: Zap, color: "text-secondary" },
  ];

  return (
    <section id="portfolio" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 uppercase tracking-tight">
              Recent Work
            </h2>
            <div className="h-1.5 w-24 bg-secondary mt-4 mb-4 rounded-full"></div>
            <p className="text-xl text-gray-600 font-medium max-w-xl">
              See the quality and cleanliness of our craftsmanship firsthand.
            </p>
          </motion.div>
          <motion.a 
            href="#contact" 
            className="hidden md:flex items-center text-primary font-bold hover:text-primary/80 transition-colors text-lg"
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          >
            Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
            >
              {/* Abstract Placeholder Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent mix-blend-overlay"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                   <project.icon className="w-32 h-32 text-white" strokeWidth={1} />
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className={`${project.color} font-bold text-sm uppercase tracking-widest mb-2 flex items-center gap-2`}>
                  <project.icon className="w-4 h-4" /> {project.type}
                </span>
                <h4 className="text-white text-2xl font-display font-bold">{project.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a href="#contact" className="inline-flex items-center text-primary font-bold hover:text-primary/80 transition text-lg">
            Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
