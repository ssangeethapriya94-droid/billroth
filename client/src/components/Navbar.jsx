import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronRight, Phone, Calendar, ArrowRight, Clock, Sparkles, Building2, Stethoscope, ShieldCheck } from 'lucide-react';
import { navLinks } from '../data/data';
import { allSpecialties } from '../data/departmentsData';
import BillrothLogo from './BillrothLogo';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [mobileExpandedSub, setMobileExpandedSub] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Perfectly balance specialties across 4 even columns (8, 7, 7, 7)
  const col1 = allSpecialties.slice(0, 8);
  const col2 = allSpecialties.slice(8, 15);
  const col3 = allSpecialties.slice(15, 22);
  const col4 = allSpecialties.slice(22, 29);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
    setMobileExpandedSub(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
        setActiveSubDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md transition-shadow duration-300" ref={dropdownRef}>
      {/* 1. Main White Header Bar with Logo and Quick Contact CTAs */}
      <div className="container-custom py-2 sm:py-3 flex items-center justify-between gap-2 sm:gap-4 px-3 sm:px-6">
        {/* Responsive Billroth Hospitals Logo */}
        <Link to="/" className="flex items-center group py-0.5 shrink-0" aria-label="Billroth Hospitals Home">
          <BillrothLogo className="h-9 sm:h-11 md:h-12 lg:h-14" />
        </Link>

        {/* Right Info & CTA Header Block (Desktop) */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7 shrink-0">
          {/* Quick Helpline */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-sky-50 text-[#0095da] flex items-center justify-center shrink-0 shadow-xs">
              <Phone size={18} />
            </div>
            <div className="text-left">
              <div className="text-[10px] uppercase font-extrabold tracking-wider text-slate-400">
                24/7 Helpline
              </div>
              <a
                href="tel:04426643000"
                className="text-xs xl:text-sm font-black text-slate-800 hover:text-[#0095da] transition-colors"
              >
                +91 44 2664 3000
              </a>
            </div>
          </div>

          {/* 24/7 Emergency Indicator */}
          <div className="flex items-center gap-3 border-l border-slate-200 pl-5 xl:pl-7">
            <div className="w-10 h-10 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 shadow-xs">
              <Clock size={18} className="animate-pulse" />
            </div>
            <div className="text-left">
              <div className="text-[10px] uppercase font-extrabold tracking-wider text-rose-600 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                Emergency 24x7
              </div>
              <a
                href="tel:04426264000"
                className="text-xs xl:text-sm font-black text-rose-600 hover:underline"
              >
                044-26264000
              </a>
            </div>
          </div>

          {/* Primary Book Appointment CTA */}
          <Link
            to="/appointment"
            className="relative overflow-hidden text-white font-black text-xs uppercase tracking-wider px-5 xl:px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 group active:scale-95"
            style={{
              background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)',
            }}
          >
            <Calendar size={15} />
            <span>Book Appointment</span>
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Header Actions (Call & Hamburger) */}
        <div className="flex lg:hidden items-center gap-2 shrink-0">
          <a
            href="tel:04426264000"
            className="flex items-center gap-1.5 bg-rose-600 hover:bg-rose-700 text-white text-[11px] font-black px-2.5 py-1.5 xs:px-3 xs:py-2 rounded-xl shadow-xs transition-colors active:scale-95"
            aria-label="Call Emergency"
          >
            <Clock size={14} className="animate-pulse" />
            <span className="hidden xs:inline">Emergency</span>
          </a>

          <button
            type="button"
            className="w-9 h-9 xs:w-10 xs:h-10 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer active:scale-95"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* 2. Signature Blue-to-Green Gradient Navigation Bar */}
      <div
        className="hidden lg:block text-white shadow-md relative"
        style={{
          background: 'linear-gradient(90deg, #0077c8 0%, #0095da 30%, #00a896 65%, #8cc63f 100%)',
        }}
      >
        <div className="container-custom">
          <nav className="flex items-stretch w-full">
            {navLinks.map((link) => {
              const isActive =
                link.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.path);

              const isSpecialties = link.label === 'OUR SPECIALITIES';

              return (
                <div key={link.label} className="relative flex items-stretch flex-1">
                  {link.dropdown || isSpecialties ? (
                    <div
                      onMouseEnter={() => setActiveDropdown(link.label)}
                      onMouseLeave={() => {
                        setActiveDropdown(null);
                        setActiveSubDropdown(null);
                      }}
                      className="relative flex items-stretch w-full"
                    >
                      <button
                        type="button"
                        className={`relative flex items-center justify-center gap-1 w-full py-4 text-[12px] xl:text-[13px] font-extrabold uppercase tracking-wide transition-all duration-150 select-none whitespace-nowrap cursor-pointer ${
                          isActive
                            ? 'bg-black/20 text-[#8cc63f]'
                            : 'text-white/95 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          size={11}
                          className={`transition-transform duration-200 shrink-0 ${
                            activeDropdown === link.label ? 'rotate-180 text-[#8cc63f]' : 'text-white/80'
                          }`}
                        />
                        {isActive && (
                          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#8cc63f]" />
                        )}
                      </button>

                      {/* Dropdown Menu (Standard vs 4-Column Mega Menu vs Facilities with Sub-flyout) */}
                      <AnimatePresence>
                        {activeDropdown === link.label && (
                          isSpecialties ? (
                            /* 4-COLUMN MEGA MENU MATCHING USER SCREENSHOT */
                            <motion.div
                              initial={{ opacity: 0, y: 6, scale: 0.98 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 6, scale: 0.98 }}
                              transition={{ duration: 0.18 }}
                              className="absolute top-full -left-52 xl:-left-44 w-[1000px] xl:w-[1120px] bg-white rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2),0_0_0_1px_rgba(0,0,0,0.06)] border border-slate-100 p-6 xl:p-7 z-50 text-slate-800 backdrop-blur-md overflow-hidden"
                            >
                              {/* Top Signature Gradient Accent Bar */}
                              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0077c8] via-[#00a896] to-[#8cc63f]" />

                              {/* Mega Menu Top Header */}
                              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-100">
                                <div className="flex items-center gap-2.5">
                                  <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#0095da] flex items-center justify-center font-bold shadow-xs">
                                    <Stethoscope size={16} />
                                  </div>
                                  <div>
                                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-800">
                                      Centres of Clinical Excellence
                                    </h4>
                                    <p className="text-[11px] font-medium text-slate-400">
                                      Super-speciality departments &amp; dedicated surgical institutes
                                    </p>
                                  </div>
                                </div>
                                <div className="hidden sm:flex items-center gap-2 text-[11px] font-bold text-slate-600 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200/70">
                                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                  <span>24x7 Emergency &amp; Trauma Care</span>
                                </div>
                              </div>

                              {/* 4 Balanced Columns */}
                              <div className="grid grid-cols-4 gap-x-3 xl:gap-x-4">
                                {[col1, col2, col3, col4].map((colList, colIdx) => (
                                  <div key={colIdx} className="space-y-1">
                                    {colList.map((dept) => (
                                      <Link
                                        key={dept.id}
                                        to={`/departments/${dept.slug}`}
                                        onClick={() => setActiveDropdown(null)}
                                        className="group flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[13px] xl:text-[13.5px] font-medium text-slate-700 hover:text-[#0095da] hover:bg-sky-50/80 transition-all duration-150"
                                      >
                                        <div className="flex items-center gap-2 min-w-0">
                                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#0095da] group-hover:scale-125 transition-all shrink-0" />
                                          <span className="truncate group-hover:translate-x-0.5 transition-transform duration-150 group-hover:font-semibold">
                                            {dept.name}
                                          </span>
                                        </div>
                                        <ChevronRight size={13} className="text-[#0095da] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0" />
                                      </Link>
                                    ))}
                                  </div>
                                ))}
                              </div>

                              {/* Mega Menu Footer Bar */}
                              <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                                  <ShieldCheck size={16} className="text-[#10a877]" />
                                  <span>32+ Medical &amp; Surgical Specialities across Shenoy Nagar &amp; RA Puram</span>
                                </div>
                                <Link
                                  to="/departments"
                                  onClick={() => setActiveDropdown(null)}
                                  className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#0095da] to-[#10a877] text-white text-xs font-bold shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all"
                                >
                                  <span>View All Specialities</span>
                                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                              </div>
                            </motion.div>
                          ) : (
                            /* STANDARD DROPDOWN & FACILITIES WITH SUB-FLYOUTS */
                            <motion.div
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 6 }}
                              transition={{ duration: 0.18 }}
                              className="absolute top-full left-0 min-w-[270px] bg-white rounded-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.18)] border border-slate-100 p-2 z-50 text-slate-800 overflow-visible"
                            >
                              <div className="h-0.5 bg-gradient-to-r from-[#0095da] via-[#10a877] to-[#8cc63f] rounded-full mb-1.5 -mx-1" />
                              {link.dropdown.map((item) => {
                                const hasSub = Boolean(item.subItems && item.subItems.length > 0);

                                return (
                                  <div
                                    key={item.label}
                                    className="relative"
                                    onMouseEnter={() => hasSub && setActiveSubDropdown(item.label)}
                                    onMouseLeave={() => hasSub && setActiveSubDropdown(null)}
                                  >
                                    <Link
                                      to={item.path}
                                      onClick={() => {
                                        setActiveDropdown(null);
                                        setActiveSubDropdown(null);
                                      }}
                                      className={`flex items-center justify-between px-3.5 py-2.5 text-[13px] font-semibold rounded-xl transition-all ${
                                        location.pathname === item.path
                                          ? 'bg-sky-50 text-[#0095da] font-bold'
                                          : 'text-slate-700 hover:text-[#0095da] hover:bg-sky-50/80'
                                      }`}
                                    >
                                      <span>{item.label}</span>
                                      {hasSub ? (
                                        <ChevronRight size={14} className="shrink-0 text-slate-400 group-hover:text-[#0095da]" />
                                      ) : null}
                                    </Link>

                                    {/* Flyout Submenu for Facilities */}
                                    {hasSub && (
                                      <AnimatePresence>
                                        {activeSubDropdown === item.label && (
                                          <motion.div
                                            initial={{ opacity: 0, x: -6 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -6 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute top-0 left-full ml-1.5 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 text-slate-800"
                                          >
                                            <div className="h-0.5 bg-gradient-to-r from-[#0095da] to-[#8cc63f] rounded-full mb-1.5 -mx-1" />
                                            {item.subItems.map((sub) => (
                                              <Link
                                                key={sub.label}
                                                to={sub.path}
                                                onClick={() => {
                                                  setActiveDropdown(null);
                                                  setActiveSubDropdown(null);
                                                }}
                                                className="group flex items-center justify-between px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#0095da] hover:bg-sky-50/80 rounded-xl transition-all"
                                              >
                                                <span>{sub.label}</span>
                                                <ArrowRight size={11} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#0095da]" />
                                              </Link>
                                            ))}
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                    )}
                                  </div>
                                );
                              })}
                            </motion.div>
                          )
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`relative flex items-center justify-center w-full py-4 text-[12px] xl:text-[13px] font-extrabold uppercase tracking-wide transition-all duration-150 select-none whitespace-nowrap ${
                        isActive
                          ? 'bg-black/20 text-[#8cc63f]'
                          : 'text-white/95 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && (
                        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#8cc63f]" />
                      )}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>

      {/* 3. Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden overflow-hidden border-t border-slate-200 bg-white shadow-2xl"
          >
            {/* Quick Contact Header inside Drawer */}
            <div className="bg-slate-50 border-b border-slate-200 p-3.5 flex items-center justify-between text-xs">
              <a href="tel:04426643000" className="flex items-center gap-1.5 text-[#0095da] font-bold">
                <Phone size={13} />
                <span>+91 44 2664 3000</span>
              </a>
              <a href="tel:04426264000" className="flex items-center gap-1.5 text-rose-600 font-bold">
                <Clock size={13} className="animate-pulse" />
                <span>044-26264000</span>
              </a>
            </div>

            <div className="p-3.5 space-y-1.5 max-h-[calc(100vh-120px)] overflow-y-auto">
              {navLinks.map((link) => {
                const isSpecialties = link.label === 'OUR SPECIALITIES';

                return (
                  <div key={link.label}>
                    {link.dropdown || isSpecialties ? (
                      <div>
                        <button
                          type="button"
                          onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                          className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer ${
                            activeDropdown === link.label ? 'bg-sky-50 text-[#0095da]' : 'text-slate-800 hover:bg-slate-50'
                          }`}
                        >
                          <span>{link.label}</span>
                          <ChevronDown
                            size={14}
                            className={`transition-transform duration-200 ${
                              activeDropdown === link.label ? 'rotate-180 text-[#0095da]' : 'text-slate-400'
                            }`}
                          />
                        </button>
                        
                        <AnimatePresence>
                          {activeDropdown === link.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-3 pr-1 space-y-1 overflow-hidden bg-slate-50/80 rounded-xl py-2 my-1 border border-slate-100 max-h-72 overflow-y-auto"
                            >
                              {isSpecialties ? (
                                allSpecialties.map((dept) => (
                                  <Link
                                    key={dept.id}
                                    to={`/departments/${dept.slug}`}
                                    onClick={() => setMobileOpen(false)}
                                    className="block px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-[#0095da] hover:bg-white rounded-lg transition-colors"
                                  >
                                    {dept.name}
                                  </Link>
                                ))
                              ) : (
                                link.dropdown.map((item) => {
                                  const hasSubItems = Boolean(item.subItems && item.subItems.length > 0);
                                  return (
                                    <div key={item.label}>
                                      {hasSubItems ? (
                                        <div>
                                          <button
                                            type="button"
                                            onClick={() =>
                                              setMobileExpandedSub(
                                                mobileExpandedSub === item.label ? null : item.label
                                              )
                                            }
                                            className="w-full flex items-center justify-between px-3 py-1.5 text-xs font-bold text-slate-700 hover:text-[#0095da] rounded-lg transition-colors cursor-pointer"
                                          >
                                            <span>{item.label}</span>
                                            <ChevronDown
                                              size={13}
                                              className={`transition-transform duration-200 ${
                                                mobileExpandedSub === item.label ? 'rotate-180 text-[#0095da]' : 'text-slate-400'
                                              }`}
                                            />
                                          </button>
                                          <AnimatePresence>
                                            {mobileExpandedSub === item.label && (
                                              <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="pl-3 pr-1 space-y-1 bg-white rounded-lg py-1.5 my-1 border border-slate-100"
                                              >
                                                {item.subItems.map((sub) => (
                                                  <Link
                                                    key={sub.label}
                                                    to={sub.path}
                                                    onClick={() => setMobileOpen(false)}
                                                    className="block px-2.5 py-1.5 text-[11px] font-semibold text-slate-600 hover:text-[#0095da] transition-colors"
                                                  >
                                                    • {sub.label}
                                                  </Link>
                                                ))}
                                              </motion.div>
                                            )}
                                          </AnimatePresence>
                                        </div>
                                      ) : (
                                        <Link
                                          to={item.path}
                                          onClick={() => setMobileOpen(false)}
                                          className="block px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-[#0095da] hover:bg-white rounded-lg transition-colors"
                                        >
                                          {item.label}
                                        </Link>
                                      )}
                                    </div>
                                  );
                                })
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.path}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 hover:bg-slate-50 rounded-xl transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                );
              })}

              <div className="pt-3 border-t border-slate-100 mt-2">
                <Link
                  to="/appointment"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md active:scale-95 transition-all"
                  style={{
                    background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)',
                  }}
                >
                  <Calendar size={15} /> Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
