import { useState, useEffect } from "react";
// @ts-ignore
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Summary", to: "summary" },
  { name: "Winners", to: "winners" },
  { name: "Highlights", to: "highlights" },
  { name: "Timeline", to: "timeline" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-width flex items-center justify-between">
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          className="flex items-center cursor-pointer group"
        >
          <img
            src="/logo4.png"
            alt="MedAI-Thon Logo"
            className="h-20 w-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 hover:drop-shadow-lg mix-blend-multiply"
          />
        </ScrollLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="text-sm font-medium text-muted-foreground hover:text-primary cursor-pointer transition-colors"
            >
              {link.name}
            </ScrollLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border absolute w-full"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-base font-medium text-foreground py-2 border-b border-border/50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </ScrollLink>
              ))}
              <ScrollLink to="get-involved" smooth={true} duration={500} offset={-80} onClick={() => setIsOpen(false)}>
                <Button className="w-full mt-4">Get Updates</Button>
              </ScrollLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}