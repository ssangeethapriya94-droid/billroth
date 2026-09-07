import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  FileText,
  Clock,
  Phone,
  Calendar,
  AlertCircle,
  Building2,
  Send,
  HelpCircle,
  Sparkles,
  ArrowRight,
  CreditCard
} from 'lucide-react';
import { hospitalInfo } from '../data/data';

const tpaList = [
  { id: 1, name: 'Star Health & Allied Insurance', type: 'Private Insurance', logoIndex: '01' },
  { id: 2, name: 'HDFC ERGO General Insurance', type: 'Private Insurance', logoIndex: '02' },
  { id: 3, name: 'ICICI Lombard General Insurance', type: 'Private Insurance', logoIndex: '03' },
  { id: 4, name: 'Bajaj Allianz General Insurance', type: 'Private Insurance', logoIndex: '04' },
  { id: 5, name: 'Care Health Insurance Ltd', type: 'Private Insurance', logoIndex: '05' },
  { id: 6, name: 'Niva Bupa Health Insurance', type: 'Private Insurance', logoIndex: '06' },
  { id: 7, name: 'TATA AIG General Insurance', type: 'Private Insurance', logoIndex: '07' },
  { id: 8, name: 'Chola MS General Insurance', type: 'Private Insurance', logoIndex: '08' },
  { id: 9, name: 'United India Insurance', type: 'Government / PSU', logoIndex: '09' },
  { id: 10, name: 'National Insurance Company Ltd', type: 'Government / PSU', logoIndex: '10' },
  { id: 11, name: 'The New India Assurance', type: 'Government / PSU', logoIndex: '11' },
  { id: 12, name: 'Oriental Insurance Company Ltd', type: 'Government / PSU', logoIndex: '12' },
  { id: 13, name: 'Aditya Birla Health Insurance', type: 'Private Insurance', logoIndex: '13' },
  { id: 14, name: 'SBI General Insurance', type: 'Private Insurance', logoIndex: '14' },
  { id: 15, name: 'Royal Sundaram General Insurance', type: 'Private Insurance', logoIndex: '15' },
  { id: 16, name: 'Reliance General Insurance', type: 'Private Insurance', logoIndex: '16' },
  { id: 17, name: 'Future Generali India Insurance', type: 'Private Insurance', logoIndex: '17' },
  { id: 18, name: 'Go Digit General Insurance', type: 'Private Insurance', logoIndex: '18' },
  { id: 19, name: 'Universal Sompo General Insurance', type: 'Private Insurance', logoIndex: '19' },
  { id: 20, name: 'Manipal Cigna Health Insurance', type: 'Private Insurance', logoIndex: '20' },
  { id: 21, name: 'ACCKO General Insurance', type: 'Private Insurance', logoIndex: '21' },
  { id: 22, name: 'Bharathi AXA General Insurance', type: 'Private Insurance', logoIndex: '22' },
  { id: 23, name: 'Iffco Tokio General Insurance', type: 'Private Insurance', logoIndex: '23' },
  { id: 24, name: 'Liberty General Insurance', type: 'Private Insurance', logoIndex: '24' },
  { id: 25, name: 'Magma HDI General Insurance', type: 'Private Insurance', logoIndex: '25' },
  { id: 26, name: 'Navi General Insurance', type: 'Private Insurance', logoIndex: '26' },
  { id: 27, name: 'Medi Assist Insurance TPA', type: 'Third Party Administrator (TPA)', logoIndex: '27' },
  { id: 28, name: 'MD India Health Insurance TPA', type: 'Third Party Administrator (TPA)', logoIndex: '28' },
  { id: 29, name: 'Vidal Health Insurance TPA', type: 'Third Party Administrator (TPA)', logoIndex: '29' },
  { id: 30, name: 'Paramount Health Services & TPA', type: 'Third Party Administrator (TPA)', logoIndex: '30' },
  { id: 31, name: 'Heritage Health Insurance TPA', type: 'Third Party Administrator (TPA)', logoIndex: '31' },
  { id: 32, name: 'Health India Insurance TPA', type: 'Third Party Administrator (TPA)', logoIndex: '32' },
  { id: 33, name: 'Family Plan Health Insurance TPA (FHPL)', type: 'Third Party Administrator (TPA)', logoIndex: '33' },
  { id: 34, name: 'Genins India Insurance TPA Ltd', type: 'Third Party Administrator (TPA)', logoIndex: '34' },
  { id: 35, name: 'Good Health Insurance TPA Ltd', type: 'Third Party Administrator (TPA)', logoIndex: '35' },
  { id: 36, name: 'Medsave Health Insurance TPA', type: 'Third Party Administrator (TPA)', logoIndex: '36' },
  { id: 37, name: 'Medvantage Insurance TPA', type: 'Third Party Administrator (TPA)', logoIndex: '37' },
  { id: 38, name: 'Raksha Health Insurance TPA', type: 'Third Party Administrator (TPA)', logoIndex: '38' },
  { id: 39, name: 'Safeway Insurance TPA', type: 'Third Party Administrator (TPA)', logoIndex: '39' },
  { id: 40, name: 'Vipul Medcorp TPA Pvt Ltd', type: 'Third Party Administrator (TPA)', logoIndex: '40' },
  { id: 41, name: 'Alankit Insurance TPA Ltd', type: 'Third Party Administrator (TPA)', logoIndex: '41' },
  { id: 42, name: 'Ericson Insurance TPA Co Ltd', type: 'Third Party Administrator (TPA)', logoIndex: '42' },
  { id: 43, name: 'East West Assist Insurance TPA', type: 'Third Party Administrator (TPA)', logoIndex: '43' }
];

