import { motion } from 'framer-motion';
import { Plug, Cpu, FileText, ShieldCheck } from 'lucide-react';

/**
 * 4-Step Process Section with curved SVG connectors
 * Replicates the Scrut.io "Getting started is easy" section
 */

const steps = [
  {
    number: 1,
    icon: Plug,
    title: 'Gap Assessment',
    description: 'We identify compliance gaps in your current environment and provide a clear roadmap.',
    color: '#26A8E0',
  },
  {
    number: 2,
    icon: Cpu,
    title: 'Remediation Support',
    description: "Our experts guide your team to close security gaps quickly with hands-on support.",
    color: '#26A8E0',
  },
  {
    number: 3,
    icon: FileText,
    title: 'Final Assessment',
    description: 'We perform the official PCI DSS evaluation to verify all requirements are met.',
    color: '#26A8E0',
  },
  {
    number: 4,
    icon: ShieldCheck,
    title: 'Attestation',
    description: 'You receive your PCI DSS compliance certification, proving your commitment to security.',
    color: '#00D084',
  },
];

export default function StepsProcess() {
  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#031432] leading-tight">
            Getting started with
            <br />
            <span className="relative inline-block">
              EMC UAE is easy
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6C50 2 150 2 198 6"
                  stroke="#26A8E0"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
        </motion.div>

        {/* Steps Container with SVG Curves */}
        <div className="relative">
          {/* SVG Curved Connectors - Desktop Only */}
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none hidden lg:block"
            viewBox="0 0 1200 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Curve from Step 1 to Step 2 */}
            <path
              d="M150 280 Q 250 280, 300 200 Q 350 120, 450 120"
              stroke="url(#curveGradient1)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            {/* Curve from Step 2 to Step 3 */}
            <path
              d="M450 200 Q 550 200, 600 150 Q 650 100, 750 100"
              stroke="url(#curveGradient2)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            {/* Curve from Step 3 to Step 4 */}
            <path
              d="M750 180 Q 850 180, 900 120 Q 950 60, 1050 60"
              stroke="url(#curveGradient3)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            
            {/* Gradient Definitions */}
            <defs>
              <linearGradient id="curveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#26A8E0" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#26A8E0" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="curveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#26A8E0" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#26A8E0" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="curveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#26A8E0" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#00D084" stopOpacity="1" />
              </linearGradient>
            </defs>
          </svg>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative ${
                  index === 1 ? 'lg:mt-16' : 
                  index === 2 ? 'lg:mt-8' : 
                  index === 3 ? 'lg:mt-0' : ''
                }`}
              >
                {/* Step Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${step.color}15` }}
                >
                  <step.icon className="w-7 h-7" style={{ color: step.color }} />
                </motion.div>

                {/* Decorative Box for middle steps */}
                {index === 1 && (
                  <div className="hidden lg:block absolute -top-8 left-20 w-48 h-24 rounded-xl bg-[#26A8E0]/5 border border-[#26A8E0]/20">
                    <div className="w-full h-2 bg-[#26A8E0]/10 mt-4 mx-2 rounded" style={{ width: 'calc(100% - 16px)' }}></div>
                    <div className="w-3/4 h-2 bg-[#26A8E0]/10 mt-2 mx-2 rounded"></div>
                    <div className="w-1/2 h-2 bg-[#26A8E0]/10 mt-2 mx-2 rounded"></div>
                  </div>
                )}

                {/* Step Number & Title */}
                <div className="mb-3">
                  <span 
                    className="text-sm font-bold uppercase tracking-wider"
                    style={{ color: step.color }}
                  >
                    Step {step.number}
                  </span>
                </div>

                {/* Step Description */}
                <p className="text-[#031432] font-medium leading-relaxed">
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
