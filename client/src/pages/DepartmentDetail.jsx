import { useParams, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Phone,
  CheckCircle2,
  Users,
  Award,
  Shield,
  Clock,
  ChevronRight,
  Sparkles,
  MapPin,
  Stethoscope,
  Star,
  BadgeCheck,
  Check,
  Link2,
  ArrowRight
} from 'lucide-react';
import { allSpecialties } from '../data/departmentsData';
import { hospitalInfo } from '../data/data';

const DepartmentDetail = () => {
  const { slug } = useParams();
  const location = useLocation();
  const pathClean = location.pathname.replace('/departments/', '').replace('/', '').replace('-page', '');
  const targetSlug = slug || pathClean || 'gastroenterology';
  
  const dept =
    allSpecialties.find((d) => d.slug === targetSlug || d.slug.includes(targetSlug) || targetSlug.includes(d.slug)) ||
    allSpecialties[0];

  if (!dept) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4 bg-slate-50">
        <div>
          <h2 className="text-2xl font-bold text-slate-700 mb-4">Department not found</h2>
          <Link to="/departments" className="text-[#0095da] font-bold hover:underline">
            ← Back to All Departments
          </Link>
        </div>
      </div>
    );
  }

  // Other related specialties in same category or column
  const relatedSpecialties = allSpecialties
    .filter((d) => d.id !== dept.id && (d.category === dept.category || d.col === dept.col))
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* 1. TOP SPECIALTY HERO BANNER (Themed Clinical Photo, NO doctor portraits) */}
      <div className="relative overflow-hidden bg-[#001f35] text-white">
        {/* Background Specialty Hero Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={dept.heroImage}
            alt={`${dept.name} Department at Billroth Hospitals`}
            className="w-full h-full object-cover object-center transform scale-105 filter brightness-[0.42] saturate-[1.2]"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80';
            }}
          />
          {/* Rich Gradient Overlays */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(0,40,66,0.92) 0%, rgba(0,75,119,0.85) 45%, rgba(10,30,45,0.95) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/60 pointer-events-none" />
          {/* Subtle medical grid dots */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        {/* Banner Content */}
        <div className="relative z-10 container-custom pt-6 pb-10 sm:pt-10 sm:pb-16 lg:pt-16 lg:pb-24 px-4">
          {/* Breadcrumb Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-sky-200/90 mb-4 sm:mb-6"
          >
            <Link
              to="/"
              className="hover:text-white transition-colors"
            >
              Home
            </Link>
            <span className="text-white/30">/</span>
            <Link
              to="/departments"
              className="hover:text-[#8cc63f] transition-colors"
            >
              Specialties
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-[#8cc63f] font-bold">{dept.name}</span>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8 space-y-3.5 sm:space-y-4"
            >
              {/* Category and Specialist Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[11px] font-extrabold text-[#8cc63f] uppercase tracking-wider shadow-xs">
                  <Sparkles size={12} className="text-[#8cc63f]" />
                  <span>{dept.category}</span>
                </span>
                
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-[11px] font-black text-emerald-300 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>{dept.doctors.length} Verified Specialists</span>
                </span>

                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-bold text-white/90">
                  <BadgeCheck size={13} className="text-[#8cc63f]" />
                  <span>NABH Accredited</span>
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                {dept.name}
              </h1>

              {/* Tagline */}
              <p className="text-slate-200 text-xs sm:text-sm lg:text-base leading-relaxed max-w-3xl font-normal">
                {dept.tagline}
              </p>
            </motion.div>

            {/* Quick Action Box on Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2.5 sm:gap-3 w-full"
            >
              <Link
                to={`/appointment?dept=${dept.slug}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-cyan-950/40 hover:shadow-xl transition-all hover:scale-[1.02] active:scale-95 text-center"
                style={{
                  background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)',
                }}
              >
                <Calendar size={15} />
                <span>Book Consultation</span>
              </Link>
              
              <a
                href={`tel:${hospitalInfo.emergency}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/25 backdrop-blur-md font-bold text-xs uppercase tracking-wider transition-all text-center"
              >
                <Phone size={14} className="text-[#8cc63f]" />
                <span>24/7 Helpline: 044-26264000</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div className="container-custom py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left / Main 8 Columns */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* 2.1 Overview & Department Excellence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-sm space-y-6 relative overflow-hidden"
            >
              <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-wider text-[#0095da]">
                <div className="w-7 h-7 rounded-lg bg-sky-50 text-[#0095da] flex items-center justify-center">
                  <Shield size={16} />
                </div>
                <span>Centre of Clinical Excellence</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                About {dept.name} at Billroth
              </h2>

              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                {dept.overview.map((para, idx) => (
                  <p key={idx} className="leading-relaxed font-normal">
                    {para}
                  </p>
                ))}
              </div>

              {/* Clinical Quality Highlights */}
              <div className="pt-6 border-t border-slate-100">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <Award size={14} className="text-[#0095da]" />
                  <span>Clinical Standards & Infrastructure</span>
                </h4>
                <div className="grid sm:grid-cols-2 gap-3.5">
                  {dept.highlights.map((hl, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs sm:text-sm font-bold text-slate-800"
                    >
                      <CheckCircle2 size={17} className="text-[#8cc63f] flex-shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* 2.2 SPECIALIST DOCTORS ROSTER (Clearly Visible Large Portraits & Rich Trending Design) */}
            {dept.doctors.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-sm space-y-6 relative"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-5">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0095da]">
                      <Users size={15} className="text-[#8cc63f]" />
                      <span>Senior Medical Faculty</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                      Specialist Doctors & Surgeons
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-50 text-[#0095da] border border-sky-100 text-xs font-extrabold w-fit">
                    <Stethoscope size={14} />
                    <span>{dept.doctors.length} Specialist Consultants</span>
                  </span>
                </div>

                {/* Doctor Cards Grid - Enhanced Prominent Layout */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {dept.doctors.map((doc, idx) => {
                    const docSlug = doc.name
                      .toLowerCase()
                      .replace(/^(dr\.|prof\.|prof|dr|doctor)\s+/i, '')
                      .replace(/[^a-z0-9]+/g, '-')
                      .replace(/^-+|-+$/g, '');

                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.07 }}
                        className="group relative flex flex-col justify-between p-6 rounded-3xl bg-gradient-to-b from-slate-50/90 to-white border border-slate-200/90 hover:border-[#0095da]/60 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
                      >
                        {/* Top Accent Gradient Line */}
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0095da] via-teal-400 to-[#8cc63f] rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="space-y-4">
                          {/* Clear, High-Resolution Doctor Portrait Header with Hover Link Overlay */}
                          <div className="flex items-start gap-4 sm:gap-5">
                            {/* Doctor Photo Container with Hover Link Symbol */}
                            <div className="relative w-24 h-28 sm:w-28 sm:h-32 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 shadow-md border-2 border-white ring-1 ring-slate-200/70 group-hover:ring-[#0095da]/40 transition-all">
                              <img
                                src={doc.image}
                                alt={doc.name}
                                className="w-full h-full object-cover object-top filter brightness-100 contrast-[1.02] group-hover:scale-105 transition-transform duration-300"
                                onError={(e) => {
                                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(doc.name)}&background=0095da&color=fff&size=200&bold=true`;
                                }}
                              />

                              {/* Hover Overlay with Circular Blue Link Icon (Exact real website interaction) */}
                              <Link
                                to={`/doctors/${docSlug}`}
                                className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-10 cursor-pointer"
                                title={`View ${doc.name} Profile`}
                              >
                                <div className="w-10 h-10 rounded-full bg-[#0095da] hover:bg-[#0077b6] text-white flex items-center justify-center shadow-lg border-2 border-white transition-transform hover:scale-110">
                                  <Link2 size={18} className="text-white" strokeWidth={2.5} />
                                </div>
                              </Link>

                              {/* Verified Specialist Badge Dot */}
                              <div
                                className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-xs flex items-center justify-center text-white z-0"
                                title="Verified Specialist Available"
                              >
                                <Check size={8} strokeWidth={3.5} />
                              </div>
                            </div>

                            {/* Doctor Details */}
                            <div className="min-w-0 flex-1 space-y-1.5">
                              <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                <span>Verified Consultant</span>
                              </div>

                              <h4 className="text-base sm:text-lg font-black text-slate-900 leading-tight group-hover:text-[#0095da] transition-colors">
                                <Link to={`/doctors/${docSlug}`}>
                                  {doc.name}
                                </Link>
                              </h4>

                              {/* Qualification Badge */}
                              {doc.qualification && (
                                <div className="inline-block px-2.5 py-0.5 rounded-lg bg-sky-50 border border-sky-100 text-[#0095da] text-[11px] font-bold">
                                  {doc.qualification}
                                </div>
                              )}

                              {/* Designation */}
                              <p className="text-xs font-extrabold text-slate-600 leading-snug pt-0.5">
                                {doc.designation}
                              </p>
                            </div>
                          </div>

                          {/* Badges / Experience Bar */}
                          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs text-slate-600 font-semibold">
                            <div className="flex items-center gap-1.5">
                              <Clock size={13} className="text-[#8cc63f]" />
                              <span>{doc.experience || '15+ Years Exp'}</span>
                            </div>
                            <span className="text-emerald-700 font-bold text-[11px]">
                              OPD: Mon - Sat
                            </span>
                          </div>
                        </div>

                        {/* Card Action Buttons (Profile & Book Consultation) */}
                        <div className="mt-5 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
                          <Link
                            to={`/doctors/${docSlug}`}
                            className="flex items-center justify-center gap-1 text-slate-700 hover:text-[#0095da] bg-slate-100 hover:bg-sky-50 text-[11px] font-bold uppercase tracking-wider py-2.5 rounded-xl border border-slate-200/70 transition-all text-center"
                          >
                            <span>Profile</span>
                            <ArrowRight size={12} />
                          </Link>

                          <Link
                            to={`/appointment?doctor=${encodeURIComponent(doc.name)}&dept=${dept.slug}`}
                            className="flex items-center justify-center gap-1 text-white text-[11px] font-black uppercase tracking-wider py-2.5 rounded-xl transition-all text-center shadow-sm hover:shadow-md active:scale-95"
                            style={{
                              background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)',
                            }}
                          >
                            <Calendar size={13} />
                            <span>Book</span>
                          </Link>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* 2.3 Why Choose Billroth for Specialty Care */}
            <div className="bg-gradient-to-br from-[#002d4c] via-[#004870] to-[#00689b] text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-[#8cc63f]">
                    Why Billroth Hospitals
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                    Delivering Excellence Since 1990
                  </h3>
                  <p className="text-sky-100 text-sm mt-2 max-w-2xl leading-relaxed">
                    With over 33+ years of medical leadership in Chennai, Billroth provides world-class diagnostic precision and compassionate patient recovery.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15">
                    <div className="text-2xl sm:text-3xl font-black text-[#8cc63f]">350+</div>
                    <div className="text-xs text-white/80 font-bold mt-1">Beds Across 2 Campuses</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15">
                    <div className="text-2xl sm:text-3xl font-black text-white">150+</div>
                    <div className="text-xs text-white/80 font-bold mt-1">Specialist Doctors</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15">
                    <div className="text-2xl sm:text-3xl font-black text-[#8cc63f]">300K+</div>
                    <div className="text-xs text-white/80 font-bold mt-1">Patients Treated</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right / Sidebar 4 Columns */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Fast-Track Appointment Booking Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-5 sticky top-24"
            >
              <div className="inline-flex items-center gap-1.5 bg-sky-50 text-[#0095da] text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full border border-sky-100">
                <Calendar size={13} />
                <span>Priority Consultation</span>
              </div>
              
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  Book an Appointment
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mt-1">
                  Connect with our senior consultants at Shenoy Nagar or RA Puram campus.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2.5 text-xs text-slate-700">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/60 font-bold">
                  <span className="text-slate-500">Department:</span>
                  <span className="text-[#0095da] font-black">{dept.name}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/60 font-bold">
                  <span className="text-slate-500">OPD Timings:</span>
                  <span>8:00 AM – 8:00 PM</span>
                </div>
                <div className="flex items-center justify-between font-bold">
                  <span className="text-slate-500">Emergency:</span>
                  <span className="text-red-500 font-extrabold">24/7 Open</span>
                </div>
              </div>

              <Link
                to={`/appointment?dept=${dept.slug}`}
                className="flex items-center justify-center gap-2 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-wider w-full shadow-lg shadow-[#0095da]/25 hover:shadow-xl transition-all active:scale-95"
                style={{
                  background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)',
                }}
              >
                <Calendar size={15} />
                <span>Confirm Appointment</span>
              </Link>

              <a
                href={`tel:${hospitalInfo.emergency}`}
                className="flex items-center justify-center gap-2 border-2 border-slate-200 hover:border-[#0095da] text-slate-700 hover:text-[#0095da] py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider w-full transition-all"
              >
                <Phone size={15} className="text-red-500" />
                <span>Emergency: 044-26264000</span>
              </a>

              {/* Campus Addresses */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                  Available At Both Campuses:
                </div>
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <MapPin size={14} className="text-[#8cc63f] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-800">Shenoy Nagar:</span> 43, Lakshmi Talkies Rd, Chennai 600030
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin size={14} className="text-[#0095da] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-800">R.A. Puram:</span> 52, 2nd Main Rd, RA Puram, Chennai 600028
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Specialties */}
              {relatedSpecialties.length > 0 && (
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
                    Related Clinical Departments
                  </h4>
                  <div className="space-y-1.5">
                    {relatedSpecialties.map((rel) => (
                      <Link
                        key={rel.id}
                        to={`/departments/${rel.slug}`}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all text-xs font-bold text-slate-700 hover:text-[#0095da] group"
                      >
                        <span>{rel.name}</span>
                        <ChevronRight size={13} className="text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default DepartmentDetail;
