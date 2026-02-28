import { motion } from 'framer-motion';
import { 
  Shield, 
  Zap, 
  Users, 
  Wrench,
  ArrowRight
} from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Certified PCI Experts',
    description: 'Work with experienced professionals who understand PCI DSS requirements inside out.',
    color: 'indigo',
  },
  {
    icon: Zap,
    title: 'Faster Time to Compliance',
    description: 'Our structured approach helps you reduce delays and achieve certification quickly.',
    color: 'purple',
  },
  {
    icon: Users,
    title: 'End-to-End Support',
    description: 'From gap assessment to final attestation — we handle the complete journey.',
    color: 'blue',
  },
  {
    icon: Wrench,
    title: 'Practical Implementation',
    description: 'We focus on real security improvements, not just paperwork.',
    color: 'green',
  },
];

const colorClasses = {
  indigo: {
    bg: 'bg-indigo-100',
    icon: 'text-indigo-600',
    hover: 'group-hover:bg-indigo-200',
  },
  purple: {
    bg: 'bg-purple-100',
    icon: 'text-purple-600',
    hover: 'group-hover:bg-purple-200',
  },
  blue: {
    bg: 'bg-blue-100',
    icon: 'text-blue-600',
    hover: 'group-hover:bg-blue-200',
  },
  green: {
    bg: 'bg-green-100',
    icon: 'text-green-600',
    hover: 'group-hover:bg-green-200',
  },
  amber: {
    bg: 'bg-amber-100',
    icon: 'text-amber-600',
    hover: 'group-hover:bg-amber-200',
  },
  rose: {
    bg: 'bg-rose-100',
    icon: 'text-rose-600',
    hover: 'group-hover:bg-rose-200',
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Features() {
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
            Why Choose EMC UAE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Why UAE Businesses{' '}
            <span className="gradient-text">Choose EMC UAE</span>
          </h2>
          <p className="text-lg text-slate-600">
            Partner with certified experts who deliver practical PCI DSS compliance 
            solutions tailored for UAE organizations.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#26A8E0]/20 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl ${colors.bg} ${colors.hover} flex items-center justify-center mb-5 transition-colors`}>
                  <feature.icon className={`w-7 h-7 ${colors.icon}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#26A8E0] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-4 flex items-center text-[#26A8E0] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm">Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

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
            Get Started with EMC UAE
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
