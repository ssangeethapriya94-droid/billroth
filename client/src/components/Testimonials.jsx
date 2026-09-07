import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Quote, 
  Sparkles, 
  ShieldCheck, 
  HeartHandshake, 
  CheckCircle2,
  Award
} from 'lucide-react';

const patientTestimonials = [
  {
    id: 1,
    name: 'Mr. R. Parthasarathy',
    initials: 'RP',
    relation: 'Son of Cardiac Patient',
    department: 'Emergency & Cardiology',
    rating: 5,
    tag: 'Emergency Life-Saving',
    date: 'Verified Patient Review',
    color: 'from-sky-500 to-blue-600',
    content:
      'The cardiac team at Billroth Hospitals saved my father during a midnight emergency. Their swift response, world-class ICU care, and compassionate doctors were truly miraculous.',
  },
  {
    id: 2,
    name: 'Mrs. Jayalakshmi Sundaram',
    initials: 'JS',
    relation: 'Knee Replacement Patient',
    department: 'Orthopedics & Joint Care',
    rating: 5,
    tag: 'Joint Replacement',
    date: 'Verified Patient Review',
    color: 'from-emerald-500 to-teal-600',
    content:
      'Underwent bilateral total knee replacement surgery here. I was walking comfortably without pain within 3 days. The nursing and physiotherapy staff treated me like family.',
  },
  {
    id: 3,
    name: 'Dr. S. K. Venkatesh',
    initials: 'SV',
    relation: 'Senior Medical Professional',
    department: 'General & Surgical Care',
    rating: 5,
    tag: 'Doctor’s Recommendation',
    date: 'Verified Patient Review',
    color: 'from-indigo-500 to-purple-600',
    content:
      'As a physician myself, I trust Billroth Hospitals for my family. Their diagnostic precision, modern surgical theatres, and transparent ethical protocols are truly commendable.',
  },
  {
    id: 4,
    name: 'Mr. Vigneshwaran K.',
    initials: 'VK',
    relation: 'Gastroenterology Patient',
    department: 'Gastroenterology & GI Surgery',
    rating: 5,
    tag: 'GI Excellence',
    date: 'Verified Patient Review',
    color: 'from-amber-500 to-orange-600',
    content:
      'Best multi-specialty hospital in Chennai with affordable, transparent pricing. The gastroenterology team treated my chronic illness with utmost expertise and genuine care.',
  },
  {
    id: 5,
    name: 'Mrs. Ananya Krishnan',
    initials: 'AK',
    relation: 'Mother of Newborn',
    department: 'Obstetrics & Pediatrics',
    rating: 5,
    tag: 'Maternity Care',
    date: 'Verified Patient Review',
    color: 'from-rose-500 to-pink-600',
    content:
      'Delivered my baby at Billroth Shenoy Nagar. The OB-GYN and neonatal pediatric specialists made us feel completely safe. The post-natal care was remarkably warm and attentive.',
  },
  {
    id: 6,
    name: 'Mr. Mohammed Razeen',
    initials: 'MR',
    relation: 'Oncology Patient',
    department: 'Medical & Surgical Oncology',
    rating: 5,
    tag: 'Cancer Recovery',
    date: 'Verified Patient Review',
    color: 'from-cyan-500 to-blue-600',
    content:
      'Comprehensive cancer care delivered with utmost dignity and modern technology. The doctors explained every stage of therapy with clarity, reassurance, and endless patience.',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const timerRef = useRef(null);

  // Determine items per page based on screen width
  const totalItems = patientTestimonials.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, currentIndex]);

  // Create an array of 3 active visible items (looping)
  const getVisibleCards = () => {
    return [
      patientTestimonials[currentIndex % totalItems],
      patientTestimonials[(currentIndex + 1) % totalItems],
      patientTestimonials[(currentIndex + 2) % totalItems],
    ];
  };

  const visibleCards = getVisibleCards();

  return (
    <section 
      ref={ref} 
      className="py-12 sm:py-16 bg-gradient-to-b from-white via-sky-50/40 to-white relative overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Dynamic Glowing Ambient Light Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-16 left-1/4 w-96 h-96 bg-[#0095da]/15 rounded-full blur-[110px] animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-[#8cc63f]/15 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-cyan-400/10 rounded-full blur-[100px]" />
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #0095da 1px, transparent 0)',
            backgroundSize: '28px 28px'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        
        {/* Compact, High-Impact Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-sky-200/80 px-3.5 py-1 rounded-full shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
              </span>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#0095da]">
                Patient Stories & Recovery
              </span>
              <span className="text-slate-300">|</span>
              <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                <Star size={12} className="fill-amber-400 text-amber-400 drop-shadow-[0_0_4px_rgba(251,191,36,0.6)]" />
                <span>4.9 / 5.0 Rating</span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Words From Our <span className="text-[#0095da] drop-shadow-xs">Healed Patients</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl font-normal">
              Real experiences from families who trusted Billroth Hospitals during their most critical healthcare moments.
            </p>
          </div>

          {/* Navigation Controls & Live Counter */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:flex items-center gap-1.5 mr-2">
              {patientTestimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? 'w-7 bg-gradient-to-r from-[#0095da] to-[#8cc63f] shadow-[0_0_8px_rgba(0,149,218,0.5)]'
                      : 'w-2 bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-slate-700 hover:bg-gradient-to-r hover:from-[#0095da] hover:to-[#0077b6] hover:text-white hover:border-transparent hover:shadow-[0_4px_15px_rgba(0,149,218,0.35)] transition-all duration-300 flex items-center justify-center cursor-pointer active:scale-95 shadow-xs"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-slate-700 hover:bg-gradient-to-r hover:from-[#0095da] hover:to-[#0077b6] hover:text-white hover:border-transparent hover:shadow-[0_4px_15px_rgba(0,149,218,0.35)] transition-all duration-300 flex items-center justify-center cursor-pointer active:scale-95 shadow-xs"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Dynamic Multi-Card Animated Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            <AnimatePresence mode="popLayout">
              {visibleCards.map((item, idx) => (
                <motion.div
                  key={`${item.id}-${currentIndex}-${idx}`}
                  layout
                  initial={{ opacity: 0, scale: 0.96, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: -15 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className={`relative group h-full rounded-2xl p-6 sm:p-7 flex flex-col justify-between
                    bg-white/90 backdrop-blur-md border border-slate-200/90
                    hover:border-sky-400/80 transition-all duration-300
                    shadow-[0_4px_20px_rgba(0,149,218,0.06)] 
                    hover:shadow-[0_12px_35px_rgba(0,149,218,0.18)]
                    hover:-translate-y-1.5
                    ${idx === 0 ? 'ring-1 ring-sky-300/50' : ''}
                    ${idx > 0 ? 'hidden md:flex' : 'flex'}
                    ${idx === 2 ? 'hidden lg:flex' : ''}
                  `}
                >
                  {/* Glowing card border accent on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400/10 via-transparent to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  {/* Top Meta Bar: Badge & Quote Icon */}
                  <div className="relative z-10 flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 bg-sky-50/90 border border-sky-200/80 text-[#0095da] text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                      <ShieldCheck size={12} className="text-[#8cc63f]" />
                      {item.tag}
                    </span>

                    <div className="w-8 h-8 rounded-full bg-sky-50 text-[#0095da] flex items-center justify-center group-hover:bg-[#0095da] group-hover:text-white group-hover:shadow-[0_0_12px_rgba(0,149,218,0.5)] transition-all duration-300">
                      <Quote size={14} className="rotate-180" />
                    </div>
                  </div>

                  {/* Rating Stars with luminous golden glow */}
                  <div className="relative z-10 flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={15}
                        className={
                          i < item.rating
                            ? 'text-amber-400 fill-amber-400 drop-shadow-[0_0_5px_rgba(251,191,36,0.6)]'
                            : 'text-slate-200'
                        }
                      />
                    ))}
                    <span className="text-[11px] font-bold text-slate-500 ml-1.5 flex items-center gap-1">
                      <CheckCircle2 size={11} className="text-emerald-500" />
                      Verified
                    </span>
                  </div>

                  {/* Testimonial Quote */}
                  <div className="relative z-10 mb-6 flex-1">
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-normal italic">
                      "{item.content}"
                    </p>
                  </div>

                  {/* Author Card Footer */}
                  <div className="relative z-10 pt-4 border-t border-slate-100 flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${item.color} text-white flex items-center justify-center font-black text-xs shadow-[0_0_10px_rgba(0,149,218,0.3)] shrink-0 ring-2 ring-white`}>
                      {item.initials}
                    </div>

                    <div className="min-w-0">
                      <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm truncate">
                        {item.name}
                      </h4>
                      <div className="text-[11px] text-[#0095da] font-bold truncate">
                        {item.department}
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium truncate">
                        {item.relation} • Billroth Hospitals
                      </div>
                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex sm:hidden items-center justify-center gap-1.5 mt-6">
          {patientTestimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'w-6 bg-gradient-to-r from-[#0095da] to-[#8cc63f] shadow-[0_0_8px_rgba(0,149,218,0.5)]'
                  : 'w-2 bg-slate-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Bottom Trust & Quality Banner */}
        <div className="mt-8 sm:mt-10 p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-xs flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0095da] to-[#8cc63f] text-white flex items-center justify-center shadow-[0_0_12px_rgba(0,149,218,0.4)]">
              <Award size={18} />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-black text-slate-900">
                NABH Accredited Tertiary Super-Specialty Hospital
              </div>
              <div className="text-[11px] text-slate-500 font-medium">
                Over 33+ Years of Compassionate Patient Care & Clinical Excellence in Chennai
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-700 font-bold">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-500" />
              <span>300K+ Patients Treated</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-500" />
              <span>99.4% Recovery Satisfaction</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;

