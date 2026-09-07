import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Grid, List } from 'lucide-react';
import { departments } from '../data/data';

const Departments = () => {
  const [search, setSearch] = useState('');
  const [view, setView] = useState('grid');

  const filtered = departments.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div
        className="relative py-20 px-4 text-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0a1f4e 0%, #2f5aae 60%, #0095da 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Medical Specialties
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Our <span className="text-[#a6ce39]">Departments</span>
          </h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            World-class medical specialties equipped with cutting-edge technology and expert doctors.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Controls row */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-10">
          {/* Search */}
          <div className="relative w-full sm:max-w-md">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search departments..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#2f5aae] outline-none text-sm font-medium bg-white transition-all shadow-sm"
            />
          </div>
          {/* View toggle */}
          <div className="flex items-center gap-1 bg-white border-2 border-gray-200 rounded-xl p-1">
            <button
              onClick={() => setView('grid')}
              className={`p-2 rounded-lg transition-all ${view === 'grid' ? 'bg-[#2f5aae] text-white' : 'text-gray-400 hover:text-gray-600'}`}
              title="Grid view"
            >
              <Grid size={16} />
            </button>
            <button
              onClick={() => setView('list')}
              className={`p-2 rounded-lg transition-all ${view === 'list' ? 'bg-[#2f5aae] text-white' : 'text-gray-400 hover:text-gray-600'}`}
              title="List view"
            >
              <List size={16} />
            </button>
          </div>
        </div>

        {/* Grid view */}
        {view === 'grid' && filtered.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((dept, i) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  to={`/departments/${dept.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#2f5aae]/30 transition-all duration-300 h-full"
                >
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={dept.image}
                      alt={dept.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.parentElement.style.background = 'linear-gradient(135deg, #eff6ff, #dbeafe)';
                        e.target.style.display = 'none';
                        const icon = document.createElement('div');
                        icon.className = 'w-full h-full flex items-center justify-center text-5xl';
                        icon.textContent = dept.icon;
                        e.target.parentElement.appendChild(icon);
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-white/90 text-[#2f5aae] text-xs font-bold px-3 py-1 rounded-full">
                        {dept.icon} {dept.name}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                      {dept.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[#2f5aae] text-sm font-bold group-hover:gap-3 transition-all">
                      Learn More <ArrowRight size={14} />
                    </span>
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
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/departments/${dept.slug}`}
                  className="group flex items-center gap-6 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:border-[#2f5aae]/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={dept.image}
                      alt={dept.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.parentElement.style.background = '#eff6ff';
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-extrabold text-gray-800 group-hover:text-[#2f5aae] transition-colors text-base mb-1">
                      {dept.icon} {dept.name}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{dept.description}</p>
                  </div>
                  <ArrowRight size={20} className="text-gray-300 group-hover:text-[#2f5aae] transition-colors flex-shrink-0" />
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-24 bg-white rounded-2xl border border-gray-100">
            <Search size={48} className="mx-auto text-gray-200 mb-4" />
            <p className="text-lg font-semibold text-gray-500">No departments found for "{search}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Departments;
