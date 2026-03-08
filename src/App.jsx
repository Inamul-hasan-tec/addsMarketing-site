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
import PolicyModal from "./components/PolicyModal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [policyModal, setPolicyModal] = useState({
    isOpen: false,
    title: "",
    content: "",
  });

  const openPolicyModal = (type) => {
    if (type === 'privacy') {
      setPolicyModal({
        isOpen: true,
        title: 'Privacy Policy',
        content:
          'This is placeholder Privacy Policy text. Replace this with your final Privacy Policy content.\n\nWe respect your privacy and are committed to protecting personal information submitted through our website forms.',
      });
      return;
    }

    if (type === 'terms') {
      setPolicyModal({
        isOpen: true,
        title: 'Terms of Service',
        content:
          'This is placeholder Terms of Service text. Replace this with your final Terms content.\n\nBy using this website, you agree to our terms and conditions.',
      });
      return;
    }

    setPolicyModal({
      isOpen: true,
      title: 'Cookie Policy',
      content:
        'This is placeholder Cookie Policy text. Replace this with your final Cookie Policy content.\n\nWe may use cookies to improve your browsing experience and analyze site usage.',
    });
  };

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
      <Footer
        onOpenPolicy={openPolicyModal}
      />
      
      {/* Book Demo Modal */}
      <BookDemoModal isOpen={showModal} onClose={() => setShowModal(false)} />

      {/* Policy Modal */}
      <PolicyModal
        isOpen={policyModal.isOpen}
        title={policyModal.title}
        content={policyModal.content}
        onClose={() => setPolicyModal({ isOpen: false, title: "", content: "" })}
      />
    </div>
  );
}

export default App;
