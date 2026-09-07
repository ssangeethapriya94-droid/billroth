import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  HeartPulse,
  Activity,
  CheckCircle2,
  Phone,
  Calendar,
  Clock,
  Award,
  Sparkles,
  ArrowRight,
  Search,
  Filter,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  X,
  Coffee,
  FileText,
  UserCheck,
  SlidersHorizontal,
  Info,
  Check,
  Building2,
  Stethoscope,
  Heart,
  Users,
  BadgePercent
} from 'lucide-react';
import {
  allHealthPackages,
  healthPackageCategories,
  checkupProcessSteps,
  packageFaqs
} from '../data/healthPackagesData';

const HealthPackages = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Packages');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recommended');
  const [expandedPackageId, setExpandedPackageId] = useState(null);
  const [activeModalPackage, setActiveModalPackage] = useState(null);
  const [bookingPackage, setBookingPackage] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    branch: 'Shenoy Nagar (Main Hospital)',
    notes: '',
  });
  const [openFaq, setOpenFaq] = useState(null);

  // Filter and sort packages
  const filteredPackages = useMemo(() => {
    return allHealthPackages
      .filter((pkg) => {
        const matchesCategory =
          selectedCategory === 'All Packages' || pkg.category === selectedCategory;
        const matchesSearch =
          pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          pkg.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          pkg.tests.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
          pkg.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'tests-high') return b.testsCount - a.testsCount;
        if (sortBy === 'recommended') return (b.highlight ? 1 : 0) - (a.highlight ? 1 : 0);
        return 0;
      });
  }, [selectedCategory, searchQuery, sortBy]);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setBookingPackage(null);
      setBookingForm({
        name: '',
        phone: '',
        email: '',
        date: '',
        branch: 'Shenoy Nagar (Main Hospital)',
        notes: '',
      });
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* 1. Cinematic Hero Banner with Hospital Background Image */}
      <section
        className="relative overflow-hidden text-white pt-16 pb-24 sm:pb-28 lg:pt-24 lg:pb-36"
        style={{
          background:
            'linear-gradient(135deg, #003657 0%, #005c8a 35%, #0087bf 65%, #2ea06e 85%, #8cc63f 100%)',
        }}
      >
        {/* Background Image Layer with Balanced Brand Gradient Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/health-checkup-hero-bg.jpg"
            alt="Billroth Hospitals Health Checkup Lounge"
            className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05]"
          />
          
          {/* Multi-stop Brand Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(0, 45, 76, 0.88) 0%, rgba(0, 85, 135, 0.74) 35%, rgba(0, 130, 195, 0.62) 65%, rgba(35, 145, 95, 0.55) 85%, rgba(125, 185, 50, 0.45) 100%)',
            }}
          />

          {/* Directional Soft Darkening for Crystal Clear Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#001e33]/75 via-[#002844]/40 to-[#001e33]/80" />

          {/* Atmospheric Ambient Glows */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#8cc63f]/30 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#0095da]/35 rounded-full blur-[120px] pointer-events-none" />
          
          {/* Subtle Grid Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1.5px, transparent 0)',
              backgroundSize: '24px 24px',
            }}
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs font-extrabold text-white shadow-sm"
            >
              <Sparkles size={14} className="text-[#8cc63f]" />
              <span className="text-[#8cc63f]">NABL Accredited Preventive Care</span>
              <span className="w-1 h-1 rounded-full bg-white/60" />
              <span>Billroth Hospital Chennai</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] drop-shadow-md"
            >
              Master Health Checkup &amp;{' '}
              <span className="text-[#8cc63f] drop-shadow-md">Preventive Packages</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed max-w-3xl mx-auto font-medium drop-shadow-sm"
            >
              In healthcare, <span className="font-bold text-[#8cc63f]">&ldquo;time&rdquo; is everything</span>. Early detection saves lives. Choose from 12+ evidence-based whole-body, cardiac, diabetic, and geriatric screening suites with same-day consolidated specialist reviews.
            </motion.p>

            {/* Quick CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-2"
            >
              <a
                href="#packages-list"
                className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-full font-black text-sm shadow-xl shadow-cyan-950/30 hover:shadow-2xl transition-all duration-200 active:scale-95 group"
                style={{
                  background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)',
                }}
              >
                <HeartPulse size={18} />
                <span>Explore 12 Packages</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:7299404040"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/25 px-6 py-3.5 rounded-full font-bold text-sm backdrop-blur-sm transition-all duration-200"
              >
                <Phone size={16} className="text-[#8cc63f]" />
                <span>Direct Booking: 7299 404040</span>
              </a>
            </motion.div>

            {/* Trust Metrics Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-left"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15 shadow-sm">
                <div className="text-xl sm:text-2xl font-black text-white">12+</div>
                <div className="text-xs text-white/85 font-medium">Screening Packages</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15 shadow-sm">
                <div className="text-xl sm:text-2xl font-black text-[#8cc63f]">4-6 Hrs</div>
                <div className="text-xs text-white/85 font-medium">Same-Day Reports</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15 shadow-sm">
                <div className="text-xl sm:text-2xl font-black text-white">100%</div>
                <div className="text-xs text-white/85 font-medium">Doctor Consultation</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15 shadow-sm">
                <div className="text-xl sm:text-2xl font-black text-[#8cc63f]">FREE</div>
                <div className="text-xs text-white/85 font-medium">Lounge Breakfast</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Floating 4-Card Highlights Section (Partially in Banner & Partially Down) */}
      <div className="-mt-12 sm:-mt-16 lg:-mt-20 relative z-30 mb-8 sm:mb-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:border-[#8cc63f]/50 transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-lime-50 text-[#8cc63f] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 group-hover:bg-[#8cc63f] group-hover:text-slate-950 transition-all duration-300">
                <Coffee size={24} />
              </div>
              <div>
                <div className="text-sm font-black text-slate-900 group-hover:text-[#0095da] transition-colors leading-snug">
                  Complimentary Breakfast
                </div>
                <div className="text-xs text-slate-500 mt-1 font-medium">
                  Served hot in private lounge
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:border-[#0095da]/50 transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-sky-50 text-[#0095da] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 group-hover:bg-[#0095da] group-hover:text-white transition-all duration-300">
                <ShieldCheck size={24} />
              </div>
              <div>
                <div className="text-sm font-black text-slate-900 group-hover:text-[#0095da] transition-colors leading-snug">
                  NABL Accredited Labs
                </div>
                <div className="text-xs text-slate-500 mt-1 font-medium">
                  Automated precision testing
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.26 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:border-emerald-500/50 transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                <UserCheck size={24} />
              </div>
              <div>
                <div className="text-sm font-black text-slate-900 group-hover:text-[#0095da] transition-colors leading-snug">
                  Specialist MD Reviews
                </div>
                <div className="text-xs text-slate-500 mt-1 font-medium">
                  1-on-1 personalized review
                </div>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.34 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <FileText size={24} />
              </div>
              <div>
                <div className="text-sm font-black text-slate-900 group-hover:text-[#0095da] transition-colors leading-snug">
                  Digital Smart Reports
                </div>
                <div className="text-xs text-slate-500 mt-1 font-medium">
                  Sent on WhatsApp &amp; Email
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* 3. Search & Interactive Category Filter Bar */}
      <section id="packages-list" className="py-10 bg-slate-50">
        <div className="container-custom">
          
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 mb-10">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-5">
              
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by package name or specific test (e.g. Echo, Thyroid, Pap Smear, HbA1c)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-slate-200 focus:border-[#0095da] rounded-2xl text-sm font-medium focus:ring-4 focus:ring-sky-100 transition-all outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Sorting Filter */}
              <div className="flex items-center gap-3 shrink-0">
                <SlidersHorizontal size={16} className="text-slate-400" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold px-3.5 py-3 rounded-xl focus:outline-none focus:border-[#0095da]"
                >
                  <option value="recommended">Featured / Recommended</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="tests-high">Most Number of Tests</option>
                </select>
              </div>

            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-6 border-t border-slate-100 mt-6 no-scrollbar">
              {healthPackageCategories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#0095da] text-white shadow-md shadow-sky-200 scale-105'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                    }`}
                  >
                    {isActive && <Check size={13} strokeWidth={3} />}
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search Result Count */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Showing <span className="text-[#0095da]">{filteredPackages.length}</span> Health Packages
            </h2>
            {selectedCategory !== 'All Packages' && (
              <button
                onClick={() => setSelectedCategory('All Packages')}
                className="text-xs font-bold text-[#0095da] hover:underline"
              >
                Reset Filter
              </button>
            )}
          </div>

          {/* 4. Packages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence>
              {filteredPackages.map((pkg, index) => {
                const isExpanded = expandedPackageId === pkg.id;
                return (
                  <motion.div
                    key={pkg.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    className={`bg-white rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between group ${
                      pkg.highlight
                        ? 'border-[#0095da]/40 shadow-xl shadow-sky-100/50 hover:shadow-2xl hover:border-[#0095da]'
                        : 'border-slate-200/80 shadow-sm hover:shadow-xl hover:border-slate-300'
                    }`}
                  >
                    {/* Top Package Accent Banner */}
                    <div className="relative p-6 pb-4 border-b border-slate-100 bg-gradient-to-br from-slate-50 to-white">
                      
                      {/* Popular / Best Value Badge */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-sky-50 text-[#0095da] border border-sky-100">
                          {pkg.category}
                        </span>
                        {pkg.tag && (
                          <span
                            className="text-[10px] font-extrabold text-white px-2.5 py-0.5 rounded-full shadow-xs"
                            style={{
                              background: pkg.highlight
                                ? 'linear-gradient(90deg, #0095da, #8cc63f)'
                                : 'linear-gradient(90deg, #004b77, #0077b6)',
                            }}
                          >
                            {pkg.tag}
                          </span>
                        )}
                      </div>

                      {/* Package Name */}
                      <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#0095da] transition-colors leading-snug">
                        {pkg.name}
                      </h3>

                      <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed font-normal">
                        {pkg.description}
                      </p>

                      {/* Pricing Block */}
                      <div className="mt-4 pt-4 border-t border-slate-100 flex items-baseline justify-between">
                        <div>
                          <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
                            Special Tariff
                          </div>
                          <div className="text-3xl font-black text-[#0095da]">
                            {pkg.priceFormatted}
                            <span className="text-xs font-semibold text-slate-400 ml-1">/ person</span>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="inline-block bg-lime-50 text-[#6ea32f] font-black text-xs px-2.5 py-1 rounded-lg border border-lime-100">
                            {pkg.testsCount} Tests + {pkg.consultationsCount} Reviews
                          </span>
                        </div>
                      </div>

                    </div>

                    {/* Middle: Key Inclusions Preview */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      
                      <div>
                        <div className="text-xs font-black text-slate-800 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                          <Activity size={14} className="text-[#8cc63f]" />
                          <span>Included Investigations:</span>
                        </div>

                        <ul className="space-y-2">
                          {pkg.tests.slice(0, isExpanded ? pkg.tests.length : 5).map((test, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                              <CheckCircle2 size={13} className="text-[#8cc63f] shrink-0 mt-0.5" />
                              <span>{test}</span>
                            </li>
                          ))}
                        </ul>

                        {pkg.tests.length > 5 && (
                          <button
                            onClick={() => setExpandedPackageId(isExpanded ? null : pkg.id)}
                            className="mt-3 text-xs font-black text-[#0095da] hover:text-[#0077b6] flex items-center gap-1 transition-colors"
                          >
                            <span>
                              {isExpanded
                                ? 'Show less'
                                : `+ ${pkg.tests.length - 5} more tests & doctor reviews`}
                            </span>
                            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                          </button>
                        )}
                      </div>

                      {/* Preparation & Turnaround tags */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                        <div className="flex items-center gap-1 text-slate-600">
                          <Clock size={13} className="text-amber-500" />
                          <span>{pkg.sampleProcessingTime}</span>
                        </div>
                        <div className="flex items-center gap-1 text-slate-600 font-medium">
                          <Coffee size={13} className="text-emerald-500" />
                          <span>Free Breakfast</span>
                        </div>
                      </div>

                    </div>

                    {/* Bottom Action CTAs */}
                    <div className="p-6 pt-0 space-y-2.5">
                      <button
                        onClick={() => {
                          setBookingPackage(pkg);
                          setBookingSuccess(false);
                        }}
                        className="w-full py-3.5 px-4 rounded-2xl font-black text-sm text-white shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 group"
                        style={{
                          background: pkg.highlight
                            ? 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)'
                            : 'linear-gradient(90deg, #004b77 0%, #0077b6 100%)',
                        }}
                      >
                        <Calendar size={16} />
                        <span>Book This Package</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </button>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setActiveModalPackage(pkg)}
                          className="flex-1 py-2.5 px-3 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-xs font-bold text-slate-700 transition-colors text-center"
                        >
                          View Full Details
                        </button>
                        <a
                          href="tel:7299404040"
                          className="p-2.5 rounded-xl border border-slate-200 hover:bg-sky-50 text-[#0095da] transition-colors"
                          title="Call 7299404040 to book"
                        >
                          <Phone size={16} />
                        </a>
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {filteredPackages.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
              <HeartPulse size={48} className="mx-auto text-slate-300 mb-4" />
              <h3 className="text-xl font-bold text-slate-800">No packages match your search</h3>
              <p className="text-slate-500 text-sm mt-1 max-w-md mx-auto">
                Try searching for another keyword or reset the category filter to view all 12 available packages.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All Packages');
                }}
                className="mt-4 px-6 py-2.5 bg-[#0095da] text-white rounded-full text-xs font-extrabold"
              >
                Reset All Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 5. 5-Step Process Timeline */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="container-custom">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-lime-50 border border-lime-200/60 text-[#6ea32f] text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
              Seamless Patient Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              What to Expect on Your <span className="text-[#0095da]">Checkup Day</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3">
              We respect your time. Our streamlined process ensures your tests, diagnostic imaging, and specialist consultations are completed comfortably in a single morning.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {checkupProcessSteps.map((step, idx) => (
              <div
                key={step.step}
                className="relative bg-slate-50 rounded-3xl p-6 border border-slate-200/70 hover:shadow-lg transition-all group"
              >
                <div className="text-4xl font-black text-slate-200 group-hover:text-[#8cc63f] transition-colors mb-3">
                  {step.step}
                </div>
                <h3 className="text-base font-extrabold text-slate-900 mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Preparation & Fasting Guidelines */}
      <section className="py-16 bg-slate-100/60">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-[#003657] to-[#005c8a] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
            
            <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="inline-block bg-white/15 text-[#8cc63f] text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider">
                  Important Guidelines
                </span>
                <h2 className="text-3xl font-black tracking-tight leading-tight">
                  How to Prepare for Your Health Checkup
                </h2>
                <p className="text-sm text-sky-100 leading-relaxed font-normal">
                  Following these simple pre-test instructions ensures your lab values and imaging results are 100% accurate.
                </p>
                
                <div className="pt-2">
                  <a
                    href="tel:7299404040"
                    className="inline-flex items-center gap-2 bg-[#8cc63f] text-slate-950 px-6 py-3 rounded-full font-black text-xs uppercase tracking-wider hover:bg-[#7cb632] transition-colors"
                  >
                    <Phone size={15} />
                    <span>Have Questions? Call 7299404040</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15">
                  <div className="flex items-center gap-2 font-black text-white text-sm mb-1.5">
                    <Clock size={16} className="text-[#8cc63f]" />
                    <span>10-12 Hours Fasting</span>
                  </div>
                  <p className="text-xs text-sky-100/90 leading-relaxed">
                    Do not eat or drink anything except plain water for 10-12 hours prior to your morning appointment.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15">
                  <div className="flex items-center gap-2 font-black text-white text-sm mb-1.5">
                    <Heart size={16} className="text-[#8cc63f]" />
                    <span>Morning Medications</span>
                  </div>
                  <p className="text-xs text-sky-100/90 leading-relaxed">
                    BP medications can be taken with water. Postpone diabetes medications until after your fasting blood draw.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15">
                  <div className="flex items-center gap-2 font-black text-white text-sm mb-1.5">
                    <FileText size={16} className="text-[#8cc63f]" />
                    <span>Past Medical Records</span>
                  </div>
                  <p className="text-xs text-sky-100/90 leading-relaxed">
                    Bring previous health checkup files, surgical summaries, and current prescriptions for doctor comparison.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15">
                  <div className="flex items-center gap-2 font-black text-white text-sm mb-1.5">
                    <Activity size={16} className="text-[#8cc63f]" />
                    <span>Clothing &amp; Footwear</span>
                  </div>
                  <p className="text-xs text-sky-100/90 leading-relaxed">
                    Wear comfortable two-piece clothing and walking/running shoes if your package includes a Treadmill Stress Test (TMT).
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. FAQs Section */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-3xl">
          
          <div className="text-center mb-12">
            <span className="inline-block bg-sky-50 border border-sky-200/60 text-[#0095da] text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
              Got Questions?
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked <span className="text-[#0095da]">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {packageFaqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full text-left p-5 bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={18} className="text-[#0095da] shrink-0" /> : <ChevronDown size={18} className="text-slate-400 shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="p-5 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 8. Full Package Details Modal */}
      <AnimatePresence>
        {activeModalPackage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative"
            >
              <button
                onClick={() => setActiveModalPackage(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
              >
                <X size={18} />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-black uppercase text-[#0095da] bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                    {activeModalPackage.category}
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 mt-2">
                    {activeModalPackage.name}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    {activeModalPackage.description}
                  </p>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase">Package Price</div>
                    <div className="text-3xl font-black text-[#0095da]">
                      {activeModalPackage.priceFormatted}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500 font-bold uppercase">Report Time</div>
                    <div className="text-sm font-extrabold text-slate-800">
                      {activeModalPackage.sampleProcessingTime}
                    </div>
                  </div>
                </div>

                {/* Tests Inclusions */}
                <div>
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Activity size={16} className="text-[#8cc63f]" />
                    <span>Complete List of Investigations ({activeModalPackage.tests.length})</span>
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2 max-h-60 overflow-y-auto pr-2">
                    {activeModalPackage.tests.map((t, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <CheckCircle2 size={14} className="text-[#8cc63f] shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Consultations */}
                <div>
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Stethoscope size={16} className="text-[#0095da]" />
                    <span>Specialist Doctor Consultations ({activeModalPackage.consultations.length})</span>
                  </h4>
                  <div className="space-y-2">
                    {activeModalPackage.consultations.map((c, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-sky-50/60 p-3 rounded-xl border border-sky-100">
                        <Check size={14} className="text-[#0095da] shrink-0" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prep Guidelines */}
                {activeModalPackage.prepGuidelines && (
                  <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200/80">
                    <div className="text-xs font-black text-amber-900 uppercase mb-2 flex items-center gap-1.5">
                      <Info size={14} className="text-amber-600" />
                      <span>Special Fasting &amp; Prep Instructions</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-amber-900/90">
                      {activeModalPackage.prepGuidelines.map((g, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                          <span>{g}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Modal Action CTA */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => {
                      const pkg = activeModalPackage;
                      setActiveModalPackage(null);
                      setBookingPackage(pkg);
                    }}
                    className="flex-1 py-3.5 rounded-2xl font-black text-sm text-white text-center shadow-lg hover:shadow-xl transition-all"
                    style={{
                      background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)',
                    }}
                  >
                    Proceed to Book {activeModalPackage.shortName}
                  </button>
                  <button
                    onClick={() => setActiveModalPackage(null)}
                    className="py-3.5 px-6 rounded-2xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    Close
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 9. Interactive Package Booking Form Modal */}
      <AnimatePresence>
        {bookingPackage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 p-6 sm:p-8 relative"
            >
              <button
                onClick={() => setBookingPackage(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
              >
                <X size={18} />
              </button>

              {bookingSuccess ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner animate-bounce">
                    <Check size={32} strokeWidth={3} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">
                    Booking Request Confirmed!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Thank you, <strong className="text-slate-900">{bookingForm.name}</strong>. Our Preventive Health Relations Desk has scheduled your <strong className="text-[#0095da]">{bookingPackage.name}</strong> at <strong className="text-slate-900">{bookingForm.branch}</strong>.
                  </p>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600">
                    A confirmation SMS &amp; WhatsApp message with fasting preparation guidelines has been dispatched to <strong className="text-slate-900">{bookingForm.phone}</strong>.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#0095da] bg-sky-50 px-2.5 py-0.5 rounded-md">
                      Instant Health Checkup Booking
                    </span>
                    <h3 className="text-xl font-black text-slate-900 mt-1">
                      {bookingPackage.name}
                    </h3>
                    <div className="text-sm font-extrabold text-[#0095da] mt-0.5">
                      Tariff: {bookingPackage.priceFormatted}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#0095da] outline-none font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98400 12345"
                        value={bookingForm.phone}
                        onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#0095da] outline-none font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={bookingForm.date}
                        onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                        className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#0095da] outline-none font-medium text-slate-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Hospital Branch *
                    </label>
                    <select
                      value={bookingForm.branch}
                      onChange={(e) => setBookingForm({ ...bookingForm, branch: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#0095da] outline-none font-medium text-slate-800"
                    >
                      <option value="Shenoy Nagar (Main Hospital)">Shenoy Nagar (Main Hospital - 43, Lakshmi Talkies Rd)</option>
                      <option value="R.A. Puram (Billroth Kaliappa)">R.A. Puram (Billroth Kaliappa - 52, 2nd Main Rd)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Any Existing Conditions / Notes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Diabetic for 5 years, wheelchair support requested..."
                      value={bookingForm.notes}
                      onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                      className="w-full px-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#0095da] outline-none font-medium resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-2xl font-black text-sm text-white shadow-lg hover:shadow-xl transition-all"
                    style={{
                      background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)',
                    }}
                  >
                    Confirm &amp; Book Appointment
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    🔒 No advance payment required. Pay conveniently at the hospital billing desk.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default HealthPackages;
