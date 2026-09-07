import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, ShieldCheck, Scale, AlertCircle, RefreshCw, 
  Lock, CreditCard, Gavel, Shield, Edit3, Printer, 
  Phone, Mail, CheckCircle2, ChevronRight, Search
} from 'lucide-react';
import { termsData } from '../data/termsData';

const iconMap = {
  FileText: FileText,
  CreditCard: CreditCard,
  ShieldCheck: ShieldCheck,
  AlertCircle: AlertCircle,
  Scale: Scale,
  Gavel: Gavel,
  RefreshCw: RefreshCw,
  Lock: Lock,
  Shield: Shield,
  Edit3: Edit3
};

const TermsAndConditions = () => {
  const [activeSectionId, setActiveSectionId] = useState(termsData.sections[0].id);
  const [searchFilter, setSearchFilter] = useState('');

  const scrollToSection = (id) => {
    setActiveSectionId(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const filteredSections = termsData.sections.filter((sec) => {
    if (!searchFilter.trim()) return true;
    const q = searchFilter.toLowerCase();
    return (
      sec.title.toLowerCase().includes(q) ||
      sec.content.some((c) => c.toLowerCase().includes(q))
    );
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Hero Header */}
      <section 
        className="relative text-white py-14 md:py-20 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #002d4c 0%, #004870 30%, #00689b 60%, #0087bf 85%, #0095da 100%)',
        }}
      >
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#8cc63f] text-xs font-black uppercase tracking-wider mb-4">
            <Scale size={14} />
            <span>Billroth Hospitals Legal Center</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Terms &amp; Conditions
          </h1>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal max-w-2xl mx-auto mb-6">
            Official guidelines, online payment policies, refund &amp; dispute procedures, and data security disclosures for Billroth Hospitals Pvt Ltd.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-white/90">
            <span className="bg-white/10 px-3 py-1 rounded-full border border-white/20">
              Effective Date: {termsData.effectiveDate}
            </span>
            <span className="bg-white/10 px-3 py-1 rounded-full border border-white/20">
              Governing Jurisdiction: Chennai, India
            </span>
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 bg-[#8cc63f] text-[#002d4c] px-4 py-1.5 rounded-full font-black uppercase tracking-wider hover:brightness-110 transition-all shadow-md cursor-pointer"
            >
              <Printer size={13} />
              <span>Print Terms</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Main Content Layout */}
      <section className="container-custom py-10 md:py-16">
        {/* Quick Search */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search legal clauses (e.g. refund, card, arbitration)..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 text-sm font-medium shadow-xs focus:outline-hidden focus:ring-2 focus:ring-[#0095da]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Sticky Table of Contents (Desktop) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-28 space-y-2">
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
              <div className="text-xs font-black uppercase tracking-wider text-slate-400 px-3 py-2 border-b border-slate-100 mb-2">
                Table of Contents
              </div>
              <nav className="space-y-1">
                {termsData.sections.map((sec) => {
                  const Icon = iconMap[sec.icon] || FileText;
                  const isActive = activeSectionId === sec.id;
                  return (
                    <button
                      key={sec.id}
                      type="button"
                      onClick={() => scrollToSection(sec.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-left transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#0095da] text-white shadow-xs'
                          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      <Icon size={15} className={isActive ? 'text-white' : 'text-[#0095da]'} />
                      <span className="line-clamp-1">{sec.title}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Billing Help Card */}
            <div className="bg-gradient-to-br from-[#002d4c] to-[#005a87] text-white p-5 rounded-2xl shadow-md space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#8cc63f] flex items-center gap-1.5">
                <ShieldCheck size={16} />
                <span>Billing &amp; Payment Support</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed font-normal">
                For payment clarification, chargeback validation, or hospital billing counters:
              </p>
              <div className="space-y-1.5 text-xs font-bold">
                <div className="flex items-center gap-2">
                  <Phone size={13} className="text-[#8cc63f]" />
                  <a href="tel:04426643000" className="hover:underline">+91 44 2664 3000</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={13} className="text-[#8cc63f]" />
                  <a href="mailto:info@billrothhospitals.com" className="hover:underline">info@billrothhospitals.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Sections */}
          <div className="lg:col-span-8 space-y-8">
            {filteredSections.map((sec, idx) => {
              const Icon = iconMap[sec.icon] || FileText;
              return (
                <motion.article
                  key={sec.id}
                  id={sec.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm scroll-mt-28 space-y-4"
                >
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0095da]/10 text-[#0095da] flex items-center justify-center flex-shrink-0">
                      <Icon size={20} />
                    </div>
                    <h2 className="text-lg sm:text-xl font-black text-slate-900">
                      {sec.title}
                    </h2>
                  </div>

                  <div className="space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {sec.content.map((paragraph, pIdx) => (
                      <p key={pIdx}>
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Contextual callouts for critical sections */}
                  {sec.id === 'refund-policy' && (
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl space-y-1 mt-4">
                      <div className="text-xs font-black uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                        <AlertCircle size={15} className="text-amber-600" />
                        <span>Important Refund Timeline</span>
                      </div>
                      <p className="text-xs text-amber-900 leading-relaxed font-normal">
                        In case of an unsuccessful transaction where funds are deducted but not credited to the hospital, the amount will be automatically refunded to your original source of payment within <strong>5 to 7 working days</strong>.
                      </p>
                    </div>
                  )}

                  {sec.id === 'governing-law' && (
                    <div className="bg-sky-50 border-l-4 border-[#0095da] p-4 rounded-r-xl space-y-1 mt-4">
                      <div className="text-xs font-black uppercase tracking-wider text-sky-950 flex items-center gap-1.5">
                        <Gavel size={15} className="text-[#0095da]" />
                        <span>Exclusive Chennai Territorial Jurisdiction</span>
                      </div>
                      <p className="text-xs text-sky-950 leading-relaxed font-normal">
                        All disputes shall be governed solely by Indian laws and submitted to arbitration in Chennai, Tamil Nadu under the Indian Arbitration &amp; Conciliation Act, 1996.
                      </p>
                    </div>
                  )}

                  {sec.id === 'security' && (
                    <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-xl space-y-1 mt-4">
                      <div className="text-xs font-black uppercase tracking-wider text-emerald-950 flex items-center gap-1.5">
                        <ShieldCheck size={15} className="text-emerald-600" />
                        <span>256-Bit SSL End-to-End Encryption</span>
                      </div>
                      <p className="text-xs text-emerald-950 leading-relaxed font-normal">
                        All transaction data is transmitted over encrypted channels compliant with PCI-DSS guidelines. Billroth Hospitals never stores your debit/credit card CVV or PIN numbers.
                      </p>
                    </div>
                  )}
                </motion.article>
              );
            })}

            {filteredSections.length === 0 && (
              <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
                <Scale size={48} className="text-slate-300 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-slate-800 mb-1">No Matching Legal Clauses</h3>
                <p className="text-sm text-slate-500 mb-4">
                  We could not find terms matching "{searchFilter}".
                </p>
                <button
                  type="button"
                  onClick={() => setSearchFilter('')}
                  className="px-4 py-2 rounded-xl bg-[#0095da] text-white text-xs font-bold"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
