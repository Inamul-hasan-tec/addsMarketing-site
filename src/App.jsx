import Header from './components/Header';
import Hero from './components/Hero';
import LogoCarousel from './components/LogoCarousel';
import Features from './components/Features';
import StickyScroll from './components/StickyScroll';
import StepsProcess from './components/StepsProcess';
import Benefits from './components/Benefits';
import TestimonialsNew from './components/TestimonialsNew';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <LogoCarousel />
        <Features />
        <StickyScroll />
        <StepsProcess />
        <Benefits />
        <TestimonialsNew />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
