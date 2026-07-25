
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  return (
    <>
  

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