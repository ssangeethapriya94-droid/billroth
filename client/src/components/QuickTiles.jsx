import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  HeartPulse, 
  Newspaper, 
  ArrowRight, 
  Sparkles, 
  Award, 
  ShieldCheck, 
  Activity,
  CheckCircle2
} from 'lucide-react';

const tiles = [
  {
    id: 'academics',
    icon: GraduationCap,
    title: 'Academics & MEM',
    subtitle: 'Excellence in Medical Education',
    description:
      '3-Year Masters in Emergency Medicine (SEMI affiliated) with 16-bed Level-1 ED residency and bedside POCT training.',
    link: '/academics',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    tag: 'Academic Wing',
    badge: 'SEMI & NMC Approved',
    pillColor: 'from-blue-600 to-sky-500',
    chips: ['3-Yr MEM Residency', 'Level-1 Emergency Care', 'Hands-on POCT'],
  },
  {
    id: 'health-packages',
    icon: HeartPulse,
    title: 'Health Packages',
    subtitle: 'Preventive Health Screening',
    description:
      '12+ comprehensive master health packages from Basic to Platinum with fast same-day laboratory reports.',
    link: '/health-checkup',
    image:
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
    tag: '12+ Packages',
    badge: 'Starts ₹1,200',
    pillColor: 'from-emerald-600 to-teal-500',
    chips: ['Executive & Master Plans', 'Cardiac & Diabetic Care', 'Same-Day Reports'],
  },
  {
    id: 'news-events',
    icon: Newspaper,
    title: 'News & Events',
    subtitle: 'Milestones & CME Conferences',
    description:
      'Stay updated with Billroth’s clinical milestones, international conferences, health camps, and scientific research.',
    link: '/events',
    image:
      'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800&q=80',
    tag: 'Latest Updates',
    badge: 'CME & News',
    pillColor: 'from-indigo-600 to-blue-500',
    chips: ['CME Conferences', 'Medical Workshops', 'Community Outreach'],
  },
];

const QuickTiles = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-10 sm:py-14 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/80 relative overflow-hidden">
      
      {/* Background Decorative Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-24 w-72 h-72 bg-sky-200/20 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 -left-24 w-72 h-72 bg-emerald-200/20 rounded-full blur-[80px]" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* Compact, High-Impact Section Header (Zero dead space) */}
        <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-9">
          <div className="inline-flex items-center gap-2 bg-sky-50/90 border border-sky-200/70 text-[#0095da] text-[11px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-xs mb-2">
            <Sparkles size={13} className="text-[#8cc63f] animate-pulse" />
            <span>Beyond Treatment • Total Well-being</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Explore <span className="text-[#0095da]">Billroth Care</span> &amp; Services
          </h2>
          
          <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
            Empowering health through advanced medical education, master screening packages, and clinical excellence.
          </p>
        </div>

        {/* 3-Card Grid with Trending Glass & Modern Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {tiles.map((tile, i) => (
            <motion.div
              key={tile.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(0,149,218,0.18)] transition-all duration-300 flex flex-col justify-between border border-slate-100 group hover:-translate-y-1.5"
            >
              <div>
                {/* Top Image Banner with Floating Glass Badges */}
                <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-900">
                  <img
                    src={tile.image}
                    alt={tile.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 opacity-95 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
                  
                  {/* Floating Glass Tag (Top Left) */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm border border-white/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0095da]" />
                      {tile.tag}
                    </span>
                  </div>

                  {/* Floating Highlight Pill (Bottom Right) */}
                  <div className="absolute bottom-3 right-3">
                    <span className="inline-flex items-center gap-1 bg-[#0095da]/95 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-full shadow-md border border-white/20">
                      <ShieldCheck size={12} className="text-[#8cc63f]" />
                      {tile.badge}
                    </span>
                  </div>
                </div>

                {/* Card Content (Compact & Punchy) */}
                <div className="p-4 sm:p-5">
                  {/* Subtitle / Category */}
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <tile.icon size={14} className="text-[#0095da] shrink-0" />
                    <span className="text-[10px] font-black text-[#0095da] uppercase tracking-wider truncate">
                      {tile.subtitle}
                    </span>
                  </div>

                  {/* Main Title */}
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-[#0095da] transition-colors leading-snug">
                    {tile.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed line-clamp-2">
                    {tile.description}
                  </p>

                  {/* Micro Feature Chips (Fills empty dead space with high-value info) */}
                  <div className="mt-3.5 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {tile.chips.map((chip, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-600 bg-slate-50 border border-slate-200/70 px-2.5 py-0.5 rounded-md"
                      >
                        <CheckCircle2 size={11} className="text-[#10a877] shrink-0" />
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer with IDENTICAL CTA Button on ALL cards */}
              <div className="p-4 sm:p-5 pt-0">
                <Link
                  to={tile.link}
                  className="relative overflow-hidden w-full py-3 px-5 rounded-xl sm:rounded-2xl font-black text-xs uppercase tracking-wider text-white shadow-[0_4px_14px_rgba(0,149,218,0.3)] hover:shadow-[0_8px_22px_rgba(0,149,218,0.45)] hover:brightness-105 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 text-center group/btn before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-700"
                  style={{
                    background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)',
                  }}
                >
                  <span className="relative z-10 font-black">VIEW MORE</span>
                  <ArrowRight size={14} className="relative z-10 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default QuickTiles;
