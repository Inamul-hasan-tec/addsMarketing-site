import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Shield, FileCheck, Users, BarChart3, Lock, BookOpen, Award, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  {
    label: 'Services',
    children: [
      { label: 'PCI DSS Gap Assessment', description: 'Identify compliance gaps', icon: Shield, href: '#' },
      { label: 'Readiness Assessment', description: 'Prepare for certification', icon: FileCheck, href: '#' },
      { label: 'Remediation Guidance', description: 'Close security gaps quickly', icon: BarChart3, href: '#' },
      { label: 'SAQ & ROC Support', description: 'Documentation assistance', icon: Award, href: '#' },
    ],
  },
  {
    label: 'Why EMC UAE',
    href: '#',
  },
  {
    label: 'Process',
    href: '#',
  },
  { label: 'FAQ', href: '#' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
          >
            <img 
              src="/EMC Logo-01.png" 
              alt="EMC UAE" 
              className="h-10 w-auto"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={cn(
                    'flex items-center space-x-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                    'text-slate-700 hover:text-[#26A8E0] hover:bg-[#26A8E0]/5'
                  )}
                >
                  <span>{item.label}</span>
                  {item.children && (
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 transition-transform duration-200',
                        activeDropdown === item.label && 'rotate-180'
                      )}
                    />
                  )}
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
                    >
                      <div className="p-2">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="flex items-start space-x-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-lg bg-[#26A8E0]/10 flex items-center justify-center group-hover:bg-[#26A8E0]/20 transition-colors">
                              <child.icon className="w-5 h-5 text-[#26A8E0]" />
                            </div>
                            <div>
                              <div className="font-medium text-slate-900 group-hover:text-[#26A8E0] transition-colors">
                                {child.label}
                              </div>
                              <div className="text-sm text-slate-500">
                                {child.description}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-[#26A8E0] transition-colors"
            >
              Login
            </a>
            <motion.a
              href="#"
              className="px-5 py-2.5 text-sm font-semibold text-white gradient-bg rounded-full hover:shadow-lg hover:shadow-[#26A8E0]/25 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book a Demo
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-white border-t border-slate-100"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <a
                      href={item.href || '#'}
                      className="block px-4 py-2 text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                    >
                      {item.label}
                    </a>
                  </div>
                ))}
                <div className="pt-4 px-4 space-y-2">
                  <a
                    href="#"
                    className="block w-full text-center px-4 py-2 text-sm font-medium text-slate-700 border border-slate-200 rounded-full hover:bg-slate-50 transition-colors"
                  >
                    Login
                  </a>
                  <a
                    href="#"
                    className="block w-full text-center px-4 py-2.5 text-sm font-semibold text-white gradient-bg rounded-full"
                  >
                    Book a Demo
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
