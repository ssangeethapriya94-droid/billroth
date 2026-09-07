import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  Search,
  X,
  Calendar,
  Phone,
  CheckCircle2,
  Users,
  Building2,
  Layers,
  Activity,
  Heart,
  Brain,
  Shield,
  Stethoscope,
  Scissors,
  Eye,
  Smile,
  Baby,
  Cpu,
  Zap,
  Clock,
  ChevronRight,
  ExternalLink,
  Award
} from 'lucide-react';
import { allSpecialties } from '../data/departmentsData';

// Category mapping helper
const CATEGORIES = [
  'All Specialties',
  'Digestive & GI',
  'Cardiac Sciences',
  'Oncology',
  'Musculoskeletal',
  'Neuro Sciences',
  'Women & Child',
  'Emergency & Critical',
  'Internal Medicine',
  'Diagnostics',
  'Advanced Surgery',
  'Sensory & Head-Neck',
  'Dental & Oral',
  'Skin Care',
  'Aesthetics & Reconstruction',
  'Mental Health'
];

// Icon mapping helper
const getDeptIcon = (slug) => {
  if (slug.includes('gastro') || slug.includes('hepatology')) return <Stethoscope className="w-5 h-5 text-teal-600" />;
  if (slug.includes('cardio') || slug.includes('vascular')) return <Heart className="w-5 h-5 text-rose-500" />;
  if (slug.includes('neuro') || slug.includes('psychiatry')) return <Brain className="w-5 h-5 text-indigo-500" />;
  if (slug.includes('ortho')) return <Activity className="w-5 h-5 text-sky-500" />;
  if (slug.includes('oncology')) return <Zap className="w-5 h-5 text-amber-500" />;
  if (slug.includes('robotics')) return <Cpu className="w-5 h-5 text-cyan-500" />;
  if (slug.includes('pediatrics')) return <Baby className="w-5 h-5 text-emerald-500" />;
  if (slug.includes('dental')) return <Smile className="w-5 h-5 text-teal-500" />;
  if (slug.includes('ophthalmology') || slug.includes('ent')) return <Eye className="w-5 h-5 text-blue-500" />;
  if (slug.includes('emergency') || slug.includes('critical')) return <Clock className="w-5 h-5 text-red-500" />;
  if (slug.includes('transplant') || slug.includes('surgery')) return <Scissors className="w-5 h-5 text-emerald-600" />;
  if (slug.includes('radiology')) return <Layers className="w-5 h-5 text-violet-500" />;
  return <Shield className="w-5 h-5 text-[#0095da]" />;
};

