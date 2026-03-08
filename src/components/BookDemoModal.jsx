import { useMemo, useState, useEffect } from 'react';
import { X, Shield, CheckCircle2, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import allCountryCodes from '../data/countryCodes.json';

export default function BookDemoModal({ isOpen, onClose }) {
  const countryCodes = useMemo(() => {
    const list = Array.isArray(allCountryCodes) ? allCountryCodes : [];
    const mapped = list
      .filter((c) => c && c.dial_code)
      .map((c) => ({
        code: c.dial_code,
        country: c.name || c.code,
        flag: c.emoji || '',
      }));

    mapped.sort((a, b) => (a.country || '').localeCompare(b.country || ''));

    const idx = mapped.findIndex((c) => c.code === '+971');
    if (idx > 0) {
      const [uae] = mapped.splice(idx, 1);
      mapped.unshift(uae);
    }

    return mapped;
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    countryCode: '+971',
    phone: '',
    companyName: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // No scroll locking - allow background to scroll
  useEffect(() => {
    // Modal can be used without locking scroll
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init('YOUR_PUBLIC_KEY');

      const templateParams = {
        to_email: 'sabirpatna@gmail.com',
        from_name: formData.fullName,
        from_email: formData.email,
        phone: `${formData.countryCode} ${formData.phone}`,
        company: formData.companyName,
        message: `New demo request from ${formData.fullName} at ${formData.companyName}. Phone: ${formData.countryCode} ${formData.phone}`,
        subject: 'New PCI DSS Demo Request'
      };

      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams
      );

      console.log('Email sent successfully!');
      setShowSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        countryCode: '+971',
        phone: '',
        companyName: '',
      });

      // Close modal after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 z-[9998]"
        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
      />

      {/* Modal Container - Centers modal in viewport */}
      <div 
        className="fixed top-1/2 left-1/2 z-[9999] w-full max-w-md px-4"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <div
          className="relative bg-white rounded-2xl shadow-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Success Message */}
          {showSuccess && (
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] rounded-2xl flex items-center justify-center z-10">
              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                  <CheckCircle2 className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Thank You!
                </h3>
                <p className="text-white/90 text-lg">
                  Thank you for submitting your request. Our Team will contact you shortly.
                </p>
              </div>
            </div>
          )}

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-slate-100 transition-colors z-20"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>

              {/* Form Content */}
              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#26A8E0]/10 mb-4">
                    <Shield className="w-7 h-7 text-[#26A8E0]" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Book a Demo
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
                    <div className="flex gap-2">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="px-3 py-3 rounded-xl border border-slate-200 focus:border-[#26A8E0] focus:ring-2 focus:ring-[#26A8E0]/20 transition-all outline-none bg-white max-h-48 overflow-y-auto"
                      >
                        {countryCodes.map((country) => (
                          <option key={`${country.country}-${country.code}`} value={country.code}>
                            {country.flag} {country.code}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:border-[#26A8E0] focus:ring-2 focus:ring-[#26A8E0]/20 transition-all outline-none"
                        placeholder="Enter phone number"
                        required
                      />
                    </div>
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

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 text-base font-semibold text-white gradient-bg rounded-xl hover:shadow-xl hover:shadow-[#26A8E0]/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Request'
                    )}
                  </button>
                </form>

                {/* Trust Badge */}
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Your information is secure and confidential</span>
                </div>
              </div>
            </div>
          </div>
        </>
  );
}
