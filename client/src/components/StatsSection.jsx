import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { stats } from '../data/data';
import { Activity, ShieldCheck, HeartHandshake, UserCheck } from 'lucide-react';

const icons = [ShieldCheck, HeartHandshake, Activity, UserCheck];

const StatCard = ({ stat, index, inView }) => {
  const [count, setCount] = useState(0);
  const Icon = icons[index % icons.length];

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = stat.value;
    const duration = 2000;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const stepValue = end / totalSteps;

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [stat.value, inView]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative rounded-3xl p-6 sm:p-8 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all text-center group shadow-lg"
    >
      <div className="w-14 h-14 rounded-2xl bg-[#8cc63f]/20 text-[#8cc63f] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
        <Icon size={26} />
      </div>

      <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-2">
        {count.toLocaleString()}
        <span className="text-[#8cc63f]">{stat.suffix}</span>
      </div>

      <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-100">
        {stat.label}
      </div>
    </motion.div>
  );
};

const StatsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="pt-14 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 text-white relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #004b77 0%, #0077b6 35%, #0095da 65%, #3cb878 85%, #8cc63f 100%)',
      }}
    >
      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-9 sm:mb-11">
          <span className="inline-block bg-white/15 text-[#8cc63f] text-[11px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider mb-2.5 border border-white/20">
            Our Healthcare Journey
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-2.5">
            Ready to Care <span className="text-[#8cc63f]">In Every Possible Way</span>
          </h2>
          <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
            Delivering medical precision, advanced clinical technology, and dedicated care to every family.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