const Specialties = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [activeCategory, setActiveCategory] = useState('All Specialties');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('directory'); // 'directory' (4 columns as in reference image) or 'grid'
  const [selectedDept, setSelectedDept] = useState(null);
  const [activeModalTab, setActiveModalTab] = useState('overview'); // 'overview' | 'services' | 'doctors'

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedDept) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedDept]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedDept(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filtered departments
  const filteredDepartments = useMemo(() => {
    return allSpecialties.filter((dept) => {
      const matchesCategory =
        activeCategory === 'All Specialties' || dept.category === activeCategory;
      const matchesSearch =
        dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dept.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dept.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Grouped by columns 1 to 4 matching user reference screenshot
  const col1 = allSpecialties.filter((d) => d.col === 1);
  const col2 = allSpecialties.filter((d) => d.col === 2);
  const col3 = allSpecialties.filter((d) => d.col === 3);
  const col4 = allSpecialties.filter((d) => d.col === 4);

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 via-sky-50/30 to-white relative overflow-hidden" ref={ref}>
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container-custom">
        {/* Top Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-50 to-emerald-50 text-[#0095da] border border-sky-200/80 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles size={14} className="text-[#8cc63f] animate-pulse" />
            <span>Centres of Clinical Excellence • 29 Super Specialities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-black text-slate-900 tracking-tight mb-4">
            Our Medical <span className="bg-gradient-to-r from-[#0095da] via-[#0077b6] to-[#8cc63f] bg-clip-text text-transparent">Specialties & Departments</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg 2xl:text-xl leading-relaxed max-w-3xl mx-auto">
            Discover 33+ years of clinical mastery across 29 medical disciplines. Click on any department below to view authentic treatment capabilities, procedures, and specialist doctors.
          </p>
        </motion.div>

        {/* Interactive Controls Bar: Search + Category Pills + View Mode */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-white/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-lg shadow-sky-950/5 mb-10 space-y-4"
        >
          {/* Top Row: Search & View Mode Switcher */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Search input */}
            <div className="relative w-full sm:w-80">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search any specialty or treatment..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#0095da] outline-none text-xs sm:text-sm font-semibold text-slate-800 transition-all placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* View Switcher: 4-Column Directory vs Visual Cards Grid */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 self-stretch sm:self-auto justify-center">
              <button
                type="button"
                onClick={() => setViewMode('directory')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                  viewMode === 'directory'
                    ? 'bg-white text-[#0095da] shadow-sm font-black'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Building2 size={13} />
                <span>4-Column Directory</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-white text-[#0095da] shadow-sm font-black'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Layers size={13} />
                <span>Visual Cards Grid</span>
              </button>
            </div>
          </div>

          {/* Bottom Row: Quick Filter Category Badges */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
            <span className="text-[11px] font-extrabold uppercase text-slate-400 whitespace-nowrap pl-1 pr-2">
              Filter:
            </span>
            {CATEGORIES.slice(0, 8).map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-full font-bold whitespace-nowrap transition-all text-xs cursor-pointer ${
                    isSelected
                      ? 'bg-[#0095da] text-white shadow-md shadow-sky-500/20 scale-105'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* 1. DIRECTORY VIEW — 4 COLUMNS EXACTLY MATCHING USER'S SCREENSHOT */}
        {viewMode === 'directory' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xl shadow-sky-950/5 relative">
            <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-8">
              <div className="flex items-center gap-2.5 text-slate-700 font-extrabold text-xs sm:text-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8cc63f] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#8cc63f]"></span>
                </span>
                <span>Click any department below to view its authentic content, procedures & doctors</span>
              </div>
              <span className="hidden sm:inline-block text-xs font-black uppercase tracking-wider text-[#0095da] bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                {filteredDepartments.length} Departments Available
              </span>
            </div>

            {/* 4 Columns Grid matching user reference image */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-7">
              {[col1, col2, col3, col4].map((colList, colIdx) => (
                <div key={colIdx} className="space-y-3">
                  <div className="text-[11px] font-black uppercase tracking-widest text-slate-400 px-3 pb-2 border-b border-slate-100 flex items-center justify-between">
                    <span>Section 0{colIdx + 1}</span>
                    <span className="text-[#0095da] font-bold">{colList.length} Specialties</span>
                  </div>

                  <div className="space-y-2.5">
                    {colList.map((dept) => {
                      const isMatch = filteredDepartments.some((d) => d.id === dept.id);
                      if (!isMatch) return null;

                      return (
                        <motion.button
                          key={dept.id}
                          type="button"
                          onClick={() => {
                            setSelectedDept(dept);
                            setActiveModalTab('overview');
                          }}
                          whileHover={{ scale: 1.02, x: 4 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full text-left group relative flex items-center justify-between p-3.5 rounded-2xl border border-slate-200/80 bg-slate-50/60 hover:bg-white hover:border-[#0095da]/60 hover:shadow-lg hover:shadow-sky-950/5 transition-all duration-200 cursor-pointer"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:bg-[#0095da] group-hover:text-white transition-colors flex-shrink-0 shadow-xs">
                              {getDeptIcon(dept.slug)}
                            </div>

                            <div className="min-w-0">
                              <h4 className="text-xs sm:text-sm font-black text-slate-800 uppercase tracking-tight group-hover:text-[#0095da] transition-colors truncate">
                                {dept.name}
                              </h4>
                              <p className="text-[10px] sm:text-[11px] font-semibold text-slate-400 truncate">
                                {dept.category} • {dept.doctors.length} Doctors
                              </p>
                            </div>
                          </div>

                          <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#8cc63f] group-hover:text-slate-950 text-slate-400 flex items-center justify-center transition-all flex-shrink-0 ml-2">
                            <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. VISUAL CARDS GRID VIEW */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDepartments.map((dept, i) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.04, 0.4), duration: 0.3 }}
                className="h-full"
              >
                <div
                  onClick={() => {
                    setSelectedDept(dept);
                    setActiveModalTab('overview');
                  }}
                  className="group cursor-pointer flex flex-col justify-between h-full bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-[#0095da]/50 shadow-xs hover:shadow-xl hover:shadow-sky-950/10 transition-all duration-300 hover:-translate-y-1.5"
                >
                  {/* Card Image Banner */}
                  <div className="relative h-44 overflow-hidden bg-slate-100">
                    <img
                      src={dept.heroImage}
                      alt={dept.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = 'https://billrothhospitals.com/wp-content/uploads/2024/02/hospital-care.png';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />

                    <div className="absolute top-3 left-3">
                      <span className="bg-white/95 backdrop-blur-xs text-[#0095da] text-[11px] font-black px-3 py-1 rounded-full shadow-xs">
                        {dept.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <span className="text-xs font-bold flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                        <Users size={12} className="text-[#8cc63f]" />
                        {dept.doctors.length} Senior Doctors
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-black text-slate-900 group-hover:text-[#0095da] transition-colors mb-2 line-clamp-1">
                        {dept.name}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4">
                        {dept.overview[0] || dept.tagline}
                      </p>
                    </div>

                    {/* Footer Trigger */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-black text-[#0095da]">
                      <span>View Content & Doctors</span>
                      <span className="w-6 h-6 rounded-full bg-sky-50 group-hover:bg-[#8cc63f] group-hover:text-slate-900 flex items-center justify-center transition-colors">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {filteredDepartments.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
            <Search size={40} className="mx-auto text-slate-300 mb-3" />
            <p className="text-base font-bold text-slate-600">No specialties match "{searchQuery}"</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All Specialties');
              }}
              className="mt-3 text-xs font-black text-[#0095da] uppercase tracking-wider underline hover:text-[#0077b6] cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* 3. INTERACTIVE QUICK-VIEW MODAL / DRAWER (POWERED BY ANIMATEPRESENCE) */}
      <AnimatePresence>
        {selectedDept && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDept(null)}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 30 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden z-10 flex flex-col max-h-[92vh]"
            >
              {/* Top Banner Image with Gradient & Close Button */}
              <div className="relative h-56 sm:h-64 bg-slate-900 overflow-hidden flex-shrink-0">
                <img
                  src={selectedDept.heroImage}
                  alt={selectedDept.name}
                  className="w-full h-full object-cover opacity-85"
                  onError={(e) => {
                    e.target.src = 'https://billrothhospitals.com/wp-content/uploads/2024/02/hospital-care.png';
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(0,75,119,0.35) 0%, rgba(15,23,42,0.92) 100%)',
                  }}
                />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedDept(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-md transition-all z-20 cursor-pointer shadow-lg"
                  aria-label="Close dialog"
                >
                  <X size={20} />
                </button>

                {/* Header Information */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="bg-[#8cc63f] text-slate-950 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                      {selectedDept.category}
                    </span>
                    <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Department #{selectedDept.id}
                    </span>
                    <span className="bg-sky-500/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Award size={11} /> NABH Accredited
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                    {selectedDept.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 font-medium line-clamp-1">
                    {selectedDept.tagline}
                  </p>
                </div>
              </div>

              {/* Navigation Tabs Inside Modal */}
              <div className="flex items-center border-b border-slate-100 bg-slate-50/80 px-6 py-2.5 gap-2 flex-shrink-0">
                <button
                  onClick={() => setActiveModalTab('overview')}
                  className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                    activeModalTab === 'overview'
                      ? 'bg-white text-[#0095da] shadow-sm'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Overview & Legacy
                </button>
                <button
                  onClick={() => setActiveModalTab('doctors')}
                  className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeModalTab === 'doctors'
                      ? 'bg-white text-[#0095da] shadow-sm'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Users size={13} />
                  <span>Doctors ({selectedDept.doctors.length})</span>
                </button>
                {selectedDept.services && selectedDept.services.length > 0 && (
                  <button
                    onClick={() => setActiveModalTab('services')}
                    className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                      activeModalTab === 'services'
                        ? 'bg-white text-[#0095da] shadow-sm'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Procedures & Services
                  </button>
                )}
              </div>

              {/* Modal Body (Scrollable) */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-700">
                {/* 1. OVERVIEW TAB */}
                {activeModalTab === 'overview' && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h4 className="text-lg font-black text-slate-900 flex items-center gap-2">
                        <CheckCircle2 size={18} className="text-[#0095da]" />
                        About {selectedDept.name} at Billroth
                      </h4>

                      {selectedDept.overview.map((para, idx) => (
                        <p key={idx} className="text-sm sm:text-base leading-relaxed text-slate-600">
                          {para}
                        </p>
                      ))}
                    </div>

                    {/* Highlights & Key Features */}
                    <div className="bg-sky-50/60 rounded-2xl p-5 border border-sky-100">
                      <h5 className="text-xs font-black uppercase tracking-wider text-[#0095da] mb-3">
                        Department Clinical Highlights
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedDept.highlights.map((hl, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-bold text-slate-800">
                            <span className="w-2 h-2 rounded-full bg-[#8cc63f] mt-1.5 flex-shrink-0" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick Doctors Preview */}
                    {selectedDept.doctors.length > 0 && (
                      <div className="pt-2">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-sm font-black uppercase tracking-wider text-slate-900">
                            Senior Specialist Doctors
                          </h4>
                          <button
                            onClick={() => setActiveModalTab('doctors')}
                            className="text-xs font-bold text-[#0095da] hover:underline cursor-pointer"
                          >
                            View All ({selectedDept.doctors.length}) →
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {selectedDept.doctors.slice(0, 2).map((doc, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-slate-200 shadow-xs"
                            >
                              <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200">
                                <img
                                  src={doc.image}
                                  alt={doc.name}
                                  className="w-full h-full object-cover object-top"
                                  onError={(e) => {
                                    e.target.src = 'https://billrothhospitals.com/wp-content/uploads/2024/02/hospital-care.png';
                                  }}
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <h5 className="text-xs sm:text-sm font-black text-slate-900 truncate">
                                  {doc.name}
                                </h5>
                                <p className="text-[11px] font-semibold text-slate-500 truncate">
                                  {doc.designation}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* 2. DOCTORS TAB */}
                {activeModalTab === 'doctors' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-black text-slate-900">
                        Specialist Doctors & Surgeons in {selectedDept.name}
                      </h4>
                      <span className="text-xs font-bold text-slate-400">
                        {selectedDept.doctors.length} Verified Specialists
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedDept.doctors.map((doc, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#0095da]/40 hover:bg-white transition-all shadow-xs"
                        >
                          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-slate-200 flex-shrink-0 border border-slate-200 shadow-xs">
                            <img
                              src={doc.image}
                              alt={doc.name}
                              className="w-full h-full object-cover object-top"
                              onError={(e) => {
                                e.target.src = 'https://billrothhospitals.com/wp-content/uploads/2024/02/hospital-care.png';
                              }}
                            />
                          </div>
                          <div className="min-w-0 flex-1 space-y-1">
                            <h5 className="text-sm font-black text-slate-900 leading-tight">
                              {doc.name}
                            </h5>
                            <p className="text-xs font-bold text-[#0095da] line-clamp-2">
                              {doc.designation}
                            </p>
                            <Link
                              to={`/appointment?doctor=${encodeURIComponent(doc.name)}&dept=${selectedDept.slug}`}
                              onClick={() => setSelectedDept(null)}
                              className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-[#8cc63f] hover:text-[#7bb336] pt-1"
                            >
                              <Calendar size={11} /> Book Consultation →
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. PROCEDURES & SERVICES TAB */}
                {activeModalTab === 'services' && (
                  <div className="space-y-4">
                    <h4 className="text-base font-black text-slate-900">
                      Advanced Procedures & Diagnostic Services
                    </h4>
                    <p className="text-xs text-slate-500">
                      Billroth Hospitals provides complete diagnostic, therapeutic, and surgical management.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {selectedDept.services.map((srv, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 text-slate-800 text-xs sm:text-sm font-bold"
                        >
                          <CheckCircle2 size={16} className="text-[#8cc63f] flex-shrink-0" />
                          <span>{srv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer Action Bar */}
              <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href="tel:04426264000"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 bg-white hover:border-[#0095da] text-xs font-bold transition-all shadow-xs"
                  >
                    <Phone size={13} className="text-red-500" />
                    <span>Emergency: 044-26264000</span>
                  </a>

                  <Link
                    to={`/departments/${selectedDept.slug}`}
                    onClick={() => setSelectedDept(null)}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-black uppercase tracking-wider transition-all"
                  >
                    <span>Full Details Page</span>
                    <ExternalLink size={12} />
                  </Link>
                </div>

                <Link
                  to={`/appointment?dept=${selectedDept.slug}`}
                  onClick={() => setSelectedDept(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white text-xs font-black uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
                  style={{
                    background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)',
                  }}
                >
                  <Calendar size={14} />
                  <span>Book Appointment in {selectedDept.name}</span>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Specialties;