const categories = ['All Providers', 'Private Insurance', 'Government / PSU', 'Third Party Administrator (TPA)'];

const TPAs = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Providers');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    patientName: '',
    insuranceCompany: '',
    policyNumber: '',
    phone: '',
    admissionType: 'Planned Admission',
    query: ''
  });

  const filteredList = tpaList.filter((item) => {
    const matchSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.type.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      selectedCategory === 'All Providers' || item.type === selectedCategory;
    return matchSearch && matchCategory;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        patientName: '',
        insuranceCompany: '',
        policyNumber: '',
        phone: '',
        admissionType: 'Planned Admission',
        query: ''
      });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* 1. HERO BANNER WITH PHOTOREALISTIC BACKGROUND */}
      <section className="relative overflow-hidden text-white py-16 sm:py-20 lg:py-26 min-h-[520px] flex items-center">
        {/* Background Image with High-Clarity Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/tpa-hero-bg.jpg"
            alt="Insurance and Cashless Hospitalization Help Desk at Billroth Hospitals"
            className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-1000"
          />
          {/* Subtle Directional Overlay for Contrast on Left Text */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#021824]/90 via-[#063248]/65 to-slate-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#021824]/85 via-transparent to-black/20" />
        </div>

        {/* Ambient Glow Accents */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#0095da]/20 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#8cc63f]/20 rounded-full blur-3xl pointer-events-none z-0" />

        <div className="container-custom relative z-10 w-full">
          <div className="max-w-3xl space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-black uppercase tracking-widest text-[#8cc63f]"
            >
              <ShieldCheck size={14} />
              <span>Patients & Visitors &bull; Cashless Insurance Services</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-black tracking-tight leading-tight"
            >
              Insurance Companies & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-teal-200 to-[#8cc63f]">
                TPA Cashless Services
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow-xs"
            >
              Billroth Hospitals offers hassle-free cashless hospitalization tie-ups with leading health insurance providers and Third Party Administrators (TPAs) across India.
            </motion.p>
          </div>

          {/* Key Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 mt-10 pt-8 border-t border-white/15 max-w-4xl"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 text-center">
              <div className="text-2xl sm:text-3xl font-black text-[#8cc63f]">40+</div>
              <div className="text-xs text-slate-200 font-bold mt-0.5">Empanelled TPAs & Insurers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 text-center">
              <div className="text-2xl sm:text-3xl font-black text-white">100%</div>
              <div className="text-xs text-slate-200 font-bold mt-0.5">Cashless Hospitalization</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 text-center">
              <div className="text-2xl sm:text-3xl font-black text-sky-300">2-4 Hrs</div>
              <div className="text-xs text-slate-200 font-bold mt-0.5">Fast Pre-Auth Approvals</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 text-center">
              <div className="text-2xl sm:text-3xl font-black text-[#8cc63f]">24/7</div>
              <div className="text-xs text-slate-200 font-bold mt-0.5">Insurance Help Desk</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CASHLESS PROCESS ROADMAP */}
      <section className="container-custom py-14 sm:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-[#0095da]">
            Seamless Claim Processing
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
            How Cashless Hospitalization Works
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Our dedicated in-house Insurance & TPA cell coordinates directly with your insurance provider.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Planned Admission */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-sky-50 text-[#0095da] flex items-center justify-center font-black">
                <Calendar size={20} />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900">Planned Hospitalization</h3>
                <p className="text-xs text-slate-500">Scheduled surgery or medical procedure</p>
              </div>
            </div>

            <ol className="space-y-2.5 text-xs sm:text-sm text-slate-600 list-decimal list-inside leading-relaxed pt-2 border-t border-slate-100">
              <li>Submit doctor’s admission advice & insurance card at TPA Desk <strong>48 hours before</strong> admission.</li>
              <li>Our team fills the Pre-Authorization request and submits it digitally to your TPA / Insurer.</li>
              <li>TPA approves initial sanctioned amount (Initial Guarantee of Payment - GOP).</li>
              <li>Patient checks into room with cashless coverage active.</li>
            </ol>
          </div>

          {/* Emergency Admission */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center font-black">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900">Emergency Admission</h3>
                <p className="text-xs text-slate-500">Unplanned critical care or trauma admission</p>
              </div>
            </div>

            <ol className="space-y-2.5 text-xs sm:text-sm text-slate-600 list-decimal list-inside leading-relaxed pt-2 border-t border-slate-100">
              <li>Patient is immediately stabilized and admitted via 24/7 Casualty ER.</li>
              <li>Attendant submits insurance card and photo ID at TPA Desk <strong>within 24 hours</strong>.</li>
              <li>Emergency pre-authorization request is expedited for instant approval.</li>
              <li>Settlement is processed directly with insurance at the time of discharge.</li>
            </ol>
          </div>
        </div>

        {/* Required Documents Checklist */}
        <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-xl">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#8cc63f] mb-3">
            <FileText size={15} />
            <span>Documents Required at Insurance Desk</span>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs text-slate-200 font-bold">
            <div className="flex items-center gap-2 p-3 rounded-xl bg-white/10 border border-white/15">
              <CheckCircle2 size={16} className="text-[#8cc63f] flex-shrink-0" />
              <span>Health Insurance TPA E-Card</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-white/10 border border-white/15">
              <CheckCircle2 size={16} className="text-[#8cc63f] flex-shrink-0" />
              <span>Valid Government Photo ID</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-white/10 border border-white/15">
              <CheckCircle2 size={16} className="text-[#8cc63f] flex-shrink-0" />
              <span>Doctor’s Prescription & Advice</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-white/10 border border-white/15">
              <CheckCircle2 size={16} className="text-[#8cc63f] flex-shrink-0" />
              <span>Relevant Diagnostic Lab Reports</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DIRECTORY OF ALL EMPANELLED INSURANCE & TPAS */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 border-y border-slate-200/90 py-16 sm:py-24 relative overflow-hidden">
        {/* Subtle background glow accents */}
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-[#8cc63f]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10 px-4 sm:px-6">
          {/* Section Header & Search */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0095da]/10 border border-[#0095da]/20 text-xs font-black uppercase tracking-widest text-[#0095da]">
                <ShieldCheck size={14} />
                <span>Empanelled Network</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                List Of Insurance Companies &amp; TPAs
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-2xl leading-relaxed">
                Empanelled partners providing seamless cashless medical settlements and rapid pre-authorization at Billroth Hospitals.
              </p>
            </div>

            {/* Live Search Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="relative min-w-[260px] sm:min-w-[320px]">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search insurer, PSU, or TPA name..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm font-bold text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0095da] shadow-xs transition-all"
                />
                {search && (
                  <button
                    onClick={() => setSearch('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Category Filter Pills with Counter Badges */}
          <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-4 mb-8">
            {categories.map((cat) => {
              const count = cat === 'All Providers'
                ? tpaList.length
                : tpaList.filter((item) => item.type === cat).length;
              const isSelected = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold uppercase tracking-wider whitespace-nowrap transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-[#0095da] text-white shadow-lg shadow-[#0095da]/25'
                      : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/90 shadow-2xs'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-black ${
                      isSelected
                        ? 'bg-white/25 text-white'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Counter Strip */}
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-6 px-1">
            <span>
              Showing <strong className="text-slate-900">{filteredList.length}</strong> cashless partners
              {selectedCategory !== 'All Providers' && ` in ${selectedCategory}`}
            </span>
            <span className="text-[11px] text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              100% Cashless Empanelled
            </span>
          </div>

          {/* Empty State */}
          {filteredList.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 max-w-md mx-auto p-8 shadow-xs">
              <Building2 size={40} className="text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800 mb-1">No insurance provider found</h3>
              <p className="text-xs text-slate-500 mb-4">
                We could not find any provider matching "{search}". Try searching for another name or reset filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All Providers');
                  setSearch('');
                }}
                className="px-4 py-2 bg-[#0095da] text-white text-xs font-bold rounded-xl"
              >
                Reset Search
              </button>
            </div>
          ) : (
            /* Trending Providers Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
              {filteredList.map((item, idx) => {
                const imageUrl = `https://billrothhospitals.com/wp-content/uploads/2024/03/TPA-01-${item.logoIndex}.jpg`;

                // Badge styling based on provider type
                const isGovt = item.type.includes('Government') || item.type.includes('PSU');
                const isTpa = item.type.includes('Third Party') || item.type.includes('TPA');
                const badgeColor = isGovt
                  ? 'bg-amber-50 text-amber-800 border-amber-200/80'
                  : isTpa
                  ? 'bg-purple-50 text-purple-700 border-purple-200/80'
                  : 'bg-sky-50 text-[#0095da] border-sky-200/80';

                const shortType = isGovt
                  ? 'Govt / PSU'
                  : isTpa
                  ? 'TPA Partner'
                  : 'Private Insurer';

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: Math.min(idx * 0.015, 0.3) }}
                    whileHover={{ y: -5 }}
                    className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-[#0095da]/50 hover:shadow-xl hover:shadow-sky-950/10 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                  >
                    {/* Top hover gradient accent line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0095da] via-[#10a877] to-[#8cc63f] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="space-y-3.5">
                      {/* Top Header: Logo + Type Badge */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="w-14 h-14 rounded-xl overflow-hidden bg-white border border-slate-100 shadow-sm flex-shrink-0 flex items-center justify-center p-1.5 group-hover:scale-105 group-hover:border-[#0095da]/30 transition-all duration-300">
                          <img
                            src={imageUrl}
                            alt={item.name}
                            className="max-h-full max-w-full object-contain filter brightness-95 group-hover:brightness-105 transition-all"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.parentElement.innerHTML = `
                                <div class="w-full h-full rounded-lg bg-sky-50 text-[#0095da] flex items-center justify-center font-black text-xs">
                                  ${item.name.substring(0, 2).toUpperCase()}
                                </div>
                              `;
                            }}
                          />
                        </div>

                        <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md border ${badgeColor} whitespace-nowrap`}>
                          {shortType}
                        </span>
                      </div>

                      {/* Insurer Name */}
                      <div>
                        <h4 className="text-sm font-black text-slate-900 group-hover:text-[#0095da] transition-colors leading-snug line-clamp-2 min-h-[38px]">
                          {item.name}
                        </h4>
                        <span className="text-[11px] font-medium text-slate-400 block truncate mt-0.5">
                          {item.type}
                        </span>
                      </div>
                    </div>

                    {/* Footer Status & Pre-Auth Indicator */}
                    <div className="pt-3.5 border-t border-slate-100 mt-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-black text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        <CheckCircle2 size={12} className="text-emerald-600" />
                        <span>Cashless Active</span>
                      </span>

                      <span className="text-[11px] font-bold text-slate-400 group-hover:text-[#0095da] flex items-center gap-1 transition-colors">
                        <span>Pre-Auth</span>
                        <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 4. TPA CLAIM ASSISTANCE INQUIRY FORM */}
      <section className="container-custom py-16 sm:py-24">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl sm:rounded-[36px] p-6 sm:p-10 lg:p-14 border border-slate-200 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-[#0095da] text-xs font-black uppercase tracking-wider mb-2">
                <CreditCard size={14} />
                <span>Pre-Authorization Help</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                TPA Pre-Auth & Claim Inquiry
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Have questions about your insurance policy coverage or need assistance with cashless admission? Our insurance coordinators are here to assist.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-lg font-black text-emerald-900">Inquiry Submitted Successfully!</h3>
                <p className="text-xs sm:text-sm text-emerald-700">
                  Our TPA Coordinator will contact you shortly to verify your policy eligibility and pre-auth documentation.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-bold text-slate-700">Patient Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.patientName}
                      onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0095da] focus:ring-2 focus:ring-[#0095da]/20"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-bold text-slate-700">Insurance Company / TPA Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Star Health / Medi Assist"
                      value={formData.insuranceCompany}
                      onChange={(e) => setFormData({ ...formData, insuranceCompany: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0095da] focus:ring-2 focus:ring-[#0095da]/20"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-bold text-slate-700">Policy / TPA Card Number</label>
                    <input
                      type="text"
                      placeholder="e.g. POL12345678"
                      value={formData.policyNumber}
                      onChange={(e) => setFormData({ ...formData, policyNumber: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0095da] focus:ring-2 focus:ring-[#0095da]/20"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-bold text-slate-700">Contact Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98400 12345"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0095da] focus:ring-2 focus:ring-[#0095da]/20"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-bold text-slate-700">Admission Type</label>
                    <select
                      value={formData.admissionType}
                      onChange={(e) => setFormData({ ...formData, admissionType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0095da] focus:ring-2 focus:ring-[#0095da]/20 bg-white"
                    >
                      <option value="Planned Admission">Planned Admission (Upcoming)</option>
                      <option value="Emergency Admission">Emergency Admission</option>
                      <option value="Policy Check">General Coverage Verification</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-bold text-slate-700">Treatment / Surgery Details & Query</label>
                  <textarea
                    rows={3}
                    placeholder="Provide doctor recommendation or specific insurance questions..."
                    value={formData.query}
                    onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0095da] focus:ring-2 focus:ring-[#0095da]/20"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-[#0095da]/20 hover:shadow-xl transition-all active:scale-98 flex items-center justify-center gap-2"
                  style={{
                    background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)'
                  }}
                >
                  <Send size={15} />
                  <span>Submit TPA Pre-Auth Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TPAs;
