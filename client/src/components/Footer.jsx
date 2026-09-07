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
  <svg viewBox="0 0 24 24" width="16" height="16">
    <path
      fill="white"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z M9.75 8.98L15.5 12L9.75 15.02Z"
    />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#cd201f" />
  </svg>
);
const IgIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const LiIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Footer = () => {
  return (
    <footer
      className="text-white relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #002d4c 0%, #004870 30%, #00689b 60%, #0087bf 85%, #0095da 100%)',
      }}
    >
      {/* Background Soft Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#8cc63f]/20 rounded-full blur-[90px]" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#0095da]/30 rounded-full blur-[90px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>
      
      {/* Top Banner inside Footer */}
      <div
        className="py-7 shadow-lg relative z-10 border-b border-white/15"
        style={{
          background: 'linear-gradient(90deg, #004b77 0%, #0077b6 35%, #0095da 65%, #3cb878 85%, #8cc63f 100%)',
        }}
      >
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white/20 text-white flex items-center justify-center flex-shrink-0 shadow-md animate-pulse">
              <Phone size={24} />
            </div>
            <div>
              <div className="text-xs font-black text-[#8cc63f] uppercase tracking-widest drop-shadow-sm">24/7 Emergency Helpline</div>
              <a href={`tel:${hospitalInfo.emergency}`} className="text-2xl sm:text-3xl font-black text-white hover:text-sky-100 transition-colors">
                {hospitalInfo.emergency}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/appointment"
              className="text-white font-black px-7 py-3.5 rounded-full text-xs uppercase tracking-wider shadow-xl shadow-sky-950/30 hover:shadow-2xl transition-all active:scale-95"
              style={{
                background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)',
              }}
            >
              Book an Appointment
            </Link>
            <a
              href={`tel:${hospitalInfo.phone1}`}
              className="bg-white/20 hover:bg-white/30 text-white font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider border border-white/30 backdrop-blur-sm transition-all"
            >
              Call Us: {hospitalInfo.phone1}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="container-custom py-16 2xl:py-24 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 2xl:gap-14">
          
          {/* Col 1: Exact Logo & About Hospital (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block group" aria-label="Billroth Hospitals Home">
              <BillrothLogo className="h-10 sm:h-12" light={true} />
            </Link>

            <p className="text-white/90 text-sm leading-relaxed font-normal">
              Established in 1990 by Dr. V. Jeganathan. A premier 350-bedded super-specialty hospital chain in Chennai providing NABH-accredited tertiary medical care.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#8cc63f] font-bold bg-white/15 px-4 py-2 rounded-xl border border-white/20 w-fit backdrop-blur-sm shadow-sm">
              <ShieldCheck size={16} />
              <span>NABH & NABL Certified Hospital</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={hospitalInfo.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-[#1877f2] hover:brightness-110 text-white flex items-center justify-center transition-all hover:scale-110 shadow-md"
              >
                <FbIcon />
              </a>
              <a
                href={hospitalInfo.social.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 rounded-xl bg-[#1da1f2] hover:brightness-110 text-white flex items-center justify-center transition-all hover:scale-110 shadow-md"
              >
                <TwIcon />
              </a>
              <a
                href={hospitalInfo.social.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-xl bg-[#cd201f] hover:brightness-110 text-white flex items-center justify-center transition-all hover:scale-110 shadow-md"
              >
                <YtIcon />
              </a>
              <a
                href={hospitalInfo.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:brightness-110 text-white flex items-center justify-center transition-all hover:scale-110 shadow-md"
              >
                <IgIcon />
              </a>
              <a
                href={hospitalInfo.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-[#0077b5] hover:brightness-110 text-white flex items-center justify-center transition-all hover:scale-110 shadow-md"
              >
                <LiIcon />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-[#8cc63f] border-b border-white/20 pb-2 drop-shadow-sm">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs font-semibold uppercase tracking-wider">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-white/90 hover:text-[#8cc63f] transition-colors flex items-center gap-2 group"
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
            <h3 className="text-xs font-black uppercase tracking-widest text-[#8cc63f] border-b border-white/20 pb-2 drop-shadow-sm">
              Specialties
            </h3>
            <ul className="space-y-2 text-sm">
              {departments.slice(0, 7).map((dept) => (
                <li key={dept.id}>
                  <Link
                    to={`/departments/${dept.slug}`}
                    className="text-white/90 hover:text-[#8cc63f] transition-colors flex items-center gap-2 group text-xs font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/70 group-hover:bg-[#8cc63f] transition-colors" />
                    <span className="truncate">{dept.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/departments" className="text-xs font-black text-[#8cc63f] hover:text-white hover:underline block pt-1 transition-colors">
                  View All Specialties →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-[#8cc63f] border-b border-white/20 pb-2 drop-shadow-sm">
              Hospital Location
            </h3>
            <div className="space-y-3.5 text-xs sm:text-sm text-white/90">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#8cc63f] flex-shrink-0 mt-1" />
                <span>{hospitalInfo.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#8cc63f] flex-shrink-0" />
                <a href={`tel:${hospitalInfo.phone1}`} className="hover:text-[#8cc63f] transition-colors font-bold text-white">
                  {hospitalInfo.phone1}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#8cc63f] flex-shrink-0" />
                <a href={`mailto:${hospitalInfo.email}`} className="hover:text-[#8cc63f] transition-colors text-white">
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
      <div className="border-t border-white/20 py-6 bg-[#001f35]/90 backdrop-blur-md relative z-10">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/80">
          <div>
            © {new Date().getFullYear()} Billroth Hospitals. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Providing compassionate care for over</span>
            <span className="font-bold text-[#8cc63f]">33+ Years</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            <Link to="/newsletter" className="hover:text-[#8cc63f] transition-colors">Newsletter</Link>
            <Link to="/events" className="hover:text-[#8cc63f] transition-colors">Events</Link>
            <Link to="/terms-and-conditions" className="hover:text-[#8cc63f] transition-colors">Terms &amp; Conditions</Link>
            <Link to="/privacy-policy" className="hover:text-[#8cc63f] transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
