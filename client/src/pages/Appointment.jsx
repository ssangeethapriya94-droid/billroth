import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Phone, Mail, ChevronDown, CheckCircle, Clock, ShieldCheck } from 'lucide-react';
import { departments, hospitalInfo } from '../data/data';

const whyChoose = [
  { icon: '⚡', title: 'Fast Confirmation', desc: 'Get appointment confirmed within 2 hours' },
  { icon: '👨‍⚕️', title: 'Expert Doctors', desc: '150+ specialist doctors available' },
  { icon: '🔒', title: 'Safe & Secure', desc: 'Your health data is 100% confidential' },
];

const Appointment = () => {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', department: '', date: '', time: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md bg-white rounded-3xl shadow-xl p-10 border border-slate-200"
        >
          <div className="w-20 h-20 bg-lime-50 text-[#8cc63f] border border-lime-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={44} />
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-2">Appointment Requested!</h2>
          <p className="text-slate-500 mb-2 text-sm">
            Thank you, <strong>{form.name}</strong>!
          </p>
          <p className="text-slate-500 mb-6 text-xs leading-relaxed">
            Our medical coordination desk will contact you at <strong>{form.phone}</strong> shortly to confirm your consultation schedule.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="w-full text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md"
            style={{
              background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)',
            }}
          >
            Book Another Appointment
          </button>
        </motion.div>
      </div>
    );
  }

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
            Online Doctor Consultation
          </span>
          <h1 className="text-4xl sm:text-5xl 2xl:text-6xl font-black text-white">
            Book an <span className="text-[#8cc63f]">Appointment</span>
          </h1>
          <p className="text-white/90 text-base sm:text-lg 2xl:text-xl">
            Schedule your consultation with top specialists at Billroth Hospitals Chennai.
          </p>
        </motion.div>
      </div>

      <div className="container-custom py-16 2xl:py-24">
        <div className="grid lg:grid-cols-3 gap-10 2xl:gap-14">
          
          {/* Left Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
              <h3 className="font-black text-slate-900 text-base mb-5 uppercase tracking-wider text-xs">
                Why Book With Billroth?
              </h3>
              <div className="space-y-4">
                {whyChoose.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-sky-50 text-[#0095da] rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{item.title}</p>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Ribbon */}
            <div className="bg-red-50 border border-red-200 rounded-3xl p-6 text-center">
              <p className="text-red-600 font-extrabold text-xs uppercase tracking-wider mb-1">🚑 Medical Emergency?</p>
              <a href="tel:04426264000" className="text-2xl font-black text-red-700 block hover:underline">
                044-26264000
              </a>
              <p className="text-red-400 text-xs mt-1">Available 24 Hours, 7 Days a Week</p>
            </div>
          </div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 sm:p-10 space-y-6"
            >
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-1">Patient Details</h2>
                <p className="text-slate-400 text-xs font-medium">Fields marked with * are required.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Patient Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter full name"
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

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Department *</label>
                  <div className="relative">
                    <select
                      name="department"
                      required
                      value={form.department}
                      onChange={handleChange}
                      className="w-full appearance-none px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-[#0095da] outline-none text-sm font-semibold bg-slate-50 focus:bg-white transition-all"
                    >
                      <option value="">Select Specialty</option>
                      {departments.map((d) => (
                        <option key={d.id} value={d.name}>{d.name}</option>
                      ))}
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Preferred Date</label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-[#0095da] outline-none text-sm font-semibold bg-slate-50 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Symptoms or Medical Condition</label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your health issue or any previous medical history..."
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
                <Calendar size={16} />
                <span>Confirm Appointment Booking</span>
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Appointment;
