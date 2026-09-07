import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle, Clock, MessageCircle } from 'lucide-react';
import { hospitalInfo } from '../data/data';

const contactCards = [
  {
    Icon: MapPin,
    label: 'Hospital Address',
    value: '43, Lakshmi Talkies Road, Shenoy Nagar, Chennai – 600 030',
    href: 'https://maps.google.com/?q=Billroth+Hospitals+Chennai',
    iconBg: 'bg-sky-50 border border-sky-200 text-[#0095da]',
  },
  {
    Icon: Phone,
    label: 'Direct Phone',
    value: hospitalInfo.phone1,
    href: `tel:${hospitalInfo.phone1}`,
    iconBg: 'bg-sky-50 border border-sky-200 text-[#0095da]',
  },
  {
    Icon: Mail,
    label: 'Email Enquiries',
    value: hospitalInfo.email,
    href: `mailto:${hospitalInfo.email}`,
    iconBg: 'bg-lime-50 border border-lime-200 text-[#8cc63f]',
  },
  {
    Icon: Clock,
    label: 'Working Hours',
    value: 'Mon – Sat: 8:00 AM – 8:00 PM\n24/7 Emergency Available',
    iconBg: 'bg-lime-50 border border-lime-200 text-[#8cc63f]',
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header with Exact Gradient Theme */}
      <div
        className="relative py-20 px-4 text-center overflow-hidden text-white"
        style={{
          background: 'linear-gradient(135deg, #004b77 0%, #0077b6 35%, #0095da 65%, #3cb878 85%, #8cc63f 100%)',
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '36px 36px',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-3xl 2xl:max-w-4xl mx-auto space-y-4"
        >
          <span className="inline-block bg-white/15 text-[#8cc63f] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider border border-white/20">
            24/7 Healthcare Support
          </span>
          <h1 className="text-4xl sm:text-5xl 2xl:text-6xl font-black text-white">
            Contact <span className="text-[#8cc63f]">Billroth Hospitals</span>
          </h1>
          <p className="text-white/90 text-base sm:text-lg 2xl:text-xl">
            We are here to assist you with outpatient appointments, emergency support, and hospital enquiries.
          </p>
        </motion.div>
      </div>

      <div className="container-custom py-16 2xl:py-24">
        
        {/* Contact Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-6 2xl:gap-8 mb-16">
          {contactCards.map(({ Icon, label, value, href, iconBg }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-6 2xl:p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow text-center"
            >
              <div className={`w-14 h-14 ${iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <Icon size={24} />
              </div>
              <h3 className="text-[11px] 2xl:text-xs font-black text-slate-400 uppercase tracking-wider mb-2">{label}</h3>
              {href ? (
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="text-slate-800 font-bold text-sm hover:text-[#0095da] transition-colors leading-relaxed whitespace-pre-line block"
                >
                  {value}
                </a>
              ) : (
                <p className="text-slate-800 font-bold text-sm leading-relaxed whitespace-pre-line">{value}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Form and Map Grid */}
        <div className="grid lg:grid-cols-2 gap-10 2xl:gap-14">
          {/* Left: Map & Direct Assist */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Map Area */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 p-8 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-sky-50 text-[#0095da] border border-sky-100 rounded-2xl flex items-center justify-center mb-4">
                <MapPin size={28} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg mb-1">Billroth Hospitals</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed max-w-xs">
                43, Lakshmi Talkies Road, Shenoy Nagar, Chennai – 600 030, Tamil Nadu
              </p>
              <a
                href="https://maps.google.com/?q=Billroth+Hospitals+Shenoy+Nagar+Chennai"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                style={{
                  background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)',
                }}
              >
                <MapPin size={14} />
                <span>Open in Google Maps</span>
              </a>
            </div>

            {/* Quick Assist */}
            <div
              className="rounded-3xl p-8 text-white space-y-4"
              style={{
                background: 'linear-gradient(135deg, #004b77 0%, #0077b6 40%, #0095da 70%, #8cc63f 100%)',
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <MessageCircle size={20} className="text-[#8cc63f]" />
                </div>
                <h3 className="font-extrabold text-white text-lg">Need Immediate Assistance?</h3>
              </div>
              <p className="text-sky-100 text-sm leading-relaxed">
                Our patient care desk is available 24/7 to coordinate emergency admissions, ambulance services, and specialist appointments.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${hospitalInfo.emergency}`}
                  className="flex items-center justify-center gap-2 bg-[#8cc63f] text-slate-950 py-3 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-[#7cb632] transition-all"
                >
                  <Phone size={14} /> Emergency 24/7
                </a>
                <a
                  href={`mailto:${hospitalInfo.email}`}
                  className="flex items-center justify-center gap-2 bg-white/20 text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-white/30 transition-all border border-white/20"
                >
                  <Mail size={14} /> Email Us
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {submitted ? (
              <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-12 text-center flex flex-col items-center justify-center h-full">
                <div className="w-20 h-20 bg-lime-50 text-[#8cc63f] border border-lime-200 rounded-full flex items-center justify-center mb-5">
                  <CheckCircle size={44} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-500 mb-6 text-sm max-w-sm">
                  Thank you for reaching out to Billroth Hospitals. Our support team will get back to you promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider"
                  style={{
                    background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)',
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 sm:p-10 space-y-5"
              >
                <div>
                  <h2 className="text-2xl font-black text-slate-900 mb-1">Send Us a Message</h2>
                  <p className="text-slate-400 text-xs font-medium">Please fill in your enquiry details below.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-[#0095da] outline-none text-sm font-semibold bg-slate-50 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-[#0095da] outline-none text-sm font-semibold bg-slate-50 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-[#0095da] outline-none text-sm font-semibold bg-slate-50 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Your Query *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can our clinical team help you?"
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-[#0095da] outline-none text-sm font-semibold bg-slate-50 focus:bg-white transition-all resize-none"
                  />
                </div>

                <motion.button
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 rounded-xl font-black text-xs uppercase tracking-wider text-white shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  style={{
                    background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)',
                  }}
                >
                  <Send size={15} />
                  <span>Send Message</span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
