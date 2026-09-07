import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Stethoscope, Clock, Star, ArrowRight } from 'lucide-react';
import { doctors, departments } from '../data/data';

const getDoctorAvatar = (name) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0084c7&color=fff&size=200&bold=true&font-size=0.35`;

const Doctors = () => {
  const [search, setSearch] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');

  const deptList = ['All', ...new Set(doctors.map((d) => d.department))];

  const filtered = doctors.filter((d) => {
    const matchSearch =
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.designation.toLowerCase().includes(search.toLowerCase()) ||
      d.department.toLowerCase().includes(search.toLowerCase());
    const matchDept = selectedDept === 'All' || d.department === selectedDept;
    return matchSearch && matchDept;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header with Exact Gradient Theme */}
      <div
        className="relative py-20 px-4 text-center overflow-hidden text-white"
        style={{
          background: 'linear-gradient(135deg, #093c57 0%, #136085 35%, #1c7a87 70%, #288c69 100%)',
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
          className="relative max-w-3xl mx-auto space-y-4"
        >
          <span className="inline-block bg-white/15 text-[#8cc63f] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider border border-white/20">
            Medical Faculty & Specialists
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            Find a <span className="text-[#8cc63f]">Doctor</span>
          </h1>
          <p className="text-teal-100 text-base sm:text-lg">
            Our team of 150+ expert specialists dedicated to your health and well-being.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-2xl mx-auto mb-8"
        >
          <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by doctor name, specialization or department..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-14 pr-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-[#0084c7] outline-none text-sm font-semibold bg-white shadow-sm transition-colors"
          />
        </motion.div>

        {/* Department filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {deptList.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 border-2 ${
                selectedDept === dept
                  ? 'bg-[#0084c7] text-white border-[#0084c7] shadow-lg shadow-cyan-900/20'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-[#0084c7] hover:text-[#0084c7]'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-6 text-center">
          Showing <span className="text-slate-900 font-black">{filtered.length}</span> specialist{filtered.length !== 1 ? 's' : ''}
          {selectedDept !== 'All' && ` in ${selectedDept}`}
        </p>

        {/* Doctors grid */}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((doctor, i) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 hover:border-[#0084c7]/40 transition-all duration-300"
              >
                {/* Doctor Photo Header */}
                <div className="relative h-48 bg-gradient-to-br from-cyan-50 to-teal-50 flex items-center justify-center">
                  <img
                    src={getDoctorAvatar(doctor.name)}
                    alt={doctor.name}
                    className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
                  />
                  {/* Experience badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md rounded-xl px-2.5 py-1 shadow-sm flex items-center gap-1.5 border border-slate-100">
                    <Clock size={11} className="text-[#0084c7]" />
                    <span className="text-[11px] font-black text-slate-800">{doctor.experience} Yrs</span>
                  </div>
                  {/* Rating */}
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md rounded-xl px-2.5 py-1 shadow-sm flex items-center gap-1 border border-slate-100">
                    <Star size={11} className="text-amber-400 fill-amber-400" />
                    <span className="text-[11px] font-black text-slate-800">4.9</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 text-center">
                  <div className="inline-flex items-center gap-1 bg-cyan-50 text-[#0084c7] text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                    <Stethoscope size={11} />
                    <span>{doctor.department}</span>
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base mb-1 group-hover:text-[#0084c7] transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-slate-500 text-xs font-medium mb-5">{doctor.designation}</p>
                  <Link
                    to="/appointment"
                    className="block text-white text-xs font-bold uppercase tracking-wider py-3 rounded-xl transition-all duration-200 text-center shadow-md hover:shadow-lg"
                    style={{
                      background: 'linear-gradient(90deg, #15729d 0%, #208287 50%, #30946d 100%)',
                    }}
                  >
                    Book Appointment
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-3xl border border-slate-200 max-w-lg mx-auto">
            <Stethoscope size={48} className="mx-auto text-slate-300 mb-4" />
            <p className="text-lg font-bold text-slate-700">No specialists found</p>
            <p className="text-slate-400 text-sm mt-1">Try a different search keyword or department</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Doctors;
