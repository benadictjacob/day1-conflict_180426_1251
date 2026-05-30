import logo from "../../assets/revearth-logo.png";
import { FadeUp } from "../AnimatedText";

export default function Footer() {
  return (
    <footer data-testid="footer" className="bg-background text-foreground pt-28 pb-10 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
          <FadeUp>
            <img
              src={logo}
              alt="ReVearth Logo"
              className="h-16 md:h-20 w-auto object-contain mb-6"
            />
            <p className="text-sm text-foreground/50 font-light max-w-xs leading-relaxed">
              Spearheading the transition from a throwaway culture to a circular economy. To Revive the Earth.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <nav className="flex flex-wrap gap-10 md:gap-16">
              <div className="flex flex-col space-y-4">
                <span className="font-display text-[10px] tracking-[0.3em] uppercase font-semibold text-foreground/30 mb-2">Navigate</span>
                {["Home", "Solutions", "About", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-light hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </a>
                ))}
              </div>
              <div className="flex flex-col space-y-4">
                <span className="font-display text-[10px] tracking-[0.3em] uppercase font-semibold text-foreground/30 mb-2">Connect</span>
                <a href="mailto:hello@revearth.com" className="text-sm font-light hover:text-primary transition-colors duration-300">
                  hello@revearth.com
                </a>
                <a href="tel:+10000000000" className="text-sm font-light hover:text-primary transition-colors duration-300">
                  +1 (000) 000-0000
                </a>
                <div className="flex gap-5 pt-3">
                  {["IG", "FB", "LI", "TW"].map((label) => (
                    <a
                      key={label}
                      href="#"
                      className="font-display text-[10px] tracking-widest font-semibold text-foreground/40 hover:text-primary transition-colors duration-300"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </FadeUp>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50 gap-4">
          <p className="text-xs text-foreground/40 font-light tracking-wider">
            {new Date().getFullYear()} ReVearth. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-foreground/40 hover:text-foreground font-light transition-colors tracking-wider">
              Privacy
            </a>
            <a href="#" className="text-xs text-foreground/40 hover:text-foreground font-light transition-colors tracking-wider">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
