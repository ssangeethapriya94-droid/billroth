import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Calendar, ArrowRight, Clock } from 'lucide-react';
import { hospitalInfo, navLinks } from '../data/data';
import BillrothLogo from './BillrothLogo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md transition-shadow duration-300" ref={dropdownRef}>
      
      {/* 1. Main White Header Bar with Logo and Quick Contact CTAs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 flex items-center justify-between">
        
        {/* Exact Billroth Hospitals Logo */}
        <Link to="/" className="flex items-center group py-0.5" aria-label="Billroth Hospitals Home">
          <BillrothLogo className="h-10 sm:h-12 md:h-14" />
        </Link>

        {/* Right Info & CTA Header Block (Desktop) */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7">
          
          {/* Quick Helpline */}
          <a
            href={`tel:${hospitalInfo.phone1}`}
            className="flex items-center gap-3 group text-left transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-sky-50 border border-sky-200/70 flex items-center justify-center text-[#0084c7] group-hover:bg-[#0084c7] group-hover:text-white transition-all shadow-sm flex-shrink-0">
              <Phone size={17} />
            </div>
            <div className="leading-tight">
              <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Helpline</span>
              <span className="text-sm font-extrabold text-slate-800 group-hover:text-[#0084c7] transition-colors">
                {hospitalInfo.phone1}
              </span>
            </div>
          </a>

          {/* 24/7 Emergency */}
          <div className="flex items-center gap-3 pl-5 border-l border-slate-200 text-left">
            <div className="w-10 h-10 rounded-full bg-red-50 border border-red-200/80 flex items-center justify-center text-red-500 shadow-sm animate-pulse flex-shrink-0">
              <Clock size={17} />
            </div>
            <div className="leading-tight">
              <span className="block text-[11px] font-bold text-red-500 uppercase tracking-wider">24/7 Emergency</span>
              <a
                href={`tel:${hospitalInfo.emergency}`}
                className="text-sm font-black text-slate-900 hover:text-red-600 transition-colors"
              >
                {hospitalInfo.emergency}
              </a>
            </div>
          </div>

          {/* Book Appointment CTA Button */}
          <Link
            to="/appointment"
            className="inline-flex items-center gap-2 px-5 xl:px-6 py-2.5 xl:py-3 rounded-full text-white font-extrabold text-xs tracking-wider uppercase shadow-md hover:shadow-lg transition-all active:scale-95 ml-1"
            style={{
              background: 'linear-gradient(90deg, #106c99 0%, #1a7888 50%, #2d9c66 100%)',
            }}
          >
            <Calendar size={14} />
            <span>Book Appointment</span>
          </Link>
        </div>

        {/* Mobile Header Right Actions (Call + Hamburger) */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${hospitalInfo.emergency}`}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-red-50 text-red-600 border border-red-200 text-xs font-bold"
            aria-label="Call Emergency"
          >
            <Clock size={14} className="animate-pulse" />
            <span className="hidden xs:inline">Emergency</span>
          </a>

          <button
            type="button"
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* 2. Signature Blue-to-Teal-Green Gradient Navigation Bar */}
      <div
        className="hidden lg:block text-white shadow-inner"
        style={{
          background: 'linear-gradient(90deg, #106c99 0%, #157b8e 25%, #1c8880 50%, #259273 75%, #2d9c66 100%)',
        }}
      >
        <div className="w-full px-4 lg:px-8 xl:px-12">
          <nav className="flex items-stretch w-full">

            {/* Nav Tabs — equal spacing across full width */}
            {navLinks.map((link) => {
              const isActive =
                link.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.path);

              return (
                <div key={link.label} className="relative flex items-stretch flex-1">
                  {link.dropdown ? (
                    <div
                      onMouseEnter={() => setActiveDropdown(link.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="relative flex items-stretch w-full"
                    >
                      <button
                        type="button"
                        className={`relative flex items-center justify-center gap-1 w-full py-5 text-[12px] xl:text-[13px] font-extrabold uppercase tracking-wide transition-all duration-150 select-none whitespace-nowrap ${
                          isActive
                            ? 'bg-black/25 text-[#a6ce39]'
                            : 'text-white/95 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          size={11}
                          className={`transition-transform duration-200 flex-shrink-0 ${
                            activeDropdown === link.label ? 'rotate-180 text-[#a6ce39]' : 'text-white/80'
                          }`}
                        />
                        {isActive && (
                          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#a6ce39]" />
                        )}
                      </button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {activeDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 4, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 4, scale: 0.98 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 w-64 bg-white rounded-b-xl shadow-2xl border border-slate-100 p-2 z-50 text-slate-800"
                          >
                            <div className="text-[10px] font-black text-slate-400 px-3 py-1.5 uppercase tracking-widest border-b border-slate-100 mb-1">
                              {link.label}
                            </div>
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.label}
                                to={item.path}
                                className="flex items-center justify-between px-3 py-2 text-xs font-bold text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-[#106c99] hover:to-[#1c8880] rounded-lg transition-all group"
                              >
                                <span>{item.label}</span>
                                <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`relative flex items-center justify-center w-full py-5 text-[12px] xl:text-[13px] font-extrabold uppercase tracking-wide transition-all duration-150 select-none whitespace-nowrap ${
                        isActive
                          ? 'bg-black/25 text-[#a6ce39]'
                          : 'text-white/95 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && (
                        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#a6ce39]" />
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
            className="lg:hidden overflow-hidden border-t border-slate-100 bg-slate-50 shadow-xl"
          >
            <div className="p-4 space-y-1.5 max-h-[calc(100vh-80px)] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.dropdown ? (
                    <div>
                      <button
                        type="button"
                        onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors ${
                          activeDropdown === link.label ? 'bg-white text-[#0084c7] shadow-sm' : 'text-slate-800 hover:bg-white'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          size={15}
                          className={`transition-transform duration-200 ${
                            activeDropdown === link.label ? 'rotate-180 text-[#0084c7]' : 'text-slate-400'
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 pr-2 space-y-1 overflow-hidden bg-white rounded-xl py-2 my-1 border border-slate-100"
                          >
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.label}
                                to={item.path}
                                className="block px-3 py-2.5 text-xs font-semibold text-slate-600 hover:text-[#0084c7] hover:bg-slate-50 rounded-lg transition-colors"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors ${
                        location.pathname === link.path
                          ? 'text-white bg-[#0084c7] shadow-sm'
                          : 'text-slate-800 hover:bg-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Quick Action Buttons */}
              <div className="pt-4 border-t border-slate-200 mt-3 space-y-2.5">
                <a
                  href={`tel:${hospitalInfo.emergency}`}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-red-50 text-red-600 text-xs font-bold border border-red-200 shadow-sm"
                >
                  <Clock size={15} />
                  <span>24/7 Emergency: {hospitalInfo.emergency}</span>
                </a>
                <Link
                  to="/appointment"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-white text-xs font-extrabold uppercase tracking-wider shadow-md active:scale-95 transition-all"
                  style={{
                    background: 'linear-gradient(90deg, #106c99 0%, #1a7888 50%, #2d9c66 100%)',
                  }}
                >
                  <Calendar size={15} />
                  <span>Book Appointment</span>
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
