import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe2,
  Plane,
  FileText,
  ShieldCheck,
  Building2,
  Languages,
  PhoneCall,
  Clock,
  CheckCircle2,
  Send,
  Calendar,
  Phone,
  Sparkles,
  MapPin,
  Car,
  Hotel,
  CreditCard,
  HeartPulse,
  Award,
  Stethoscope,
  Compass,
  Check,
  Headphones,
  Mail,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  Luggage,
  BedDouble,
  FileSpreadsheet
} from 'lucide-react';
import { hospitalInfo } from '../data/data';

// 6 Core Pillars from Original Website
const corePillars = [
  {
    title: 'Service from Specialists',
    desc: 'Our team consists of medical professionals with extensive experience and expertise in specialized medical practices. The dedicated team has deep familiarity with international methods and clinical protocols, guaranteeing personalized care all the way.',
    icon: Stethoscope,
    badge: 'Clinical Mastery'
  },
  {
    title: 'World-Class Equipment',
    desc: 'To offer you the best treatment, we have acquired some of the finest medical equipment from across the globe. By trusting renowned international healthcare brands, we raise the bar when it comes to precision and clinical efficacy.',
    icon: HeartPulse,
    badge: 'State-of-the-Art'
  },
  {
    title: 'Comfort at a Convenient Price',
    desc: 'Receive world-class medical procedures at prices significantly lower than in other countries. Not just the surgical cost, but your overall expenses including travel and accommodation remain light on your budget.',
    icon: CreditCard,
    badge: 'Cost Advantage'
  },
  {
    title: 'Pre-Arrival Scheduling',
    desc: 'Every second is crucial, and our patient’s time is paramount. We ensure all your specialist consultations, diagnostic tests, and OT schedules are confirmed before you even depart. Just land and let our experts take care of the rest.',
    icon: Clock,
    badge: 'Zero Waiting'
  },
  {
    title: 'Facilitating a Comfortable Stay',
    desc: 'Air-conditioned rooms and deluxe executive suites with attached bathrooms, cable TV, laundry, high-speed Wi-Fi, ISD calling, 24/7 attendant care, and arrangements for local Chennai sightseeing tours.',
    icon: BedDouble,
    badge: 'Luxury Comfort'
  },
  {
    title: 'Warm Welcome & Worry-Free Stay',
    desc: 'Staying away from home for medical treatment can be stressful. Our international specialists and multilingual interpreters communicate fluently in your language to make you and your accompanying family feel completely at ease.',
    icon: Globe2,
    badge: 'Warm Hospitality'
  }
];

// Pre-Arrival Patient Preparation Checklist (Exact 7 Points from Original Site)
const preparationChecklist = [
  {
    step: '01',
    title: 'Request Initial Cost Estimate',
    desc: 'Send a request for a detailed medical service cost estimate for your anticipated treatment and consult with our medical board.',
    icon: FileSpreadsheet
  },
  {
    step: '02',
    title: 'Travel Documents & Passports',
    desc: 'Keep all your valid passports, Indian Medical Visas (e-Med Visa), and embassy invitation letters readily available.',
    icon: Luggage
  },
  {
    step: '03',
    title: 'Translated Medical Records',
    desc: 'Ensure all previous clinical records are translated into English, including laboratory reports, operative summaries, and discharge summaries.',
    icon: FileText
  },
  {
    step: '04',
    title: 'Radiology Films & Scans',
    desc: 'Carry original high-resolution diagnostic films (X-rays, MRI, CT scans, Ultrasound) with official radiologist reports in English.',
    icon: Compass
  },
  {
    step: '05',
    title: 'Glass Pathology Slides & Biopsies',
    desc: 'Carry original glass histopathology and biopsy slides accompanied by clinical histopathology reports translated into English.',
    icon: ShieldCheck
  },
  {
    step: '06',
    title: 'Hand Baggage Copy',
    desc: 'Keep an extra complete physical copy of your entire medical report in your hand carry-on baggage in case checked luggage is delayed.',
    icon: Award
  },
  {
    step: '07',
    title: 'Prescribed Medications Stock',
    desc: 'Carry an adequate stock of all currently prescribed maintenance medications that you consume regularly in original labeled boxes.',
    icon: HeartPulse
  }
];

