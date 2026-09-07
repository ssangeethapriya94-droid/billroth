import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Star, Quote, Heart } from 'lucide-react';
import { testimonials } from '../data/data';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section ref={ref} className="py-20 2xl:py-28 bg-white relative overflow-hidden">
      <div className="container-custom">
        
        <div className="text-center max-w-2xl 2xl:max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-sky-50 border border-sky-200/60 text-[#0095da] text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
            Patient Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
            Words From Our <span className="text-[#0095da]">Healed Patients</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg 2xl:text-xl">
            Real experiences from families who trusted Billroth Hospitals during their most critical moments.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative max-w-4xl 2xl:max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-sky-50/50 rounded-3xl p-8 sm:p-12 lg:p-16 2xl:p-20 border border-slate-200/80 shadow-xl relative overflow-hidden">
            
            {/* Top Quote Icon */}
            <div className="absolute top-8 right-8 text-[#0095da]/10 pointer-events-none">
              <Quote size={80} />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 space-y-6"
              >
                {/* 5 Stars */}
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < (testimonials[current]?.rating || 5)
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-slate-200'
                      }
                    />
                  ))}
                  <span className="text-xs font-bold text-slate-500 ml-2">Verified Patient</span>
                </div>

                {/* Quote Text */}
                <p className="text-lg sm:text-2xl 2xl:text-3xl text-slate-800 font-medium leading-relaxed italic">
                  "{testimonials[current]?.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-200/60">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#0095da] to-[#8cc63f] text-white flex items-center justify-center font-extrabold text-lg shadow-md">
                    {testimonials[current]?.name?.charAt(0) || 'P'}
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900 text-base">
                      {testimonials[current]?.name}
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      Patient at Billroth Hospitals, Chennai
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between pt-8 mt-8 border-t border-slate-200/60">
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === current ? 'w-8 bg-[#0095da]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={prev}
                  className="w-11 h-11 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-[#0095da] hover:text-white hover:border-[#0095da] transition-all flex items-center justify-center shadow-sm"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="w-11 h-11 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-[#0095da] hover:text-white hover:border-[#0095da] transition-all flex items-center justify-center shadow-sm"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
