import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  Clock,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  Activity,
  HeartPulse,
  Building2,
  Users,
  FileText,
  ChevronDown,
  ChevronUp,
  Download,
  Send,
  Check,
  Zap,
  Layers,
  Heart,
  AlertCircle,
  HelpCircle,
  School
} from 'lucide-react';
import {
  memCourseDetails,
  allAcademicPrograms,
  academicsFaqs
} from '../data/academicsData';

const Academics = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaq, setOpenFaq] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    qualification: 'MBBS (Completed Internship)',
    college: '',
    nmcNumber: '',
    program: 'Masters in Emergency Medicine (MEM) - 3 Years',
    message: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setApplicationForm({
        name: '',
        email: '',
        phone: '',
        qualification: 'MBBS (Completed Internship)',
        college: '',
        nmcNumber: '',
        program: 'Masters in Emergency Medicine (MEM) - 3 Years',
        message: '',
      });
    }, 4500);
  };

  const tabs = [
    { id: 'overview', label: 'MEM Program Overview', icon: BookOpen },
    { id: 'curriculum', label: '3-Year Rotations & Curriculum', icon: Layers },
    { id: 'eligibility', label: 'Eligibility & Selection', icon: Award },
    { id: 'infrastructure', label: 'ED Infrastructure & POCT', icon: Activity },
    { id: 'all-programs', label: 'All Academic Courses', icon: GraduationCap },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* 1. Cinematic Hero Banner */}
      <section
        className="relative overflow-hidden text-white pt-16 pb-24 sm:pb-28 lg:pt-24 lg:pb-36"
        style={{
          background:
            'linear-gradient(135deg, #003657 0%, #005c8a 35%, #0087bf 65%, #2ea06e 85%, #8cc63f 100%)',
        }}
      >
        {/* Background Image Layer with Brand Gradient Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/health-checkup-hero-bg.jpg"
            alt="Billroth Hospitals Academic Department & Clinical Training"
            className="w-full h-full object-cover object-center filter brightness-[0.80] contrast-[1.10]"
          />
          
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(0, 45, 76, 0.90) 0%, rgba(0, 85, 135, 0.78) 35%, rgba(0, 130, 195, 0.65) 65%, rgba(35, 145, 95, 0.58) 85%, rgba(125, 185, 50, 0.45) 100%)',
            }}
          />

          {/* Directional darkening for pristine text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#001e33]/80 via-[#002844]/40 to-[#001e33]/85" />

          {/* Atmospheric ambient glows */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#8cc63f]/30 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#0095da]/35 rounded-full blur-[120px] pointer-events-none" />

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1.5px, transparent 0)',
              backgroundSize: '24px 24px',
            }}
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs font-extrabold text-white shadow-sm"
            >
              <Sparkles size={14} className="text-[#8cc63f]" />
              <span className="text-[#8cc63f]">SEMI Certified Since 2018</span>
              <span className="w-1 h-1 rounded-full bg-white/60" />
              <span>Billroth Medical Education</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] drop-shadow-md"
            >
              Masters in{' '}
              <span className="text-[#8cc63f] drop-shadow-md">Emergency Medicine</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-white/95 mt-2">
                (MEM) • 3-Year Clinical Residency
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed max-w-3xl mx-auto font-medium drop-shadow-sm"
            >
              Awarded by <strong className="text-white font-extrabold">Billroth Hospitals</strong> in association with the <strong className="text-[#8cc63f]">Society for Emergency Medicine of India (SEMI)</strong>. Training future emergency leaders with hands-on Level-1 trauma, acute stroke thrombolysis, and tertiary critical care.
            </motion.p>

            {/* Quick Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-2"
            >
              <a
                href="#apply-section"
                className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-full font-black text-sm shadow-xl shadow-cyan-950/30 hover:shadow-2xl transition-all duration-200 active:scale-95 group"
                style={{
                  background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)',
                }}
              >
                <GraduationCap size={18} />
                <span>Apply for Admission</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="mailto:academics@billrothhospitals.com"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/25 px-6 py-3.5 rounded-full font-bold text-sm backdrop-blur-sm transition-all duration-200"
              >
                <Mail size={16} className="text-[#8cc63f]" />
                <span>academics@billrothhospitals.com</span>
              </a>

              <a
                href="tel:04442921777"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/25 px-6 py-3.5 rounded-full font-bold text-sm backdrop-blur-sm transition-all duration-200"
              >
                <Phone size={16} className="text-[#8cc63f]" />
                <span>Academic Desk: 044 42921777</span>
              </a>
            </motion.div>

            {/* Trust Metrics Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-left"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15 shadow-sm">
                <div className="text-xl sm:text-2xl font-black text-white">3 Years</div>
                <div className="text-xs text-white/85 font-medium">Full Residency</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15 shadow-sm">
                <div className="text-xl sm:text-2xl font-black text-[#8cc63f]">16-Bed</div>
                <div className="text-xs text-white/85 font-medium">Acute Level-1 ED</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15 shadow-sm">
                <div className="text-xl sm:text-2xl font-black text-white">SEMI</div>
                <div className="text-xs text-white/85 font-medium">National Affiliation</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15 shadow-sm">
                <div className="text-xl sm:text-2xl font-black text-[#8cc63f]">24/7</div>
                <div className="text-xs text-white/85 font-medium">CT/MRI &amp; Blood Bank</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Floating 4-Card Highlights Section (Partially in Banner & Partially Down) */}
      <div className="-mt-12 sm:-mt-16 lg:-mt-20 relative z-30 mb-10 sm:mb-14">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:border-[#0095da]/50 transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-sky-50 text-[#0095da] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 group-hover:bg-[#0095da] group-hover:text-white transition-all duration-300">
                <Award size={24} />
              </div>
              <div>
                <div className="text-sm font-black text-slate-900 group-hover:text-[#0095da] transition-colors leading-snug">
                  SEMI Affiliated
                </div>
                <div className="text-xs text-slate-500 mt-1 font-medium">
                  Full member of IFEM
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:border-[#8cc63f]/50 transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-lime-50 text-[#8cc63f] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 group-hover:bg-[#8cc63f] group-hover:text-slate-950 transition-all duration-300">
                <Activity size={24} />
              </div>
              <div>
                <div className="text-sm font-black text-slate-900 group-hover:text-[#0095da] transition-colors leading-snug">
                  16-Bed Acute ED
                </div>
                <div className="text-xs text-slate-500 mt-1 font-medium">
                  Polytrauma &amp; acute code hub
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.26 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:border-emerald-500/50 transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                <Zap size={24} />
              </div>
              <div>
                <div className="text-sm font-black text-slate-900 group-hover:text-[#0095da] transition-colors leading-snug">
                  Bedside POCT &amp; POCUS
                </div>
                <div className="text-xs text-slate-500 mt-1 font-medium">
                  Rapid ABG, Echo &amp; Biomarkers
                </div>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.34 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Layers size={24} />
              </div>
              <div>
                <div className="text-sm font-black text-slate-900 group-hover:text-[#0095da] transition-colors leading-snug">
                  Clinical Rotation
                </div>
                <div className="text-xs text-slate-500 mt-1 font-medium">
                  Radiology, OT, ICU &amp; Ortho
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* 3. Interactive Content Tabs */}
      <section className="py-6 pb-20">
        <div className="container-custom">
          
          {/* Tab Navigation Pill Strip */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-10 no-scrollbar justify-start sm:justify-center">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-black whitespace-nowrap transition-all duration-300 flex items-center gap-2 shrink-0 ${
                    isActive
                      ? 'bg-[#0095da] text-white shadow-lg shadow-sky-200 scale-105'
                      : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80'
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* TAB 1: MEM PROGRAM OVERVIEW */}
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              {/* Introduction & Vision Grid */}
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm space-y-5">
                  <span className="text-xs font-black uppercase tracking-wider text-[#0095da] bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                    Postgraduate Medical Residency
                  </span>
                  
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                    Shaping Frontline Resuscitation Specialists in Modern Healthcare
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {memCourseDetails.overview}
                  </p>

                  <div className="p-5 rounded-2xl bg-gradient-to-r from-sky-50 to-emerald-50 border border-sky-100 text-xs sm:text-sm text-slate-800 space-y-2">
                    <div className="font-extrabold text-slate-900 flex items-center gap-2">
                      <Award size={16} className="text-[#0095da]" />
                      <span>About SEMI (Society for Emergency Medicine of India):</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed font-normal">
                      SEMI is a full member of the International Federation of Emergency Medicine (IFEM) and represents Indian emergency medicine to the global community. SEMI is the oldest and foremost pioneer organization established for the advancement of emergency medicine education and training across India.
                    </p>
                  </div>

                  {/* Course Specs Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/70">
                      <div className="text-[11px] font-bold text-slate-400 uppercase">Duration</div>
                      <div className="text-sm font-black text-slate-900">3 Years</div>
                    </div>
                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/70">
                      <div className="text-[11px] font-bold text-slate-400 uppercase">Eligibility</div>
                      <div className="text-sm font-black text-slate-900">MBBS (NMC)</div>
                    </div>
                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/70">
                      <div className="text-[11px] font-bold text-slate-400 uppercase">Campus</div>
                      <div className="text-sm font-black text-slate-900">Shenoy Nagar</div>
                    </div>
                  </div>
                </div>

                {/* Right Side Visual Highlight Card */}
                <div className="lg:col-span-5 bg-gradient-to-br from-[#003657] to-[#005c8a] rounded-3xl p-8 sm:p-10 text-white shadow-xl space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 text-[#8cc63f] flex items-center justify-center shadow-sm">
                    <HeartPulse size={24} />
                  </div>

                  <h3 className="text-2xl font-black leading-snug">
                    Real-time Critical Trauma &amp; Emergency Exposure
                  </h3>

                  <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
                    The 16-bed Emergency Department (ED) in Billroth Hospitals offers the full spectrum of acute emergency care. Residents handle road traffic accidents, complex poly-trauma, acute coronary syndromes, toxicological poisoning, burns, and emergency resuscitations with senior faculty mentorship.
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-white/15">
                    <div className="flex items-center gap-2 text-xs text-sky-100 font-medium">
                      <CheckCircle2 size={14} className="text-[#8cc63f] shrink-0" />
                      <span>Dedicated Code STEMI &amp; Code Stroke Protocols</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-sky-100 font-medium">
                      <CheckCircle2 size={14} className="text-[#8cc63f] shrink-0" />
                      <span>Bedside multi-parameter ICU grade monitoring</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-sky-100 font-medium">
                      <CheckCircle2 size={14} className="text-[#8cc63f] shrink-0" />
                      <span>Attached Blood Bank with component storage</span>
                    </div>
                  </div>

                  <a
                    href="#apply-section"
                    className="inline-flex items-center gap-2 bg-[#8cc63f] hover:bg-[#7cb632] text-slate-950 font-black px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-colors shadow-md w-full justify-center"
                  >
                    <span>Enquire for 2026 Batch</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>

              {/* 6 Key Highlights Grid */}
              <div>
                <div className="text-center max-w-2xl mx-auto mb-8">
                  <h3 className="text-2xl font-black text-slate-900">
                    Why Choose MEM at Billroth Hospitals?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Structured mentorship, high clinical case volumes, and progressive clinical independence.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {memCourseDetails.keyHighlights.map((hl, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#0095da]/30 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-2xl bg-sky-50 text-[#0095da] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#0095da] group-hover:text-white transition-all">
                        <Check size={18} strokeWidth={3} />
                      </div>
                      <h4 className="text-base font-extrabold text-slate-900 group-hover:text-[#0095da] transition-colors mb-2">
                        {hl.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {hl.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: 3-YEAR ROTATIONS & CURRICULUM */}
          {activeTab === 'curriculum' && (
            <motion.div
              key="curriculum"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              {/* Year-by-Year Rotations Timeline */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm space-y-8">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#0095da] bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                    Residency Structure
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                    3-Year Progressive Clinical Postings &amp; Rotations
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    In Billroth Hospitals, MEM PGs are posted across intensive critical departments such as Radiology, Operation Theatres (OT), Orthopedic Trauma, and CCUs to build all-round mastery.
                  </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                  {memCourseDetails.rotations.map((rot, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 flex flex-col justify-between space-y-4 hover:bg-sky-50/40 hover:border-sky-200 transition-all"
                    >
                      <div className="space-y-3">
                        <div className="text-xs font-black text-[#0095da] uppercase tracking-wider bg-white px-3 py-1 rounded-lg w-fit border border-slate-200">
                          {rot.year}
                        </div>
                        <h4 className="text-base font-extrabold text-slate-900">
                          {rot.focus}
                        </h4>
                      </div>

                      <div className="space-y-2 pt-3 border-t border-slate-200">
                        <div className="text-[11px] font-black text-slate-400 uppercase">
                          Department Postings:
                        </div>
                        <ul className="space-y-1.5">
                          {rot.postings.map((p, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                              <CheckCircle2 size={13} className="text-[#8cc63f] shrink-0" />
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Clinical Procedures & Skills Acquired */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm space-y-6">
                <div className="max-w-2xl">
                  <h3 className="text-2xl font-black text-slate-900">
                    Core Emergency Skills &amp; Procedural Competencies
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    MEM residents achieve certified independence across life-saving resuscitation maneuvers.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-3.5">
                  {memCourseDetails.curriculumTopics.map((topic, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/70 hover:bg-sky-50 hover:border-[#0095da]/30 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#0095da] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-slate-800">
                        {topic}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: ELIGIBILITY & ADMISSION */}
          {activeTab === 'eligibility' && (
            <motion.div
              key="eligibility"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-10"
            >
              <div className="grid lg:grid-cols-12 gap-8">
                
                {/* Left: Eligibility Criteria Card */}
                <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm space-y-6">
                  <span className="text-xs font-black uppercase tracking-wider text-[#0095da] bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                    Candidate Prerequisites
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
                    Eligibility Criteria for MEM (Masters in Emergency Medicine)
                  </h3>

                  <div className="space-y-4 text-sm text-slate-700">
                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                      <CheckCircle2 size={20} className="text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-slate-900 font-extrabold text-sm mb-0.5">
                          MBBS Degree from NMC Recognized College
                        </strong>
                        <span>
                          The applicant must have completed their MBBS degree from an institution recognized by the National Medical Commission (NMC / erstwhile MCI), India.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-sky-50 border border-sky-100">
                      <CheckCircle2 size={20} className="text-[#0095da] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-slate-900 font-extrabold text-sm mb-0.5">
                          Completed 1-Year Compulsory Internship
                        </strong>
                        <span>
                          Candidates must have successfully completed their one-year compulsory rotatory residential internship (CRRI) on or before the admission cutoff date.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-lime-50 border border-lime-100">
                      <CheckCircle2 size={20} className="text-[#6ea32f] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-slate-900 font-extrabold text-sm mb-0.5">
                          Medical Council Registration
                        </strong>
                        <span>
                          Valid permanent or provisional registration with the National Medical Commission (NMC) or any State Medical Council in India is mandatory.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <h4 className="text-sm font-extrabold text-slate-900 mb-2">
                      Selection Process:
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Selection is conducted through a structured institutional assessment of academic credentials, followed by a clinical aptitude interview evaluated by the Academic Board and SEMI faculty coordinators.
                    </p>
                  </div>
                </div>

                {/* Right: Key Contact Desk */}
                <div className="lg:col-span-5 bg-gradient-to-br from-[#003657] to-[#004870] rounded-3xl p-8 sm:p-10 text-white shadow-xl space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 text-[#8cc63f] flex items-center justify-center">
                    <Building2 size={24} />
                  </div>

                  <h3 className="text-2xl font-black">
                    Academic Admissions Office
                  </h3>

                  <p className="text-xs sm:text-sm text-sky-100 leading-relaxed font-normal">
                    For direct inquiries regarding admission schedules, seat availability, prospectus download, and fee structure:
                  </p>

                  <div className="space-y-4 pt-2 border-t border-white/15 text-xs sm:text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-[#8cc63f] shrink-0 mt-0.5" />
                      <span>{memCourseDetails.address}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail size={18} className="text-[#8cc63f] shrink-0" />
                      <a href={`mailto:${memCourseDetails.email}`} className="text-white hover:text-[#8cc63f] transition-colors font-bold">
                        {memCourseDetails.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone size={18} className="text-[#8cc63f] shrink-0" />
                      <a href="tel:04442921777" className="text-white hover:text-[#8cc63f] transition-colors font-bold">
                        044 42921777 / 26641777
                      </a>
                    </div>
                  </div>

                  <a
                    href="#apply-section"
                    className="inline-flex items-center gap-2 bg-[#8cc63f] hover:bg-[#7cb632] text-slate-950 font-black px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-colors w-full justify-center shadow-md"
                  >
                    <span>Submit Online Application</span>
                    <ArrowRight size={14} />
                  </a>
                </div>

              </div>
            </motion.div>
          )}

          {/* TAB 4: INFRASTRUCTURE & POCT */}
          {activeTab === 'infrastructure' && (
            <motion.div
              key="infrastructure"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#0095da] bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                    Clinical Facilities &amp; Technology
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                    Advanced Level-1 Emergency Care Infrastructure
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    The Emergency Department at Billroth is custom-engineered for split-second decision making with integrated bedside diagnostics and diagnostic imaging.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                  
                  <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="w-10 h-10 rounded-2xl bg-sky-50 text-[#0095da] flex items-center justify-center font-bold">
                      <Activity size={20} />
                    </div>
                    <h4 className="text-base font-extrabold text-slate-900">
                      Multi-Panel Monitors
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Continuous real-time hemodynamics, invasive arterial blood pressure, end-tidal CO2 (EtCO2), and cardiac telemetry at every emergency bed.
                    </p>
                  </div>

                  <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="w-10 h-10 rounded-2xl bg-lime-50 text-[#8cc63f] flex items-center justify-center font-bold">
                      <Zap size={20} />
                    </div>
                    <h4 className="text-base font-extrabold text-slate-900">
                      Point-of-Care Testing (POCT)
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Dedicated in-ED rapid Arterial Blood Gas (ABG), electrolytes, High-sensitivity Troponin-T (Hs-Trop-T), and toxicology test panels.
                    </p>
                  </div>

                  <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                      <Stethoscope size={20} />
                    </div>
                    <h4 className="text-base font-extrabold text-slate-900">
                      Bedside POCUS &amp; 2D Echo
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      High-frequency emergency ultrasound machines for E-FAST polytrauma assessment, vascular access, and cardiac contractility evaluation.
                    </p>
                  </div>

                  <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                      <FileText size={20} />
                    </div>
                    <h4 className="text-base font-extrabold text-slate-900">
                      24/7 CT, MRI &amp; Digital X-Ray
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Multi-slice CT scanner, 1.5T MRI, and portable digital radiography attached directly to the emergency department for zero transit delay.
                    </p>
                  </div>

                  <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                      <Heart size={20} />
                    </div>
                    <h4 className="text-base font-extrabold text-slate-900">
                      Emergency Blood Bank
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      On-site 24/7 blood component separation, massive transfusion protocols (MTP), and immediate O-negative uncrossed units for hemorrhagic shock.
                    </p>
                  </div>

                  <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                      <Building2 size={20} />
                    </div>
                    <h4 className="text-base font-extrabold text-slate-900">
                      Dual-Campus Clinical Reach
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Clinical training spanning the flagship 350-bed Shenoy Nagar trauma hub and the RA Puram acute center.
                    </p>
                  </div>

                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 5: ALL ACADEMIC PROGRAMS */}
          {activeTab === 'all-programs' && (
            <motion.div
              key="all-programs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="text-center max-w-3xl mx-auto mb-6">
                <span className="text-xs font-black uppercase tracking-wider text-[#0095da] bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                  Comprehensive Medical Education
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                  All Academic &amp; Clinical Training Programs
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Billroth Hospitals caters to Masters, Post-graduate DNB, Nursing, Paramedical, and Sub-specialty fellowships.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {allAcademicPrograms.map((prog) => (
                  <div
                    key={prog.id}
                    className={`bg-white rounded-3xl p-7 sm:p-8 border transition-all duration-300 flex flex-col justify-between ${
                      prog.featured
                        ? 'border-[#0095da]/50 shadow-xl shadow-sky-100/40 ring-2 ring-[#0095da]/20'
                        : 'border-slate-200/80 shadow-xs hover:shadow-lg'
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-black uppercase text-[#0095da] bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                          {prog.type}
                        </span>
                        <span className="text-xs font-bold text-slate-400">
                          {prog.duration}
                        </span>
                      </div>

                      <h4 className="text-xl font-black text-slate-900 leading-snug">
                        {prog.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {prog.desc}
                      </p>

                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5 text-xs text-slate-700">
                        <div>
                          <strong className="text-slate-900">Accreditation:</strong> {prog.accreditation}
                        </div>
                        <div>
                          <strong className="text-slate-900">Eligibility:</strong> {prog.eligibility}
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                      <a
                        href="#apply-section"
                        className="inline-flex items-center gap-2 text-xs font-extrabold text-[#0095da] hover:text-[#0077b6] group"
                      >
                        <span>Enquire for Admissions</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                      <a
                        href="tel:04442921777"
                        className="text-xs font-bold text-slate-500 hover:text-slate-800"
                      >
                        Call: 044 42921777
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        </div>
      </section>

      {/* 4. Interactive Online Application & Admissions Enquiry Form */}
      <section id="apply-section" className="py-20 bg-slate-100/70 border-t border-slate-200">
        <div className="container-custom">
          
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Side */}
            <div className="lg:col-span-5 space-y-5">
              <span className="inline-block bg-sky-50 border border-sky-200/60 text-[#0095da] text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                Admissions Cell
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Apply for Academic Year <span className="text-[#0095da]">2026 Residency</span>
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Take the decisive step towards becoming an accredited emergency physician. Submit your application details online or reach out to our Academic Directorate.
              </p>

              <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2.5 font-bold text-slate-900">
                  <Mail size={16} className="text-[#0095da]" />
                  <span>Email: academics@billrothhospitals.com</span>
                </div>
                <div className="flex items-center gap-2.5 font-bold text-slate-900">
                  <Phone size={16} className="text-[#8cc63f]" />
                  <span>Telephone: 044-42921777 / 26641777</span>
                </div>
                <div className="flex items-start gap-2.5 text-slate-600">
                  <MapPin size={16} className="text-rose-500 shrink-0 mt-0.5" />
                  <span>Academic Directorate, 43 Lakshmi Talkies Road, Shenoy Nagar, Chennai-30</span>
                </div>
              </div>
            </div>

            {/* Right Application Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl sm:rounded-[36px] p-6 sm:p-10 border border-slate-200/80 shadow-xl relative">
              
              {formSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner animate-bounce">
                    <Check size={32} strokeWidth={3} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">
                    Application Submitted Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                    Thank you, <strong className="text-slate-900">{applicationForm.name}</strong>. Our Academic Dean&apos;s Office has received your inquiry for the <strong className="text-[#0095da]">{applicationForm.program}</strong>.
                  </p>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 max-w-md mx-auto">
                    A confirmation email with the program syllabus, prospectus, and interview guidelines has been dispatched to <strong className="text-slate-900">{applicationForm.email}</strong>.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                      Residency &amp; Course Enquiry Form
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      All fields marked with an asterisk (*) are required.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Doctor&apos;s Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. Rajesh V"
                        value={applicationForm.name}
                        onChange={(e) => setApplicationForm({ ...applicationForm, name: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#0095da] outline-none font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98400 12345"
                        value={applicationForm.phone}
                        onChange={(e) => setApplicationForm({ ...applicationForm, phone: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#0095da] outline-none font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. dr.suresh.mbbs@gmail.com"
                        value={applicationForm.email}
                        onChange={(e) => setApplicationForm({ ...applicationForm, email: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#0095da] outline-none font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Medical Qualification *
                      </label>
                      <select
                        value={applicationForm.qualification}
                        onChange={(e) => setApplicationForm({ ...applicationForm, qualification: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#0095da] outline-none font-medium text-slate-800"
                      >
                        <option value="MBBS (Completed Internship)">MBBS (Completed Internship)</option>
                        <option value="MBBS (Ongoing Internship)">MBBS (Ongoing Internship)</option>
                        <option value="MD / MS / DNB">MD / MS / DNB</option>
                        <option value="B.Sc Nursing / GNM">B.Sc Nursing / GNM</option>
                        <option value="Paramedical / Allied Health">Paramedical / Allied Health</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Medical College / University
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Madras Medical College"
                        value={applicationForm.college}
                        onChange={(e) => setApplicationForm({ ...applicationForm, college: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#0095da] outline-none font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        NMC / State Council Reg No
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. TNMC 123456"
                        value={applicationForm.nmcNumber}
                        onChange={(e) => setApplicationForm({ ...applicationForm, nmcNumber: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#0095da] outline-none font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Academic Program of Interest *
                    </label>
                    <select
                      value={applicationForm.program}
                      onChange={(e) => setApplicationForm({ ...applicationForm, program: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#0095da] outline-none font-medium text-slate-800"
                    >
                      <option value="Masters in Emergency Medicine (MEM) - 3 Years">Masters in Emergency Medicine (MEM) - 3 Years (SEMI)</option>
                      <option value="DNB Postgraduate Residency">DNB Postgraduate Residency (NBEMS)</option>
                      <option value="B.Sc / Post-Basic Nursing">B.Sc / Post-Basic Nursing Courses</option>
                      <option value="Allied Health Sciences & Paramedical">Allied Health Sciences &amp; Paramedical Diplomas</option>
                      <option value="Clinical Fellowships & Observerships">Clinical Fellowships &amp; Observerships</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Statement of Interest / Any Questions
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Share your clinical background, interests in emergency medicine, or specific questions..."
                      value={applicationForm.message}
                      onChange={(e) => setApplicationForm({ ...applicationForm, message: e.target.value })}
                      className="w-full px-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#0095da] outline-none font-medium resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-2xl font-black text-sm text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95"
                    style={{
                      background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)',
                    }}
                  >
                    <Send size={16} />
                    <span>Submit Admission Inquiry</span>
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    🔒 Your credentials are secure. Academic coordinators will reply within 24 business hours.
                  </p>
                </form>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* 5. FAQs Section */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-3xl">
          
          <div className="text-center mb-12">
            <span className="inline-block bg-sky-50 border border-sky-200/60 text-[#0095da] text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
              Academic Clarifications
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked <span className="text-[#0095da]">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {academicsFaqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full text-left p-5 bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={18} className="text-[#0095da] shrink-0" /> : <ChevronDown size={18} className="text-slate-400 shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="p-5 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Academics;
