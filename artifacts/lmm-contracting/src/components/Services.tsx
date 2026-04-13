import { Zap, Home, Droplets, Briefcase, Paintbrush, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-widest uppercase mb-2 block">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 mb-6 tracking-tight">
            Comprehensive <br />Contracting Services
          </h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 font-medium">
            From quick fixes to full property transformations, our "One Call Does It All" approach saves you time and ensures top-tier quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Electrical */}
          <motion.div 
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.0 }}
          >
            <div className="absolute top-0 right-0 bg-secondary text-gray-900 text-xs font-bold px-4 py-1.5 rounded-bl-xl z-10 shadow-sm">
              15% OFF SPRING SPECIAL
            </div>
            <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Electrical Projects</h3>
            <p className="text-gray-600 font-medium leading-relaxed">
              Main service panel upgrades, subpanels, wiring for new additions, exterior meters, and troubleshooting.
            </p>
          </motion.div>

          {/* Card 2: Full Reno */}
          <motion.div 
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Home className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Full Home Renovations</h3>
            <p className="text-gray-600 font-medium leading-relaxed">
              Top-to-bottom interior gut jobs and remodels. We handle the framing, drywall, floors, and finishing touches.
            </p>
          </motion.div>

          {/* Card 3: Kitchen & Bath */}
          <motion.div 
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Droplets className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Kitchens & Bathrooms</h3>
            <p className="text-gray-600 font-medium leading-relaxed">
              Modernizing the most important rooms in your house. Cabinetry, tile work, plumbing fixtures, and lighting.
            </p>
          </motion.div>

          {/* Card 4: Commercial */}
          <motion.div 
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className="w-16 h-16 bg-gray-100 text-gray-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Briefcase className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Commercial Build-Outs</h3>
            <p className="text-gray-600 font-medium leading-relaxed">
              Tailored commercial space preparations, including framing, electrical, and custom finishing for business locations.
            </p>
          </motion.div>

          {/* Card 5: Investor */}
          <motion.div 
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.4 }}
          >
            <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Home className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Investor Turnovers</h3>
            <p className="text-gray-600 font-medium leading-relaxed">
              Fast, reliable property turnovers designed specifically for landlords and flippers to minimize vacancy times.
            </p>
          </motion.div>

          {/* Card 6: Custom */}
          <motion.div 
            className="bg-gray-900 rounded-3xl p-8 border border-gray-800 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.5 }}
          >
            <div className="w-16 h-16 bg-gray-800 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Paintbrush className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Custom Projects</h3>
            <ul className="space-y-3">
              {['Basement Finishing', 'Decks & Porches', 'Structural Repairs', 'Exterior Upgrades'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-400 font-medium">
                  <CheckCircle className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
