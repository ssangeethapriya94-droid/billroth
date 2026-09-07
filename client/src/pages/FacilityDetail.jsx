import { useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Activity,
  ShieldCheck,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Send,
  Check,
  Microscope,
  Stethoscope,
  ChevronRight,
  ZoomIn,
  X,
  FileText,
  HeartPulse
} from 'lucide-react';
import { facilitiesData } from '../data/facilitiesData';

const FacilityDetail = () => {
  const { slug } = useParams();
  const location = useLocation();

  // Determine current facility slug either from url params or pathname
  const rawPath = location.pathname.replace(/^\//, '').replace(/^facilities\//, '').toLowerCase();
  const currentSlug = slug || rawPath || 'radiology-imaging';

  const facility = facilitiesData[currentSlug] || facilitiesData['radiology-imaging'];

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        preferredDate: '',
        notes: ''
      });
    }, 4500);
  };

  const currentImage = facility.image || facility.heroImage || '/facilities/radiology-imaging.jpg';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-[#0095da] selection:text-white">
      {/* HERO BANNER WITH BREADCRUMB */}
      <section className="relative overflow-hidden text-white pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-24 lg:pb-28 min-h-[490px] flex items-center">
        {/* Background Image with Directional Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={facility.heroImage || currentImage}
            alt={`${facility.name} at Billroth Hospitals`}
            className="w-full h-full object-cover object-center transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#021824]/95 via-[#063248]/85 to-[#0b2535]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#021824] via-transparent to-black/30" />
        </div>

        {/* Ambient Glow */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#0095da]/20 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#8cc63f]/20 rounded-full blur-3xl pointer-events-none z-0" />

        <div className="container-custom relative z-10 w-full">
          {/* Breadcrumbs inside the banner without separate highlight color */}
          <nav className="flex items-center gap-2 text-xs text-white/80 font-medium mb-6 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={13} className="text-white/60" />
            <Link to="/facilities" className="hover:text-white transition-colors">Facilities & Diagnostics</Link>
            <ChevronRight size={13} className="text-white/60" />
            <span className="text-white">{facility.name}</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-black uppercase tracking-widest text-[#8cc63f]"
            >
              <Sparkles size={13} className="text-[#8cc63f]" />
              <span>{facility.badge || 'FACILITIES & DIAGNOSTIC SERVICES'}</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.15]">
              {facility.name}
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow-sm">
              {facility.tagline || facility.overview}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#booking-section"
                className="px-6 py-3.5 rounded-full text-white font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 flex items-center gap-2"
                style={{
                  background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)'
                }}
              >
                <span>Book Diagnostic Test</span>
                <ArrowRight size={14} />
              </a>

              <a
                href="tel:7299404040"
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-black text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
              >
                <PhoneCall size={14} />
                <span>Helpline: 7299 404040</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUALITY CREDENTIALS CARDS (PARTIALLY IN BANNER, PARTIALLY OUT) */}
      <div className="relative z-20 -mt-12 sm:-mt-14 lg:-mt-16 container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {[
            {
              icon: ShieldCheck,
              title: 'NABL & NABH ACCREDITED',
              subtitle: 'Gold Standard Quality',
              glowGradient: 'from-[#0095da] via-teal-400 to-[#8cc63f]',
              iconGlow: 'group-hover:shadow-[0_0_20px_rgba(140,198,63,0.6)]'
            },
            {
              icon: Clock,
              title: '24/7 DIAGNOSTICS',
              subtitle: 'Emergency & Routine Tests',
              glowGradient: 'from-[#0095da] via-sky-400 to-[#003853]',
              iconGlow: 'group-hover:shadow-[0_0_20px_rgba(0,149,218,0.6)]'
            },
            {
              icon: Activity,
              title: 'SUB–MILLIMETER PRECISION',
              subtitle: 'Advanced Digital Sensors',
              glowGradient: 'from-emerald-400 via-teal-400 to-[#8cc63f]',
              iconGlow: 'group-hover:shadow-[0_0_20px_rgba(16,168,119,0.6)]'
            },
            {
              icon: HeartPulse,
              title: 'INSTANT DIGITAL REPORTS',
              subtitle: 'Online Access via Portal',
              glowGradient: 'from-[#0095da] via-cyan-400 to-[#8cc63f]',
              iconGlow: 'group-hover:shadow-[0_0_20px_rgba(0,149,218,0.6)]'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative group cursor-pointer"
            >
              {/* Animated Glowing Outer Aura on Hover */}
              <div
                className={`absolute -inset-0.5 rounded-2xl sm:rounded-3xl bg-gradient-to-r ${item.glowGradient} opacity-0 group-hover:opacity-100 blur-md group-hover:blur-lg transition-all duration-500 -z-10`}
              />

              {/* Card Surface */}
              <div className="relative h-full bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-slate-200/90 group-hover:border-transparent shadow-xl group-hover:shadow-[0_18px_38px_-5px_rgba(0,149,218,0.32)] transition-all duration-300 flex items-center gap-3.5">
                {/* Glowing Animated Icon Frame */}
                <div
                  className={`w-12 h-12 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center shrink-0 text-[#0095da] group-hover:bg-gradient-to-r group-hover:from-[#0095da] group-hover:to-[#8cc63f] group-hover:text-white transition-all duration-300 ${item.iconGlow} group-hover:scale-110`}
                >
                  <item.icon size={22} className="transition-transform duration-300 group-hover:rotate-6" />
                </div>

                {/* Text Content */}
                <div className="text-left min-w-0">
                  <p className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-slate-900 group-hover:text-[#0095da] transition-colors leading-snug">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5 truncate">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4. OVERVIEW, LAB & PROCEDURE SHOWCASE, & CLINICAL HIGHLIGHTS */}
      <section className="pt-10 sm:pt-14 pb-14 sm:pb-20 container-custom">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Main Clinical Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Visual Lab & Treatment Showcase Card */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md">
              <div className="relative group cursor-pointer" onClick={() => setLightboxOpen(true)}>
                <img
                  src={currentImage}
                  alt={`${facility.name} Laboratory and Clinical Suite`}
                  className="w-full h-72 sm:h-96 object-cover object-center transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[10px] font-black uppercase tracking-wider text-[#8cc63f] w-fit mb-2">
                    <Microscope size={12} />
                    <span>Clinical Diagnostic & Treatment Suite</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black">{facility.name}</h3>
                  <p className="text-xs text-slate-200 mt-1 max-w-xl">
                    Dedicated facility featuring advanced medical instrumentation, sterile air-handling, and certified clinical teams at Billroth Hospitals.
                  </p>
                  <div className="absolute top-4 right-4 p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 transition-colors">
                    <ZoomIn size={16} />
                  </div>
                </div>
              </div>
            </div>

            {/* Clinical Overview Content */}
            <div className="bg-white rounded-3xl p-6 sm:p-9 border border-slate-200/80 shadow-md space-y-6">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#0095da]">
                  Clinical Overview
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                  About {facility.name}
                </h2>
              </div>

              <div className="text-slate-600 text-sm leading-relaxed space-y-4 font-normal">
                <p className="text-base font-medium text-slate-700">{facility.overview}</p>
                {facility.detailedDescription && (
                  <p className="whitespace-pre-line">{facility.detailedDescription}</p>
                )}
                {facility.patientCentric && (
                  <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 text-xs text-slate-700 leading-relaxed">
                    <strong className="text-[#0095da] font-black block mb-1">Patient-Centric Care:</strong>
                    {facility.patientCentric}
                  </div>
                )}
              </div>

              {/* Diagnostic Equipment / Infrastructure */}
              {facility.equipment && facility.equipment.length > 0 && (
                <div className="space-y-4 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <Microscope size={20} className="text-[#0095da]" />
                    <h3 className="text-lg font-black text-slate-900">
                      Advanced Equipment & Diagnostic Infrastructure
                    </h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {facility.equipment.map((eq, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/70 transition-colors space-y-1"
                      >
                        <h4 className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                          <CheckCircle2 size={13} className="text-[#8cc63f] shrink-0" />
                          <span>{eq.name}</span>
                        </h4>
                        <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                          {eq.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Services & Treatment Offered */}
              {facility.services && facility.services.length > 0 && (
                <div className="space-y-4 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <Stethoscope size={20} className="text-[#8cc63f]" />
                    <h3 className="text-lg font-black text-slate-900">
                      Services, Tests & Treatment Capabilities
                    </h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {facility.services.map((svc, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1.5"
                      >
                        <h4 className="text-xs font-black text-[#0095da]">{svc.title}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed font-normal">{svc.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Indications List */}
              {facility.indications && facility.indications.length > 0 && (
                <div className="space-y-4 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <FileText size={20} className="text-[#0095da]" />
                    <h3 className="text-lg font-black text-slate-900">
                      Key Indications & Clinical Use Cases
                    </h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {facility.indications.map((ind, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-xs font-semibold text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100"
                      >
                        <CheckCircle2 size={15} className="text-[#8cc63f] shrink-0 mt-0.5" />
                        <span>{ind}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* 24/7 Hotline Card */}
            <div className="bg-gradient-to-br from-[#003853] to-[#011e2c] text-white rounded-3xl p-6 sm:p-7 shadow-xl space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-[#8cc63f] flex items-center justify-center">
                <Clock size={24} />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#8cc63f]">
                  24/7 Operations
                </span>
                <h4 className="text-xl font-black text-white mt-1">
                  Round-The-Clock Diagnostic Care
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Emergency reporting, digital imaging, and sample collection available 24/7 with immediate critical-value notifications to your treating physician.
              </p>
              <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 text-xs text-slate-200">
                <strong>Emergency Helpline:</strong>
                <div className="text-base font-black text-white mt-0.5">044-26264000</div>
              </div>
              <a
                href="tel:04426264000"
                className="block w-full py-3 rounded-2xl bg-gradient-to-r from-[#0095da] via-[#10a877] to-[#8cc63f] text-white font-black text-xs uppercase tracking-wider text-center shadow-lg hover:shadow-xl transition-all"
              >
                Call Emergency Desk
              </a>
            </div>

            {/* Quick Navigation to Other Facilities */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                  Facilities & Diagnostics
                </h4>
                <Link
                  to="/facilities"
                  className="text-[11px] font-black text-[#0095da] hover:underline"
                >
                  View All
                </Link>
              </div>
              <div className="space-y-1.5 text-xs font-bold max-h-96 overflow-y-auto pr-1">
                {[
                  { name: 'Cath Lab', path: '/cath-lab' },
                  { name: 'Radiology & Imaging', path: '/radiology-imaging' },
                  { name: 'CT Scan', path: '/ct-scan' },
                  { name: 'MRI Scan', path: '/mri' },
                  { name: 'PFT (Pulmonary Function Test)', path: '/pft' },
                  { name: 'Mammography', path: '/mammography' },
                  { name: 'TMT (Treadmill Test)', path: '/tmt' },
                  { name: '2D Echo', path: '/2d-echo' },
                  { name: 'Ultrasound', path: '/ultrasound' },
                  { name: 'X-Ray', path: '/x-ray' },
                  { name: 'CT Angiogram', path: '/ct-angiogram' },
                  { name: 'EEG', path: '/eeg' },
                  { name: 'ECG', path: '/ecg' },
                  { name: 'Dialysis Unit', path: '/dialysis' },
                  { name: 'Endoscopy Suite', path: '/endoscopy' },
                  { name: 'Colonoscopy', path: '/colonoscopy' },
                  { name: 'Emergency Services & Trauma Care', path: '/emergency-services-trauma-care' },
                  { name: 'Intensive Care Units (ICU & NICU)', path: '/intensive-care-units' },
                  { name: 'Lab Facilities', path: '/lab-facilities' },
                  { name: 'Physiotherapy', path: '/physiotherapy' },
                  { name: 'Blood Transfusion Services', path: '/blood-transfusion-services' },
                  { name: 'Ambulance Services', path: '/ambulance' }
                ].map((item, idx) => {
                  const isActive = location.pathname.includes(item.path);
                  return (
                    <Link
                      key={idx}
                      to={item.path}
                      className={`flex items-center justify-between p-2.5 rounded-xl transition-all ${
                        isActive
                          ? 'bg-[#0095da]/10 text-[#0095da] font-black'
                          : 'hover:bg-slate-50 text-slate-700 hover:text-[#0095da]'
                      }`}
                    >
                      <span className="truncate">{item.name}</span>
                      <ChevronRight size={13} className="shrink-0 text-slate-400" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOOKING FORM */}
      <section id="booking-section" className="py-14 sm:py-20 bg-white border-t border-slate-200/80">
        <div className="container-custom max-w-4xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-[#0095da]">
              Easy Online Booking
            </span>
            <h3 className="text-3xl font-black text-slate-900 tracking-tight mt-1">
              Book Appointment for {facility.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Our central diagnostic coordinator will contact you with preparation instructions and confirm your preferred slot.
            </p>
          </div>

          <div className="bg-slate-50 rounded-3xl p-6 sm:p-9 border border-slate-200/80 shadow-md">
            {formSubmitted ? (
              <div className="p-8 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check size={28} />
                </div>
                <h4 className="text-xl font-black text-slate-900">Appointment Request Received!</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you. Our diagnostic team at Billroth Hospitals will contact you promptly on the provided number.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Patient Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0095da]/30 focus:border-[#0095da]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Mobile Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0095da]/30 focus:border-[#0095da]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0095da]/30 focus:border-[#0095da]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Doctor Prescription / Notes
                    </label>
                    <input
                      type="text"
                      placeholder="Doctor name or prescription reference"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0095da]/30 focus:border-[#0095da]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl text-white font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                  style={{
                    background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)'
                  }}
                >
                  <Send size={14} />
                  <span>Submit Diagnostic Booking</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 6. LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <div className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl">
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors z-10 cursor-pointer"
              >
                <X size={20} />
              </button>
              <img
                src={currentImage}
                alt={`${facility.name} Diagnostic Suite`}
                className="max-h-[85vh] w-auto mx-auto rounded-2xl object-contain"
              />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black via-black/60 to-transparent text-white text-center">
                <p className="font-bold text-sm">{facility.name} - Diagnostic Suite</p>
                <p className="text-xs text-slate-300">Billroth Hospitals Diagnostic Infrastructure</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FacilityDetail;
