import { motion } from 'framer-motion';
import { Shield, Twitter, Linkedin, Github, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = {
  Services: [
    { label: 'PCI DSS Gap Assessment', href: '#' },
    { label: 'Readiness Assessment', href: '#' },
    { label: 'Remediation Guidance', href: '#' },
    { label: 'SAQ & ROC Support', href: '#' },
    { label: 'Continuous Advisory', href: '#' },
  ],
  Process: [
    { label: 'Gap Assessment', href: '#' },
    { label: 'Remediation Support', href: '#' },
    { label: 'Final Assessment', href: '#' },
    { label: 'Attestation', href: '#' },
  ],
  Company: [
    { label: 'About EMC UAE', href: '#' },
    { label: 'Why Choose Us', href: '#' },
    { label: 'Testimonials', href: '#' },
    { label: 'Contact', href: '#contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <motion.a
              href="#"
              className="inline-flex items-center mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src="/EMC Logo-01.png" 
                alt="EMC UAE" 
                className="h-12 w-auto brightness-0 invert"
              />
            </motion.a>
            <p className="text-slate-400 mb-6 max-w-sm">
              Your trusted partner for PCI DSS compliance in the UAE. 
              Expert assessment, gap analysis, and end-to-end support.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="mailto:info@emcuae.com" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@emcuae.com</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Dubai, United Arab Emirates</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-[#26A8E0] flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-white mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} EMC UAE. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
