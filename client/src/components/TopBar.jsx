import { Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { hospitalInfo } from '../data/data';

// Inline brand SVGs
const FbIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const TwIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);
const YtIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
);
const IgIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TopBar = () => {
  return (
    <div className="bg-[#0b1b3d] text-white text-xs border-b border-white/10 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between">
        {/* Left: Contact info */}
        <div className="flex items-center gap-6">
          <a
            href={`tel:${hospitalInfo.phone1}`}
            className="flex items-center gap-1.5 text-slate-200 hover:text-[#a6ce39] transition-colors"
          >
            <Phone size={13} className="text-[#a6ce39]" />
            <span className="font-medium">{hospitalInfo.phone1}</span>
          </a>
          <a
            href={`mailto:${hospitalInfo.email}`}
            className="flex items-center gap-1.5 text-slate-200 hover:text-[#a6ce39] transition-colors"
          >
            <Mail size={13} className="text-[#a6ce39]" />
            <span className="font-medium">{hospitalInfo.email}</span>
          </a>
          <div className="flex items-center gap-1.5 text-amber-300 font-semibold">
            <Clock size={13} />
            <span>24/7 Emergency: {hospitalInfo.emergency}</span>
          </div>
        </div>

        {/* Right: NABH Accredited & Social links */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1 text-emerald-400 font-medium text-[11px] bg-emerald-950/40 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
            <ShieldCheck size={12} />
            <span>NABH & NABL Accredited</span>
          </div>
          <div className="flex items-center gap-2.5 pl-3 border-l border-white/15">
            <span className="text-slate-400 text-[11px]">Follow us:</span>
            <a
              href={hospitalInfo.social.facebook}
              target="_blank"
              rel="noreferrer"
              className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#2f5aae] flex items-center justify-center text-slate-200 hover:text-white transition-all"
              aria-label="Facebook"
            >
              <FbIcon />
            </a>
            <a
              href={hospitalInfo.social.twitter}
              target="_blank"
              rel="noreferrer"
              className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#0095da] flex items-center justify-center text-slate-200 hover:text-white transition-all"
              aria-label="Twitter"
            >
              <TwIcon />
            </a>
            <a
              href={hospitalInfo.social.youtube}
              target="_blank"
              rel="noreferrer"
              className="w-6 h-6 rounded-full bg-white/10 hover:bg-red-600 flex items-center justify-center text-slate-200 hover:text-white transition-all"
              aria-label="YouTube"
            >
              <YtIcon />
            </a>
            <a
              href={hospitalInfo.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="w-6 h-6 rounded-full bg-white/10 hover:bg-pink-600 flex items-center justify-center text-slate-200 hover:text-white transition-all"
              aria-label="Instagram"
            >
              <IgIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
