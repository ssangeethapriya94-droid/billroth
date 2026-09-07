import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { MessageSquarePlus, ArrowRight, Phone, CheckCircle } from 'lucide-react';

const SecondOpinionCTA = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative py-20 lg:py-24 overflow-hidden text-white"
      style={{
        background: 'linear-gradient(135deg, #072a3e 0%, #11506f 40%, #1a7172 75%, #2a8867 100%)',
      }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="w-16 h-16 rounded-3xl bg-[#8cc63f]/20 text-[#8cc63f] flex items-center justify-center mx-auto mb-4 border border-[#8cc63f]/40 shadow-lg">
            <MessageSquarePlus size={32} />
          </div>

          <span className="inline-block text-xs font-black tracking-widest text-[#8cc63f] uppercase bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
            Expert Medical Consultation
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-2xl mx-auto leading-tight">
            It's Always Good to Have a <span className="text-[#8cc63f]">Second Opinion</span>
          </h2>

          <p className="text-base sm:text-lg text-teal-100 max-w-2xl mx-auto leading-relaxed">
            Have you received a diagnosis or treatment plan elsewhere? Our senior specialists and multi-disciplinary board review reports with clinical precision.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/appointment"
              className="inline-flex items-center gap-2 bg-[#8cc63f] hover:bg-[#7cb632] text-slate-950 px-8 py-4 rounded-full font-black text-xs uppercase tracking-wider shadow-xl transition-all duration-200 active:scale-95 group"
            >
              <span>Get a Second Opinion</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="tel:04426264000"
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/25 px-7 py-4 rounded-full font-bold text-xs uppercase tracking-wider backdrop-blur-sm transition-all"
            >
              <Phone size={16} className="text-[#8cc63f]" />
              <span>Call Senior Consultant</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-xs text-teal-100 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle size={14} className="text-[#8cc63f]" />
              <span>Comprehensive File Review</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle size={14} className="text-[#8cc63f]" />
              <span>Multi-Disciplinary Board</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle size={14} className="text-[#8cc63f]" />
              <span>Zero Waiting Time</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecondOpinionCTA;
