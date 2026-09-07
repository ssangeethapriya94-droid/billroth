import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { 
  MessageSquarePlus, 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  ShieldCheck, 
  FileCheck2, 
  Stethoscope, 
  Sparkles,
  Clock3,
  HeartPulse,
  Activity
} from 'lucide-react';
import { hospitalInfo } from '../data/data';

const steps = [
  {
    step: '01',
    icon: FileCheck2,
    title: 'Share Medical Reports',
    desc: 'Submit your recent MRI, CT scans, biopsy reports, or previous diagnosis file.'
  },
  {
    step: '02',
    icon: Stethoscope,
    title: 'Multi-Specialist Board Review',
    desc: 'Joint case analysis by senior department heads, surgical experts, and oncologists.'
  },
  {
    step: '03',
    icon: HeartPulse,
    title: 'Clarity & Treatment Pathways',
    desc: 'Receive unbiased confirmation, alternative therapies, and precise recovery plans.'
  }
];

const SecondOpinionCTA = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section
      ref={ref}
      className="relative py-12 sm:py-16 lg:py-20 overflow-hidden text-white"
      style={{
        background: 'linear-gradient(135deg, #003759 0%, #005a87 30%, #007fb2 60%, #009ad4 85%, #00a896 100%)',
      }}
    >
      {/* Background Soft Glows & Tech Dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#8cc63f]/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Bold Value Proposition & Action CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-4 sm:space-y-5 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-black uppercase tracking-widest text-[#8cc63f] shadow-xs">
              <Sparkles size={13} className="text-[#8cc63f]" />
              <span>Expert Medical Consultation</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              It's Always Good to Have a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-[#8cc63f] to-teal-200">
                Second Opinion
              </span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-100 font-normal leading-relaxed max-w-2xl drop-shadow-xs">
              Have you received a critical diagnosis or complex surgical recommendation elsewhere? Our senior specialists and multi-disciplinary medical board evaluate your case with clinical precision for complete confidence.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                to="/appointment"
                className="inline-flex items-center justify-center gap-2 text-white px-7 py-3.5 rounded-full font-black text-xs uppercase tracking-wider shadow-xl shadow-cyan-950/40 hover:shadow-2xl transition-all duration-200 hover:scale-[1.02] active:scale-95 text-center group"
                style={{
                  background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)',
                }}
              >
                <MessageSquarePlus size={16} />
                <span>Get a Second Opinion</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={`tel:${hospitalInfo.emergency}`}
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/25 px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider backdrop-blur-md transition-all text-center"
              >
                <Phone size={15} className="text-[#8cc63f]" />
                <span>Call Senior Consultant</span>
              </a>
            </div>

            {/* Key Trust Signals */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 sm:gap-x-6 pt-3 text-xs text-slate-200 font-bold border-t border-white/15">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[#8cc63f] shrink-0" />
                <span>Comprehensive File Review</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[#8cc63f] shrink-0" />
                <span>Multi-Disciplinary Board</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[#8cc63f] shrink-0" />
                <span>Zero Waiting Time</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3-Step Interactive Process Cards (Fills the empty space with rich UI) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 space-y-3 sm:space-y-3.5"
          >
            {steps.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.step}
                  whileHover={{ y: -3, scale: 1.01 }}
                  className="bg-white/12 hover:bg-white/20 backdrop-blur-md rounded-2xl p-4 sm:p-4.5 border border-white/20 transition-all duration-200 shadow-md group flex items-start gap-3.5"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#8cc63f]/25 border border-[#8cc63f]/40 flex items-center justify-center text-[#8cc63f] shrink-0 group-hover:scale-110 group-hover:bg-[#8cc63f]/35 transition-all shadow-xs mt-0.5">
                    <IconComp size={20} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm sm:text-base font-black text-white group-hover:text-emerald-300 transition-colors truncate">
                        {item.title}
                      </h4>
                      <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-white/15 text-[#8cc63f] border border-white/20">
                        Step {item.step}
                      </span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed font-normal mt-1">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* Bottom Reassurance Banner */}
            <div className="p-3 rounded-xl bg-black/20 border border-white/10 flex items-center justify-between text-xs text-slate-200 font-semibold px-4">
              <span className="flex items-center gap-1.5 text-[11px] sm:text-xs">
                <ShieldCheck size={14} className="text-[#8cc63f]" />
                <span>Available for all 32+ Specialties</span>
              </span>
              <span className="text-[11px] text-[#8cc63f] font-black">
                100% Confidential
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SecondOpinionCTA;