// Range of Services (Authentic from Original Site)
const rangeOfServices = [
  {
    title: 'Remote Medical Consultation',
    desc: 'Share your diagnostic scans and history. Our specialist physicians examine your case, formulate a tailored treatment plan, and schedule appointments prior to arrival.',
    icon: FileText
  },
  {
    title: 'Care at Every Level',
    desc: 'From primary outpatient consultations to complex quaternary interventions (organ transplants, robotic surgeries, interventional oncology), we fulfill every clinical need.',
    icon: ShieldCheck
  },
  {
    title: 'Transparent Procedures & Payment',
    desc: 'Transparent itemized fee estimates provided before departure. We support advance financial arrangements with foreign embassies, corporate employers, and international health insurers.',
    icon: CreditCard
  },
  {
    title: 'Embassy Visa Assistance Letters',
    desc: 'We issue official medical visa recommendation letters to the Indian Embassy in your country for the patient and up to two medical attendants.',
    icon: Award
  },
  {
    title: 'Airport Transfer & City Logistics',
    desc: 'Located just 40 minutes from Chennai International Airport (MAA). Our transit team provides seamless airport pick-up, drop-off, and local transport coordination.',
    icon: Car
  },
  {
    title: 'Multilingual Interpreters & SPOC',
    desc: 'All our doctors and coordinators are fluent in English. Dedicated language interpreters are available in Arabic, French, Bengali, Russian, and Swahili.',
    icon: Languages
  }
];

const countriesServed = [
  { region: 'Middle East', list: ['Oman', 'UAE', 'Saudi Arabia', 'Kuwait', 'Bahrain', 'Qatar'] },
  { region: 'Africa', list: ['Kenya', 'Tanzania', 'Nigeria', 'Uganda', 'Ethiopia', 'Mauritius', 'Seychelles'] },
  { region: 'South Asia & Asia-Pacific', list: ['Bangladesh', 'Sri Lanka', 'Maldives', 'Nepal', 'Myanmar'] }
];

