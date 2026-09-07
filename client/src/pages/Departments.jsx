import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Grid, List, Users } from 'lucide-react';
import { allSpecialties } from '../data/departmentsData';

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

const Departments = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Specialties');
  const [view, setView] = useState('grid');

  const filtered = useMemo(() => {
    return allSpecialties.filter((d) => {
      const matchCat = selectedCategory === 'All Specialties' || d.category === selectedCategory;
      const matchSearch =
        d.name.toLowerCase().includes(search.toLowerCase()) ||
        d.tagline.toLowerCase().includes(search.toLowerCase()) ||
        d.category.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [search, selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Hero Header */}
      <div
        className="relative py-20 lg:py-24 px-4 text-center overflow-hidden text-white"
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
          <span className="inline-block bg-white/15 text-[#8cc63f] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider border border-white/20 shadow-xs">
            Centres of Medical Excellence • 29 Departments
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Our <span className="text-[#8cc63f]">Specialties & Departments</span>
          </h1>
          <p className="text-white/90 text-base sm:text-lg leading-relaxed">
            World-class medical specialties equipped with 95+ verified doctors, cutting-edge surgical robotics, and 33+ years of compassionate healing.
          </p>
        </motion.div>
      </div>

      <div className="container-custom py-12 lg:py-16">
        {/* Controls Bar: Search & Category Pills & View Switcher */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm mb-10 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full sm:max-w-md">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search across all 29 departments..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#0095da] outline-none text-xs sm:text-sm font-semibold bg-slate-50 focus:bg-white transition-all shadow-xs"
              />
            </div>

            {/* View toggle */}
            <div className="flex items-center gap-1 bg-slate-100 border border-slate-200 rounded-xl p-1 self-stretch sm:self-auto justify-center">
              <button
                onClick={() => setView('grid')}
                className={`p-2 rounded-lg transition-all cursor-pointer ${view === 'grid' ? 'bg-[#0095da] text-white shadow-xs' : 'text-slate-400 hover:text-slate-600'}`}
                title="Grid view"
              >
                <Grid size={16} />
              </button>
              <button
                onClick={() => setView('list')}
                className={`p-2 rounded-lg transition-all cursor-pointer ${view === 'list' ? 'bg-[#0095da] text-white shadow-xs' : 'text-slate-400 hover:text-slate-600'}`}
                title="List view"
              >
                <List size={16} />
              </button>
            </div>
          </div>

          {/* Categories Horizontal Scroll */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full font-bold whitespace-nowrap transition-all text-xs cursor-pointer ${
                    active
                      ? 'bg-[#0095da] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid view */}
        {view === 'grid' && filtered.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((dept, i) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.03, 0.4) }}
              >
                <Link
                  to={`/departments/${dept.slug}`}
                  className="group flex flex-col justify-between h-full bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-xl border border-slate-200 hover:border-[#0095da]/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="h-44 overflow-hidden relative bg-slate-100">
                    <img
                      src={dept.heroImage}
                      alt={dept.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = 'https://billrothhospitals.com/wp-content/uploads/2024/02/hospital-care.png';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/95 text-[#0095da] text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-xs">
                        {dept.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <span className="text-white text-xs font-bold flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                        <Users size={12} className="text-[#8cc63f]" />
                        {dept.doctors.length} Doctors
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-black text-slate-900 group-hover:text-[#0095da] transition-colors text-base mb-2 line-clamp-1">
                        {dept.name}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mb-4">
                        {dept.overview[0] || dept.tagline}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0095da]">
                      <span>Explore Department</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* List view */}
        {view === 'list' && filtered.length > 0 && (
          <div className="space-y-4">
            {filtered.map((dept, i) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: Math.min(i * 0.03, 0.4) }}
              >
                <Link
                  to={`/departments/${dept.slug}`}
                  className="group flex items-center gap-6 bg-white rounded-2xl p-5 shadow-xs border border-slate-200 hover:border-[#0095da]/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 bg-slate-100">
                    <img
                      src={dept.heroImage}
                      alt={dept.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      onError={(e) => {
                        e.target.src = 'https://billrothhospitals.com/wp-content/uploads/2024/02/hospital-care.png';
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-black uppercase text-[#0095da] bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
                        {dept.category}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        {dept.doctors.length} Doctors
                      </span>
                    </div>
                    <h3 className="font-extrabold text-slate-800 group-hover:text-[#0095da] transition-colors text-base mb-1">
                      {dept.name}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-1">{dept.tagline}</p>
                  </div>
                  <ArrowRight size={20} className="text-slate-300 group-hover:text-[#0095da] group-hover:translate-x-1 transition-all flex-shrink-0" />
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200">
            <Search size={44} className="mx-auto text-slate-300 mb-3" />
            <p className="text-base font-bold text-slate-600">No departments found for "{search}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Departments;
