import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <main className="min-h-screen w-full bg-white text-neutral-900">
        <Hero />
        <Services />
        <Testimonials />
        <Pricing />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;