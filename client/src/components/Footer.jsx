import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Heart, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { hospitalInfo, navLinks, departments } from '../data/data';
import BillrothLogo from './BillrothLogo';

// Inline brand SVGs
const FbIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const TwIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);
const YtIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
);
const IgIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#062438] text-white border-t border-teal-900/50">
      
      {/* Top Banner inside Footer */}
      <div
        className="py-8 shadow-inner"
        style={{
          background: 'linear-gradient(90deg, #093c57 0%, #15729d 40%, #1e7d8c 70%, #2f8e6b 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white/20 text-white flex items-center justify-center flex-shrink-0 shadow-sm animate-pulse">
              <Phone size={24} />
            </div>
            <div>
              <div className="text-xs font-black text-[#8cc63f] uppercase tracking-widest">24/7 Emergency Helpline</div>
              <a href={`tel:${hospitalInfo.emergency}`} className="text-2xl sm:text-3xl font-black text-white hover:text-teal-200 transition-colors">
                {hospitalInfo.emergency}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/appointment"
              className="bg-[#8cc63f] hover:bg-[#7cb632] text-slate-950 font-black px-7 py-3.5 rounded-full text-xs uppercase tracking-wider shadow-lg transition-all active:scale-95"
            >
              Book an Appointment
            </Link>
            <a
              href={`tel:${hospitalInfo.phone1}`}
              className="bg-white/15 hover:bg-white/25 text-white font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider border border-white/20 transition-all"
            >
              Call Us: {hospitalInfo.phone1}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Exact Logo & About Hospital (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block">
              <BillrothLogo className="h-12" light={true} />
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed">
              Established in 1990 by Dr. V. Jeganathan. A premier 350-bedded super-specialty hospital chain in Chennai providing NABH-accredited tertiary medical care.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#8cc63f] font-semibold bg-white/5 px-3.5 py-2 rounded-xl border border-white/10 w-fit">
              <ShieldCheck size={16} />
              <span>NABH & NABL Certified Hospital</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              {[
                { Icon: FbIcon, href: hospitalInfo.social.facebook, label: 'Facebook' },
                { Icon: TwIcon, href: hospitalInfo.social.twitter, label: 'Twitter' },
                { Icon: YtIcon, href: hospitalInfo.social.youtube, label: 'YouTube' },
                { Icon: IgIcon, href: hospitalInfo.social.instagram, label: 'Instagram' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#0084c7] text-slate-300 hover:text-white flex items-center justify-center transition-all"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-[#8cc63f] border-b border-white/10 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs font-semibold uppercase tracking-wider">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-[#8cc63f] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8cc63f] group-hover:w-3 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Departments (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-[#8cc63f] border-b border-white/10 pb-2">
              Specialties
            </h3>
            <ul className="space-y-2 text-sm">
              {departments.slice(0, 7).map((dept) => (
                <li key={dept.id}>
                  <Link
                    to={`/departments/${dept.slug}`}
                    className="text-slate-300 hover:text-[#8cc63f] transition-colors flex items-center gap-2 group text-xs font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:bg-[#8cc63f] transition-colors" />
                    <span className="truncate">{dept.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/departments" className="text-xs font-bold text-[#8cc63f] hover:underline block pt-1">
                  View All Specialties →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-[#8cc63f] border-b border-white/10 pb-2">
              Hospital Location
            </h3>
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#8cc63f] flex-shrink-0 mt-1" />
                <span>{hospitalInfo.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#8cc63f] flex-shrink-0" />
                <a href={`tel:${hospitalInfo.phone1}`} className="hover:text-white transition-colors font-bold">
                  {hospitalInfo.phone1}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#8cc63f] flex-shrink-0" />
                <a href={`mailto:${hospitalInfo.email}`} className="hover:text-white transition-colors">
                  {hospitalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-[#8cc63f] flex-shrink-0" />
                <span>OPD: 8:00 AM – 8:00 PM (Emergency 24/7)</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/10 py-6 bg-[#031420]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Billroth Hospitals. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Providing compassionate care for over</span>
            <span className="font-bold text-[#8cc63f]">33+ Years</span>
          </div>
          <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
