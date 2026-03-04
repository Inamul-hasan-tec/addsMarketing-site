import { motion } from 'framer-motion';
import { Plug, Cpu, FileText, ShieldCheck, Rocket, ArrowRight } from 'lucide-react';

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

        {/* Steps Container */}
        <div className="relative">
          {/* SVG Curved Connecting Lines - Desktop Only */}
          <svg
            className="absolute top-32 left-0 w-full h-32 pointer-events-none hidden lg:block"
            viewBox="0 0 1200 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Curved line connecting all steps */}
            <path
              d="M80 100 Q 200 100, 280 50 Q 360 0, 450 30 Q 540 60, 620 40 Q 700 20, 780 60 Q 860 100, 950 70 Q 1040 40, 1120 20"
              stroke="url(#curveGradient)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="8 4"
            />
            
            <defs>
              <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#26A8E0" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#26A8E0" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#26A8E0" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>

          {/* Animated Arrow */}
          <svg
            className="absolute top-20 left-0 w-full h-48 pointer-events-none hidden lg:block"
            viewBox="0 0 1100 190"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Define the path for the arrow to follow */}
            <path
              id="arrowPath"
              d="M80 60 Q 200 60, 280 30 Q 360 0, 450 15 Q 540 30, 620 15 Q 700 0, 780 30 Q 860 60, 950 45 Q 1040 30, 1120 15"
              stroke="none"
              fill="none"
            />
            
            {/* Animated arrow circle */}
            <motion.circle
              r="10"
              fill="url(#arrowGradient)"
              animate={{
                pathLength: [0, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: 1
              }}
              style={{
                offsetPath: 'path("M80 60 Q 200 60, 280 30 Q 360 0, 450 15 Q 540 30, 620 15 Q 700 0, 780 30 Q 860 60, 950 45 Q 1040 30, 1120 15")',
                offsetDistance: "0%"
              }}
            >
              <animateMotion
                dur="4s"
                repeatCount="indefinite"
                begin="1s"
                path="M80 60 Q 200 60, 280 30 Q 360 0, 450 15 Q 540 30, 620 15 Q 700 0, 780 30 Q 860 60, 950 45 Q 1040 30, 1120 15"
              />
              <motion.g
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                transform="translate(-10, -10)"
              >
                <motion.circle
                  r="14"
                  fill="url(#arrowGradient)"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <Rocket 
                  x="-7" 
                  y="-7" 
                  width="14" 
                  height="14" 
                  fill="white"
                />
              </motion.g>
            </motion.circle>
            
            <defs>
              <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#26A8E0" />
                <stop offset="100%" stopColor="#1e3a8a" />
              </linearGradient>
            </defs>
            
            {/* Static Arrow at the end */}
            <g transform="translate(1120, 15)">
              <circle
                r="12"
                fill="url(#arrowGradient)"
                className="opacity-80"
              />
              <ArrowRight 
                x="-6" 
                y="-6" 
                width="12" 
                height="12" 
                fill="white"
              />
            </g>
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
