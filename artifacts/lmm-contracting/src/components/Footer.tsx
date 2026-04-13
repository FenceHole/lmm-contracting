import { Lightbulb, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 border-t-[12px] border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        <div className="lg:col-span-2">
          <div className="flex items-center mb-6">
            <div className="flex flex-col items-center mr-3">
              <Lightbulb className="w-8 h-8 text-secondary fill-secondary" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-3xl font-display font-black text-white tracking-tighter leading-none">LMM</span>
              <span className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase mt-1">Contracting LLC</span>
            </div>
          </div>
          <p className="text-gray-400 mb-8 max-w-sm font-medium leading-relaxed">
            Your Trusted Partner for Real Estate, Investment Properties & New Construction in Pittsburgh, PA. One Call Does It All.
          </p>
          <div className="flex flex-wrap gap-3">
             <span className="bg-gray-800 text-gray-300 text-xs font-bold px-4 py-2 rounded-lg border border-gray-700">PA HIC Registered</span>
             <span className="bg-gray-800 text-gray-300 text-xs font-bold px-4 py-2 rounded-lg border border-gray-700">Fully Insured</span>
             <span className="bg-gray-800 text-gray-300 text-xs font-bold px-4 py-2 rounded-lg border border-gray-700">A+ BBB Rating</span>
          </div>
        </div>
        
        <div>
           <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
           <ul className="space-y-4 font-medium">
             <li><a href="#services" className="hover:text-secondary hover:translate-x-1 inline-block transition-transform">Services</a></li>
             <li><a href="#portfolio" className="hover:text-secondary hover:translate-x-1 inline-block transition-transform">Our Work</a></li>
             <li><a href="#investors" className="hover:text-secondary hover:translate-x-1 inline-block transition-transform">For Investors</a></li>
             <li><a href="#about" className="hover:text-secondary hover:translate-x-1 inline-block transition-transform">About Us</a></li>
           </ul>
        </div>
        
        <div>
           <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact</h4>
           <ul className="space-y-4 font-medium">
             <li>
               <a href="tel:4124983489" className="flex items-center hover:text-white transition-colors">
                 <Phone className="w-5 h-5 mr-3 text-secondary"/> (412) 498-3489
               </a>
             </li>
             <li>
               <a href="mailto:LMMContracting92@gmail.com" className="flex items-center hover:text-white transition-colors">
                 <Mail className="w-5 h-5 mr-3 text-secondary"/> LMMContracting92@gmail.com
               </a>
             </li>
             <li className="flex items-start">
               <MapPin className="w-5 h-5 mr-3 text-secondary mt-0.5 flex-shrink-0"/> 
               <span>6375 Penn Ave, Ste B<br/>Pittsburgh, PA 15206</span>
             </li>
           </ul>
        </div>
        
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
         <p className="font-medium text-sm mb-4 md:mb-0">
           &copy; {new Date().getFullYear()} LMM Contracting LLC. All rights reserved.
         </p>
         <p className="font-bold text-sm tracking-widest text-gray-500 uppercase">
           Pittsburgh, Pennsylvania
         </p>
      </div>
    </footer>
  );
}
