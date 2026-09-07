import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, Download, Search, Filter, Calendar, BookOpen, 
  ExternalLink, X, CheckCircle, Mail, Sparkles, ChevronRight,
  ShieldCheck, Share2
} from 'lucide-react';
import { newsletters } from '../data/newslettersData';

const categories = [
  'All',
  'Gastroenterology',
  'Orthopaedics',
  'Cardiology',
  'Oncology',
  'Critical Care & Emergency',
  'Plastic Surgery',
  'Pulmonology',
  "Women's Health",
  'Wellness'
];

const Newsletter = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [previewItem, setPreviewItem] = useState(null);
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  // Filtered newsletters
  const filteredNewsletters = useMemo(() => {
    return newsletters.filter((item) => {
      const matchesCategory = 
        selectedCategory === 'All' || 
        item.category === selectedCategory ||
        item.department.toLowerCase().includes(selectedCategory.toLowerCase());

      const matchesSearch = 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.volume.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

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
            <BookOpen size={14} />
            <span>Billroth Hospital Publications</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-5">
            Clinical Newsletters &amp; Insights
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-8 max-w-2xl mx-auto">
            Stay abreast of tertiary surgical milestones, diagnostic innovations, clinical case studies, and medical wellness guidelines published by Billroth’s clinical departments.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative flex items-center">
              <Search className="absolute left-4.5 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search by specialty, topic (e.g. Endoscopy, Ortho, Heart)..."
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

      {/* 2. Filter Tabs & Content Section */}
      <section className="container-custom py-10 md:py-16">
        {/* Category Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => {
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

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-xs md:text-sm text-slate-500 font-semibold">
          <span>
            Showing <strong className="text-slate-800">{filteredNewsletters.length}</strong> {filteredNewsletters.length === 1 ? 'publication' : 'publications'}
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

        {/* Newsletters Grid */}
        {filteredNewsletters.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredNewsletters.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Cover Image Container */}
                <div 
                  onClick={() => setPreviewItem(item)}
                  className="relative h-56 bg-slate-100 overflow-hidden cursor-pointer"
                >
                  <img
                    src={item.coverImage}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://billrothhospitals.com/wp-content/uploads/2023/10/billrothhospital-logo-1.png';
                      e.target.className = 'w-full h-full object-contain p-8 bg-slate-50';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="bg-[#0095da] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
                      {item.volume}
                    </span>
                    <span className="bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-1 rounded-md flex items-center gap-1">
                      <Calendar size={11} />
                      {item.month} {item.year}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#8cc63f]">
                      {item.department}
                    </span>
                    <h3 className="text-base font-bold leading-snug line-clamp-2 drop-shadow-sm">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {item.subtitle && (
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2.5">
                        {item.subtitle}
                      </h4>
                    )}

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4 font-normal">
                      {item.excerpt}
                    </p>

                    {/* Topic Tags */}
                    {item.topics && item.topics.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {item.topics.map((topic, tIdx) => (
                          <span
                            key={tIdx}
                            className="bg-slate-100 text-slate-700 text-[10px] font-semibold px-2 py-0.5 rounded-md"
                          >
                            #{topic}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Actions Footer */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
                    <button
                      type="button"
                      onClick={() => setPreviewItem(item)}
                      className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#0095da] hover:text-[#0077b6] transition-colors cursor-pointer"
                    >
                      <BookOpen size={14} />
                      <span>Preview</span>
                    </button>

                    <a
                      href={item.pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white text-xs font-bold transition-all shadow-2xs"
                    >
                      <Download size={13} />
                      <span>PDF</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <FileText size={48} className="text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 mb-1">No Newsletters Found</h3>
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
              View All Publications
            </button>
          </div>
        )}
      </section>

      {/* 3. Interactive Newsletter Preview Modal */}
      <AnimatePresence>
        {previewItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreviewItem(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-200 z-10 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div 
                className="p-6 text-white relative"
                style={{
                  background: 'linear-gradient(135deg, #002d4c 0%, #00689b 70%, #0095da 100%)',
                }}
              >
                <button
                  type="button"
                  onClick={() => setPreviewItem(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-[#8cc63f] text-[#002d4c] text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                    {previewItem.volume}
                  </span>
                  <span className="text-white/80 text-xs font-semibold">
                    {previewItem.month} {previewItem.year}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-white leading-tight mb-1">
                  {previewItem.title}
                </h2>
                {previewItem.subtitle && (
                  <p className="text-xs sm:text-sm text-slate-200">
                    {previewItem.subtitle}
                  </p>
                )}
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-700">
                {/* Cover Preview & Metadata */}
                <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <img
                    src={previewItem.coverImage}
                    alt={previewItem.title}
                    className="w-32 h-44 object-cover rounded-xl shadow-md flex-shrink-0"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://billrothhospitals.com/wp-content/uploads/2023/10/billrothhospital-logo-1.png';
                      e.target.className = 'w-32 h-20 object-contain p-2 bg-white';
                    }}
                  />

                  <div className="space-y-2 text-center sm:text-left">
                    <div className="text-xs font-bold text-slate-500 uppercase">
                      Department: <strong className="text-slate-800">{previewItem.department}</strong>
                    </div>
                    <div className="text-xs font-bold text-slate-500 uppercase">
                      Category: <strong className="text-[#0095da]">{previewItem.category}</strong>
                    </div>
                    {previewItem.pages && (
                      <div className="text-xs font-bold text-slate-500">
                        Format: <span className="text-slate-700">{previewItem.pages} Pages Edition (PDF)</span>
                      </div>
                    )}
                    <div className="pt-2 flex flex-wrap gap-1.5 justify-center sm:justify-start">
                      {previewItem.topics.map((topic, idx) => (
                        <span key={idx} className="bg-white border border-slate-200 text-slate-700 text-[11px] font-semibold px-2.5 py-0.5 rounded-md">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Full Excerpt & Abstract */}
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2">
                    Clinical Overview &amp; Abstract
                  </h4>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal bg-slate-50/70 p-4 rounded-xl border border-slate-100">
                    {previewItem.excerpt}
                  </p>
                </div>

                {/* Key Benefits / Highlights */}
                <div className="bg-emerald-50/70 border border-emerald-100 p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-emerald-800 text-xs font-black uppercase tracking-wider mb-2">
                    <ShieldCheck size={16} className="text-emerald-600" />
                    <span>Official Billroth Hospital Medical Publication</span>
                  </div>
                  <p className="text-xs text-emerald-900/80 leading-relaxed">
                    Prepared by the Department of {previewItem.department} at Billroth Hospitals, Chennai. All procedures and diagnostic case studies reviewed by accredited senior faculty.
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setPreviewItem(null)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs font-bold transition-colors cursor-pointer"
                >
                  Close
                </button>

                <a
                  href={previewItem.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#0095da] to-[#8cc63f] hover:brightness-105 text-white text-xs font-black uppercase tracking-wider shadow-md transition-all active:scale-95"
                >
                  <Download size={15} />
                  <span>Download Full PDF ({previewItem.fileSize || 'PDF'})</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 4. Newsletter Subscription Banner */}
      <section className="bg-white border-t border-slate-200 py-12 md:py-16">
        <div className="container-custom max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0095da]/10 text-[#0095da] text-xs font-black uppercase tracking-wider mb-3">
            <Mail size={14} />
            <span>Stay Informed</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
            Subscribe to Future Medical Editions
          </h2>

          <p className="text-sm text-slate-500 max-w-lg mx-auto mb-6">
            Get the latest surgical advancements, health alerts, and clinical research delivered directly to your inbox every month.
          </p>

          {subscribed ? (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl max-w-md mx-auto flex items-center justify-center gap-2 text-emerald-800 text-sm font-bold">
              <CheckCircle size={18} className="text-emerald-600" />
              <span>Thank you! You are now subscribed to Billroth Clinical Updates.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#0095da]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-[#0095da] hover:bg-[#0077b6] text-white text-xs font-black uppercase tracking-wider shadow-md transition-all cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
