import { useState, useCallback } from "react";
import Splash from "./components/Splash";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/sections/Hero";
import DualPanel from "./components/sections/DualPanel";
import Belief from "./components/sections/Belief";
import Story from "./components/sections/Story";
import Ticker from "./components/sections/Ticker";
import WhatWeDo from "./components/sections/WhatWeDo";
import VisionMission from "./components/sections/VisionMission";
import CTA from "./components/sections/CTA";
import Footer from "./components/sections/Footer";

function App() {
  const [splashDone, setSplashDone] = useState(false);
  const handleSplashComplete = useCallback(() => setSplashDone(true), []);

  return (
    <div className="grain-overlay">
      <CustomCursor />
      {!splashDone && <Splash onComplete={handleSplashComplete} />}
      <div
        data-testid="main-content"
        className="min-h-screen bg-background text-foreground font-sans"
        style={{
          opacity: splashDone ? 1 : 0,
          transition: "opacity 0.6s ease"
        }}
      >
        <Navbar />
        <main>
          <Hero />
          <DualPanel />
          <Belief />
          <Story />
          <Ticker />
          <WhatWeDo />
          <VisionMission />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
