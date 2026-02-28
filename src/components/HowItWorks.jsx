import { motion } from 'framer-motion';
import { 
  Plug, 
  Cpu, 
  Wrench, 
  ShieldCheck,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Plug,
    title: 'Gap Assessment',
    description: 'We identify compliance gaps in your current environment and provide a clear roadmap to PCI DSS certification.',
    features: ['Environment analysis', 'Gap identification', 'Action roadmap'],
    color: 'indigo',
  },
  {
    number: '02',
    icon: Wrench,
    title: 'Remediation Support',
    description: 'Our experts guide your team to close security gaps quickly with hands-on implementation support.',
    features: ['Expert guidance', 'Technical support', 'Quick resolution'],
    color: 'purple',
  },
  {
    number: '03',
    icon: Cpu,
    title: 'Final Assessment',
    description: 'We perform the official PCI DSS evaluation to verify all requirements are met and documented.',
    features: ['Comprehensive audit', 'Control validation', 'Documentation review'],
    color: 'blue',
  },
  {
    number: '04',
    icon: ShieldCheck,
    title: 'Attestation',
    description: 'You receive your PCI DSS compliance certification, demonstrating your commitment to cardholder data security.',
    features: ['Official certification', 'Compliance proof', 'Customer trust'],
    color: 'green',
  },
];

const colorClasses = {
  indigo: {
    bg: 'bg-indigo-500',
    light: 'bg-indigo-100',
    text: 'text-indigo-600',
    border: 'border-indigo-200',
  },
  purple: {
    bg: 'bg-purple-500',
    light: 'bg-purple-100',
    text: 'text-purple-600',
    border: 'border-purple-200',
  },
  blue: {
    bg: 'bg-blue-500',
    light: 'bg-blue-100',
    text: 'text-blue-600',
    border: 'border-blue-200',
  },
  green: {
    bg: 'bg-green-500',
    light: 'bg-green-100',
    text: 'text-green-600',
    border: 'border-green-200',
  },
};

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-4">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Our Simple{' '}
            <span className="gradient-text">4-Step Process</span>
          </h2>
          <p className="text-lg text-slate-600">
            A structured approach to achieve PCI DSS certification quickly and efficiently.
            Our experts guide you every step of the way.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-200 via-purple-200 to-green-200 -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => {
              const colors = colorClasses[step.color];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-12 items-center ${
                    index !== steps.length - 1 ? 'lg:mb-24' : ''
                  }`}
                >
                  {/* Step Number Circle (Desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-slate-100 items-center justify-center z-10 shadow-lg">
                    <span className={`text-xl font-bold ${colors.text}`}>{step.number}</span>
                  </div>

                  {/* Content */}
                  <div className={`${isEven ? 'lg:pr-16' : 'lg:order-2 lg:pl-16'}`}>
                    <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                      {/* Mobile Step Number */}
                      <div className="lg:hidden flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-full ${colors.bg} flex items-center justify-center`}>
                          <span className="text-sm font-bold text-white">{step.number}</span>
                        </div>
                        <div className={`h-0.5 flex-1 ${colors.light}`} />
                      </div>

                      <div className={`w-14 h-14 rounded-xl ${colors.light} flex items-center justify-center mb-5`}>
                        <step.icon className={`w-7 h-7 ${colors.text}`} />
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 mb-5 leading-relaxed">
                        {step.description}
                      </p>

                      <div className="space-y-2">
                        {step.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className={`w-5 h-5 ${colors.text}`} />
                            <span className="text-sm font-medium text-slate-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Visual/Illustration */}
                  <div className={`hidden lg:block ${isEven ? 'lg:order-2 lg:pl-16' : 'lg:pr-16'}`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className={`relative h-64 rounded-2xl ${colors.light} flex items-center justify-center overflow-hidden`}
                    >
                      <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-4 left-4 w-20 h-20 rounded-full bg-white/50" />
                        <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full bg-white/50" />
                      </div>
                      <step.icon className={`w-24 h-24 ${colors.text} opacity-20`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white rounded-xl p-4 shadow-lg">
                          <step.icon className={`w-12 h-12 ${colors.text}`} />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 lg:mt-24 text-center"
        >
          <motion.a
            href="#contact"
            className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white gradient-bg rounded-full hover:shadow-xl hover:shadow-indigo-500/25 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Your PCI DSS Journey
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