const InternationalPatients = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    patientName: '',
    country: '',
    email: '',
    phone: '',
    specialty: 'Gastroenterology & GI Surgery',
    passportNumber: '',
    medicalSummary: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        patientName: '',
        country: '',
        email: '',
        phone: '',
        specialty: 'Gastroenterology & GI Surgery',
        passportNumber: '',
        medicalSummary: ''
      });
    }, 4500);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">
      {/* 1. HERO BANNER WITH CLEAR PHOTOREALISTIC BACKGROUND */}
      <section className="relative overflow-hidden text-white py-16 sm:py-20 lg:py-28 min-h-[560px] flex items-center">
        {/* Background Image with High-Clarity Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/international-hero-bg.jpg"
            alt="International Patient Services & Global Healthcare at Billroth Hospitals"
            className="w-full h-full object-cover object-center transform scale-100"
          />
          {/* Directional gradient overlay to ensure crystal clear contrast on text without obscuring the background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#021824]/90 via-[#063248]/60 to-slate-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#021824]/85 via-transparent to-black/20" />
        </div>

        {/* Ambient Glow Accents */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#0095da]/20 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#8cc63f]/20 rounded-full blur-3xl pointer-events-none z-0" />

        <div className="container-custom relative z-10 w-full">
          <div className="max-w-3xl space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-black uppercase tracking-widest text-[#8cc63f]"
            >
              <Globe2 size={14} />
              <span>Our Care Beyond Boundaries</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-black tracking-tight leading-tight"
            >
              International Patient Service & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-teal-200 to-[#8cc63f]">
                Global Medical Tourism
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base lg:text-lg text-slate-100 leading-relaxed font-normal drop-shadow-sm"
            >
              Commitment to patients from across the globe. After successfully treating thousands of patients across India, Billroth Hospitals introduces its International Patient Service with the most modern facilities, state-of-the-art equipment, and complete comfort.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-2 text-xs font-bold text-slate-200"
            >
              <span className="flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <MapPin size={14} className="text-[#8cc63f]" />
                <span>Chennai, India</span>
              </span>
              <span className="flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <Plane size={14} className="text-[#8cc63f]" />
                <span>40 Mins from Airport (MAA)</span>
              </span>
              <span className="flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <Languages size={14} className="text-[#8cc63f]" />
                <span>Multilingual Support</span>
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 pt-3"
            >
              <a
                href="#free-quote-form"
                className="px-6 py-3.5 rounded-full text-white font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 flex items-center gap-2"
                style={{
                  background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)'
                }}
              >
                <span>Request Free Treatment Quote</span>
                <ArrowRight size={14} />
              </a>
              <a
                href="tel:7299404040"
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-black text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
              >
                <PhoneCall size={14} />
                <span>Call International Desk</span>
              </a>
            </motion.div>
          </div>

          {/* Key Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 mt-10 pt-8 border-t border-white/15"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center hover:bg-white/15 transition-colors">
              <div className="text-2xl sm:text-3xl font-black text-[#8cc63f]">40+</div>
              <div className="text-xs text-slate-200 font-bold mt-0.5">Countries Served</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center hover:bg-white/15 transition-colors">
              <div className="text-2xl sm:text-3xl font-black text-white">100%</div>
              <div className="text-xs text-slate-200 font-bold mt-0.5">Visa Letter Assistance</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center hover:bg-white/15 transition-colors">
              <div className="text-2xl sm:text-3xl font-black text-sky-300">24/7</div>
              <div className="text-xs text-slate-200 font-bold mt-0.5">Dedicated Desk & SPOC</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center hover:bg-white/15 transition-colors">
              <div className="text-2xl sm:text-3xl font-black text-[#8cc63f]">40 Min</div>
              <div className="text-xs text-slate-200 font-bold mt-0.5">From Airport (MAA)</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CORE PILLARS & VALUE PROPOSITIONS (EXACT FROM ORIGINAL SITE) */}
      <section className="container-custom py-16 sm:py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-black uppercase tracking-widest text-[#0095da]">
            Why Choose Billroth Hospitals
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
            Excellence & Comfort for Global Patients
          </h2>
          <p className="text-sm text-slate-500 mt-2 font-normal">
            With 33+ years of clinical mastery, Billroth guarantees international patients world-class surgical care, transparent pricing, and complete peace of mind.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {corePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#0095da]/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle top accent gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0095da] via-[#10a877] to-[#8cc63f] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0095da] group-hover:bg-[#0095da] group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                      <Icon size={22} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 group-hover:text-[#0095da] transition-colors leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. PRE-ARRIVAL PATIENT PREPARATION CHECKLIST (EXACT 7 STEPS FROM ORIGINAL SITE) */}
      <section className="bg-white border-y border-slate-200/80 py-16 sm:py-24">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-[#8cc63f]">
              Smooth & Relaxing Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
              Steps to Take Before Scheduling Your Procedure
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 font-normal">
              To ensure a hassle-free journey and immediate clinical readiness, please follow this checklist before arriving in Chennai:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {preparationChecklist.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-slate-50 rounded-3xl p-6 border border-slate-200 hover:border-[#8cc63f] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-[#10a877] group-hover:bg-[#10a877] group-hover:text-white flex items-center justify-center transition-colors">
                        <Icon size={18} />
                      </div>
                      <span className="text-2xl font-black text-slate-200 group-hover:text-[#8cc63f] transition-colors">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-sm font-black text-slate-900 group-hover:text-[#0095da] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. RANGE OF SERVICES (AUTHENTIC FROM ORIGINAL SITE) */}
      <section className="container-custom py-16 sm:py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-black uppercase tracking-widest text-[#0095da]">
            Complete Care Spectrum
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
            Range of International Services
          </h2>
          <p className="text-sm text-slate-500 mt-2 font-normal">
            As an international patient, you benefit from our full continuum of clinical mastery, travel logistics, and dedicated hospitality.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rangeOfServices.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.title}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#0095da]/50 transition-all duration-300 space-y-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0095da] flex items-center justify-center">
                  <Icon size={22} />
                </div>
                <h3 className="text-base font-black text-slate-900">{srv.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {srv.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. COUNTRIES SERVED & DIRECT 24/7 HELPLINES */}
      <section className="bg-gradient-to-br from-[#063248] via-[#094361] to-[#042436] text-white py-16 sm:py-20">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <span className="text-xs font-black uppercase tracking-widest text-[#8cc63f]">
                Global Reach & Recognition
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Trusted by Patients Across 40+ Nations
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                Billroth Hospitals is the trusted healthcare destination for patients from the Middle East, East Africa, and neighboring Asian countries seeking high-end surgical mastery at competitive costs.
              </p>

              <div className="space-y-3 pt-2">
                {countriesServed.map((group) => (
                  <div key={group.region} className="space-y-1.5">
                    <div className="text-[11px] font-black uppercase text-[#8cc63f] tracking-wider">
                      {group.region}
                    </div>
                    <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start">
                      {group.list.map((country) => (
                        <span
                          key={country}
                          className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-slate-200 font-semibold"
                        >
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 max-w-md w-full text-center space-y-5 shadow-2xl">
              <div className="w-14 h-14 rounded-2xl bg-[#8cc63f] text-slate-900 flex items-center justify-center mx-auto shadow-md">
                <Headphones size={28} />
              </div>
              <div>
                <h3 className="text-xl font-black text-white">24/7 International Desk</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Call us directly or message on WhatsApp to initiate your medical travel consultation.
                </p>
              </div>

              <div className="space-y-3 pt-2 border-t border-white/15 text-left text-xs font-bold">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-slate-300">Shenoy Nagar Campus:</span>
                  <a href="tel:7299404040" className="text-base font-black text-[#8cc63f] hover:underline">
                    +91 7299 404040
                  </a>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-slate-300">R.A. Puram Campus:</span>
                  <a href="tel:9566607100" className="text-base font-black text-[#8cc63f] hover:underline">
                    +91 9566 607100
                  </a>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-slate-300">Email Inquiries:</span>
                  <a href="mailto:international@billrothhospitals.com" className="text-xs font-black text-sky-300 hover:underline">
                    international@billrothhospitals.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. REQUEST A FREE TREATMENT QUOTE & MEDICAL EVALUATION FORM */}
      <section id="free-quote-form" className="container-custom py-16 sm:py-24">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl sm:rounded-[36px] p-6 sm:p-10 lg:p-14 border border-slate-200 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-[#0095da] text-xs font-black uppercase tracking-wider mb-2">
                <Globe2 size={14} />
                <span>Confidential Clinical Review</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Request a Free Treatment Quote
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
                Upload your medical summary to receive an initial clinical evaluation, estimated hospital stay, and transparent treatment costs from our senior medical faculty.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="text-xl font-black text-emerald-900">Inquiry Received Successfully!</h3>
                <p className="text-xs sm:text-sm text-emerald-700 max-w-md mx-auto">
                  Our International Patient Coordinator will contact you via WhatsApp & Email within 24 hours with a comprehensive clinical evaluation, treatment quotation, and visa letter guidelines.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-bold text-slate-700">Patient Full Name (as in Passport) *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mohammed Al-Rashid"
                      value={formData.patientName}
                      onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0095da] focus:ring-2 focus:ring-[#0095da]/20"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-bold text-slate-700">Country of Residence *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Oman, Kenya, UAE, Bangladesh"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0095da] focus:ring-2 focus:ring-[#0095da]/20"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-bold text-slate-700">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. ahmed.almansoori@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0095da] focus:ring-2 focus:ring-[#0095da]/20"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-bold text-slate-700">WhatsApp / Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +968 9123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0095da] focus:ring-2 focus:ring-[#0095da]/20"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-bold text-slate-700">Specialty of Interest *</label>
                    <select
                      value={formData.specialty}
                      onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0095da] focus:ring-2 focus:ring-[#0095da]/20 bg-white"
                    >
                      <option value="Gastroenterology & GI Surgery">Gastroenterology & GI Surgery</option>
                      <option value="Organ Transplant (Liver/Kidney)">Organ Transplant (Liver/Kidney)</option>
                      <option value="Cardiology & Cardiac Surgery">Cardiology & Cardiac Surgery</option>
                      <option value="Orthopedics & Joint Replacement">Orthopedics & Joint Replacement</option>
                      <option value="Oncology & Cancer Care">Oncology (Cancer Care)</option>
                      <option value="Neurology & Neuro Surgery">Neurology & Neuro Surgery</option>
                      <option value="Robotic Minimally Invasive Surgery">Robotic Minimally Invasive Surgery</option>
                      <option value="Executive Health Checkups">Master Health Checkups</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-bold text-slate-700">Current Medical Condition & History *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe symptoms, primary diagnosis, and current medications. You can also email detailed CT/MRI scans to international@billrothhospitals.com..."
                    value={formData.medicalSummary}
                    onChange={(e) => setFormData({ ...formData, medicalSummary: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0095da] focus:ring-2 focus:ring-[#0095da]/20"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-[#0095da]/20 hover:shadow-xl transition-all duration-300 active:scale-98 flex items-center justify-center gap-2"
                  style={{
                    background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)'
                  }}
                >
                  <Send size={15} />
                  <span>Submit for Free Medical Evaluation & Quote</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternationalPatients;
