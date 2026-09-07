import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Phone, ArrowRight, Award, Users, HeartPulse, Sparkles } from 'lucide-react';

const Banner = () => {
  return (
    <section
      className="relative overflow-hidden text-white min-h-[580px] flex flex-col justify-between"
    >
      {/* Background Doctor Photo Layer with Seamless Balanced Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/hero-doctors-bg.jpg"
          alt="Billroth Hospitals Expert Doctors Team"
          className="w-full h-full object-cover object-center scale-100 filter brightness-[0.88] contrast-[1.05]"
        />
        {/* Balanced brand gradient overlay letting doctors show softly */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(0, 40, 70, 0.80) 0%, rgba(0, 85, 135, 0.64) 38%, rgba(0, 130, 195, 0.50) 65%, rgba(35, 145, 95, 0.45) 85%, rgba(125, 185, 50, 0.38) 100%)',
          }}
        />
        {/* Soft directional darkening from left for maximum text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002239]/85 via-[#002840]/55 to-transparent" />
        
        {/* Soft atmospheric ambient glow lights */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#8cc63f]/25 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#0095da]/30 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Subtle grid texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1.5px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      {/* Main Hero Container */}
      <div className="relative container-custom pt-12 pb-24 lg:pt-16 lg:pb-28 2xl:pt-20 2xl:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 2xl:gap-14 items-center">
          
          {/* Left Hero Content (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-left space-y-6 2xl:space-y-8"
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs font-extrabold text-white shadow-sm">
              <Sparkles size={14} className="text-[#8cc63f]" />
              <span className="text-[#8cc63f]">Best Multi-Specialty Hospital in Chennai</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-black tracking-tight text-white leading-[1.12] drop-shadow-md">
              Your Health,{' '}
              <span className="text-[#8cc63f] drop-shadow-md">
                Our Priority
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-white mt-2 drop-shadow-md">
                33+ Years of Compassionate Healing
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg 2xl:text-xl text-white/95 leading-relaxed max-w-2xl 2xl:max-w-3xl font-medium drop-shadow-sm">
              Empowering lives with over 150+ specialist doctors, modular operation theatres, and 24/7 dedicated emergency & trauma care in Chennai.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/appointment"
                className="inline-flex items-center gap-2.5 text-white px-7 py-4 rounded-full font-black text-sm shadow-xl shadow-cyan-950/30 hover:shadow-2xl transition-all duration-200 active:scale-95 group"
                style={{
                  background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)',
                }}
              >
                <Calendar size={17} className="text-white" />
                <span>Book an Appointment</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="tel:04426264000"
                className="inline-flex items-center gap-2.5 bg-white/15 hover:bg-white/25 text-white border border-white/25 px-6 py-4 rounded-full font-bold text-sm backdrop-blur-sm transition-all duration-200"
              >
                <Phone size={16} className="text-[#8cc63f]" />
                <span>Emergency: 044-26264000</span>
              </a>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-6 border-t border-white/20 grid grid-cols-3 gap-4 max-w-lg 2xl:max-w-xl">
              <div className="border-r border-white/20 pr-2">
                <div className="text-2xl sm:text-3xl 2xl:text-4xl font-black text-white">33+</div>
                <div className="text-xs 2xl:text-sm text-white/85 font-medium">Years of Excellence</div>
              </div>
              <div className="border-r border-white/20 pr-2">
                <div className="text-2xl sm:text-3xl 2xl:text-4xl font-black text-[#8cc63f]">300K+</div>
                <div className="text-xs 2xl:text-sm text-white/85 font-medium">Patients Treated</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl 2xl:text-4xl font-black text-white">150+</div>
                <div className="text-xs 2xl:text-sm text-white/85 font-medium">Expert Doctors</div>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Visual (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-white/5 backdrop-blur-sm p-2">
                <img
                  src="https://billrothhospitals.com/wp-content/uploads/2024/02/hospital-care.png"
                  alt="Billroth Hospitals Patient Care"
                  className="w-full h-80 sm:h-96 2xl:h-[480px] object-cover rounded-2xl"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80";
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#003855]/85 via-transparent to-transparent rounded-2xl" />

                {/* Bottom Overlay Info on Image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#003855]/90 backdrop-blur-md border border-white/15 text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <HeartPulse size={16} className="text-[#8cc63f]" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Super Specialty Care</span>
                  </div>
                  <p className="text-xs text-teal-100">NABH Accredited multi-specialty healthcare with 24/7 cardiac and trauma emergency.</p>
                </div>
              </div>

              {/* Floating Badge 1 - Top Left */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 sm:-left-6 bg-white text-slate-900 rounded-2xl shadow-xl p-3.5 border border-slate-100 flex items-center gap-3 z-10"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0095da] flex items-center justify-center font-bold">
                  <Award size={20} />
                </div>
                <div className="text-left">
                  <div className="text-xs font-black text-slate-900">NABH Accredited</div>
                  <div className="text-[11px] text-[#0095da] font-bold">Clinical Quality</div>
                </div>
              </motion.div>

              {/* Floating Badge 2 - Bottom Right */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-5 -right-4 sm:-right-6 bg-white text-slate-900 rounded-2xl shadow-xl p-3.5 border border-slate-100 flex items-center gap-3 z-10"
              >
                <div className="w-10 h-10 rounded-xl bg-lime-50 text-[#8cc63f] flex items-center justify-center font-bold">
                  <Users size={20} />
                </div>
                <div className="text-left">
                  <div className="text-xs font-black text-slate-900">150+ Specialists</div>
                  <div className="text-[11px] text-[#0095da] font-bold">Doctor Consultations</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Wave Transition */}
      <div className="relative w-full overflow-hidden leading-none z-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-10 sm:h-14 text-slate-50 fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Banner;
