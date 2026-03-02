import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How long does PCI DSS readiness typically take?',
    answer: 'Timelines vary based on your current environment. Most UAE organizations complete the process within a few weeks to a few months with structured support.',
  },
  {
    question: 'Do you support remediation activities?',
    answer: 'Yes. Our team provides guided remediation support to help close identified gaps quickly and efficiently.',
  },
  {
    question: 'Which UAE businesses typically require PCI DSS?',
    answer: 'Any organization that stores, processes, or transmits cardholder data — (e.g. eCommerce, fintech, retail, payment providers etc.)',
  },
  {
    question: 'Do you support companies across the UAE?',
    answer: 'Yes, we have a strong client base in the UAE. We serve organizations across the UAE and Middle East.',
  },
];

function FAQItem({ faq, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-slate-200 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors pr-8">
          {faq.question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
          isOpen ? 'bg-indigo-600' : 'bg-slate-100 group-hover:bg-indigo-100'
        }`}>
          {isOpen ? (
            <Minus className="w-4 h-4 text-white" />
          ) : (
            <Plus className="w-4 h-4 text-slate-600 group-hover:text-indigo-600" />
          )}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-slate-600 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-[#26A8E0]/10 text-[#26A8E0] text-sm font-semibold rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about PCI DSS compliance and our services.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 lg:p-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 mb-4">
            Still have questions? We're here to help.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-[#26A8E0] font-semibold hover:text-[#1E8FC2] transition-colors"
          >
            Contact our team
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
