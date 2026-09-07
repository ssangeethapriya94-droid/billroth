import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Sparkles,
  Phone,
  Calendar,
  CheckCircle2,
  Trophy,
  Award,
  ShieldCheck,
  Building,
  HeartPulse,
  Activity,
  TrendingUp,
  Quote
} from 'lucide-react';
import { hospitalInfo } from '../data/data';

// Decorative Medical Plus / Cross Icons matching real site
const BlueCross = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="#005280">
    <path d="M38 10 H62 V38 H90 V62 H62 V90 H38 V62 H10 V38 H38 Z" />
  </svg>
);

const GreenOutlineCross = ({ className = "w-9 h-9" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="#8cc63f" strokeWidth="8" strokeLinejoin="round">
    <path d="M38 10 H62 V38 H90 V62 H62 V90 H38 V62 H10 V38 H38 Z" />
  </svg>
);

const MDChairman = () => {
  return (
    <div className="bg-[#f8fafc] overflow-hidden min-h-screen">
      
      {/* 1. COMPACT & BALANCED HERO BANNER */}
      <section className="relative bg-gradient-to-br from-[#002842] via-[#005280] to-[#0095da] text-white py-8 sm:py-10 lg:py-12 overflow-hidden">
        {/* Ambient Glowing Blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-24 -right-24 w-[450px] h-[450px] rounded-full bg-[#8cc63f]/25 blur-[100px]"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.4, 0.25] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-[#0095da]/30 blur-[90px]"
          />
        </div>

        <div className="container-custom relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-sky-200 mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-white font-medium">About Us</span>
            <ChevronRight className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-[#8cc63f] font-semibold">MD & Chairman</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-6 items-center">
            {/* Left Column: Title & Subtitle */}
            <div className="lg:col-span-8 space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#8cc63f] text-xs font-bold shadow-sm">
                <Sparkles className="w-3.5 h-3.5 fill-[#8cc63f] animate-pulse" />
                <span>Executive Leadership • Billroth Hospitals</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                MD & Chairman
              </h1>
              
              <p className="text-base sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-white to-[#8cc63f]">
                Visionary Leadership Continuing a Sacred Healthcare Legacy
              </p>
              
              <p className="text-xs sm:text-sm text-sky-100/90 leading-relaxed max-w-2xl pt-1">
                Carrying forward the vision of Late Dr. V. Jeganathan with cutting-edge medical advancements, 350+ hospital beds, and compassionate patient-first care across Chennai.
              </p>
            </div>

            {/* Right Column: Sleek Compact Leadership Highlights Badge */}
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="grid grid-cols-2 gap-3 w-full sm:w-auto p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl text-center">
                <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                  <span className="block text-xl sm:text-2xl font-black text-[#8cc63f]">25+</span>
                  <span className="text-[11px] font-bold text-sky-200 uppercase tracking-wide">Years Service</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                  <span className="block text-xl sm:text-2xl font-black text-white">350+</span>
                  <span className="text-[11px] font-bold text-sky-200 uppercase tracking-wide">Hospital Beds</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 col-span-2 flex items-center justify-center gap-2 text-xs font-extrabold text-sky-100">
                  <ShieldCheck className="w-4 h-4 text-[#8cc63f]" />
                  <span>NABH & NABL Accredited</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DR. RAJESH JEGANATHAN - MD OF BILLROTH HOSPITALS */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="container-custom max-w-6xl">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Top Grid: Arched Photo on Left + Title & Plus Icons on Right */}
            <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Photo in Rounded Top-Left Arched Frame */}
              <div className="md:col-span-5 flex justify-center md:justify-start">
                <div className="relative group">
                  {/* Subtle Drop Shadow & Glow */}
                  <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#0095da]/30 to-[#8cc63f]/30 rounded-tl-[85px] rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500 pointer-events-none" />
                  
                  {/* Arched Photo Frame */}
                  <div className="relative overflow-hidden rounded-tl-[80px] rounded-tr-2xl rounded-bl-2xl rounded-br-2xl border-4 border-white shadow-2xl bg-[#f0f4f8] max-w-[360px] sm:max-w-[420px]">
                    <img
                      src="https://billrothhospitals.com/wp-content/uploads/2023/10/rajesh-jeganathan.png"
                      alt="Dr. Rajesh Jeganathan - MD of Billroth Hospitals"
                      className="w-full h-auto object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Title & Decorative Medical Crosses */}
              <div className="md:col-span-7 flex flex-col justify-center relative space-y-4">
                
                {/* Decorative Medical Crosses on Top Right */}
                <div className="flex items-center gap-3 mb-2">
                  <BlueCross className="w-10 h-10 sm:w-12 sm:h-12 drop-shadow-sm" />
                  <GreenOutlineCross className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>

                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0095da] tracking-tight">
                    Dr. Rajesh Jeganathan
                  </h2>
                  <p className="text-xl sm:text-2xl font-bold text-[#0095da] mt-1">
                    MD of Billroth Hospitals
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-[#0095da] text-xs font-extrabold uppercase tracking-wider w-fit">
                  <Building className="w-3.5 h-3.5" />
                  <span>Chairman & Managing Director • 350+ Beds Across Chennai</span>
                </div>
              </div>

            </div>

            {/* Bottom Text Content (Exact Verbatim from Live Website) */}
            <div className="pt-4 space-y-5 text-slate-700 text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal border-t border-slate-100">
              <p className="bg-slate-50 p-5 rounded-2xl border-l-4 border-[#0095da] text-slate-800 font-medium">
                We take this opportunity to thank the entire team of Billroth Hospitals for having relentlessly served the human community for the last two and half decades. All these years, our only focus has been to offer exceptional and reliable healthcare addressing specific medical needs of people from all walks of life, with a commitment to quality and affordability.
              </p>

              <p>
                Today, Billroth Hospitals is one of the country’s leading healthcare institutions offering <strong>Super Specialty Care with uncompromising International standards</strong>. We provide services in various branches of medicine and surgery with our <strong>350 bedded Super Specialty Hospitals located at Shenoy Nagar & R.A.Puram</strong> in Chennai, India.
              </p>

              <p>
                We have been consistent and steadfast in our growth and have been ranked on the top in surveys conducted by the <strong>Times of India, The Week and World Health Vision</strong>. We attribute this success to the unparalleled dedication and perceptive participation of our team of highly qualified and world-renowned experts who are determined to set Billroth on an accelerated growth trajectory, thereby reaching out to more people and bringing a significant shift in their lives.
              </p>
            </div>

            {/* Key Achievements Badges */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 text-center">
                <span className="block text-2xl font-black text-[#0095da]">1st in TN</span>
                <span className="text-xs font-bold text-slate-700 mt-1 block">Dual Source CT Scan & RapidArc Suite</span>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-center">
                <span className="block text-2xl font-black text-[#8cc63f]">#1 Rank</span>
                <span className="text-xs font-bold text-slate-700 mt-1 block">Times of India & The Week Healthcare Surveys</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900 text-white text-center">
                <span className="block text-2xl font-black text-[#8cc63f]">350+ Beds</span>
                <span className="text-xs font-bold text-sky-200 mt-1 block">Shenoy Nagar & R.A. Puram Campuses</span>
              </div>
            </div>

          </motion.div>

        </div>
      </section>

      {/* 3. DR. KALPANA RAJESH - CEO OF BILLROTH HOSPITALS */}
      <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80 relative">
        <div className="container-custom max-w-6xl">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Top Grid: Title & Crosses on Left + Arched Photo on Right */}
            <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Title & Decorative Medical Crosses */}
              <div className="md:col-span-7 flex flex-col justify-center relative space-y-4 order-2 md:order-1">
                
                {/* Decorative Medical Crosses on Top Left */}
                <div className="flex items-center gap-3 mb-2">
                  <BlueCross className="w-10 h-10 sm:w-12 sm:h-12 drop-shadow-sm" />
                  <GreenOutlineCross className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>

                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0095da] tracking-tight">
                    Dr. Kalpana Rajesh
                  </h2>
                  <p className="text-xl sm:text-2xl font-bold text-[#0095da] mt-1">
                    CEO of Billroth Hospitals
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold uppercase tracking-wider w-fit">
                  <HeartPulse className="w-3.5 h-3.5 text-[#8cc63f]" />
                  <span>Executive Leadership • Patient-Centric Innovation</span>
                </div>
              </div>

              {/* Right Column: Photo in Rounded Top-Left Arched Frame */}
              <div className="md:col-span-5 flex justify-center md:justify-end order-1 md:order-2">
                <div className="relative group">
                  {/* Subtle Drop Shadow & Glow */}
                  <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#8cc63f]/30 to-[#0095da]/30 rounded-tl-[85px] rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500 pointer-events-none" />
                  
                  {/* Arched Photo Frame */}
                  <div className="relative overflow-hidden rounded-tl-[80px] rounded-tr-2xl rounded-bl-2xl rounded-br-2xl border-4 border-white shadow-2xl bg-[#eae6df] max-w-[360px] sm:max-w-[420px]">
                    <img
                      src="https://billrothhospitals.com/wp-content/uploads/2023/10/kalpana-rajesh.png"
                      alt="Dr. Kalpana Rajesh - CEO of Billroth Hospitals"
                      className="w-full h-auto object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://images.unsplash.com/photo-1594824813689-53609fc6cf39?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Text Content (Exact Verbatim from Live Website) */}
            <div className="pt-4 space-y-5 text-slate-700 text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal border-t border-slate-200">
              <p className="bg-white p-5 rounded-2xl border-l-4 border-[#8cc63f] text-slate-800 font-medium shadow-sm">
                As the CEO of Billroth Hospitals, <strong>Dr. Kalpana Rajesh</strong> brings visionary leadership, strategic insight, and a deep commitment to transforming healthcare delivery. Under her stewardship, Billroth Hospitals has continued to scale new heights in clinical excellence, patient care, and technological advancement.
              </p>

              <p>
                With a strong background in medicine and healthcare management, She plays a pivotal role in steering the organization’s mission to provide affordable, accessible, and high-quality healthcare to communities across India. Her focus on patient-centric care, operational efficiency, and medical innovation has positioned Billroth as one of the most respected names in the Indian healthcare landscape.
              </p>

              <p>
                Driven by values of compassion, integrity, and excellence, She continues to lead the hospital into a future of sustainable growth, medical breakthroughs, and enhanced patient trust — staying true to the founding vision of making world-class healthcare a reality for all.
              </p>
            </div>

            {/* Executive Governance Pillars */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
                <HeartPulse className="w-6 h-6 text-[#0095da] mx-auto mb-2" />
                <span className="block text-sm font-black text-slate-900">Patient-Centric Care</span>
                <span className="text-xs text-slate-500 mt-0.5 block">Compassionate, accessible & transparent clinical protocols</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
                <Activity className="w-6 h-6 text-[#8cc63f] mx-auto mb-2" />
                <span className="block text-sm font-black text-slate-900">Operational Excellence</span>
                <span className="text-xs text-slate-500 mt-0.5 block">24/7 Rapid emergency response & infection control</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
                <ShieldCheck className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                <span className="block text-sm font-black text-slate-900">NABH & NABL Quality</span>
                <span className="text-xs text-slate-500 mt-0.5 block">Strict adherence to national and global healthcare standards</span>
              </div>
            </div>

          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default MDChairman;
