import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "EMC UAE made our PCI DSS compliance smooth and stress-free. Highly recommended for any UAE business handling payment data.",
    author: 'Ahmed Al Mansouri',
    role: 'IT Director',
    company: 'Dubai Payments Co.',
    avatar: 'AM',
    rating: 5,
  },
  {
    quote: "Their expert team helped us achieve certification faster than expected. The structured approach and hands-on support made all the difference.",
    author: 'Sarah Khan',
    role: 'CISO',
    company: 'Gulf E-Commerce',
    avatar: 'SK',
    rating: 5,
  },
  {
    quote: "Professional, knowledgeable, and efficient. EMC UAE understood our unique requirements and delivered exactly what we needed for PCI DSS compliance.",
    author: 'Mohammed Hassan',
    role: 'Compliance Manager',
    company: 'Emirates FinTech',
    avatar: 'MH',
    rating: 5,
  },
  {
    quote: "From gap assessment to final attestation, EMC UAE was with us every step of the way. Their expertise in PCI DSS is unmatched in the region.",
    author: 'Fatima Al Rashid',
    role: 'Head of Security',
    company: 'Abu Dhabi Retail',
    avatar: 'FR',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-indigo-500/20 text-indigo-300 text-sm font-semibold rounded-full mb-4">
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            What our{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              clients
            </span>{' '}
            say
          </h2>
          <p className="text-lg text-slate-400">
            Hear from UAE organizations who achieved PCI DSS compliance with EMC UAE.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center">
            <Quote className="w-8 h-8 text-indigo-400" />
          </div>

          {/* Main Testimonial Card */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl lg:text-2xl text-white font-medium leading-relaxed mb-8">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-white">
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="text-sm text-slate-400">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-indigo-500'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { value: '100+', label: 'UAE Clients Served' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: 'Fast', label: 'Time to Compliance' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
