import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Sparkles,
  Building2,
  Building,
  History,
  Calendar,
  Award,
  CheckCircle2,
  Phone,
  ArrowRight,
  Activity,
  HeartPulse,
  MapPin,
  Clock,
  ShieldCheck,
  Zap,
  HeartHandshake
} from 'lucide-react';
import { hospitalInfo, surgicalStats, hospitalHeritage } from '../data/data';

const HistoryPage = () => {
  const historyMilestones = [
    {
      year: '1990',
      title: "The 30-Bed Genesis of Billroth ('A' Block)",
      date: 'November 30, 1990',
      desc: 'Late Dr. V. Jeganathan launched Billroth Hospitals at Shenoy Nagar with an initial block of 30 beds. Dedicated to surgical gastroenterology and precision laparoscopic surgery, it quickly became Chennai’s most trusted center.',
      icon: Building2,
      tag: 'Genesis',
      color: 'from-[#0095da] to-[#0077b6]'
    },
    {
      year: '1996',
      title: "70-Bed Expansion & 'B' Block Inauguration",
      date: 'December 13, 1996',
      desc: 'To cater to surging patient demand, a 70-bed surgical block was inaugurated. Dr. V. Jeganathan instituted free outpatient consultations to ensure accessible healthcare for all economic strata.',
      icon: Building,
      tag: 'Expansion',
      color: 'from-sky-500 to-teal-500'
    },
    {
      year: '1998',
      title: 'Pioneering Laparoscopic & Laser Surgery',
      date: '1998 Era',
      desc: 'Billroth established itself as the pioneer in basic and advanced laparoscopic surgeries and surgical gastroenterology across Tamil Nadu, setting early clinical standards.',
      icon: Activity,
      tag: 'Clinical Mastery',
      color: 'from-teal-500 to-emerald-500'
    },
    {
      year: '2003',
      title: 'Acquisition of Chennai Kaliappa Hospital (RA Puram)',
      date: 'Landmark Year 2003',
      desc: 'Billroth acquired the 100-bedded Chennai Kaliappa Hospital in RA Puram, expanding multispecialty healthcare, high-risk orthopedics, and maternity care across South Chennai.',
      icon: Building2,
      tag: 'Campus Acquisition',
      color: 'from-emerald-500 to-[#8cc63f]'
    },
    {
      year: '2005',
      title: '2005 Tsunami Relief & Vijayapuram Statue Honor',
      date: '2005 Disaster Relief',
      desc: 'Dr. V. Jeganathan led extensive medical relief for tsunami victims. The community of Vijayapuram erected a permanent statue in his honor in profound gratitude.',
      icon: HeartHandshake,
      tag: 'Humanitarian Hero',
      color: 'from-rose-500 to-amber-500'
    },
    {
      year: '2007',
      title: "Shenoy Nagar 'S' Block & 350-Bed Super Specialty",
      date: '2007 Transformation',
      desc: 'With the grand addition of the Shenoy Nagar S Block, Billroth evolved into a 350-bedded super-specialty hospital with advanced ICUs and surgical suites.',
      icon: Building,
      tag: 'Super Specialty',
      color: 'from-amber-500 to-orange-500'
    },
    {
      year: '2007 – 2025+',
      title: 'Dr. Rajesh Jeganathan & The High-End Tech Era',
      date: 'Modern Era',
      desc: 'Under Dr. Rajesh Jeganathan, Billroth introduced Tamil Nadu’s 1st Dual Source CT, Linear Accelerator, RapidArc Oncology, and advanced robotics, earning #1 Times of India rankings.',
      icon: Zap,
      tag: 'Next-Gen Technology',
      color: 'from-[#0095da] to-[#8cc63f]'
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
            <span className="text-[#8cc63f] font-semibold">History</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-[#8cc63f] text-xs sm:text-sm font-bold shadow-md mb-4">
              <History className="w-4 h-4 text-[#8cc63f]" />
              <span>33+ Years of Unbroken Healing • Estd. 30th November 1990</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              History of Hospital
            </h1>
            <p className="text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-white to-[#8cc63f] mt-3">
              From a 30-Bed Vision to a 350-Bed Super-Specialty Healthcare Powerhouse
            </p>
            <p className="text-sm sm:text-base text-sky-100/90 leading-relaxed mt-4">
              Read the inspiring evolution of Billroth Hospitals, forged through visionary surgical leadership, humanitarian disaster relief, and continuous technological expansion.
            </p>

            {/* Quick About Subnav */}
            <div className="flex flex-wrap gap-2 pt-6">
              {[
                { name: 'Founder', path: '/founder' },
                { name: 'MD & Chairman', path: '/md-chairman' },
                { name: 'Vision & Mission', path: '/vision-mission' },
                { name: 'History', path: '/history', current: true },
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

      {/* 2. SURGICAL & LEGACY METRICS */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {surgicalStats.map((stat, i) => (
              <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
                <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0095da] to-[#8cc63f]">
                  {stat.value}{stat.suffix}
                </span>
                <span className="block text-xs sm:text-sm font-bold text-slate-700 mt-2 uppercase tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DETAILED HISTORICAL EVOLUTION TIMELINE */}
      <section className="py-16 sm:py-24 bg-slate-50 relative">
        <div className="container-custom">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-[#0095da] text-xs font-black uppercase tracking-wider mb-3">
              <History className="w-3.5 h-3.5" />
              <span>Historical Milestones</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              The Journey of Healing
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Every phase in our history marks a leap in technology, capacity expansion, and compassionate service to humanity.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {historyMilestones.map((m, idx) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all grid md:grid-cols-12 gap-6 items-center"
                >
                  <div className="md:col-span-3 text-center md:text-left">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${m.color} text-white flex items-center justify-center shadow-lg mx-auto md:mx-0 mb-3`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-sky-50 text-[#0095da] text-xs font-extrabold uppercase">
                      {m.tag}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 mt-2">{m.year}</h3>
                    <span className="text-[11px] font-bold text-slate-400 block">{m.date}</span>
                  </div>

                  <div className="md:col-span-9 space-y-2">
                    <h4 className="text-lg sm:text-xl font-black text-slate-900">
                      {m.title}
                    </h4>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. HOSPITAL CAMPUSES (SHENOY NAGAR & RA PURAM) */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container-custom">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-black uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>World-Class Facilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our Super-Specialty Campuses
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Operating two premier hospital establishments across Chennai with over 350 beds and round-the-clock emergency support.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {hospitalHeritage.map((campus, idx) => (
              <div key={idx} className="rounded-3xl bg-slate-50 border border-slate-200/80 p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all space-y-5">
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-full bg-[#0095da]/10 text-[#0095da] text-xs font-extrabold uppercase">
                    {campus.badge}
                  </span>
                  <span className="text-xs font-bold text-[#8cc63f] bg-emerald-950 px-3 py-1 rounded-full">
                    {campus.capacity}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900">
                  {campus.title}
                </h3>

                <p className="text-xs font-semibold text-slate-500 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-[#0095da] flex-shrink-0 mt-0.5" />
                  <span>{campus.address}</span>
                </p>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {campus.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-200/60">
                  {campus.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#8cc63f] flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0095da] hover:bg-[#0077b6] text-white text-xs font-bold transition-all"
                  >
                    <span>Get Directions & Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default HistoryPage;
