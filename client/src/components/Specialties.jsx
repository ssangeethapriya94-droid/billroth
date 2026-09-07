import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { departments } from '../data/data';

const Specialties = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 bg-slate-50 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1.5 bg-teal-50 text-[#15729d] border border-teal-200/60 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <Sparkles size={13} className="text-[#8cc63f]" />
            <span>Our Clinical Specialties</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            World-Class Medical <span className="text-[#0084c7]">Departments</span>
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Equipped with state-of-the-art diagnostic technology, expert surgeons, and dedicated healthcare teams for precision healing.
          </p>
        </motion.div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, i) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="h-full"
            >
              <Link
                to={`/departments/${dept.slug}`}
                className="group flex flex-col justify-between h-full bg-white rounded-3xl p-6 border border-slate-200 hover:border-[#15729d]/50 shadow-sm hover:shadow-xl hover:shadow-teal-950/10 transition-all duration-300 hover:-translate-y-1.5"
              >
                <div>
                  {/* Top Icon & Arrow */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-50 to-teal-50 flex items-center justify-center p-2.5 border border-cyan-100 group-hover:border-[#0084c7] transition-colors">
                      <img
                        src={dept.image}
                        alt={dept.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      <span className="hidden text-2xl">{dept.icon}</span>
                    </div>

                    <div className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-[#8cc63f] group-hover:text-slate-950 flex items-center justify-center text-slate-400 transition-all font-bold">
                      <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0084c7] transition-colors mb-2">
                    {dept.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-3 mb-6">
                    {dept.description}
                  </p>
                </div>

                {/* Footer Link */}
                <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#15729d] group-hover:text-[#0084c7]">
                  <span>Explore Specialty</span>
                  <span className="text-[#8cc63f] font-black">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-14"
        >
          <Link
            to="/departments"
            className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
            style={{
              background: 'linear-gradient(90deg, #15729d 0%, #208287 50%, #30946d 100%)',
            }}
          >
            <span>View All Medical Departments</span>
            <ArrowRight size={16} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Specialties;
