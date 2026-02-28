import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Testimonials with auto-rotating company logos and border animation timer
 * Features:
 * - Animated border progress that fills as timer counts (conic-gradient)
 * - Company initials with black accent when active
 * - EMC blue (#26A8E0) as primary accent color
 * - Subtle black (#031432) used wisely as brand accent
 */

const testimonials = [
  {
    id: 1,
    companyInitials: 'DP',
    companyName: 'Dubai Payments Co.',
    quote: 'EMC UAE made our PCI DSS compliance smooth and stress-free—',
    highlight: 'we got a clear roadmap to certification from day one.',
    authorName: 'Ahmed Al Mansouri',
    authorRole: 'IT Director, Dubai Payments Co.',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format',
  },
  {
    id: 2,
    companyInitials: 'GE',
    companyName: 'Gulf E-Commerce',
    quote: 'Their expert team helped us achieve certification faster than expected—',
    highlight: 'the structured approach made all the difference.',
    authorName: 'Sarah Khan',
    authorRole: 'CISO, Gulf E-Commerce',
    authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&auto=format',
  },
  {
    id: 3,
    companyInitials: 'EF',
    companyName: 'Emirates FinTech',
    quote: 'Professional, knowledgeable, and efficient—',
    highlight: 'EMC UAE delivered exactly what we needed for PCI DSS compliance.',
    authorName: 'Mohammed Hassan',
    authorRole: 'Compliance Manager, Emirates FinTech',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&auto=format',
  },
  {
    id: 4,
    companyInitials: 'AR',
    companyName: 'Abu Dhabi Retail',
    quote: 'From gap assessment to final attestation—',
    highlight: 'EMC UAE was with us every step of the way.',
    authorName: 'Fatima Al Rashid',
    authorRole: 'Head of Security, Abu Dhabi Retail',
    authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&auto=format',
  },
];

const ROTATION_INTERVAL = 5000; // 5 seconds per testimonial

/**
 * Company Card Component with animated border progress
 */
function CompanyCard({ testimonial, isActive, progress, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`relative w-full text-left transition-all duration-300 ${
        isActive ? 'z-10' : 'z-0'
      }`}
    >
      {/* Card Content */}
      <div
        className={`relative flex items-center gap-3 px-4 py-4 rounded-xl border-2 transition-all duration-300 ${
          isActive
            ? 'bg-white shadow-lg border-transparent'
            : 'bg-slate-50/80 border-slate-200 hover:border-slate-300 hover:bg-white'
        }`}
      >
        {/* Company Logo/Initials */}
        <div
          className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm transition-all duration-300 ${
            isActive
              ? 'bg-[#031432] text-white'
              : 'bg-slate-200 text-slate-600'
          }`}
        >
          {testimonial.companyInitials}
        </div>

        {/* Company Name */}
        <span
          className={`font-medium text-sm transition-colors duration-300 ${
            isActive ? 'text-[#031432]' : 'text-slate-600'
          }`}
        >
          {testimonial.companyName}
        </span>
      </div>

      {/* Animated Border Progress - Only show when active */}
      {isActive && (
        <div 
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            background: `conic-gradient(from 0deg, #26A8E0 ${progress * 3.6}deg, transparent ${progress * 3.6}deg)`,
            padding: '3px',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />
      )}

      {/* Connecting Line to next card */}
      {!isActive && (
        <div className="hidden lg:block absolute left-7 -bottom-4 w-0.5 h-4 bg-slate-200" />
      )}
    </button>
  );
}

export default function TestimonialsNew() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress animation - smoother updates
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + (100 / (ROTATION_INTERVAL / 50));
      });
    }, 50);

    // Auto-rotate testimonials
    const rotationInterval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setProgress(0);
    }, ROTATION_INTERVAL);

    return () => {
      clearInterval(progressInterval);
      clearInterval(rotationInterval);
    };
  }, []);

  const handleCardClick = (index) => {
    setActiveIndex(index);
    setProgress(0);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#031432]">
            What our customers say
          </h2>
        </motion.div>

        {/* Testimonials Container */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left Column - Company Cards with Border Animation */}
          <div className="lg:w-[280px] flex-shrink-0">
            <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
              {testimonials.map((testimonial, index) => (
                <CompanyCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  isActive={activeIndex === index}
                  progress={activeIndex === index ? progress : 0}
                  onClick={() => handleCardClick(index)}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Testimonial Content */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start"
              >
                {/* Quote Section */}
                <div className="flex-1">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#26A8E0]/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#26A8E0]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </div>

                  {/* Quote Text */}
                  <blockquote className="text-xl lg:text-2xl font-medium text-[#031432] leading-relaxed mb-8">
                    {activeTestimonial.quote}
                    <span className="text-[#26A8E0]">{activeTestimonial.highlight}</span>
                  </blockquote>

                  {/* Author Info */}
                  <div>
                    <p className="font-bold text-[#031432]">{activeTestimonial.authorName}</p>
                    <p className="text-slate-500">{activeTestimonial.authorRole}</p>
                  </div>
                </div>

                {/* Author Image */}
                <div className="w-full lg:w-[220px] flex-shrink-0">
                  <div className="relative">
                    {/* Subtle black accent background */}
                    <div className="absolute inset-0 bg-[#031432]/5 rounded-2xl transform rotate-3"></div>
                    {/* EMC blue accent */}
                    <div className="absolute inset-0 bg-[#26A8E0]/10 rounded-2xl transform -rotate-2"></div>
                    <img
                      src={activeTestimonial.authorImage}
                      alt={activeTestimonial.authorName}
                      className="relative w-full aspect-square object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
