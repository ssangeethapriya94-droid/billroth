import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Search,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Clock,
  PhoneCall,
  Activity,
  CheckCircle2,
  ChevronRight,
  X
} from 'lucide-react';
import { facilitiesData } from '../data/facilitiesData';

const CATEGORIES = [
  'All Facilities',
  'Radiology & Imaging',
  'Cardiology & Pulmonology',
  'Emergency & Critical Care',
  'Laboratory & Specialized'
];

const categoryMapping = {
  'cath-lab': 'Cardiology & Pulmonology',
  'radiology-imaging': 'Radiology & Imaging',
  'tmt': 'Cardiology & Pulmonology',
  'eeg': 'Radiology & Imaging',
  'pft': 'Cardiology & Pulmonology',
  'mammography': 'Radiology & Imaging',
  'ct-scan': 'Radiology & Imaging',
  'mri': 'Radiology & Imaging',
  '2d-echo': 'Cardiology & Pulmonology',
  'x-ray': 'Radiology & Imaging',
  'ultrasound': 'Radiology & Imaging',
  'ct-angiogram': 'Radiology & Imaging',
  'blood-transfusion-services': 'Laboratory & Specialized',
  'ambulance': 'Emergency & Critical Care',
  'emergency-services-trauma-care': 'Emergency & Critical Care',
  'physiotherapy': 'Laboratory & Specialized',
  'lab-facilities': 'Laboratory & Specialized',
  'dialysis': 'Laboratory & Specialized',
  'endoscopy': 'Laboratory & Specialized',
  'intensive-care-units': 'Emergency & Critical Care',
  'colonoscopy': 'Laboratory & Specialized',
  'ecg': 'Cardiology & Pulmonology'
};

const facilityList = Object.values(facilitiesData).map((f) => ({
  ...f,
  category: categoryMapping[f.slug] || 'Laboratory & Specialized'
}));

const Facilities = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Facilities');

  const filtered = useMemo(() => {
    return facilityList.filter((f) => {
      const matchCat =
        selectedCategory === 'All Facilities' || f.category === selectedCategory;
      const matchSearch =
        f.name.toLowerCase().includes(search.toLowerCase()) ||
        (f.tagline && f.tagline.toLowerCase().includes(search.toLowerCase())) ||
        (f.overview && f.overview.toLowerCase().includes(search.toLowerCase())) ||
        f.category.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [search, selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-[#0095da] selection:text-white">
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden text-white py-16 sm:py-20 lg:py-26 min-h-[500px] flex items-center">
        {/* Background Image with High-Clarity Directional Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/facilities/radiology-imaging.jpg"
            alt="Facilities and Diagnostic Laboratories at Billroth Hospitals"
            className="w-full h-full object-cover object-center transform scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#021824]/95 via-[#063248]/80 to-slate-900/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#021824]/90 via-transparent to-black/20" />
        </div>

        {/* Ambient Glow */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#0095da]/20 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#8cc63f]/20 rounded-full blur-3xl pointer-events-none z-0" />

        <div className="container-custom relative z-10 w-full">
          {/* Breadcrumbs inside banner */}
          <nav className="flex items-center gap-2 text-xs text-white/80 font-medium mb-6 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={13} className="text-white/60" />
            <span className="text-white">Facilities & Diagnostics</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-black uppercase tracking-widest text-[#8cc63f]"
            >
              <Sparkles size={14} />
              <span>Diagnostic Excellence &bull; 24/7 Clinical Infrastructure</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-black tracking-tight leading-tight"
            >
              Facilities & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-teal-200 to-[#8cc63f]">
                Diagnostic Laboratories
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow-xs"
            >
              Billroth Hospitals offers 22 advanced diagnostic suites, digital Cath Lab, automated NABL pathology, 3T MRI, 256-slice CT, and round-the-clock emergency life support.
            </motion.p>
          </div>

          {/* Key Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 mt-10 pt-8 border-t border-white/15 max-w-4xl">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 text-center">
              <div className="text-2xl sm:text-3xl font-black text-[#8cc63f]">22+</div>
              <div className="text-xs text-slate-200 font-bold mt-0.5">Diagnostic Labs & Units</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 text-center">
              <div className="text-2xl sm:text-3xl font-black text-white">24/7</div>
              <div className="text-xs text-slate-200 font-bold mt-0.5">Emergency & Trauma Care</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 text-center">
              <div className="text-2xl sm:text-3xl font-black text-sky-300">100%</div>
              <div className="text-xs text-slate-200 font-bold mt-0.5">NABL & NABH Standards</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 text-center">
              <div className="text-2xl sm:text-3xl font-black text-[#8cc63f]">&lt; 4 Hrs</div>
              <div className="text-xs text-slate-200 font-bold mt-0.5">Rapid Report Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FILTER & SEARCH CONTROL BAR */}
      <section className="bg-white border-b border-slate-200 sticky top-[60px] sm:top-[72px] z-20 shadow-xs">
        <div className="container-custom py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0095da] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tests, labs, imaging..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-hidden focus:border-[#0095da] focus:bg-white transition-all"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 3. FACILITIES & LABS GRID */}
      <section className="container-custom py-12 sm:py-16 lg:py-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Hospital Diagnostic Facilities & Specialized Laboratories
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Showing {filtered.length} clinical facilities equipped with cutting-edge medical technology
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-3.5 py-1.5 rounded-full">
            <ShieldCheck size={14} />
            <span>NABL Certified Quality</span>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto">
            <Activity className="mx-auto text-slate-300 mb-3" size={48} />
            <h3 className="text-base font-bold text-slate-800">No matching facilities found</h3>
            <p className="text-xs text-slate-500 mt-1">
              Try searching with different keywords like MRI, CT scan, Cath Lab, or Dialysis.
            </p>
            <button
              type="button"
              onClick={() => { setSearch(''); setSelectedCategory('All Facilities'); }}
              className="mt-4 px-4 py-2 bg-[#0095da] text-white text-xs font-bold rounded-xl cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map((item, idx) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.03, duration: 0.3 }}
                className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#0095da]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Image Section */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                  <img
                    src={item.image || item.heroImage}
                    alt={`${item.name} at Billroth Hospitals`}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = '/facilities/radiology-imaging.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-black uppercase tracking-wider text-white bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-lg font-black tracking-tight text-white group-hover:text-sky-300 transition-colors">
                      {item.name}
                    </h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal line-clamp-3">
                    {item.tagline || item.overview}
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-400">
                      24/7 Availability
                    </span>

                    <Link
                      to={`/facilities/${item.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0095da] group-hover:text-[#8cc63f] transition-colors"
                    >
                      <span>Explore Facility</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* 4. EMERGENCY & BOOKING ACTION STRIP */}
      <section className="container-custom pb-16">
        <div
          className="rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, #003853 0%, #005b88 50%, #0095da 100%)'
          }}
        >
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <span className="text-xs font-black uppercase tracking-widest text-[#8cc63f]">
                Fast-Track Diagnostic Registration
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                Need Immediate Diagnostic Imaging or Lab Tests?
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 max-w-xl">
                Walk-ins welcomed for routine lab tests, X-rays, ECGs, and emergency scans. For MRI, CT Angiography, and PFT, book advance priority slots.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:04426264000"
                className="px-6 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-2 transition-colors"
              >
                <PhoneCall size={16} />
                <span>Emergency: 044-26264000</span>
              </a>

              <Link
                to="/appointment"
                className="px-6 py-3.5 rounded-full bg-white text-slate-900 hover:bg-slate-100 text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-2 transition-colors"
              >
                <span>Book Diagnostic Slot</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
