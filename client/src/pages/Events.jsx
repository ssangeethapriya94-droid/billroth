import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, MapPin, Search, Filter, Sparkles, X, ChevronRight,
  Award, Heart, Share2, CheckCircle, ArrowRight, ExternalLink
} from 'lucide-react';
import { events } from '../data/eventsData';

const eventCategories = [
  'All',
  'Press & Milestones',
  'Medical CME & Conferences',
  'Community & Health Camps',
  'Hospital Celebrations'
];

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalEvent, setActiveModalEvent] = useState(null);

  // Helper to normalize text for flexible search and comparison
  const normalize = (str) => {
    return (str || '')
      .toLowerCase()
      .replace(/[\u2018\u2019]/g, "'")
      .replace(/[\u201C\u201D]/g, '"')
      .replace(/['"’“”]/g, '')
      .trim();
  };

  // Filter events
  const filteredEvents = useMemo(() => {
    const cleanQuery = normalize(searchQuery);
    const searchTerms = cleanQuery.split(/\s+/).filter(Boolean);

    return events.filter((ev) => {
      // 1. Category Matching
      const matchesCategory =
        selectedCategory === 'All' ||
        normalize(ev.category) === normalize(selectedCategory);

      if (!matchesCategory) return false;

      // 2. Search Query Matching across all relevant event fields
      if (searchTerms.length === 0) return true;

      const searchableCorpus = [
        ev.title,
        ev.category,
        ev.description,
        ev.location,
        ev.date,
        ev.dateBadge,
        ev.year,
        ...(ev.highlights || [])
      ]
        .map(normalize)
        .join(' ');

      return searchTerms.every((term) => searchableCorpus.includes(term));
    });
  }, [selectedCategory, searchQuery]);

  // Featured Event (Top item)
  const featuredEvent = events[0];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Hero Header */}
      <section 
        className="relative text-white py-16 md:py-24 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #002d4c 0%, #004870 30%, #00689b 60%, #0087bf 85%, #0095da 100%)',
        }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#8cc63f] rounded-full blur-[100px]" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#0095da] rounded-full blur-[100px]" />
        </div>

        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#8cc63f] text-xs font-black uppercase tracking-wider mb-5">
            <Calendar size={14} />
            <span>Billroth Hospitals Happenings</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-5">
            Events, CMEs &amp; Milestones
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-8 max-w-2xl mx-auto">
            Discover our latest hospital press releases, clinical medical conferences, robotic surgery launches, and grassroots health camps serving Chennai and beyond.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative flex items-center">
              <Search className="absolute left-4.5 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search events by title, keyword, or venue..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-4 rounded-2xl bg-white text-slate-800 placeholder-slate-400 text-sm md:text-base font-medium shadow-xl focus:outline-hidden focus:ring-3 focus:ring-[#8cc63f]/50 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 text-slate-400 hover:text-slate-600 p-1"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Milestone Spotlight */}
      {featuredEvent && !searchQuery && selectedCategory === 'All' && (
        <section className="container-custom -mt-8 relative z-20 mb-8">
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl p-6 sm:p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md">
              <img
                src={featuredEvent.image}
                alt={featuredEvent.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://billrothhospitals.com/wp-content/uploads/2023/10/billrothhospital-logo-1.png';
                  e.target.className = 'w-full h-full object-contain p-8 bg-slate-50';
                }}
              />
              <div className="absolute top-3 left-3">
                <span className="bg-[#8cc63f] text-[#002d4c] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  Featured Milestone
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-semibold">
                <span className="bg-[#0095da]/10 text-[#0095da] px-3 py-1 rounded-full font-bold uppercase">
                  {featuredEvent.category}
                </span>
                <span className="flex items-center gap-1 text-slate-600">
                  <Calendar size={13} className="text-[#0095da]" />
                  {featuredEvent.date}
                </span>
                <span className="flex items-center gap-1 text-slate-600">
                  <MapPin size={13} className="text-[#8cc63f]" />
                  {featuredEvent.location}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                {featuredEvent.title}
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {featuredEvent.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 pt-2">
                {featuredEvent.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                    <CheckCircle size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => setActiveModalEvent(featuredEvent)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0095da] hover:bg-[#0077b6] text-white text-xs font-black uppercase tracking-wider shadow-md transition-all cursor-pointer active:scale-95"
                >
                  <span>View Event Details</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Event Cards Section */}
      <section className="container-custom py-8 md:py-14">
        {/* Category Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {eventCategories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-[#0095da] text-white shadow-md shadow-[#0095da]/20 scale-105'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Counter */}
        <div className="flex items-center justify-between mb-6 text-xs md:text-sm text-slate-500 font-semibold">
          <span>
            Showing <strong className="text-slate-800">{filteredEvents.length}</strong> {filteredEvents.length === 1 ? 'event' : 'events'}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </span>

          {(selectedCategory !== 'All' || searchQuery) && (
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-[#0095da] hover:underline font-bold"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredEvents.map((ev, idx) => (
              <motion.div
                key={ev.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Event Photo */}
                <div 
                  onClick={() => setActiveModalEvent(ev)}
                  className="relative h-56 bg-slate-100 overflow-hidden cursor-pointer"
                >
                  <img
                    src={ev.image}
                    alt={ev.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://billrothhospitals.com/wp-content/uploads/2023/10/billrothhospital-logo-1.png';
                      e.target.className = 'w-full h-full object-contain p-8 bg-slate-50';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="bg-[#0095da] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
                      {ev.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#8cc63f] mb-1">
                      <Calendar size={12} />
                      <span>{ev.dateBadge || ev.date}</span>
                    </div>
                    <h3 className="text-base font-bold leading-snug line-clamp-2 drop-shadow-sm">
                      {ev.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-3">
                      <MapPin size={13} className="text-[#0095da] flex-shrink-0" />
                      <span className="line-clamp-1">{ev.location}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4 font-normal">
                      {ev.description}
                    </p>

                    {/* Highlights List */}
                    {ev.highlights && ev.highlights.length > 0 && (
                      <div className="space-y-1.5 mb-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
                        {ev.highlights.slice(0, 2).map((item, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <span className="text-[#8cc63f] font-black">•</span>
                            <span className="line-clamp-1 font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Footer Button */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <button
                      type="button"
                      onClick={() => setActiveModalEvent(ev)}
                      className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#0095da] hover:text-[#0077b6] transition-colors cursor-pointer"
                    >
                      <span>Read Full Report</span>
                      <ChevronRight size={14} />
                    </button>

                    <span className="text-[11px] text-slate-400 font-semibold">
                      {ev.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <Calendar size={48} className="text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 mb-1">No Events Found</h3>
            <p className="text-sm text-slate-500 mb-4">
              Try adjusting your search keywords or switching category filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-[#0095da] text-white text-xs font-bold"
            >
              View All Events
            </button>
          </div>
        )}
      </section>

      {/* 4. Interactive Event Detail Modal */}
      <AnimatePresence>
        {activeModalEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalEvent(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-200 z-10 max-h-[90vh] flex flex-col"
            >
              {/* Modal Image Header */}
              <div className="relative h-64 sm:h-72 bg-slate-900 overflow-hidden flex-shrink-0">
                <img
                  src={activeModalEvent.image}
                  alt={activeModalEvent.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://billrothhospitals.com/wp-content/uploads/2023/10/billrothhospital-logo-1.png';
                    e.target.className = 'w-full h-full object-contain p-8 bg-slate-900';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />

                <button
                  type="button"
                  onClick={() => setActiveModalEvent(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>

                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="bg-[#8cc63f] text-[#002d4c] text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                      {activeModalEvent.category}
                    </span>
                    <span className="bg-white/20 backdrop-blur-xs text-white text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <Calendar size={11} />
                      {activeModalEvent.date}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black leading-tight drop-shadow-md">
                    {activeModalEvent.title}
                  </h3>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto space-y-5 flex-1 text-slate-700">
                {/* Venue Tag */}
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <MapPin size={15} className="text-[#0095da]" />
                  <span>Venue: <strong className="text-slate-800">{activeModalEvent.location}</strong></span>
                </div>

                {/* Narrative */}
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2">
                    Event Overview
                  </h4>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {activeModalEvent.description}
                  </p>
                </div>

                {/* Highlights */}
                {activeModalEvent.highlights && activeModalEvent.highlights.length > 0 && (
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2">
                      Key Highlights &amp; Announcements
                    </h4>
                    <div className="space-y-2 bg-emerald-50/70 border border-emerald-100 p-4 rounded-xl">
                      {activeModalEvent.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-950">
                          <CheckCircle size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="font-medium">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <div className="text-xs text-slate-500 font-semibold">
                  Official Billroth Hospitals Event Archive
                </div>

                <button
                  type="button"
                  onClick={() => setActiveModalEvent(null)}
                  className="px-5 py-2 rounded-xl bg-[#0095da] hover:bg-[#0077b6] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Events;
