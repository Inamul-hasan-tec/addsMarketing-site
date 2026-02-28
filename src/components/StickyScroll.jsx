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
    label: 'Gap Assessment',
    labelColor: 'green',
    title: 'Identify compliance gaps in your current environment and get a clear roadmap to PCI DSS certification',
    description: 'Our comprehensive gap assessment evaluates your current security posture against all PCI DSS requirements. We identify areas that need attention and provide a prioritized action plan.',
    // Replace with your custom image: '/images/pci-gap-assessment.webp'
    image: 'https://cdn.prod.website-files.com/6798a9f2afba026ef37a64ed/68b808d1b9c3e2bed38d33eb_Frame%202087332585.webp',
  },
  {
    id: 'readiness-assessment',
    label: 'Readiness Assessment',
    labelColor: 'blue',
    title: 'Evaluate your preparedness for certification with a thorough pre-audit evaluation',
    description: 'Before the official audit, we conduct a thorough readiness assessment to ensure you are fully prepared. This pre-audit evaluation helps identify any remaining issues that could impact certification.',
    // Replace with your custom image: '/images/pci-readiness-assessment.webp'
    image: 'https://cdn.prod.website-files.com/6798a9f2afba026ef37a64ed/68b808d18e598045cf7f37b0_Frame%202087332587-1.webp',
  },
  {
    id: 'remediation-guidance',
    label: 'Remediation Guidance',
    labelColor: 'yellow',
    title: 'Expert support to close security gaps quickly with hands-on implementation guidance',
    description: 'Our team provides hands-on guidance to help you implement the necessary controls and fixes. We work alongside your team to ensure remediation efforts are effective and efficient.',
    // Replace with your custom image: '/images/pci-remediation-guidance.webp'
    image: 'https://cdn.prod.website-files.com/6798a9f2afba026ef37a64ed/68b808d0407e6298a46fa458_Frame%202087332587.webp',
  },
  {
    id: 'saq-roc-support',
    label: 'SAQ & ROC Support',
    labelColor: 'green',
    title: 'Complete documentation and reporting assistance for SAQ and ROC requirements',
    description: 'Whether you need a Self-Assessment Questionnaire (SAQ) or a Report on Compliance (ROC), our experts guide you through the entire documentation process to ensure accuracy and completeness.',
    // Replace with your custom image: '/images/pci-saq-roc-support.webp'
    image: 'https://cdn.prod.website-files.com/6798a9f2afba026ef37a64ed/68c004fa1185479cf5041d8a_Frame%202087332585.webp',
  },
  {
    id: 'continuous-advisory',
    label: 'Continuous Advisory',
    labelColor: 'blue',
    title: 'Stay compliant year-round with ongoing support and continuous monitoring',
    description: 'PCI DSS compliance is not a one-time event. Our continuous advisory services help you maintain compliance, adapt to requirement changes, and stay audit-ready throughout the year.',
    // Replace with your custom image: '/images/pci-continuous-advisory.webp'
    image: 'https://cdn.prod.website-files.com/6798a9f2afba026ef37a64ed/68b808d1178c977f07e33c64_Frame%202087332587-2.webp',
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
export default function StickyScroll() {
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
    <section className="perks_section py-16 lg:py-24 bg-white">
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
            Complete PCI DSS Services
          </h2>
          <p className="text-lg text-slate-600 mt-4 max-w-3xl mx-auto">
            EMC UAE provides comprehensive PCI DSS services to help organizations securely handle
            cardholder data, reduce risk, and meet global compliance requirements.
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
          <motion.a
            href="#contact"
            className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white gradient-bg rounded-full hover:shadow-xl hover:shadow-indigo-500/25 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Book a Demo
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
