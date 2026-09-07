import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FileText,
  UserCheck,
  Bed,
  Clock,
  ShieldCheck,
  AlertCircle,
  Phone,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Ambulance,
  HeartPulse,
  CreditCard,
  Sparkles,
  Users,
  Building2,
  HelpCircle,
  PhoneCall,
  MapPin,
  Send,
  ArrowRight,
  Stethoscope,
  Activity,
  BedDouble,
  Check,
  Info,
  BadgeCheck,
  AlertTriangle,
  ClipboardList,
  HeartHandshake,
  DoorOpen,
  Receipt,
  FileSpreadsheet,
  CheckCircle,
  PhoneForwarded,
  Layers,
  Sparkle
} from 'lucide-react';
import { hospitalInfo } from '../data/data';

// 6 Core Navigation Tabs matching User Image 1
const tabCategories = [
  { id: 'opd-guide', label: 'OUTPATIENT (OPD) GUIDE', icon: UserCheck, badge: 'UHID & Consults' },
  { id: 'ipd-admission', label: 'INPATIENT ADMISSION (IPD)', icon: Bed, badge: 'Rooms & Care' },
  { id: 'discharge-process', label: 'DISCHARGE PROCEDURE', icon: ClipboardList, badge: 'Billing & Summary' },
  { id: 'visitor-timings', label: 'VISITOR GUIDELINES & TIMINGS', icon: Clock, badge: 'Ward & ICU' },
  { id: 'emergency-ambulance', label: '24/7 AMBULANCE & EMERGENCY', icon: Ambulance, badge: 'ACLS Fleet' },
  { id: 'patient-rights', label: 'PATIENT RIGHTS & SAFETY', icon: ShieldCheck, badge: 'Care Charter' }
];

// 5 Core Official Guide Modules directly from original website
const officialCoreModules = [
  {
    id: 'opd-registration',
    title: 'Registration and billing for OPD',
    subtitle: 'Ground Floor Counters • Permanent UHID Generation',
    icon: UserCheck,
    tag: 'One-Time Event',
    accentColor: '#0095da',
    content:
      'Every patient who wishes to avail of the services at Billroth hospitals has to be registered. This is a one-time event that gives you a permanent UHID number. Registration and billing counters are present on the Ground floor near the OPD. The patient needs to pay for appointments and all other services prior to availing the same.',
    highlights: [
      'One-time registration generating a lifelong Unique Hospital ID (UHID)',
      'Counters conveniently situated on the Ground Floor near the main OPD entrance',
      'Pre-service payment settlement for doctor consultations and diagnostic investigations',
      'Digital health records linked automatically to your permanent UHID'
    ]
  },
  {
    id: 'appointments',
    title: 'Appointments',
    subtitle: 'Doctor Consultation & Specialist Scheduling',
    icon: Calendar,
    tag: 'Direct Desk',
    accentColor: '#10a877',
    content:
      'For OPD appointments, please contact us on 7299404040. Prior appointment scheduling ensures zero waiting time and guaranteed consultation with your preferred senior specialist doctor.',
    contact: '7299404040',
    contactLabel: 'Book OPD Appointment: 7299 404040',
    highlights: [
      'Multi-specialty senior consultant scheduling across all departments',
      'Flexible morning and evening clinic slots for working professionals',
      'SMS and WhatsApp confirmation with token number and floor details'
    ]
  },
  {
    id: 'accidents-emergency',
    title: 'Accidents and Emergency',
    subtitle: '24/7 Level-1 Trauma & Resuscitation Center',
    icon: Activity,
    tag: '24/7 Casualty',
    accentColor: '#ef4444',
    content:
      'Our emergency department works around the clock. In case of any emergency, contact the casualty medical officer on +91(44) 40274027.',
    contact: '+914440274027',
    contactLabel: 'Casualty Medical Officer: +91 (44) 40274027',
    highlights: [
      'Round-the-clock on-duty Casualty Medical Officers (CMO) and intensivists',
      'Bedside point-of-care diagnostics, ultrasound, and digital X-ray',
      'Zero triage delay with rapid-response stroke and cardiac emergency teams'
    ]
  },
  {
    id: 'ambulance-services',
    title: 'Ambulance Services',
    subtitle: '3 Fully Equipped Advanced Cardiac Life Support (ACLS) Fleet',
    icon: Ambulance,
    tag: 'Fleet on Standby',
    accentColor: '#f59e0b',
    content:
      'We have three fully equipped ambulances available to transport patients to and from the hospital. To avail this service, please contact us on +91(44) 40274027.',
    contact: '+914440274027',
    contactLabel: '24/7 Ambulance Dispatch: +91 (44) 40274027',
    highlights: [
      'Three dedicated ACLS ambulances covering Chennai metro & peripheral districts',
      'On-board transport ventilators, defibrillators, syringe pumps, and medical oxygen',
      'Certified emergency medical technicians (EMTs) providing en-route resuscitation'
    ]
  },
  {
    id: 'health-checkup',
    title: 'Health Checkup Appointments',
    subtitle: 'Comprehensive Master & Executive Preventive Packages',
    icon: HeartPulse,
    tag: 'Preventive Care',
    accentColor: '#8cc63f',
    content:
      'To book an appointment for a health checkup, please contact us on 7299404040.',
    contact: '7299404040',
    contactLabel: 'Health Checkup Booking: 7299 404040',
    highlights: [
      'Executive, Master, Comprehensive Cardiac, and Women Wellness screening suites',
      'Same-day consolidated lab reports and clinical diet/lifestyle counseling',
      'Complimentary doctor review and fasting breakfast in private screening lounge'
    ]
  }
];

