import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Heart,
  Activity,
  ShieldCheck,
  Clock,
  Phone,
  Calendar,
  Sparkles,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Stethoscope,
  CheckCircle2,
  Check,
  AlertCircle,
  Eye,
  Zap,
  PhoneCall,
  Ambulance,
  Radio,
  Sliders,
  Layers,
  Award,
  Send,
  HelpCircle,
  Microscope,
  Cpu
} from 'lucide-react';
import { facilitiesData } from '../data/facilitiesData';

const cathLabData = facilitiesData['cath-lab'];

const CathLab = () => {
  const [activeEquipCategory, setActiveEquipCategory] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    procedure: 'Coronary Angiography (CAG)',
    preferredDate: '',
    message: ''
  });

  const equipCategories = [
    { id: 'all', label: 'All Equipment (20+)' },
    { id: 'imaging', label: 'Imaging & Monitors' },
    { id: 'catheters', label: 'Catheters & Stents' },
    { id: 'monitoring', label: 'Monitoring & Safety' },
    { id: 'suite', label: 'Suite & Recovery' }
  ];

  const filteredEquipment = cathLabData.equipment.filter((item, idx) => {
    if (activeEquipCategory === 'all') return true;
    if (activeEquipCategory === 'imaging') return [1, 2, 5, 6].includes(idx);
    if (activeEquipCategory === 'catheters') return [7, 8, 9, 10].includes(idx);
    if (activeEquipCategory === 'monitoring') return [4, 11, 12].includes(idx);
    if (activeEquipCategory === 'suite') return [0, 3, 13].includes(idx);
    return true;
  });

  const faqs = [
    {
      q: 'What is a Cath Lab and why is it needed?',
      a: 'A catheterization laboratory (Cath Lab) is a specialized examination suite equipped with advanced diagnostic imaging technology used to visualize the arteries and chambers of the heart, detect stenosis (blockages), and treat cardiovascular abnormalities without open-heart surgery.'
    },
    {
      q: 'How is OCT (Optical Coherence Tomography) superior to conventional Angiography?',
      a: 'While conventional angiography provides a 2D silhouette of blood vessels, our digital OCT system uses near-infrared light to deliver microscopic cross-sectional images of the arterial wall at 10-micron resolution, accurately measuring plaque composition, stent expansion, and vessel diameter.'
    },
    {
      q: 'Is a Coronary Angiogram or Angioplasty painful?',
      a: 'The procedure is performed under local anesthesia and is virtually painless. At Billroth Hospitals, we predominantly use the trans-radial approach (wrist access), allowing patients to sit up, eat, and walk comfortably within hours of the procedure.'
    },
    {
      q: 'What is the door-to-balloon time for Emergency Primary Angioplasty at Billroth?',
      a: 'Our 24/7 Heart Revive Centre maintains an emergency door-to-balloon time of under 60 minutes—well within international gold standards—ensuring that blocked arteries are opened rapidly during the critical golden hour.'
    },
    {
      q: 'What should I do to prepare for a planned Cath Lab procedure?',
      a: 'Patients are generally advised to fast for 4 to 6 hours prior to the procedure. Please bring all previous ECGs, blood reports, and current medication lists. Our interventional cardiology coordinators will guide you through pre-admission documentation and cashless insurance approvals.'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        procedure: 'Coronary Angiography (CAG)',
        preferredDate: '',
        message: ''
      });
    }, 4500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-[#0095da] selection:text-white">
      {/* 1. HERO BANNER WITH PHOTOREALISTIC CATH LAB BACKGROUND */}
      <section className="relative overflow-hidden text-white py-16 sm:py-20 lg:py-28 min-h-[580px] flex items-center">
        {/* Photorealistic C-Arm Fluoroscopy Lab Image with Directional Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/cath-lab-hero-bg.jpg"
            alt="State of the Art Digital Cardiac Catheterization Lab at Billroth Hospitals"
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
          />
          {/* Directional Overlay: dark teal/slate for razor-sharp typography */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#021824]/95 via-[#063248]/85 to-[#0b2535]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#021824] via-transparent to-black/30" />
          {/* Ambient Lighting Accents */}
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#0095da]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8cc63f]/15 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="container-custom relative z-10 w-full">
          {/* Breadcrumbs inside banner */}
          <nav className="flex items-center gap-2 text-xs text-white/80 font-medium mb-6 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={13} className="text-white/60" />
            <Link to="/facilities" className="hover:text-white transition-colors">Facilities & Diagnostics</Link>
            <ChevronRight size={13} className="text-white/60" />
            <span className="text-white">Cath Lab</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-black uppercase tracking-widest text-[#8cc63f] shadow-sm"
            >
              <Heart size={13} className="text-red-400 fill-red-400" />
              <span>{cathLabData.badge}</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]"
            >
              Cath Lab <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-teal-200 to-[#8cc63f]">
                {cathLabData.tagline}
              </span>
            </motion.h1>

            {/* Subtitle / Overview */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow-sm"
            >
              {cathLabData.overview}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-3"
            >
              <a
                href="#consultation-booking"
                className="px-6 py-3.5 rounded-full text-white font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 flex items-center gap-2"
                style={{
                  background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)'
                }}
              >
                <span>Book Cath Lab Consultation</span>
                <ArrowRight size={14} />
              </a>

              <a
                href="tel:04426264000"
                className="px-6 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider shadow-lg transition-colors flex items-center gap-2"
              >
                <PhoneCall size={14} />
                <span>24/7 Cardiac Emergency: 044-26264000</span>
              </a>
            </motion.div>
          </div>

          {/* Quick Indicator Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 mt-10 pt-8 border-t border-white/15 max-w-5xl"
          >
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-red-500/30 text-red-300 flex items-center justify-center shrink-0">
                <Activity size={22} className="animate-pulse" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-black tracking-wider text-red-300">
                  Door-To-Balloon Time
                </div>
                <div className="text-sm sm:text-base font-black text-white">&lt; 60 Minutes (PAMI)</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#0095da]/30 text-sky-300 flex items-center justify-center shrink-0">
                <Microscope size={22} />
              </div>
              <div>
                <div className="text-[10px] uppercase font-black tracking-wider text-sky-300">
                  Advanced Guidance
                </div>
                <div className="text-sm sm:text-base font-black text-white">Digital OCT & IVUS Imaging</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/30 text-[#8cc63f] flex items-center justify-center shrink-0">
                <ShieldCheck size={22} />
              </div>
              <div>
                <div className="text-[10px] uppercase font-black tracking-wider text-[#8cc63f]">
                  Clinical Expertise
                </div>
                <div className="text-sm sm:text-base font-black text-white">All Age Groups (Pediatric to Adult)</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. OPTICAL COHERENCE TOMOGRAPHY (OCT) GUIDANCE SHOWCASE */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#0095da] text-[11px] font-black uppercase tracking-wider">
                <Sparkles size={13} />
                <span>Next-Generation Cardiac Technology</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Digital OCT Guidance Systems at Heart Revive Centre
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {cathLabData.detailedDescription}
              </p>

              <div className="space-y-3.5 pt-2">
                {[
                  {
                    title: '10-Micron Microscopic Resolution',
                    desc: '10 times higher resolution than intravascular ultrasound (IVUS), revealing microscopic tissue characteristics and vulnerable plaque ruptures.'
                  },
                  {
                    title: 'Precision Stent Optimization',
                    desc: 'Ensures exact stent apposition against the arterial wall, eliminating under-expansion and drastically reducing long-term restenosis risk.'
                  },
                  {
                    title: 'Superior to Conventional Angiogram',
                    desc: 'Replaces 2D shadows with true 3D cross-sectional luminal anatomy, guiding complex bifurcation stenting and calcified lesion strategies.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-sky-100 text-[#0095da] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image Showcase */}
            <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden border border-slate-200 shadow-2xl group">
              <img
                src="/cath-lab-oct-bg.jpg"
                alt="Optical Coherence Tomography OCT Intravascular 3D Heart Imaging at Billroth Hospitals"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <span className="text-[10px] uppercase font-black tracking-widest text-[#8cc63f]">
                  Live Diagnostic Imaging
                </span>
                <h4 className="text-lg sm:text-xl font-black mt-1">
                  Abbott OPTIS Integrated OCT Heart Imaging Console
                </h4>
                <p className="text-xs text-slate-200 mt-1">
                  Active in Billroth Hospitals Heart Revive Centre Cath Lab Suite
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE EQUIPMENT DIRECTORY (OUR CATH LAB IS EQUIPPED WITH) */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-[#0095da]">
              Hardware & Infrastructure
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
              Our CATH Lab is Equipped With
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 font-normal">
              State-of-the-art diagnostic imaging, interventional hardware, hemodynamic monitoring systems, and recovery suites.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {equipCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveEquipCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    activeEquipCategory === cat.id
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200/70'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Equipment Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {filteredEquipment.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 4) * 0.05 }}
                className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#0095da]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 text-[#0095da] group-hover:bg-[#0095da] group-hover:text-white flex items-center justify-center transition-colors">
                    <Cpu size={18} />
                  </div>
                  <h3 className="text-base font-black text-slate-900 group-hover:text-[#0095da] transition-colors leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
                  <Check size={13} className="text-[#8cc63f]" />
                  <span>Clinical Standard Ready</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE CATH LAB PROVIDES MANY SERVICES LIKE (CLINICAL PROCEDURES MATRIX) */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-200/80">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-[#8cc63f]">
              Interventional Cardiology Procedures
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
              The CATH Lab Provides Many Services Like
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 font-normal">
              From emergency primary angioplasty to complex electrophysiological ablation and structural heart defect repairs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cathLabData.services.map((svc, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:bg-white hover:border-[#0095da]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-sky-50 text-[#0095da] group-hover:bg-[#0095da] group-hover:text-white flex items-center justify-center transition-colors">
                      <Heart size={20} />
                    </div>
                    <span className="text-[10px] font-mono font-black text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 group-hover:text-[#0095da] transition-colors leading-snug">
                    {svc.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {svc.desc}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-200/60">
                  <Link
                    to="/appointment"
                    className="inline-flex items-center gap-1.5 text-xs font-black text-[#0095da] group-hover:text-emerald-700 transition-colors"
                  >
                    <span>Schedule Procedure / Consult</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PATIENT-CENTRIC APPROACH & RECOVERY COMFORT */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#003853] via-[#022435] to-[#01141e] text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="w-16 h-16 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-[#8cc63f] flex items-center justify-center mx-auto shadow-xl">
              <Heart size={32} className="fill-[#8cc63f]" />
            </div>

            <span className="text-xs font-black uppercase tracking-widest text-[#8cc63f]">
              Compassionate Heart Care
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              Patient-Centric Approach
            </h2>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              {cathLabData.patientCentric}
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-6 text-left">
              <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-2">
                <div className="text-xs font-black text-[#8cc63f] uppercase">Trans-Radial Access</div>
                <p className="text-xs text-slate-300">
                  Wrist-based artery entry allows immediate mobility with no prolonged bed-rest discomfort.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-2">
                <div className="text-xs font-black text-sky-300 uppercase">1:1 Telemetry Nursing</div>
                <p className="text-xs text-slate-300">
                  Dedicated post-cath recovery bays with multi-parameter computerized vital monitoring.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-2">
                <div className="text-xs font-black text-emerald-300 uppercase">Cashless TPA Desks</div>
                <p className="text-xs text-slate-300">
                  Empaneled with all major health insurers for seamless cashless authorization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROCEDURE INQUIRY & APPOINTMENT BOOKING FORM */}
      <section id="consultation-booking" className="py-16 sm:py-24 bg-white">
        <div className="container-custom max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-2 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-black uppercase tracking-wider">
                <Calendar size={13} className="text-[#10a877]" />
                <span>Interventional Cardiology Desk</span>
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">
                Schedule a Cath Lab Consultation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Book a consultation with our senior interventional cardiologists to evaluate cardiac symptoms, review angiograms, or schedule second opinions.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs font-bold text-slate-700">
                  <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#0095da] flex items-center justify-center shrink-0">
                    <Phone size={15} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono">OPD Appointments</div>
                    <div>7299 404040</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-bold text-slate-700">
                  <div className="w-8 h-8 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                    <Ambulance size={15} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono">24/7 Heart Emergency</div>
                    <div>044-26264000</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-3 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md">
              {formSubmitted ? (
                <div className="p-8 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check size={28} />
                  </div>
                  <h4 className="text-xl font-black text-slate-900">Request Confirmed!</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Thank you. Our Heart Revive Centre coordinator will contact you promptly with cardiologist chamber availability.
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
                        placeholder="e.g. Senthil Nathan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0095da]/30 focus:border-[#0095da]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Contact Phone Number *
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
                        Interested Procedure / Consult
                      </label>
                      <select
                        value={formData.procedure}
                        onChange={(e) => setFormData({ ...formData, procedure: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0095da]/30 focus:border-[#0095da]"
                      >
                        <option value="Coronary Angiography (CAG)">Coronary Angiography (CAG)</option>
                        <option value="Angioplasty & Stenting (PCI)">Angioplasty & Stenting (PCI)</option>
                        <option value="OCT / IVUS Diagnostic Scan">OCT / IVUS Diagnostic Scan</option>
                        <option value="Pacemaker / ICD Consultation">Pacemaker / ICD Consultation</option>
                        <option value="Second Opinion on Bypass / Stents">Second Opinion on Bypass / Stents</option>
                      </select>
                    </div>
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
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Clinical Notes / Previous Diagnosis
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Mention any symptoms (chest pain, shortness of breath, previous ECG results)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0095da]/30 focus:border-[#0095da]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-2xl text-white font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                    style={{
                      background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)'
                    }}
                  >
                    <Send size={14} />
                    <span>Submit Cath Lab Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="bg-slate-50 py-16 sm:py-24 border-t border-slate-200/80">
        <div className="container-custom max-w-4xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-[#0095da]">
              Patient Help & Clarifications
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span className="text-sm font-black text-slate-900">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 transition-transform ${expandedFaq === idx ? 'rotate-180 text-[#0095da]' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {expandedFaq === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-5 bg-slate-50 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/80"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CathLab;
