import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Award,
  ShieldCheck,
  Activity,
  HeartPulse,
  Users,
  HeartHandshake,
  Sparkles,
  Heart,
  Home,
  GraduationCap,
  Stethoscope,
  BookOpen,
  Building2,
  Building,
  Zap,
  Calendar,
  MapPin,
  Phone,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Quote,
  ChevronRight,
  ChevronLeft,
  Clock,
  Globe,
  Star,
  Check,
  Sparkle,
  BadgeCheck,
  History,
  Layers,
  HeartCrack,
  Maximize2,
  X,
  Play,
  Pause,
  Eye,
  Compass,
  SlidersHorizontal
} from 'lucide-react';
import {
  founderData,
  surgicalStats,
  coreValues,
  visionMission,
  timelineMilestones,
  hospitalHeritage,
  hospitalInfo,
} from '../data/data';

// Map icon strings to Lucide components
const iconMap = {
  Award,
  ShieldCheck,
  Activity,
  HeartPulse,
  Users,
  HeartHandshake,
  Sparkles,
  Heart,
  Home,
  GraduationCap,
  Stethoscope,
  BookOpen,
  Building2,
  Building,
  Zap,
  Calendar,
  MapPin,
  Phone,
};

// Smooth Native Counter Component for React 19
const AnimatedCounter = ({ value, suffix = '', inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = typeof value === 'number' ? value : parseInt(value, 10) || 0;
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
  }, [value, inView]);

  return (
    <span>
      {count.toLocaleString()}
      <span className="text-[#8cc63f]">{suffix}</span>
    </span>
  );
};

