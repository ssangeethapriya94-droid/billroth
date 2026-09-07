import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Calendar, Search, HeartPulse, ArrowRight } from 'lucide-react';

const actionCards = [
  {
    id: 1,
    title: 'Make an Appointment',
    subtitle: 'Book OPD consultations with top specialists in seconds.',
    tag: 'Online Booking',
    link: '/appointment',
    icon: Calendar,
    color: 'from-[#0095da] to-[#0077b6]',
    iconBg: 'bg-gradient-to-tr from-[#0095da] to-sky-500 shadow-[0_0_12px_rgba(0,149,218,0.35)]',
    badgeColor: 'bg-sky-50/90 text-[#0095da] border-sky-200/80',
    btnText: 'Book Now',
  },
  {
    id: 2,
    title: 'Meet our Doctors',
    subtitle: 'Find trusted specialists across 40+ medical departments.',
    tag: '150+ Specialists',
    link: '/doctors',
    icon: Search,
    color: 'from-[#0077b6] to-[#0095da]',
    iconBg: 'bg-gradient-to-tr from-[#0077b6] to-cyan-500 shadow-[0_0_12px_rgba(0,119,182,0.35)]',
    badgeColor: 'bg-blue-50/90 text-[#0077b6] border-blue-200/80',
    btnText: 'Find Doctor',
  },
  {
    id: 3,
    title: 'Health Check Packages',
    subtitle: 'Comprehensive preventive screening for you and your family.',
    tag: '12+ Master Plans',
    link: '/health-checkup',
    icon: HeartPulse,
    color: 'from-[#10a877] to-[#8cc63f]',
    iconBg: 'bg-gradient-to-tr from-[#10a877] to-[#8cc63f] shadow-[0_0_12px_rgba(16,168,119,0.35)]',
    badgeColor: 'bg-emerald-50/90 text-[#10a877] border-emerald-200/80',
    btnText: 'View Packages',
  },
];

const HeroActionCards = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative z-30 -mt-7 sm:-mt-10 lg:-mt-12 px-3 sm:px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5">
          {actionCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <Link
                  to={card.link}
                  className="block relative overflow-hidden bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-4.5 border border-slate-200/90 hover:border-sky-400/80 shadow-[0_6px_20px_-4px_rgba(0,149,218,0.12)] hover:shadow-[0_12px_30px_-4px_rgba(0,149,218,0.22)] transition-all duration-300"
                >
                  {/* Subtle top glowing accent strip on hover */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#0095da] via-sky-400 to-[#8cc63f] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Header Row: Compact Icon + Refined Tag */}
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${card.iconBg} text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300`}
                    >
                      <Icon size={18} className="text-white" />
                    </div>

                    <span
                      className={`text-[9px] sm:text-[9.5px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${card.badgeColor} shadow-2xs`}
                    >
                      {card.tag}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="space-y-0.5 mb-3">
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-[#0095da] transition-colors leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-normal leading-snug line-clamp-2">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Footer CTA */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs font-black text-[#0095da] group-hover:text-[#0077b6]">
                    <span>{card.btnText}</span>
                    <div className="w-6 h-6 rounded-full bg-sky-50 text-[#0095da] group-hover:bg-gradient-to-r group-hover:from-[#0095da] group-hover:to-[#0077b6] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs">
                      <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroActionCards;

