import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Search,
  Stethoscope,
  Clock,
  Star,
  Calendar,
  Sparkles,
  Link2,
  ShieldCheck,
  Award,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { doctorsData } from '../data/doctorsData';

const getDoctorAvatar = (name) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0095da&color=fff&size=200&bold=true&font-size=0.35`;

const Doctors = () => {
  const [search, setSearch] = useState('');

  // Filter doctors by search query (name, specialty, qualification, expertise)
  const filtered = doctorsData.filter((d) => {
    const term = search.toLowerCase();
    return (
      d.name.toLowerCase().includes(term) ||
      d.designation.toLowerCase().includes(term) ||
      d.department.toLowerCase().includes(term) ||
      (d.qualification && d.qualification.toLowerCase().includes(term)) ||
      (d.expertise && d.expertise.some((e) => e.toLowerCase().includes(term)))
    );
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Hero Header with Brand Gradient Theme */}
      <div
        className="relative py-14 sm:py-20 px-4 text-center overflow-hidden text-white"
        style={{
          background: 'linear-gradient(135deg, #004b77 0%, #0077b6 35%, #0095da 65%, #3cb878 85%, #8cc63f 100%)',
        }}
      >
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
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
          <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md text-[#8cc63f] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider border border-white/20 shadow-sm">
            <Sparkles size={13} />
            <span>Senior Medical Consultants & Specialists</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Find Your <span className="text-[#8cc63f]">Doctor</span>
          </h1>
          
          <p className="text-white/95 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            79+ Verified expert consultants and surgeons across super-specialties dedicated to clinical precision and patient care.
          </p>
        </motion.div>
      </div>

      <div className="container-custom py-10 sm:py-14">
        
        {/* Sleek Search Bar (Category filter strip removed as requested) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-2xl mx-auto mb-8"
        >
          <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by doctor name, specialty, condition, or qualification..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-14 pr-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-[#0095da] outline-none text-sm font-semibold bg-white shadow-sm transition-all focus:ring-4 focus:ring-sky-100"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg"
            >
              Clear
            </button>
          )}
        </motion.div>

        {/* Results count header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/80 pb-4 mb-6 sm:mb-8">
          <p className="text-slate-600 text-xs font-bold uppercase tracking-wider">
            Showing <span className="text-slate-900 font-black">{filtered.length}</span> verified specialist{filtered.length !== 1 ? 's' : ''}
          </p>

          <div className="flex items-center gap-2 text-xs text-[#0095da] font-bold">
            <ShieldCheck size={16} className="text-[#8cc63f]" />
            <span>NABH Accredited Medical Board</span>
          </div>
        </div>

        {/* Doctors Grid with Interactive Hover Symbol Effect */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 2xl:gap-8">
            {filtered.map((doctor, i) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.04, 0.4) }}
                className="group relative flex flex-col justify-between bg-white rounded-3xl p-5 border border-slate-200/90 hover:border-[#0095da]/60 shadow-xs hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
              >
                {/* Top Accent Gradient Line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0095da] via-teal-400 to-[#8cc63f] rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-4">
                  {/* Photo & Hover Overlay with Circular Link Icon */}
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-sky-50 border border-slate-200 shadow-xs">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover object-top filter brightness-100 contrast-[1.02] group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = getDoctorAvatar(doctor.name);
                      }}
                    />

                    {/* Exact Hover Overlay from real website with Blue Circular Link Icon */}
                    <Link
                      to={`/doctors/${doctor.slug}`}
                      className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center cursor-pointer z-10"
                      title={`View ${doctor.name} Profile`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-13 h-13 rounded-full bg-[#0095da] hover:bg-[#0077b6] text-white flex items-center justify-center shadow-xl shadow-sky-950/40 border-2 border-white/80 transition-all"
                      >
                        <Link2 size={24} className="text-white" strokeWidth={2.5} />
                      </motion.div>
                    </Link>

                    {/* Verified Badge */}
                    <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-black text-emerald-700 shadow-xs flex items-center gap-1 border border-white z-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Verified</span>
                    </div>
                  </div>

                  {/* Doctor Details */}
                  <div className="space-y-1.5 text-left">
                    <div className="inline-flex items-center gap-1 bg-sky-50 text-[#0095da] text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      <Stethoscope size={10} />
                      <span className="truncate">{doctor.department}</span>
                    </div>

                    <h3 className="font-black text-slate-900 text-base leading-snug group-hover:text-[#0095da] transition-colors line-clamp-1">
                      <Link to={`/doctors/${doctor.slug}`}>
                        {doctor.name}
                      </Link>
                    </h3>

                    {doctor.qualification && (
                      <div className="inline-block text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/60">
                        {doctor.qualification}
                      </div>
                    )}

                    <p className="text-xs font-extrabold text-[#0095da] line-clamp-2 pt-0.5">
                      {doctor.designation}
                    </p>
                  </div>

                  {/* Clinical Expertise Pills Preview */}
                  {doctor.expertise && doctor.expertise.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {doctor.expertise.slice(0, 2).map((exp, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-semibold text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-100 truncate max-w-[140px]"
                        >
                          {exp}
                        </span>
                      ))}
                      {doctor.expertise.length > 2 && (
                        <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded">
                          +{doctor.expertise.length - 2}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Experience & Availability Bar */}
                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold pt-2 border-t border-slate-100">
                    <div className="flex items-center gap-1">
                      <Clock size={12} className="text-[#8cc63f]" />
                      <span>{doctor.experience}</span>
                    </div>
                    <span className="text-emerald-600 font-bold text-[10px]">
                      OPD Mon-Sat
                    </span>
                  </div>
                </div>

                {/* Actions: View Profile & Book Appointment */}
                <div className="pt-4 mt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
                  <Link
                    to={`/doctors/${doctor.slug}`}
                    className="flex items-center justify-center gap-1 text-slate-700 hover:text-[#0095da] bg-slate-100 hover:bg-sky-50 text-[11px] font-bold uppercase tracking-wider py-2.5 rounded-xl border border-slate-200/70 transition-all text-center"
                  >
                    <span>Profile</span>
                    <ArrowRight size={12} />
                  </Link>
                  
                  <Link
                    to={`/appointment?doctor=${encodeURIComponent(doctor.name)}&dept=${encodeURIComponent(doctor.department)}`}
                    className="flex items-center justify-center gap-1 text-white text-[11px] font-black uppercase tracking-wider py-2.5 rounded-xl transition-all text-center shadow-sm hover:shadow-md active:scale-95"
                    style={{
                      background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)',
                    }}
                  >
                    <Calendar size={12} />
                    <span>Book</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 max-w-lg mx-auto">
            <Stethoscope size={44} className="mx-auto text-slate-300 mb-3" />
            <p className="text-base font-bold text-slate-700">No specialists found</p>
            <p className="text-slate-400 text-xs mt-1">Try searching for a doctor's name or medical condition</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Doctors;
