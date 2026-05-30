import { useState, useEffect } from "react";
import logo from "../assets/revearth-logo.png";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "Solutions", id: "solutions" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        data-testid="navbar"
        className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-700 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md py-4 border-b border-border/30"
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <button
            data-testid="nav-logo"
            onClick={() => scrollTo("home")}
            className="outline-none flex-shrink-0 group"
          >
            <img
              src={logo}
              alt="ReVearth"
              className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </button>

          <nav className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <button
                key={link.id}
                data-testid={`nav-${link.id}`}
                onClick={() => scrollTo(link.id)}
                className="group relative text-[11px] font-display font-medium tracking-[0.2em] uppercase outline-none transition-colors duration-300 text-foreground/60 hover:text-primary"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-500 ease-out bg-primary" />
              </button>
            ))}
          </nav>

          <button
            data-testid="mobile-menu-toggle"
            className="md:hidden outline-none p-2 relative w-8 h-8 flex flex-col items-center justify-center"
            aria-label="Menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span
              className={`block w-5 h-[1.5px] bg-foreground transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-foreground transition-all duration-300 mt-1.5 ${
                mobileOpen ? "-rotate-45 -translate-y-[2px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        data-testid="mobile-menu"
        className={`fixed inset-0 z-[85] bg-primary flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link, i) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className="text-primary-foreground font-display text-3xl font-semibold tracking-wider uppercase mb-8 hover:opacity-70 transition-opacity"
            style={{
              transitionDelay: mobileOpen ? `${i * 80}ms` : "0ms",
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.4s ease"
            }}
          >
            {link.label}
          </button>
        ))}
      </div>
    </>
  );
}
