import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Sparkles,
  Eye,
  Target,
  Heart,
  ShieldCheck,
  Users,
  Award,
  CheckCircle2,
  Phone,
  ArrowRight,
  Flame,
  Star,
  Compass
} from 'lucide-react';
import { hospitalInfo } from '../data/data';

const VisionMission = () => {
  const [selectedVal, setSelectedVal] = useState(0);

  const values = [
    {
      id: 1,
      title: 'Ethical Healthcare',
      tagline: 'Integrity Above All',
      icon: ShieldCheck,
      color: 'from-sky-500 to-blue-600',
      bgColor: 'bg-sky-50',
      borderColor: 'border-sky-200',
      textColor: 'text-[#0095da]',
      desc: 'Ethical Healthcare is the bedrock of Billroth Hospitals. We operate with complete medical transparency, transparent billing, and evidence-based clinical protocols, ensuring that patient welfare is the sole determinant of every clinical decision.',
      points: [
        'Transparent & Honest Clinical Governance',
        'Zero Compromise on Medical Integrity',
        'Evidence-Based Patient Treatment Plans',
        'Unbiased Specialist Opinions & Clear Counseling'
      ]
    },
    {
      id: 2,
      title: 'Respect for Individuals',
      tagline: 'Valuing Every Human Being',
      icon: Users,
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      textColor: 'text-emerald-600',
      desc: 'We foster an inclusive culture of mutual respect where every patient, caregiver, nurse, doctor, and hospital employee is treated with supreme dignity, appreciation, and equality regardless of their background.',
      points: [
        'Inclusive & Supportive Healthcare Environment',
        'Empowered Medical & Support Staff',
        'Fair Treatment with Utmost Human Dignity',
        'Listening Attentively to Every Voice'
      ]
    },
    {
      id: 3,
      title: 'Compassion',
      tagline: 'Healing with Empathy & Warmth',
      icon: Heart,
      color: 'from-rose-500 to-pink-600',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-200',
      textColor: 'text-rose-600',
      desc: 'True healing goes beyond surgery and medicine. Our nurses and clinicians provide compassionate care, emotional reassurance, and warm human understanding to relieve anxiety and comfort families in critical times.',
      points: [
        'Gentle & Empathetic Patient Interaction',
        '24/7 Family Counseling & Emotional Comfort',
        'Philanthropic Emergency Care & Relief Support',
        'Personalized Bedside Care at Every Hour'
      ]
    },
    {
      id: 4,
      title: 'Commitment to Quality',
      tagline: 'Excellence Without Compromise',
      icon: Award,
      color: 'from-lime-500 to-emerald-600',
      bgColor: 'bg-lime-50',
      borderColor: 'border-lime-200',
      textColor: 'text-[#679929]',
      desc: 'We are steadfast in benchmarking our clinical outcomes against international safety standards. With NABH and NABL accreditations, we invest continuously in state-of-the-art diagnostic and surgical equipment.',
      points: [
        'NABH & NABL Accredited Quality Systems',
        'State-of-the-Art Robotic & Laser Technologies',
        'Zero-Tolerance Infection Control Protocols',
        'Continuous Training for Medical Specialists'
      ]
    },
    {
      id: 5,
      title: 'Respect Patients',
      tagline: 'Patient-Centric Dedication',
      icon: Star,
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      textColor: 'text-amber-600',
      desc: 'We honor patient autonomy, personal privacy, and confidentiality. Every treatment plan is tailored around the patient’s comfort, convenience, safety, and long-term vitality.',
      points: [
        'Absolute Confidentiality & Privacy Protection',
        'Dedicated Patient Experience Coordinators',
        'Accessible 24/7 Helpline & Rapid Admissions',
        'Post-Discharge Follow-Up & Rehabilitation'
      ]
    }
  ];

  return (
    <div className="bg-[#f8fafc] overflow-hidden">

      {/* 1. HERO BANNER */}
      <section className="relative bg-gradient-to-br from-[#002842] via-[#005280] to-[#0095da] text-white pt-10 pb-20 lg:pt-16 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-24 -right-24 w-[550px] h-[550px] rounded-full bg-[#8cc63f]/30 blur-[110px]"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.45, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full bg-[#0095da]/35 blur-[100px]"
          />
        </div>

        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-sky-200 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-white font-medium">About Us</span>
            <ChevronRight className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-[#8cc63f] font-semibold">Vision & Mission</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-[#8cc63f] text-xs sm:text-sm font-bold shadow-md mb-4">
              <Compass className="w-4 h-4 fill-[#8cc63f]" />
              <span>Guiding Principles • Billroth Hospitals</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Vision & Mission
            </h1>
            <p className="text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-white to-[#8cc63f] mt-3">
              Driven by Purpose, Guided by 5 Unwavering Core Values
            </p>
            <p className="text-sm sm:text-base text-sky-100/90 leading-relaxed mt-4">
              Since 1990, our North Star has remained constant: bringing world-class, ethical, and compassionate medical care to every segment of society.
            </p>

            {/* Quick About Subnav */}
            <div className="flex flex-wrap gap-2 pt-6">
              {[
                { name: 'Founder', path: '/founder' },
                { name: 'MD & Chairman', path: '/md-chairman' },
                { name: 'Vision & Mission', path: '/vision-mission', current: true },
                { name: 'History', path: '/history' },
                { name: 'Milestone', path: '/milestone' },
              ].map((item, i) => (
                <Link
                  key={i}
                  to={item.path}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    item.current
                      ? 'bg-[#8cc63f] text-slate-950 shadow-md'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. DUAL VISION & MISSION CARDS */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="container-custom">
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* VISION CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#002842] to-[#005280] text-white shadow-2xl overflow-hidden border border-sky-400/20 group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0095da]/20 rounded-full blur-[70px] pointer-events-none" />
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#8cc63f] mb-6 shadow-inner">
                <Eye className="w-7 h-7" />
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-[#8cc63f]/20 border border-[#8cc63f]/40 text-[#8cc63f] text-xs font-extrabold uppercase tracking-wider mb-3">
                Our Future Aspiration
              </div>

              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-4">
                Our Vision
              </h2>

              <p className="text-xl sm:text-2xl font-extrabold text-sky-100 leading-snug italic border-l-4 border-[#8cc63f] pl-4 my-6">
                "To become a name synonymous with expert medical care all over the country."
              </p>

              <div className="space-y-3 pt-2 text-sm text-sky-100/90 leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#8cc63f] flex-shrink-0 mt-0.5" />
                  <span>National recognition for pioneering minimally invasive, laser, and robotic surgical excellence.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#8cc63f] flex-shrink-0 mt-0.5" />
                  <span>Setting regional and national benchmarks in clinical outcomes, safety, and infection control.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#8cc63f] flex-shrink-0 mt-0.5" />
                  <span>Expanding accessibility to quality healthcare so no patient is deprived of life-saving treatment.</span>
                </div>
              </div>
            </motion.div>

            {/* MISSION CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              whileHover={{ y: -6 }}
              className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-[#003859] to-[#00689b] text-white shadow-2xl overflow-hidden border border-teal-400/20 group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#8cc63f]/20 rounded-full blur-[70px] pointer-events-none" />
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#0095da] mb-6 shadow-inner">
                <Target className="w-7 h-7" />
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-[#0095da]/30 border border-[#0095da]/50 text-sky-200 text-xs font-extrabold uppercase tracking-wider mb-3">
                Our Daily Commitment
              </div>

              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-4">
                Our Mission
              </h2>

              <p className="text-xl sm:text-2xl font-extrabold text-sky-100 leading-snug italic border-l-4 border-[#0095da] pl-4 my-6">
                "To provide medical services at the height of quality and efficiency in the most professional and effective manner, with the sole determination of making life better for our patients."
              </p>

              <div className="space-y-3 pt-2 text-sm text-sky-100/90 leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-sky-300 flex-shrink-0 mt-0.5" />
                  <span>Delivering high-precision tertiary care backed by 33+ years of medical legacy and technology.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-sky-300 flex-shrink-0 mt-0.5" />
                  <span>Providing 24/7 rapid emergency, ICU, and trauma intervention with zero delay.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-sky-300 flex-shrink-0 mt-0.5" />
                  <span>Maintaining transparent, empathetic, and patient-first ethical protocols across all departments.</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 3. THE 5 CORE VALUES SECTION (AUTHENTIC FROM LIVE SITE) */}
      <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/70">
        <div className="container-custom">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-[#0095da] text-xs font-black uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 fill-[#0095da]" />
              <span>Foundation of Billroth</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our 5 Core Values
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              The fundamental pillars established by Late Dr. V. Jeganathan that inspire and guide our doctors, nurses, and staff every single day.
            </p>
          </div>

          {/* Value Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <button
                  key={val.id}
                  onClick={() => setSelectedVal(idx)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                    selectedVal === idx
                      ? 'bg-[#0095da] text-white shadow-lg shadow-sky-500/25 scale-105'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{val.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Value Interactive Card */}
          <motion.div
            key={selectedVal}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100"
          >
            <div className="grid md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-4 text-center md:text-left">
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${values[selectedVal].color} text-white flex items-center justify-center shadow-xl mx-auto md:mx-0 mb-4`}>
                  {(() => {
                    const ValIcon = values[selectedVal].icon;
                    return <ValIcon className="w-10 h-10" />;
                  })()}
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-[#0095da]">
                  Value #{values[selectedVal].id}
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">
                  {values[selectedVal].title}
                </h3>
                <p className="text-xs font-bold text-slate-500 mt-0.5">
                  {values[selectedVal].tagline}
                </p>
              </div>

              <div className="md:col-span-8 space-y-4">
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {values[selectedVal].desc}
                </p>

                <div className="grid sm:grid-cols-2 gap-2.5 pt-2">
                  {values[selectedVal].points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-[#8cc63f] flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

          {/* Grid of All 5 Values */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mt-12">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.id}
                  onClick={() => setSelectedVal(i)}
                  className={`p-6 rounded-2xl bg-white border transition-all cursor-pointer hover:shadow-lg ${
                    selectedVal === i ? 'border-[#0095da] ring-2 ring-[#0095da]/20 shadow-md' : 'border-slate-200/80 hover:border-sky-300'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${v.color} text-white flex items-center justify-center mb-3 shadow-md`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-black uppercase text-slate-400 tracking-wider">0{v.id}</span>
                  <h4 className="text-sm font-black text-slate-900 mt-0.5">{v.title}</h4>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">{v.tagline}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};

export default VisionMission;