// Room Categories & Accommodation Details
const roomCategories = [
  {
    name: 'General Ward',
    tag: 'Economic & Supervised',
    desc: 'Spacious, well-ventilated multi-bed unit with curtain partitions, shared washrooms, dedicated nursing call bells, and central oxygen outlets.',
    features: ['Central Nursing Station', 'Curtain Partitions', 'Attendant Chair', '24/7 Housekeeping', 'Individual Call Bell']
  },
  {
    name: 'Semi-Private Room',
    tag: 'Twin Sharing',
    desc: 'Dual-occupancy twin sharing room equipped with individual LED televisions, shared attached bathroom, and reclining attendant couch.',
    features: ['Twin Bed Sharing', 'Attached Bathroom', 'Individual Television', 'Attendant Recliner', 'Bedside Wardrobe']
  },
  {
    name: 'Single Deluxe Room',
    tag: 'Complete Privacy',
    desc: 'Private air-conditioned room offering complete patient privacy, attached modern washroom, sofa-cum-bed for attendant, telephone, and refrigerator.',
    features: ['Private Air-Conditioned Room', 'Attached Modern Washroom', 'Sofa-cum-Bed for Attendant', 'Refrigerator & Wi-Fi', 'Room Service Dining']
  },
  {
    name: 'Executive Suite',
    tag: 'Premium Luxury',
    desc: 'Luxury two-room suite featuring a patient room and a separate furnished visitor lounge, dedicated dining space, premium amenities, and priority nursing.',
    features: ['Separate Visitor Lounge', 'Dining Table & Workstation', 'Luxury Bathroom Amenities', 'Dedicated Nursing Support', 'Private Pantry']
  },
  {
    name: 'Intensive Care Units (ICU / CCU / NICU)',
    tag: 'Critical Care',
    desc: 'Multi-parameter computerized monitoring with 1:1 dedicated nursing ratio, HEPA filtration, state-of-the-art ventilators, and central telemetry.',
    features: ['1:1 Nursing Ratio', 'HEPA Laminar Airflow', 'Advanced Ventilator Support', '24/7 Intensivist On-Duty', 'Central Telemetry System']
  }
];

// FAQs
const faqs = [
  {
    q: 'How do I register for the first time at Billroth Hospitals?',
    a: 'Registration is a one-time event that generates your lifelong Unique Hospital Identification (UHID) number. Registration and billing counters are present on the Ground floor near the OPD. Please carry a valid government photo ID.'
  },
  {
    q: 'How do I book an OPD appointment or Health Checkup?',
    a: 'You can easily book OPD appointments and Master Health Checkups by contacting our central appointment desk at 7299404040 or through our online booking portal.'
  },
  {
    q: 'What is the contact number for Emergency Casualty and 24/7 Ambulance services?',
    a: 'For any emergency casualty or ambulance dispatch in Chennai, contact our Casualty Medical Officer directly at +91 (44) 40274027. We maintain three fully equipped ambulances on active standby.'
  },
  {
    q: 'What are the visiting hours for inpatients and ICU?',
    a: 'General & Private Wards: Morning 11:00 AM – 12:00 PM and Evening 4:30 PM – 7:00 PM. Intensive Care Units (ICU/CCU): Morning 11:30 AM – 12:00 PM and Evening 5:00 PM – 5:30 PM (1 visitor at a time with sterile ICU pass).'
  },
  {
    q: 'What documents are required for Cashless TPA / Insurance Admission?',
    a: 'Please present your TPA Health Card, Original Policy Document, Government Photo ID (Aadhaar/PAN/Passport), and Doctor\'s Admission Advice note at our TPA Help Desk on the Ground Floor.'
  },
  {
    q: 'What are the rules regarding child visitors and outside food?',
    a: 'Children below 12 years of age are strictly not permitted into inpatient wards and ICUs for infection control and their health safety. Outside cooked food is strictly prohibited inside the hospital premises.'
  }
];

