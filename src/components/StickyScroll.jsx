import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/**
 * PCI DSS Services Data
 * 
 * TO ADD YOUR CUSTOM IMAGES:
 * 1. Add your images to /public/images/ folder
 * 2. Replace the image URLs below with your image paths, e.g., '/images/gap-assessment.webp'
 * 
 * Current images are placeholders from the reference design.
 * Replace them with PCI DSS specific images for:
 * - Gap Assessment: Dashboard showing compliance gaps/checklist
 * - Readiness Assessment: Pre-audit evaluation interface
 * - Remediation Guidance: Implementation support visual
 * - SAQ & ROC Support: Documentation/reporting interface
 * - Continuous Advisory: Monitoring dashboard
 */
const topics = [
  {
    id: 'gap-assessment',
    label: 'PCI DSS Gap Assessment',
    labelColor: 'green',
    title: 'Identify compliance gaps in your current environment',
    description: 'We evaluate your cardholder data environment and identify compliance gaps against PCI DSS requirements.',
    image: '/PCI DSS Gap Assessment-new.png',
  },
  {
    id: 'gap-remediation',
    label: 'Gap Remediation Support',
    labelColor: 'blue',
    title: 'Expert guidance to close security and control gaps',
    description: 'Our team provides hands-on support to help you address and close identified security and control gaps efficiently.',
    image: '/Gap Remediation Support-new.png',
  },
  {
    id: 'readiness-support',
    label: 'PCI DSS Readiness Support',
    labelColor: 'yellow',
    title: 'Comprehensive readiness assessment and preparation',
    description: 'We ensure your organization is fully prepared for PCI DSS certification with thorough readiness evaluation and support.',
    image: '/PCI DSS Readiness Support-new-rev1.png',
  },
  {
    id: 'saq-support',
    label: 'PCI DSS SAQ Support',
    labelColor: 'green',
    title: 'Self-Assessment Questionnaire (SAQ) guidance',
    description: 'Complete support for PCI DSS Self-Assessment Questionnaire completion and validation.',
    image: '/Self-Assessment Questionnaire-new.png',
  },
  {
    id: 'aoc',
    label: 'PCI DSS AoC',
    labelColor: 'blue',
    title: 'Attestation of Compliance (AoC) support',
    description: 'Expert assistance in obtaining your PCI DSS Attestation of Compliance documentation.',
    image: '/Attestation of Compliance-new.png',
  },
  {
    id: 'roc',
    label: 'PCI DSS RoC',
    labelColor: 'yellow',
    title: 'Report on Compliance (RoC) Support',
    description: 'Comprehensive support for PCI DSS Report on Compliance.',
    image: '/Report on Compliance-new.png',
  },
];

/**
 * Color classes for labels
 */
const labelColors = {
  green: 'text-emerald-500',
  blue: 'text-blue-800',
  yellow: 'text-amber-500',
};

/**
 * Sticky Scroll Component
 * Replicates the exact behavior from REPLICA.HTML
 */
export default function StickyScroll({ onBookDemo }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const textRefs = useRef([]);

  useEffect(() => {
    /**
     * Intersection Observer Configuration
     * rootMargin: '-40% 0px -40% 0px' triggers when text is in the middle 20% of viewport
     */
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = textRefs.current.indexOf(entry.target);
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    }, observerOptions);

    textRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="perks_section py-16 lg:py-24 bg-white">
      <div className="perks_component max-w-[1400px] mx-auto px-5">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="perks_heading-wrapper mb-16 lg:mb-20 text-center"
        >
          <span className="inline-block px-4 py-1.5 bg-[#26A8E0]/10 text-[#26A8E0] text-sm font-semibold rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#031432] leading-tight">
            Comprehensive PCI DSS Assessment, Attestation and Certification
          </h2>
          <p className="text-lg text-slate-600 mt-4 max-w-3xl mx-auto">
            We deliver structured PCI DSS services tailored and customized for your business across UAE and Middle East that meets regulatory expectations and global security standards.
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="perks_content-wrapper flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
          
          {/* Left Column: Sticky Media Container */}
          <div className="perks_media-container hidden lg:flex sticky top-[15vh] w-1/2 h-[70vh] justify-center items-center bg-gradient-to-br from-[#f5f7fa] to-[#e8ecf1] rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] overflow-hidden flex-shrink-0">
            {topics.map((topic, index) => (
              <div
                key={topic.id}
                className={`perks_media-wrapper absolute inset-0 flex justify-center items-center p-10 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] ${
                  activeIndex === index
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 scale-[0.8] translate-y-5'
                }`}
              >
                <img
                  src={topic.image}
                  alt={topic.title}
                  className="perks_image max-w-[95%] max-h-[95%] w-auto h-auto rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] object-contain"
                />
              </div>
            ))}
          </div>

          {/* Right Column: Scrolling Text Container */}
          <div className="perks_text-container w-full lg:w-1/2 lg:pr-10">
            {topics.map((topic, index) => (
              <div
                key={topic.id}
                ref={(el) => (textRefs.current[index] = el)}
                className="perks_text-wrapper h-auto lg:h-screen flex flex-col justify-center py-10 lg:py-0"
              >
                {/* Mobile Image */}
                <div className="lg:hidden mb-6 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-[#f5f7fa] to-[#e8ecf1] p-4">
                  <img
                    src={topic.image}
                    alt={topic.title}
                    className="w-full h-auto rounded-xl"
                  />
                </div>

                {/* Label */}
                <div className={`text-sm font-bold uppercase tracking-[1.2px] mb-4 ${labelColors[topic.labelColor]}`}>
                  {topic.label}
                </div>

                {/* Title */}
                <h4 className="text-2xl lg:text-4xl font-bold leading-tight text-[#031432] mb-5">
                  {topic.title}
                </h4>

                {/* Description */}
                <p className="text-base text-slate-500 leading-relaxed">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 text-center"
        >
          <p className="text-slate-600 mb-4">
            Ready to secure your cardholder data environment?
          </p>
          <motion.button
            onClick={onBookDemo}
            className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white gradient-bg rounded-full hover:shadow-xl hover:shadow-indigo-500/25 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact our team
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
