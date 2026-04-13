import { Building2, CheckCircle, ArrowRight, Home } from "lucide-react";
import { motion } from "framer-motion";

export function Investors() {
  return (
    <section id="investors" className="py-24 bg-primary relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
        <Building2 className="w-full h-full text-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border-4 border-white"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center bg-gray-900 text-white relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-bl-full opacity-20"></div>
            
            <span className="text-secondary font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-2">
              <Building2 className="w-4 h-4" /> Real Estate Partners
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-black mb-6 leading-tight">
              Building Lasting, <br/>Profitable Partnerships.
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed font-medium">
              Are you a real estate investor, property flipper, or builder looking for a reliable contracting partner? LMM Contracting is here to support all phases of your projects.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Dependable, high-quality workmanship that passes inspections.",
                "Customized project solutions tailored to your specific goals.",
                "New construction support & dedicated project management."
              ].map((text, i) => (
                <li key={i} className="flex items-start bg-gray-800/50 p-5 rounded-2xl border border-gray-700/50">
                  <CheckCircle className="w-6 h-6 text-secondary mr-4 flex-shrink-0" />
                  <span className="font-medium text-gray-200">{text}</span>
                </li>
              ))}
            </ul>
            
            <a href="tel:4124983489" className="inline-flex items-center justify-center bg-secondary text-gray-900 px-8 py-4 rounded-xl font-black text-lg hover:bg-secondary/90 hover:scale-105 transition-all shadow-[0_0_15px_rgba(255,193,7,0.3)] w-fit">
              Let's Build Together <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
          
          <div className="lg:w-1/2 bg-gray-50 p-10 lg:p-16 flex flex-col justify-center items-center text-center relative overflow-hidden">
             {/* Decorative circles */}
             <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
             <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-50"></div>

             <motion.div 
               className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-sm border-t-8 border-secondary relative z-10"
               whileHover={{ y: -5 }}
             >
               <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                 <Home className="w-12 h-12 text-primary" />
               </div>
               <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Investment Turnovers</h3>
               <p className="text-gray-600 font-medium mb-8 leading-relaxed">
                 We specialize in rapid, high-quality turns to get your property listed faster and maximize your ROI. Time is money.
               </p>
               <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                 <div className="w-3/4 h-full bg-primary rounded-full relative">
                   <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/30 animate-pulse"></div>
                 </div>
               </div>
               <p className="text-xs text-gray-400 mt-3 font-bold uppercase tracking-wider">Fast Execution</p>
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