const PatientGuide = () => {
  const [activeTab, setActiveTab] = useState('opd-guide');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    email: '',
    serviceType: 'OPD Consultation',
    preferredDate: '',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        patientName: '',
        phone: '',
        email: '',
        serviceType: 'OPD Consultation',
        preferredDate: '',
        notes: ''
      });
    }, 4500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-[#0095da] selection:text-white">
      {/* 1. HERO BANNER WITH PHOTOREALISTIC HOSPITAL RECEPTION BACKGROUND */}
      <section className="relative overflow-hidden text-white py-14 sm:py-20 lg:py-24 min-h-[560px] flex items-center">
        {/* Background Image with High-Clarity Directional Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/patient-guide-hero-bg.jpg"
            alt="Hospital Reception, OPD Registration and Patient Guide at Billroth Hospitals"
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
          />
          {/* Directional Overlay: high readability on content side while showcasing hospital reception */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#021824]/95 via-[#063248]/85 to-[#0b2535]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#021824] via-transparent to-black/30" />
          {/* Soft Mesh Ambient Highlights */}
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#0095da]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8cc63f]/15 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="container-custom relative z-10 w-full">
          <div className="max-w-3xl space-y-4">
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-black uppercase tracking-widest text-[#8cc63f] shadow-sm"
            >
              <FileText size={13} className="text-[#8cc63f]" />
              <span>PATIENTS & VISITORS</span>
            </motion.div>

            {/* Main Hero Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]"
            >
              Comprehensive <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-teal-200 to-[#8cc63f]">
                Patient & Visitor Guide
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow-sm"
            >
              Everything you need to know about OPD registration, room categories, inpatient admission checklists, visiting hours, and 24/7 ambulance contacts at Billroth Hospitals.
            </motion.p>
          </div>

          {/* 3 Interactive Quick Helpline Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 mt-8 pt-7 border-t border-white/15 max-w-5xl"
          >
            {/* Card 1: 24/7 Emergency */}
            <a
              href="tel:04440274027"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 hover:border-red-400/50 transition-all duration-300 flex items-center gap-3.5 shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/30 text-red-300 group-hover:bg-red-500 group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-xs">
                <Ambulance size={22} />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase font-black tracking-wider text-red-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
                  <span>24/7 EMERGENCY CASUALTY</span>
                </div>
                <div className="text-sm sm:text-base font-black text-white group-hover:text-red-200 transition-colors tracking-tight truncate">
                  +91 (44) 40274027
                </div>
              </div>
            </a>

            {/* Card 2: OPD Appointments */}
            <a
              href="tel:7299404040"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 hover:border-sky-400/50 transition-all duration-300 flex items-center gap-3.5 shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0095da]/30 text-sky-300 group-hover:bg-[#0095da] group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-xs">
                <Calendar size={22} />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase font-black tracking-wider text-sky-300">
                  OPD APPOINTMENTS
                </div>
                <div className="text-sm sm:text-base font-black text-white group-hover:text-sky-200 transition-colors tracking-tight truncate">
                  7299 404040
                </div>
              </div>
            </a>

            {/* Card 3: TPA & Insurance */}
            <a
              href="tel:04426264000"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 hover:border-[#8cc63f]/50 transition-all duration-300 flex items-center gap-3.5 shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-[#8cc63f]/30 text-[#8cc63f] group-hover:bg-[#8cc63f] group-hover:text-slate-900 flex items-center justify-center shrink-0 transition-colors shadow-xs">
                <ShieldCheck size={22} />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase font-black tracking-wider text-[#8cc63f]">
                  TPA & INSURANCE DESK
                </div>
                <div className="text-sm sm:text-base font-black text-white group-hover:text-emerald-200 transition-colors tracking-tight truncate">
                  044-26264000
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. INTERACTIVE NAVIGATION TABS BAR (MATCHING USER IMAGE 1 EXACTLY) */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-lg border-b border-slate-200/90 shadow-sm">
        <div className="container-custom">
          <div className="flex items-center gap-2 py-3.5 overflow-x-auto no-scrollbar scroll-smooth">
            {tabCategories.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    const el = document.getElementById('patient-guide-content-area');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className={`relative shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 select-none ${
                    isActive
                      ? 'text-white shadow-md scale-102'
                      : 'bg-slate-100/90 text-slate-600 hover:bg-slate-200 hover:text-slate-900 border border-slate-200/60'
                  }`}
                  style={
                    isActive
                      ? {
                          background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)'
                        }
                      : {}
                  }
                >
                  <Icon size={14} className={isActive ? 'text-white' : 'text-slate-500'} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. MAIN PATIENT GUIDE SECTION WITH PHOTOREALISTIC HOSPITAL SECTION BACKGROUND */}
      <section
        id="patient-guide-content-area"
        className="relative py-14 sm:py-20 lg:py-24 overflow-hidden"
      >
        {/* Photorealistic Section Background Image with Frosted Modern Glass Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="/patient-guide-section-bg.jpg"
            alt="Billroth Hospitals Patient Care Lounge & Clinical Consultation Corridor"
            className="w-full h-full object-cover object-center opacity-25"
          />
          {/* Multi-layered Frosted Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/95 via-slate-50/85 to-slate-100/95 backdrop-blur-[2px]" />
          {/* Ambient Lighting Rings */}
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="container-custom relative z-10">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-[11px] font-black uppercase tracking-wider mb-2">
              <Sparkles size={13} className="text-[#0095da]" />
              <span>Hospital Admission & OPD Protocols</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Patient Care & Guide Directory
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
              Authentic protocols, one-time UHID registration guidelines, 24/7 casualty helplines, room amenities, and visiting policies.
            </p>
          </div>

          {/* TAB CONTENT SWITCHER */}
          <AnimatePresence mode="wait">
            {/* TAB 1: OUTPATIENT (OPD) GUIDE */}
            {activeTab === 'opd-guide' && (
              <motion.div
                key="opd-guide"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-12"
              >
                {/* 5 Authentic Original Website Modules in High-Class Modern Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {officialCoreModules.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.id}
                        className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-white/80 shadow-lg hover:shadow-2xl hover:border-[#0095da]/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                      >
                        {/* Top Gradient Stripe */}
                        <div
                          className="absolute top-0 left-0 right-0 h-1.5 opacity-90 group-hover:opacity-100 transition-opacity"
                          style={{
                            background: `linear-gradient(90deg, ${item.accentColor} 0%, #10a877 100%)`
                          }}
                        />

                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div
                              className="w-12 h-12 rounded-2xl flex items-center justify-center transition-colors shadow-xs"
                              style={{
                                backgroundColor: `${item.accentColor}15`,
                                color: item.accentColor
                              }}
                            >
                              <Icon size={24} />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-mono">
                              {item.tag}
                            </span>
                          </div>

                          <div>
                            <h3 className="text-xl font-black text-slate-900 group-hover:text-[#0095da] transition-colors leading-snug">
                              {item.title}
                            </h3>
                            <p className="text-xs font-bold text-slate-400 mt-1">{item.subtitle}</p>
                          </div>

                          {/* Authentic original paragraph */}
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal bg-slate-50/70 p-3.5 rounded-2xl border border-slate-100">
                            {item.content}
                          </p>

                          {/* Highlights Checklist */}
                          {item.highlights && (
                            <ul className="space-y-2 pt-2 text-xs text-slate-700">
                              {item.highlights.map((h, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <CheckCircle2 size={14} className="text-[#8cc63f] shrink-0 mt-0.5" />
                                  <span>{h}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>

                        {/* Contact CTA button */}
                        {item.contact && (
                          <div className="pt-4 mt-5 border-t border-slate-100">
                            <a
                              href={`tel:${item.contact}`}
                              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-slate-900 hover:bg-[#0095da] text-white font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-md active:scale-98"
                            >
                              <PhoneCall size={14} />
                              <span>{item.contactLabel}</span>
                            </a>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Step-by-Step OPD Consultation Journey Timeline */}
                <div className="bg-white/95 backdrop-blur-md rounded-3xl sm:rounded-[36px] p-6 sm:p-10 border border-slate-200/80 shadow-xl">
                  <div className="max-w-2xl mb-8">
                    <span className="text-xs font-black uppercase tracking-widest text-[#0095da]">
                      Patient Journey
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                      Step-by-Step Outpatient Consultation Workflow
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Designed for effortless arrival, minimal waiting time, and compassionate specialist care.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      {
                        step: '01',
                        title: 'Arrival & UHID Creation',
                        desc: 'Visit Ground Floor registration counters near OPD entrance for quick one-time registration.',
                        icon: UserCheck
                      },
                      {
                        step: '02',
                        title: 'Pre-Settlement & Vitals',
                        desc: 'Consultation fee settlement and nursing assessment (Blood Pressure, SPO2, Temperature, Weight).',
                        icon: CreditCard
                      },
                      {
                        step: '03',
                        title: 'Doctor Consultation',
                        desc: 'In-depth consultation with your specialist doctor in state-of-the-art clinic chambers.',
                        icon: Stethoscope
                      },
                      {
                        step: '04',
                        title: 'Diagnostics & Pharmacy',
                        desc: 'Fast-track laboratory testing, digital imaging, and 24/7 on-campus pharmacy dispensing.',
                        icon: HeartPulse
                      }
                    ].map((st, i) => {
                      const SIcon = st.icon;
                      return (
                        <div
                          key={i}
                          className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 relative hover:bg-sky-50/50 hover:border-sky-300 transition-all duration-300"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-2xl font-black text-[#0095da]/30 font-mono">
                              {st.step}
                            </span>
                            <div className="w-9 h-9 rounded-xl bg-white text-[#0095da] flex items-center justify-center shadow-xs border border-slate-100">
                              <SIcon size={18} />
                            </div>
                          </div>
                          <h4 className="text-sm font-black text-slate-900">{st.title}</h4>
                          <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{st.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: INPATIENT ADMISSION (IPD) */}
            {activeTab === 'ipd-admission' && (
              <motion.div
                key="ipd-admission"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-12"
              >
                {/* Admission Checklist & Protocol */}
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-lg space-y-6">
                    <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                      <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0095da] flex items-center justify-center">
                        <Bed size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-slate-900">
                          Inpatient Admission Process (IPD)
                        </h3>
                        <p className="text-xs font-bold text-slate-400">
                          Seamless hospitalization, room allocation, and pre-admission guidance
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      <p>
                        Inpatient admission at Billroth Hospitals is scheduled upon recommendation by our attending consultant physician. Our dedicated IPD desk ensures prompt room allocation, financial counseling, and seamless coordination with nursing staff.
                      </p>

                      <div className="grid sm:grid-cols-2 gap-4 pt-2">
                        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                          <h4 className="font-black text-slate-900 text-sm mb-2 flex items-center gap-2">
                            <BadgeCheck size={16} className="text-[#0095da]" />
                            <span>Required Documents</span>
                          </h4>
                          <ul className="space-y-1.5 text-xs text-slate-600">
                            <li>• Doctor’s Official Admission Advice Sheet</li>
                            <li>• Permanent UHID card or registration slip</li>
                            <li>• Government Photo ID (Aadhaar / Passport / Voter ID)</li>
                            <li>• TPA Health Card & Insurance Policy Copy</li>
                          </ul>
                        </div>

                        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                          <h4 className="font-black text-slate-900 text-sm mb-2 flex items-center gap-2">
                            <HeartHandshake size={16} className="text-[#8cc63f]" />
                            <span>What to Bring for Inpatient Stay</span>
                          </h4>
                          <ul className="space-y-1.5 text-xs text-slate-600">
                            <li>• Previous medical prescriptions & diagnostic reports</li>
                            <li>• Ongoing chronic medication in original strips</li>
                            <li>• Personal toiletries & comfortable nightwear</li>
                            <li>• Important: Avoid bringing jewelry or large cash sums</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cashless & Insurance Desk Quick Card */}
                  <div className="bg-gradient-to-br from-[#003853] to-[#011e2c] text-white rounded-3xl p-6 sm:p-7 shadow-xl flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-[#8cc63f] flex items-center justify-center">
                        <ShieldCheck size={24} />
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#8cc63f]">
                          TPA & Cashless Hospitalization
                        </span>
                        <h4 className="text-xl font-black text-white mt-1">
                          Insurance Authorization Desk
                        </h4>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed font-normal">
                        We are empaneled with all major Public & Private Insurance Companies and Third-Party Administrators (TPAs) for 100% cashless hospitalization claims.
                      </p>
                      <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 text-xs text-slate-200">
                        <strong>TPA Desk Helpline:</strong>
                        <div className="text-base font-black text-white mt-0.5">044-26264000</div>
                      </div>
                    </div>

                    <a
                      href="tel:04426264000"
                      className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#0095da] via-[#10a877] to-[#8cc63f] text-white font-black text-xs uppercase tracking-wider text-center shadow-lg hover:shadow-xl transition-all"
                    >
                      Contact Insurance Desk
                    </a>
                  </div>
                </div>

                {/* Accommodation & Room Categories Cards */}
                <div>
                  <div className="text-center max-w-xl mx-auto mb-8">
                    <span className="text-xs font-black uppercase tracking-widest text-[#8cc63f]">
                      Room Categories
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                      Patient Accommodation Options
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {roomCategories.map((room, idx) => (
                      <div
                        key={idx}
                        className="bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-slate-200/80 hover:border-[#0095da]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="w-11 h-11 rounded-2xl bg-sky-50 text-[#0095da] group-hover:bg-[#0095da] group-hover:text-white flex items-center justify-center transition-colors">
                              <BedDouble size={22} />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                              {room.tag}
                            </span>
                          </div>
                          <h4 className="text-lg font-black text-slate-900 group-hover:text-[#0095da] transition-colors">
                            {room.name}
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed font-normal">
                            {room.desc}
                          </p>
                        </div>

                        <div className="pt-4 mt-5 border-t border-slate-100 space-y-1.5">
                          {room.features.map((f, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                              <CheckCircle2 size={13} className="text-[#8cc63f] shrink-0" />
                              <span>{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 3: DISCHARGE PROCEDURE */}
            {activeTab === 'discharge-process' && (
              <motion.div
                key="discharge-process"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl sm:rounded-[36px] p-6 sm:p-10 border border-slate-200/80 shadow-xl space-y-8">
                  <div className="max-w-2xl">
                    <span className="text-xs font-black uppercase tracking-widest text-[#0095da]">
                      Discharge Protocol
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                      Patient Discharge & Financial Settlement
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Our streamlined discharge protocol ensures thorough clinical handover, pharmacy medication reconciliation, and transparent billing.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      {
                        num: '1',
                        title: 'Doctor Medical Clearance',
                        desc: 'Attending consultant visits and signs medical discharge order during morning ward rounds.',
                        icon: Stethoscope
                      },
                      {
                        num: '2',
                        title: 'Discharge Summary & Rx',
                        desc: 'Clinical team compiles detailed discharge summary, diet chart, and medication regimen.',
                        icon: FileSpreadsheet
                      },
                      {
                        num: '3',
                        title: 'Billing & TPA Clearance',
                        desc: 'Final pharmacy audit, billing settlement, or insurance cashless approval sign-off.',
                        icon: Receipt
                      },
                      {
                        num: '4',
                        title: 'Handover & Safe Exit',
                        desc: 'Nursing staff hands over medicines, reports, follow-up date, and arranges escort to vehicle.',
                        icon: DoorOpen
                      }
                    ].map((step, idx) => {
                      const Icon = step.icon;
                      return (
                        <div
                          key={idx}
                          className="p-6 rounded-3xl bg-slate-50 border border-slate-200/70 hover:bg-sky-50/50 hover:border-sky-300 transition-all duration-300 space-y-3"
                        >
                          <div className="w-10 h-10 rounded-2xl bg-white text-[#0095da] flex items-center justify-center font-black text-sm shadow-xs border border-slate-200/50">
                            <Icon size={20} />
                          </div>
                          <div className="text-xs font-mono font-black text-[#0095da]">STEP 0{step.num}</div>
                          <h4 className="text-base font-black text-slate-900">{step.title}</h4>
                          <p className="text-xs text-slate-600 leading-relaxed font-normal">{step.desc}</p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="p-5 rounded-2xl bg-sky-50 border border-sky-200 text-xs sm:text-sm text-sky-950 flex items-start gap-3.5">
                    <Info size={20} className="text-[#0095da] shrink-0 mt-0.5" />
                    <div>
                      <strong>Estimated Discharge Turnaround Time:</strong> For self-paying patients, discharge settlement is completed within 60–90 minutes. For insurance/TPA cashless patients, the turnaround depends on the insurer's final authorization letter (typically 2–3 hours).
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 4: VISITOR GUIDELINES & TIMINGS */}
            {activeTab === 'visitor-timings' && (
              <motion.div
                key="visitor-timings"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-3xl sm:rounded-[36px] p-6 sm:p-10 border border-slate-200/80 shadow-xl space-y-8">
                  <div className="flex items-center gap-3.5 border-b border-slate-100 pb-4">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0095da] flex items-center justify-center shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                        Visitor Guidelines & Visiting Hours
                      </h3>
                      <p className="text-xs font-bold text-slate-400">
                        Prioritizing patient rest, clinical infection control, and privacy
                      </p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* General Wards */}
                    <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/60 space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-base font-black text-slate-900">General & Private Wards</h4>
                        <span className="text-[10px] font-black uppercase px-2 py-0.5 bg-sky-100 text-sky-800 rounded-md">
                          Wards
                        </span>
                      </div>
                      <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                        <div className="flex items-center justify-between pb-2 border-b border-slate-200/60 font-bold">
                          <span>Morning Visiting Hours:</span>
                          <span className="text-[#0095da]">11:00 AM – 12:00 PM</span>
                        </div>
                        <div className="flex items-center justify-between font-bold">
                          <span>Evening Visiting Hours:</span>
                          <span className="text-[#0095da]">4:30 PM – 7:00 PM</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Only 1 attendant allowed overnight with an authorized hospital entry pass. Maximum 2 visitors allowed at bedside during designated visiting hours.
                      </p>
                    </div>

                    {/* ICU / CCU */}
                    <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/60 space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-base font-black text-slate-900">Intensive Care Units (ICU / CCU)</h4>
                        <span className="text-[10px] font-black uppercase px-2 py-0.5 bg-red-100 text-red-800 rounded-md">
                          Sterile Zone
                        </span>
                      </div>
                      <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                        <div className="flex items-center justify-between pb-2 border-b border-slate-200/60 font-bold">
                          <span>Morning Window:</span>
                          <span className="text-emerald-700">11:30 AM – 12:00 PM</span>
                        </div>
                        <div className="flex items-center justify-between font-bold">
                          <span>Evening Window:</span>
                          <span className="text-emerald-700">5:00 PM – 5:30 PM</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Only 1 immediate family member for 5 minutes wearing protective sterile gown, mask, and shoe covers. Mobile phones must be switched off.
                      </p>
                    </div>
                  </div>

                  {/* Infection Control Rules Banner */}
                  <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200/80 text-xs sm:text-sm text-amber-900 flex items-start gap-3.5">
                    <AlertTriangle size={20} className="text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Important Safety & Infection Control Notice:</strong> Children below 12 years of age are strictly not permitted into inpatient wards and ICUs for their own health safety. Outside cooked food and flowers are strictly prohibited inside the hospital premises.
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 5: 24/7 AMBULANCE & EMERGENCY */}
            {activeTab === 'emergency-ambulance' && (
              <motion.div
                key="emergency-ambulance"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Emergency Casualty Card */}
                  <div className="bg-white/95 backdrop-blur-md rounded-3xl p-7 sm:p-9 border border-slate-200/80 shadow-xl space-y-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
                        <Activity size={26} />
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-red-600">
                          Accidents & Emergency
                        </span>
                        <h3 className="text-2xl font-black text-slate-900 mt-0.5">
                          24/7 Casualty & Trauma Resuscitation
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Our emergency department works around the clock. In case of any emergency, contact the casualty medical officer on +91(44) 40274027. Immediate clinical triage, bedside ultrasound, multi-channel monitors, and senior emergency physicians on standby.
                      </p>
                      <ul className="space-y-2 text-xs text-slate-700">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-red-500" />
                          <span>Dedicated resuscitation bay with defibrillators & ventilators</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-red-500" />
                          <span>Direct green-corridor link to Cardiac Catheterization Lab (Cath Lab)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-red-500" />
                          <span>Comprehensive polytrauma and stroke emergency intervention</span>
                        </li>
                      </ul>
                    </div>

                    <a
                      href="tel:+914440274027"
                      className="w-full py-3.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg transition-colors"
                    >
                      <PhoneCall size={15} />
                      <span>Call Casualty: +91 (44) 40274027</span>
                    </a>
                  </div>

                  {/* 3-Ambulance ACLS Fleet Card */}
                  <div className="bg-white/95 backdrop-blur-md rounded-3xl p-7 sm:p-9 border border-slate-200/80 shadow-xl space-y-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                        <Ambulance size={26} />
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-amber-600">
                          Rapid Response Fleet
                        </span>
                        <h3 className="text-2xl font-black text-slate-900 mt-0.5">
                          3 Advanced Life Support (ACLS) Ambulances
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        We have three fully equipped ambulances available to transport patients to and from the hospital. To avail this service, please contact us on +91(44) 40274027.
                      </p>
                      <ul className="space-y-2 text-xs text-slate-700">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-amber-500" />
                          <span>Equipped with Hamilton transport ventilators & cardiac monitors</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-amber-500" />
                          <span>Certified paramedics trained in ACLS, BLS, and pediatric resuscitation</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-amber-500" />
                          <span>GPS real-time dispatch across Chennai and suburban regions</span>
                        </li>
                      </ul>
                    </div>

                    <a
                      href="tel:+914440274027"
                      className="w-full py-3.5 rounded-2xl bg-slate-900 hover:bg-[#0095da] text-white font-black text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg transition-colors"
                    >
                      <PhoneCall size={15} />
                      <span>Dispatch Ambulance: +91 (44) 40274027</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 6: PATIENT RIGHTS & SAFETY */}
            {activeTab === 'patient-rights' && (
              <motion.div
                key="patient-rights"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl sm:rounded-[36px] p-6 sm:p-10 border border-slate-200/80 shadow-xl space-y-8">
                  <div className="max-w-2xl">
                    <span className="text-xs font-black uppercase tracking-widest text-[#0095da]">
                      Patient Charter
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                      Patient Rights & Responsibilities
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Our commitment to transparent healthcare, medical ethics, patient dignity, and clinical excellence.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Patient Rights */}
                    <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/70 space-y-3.5">
                      <h4 className="text-base font-black text-slate-900 flex items-center gap-2 text-[#0095da]">
                        <ShieldCheck size={18} />
                        <span>Your Rights as a Patient</span>
                      </h4>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-[#0095da] shrink-0 mt-0.5" />
                          <span>Right to considerate, respectful, and dignified healthcare irrespective of background.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-[#0095da] shrink-0 mt-0.5" />
                          <span>Right to receive complete information regarding diagnosis, treatment options, and risks.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-[#0095da] shrink-0 mt-0.5" />
                          <span>Right to confidentiality of all medical records and private health disclosures.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-[#0095da] shrink-0 mt-0.5" />
                          <span>Right to seek a second opinion and receive a transparent estimate of hospitalization costs.</span>
                        </li>
                      </ul>
                    </div>

                    {/* Patient Responsibilities */}
                    <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/70 space-y-3.5">
                      <h4 className="text-base font-black text-slate-900 flex items-center gap-2 text-[#8cc63f]">
                        <HeartHandshake size={18} />
                        <span>Patient & Visitor Responsibilities</span>
                      </h4>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-[#8cc63f] shrink-0 mt-0.5" />
                          <span>Provide accurate medical history, past allergies, and ongoing medication details.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-[#8cc63f] shrink-0 mt-0.5" />
                          <span>Follow hospital infection control, visiting hours, and child restriction protocols.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-[#8cc63f] shrink-0 mt-0.5" />
                          <span>Respect the privacy and peace of other recovering patients and hospital staff.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-[#8cc63f] shrink-0 mt-0.5" />
                          <span>Fulfill financial obligations and settle hospital billing within agreed timeframes.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 4. ONLINE APPOINTMENT & INQUIRY FORM */}
      <section className="bg-white border-y border-slate-200/80 py-16 sm:py-24">
        <div className="container-custom max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-2 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-black uppercase tracking-wider">
                <HeartPulse size={13} className="text-[#10a877]" />
                <span>Quick Assistance</span>
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">
                Need Help with OPD Booking or Hospitalization?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Our patient relations desk will assist you with doctor availability, room reservations, and diagnostic package schedules.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs font-bold text-slate-700">
                  <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#0095da] flex items-center justify-center shrink-0">
                    <Phone size={15} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono">Central Desk</div>
                    <div>7299 404040</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-bold text-slate-700">
                  <div className="w-8 h-8 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                    <Ambulance size={15} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono">24/7 Casualty & Ambulance</div>
                    <div>+91 (44) 40274027</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-3 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md">
              {submitted ? (
                <div className="p-8 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check size={28} />
                  </div>
                  <h4 className="text-xl font-black text-slate-900">Inquiry Received!</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Thank you. Our Patient Care Desk at Billroth Hospitals will call you shortly on the provided phone number.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Patient Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.patientName}
                        onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0095da]/30 focus:border-[#0095da]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Mobile Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0095da]/30 focus:border-[#0095da]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Required Service
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0095da]/30 focus:border-[#0095da]"
                      >
                        <option value="OPD Consultation">OPD Specialist Consultation</option>
                        <option value="Master Health Checkup">Master Health Checkup</option>
                        <option value="Inpatient Admission / Room Query">Inpatient Room Allocation</option>
                        <option value="TPA Insurance Query">TPA & Cashless Query</option>
                        <option value="Ambulance Booking">Ambulance Booking</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0095da]/30 focus:border-[#0095da]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Notes / Symptoms / Queries
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe your consultation requirement..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0095da]/30 focus:border-[#0095da]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-2xl text-white font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 active:scale-98 flex items-center justify-center gap-2"
                    style={{
                      background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)'
                    }}
                  >
                    <Send size={14} />
                    <span>Submit Patient Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="container-custom max-w-4xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-[#0095da]">
              Help & Clarifications
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm font-black text-slate-900">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 transition-transform ${expandedFaq === idx ? 'rotate-180 text-[#0095da]' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {expandedFaq === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-5 bg-slate-50 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/80"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatientGuide;
