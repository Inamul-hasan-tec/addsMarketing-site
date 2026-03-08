import { motion } from 'framer-motion';
import { Plug, Cpu, FileText, ShieldCheck } from 'lucide-react';

/**
 * 4-Step Process Section with Scrut.io style
 * Clean design with curved connecting lines and staggered layout
 */

const steps = [
  {
    number: 1,
    icon: Plug,
    title: 'Discovery & Gap Assessment',
    description: 'We evaluate your cardholder data environment and identify compliance gaps in your current environment.',
  },
  {
    number: 2,
    icon: Cpu,
    title: 'Guided Remediation',
    description: "Our experts work closely with your team to address and close security and control gaps.",
  },
  {
    number: 3,
    icon: FileText,
    title: 'Formal PCI QSA Assessment',
    description: 'We conduct the formal PCI DSS QSA evaluation and assessment.',
  },
  {
    number: 4,
    icon: ShieldCheck,
    title: 'Attestation Support',
    description: 'You receive your PCI DSS Attestation & Certification and guidance for ongoing compliance.',
  },
];

export default function StepsProcess() {
  return (
    <section id="process" className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-20 text-center"
        >
          <span className="inline-block px-4 py-1.5 bg-[#26A8E0]/10 text-[#26A8E0] text-sm font-semibold rounded-full mb-4">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#031432] leading-tight">
            Our AI enabled
            <br />
            <span className="relative inline-block">
              PCI DSS Engagement Model
              <svg
                className="absolute -bottom-3 left-0 w-full"
                viewBox="0 0 220 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 10C55 3 165 3 216 10" stroke="#26A8E0" strokeWidth="5" strokeLinecap="round" opacity="0.25" />
                <path d="M4 10C55 3 165 3 216 10" stroke="url(#titleUnderline)" strokeWidth="3" strokeLinecap="round" />
                <defs>
                  <linearGradient id="titleUnderline" x1="0" y1="0" x2="220" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#26A8E0" />
                    <stop offset="1" stopColor="#1e3a8a" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
        </motion.div>

        {/* Steps Container */}
        <div className="relative">
          {/* SVG Curved Connecting Line - Desktop Only */}
          <svg
            className="absolute top-28 left-0 w-full h-40 pointer-events-none hidden lg:block"
            viewBox="0 0 1200 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M80 120 Q 200 120, 280 70 Q 360 20, 450 50 Q 540 80, 620 60 Q 700 40, 780 80 Q 860 120, 950 90 Q 1040 60, 1120 40"
              stroke="url(#curveGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="2 10"
              opacity="0.9"
            />

            <defs>
              <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#26A8E0" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#26A8E0" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className={`relative ${
                  index === 0 ? 'lg:mt-24' : 
                  index === 1 ? 'lg:mt-12' : 
                  index === 2 ? 'lg:mt-4' : 
                  'lg:mt-0'
                }`}
              >
                {/* Icon Container */}
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#26A8E0] to-[#1e3a8a] flex items-center justify-center mb-6 shadow-lg shadow-[#26A8E0]/20"
                >
                  <step.icon className="w-8 h-8 text-white" />
                  
                  {/* Floating ring effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-[#26A8E0]/30 animate-pulse"></div>
                </motion.div>

                {/* Step Label */}
                <div className="mb-3">
                  <span className="text-sm font-bold uppercase tracking-wider text-[#26A8E0]">
                    STEP {step.number}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-[#031432] mb-3 leading-tight">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-slate-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