const About = () => {
  const [activeLeaderTab, setActiveLeaderTab] = useState('founder');
  const [activeVisionTab, setActiveVisionTab] = useState('vision');
  const [activeValueId, setActiveValueId] = useState(1);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-[#f8fafc] overflow-hidden">
      
      {/* 1. ULTRA-TRENDING HERO BANNER WITH REAL FOUNDER IMAGE */}
      <section className="relative bg-gradient-to-br from-[#002842] via-[#005280] to-[#0095da] text-white pt-10 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
        {/* Ambient Glowing Blobs with dynamic animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.25, 0.4, 0.25],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-24 -right-24 w-[550px] h-[550px] rounded-full bg-[#8cc63f]/30 blur-[110px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.45, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full bg-[#0095da]/35 blur-[100px]"
          />
          <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-teal-400/20 blur-[80px]" />
          

        </div>

        <div className="container-custom relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-sky-200 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-white font-medium">About Us</span>
            <ChevronRight className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-[#8cc63f] font-semibold">Founder & Hospital Legacy</span>
          </nav>

          {/* Main Hero Grid */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Founder Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-[#8cc63f] text-xs sm:text-sm font-bold shadow-md">
                <Sparkles className="w-4 h-4 fill-[#8cc63f] animate-pulse" />
                <span>Established 30th November 1990 • 33+ Years of Healing</span>
              </div>

              {/* Title */}
              <div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                  Dr. V. Jeganathan
                </h1>
                <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-white to-[#8cc63f] mt-2">
                  Founder of Billroth Hospitals
                </p>
                <p className="text-xs sm:text-sm font-semibold text-sky-200/90 mt-1">
                  Leading Surgical Gastroenterologist, LASER & Laparoscopic Surgeon
                </p>
              </div>

              {/* Paragraph intro */}
              <p className="text-sm sm:text-base lg:text-lg text-sky-100/95 leading-relaxed max-w-2xl font-normal">
                A visionary surgeon and born leader who transformed South Indian healthcare by introducing cutting-edge medical technologies, ethical transparent protocols, and boundless human compassion.
              </p>

              {/* Key Highlight Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  '30-Bed Genesis in 1990',
                  'Laparoscopic Surgery Pioneer',
                  '2005 Tsunami Relief Hero',
                  'Vijayapuram Statue Honor',
                  '350+ Bed Super Specialty'
                ].map((pill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-sky-100 text-xs font-semibold backdrop-blur-sm transition-colors"
                  >
                    ✓ {pill}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <button
                  type="button"
                  onClick={() => scrollToSection('founder-story-cards')}
                  className="px-7 py-3.5 rounded-full bg-[#8cc63f] hover:bg-[#7db536] text-white font-extrabold text-sm sm:text-base shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Read Founder Biography</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('hospital-history')}
                  className="px-7 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-sm sm:text-base backdrop-blur-md border border-white/30 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>History of Hospital</span>
                  <History className="w-4 h-4 text-[#8cc63f]" />
                </button>
              </div>
            </motion.div>

            {/* Right Column: Authentic Image Showcase with Levitation Effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative group"
              >
                {/* Glowing Aura behind image */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-[#8cc63f] via-[#0095da] to-teal-300 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-500 pointer-events-none" />
                
                {/* Main Glassmorphism Frame */}
                <div className="relative p-6 sm:p-8 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/30 shadow-2xl overflow-hidden">
                  
                  {/* Floating Header Tag */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/20">
                    <span className="text-xs font-black uppercase tracking-wider text-[#8cc63f] flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 fill-[#8cc63f]" />
                      Visionary Founder
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#8cc63f]/20 border border-[#8cc63f]/40 text-[#8cc63f] text-[11px] font-bold">
                      1953 – 2007
                    </span>
                  </div>

                  {/* Real Founder Image with Artistic Swirls */}
                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-white/20 to-white/5 p-4 border border-white/20 group-hover:scale-[1.02] transition-transform duration-500">
                    <img
                      src={founderData.founder.image}
                      alt="Dr. V. Jeganathan - Founder of Billroth Hospitals"
                      className="w-full h-auto object-contain max-h-[300px] sm:max-h-[340px] drop-shadow-2xl mx-auto"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://billrothhospitals.com/wp-content/uploads/2023/10/Jeganathan.png';
                      }}
                    />
                  </div>

                  {/* Caption */}
                  <div className="mt-5 text-center">
                    <h3 className="text-xl font-black text-white">Late Dr. V. Jeganathan</h3>
                    <p className="text-xs text-sky-200 mt-0.5">Founder & Chairman, Billroth Hospitals</p>
                    <p className="text-[11px] text-sky-100/80 italic mt-2">
                      "Uplifting others in the journey of growth"
                    </p>
                  </div>

                  {/* Quick Bottom Stats */}
                  <div className="mt-4 pt-3 border-t border-white/15 grid grid-cols-2 text-center text-xs">
                    <div>
                      <span className="block font-black text-lg text-[#8cc63f]">33+</span>
                      <span className="text-sky-200 text-[11px]">Years of Legacy</span>
                    </div>
                    <div className="border-l border-white/15">
                      <span className="block font-black text-lg text-white">350+</span>
                      <span className="text-sky-200 text-[11px]">Hospital Beds</span>
                    </div>
                  </div>

                </div>
              </motion.div>
            </motion.div>
          </div>



        </div>
      </section>

      {/* 2. THREE AUTHENTIC FOUNDER BIOGRAPHY CARDS */}
      <section id="founder" className="py-16 sm:py-20 bg-white">
        <div id="founder-story-cards"></div>
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-100 text-[#0095da] text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>The Founder's Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              A Legacy of <span className="text-[#0095da]">Excellence & Humanity</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              From founding Chennai's most trusted hospital to leading humanitarian disaster relief, Dr. V. Jeganathan's principles remain the heartbeat of Billroth Hospitals.
            </p>
          </div>

          {/* 3 Story Cards */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Bio Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="p-7 rounded-3xl bg-gradient-to-br from-slate-50 to-sky-50/40 border border-slate-200/80 hover:border-[#0095da]/40 hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0095da] text-white flex items-center justify-center mb-5 shadow-md shadow-sky-500/20 group-hover:scale-110 transition-transform">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-[#0095da] uppercase tracking-wider">Pioneering Surgeon</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">
                  Surgical Gastroenterology & Technology
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {founderData.founder.bio[0]}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/60 text-xs font-extrabold text-[#0095da]">
                Nov 30, 1990 Foundation
              </div>
            </motion.div>

            {/* Bio Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -6 }}
              className="p-7 rounded-3xl bg-gradient-to-br from-slate-50 to-emerald-50/40 border border-slate-200/80 hover:border-[#8cc63f]/50 hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#8cc63f] text-white flex items-center justify-center mb-5 shadow-md shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-[#8cc63f] uppercase tracking-wider">Humanitarian Hero</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">
                  2005 Tsunami Relief & Vijayapuram Statue
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {founderData.founder.bio[1]}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/60 text-xs font-extrabold text-[#8cc63f]">
                Vijayapuram Memorial Statue
              </div>
            </motion.div>

            {/* Bio Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -6 }}
              className="p-7 rounded-3xl bg-gradient-to-br from-slate-50 to-sky-50/40 border border-slate-200/80 hover:border-[#0095da]/40 hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#004b77] text-white flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-[#0095da] uppercase tracking-wider">Global Standards</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">
                  Patient-Centric Ambition & Repute
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {founderData.founder.bio[2]}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/60 text-xs font-extrabold text-[#0095da]">
                Defying Boundaries
              </div>
            </motion.div>
          </div>

          {/* Inspirational Quote Strip */}
          <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-sky-50 via-teal-50 to-emerald-50 border-l-4 border-[#0095da] shadow-sm flex flex-col sm:flex-row gap-5 items-center">
            <Quote className="w-12 h-12 text-[#0095da] shrink-0 opacity-70" />
            <div className="flex-1">
              <p className="text-slate-800 font-semibold text-sm sm:text-base italic">
                "{founderData.founder.quote}"
              </p>
              <span className="block mt-2 text-xs font-black text-[#0095da]">
                — Late Dr. V. Jeganathan, Founder of Billroth Hospitals
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HISTORY OF HOSPITAL - ULTRA-ATTRACTIVE REDESIGN WITH ANIMATIONS */}
      <section id="history" className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 via-sky-50/30 to-white relative overflow-hidden">
        <div id="hospital-history"></div>
        
        {/* Subtle Ambient Background Lighting */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#0095da]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#8cc63f]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10">
          
          {/* Trending Header Banner with Glassmorphism & Gradient Shimmer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl p-6 sm:p-8 mb-12 overflow-hidden shadow-xl"
            style={{
              background: 'linear-gradient(135deg, #003e66 0%, #0072aa 50%, #0095da 100%)',
            }}
          >
            {/* Animated shimmer beam */}
            <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 animate-pulse pointer-events-none" />
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-[#8cc63f] shadow-inner">
                  <History className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#8cc63f] block">
                    Institution Heritage & Milestones
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
                    History of Hospital
                  </h2>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-sky-100">
                <BadgeCheck className="w-4 h-4 text-[#8cc63f]" />
                <span>33+ Years of Continuous Service</span>
              </div>
            </div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Authentic Content Presented in High-End Glassmorphism Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-9 shadow-xl border border-slate-200/80 space-y-6 relative overflow-hidden">
                
                {/* Decorative Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0095da] via-teal-400 to-[#8cc63f]" />

                {/* Date Highlight Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-50 to-emerald-50 border border-sky-200/60 shadow-sm">
                  <Calendar className="w-4 h-4 text-[#0095da]" />
                  <span className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                    On November 30th, 1990,
                  </span>
                </div>

                {/* Paragraphs */}
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100/80 hover:bg-slate-50 transition-colors">
                    The Founder of Billroth, <strong>Late Dr. V. Jeganathan</strong> launched Billroth Hospitals with a block of 30 beds. After six years, another block with 70 beds was added to the facility. 2003 was a landmark year as Billroth took over <strong>Kalliapa Hospitals</strong>, a 100-bedded multi-specialty hospital.
                  </p>

                  <p className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100/80 hover:bg-slate-50 transition-colors">
                    With the addition of <strong>Shenoy Nagar S block in 2007</strong>, Billroth turned into a 350-bedded super-specialty establishment. Unfortunately on May 17th, 2007, when the founder was living his dream of making quality healthcare to a common man, he met his sad end. That is when his son <strong>Dr. Rajesh Jeganathan</strong>, who was only 26 years old then, had to shoulder the entire responsibility and carry forward his father's dream.
                  </p>

                  <p className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100/80 hover:bg-slate-50 transition-colors">
                    In his able hands, Billroth continued to grow and has now become a name that reads synonymous to expert and most reliable healthcare in the country. Dr. Rajesh introduced the <strong>first Dual CT scan in Tamil Nadu</strong>. He introduced several other departments and transformed Billroth from Multi-Specialty to Super Specialty Hospital. The hospital has emerged to be one of the pioneers in <strong>RapidArc Treatment for Cancer</strong> and <strong>NICU with sophisticated labor ward</strong>.
                  </p>

                  <p className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100/80 hover:bg-slate-50 transition-colors">
                    Dr. Rajesh has also been undertaking several philanthropic projects offering free healthcare services for the poor and needy. It is this <strong>'Giver's Gain'</strong> policy that has won millions of hearts and has made Billroth what it is today.
                  </p>
                </div>

                {/* MD Quote Card */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="p-5 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50/40 to-sky-50 border-l-4 border-[#8cc63f] shadow-sm flex items-start gap-3.5"
                >
                  <Quote className="w-7 h-7 text-[#8cc63f] shrink-0 opacity-80 mt-0.5" />
                  <div>
                    <p className="text-xs sm:text-sm font-extrabold text-slate-900 italic leading-snug">
                      "{founderData.successor.quote}"
                    </p>
                    <span className="block mt-1.5 text-xs font-bold text-[#8cc63f]">
                      — Dr. Rajesh Jeganathan, Chairman & MD
                    </span>
                  </div>
                </motion.div>

              </div>
            </motion.div>

            {/* Right Column: Ultra-Attractive 3D Layered Frame for the Real Building Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <div className="relative group">
                
                {/* Glowing Outer Rings */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#0095da] via-teal-400 to-[#8cc63f] rounded-[2.5rem] blur-xl opacity-30 group-hover:opacity-60 transition duration-700 pointer-events-none" />
                
                {/* Image Container Card */}
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 250 }}
                  className="relative p-4 sm:p-5 bg-white rounded-[2rem] shadow-2xl border border-slate-200/90 overflow-hidden"
                >
                  {/* Real Building Photo */}
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={founderData.historyImage}
                      alt="Billroth Hospitals Shenoy Nagar Building Heritage"
                      className="w-full h-auto object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://billrothhospitals.com/wp-content/uploads/2023/11/history.png';
                      }}
                    />
                    
                    {/* Floating Corner Badges */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-[#0095da]/90 backdrop-blur-md text-white text-xs font-bold shadow-md flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-[#8cc63f]" />
                        Shenoy Nagar Flagship
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3">
                      <span className="px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-[#8cc63f] text-xs font-black shadow-md">
                        350+ Beds
                      </span>
                    </div>
                  </div>

                  {/* Bottom Accreditations Bar */}
                  <div className="p-4 text-center space-y-2">
                    <span className="text-xs font-black text-[#0095da] uppercase tracking-wider block">
                      Shenoy Nagar & RA Puram Campuses
                    </span>
                    <p className="text-xs text-slate-500 font-medium">
                      Evolution from 30 beds in 1990 to 350-bed Super Specialty Center
                    </p>
                    
                    <div className="pt-2 flex items-center justify-center gap-3 text-[11px] font-bold text-slate-600 border-t border-slate-100">
                      <span className="flex items-center gap-1 text-[#8cc63f]">
                        <CheckCircle2 className="w-3.5 h-3.5" /> NABH Accredited
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-[#0095da]">
                        <CheckCircle2 className="w-3.5 h-3.5" /> NABL Certified
                      </span>
                    </div>
                  </div>

                </motion.div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 4. REAL SURGICAL STATS BAR (GREEN-TO-BLUE GRADIENT) */}
      <section id="surgical-stats" className="py-12 sm:py-16 bg-gradient-to-r from-[#0095da] via-[#20a39e] to-[#8cc63f] text-white shadow-xl relative overflow-hidden" ref={statsRef}>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            {surgicalStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-2xl hover:bg-white/10 transition-all cursor-default"
              >
                <div className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-2 drop-shadow-sm">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={statsInView} />
                </div>
                <div className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-sky-100">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BIOGRAPHICAL MILESTONE ROADMAP (CHRONOLOGICAL ORDERLY JOURNEY) */}
      <section id="milestone" className="py-20 sm:py-28 bg-gradient-to-b from-[#f8fafc] via-slate-50 to-white relative overflow-hidden">
        <div id="timeline"></div>
        <div id="milestone-timeline"></div>
        {/* Subtle Ambient Background Lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-r from-[#0095da]/10 via-teal-300/10 to-[#8cc63f]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="container-custom relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-50 to-sky-50 border border-emerald-200/70 text-[#0095da] text-xs font-black uppercase tracking-widest mb-3 shadow-sm">
              <Compass className="w-4 h-4 text-[#8cc63f]" />
              <span>Chronological Legacy Roadmap (1953 – Present)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              The Founder's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0095da] to-[#8cc63f]">Journey Roadmap</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
              Follow the orderly milestone path tracing Dr. V. Jeganathan's life from 1953 in Nerkunam village to the establishment and technological leadership of Billroth Hospitals.
            </p>
          </div>

          {/* ROADMAP TRACK */}
          <div className="relative max-w-5xl mx-auto">
            {/* Center Roadmap Spine Line (Desktop) */}
            <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-1.5 bg-gradient-to-b from-[#0095da] via-[#8cc63f] to-[#0095da] -translate-x-1/2 rounded-full opacity-60 shadow-[0_0_12px_rgba(0,149,218,0.3)]" />

            {/* Left Roadmap Spine Line (Mobile / Tablet) */}
            <div className="lg:hidden absolute left-6 sm:left-8 top-6 bottom-6 w-1.5 bg-gradient-to-b from-[#0095da] via-[#8cc63f] to-[#0095da] rounded-full opacity-50 shadow-[0_0_10px_rgba(0,149,218,0.3)]" />

            <div className="space-y-12 sm:space-y-16 lg:space-y-20">
              {timelineMilestones.map((item, idx) => {
                const isEven = idx % 2 === 0;
                const milestoneNum = String(idx + 1).padStart(2, '0');

                return (
                  <motion.div
                    key={item.year + item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                    className={`relative flex flex-col lg:flex-row items-center ${
                      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } gap-6 lg:gap-12 pl-14 sm:pl-16 lg:pl-0`}
                  >
                    {/* Content Section (Desktop 50% width) */}
                    <div className={`w-full lg:w-[calc(50%-3.5rem)] ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl border border-slate-200/80 hover:border-[#0095da]/40 transition-all duration-300 group">
                        
                        {/* Year & Tag Pill */}
                        <div className={`flex items-center gap-2 mb-3 flex-wrap ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0095da] text-white font-black text-xs sm:text-sm shadow-md shadow-sky-500/20">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{item.year}</span>
                          </span>
                          <span className="px-3 py-1 rounded-full bg-[#8cc63f]/15 border border-[#8cc63f]/30 text-[#609122] font-bold text-xs uppercase tracking-wider">
                            {item.tag}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-[#0095da] transition-colors leading-snug">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5 font-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Center Glowing Roadmap Node / Pin */}
                    <div className="absolute left-6 sm:left-8 lg:left-1/2 -translate-x-1/2 z-20 shrink-0">
                      <div className="relative flex items-center justify-center">
                        {/* Pulsing ring */}
                        <div className="absolute w-12 h-12 rounded-full bg-[#8cc63f]/40 animate-ping opacity-75 pointer-events-none" />
                        <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#0095da] to-[#8cc63f] text-white font-black text-xs sm:text-base flex items-center justify-center shadow-xl ring-4 ring-white border-2 border-white">
                          {milestoneNum}
                        </div>
                      </div>
                    </div>

                    {/* Illustrated Artwork Emblem (Desktop 50% width) */}
                    <div className={`w-full lg:w-[calc(50%-3.5rem)] flex ${isEven ? 'lg:justify-start' : 'lg:justify-end'}`}>
                      <motion.div
                        whileHover={{ scale: 1.08, rotate: isEven ? 2 : -2 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        onClick={() => setLightboxIndex(idx)}
                        className="relative group cursor-pointer"
                      >
                        {/* Glow effect */}
                        <div className="absolute -inset-2 bg-gradient-to-tr from-[#0095da]/30 to-[#8cc63f]/30 rounded-full blur-xl group-hover:blur-2xl transition-all opacity-70 pointer-events-none" />
                        
                        {/* Circular Emblem Frame */}
                        <div className="relative w-32 h-32 sm:w-44 sm:h-44 rounded-full p-2 bg-gradient-to-tr from-[#0095da] via-teal-400 to-[#8cc63f] shadow-2xl flex items-center justify-center">
                          <div className="w-full h-full rounded-full bg-white p-2 overflow-hidden flex items-center justify-center relative">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-contain rounded-full group-hover:scale-105 transition-transform duration-300"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src =
                                  'https://billrothhospitals.com/wp-content/uploads/2023/11/Fonder-Timeline-Website-01.png';
                              }}
                            />
                            
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-slate-950/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-center p-2">
                              <Maximize2 className="w-6 h-6 text-[#8cc63f] mb-1" />
                              <span className="text-[10px] font-black uppercase tracking-wider">Enlarge</span>
                            </div>
                          </div>
                        </div>

                        {/* Floating Step Pill */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-slate-900 text-[#8cc63f] text-[10px] font-black shadow-md border border-slate-700 whitespace-nowrap">
                          Stop {milestoneNum} • {item.year.split(' ')[0]}
                        </div>
                      </motion.div>
                    </div>

                  </motion.div>
                );
              })}
            </div>

            {/* Final Roadmap Finish Marker */}
            <div className="mt-16 sm:mt-20 text-center relative z-10">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#0095da] to-[#8cc63f] text-white font-extrabold text-xs sm:text-sm shadow-xl">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span>33+ Years of Continuous Healthcare Excellence & Innovation</span>
              </div>
            </div>

          </div>

          {/* Lightbox / Zoom Modal for Historical Illustrations */}
          <AnimatePresence>
            {lightboxIndex !== null && timelineMilestones[lightboxIndex] && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
                onClick={() => setLightboxIndex(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative max-w-xl w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden border border-white/20"
                >
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(null)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer z-20"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-white p-3 shadow-2xl border-4 border-[#8cc63f] mb-5 overflow-hidden flex items-center justify-center">
                      <img
                        src={timelineMilestones[lightboxIndex].image}
                        alt={timelineMilestones[lightboxIndex].title}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            'https://billrothhospitals.com/wp-content/uploads/2023/11/Fonder-Timeline-Website-01.png';
                        }}
                      />
                    </div>

                    <span className="px-3.5 py-1 rounded-full bg-[#0095da]/10 text-[#0095da] font-black text-xs mb-2">
                      {timelineMilestones[lightboxIndex].year} • {timelineMilestones[lightboxIndex].tag}
                    </span>

                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                      {timelineMilestones[lightboxIndex].title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
                      {timelineMilestones[lightboxIndex].description}
                    </p>

                    <div className="flex items-center justify-between w-full mt-6 pt-4 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() =>
                          setLightboxIndex((prev) =>
                            prev > 0 ? prev - 1 : timelineMilestones.length - 1
                          )
                        }
                        className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" /> Previous
                      </button>
                      <span className="text-xs font-bold text-slate-400">
                        {lightboxIndex + 1} / {timelineMilestones.length}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          setLightboxIndex((prev) => (prev + 1) % timelineMilestones.length)
                        }
                        className="px-4 py-2 rounded-xl bg-[#0095da] hover:bg-[#0077b6] text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        Next <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      {/* 6. FIVE CORE VALUES (REAL WEBSITE 5-PILLAR DESIGN) */}
      <section id="core-values" className="py-16 sm:py-24 bg-white">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-100 text-[#0095da] text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Our Foundational Principles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              5 Core Values of <span className="text-[#0095da]">Billroth Hospitals</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Click on any value to explore how Billroth upholds the highest ethical and clinical standards for every patient.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
            {/* Left: Emblem */}
            <div className="lg:col-span-4 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-br from-[#8cc63f] to-emerald-600 text-white flex flex-col items-center justify-center shadow-xl shadow-emerald-500/20 mb-3 cursor-pointer"
              >
                <HeartHandshake className="w-12 h-12 sm:w-16 sm:h-16" />
                <span className="text-xs sm:text-sm font-black mt-1 uppercase tracking-wider">Core Values</span>
              </motion.div>
              <p className="text-xs text-slate-500 font-semibold">Billroth Standard of Care</p>
            </div>

            {/* Right: 5 Value Buttons */}
            <div className="lg:col-span-8 space-y-3">
              {coreValues.map((val) => {
                const isSelected = activeValueId === val.id;
                return (
                  <motion.div
                    key={val.id}
                    onClick={() => setActiveValueId(val.id)}
                    whileHover={{ scale: 1.01 }}
                    className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all border ${
                      isSelected
                        ? 'bg-[#0095da] text-white shadow-lg border-[#0095da]'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black ${
                          isSelected ? 'bg-white text-[#0095da]' : 'bg-[#0095da] text-white'
                        }`}>
                          0{val.id}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold">{val.title}</h3>
                      </div>
                      <span className={`text-xs font-semibold ${isSelected ? 'text-sky-200' : 'text-slate-500'}`}>
                        {val.tagline}
                      </span>
                    </div>
                    {isSelected && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-xs sm:text-sm text-sky-100 mt-3 pt-3 border-t border-white/20 leading-relaxed"
                      >
                        {val.description}
                      </motion.p>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 7. OUR VISION & OUR MISSION */}
      <section id="vision-mission" className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-[#002d4b] to-[#004b77] text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vision Card */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl text-center flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full bg-[#8cc63f] text-white flex items-center justify-center shadow-lg mb-4">
                <Globe className="w-10 h-10" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8cc63f]">Future-Focused Healing</span>
              <h3 className="text-2xl font-black mt-1 mb-4">Our Vision</h3>
              <p className="text-sm sm:text-base text-sky-100 leading-relaxed italic">
                "{visionMission.vision.statement}"
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl text-center flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full bg-[#8cc63f] text-white flex items-center justify-center shadow-lg mb-4">
                <HeartPulse className="w-10 h-10" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8cc63f]">Clinical & Human Excellence</span>
              <h3 className="text-2xl font-black mt-1 mb-4">Our Mission</h3>
              <p className="text-sm sm:text-base text-sky-100 leading-relaxed italic">
                "{visionMission.mission.statement}"
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 8. CAMPUSES SHOWCASE */}
      <section id="campuses" className="py-16 sm:py-24 bg-slate-50">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-100 text-[#0095da] text-xs font-bold uppercase tracking-wider mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>State-of-the-Art Infrastructure</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Premier <span className="text-[#0095da]">Hospital Campuses</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Conveniently located multi-specialty hubs in Chennai equipped with modern operating theaters, intensive care units, and round-the-clock emergency care.
            </p>
          </div>

          {/* Campuses Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {hospitalHeritage.map((campus, idx) => (
              <motion.div
                key={campus.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-slate-100 flex flex-col justify-between group transition-all"
              >
                <div>
                  <div className="relative h-60 sm:h-72 overflow-hidden">
                    <img
                      src={campus.image}
                      alt={campus.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3.5 py-1 rounded-full bg-[#0095da] text-white text-xs font-bold shadow-md">
                        {campus.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl sm:text-2xl font-bold">{campus.title}</h3>
                      <p className="text-xs sm:text-sm text-sky-200 flex items-center gap-1.5 mt-1">
                        <MapPin className="w-4 h-4 text-[#8cc63f] shrink-0" />
                        <span>{campus.address}</span>
                      </p>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Facility Capacity</span>
                      <span className="text-sm font-extrabold text-[#0095da]">{campus.capacity}</span>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {campus.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">Key Highlights:</div>
                      {campus.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-[#8cc63f] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0">
                  <div className="flex flex-wrap gap-3">
                    <Link
                      to="/appointment"
                      className="flex-1 text-center py-2.5 px-4 rounded-xl bg-[#0095da] hover:bg-[#0077b6] text-white font-bold text-xs sm:text-sm transition-colors shadow-md"
                    >
                      Book Appointment
                    </Link>
                    <a
                      href={`tel:${hospitalInfo.emergency}`}
                      className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Phone className="w-4 h-4 text-red-500" />
                      <span>24/7 Emergency</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
