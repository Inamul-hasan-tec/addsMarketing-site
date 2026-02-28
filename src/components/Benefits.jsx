import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Lock, 
  AlertTriangle, 
  Users, 
  ClipboardCheck,
  ArrowRight
} from 'lucide-react';

const benefits = [
  {
    icon: AlertTriangle,
    title: 'Reduce Compliance Risks',
    description: 'Minimize the risk of non-compliance and potential security breaches.',
    color: 'red',
  },
  {
    icon: Lock,
    title: 'Strengthen Cardholder Data Security',
    description: 'Implement robust controls to protect sensitive payment information.',
    color: 'indigo',
  },
  {
    icon: ShieldCheck,
    title: 'Avoid Costly Penalties',
    description: 'Stay compliant and avoid fines from payment card brands and regulators.',
    color: 'green',
  },
  {
    icon: Users,
    title: 'Build Customer Trust',
    description: 'Demonstrate your commitment to security and earn customer confidence.',
    color: 'blue',
  },
  {
    icon: ClipboardCheck,
    title: 'Stay Audit-Ready Year-Round',
    description: 'Maintain continuous compliance and be prepared for any audit.',
    color: 'purple',
  },
];

const colorClasses = {
  red: {
    bg: 'bg-red-100',
    icon: 'text-red-600',
    border: 'border-red-200',
  },
  indigo: {
    bg: 'bg-indigo-100',
    icon: 'text-indigo-600',
    border: 'border-indigo-200',
  },
  green: {
    bg: 'bg-green-100',
    icon: 'text-green-600',
    border: 'border-green-200',
  },
  blue: {
    bg: 'bg-blue-100',
    icon: 'text-blue-600',
    border: 'border-blue-200',
  },
  purple: {
    bg: 'bg-purple-100',
    icon: 'text-purple-600',
    border: 'border-purple-200',
  },
};

export default function Benefits() {
  return (
    <section className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#26A8E0]/10 text-[#26A8E0] text-sm font-semibold rounded-full mb-4">
            Benefits
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            What You Gain with{' '}
            <span className="gradient-text">EMC UAE</span>
          </h2>
          <p className="text-lg text-slate-600">
            Achieve PCI DSS compliance and unlock these valuable benefits for your organization.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const colors = colorClasses[benefit.color];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#26A8E0]/20 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-5`}>
                  <benefit.icon className={`w-7 h-7 ${colors.icon}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#26A8E0] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#contact"
            className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white gradient-bg rounded-full hover:shadow-xl hover:shadow-[#26A8E0]/25 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get These Benefits Today
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
