import { WordReveal } from "../AnimatedText";

export default function Belief() {
  return (
    <section data-testid="belief-section" className="bg-background py-32 md:py-48 px-6 md:px-12 relative">
      {/* Large decorative number */}
      <div className="absolute top-16 right-8 md:right-20 font-display text-[20vw] md:text-[15vw] font-bold text-foreground/[0.02] leading-none select-none pointer-events-none">
        01
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="font-display text-3xl md:text-5xl lg:text-[4.5vw] leading-[1.2] font-bold text-foreground mb-14">
          <span className="block">We believe that 'waste' is simply a resource in the</span>
          <span className="block">wrong place.</span>
        </h2>

        <WordReveal
          text="Our approach goes beyond products. We provide a complete ecosystem designed to revive the planet for the generations that follow."
          className="text-lg md:text-2xl font-light text-foreground/60 max-w-3xl mx-auto leading-relaxed"
          delay={0.3}
          as="p"
        />
      </div>
    </section>
  );
}
