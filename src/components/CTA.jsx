import { motion } from 'framer-motion';
import { ArrowRight, Shield, AlertTriangle } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Don't Delay Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-br from-red-600 via-red-700 to-orange-700 rounded-3xl p-8 lg:p-12 overflow-hidden mb-16"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative text-center">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-6"
            >
              <AlertTriangle className="w-8 h-8 text-white" />
            </motion.div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 max-w-3xl mx-auto">
              Don't Delay Your PCI DSS Compliance
            </h2>

            {/* Subheadline */}
            <p className="text-lg text-red-100 mb-8 max-w-2xl mx-auto">
              Non-compliance can lead to penalties, security risks, and lost customer trust. 
              Start your PCI DSS journey with EMC UAE today.
            </p>

            {/* CTA Button */}
            <motion.a
              href="#final-cta"
              className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-red-700 bg-white rounded-full hover:bg-red-50 hover:shadow-xl transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book a Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>

        {/* Final CTA Section */}
        <motion.div
          id="final-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 rounded-3xl p-8 lg:p-16 overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative text-center">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-8"
            >
              <Shield className="w-8 h-8 text-white" />
            </motion.div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto">
              Ready to Get{' '}
              <span className="text-indigo-200">PCI DSS Certified?</span>
            </h2>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
              Speak with EMC UAE experts and accelerate your compliance journey today.
            </p>

            {/* CTA Button */}
            <motion.a
              href="#"
              className="group inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-indigo-700 bg-white rounded-full hover:bg-indigo-50 hover:shadow-xl transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book a Demo
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
