import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import LogoCarousel from './components/LogoCarousel';
import Features from "./components/Features";
import StickyScroll from "./components/StickyScroll";
import StepsProcess from "./components/StepsProcess";
import Benefits from "./components/Benefits";
// import TestimonialsNew from './components/TestimonialsNew';
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import BookDemoModal from "./components/BookDemoModal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen">
      <Header onBookDemo={() => setShowModal(true)} />
      <main>
        <Hero onBookDemo={() => setShowModal(true)} />
        {/* <LogoCarousel /> */}
        <Features onBookDemo={() => setShowModal(true)} />
        <StickyScroll onBookDemo={() => setShowModal(true)} />
        <StepsProcess />
        <Benefits onBookDemo={() => setShowModal(true)} />
        {/* <TestimonialsNew /> */}
        <CTA onBookDemo={() => setShowModal(true)} />
        <FAQ />
      </main>
      <Footer />
      
      {/* Book Demo Modal */}
      <BookDemoModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default App;
