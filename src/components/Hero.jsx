import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, CheckCircle2, Users, Clock } from 'lucide-react';

export default function Hero() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-[#26A8E0]/10 rounded-full mb-6"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#26A8E0] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#26A8E0]"></span>
              </span>
              <span className="text-sm font-medium text-[#26A8E0]">
                UAE's Trusted PCI DSS Partner
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6"
            >
              Get{' '}
              <span className="gradient-text">PCI DSS Certified</span>
              {' '}Faster in the{' '}
              <span className="relative">
                <span className="relative z-10">UAE</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 12" fill="none">
                  <path d="M2 10C20 4 50 2 98 10" stroke="url(#gradient)" strokeWidth="4" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#26A8E0" />
                      <stop offset="100%" stopColor="#1E8FC2" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              EMC UAE helps you achieve PCI DSS compliance quickly with expert assessment, 
              gap analysis, and complete end-to-end support.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <motion.a
                href="#contact"
                className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white gradient-bg rounded-full hover:shadow-xl hover:shadow-[#26A8E0]/25 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book a Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6"
            >
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-[#26A8E0]" />
                <span className="text-sm font-medium text-slate-700">Certified Experts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-[#26A8E0]" />
                <span className="text-sm font-medium text-slate-700">Fast Certification</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-[#26A8E0]" />
                <span className="text-sm font-medium text-slate-700">UAE Focused</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Lead Capture Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden p-8">
              {/* Form Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#26A8E0]/10 mb-4">
                  <Shield className="w-7 h-7 text-[#26A8E0]" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Start Your PCI DSS Journey
                </h3>
                <p className="text-slate-600">
                  Fill in your details and our experts will reach out
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#26A8E0] focus:ring-2 focus:ring-[#26A8E0]/20 transition-all outline-none"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#26A8E0] focus:ring-2 focus:ring-[#26A8E0]/20 transition-all outline-none"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#26A8E0] focus:ring-2 focus:ring-[#26A8E0]/20 transition-all outline-none"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-slate-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#26A8E0] focus:ring-2 focus:ring-[#26A8E0]/20 transition-all outline-none"
                    placeholder="Enter your company name"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-4 px-6 text-base font-semibold text-white gradient-bg rounded-xl hover:shadow-xl hover:shadow-[#26A8E0]/25 transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  Schedule your free demo
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </form>

              {/* Trust Badge */}
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Your information is secure and confidential</span>
              </div>
            </div>

            {/* Floating Elements - Positioned outside form area */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -left-12 top-8 bg-white rounded-xl shadow-lg p-4 border border-slate-100 hidden xl:block z-10"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#26A8E0]/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-[#26A8E0]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Expert Team</p>
                  <p className="text-xs text-slate-500">Certified PCI Professionals</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="absolute -right-8 -bottom-4 bg-white rounded-xl shadow-lg p-4 border border-slate-100 hidden xl:block z-10"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#26A8E0]/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#26A8E0]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">End-to-End</p>
                  <p className="text-xs text-slate-500">Complete Support</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
