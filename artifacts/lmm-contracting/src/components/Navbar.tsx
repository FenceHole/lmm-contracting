import { useState, useEffect } from "react";
import { Lightbulb, Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Our Work", href: "#portfolio" },
    { name: "For Investors", href: "#investors" },
    { name: "About", href: "#about" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-white py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <div className="flex flex-col items-center mr-2">
              <Lightbulb className="h-8 w-8 text-secondary fill-secondary mb-[-4px] group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-3xl font-display font-black text-gray-900 tracking-tighter leading-none">
                LMM
              </span>
              <span className="text-[11px] font-bold text-gray-500 tracking-[0.2em] uppercase mt-1">
                Contracting LLC
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-bold text-gray-600 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="tel:4124983489"
              className="hidden lg:flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-bold hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              (412) 498-3489
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-base font-bold text-gray-800 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-4">
              <a
                href="tel:4124983489"
                className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                (412) 498-3489
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
