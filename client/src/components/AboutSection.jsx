import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, ArrowRight, Award, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const keyHighlights = [
  { title: '24/7 Rapid Emergency & Trauma', desc: 'Fully equipped critical care team available round the clock.' },
  { title: '150+ Leading Medical Specialists', desc: 'Renowned surgeons & physicians across 25+ clinical fields.' },
  { title: 'Advanced Surgical & Robotic Suites', desc: 'Latest minimally invasive and endoscopic surgical technologies.' },
  { title: 'NABH & NABL Quality Accreditations', desc: 'Adhering to strict international patient safety protocols.' },
];

const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Presentation (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-100">
              <img
                src="https://billrothhospitals.com/wp-content/uploads/2024/02/hospital-care.png"
                alt="Billroth Hospitals Patient Care"
                className="w-full h-[460px] object-cover"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              {/* Bottom Card Inside Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0084c7] text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0084c7] uppercase tracking-wider">Pioneers in Healthcare</div>
                  <div className="text-sm font-extrabold text-slate-900">Dr. V. Jeganathan's Legacy</div>
                </div>
              </div>
            </div>

            {/* Floating Top Badge */}
            <div className="absolute -top-4 -right-4 sm:-right-6 bg-gradient-to-br from-[#8cc63f] to-lime-600 text-white rounded-2xl p-4 shadow-xl text-center">
              <div className="text-2xl font-black">33+</div>
              <div className="text-[11px] font-bold uppercase tracking-wider leading-tight">Years Of<br />Care</div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Key Features (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-teal-50 text-[#15729d] border border-teal-200/60 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider">
              <ShieldCheck size={14} className="text-[#8cc63f]" />
              <span>About Billroth Hospitals</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Behind Our Mask Are <span className="text-[#0084c7]">Faces You Trust</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Founded in 1990 by the visionary late Dr. V. Jeganathan, Billroth Hospitals has evolved into one of Chennai's foremost tertiary care medical destinations, known for clinical precision, patient empathy, and affordability.
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {keyHighlights.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#8cc63f] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-0.5">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/departments"
                className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-full font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                style={{
                  background: 'linear-gradient(90deg, #15729d 0%, #208287 50%, #30946d 100%)',
                }}
              >
                <span>Explore Specialties</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-slate-200 hover:border-[#0084c7] text-slate-700 hover:text-[#0084c7] px-6 py-3 rounded-full font-bold text-sm transition-all"
              >
                <span>Contact Hospital</span>
              </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
