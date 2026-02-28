import { motion } from 'framer-motion';

const logos = [
  { name: 'Emirates Bank', color: '#6366f1' },
  { name: 'Dubai Pay', color: '#8b5cf6' },
  { name: 'Gulf Finance', color: '#0ea5e9' },
  { name: 'SecurePay UAE', color: '#10b981' },
  { name: 'Al Rajhi', color: '#f59e0b' },
  { name: 'Mashreq', color: '#ef4444' },
  { name: 'ADCB', color: '#6366f1' },
  { name: 'FAB', color: '#8b5cf6' },
];

function LogoPlaceholder({ name, color }) {
  return (
    <div 
      className="flex items-center justify-center px-8 py-4 bg-white rounded-xl border border-slate-100 shadow-sm min-w-[180px] h-16"
    >
      <div className="flex items-center space-x-2">
        <div 
          className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
          style={{ backgroundColor: color }}
        >
          {name.charAt(0)}
        </div>
        <span className="font-semibold text-slate-700 whitespace-nowrap">{name}</span>
      </div>
    </div>
  );
}

export default function LogoCarousel() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold text-[#26A8E0] uppercase tracking-wider mb-2">
            Social Proof
          </p>
          <h2 className="text-2xl font-bold text-slate-900">
            Trusted by Security-Focused Organizations
          </h2>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          
          {/* Scrolling Logos */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 30,
                  ease: 'linear',
                },
              }}
            >
              {/* Double the logos for seamless loop */}
              {[...logos, ...logos].map((logo, index) => (
                <LogoPlaceholder key={index} name={logo.name} color={logo.color} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
