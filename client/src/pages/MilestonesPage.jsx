import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  Milestone as MilestoneIcon,
  Sparkles,
  Calendar,
  X,
  Maximize2,
  Phone,
  ArrowRight,
  Building2,
  GraduationCap,
  Stethoscope,
  BookOpen,
  Activity,
  HeartHandshake,
  Zap,
  Building,
  Baby
} from 'lucide-react';
import { hospitalInfo, founderMilestones } from '../data/data';

const MilestonesPage = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const getTimelineIcon = (iconName) => {
    switch (iconName) {
      case 'Baby': return <Baby className="w-5 h-5 text-sky-400" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-[#8cc63f]" />;
      case 'Stethoscope': return <Stethoscope className="w-5 h-5 text-teal-400" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-amber-400" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-sky-300" />;
      case 'Activity': return <Activity className="w-5 h-5 text-rose-400" />;
      case 'Building': return <Building className="w-5 h-5 text-purple-400" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-red-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-emerald-400" />;
      default: return <Sparkles className="w-5 h-5 text-[#8cc63f]" />;
    }
  };

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
            <span className="text-[#8cc63f] font-semibold">Milestone</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-[#8cc63f] text-xs sm:text-sm font-bold shadow-md mb-4">
              <MilestoneIcon className="w-4 h-4 text-[#8cc63f]" />
              <span>Chronological Roadmap Journey • 1953 to 2025</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Milestone Roadmap
            </h1>
            <p className="text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-white to-[#8cc63f] mt-3">
              9 Defining Eras of Medical Innovation, Courage & Humanity
            </p>
            <p className="text-sm sm:text-base text-sky-100/90 leading-relaxed mt-4">
              Journey through the authentic timeline of Dr. V. Jeganathan and Billroth Hospitals, illustrated by original commemorative artwork.
            </p>

            {/* Quick About Subnav */}
            <div className="flex flex-wrap gap-2 pt-6">
              {[
                { name: 'Founder', path: '/founder' },
                { name: 'MD & Chairman', path: '/md-chairman' },
                { name: 'Vision & Mission', path: '/vision-mission' },
                { name: 'History', path: '/history' },
                { name: 'Milestone', path: '/milestone', current: true },
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

      {/* 2. CHRONOLOGICAL ROADMAP SPINE */}
      <section className="py-16 sm:py-24 bg-[#0a192f] text-white relative">
        <div className="container-custom relative z-10">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#8cc63f] text-xs font-black uppercase tracking-widest block mb-2">
              Orderly Roadmap Track
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              From Nerkunam Village to Modern Super-Specialty
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              Click on any illustrated milestone stop to view the original high-resolution archival artwork and complete historical narrative.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            
            {/* Center Illuminated Spine Line (Desktop) */}
            <div className="hidden md:block absolute top-12 bottom-12 left-1/2 -translate-x-1/2 w-1.5 bg-gradient-to-b from-[#8cc63f] via-[#0095da] to-[#8cc63f] rounded-full shadow-[0_0_15px_rgba(0,149,218,0.6)]" />

            {/* Mobile Left Spine Line */}
            <div className="md:hidden absolute top-6 bottom-6 left-6 w-1 bg-gradient-to-b from-[#8cc63f] via-[#0095da] to-[#8cc63f] rounded-full shadow-[0_0_10px_rgba(0,149,218,0.5)]" />

            <div className="space-y-12 sm:space-y-16">
              {founderMilestones.map((m, idx) => {
                const isEven = idx % 2 === 0;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6 }}
                    className="relative flex flex-col md:flex-row items-center gap-6 sm:gap-8"
                  >
                    
                    {/* Desktop Left Column */}
                    <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 md:text-right order-2 md:order-1' : 'md:pl-12 md:text-left order-2 md:order-3'}`}>
                      <div className="pl-14 md:pl-0">
                        
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#8cc63f] text-xs font-bold mb-2`}>
                          {getTimelineIcon(m.icon)}
                          <span>{m.tag}</span>
                        </div>

                        <div className="flex items-center gap-3 mb-2 flex-wrap md:justify-end">
                          <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-white to-[#8cc63f]">
                            {m.year}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-black text-white mb-2 leading-tight">
                          {m.title}
                        </h3>

                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                          {m.description}
                        </p>

                        <button
                          type="button"
                          onClick={() => setSelectedMilestone(m)}
                          className="mt-4 inline-flex items-center gap-1.5 text-xs font-extrabold text-[#8cc63f] hover:text-white transition-colors cursor-pointer"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>View Milestone Artwork</span>
                        </button>

                      </div>
                    </div>

                    {/* Central Numbered Pin */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20 order-1 md:order-2 top-0 md:top-auto">
                      <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-[#8cc63f] flex items-center justify-center text-white font-black text-xs shadow-[0_0_20px_rgba(140,198,63,0.5)]">
                        0{idx + 1}
                      </div>
                    </div>

                    {/* Desktop Right Column: Circular Illustrated Artwork */}
                    <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-12 order-3 md:order-3' : 'md:pr-12 md:text-right order-3 md:order-1'}`}>
                      <div className="pl-14 md:pl-0 flex justify-start md:justify-center">
                        <div
                          onClick={() => setSelectedMilestone(m)}
                          className="relative p-2 rounded-full bg-gradient-to-tr from-[#0095da]/30 via-white/10 to-[#8cc63f]/30 border border-white/20 shadow-2xl cursor-pointer group hover:scale-105 transition-all duration-300 max-w-[200px] sm:max-w-[220px]"
                        >
                          <img
                            src={m.image}
                            alt={m.title}
                            className="w-full h-auto object-cover rounded-full aspect-square drop-shadow-lg"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80';
                            }}
                          />
                          <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-white text-xs font-bold gap-1">
                            <Maximize2 className="w-4 h-4 text-[#8cc63f]" />
                            <span>Inspect</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 3. LIGHTBOX ARTWORK MODAL */}
      <AnimatePresence>
        {selectedMilestone && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-xl w-full bg-slate-900 border border-white/20 rounded-3xl p-6 sm:p-8 text-white shadow-2xl overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setSelectedMilestone(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center space-y-4">
                <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full overflow-hidden border-4 border-[#8cc63f]/60 shadow-2xl p-2 bg-white/5">
                  <img
                    src={selectedMilestone.image}
                    alt={selectedMilestone.title}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <div>
                  <span className="px-3 py-1 rounded-full bg-[#0095da]/20 text-sky-300 text-xs font-bold uppercase">
                    {selectedMilestone.tag} • {selectedMilestone.year}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-2">
                    {selectedMilestone.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed">
                    {selectedMilestone.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default MilestonesPage;
