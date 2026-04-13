import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static UI only
    alert("Thanks for reaching out! We will contact you soon.");
  };

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* About Info */}
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <div className="mb-12">
              <span className="text-primary font-bold tracking-widest uppercase mb-2 block">About Us</span>
              <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 mb-6 tracking-tight">Contact Us</h2>
              <div className="h-1.5 w-24 bg-secondary mb-8 rounded-full"></div>
              <p className="text-lg text-gray-600 mb-6 font-medium leading-relaxed">
                Owned and operated by Dominic Herrara, LMM Contracting LLC is proud to call Pittsburgh home. Located in East Liberty, we are deeply invested in improving the homes and businesses in our community.
              </p>
              <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-primary">
                <p className="text-lg text-gray-700 font-medium italic">
                  "With an A+ rating and a reputation for our 'One Call Does It All' service, we bring professionalism and honest pricing to every single job."
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <a href="tel:4124983489" className="flex items-center p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all group">
                <div className="bg-blue-50 p-4 rounded-xl group-hover:bg-primary transition-colors duration-300">
                  <Phone className="w-7 h-7 text-primary group-hover:text-white" />
                </div>
                <div className="ml-6">
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Call Us Today</p>
                  <p className="text-2xl font-display font-black text-gray-900">(412) 498-3489</p>
                </div>
              </a>
              
              <a href="mailto:LMMContracting92@gmail.com" className="flex items-center p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg hover:border-secondary/50 transition-all group">
                <div className="bg-yellow-50 p-4 rounded-xl group-hover:bg-secondary transition-colors duration-300">
                  <Mail className="w-7 h-7 text-yellow-600 group-hover:text-gray-900" />
                </div>
                <div className="ml-6">
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Email Us</p>
                  <p className="text-lg font-bold text-gray-900 break-all">LMMContracting92@gmail.com</p>
                </div>
              </a>
              
              <div className="flex items-center p-6 bg-white rounded-2xl shadow-md border border-gray-100">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <MapPin className="w-7 h-7 text-gray-600" />
                </div>
                <div className="ml-6">
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Office Location</p>
                  <p className="text-lg font-bold text-gray-900">6375 Penn Ave, Ste B<br />Pittsburgh, PA 15206</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Quick Contact Form */}
          <motion.div 
            id="contact" 
            className="bg-gray-50 p-8 sm:p-12 rounded-[2.5rem] border border-gray-200 relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Form decorative background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-display font-black text-gray-900 mb-3">Request an Estimate</h3>
              <p className="text-gray-600 mb-8 font-medium">Fill out the form below and our team will get back to you promptly to discuss your project.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                    <input required type="text" className="w-full rounded-xl bg-white border border-gray-200 text-gray-900 focus:border-primary focus:ring-4 focus:ring-primary/10 p-4 font-medium transition-all" placeholder="Jane" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                    <input required type="text" className="w-full rounded-xl bg-white border border-gray-200 text-gray-900 focus:border-primary focus:ring-4 focus:ring-primary/10 p-4 font-medium transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email or Phone</label>
                  <input required type="text" className="w-full rounded-xl bg-white border border-gray-200 text-gray-900 focus:border-primary focus:ring-4 focus:ring-primary/10 p-4 font-medium transition-all" placeholder="How should we reach you?" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Project Type</label>
                  <select required defaultValue="" className="w-full rounded-xl bg-white border border-gray-200 text-gray-900 focus:border-primary focus:ring-4 focus:ring-primary/10 p-4 font-medium transition-all appearance-none cursor-pointer">
                    <option value="" disabled>Select an option...</option>
                    <option value="electrical">Electrical (15% Off Spring Special!)</option>
                    <option value="renovation">Full Home Renovation</option>
                    <option value="kitchen-bath">Kitchen / Bath Remodel</option>
                    <option value="investor">Investor Turnover Package</option>
                    <option value="other">Other / Multiple Projects</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Project Details</label>
                  <textarea required rows={4} className="w-full rounded-xl bg-white border border-gray-200 text-gray-900 focus:border-primary focus:ring-4 focus:ring-primary/10 p-4 font-medium resize-none transition-all" placeholder="Tell us about your timeline and vision..."></textarea>
                </div>
                <button type="submit" className="w-full bg-primary text-white px-4 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all flex justify-center items-center group">
                  Send Request <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
