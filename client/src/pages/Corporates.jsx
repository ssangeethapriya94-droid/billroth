import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Building2,
  Briefcase,
  ShieldCheck,
  CheckCircle2,
  HeartPulse,
  Activity,
  Users,
  Send,
  ArrowRight,
  Search,
  Sparkles,
  Layers,
  ChevronRight,
  Headphones,
  Mail,
  X
} from 'lucide-react';

// 21 Authentic Empanelled Corporates from Billroth Hospitals
const corporateClients = [
  {
    id: 1,
    name: 'Wittur',
    fullName: 'Wittur Elevator Components Pvt. Ltd.',
    sector: 'Engineering & Manufacturing',
    logo: 'https://billrothhospitals.com/wp-content/uploads/2024/05/wittur.png',
    services: ['Annual Master Health Checkups', 'Cashless Hospitalization', 'First-Aid Training'],
    description: 'Leading global supplier of components, modules and systems for the elevator industry.'
  },
  {
    id: 2,
    name: 'TVS Brakes India',
    fullName: 'Brakes India Private Limited (TVS Group)',
    sector: 'Automotive & Manufacturing',
    logo: 'https://billrothhospitals.com/wp-content/uploads/2024/05/tvs-brakes-india.png',
    services: ['On-Site OHC Management', 'Cashless Inpatient Care', 'Pre-Employment Screening'],
    description: 'Premier automotive braking systems manufacturer providing total safety solutions.'
  },
  {
    id: 3,
    name: 'TIDC India',
    fullName: 'TIDC India (Murugappa Group)',
    sector: 'Industrial & Engineering',
    logo: 'https://billrothhospitals.com/wp-content/uploads/2024/05/tidc-india.png',
    services: ['Workplace Ergonomics', 'Executive Health Packages', 'Emergency Trauma Support'],
    description: 'Pioneers in industrial power transmission chains and conveyor solutions across India.'
  },
  {
    id: 4,
    name: 'Tata Consultancy Services',
    fullName: 'Tata Consultancy Services Ltd. (TCS)',
    sector: 'IT & Enterprise Consulting',
    logo: 'https://billrothhospitals.com/wp-content/uploads/2024/05/tcs.png',
    services: ['Comprehensive Digital Health Screening', 'Priority OPD Desks', 'Mental Wellness Programs'],
    description: 'Global leader in IT services, consulting, and business solutions with enterprise-scale care.'
  },
  {
    id: 5,
    name: 'Samsung',
    fullName: 'Samsung Electronics India',
    sector: 'Technology & Electronics',
    logo: 'https://billrothhospitals.com/wp-content/uploads/2024/05/samsung.png',
    services: ['Executive Leadership Checkups', 'Direct Corporate Billing', 'Vaccination Drives'],
    description: 'World-renowned electronics multinational with advanced manufacturing facilities in Chennai.'
  },
  {
    id: 6,
    name: 'Saint-Gobain',
    fullName: 'Saint-Gobain India Pvt. Ltd.',
    sector: 'Materials & Construction',
    logo: 'https://billrothhospitals.com/wp-content/uploads/2024/05/saint-gobain.png',
    services: ['Occupational Audiometry & Eye Tests', 'On-Site Health Center', 'Emergency Ambulance'],
    description: 'Global benchmark for sustainable construction, glass systems, and high-performance materials.'
  },
  {
    id: 7,
    name: 'Rane',
    fullName: 'Rane Group (Steering & Suspension)',
    sector: 'Automotive & Manufacturing',
    logo: 'https://billrothhospitals.com/wp-content/uploads/2024/05/rane.png',
    services: ['Comprehensive Plant Health Checkups', 'Cashless Treatment', 'Safety Protocol Audits'],
    description: 'Distinguished automotive component conglomerate delivering precision steering systems.'
  },
  {
    id: 8,
    name: 'Net Access',
    fullName: 'Net Access India (Murugappa Group)',
    sector: 'IT & Enterprise Consulting',
    logo: 'https://billrothhospitals.com/wp-content/uploads/2024/05/net-access.png',
    services: ['Preventive Health Checkups', 'Corporate Desk Concierge', 'Workplace Wellness Webinars'],
    description: 'Managed IT infrastructure, cloud engineering, and enterprise cybersecurity service provider.'
  },
  {
    id: 9,
    name: 'Mitsuba',
    fullName: 'Mitsuba Sical India Pvt. Ltd.',
    sector: 'Automotive & Manufacturing',
    logo: 'https://billrothhospitals.com/wp-content/uploads/2024/05/mitsuba.png',
    services: ['Pre-Placement Medical Exams', 'Factory Worker Health Camps', 'Cashless Admission'],
    description: 'High-precision automotive electrical systems and starter motor manufacturers.'
  },
  {
    id: 10,
    name: 'Mahindra',
    fullName: 'Mahindra & Mahindra Ltd.',
    sector: 'Automotive & Manufacturing',
    logo: 'https://billrothhospitals.com/wp-content/uploads/2024/05/mahindra.png',
    services: ['Executive Health Checkups', 'On-Site OHC Doctors', 'Trauma & Critical Care Desk'],
    description: 'One of India’s most diversified automotive, farm equipment, and aerospace giants.'
  },
  {
    id: 11,
    name: 'Lucas - TVS Ltd.',
    fullName: 'Lucas - TVS Limited',
    sector: 'Automotive & Manufacturing',
    logo: 'https://billrothhospitals.com/wp-content/uploads/2024/05/lucas-tvs.png',
    services: ['Annual Industrial Screening', 'Direct Corporate Credit', 'Emergency Ambulance Network'],
    description: 'Leader in auto electrical systems, alternators, and electric vehicle powertrain solutions.'
  },
  {
    id: 12,
    name: 'LT India',
    fullName: 'Larsen & Toubro Limited (L&T)',
    sector: 'Engineering & Construction',
    logo: 'https://billrothhospitals.com/wp-content/uploads/2024/05/lt-india.png',
    services: ['High-Altitude & Construction Fitness', 'Cashless Inpatient Admission', 'Cardiac Screening'],
    description: 'Technology, engineering, construction, and manufacturing conglomerate active worldwide.'
  },
  {
    id: 13,
    name: 'Infosys',
    fullName: 'Infosys Limited',
    sector: 'IT & Enterprise Consulting',
    logo: 'https://billrothhospitals.com/wp-content/uploads/2024/05/infosys.png',
    services: ['Executive Lifestyle Checkups', 'Dedicated Corporate Priority Desk', 'Mental Wellness Sessions'],
    description: 'Global leader in next-generation digital services, enterprise cloud, and AI consulting.'
  },
  {
    id: 14,
    name: 'India Tube',
    fullName: 'Tube Investments of India (TI India)',
    sector: 'Industrial & Engineering',
    logo: 'https://billrothhospitals.com/wp-content/uploads/2024/05/india-tube.png',
    services: ['Factory Occupational Health Screening', 'Cashless TPA Support', 'First-Aid Certification'],
    description: 'Flagship engineering company of the Murugappa Group producing precision tubes and cycles.'
  },
  {
    id: 15,
    name: 'Hyundai',
    fullName: 'Hyundai Motor India Ltd.',
    sector: 'Automotive & Manufacturing',
    logo: 'https://billrothhospitals.com/wp-content/uploads/2024/05/hyundai.png',
    services: ['Mega Workforce Screening', 'Emergency Trauma Response', 'Executive Master Health Packages'],
    description: 'India’s second largest automobile manufacturer and premier automotive export hub.'
  },
  {
    id: 16,
    name: 'Foxconn',
    fullName: 'Foxconn Hon Hai Technology India',
    sector: 'Technology & Electronics',
    logo: 'https://billrothhospitals.com/wp-content/uploads/2024/05/foxconn.png',
    services: ['24/7 Industrial OHC Operations', 'Vaccination Campaigns', 'Cashless Emergency Admissions'],
    description: 'World’s largest electronics contract manufacturer powering global smartphone production.'
  },
  {
    id: 17,
    name: 'Caterpillar',
    fullName: 'Caterpillar India Pvt. Ltd.',
    sector: 'Engineering & Manufacturing',
    logo: 'https://billrothhospitals.com/wp-content/uploads/2024/05/caterpillar.png',
    services: ['Heavy Machinery Fitness Clearance', 'Executive Checkups', 'Corporate Direct Billing'],
    description: 'World’s leading manufacturer of construction and mining equipment, diesel engines, and gas turbines.'
  },
  {
    id: 18,
    name: 'Birla Carbon',
    fullName: 'Birla Carbon India Pvt. Ltd.',
    sector: 'Industrial & Engineering',
    logo: 'https://billrothhospitals.com/wp-content/uploads/2024/05/birla-carbon.png',
    services: ['Pulmonary Function Screening', 'Occupational Toxicology Tests', 'Cashless Hospitalization'],
    description: 'Global flagship business of Aditya Birla Group producing top-grade carbon black additives.'
  },
  {
    id: 19,
    name: 'Bharat FIH',
    fullName: 'Bharat FIH Limited (FIH Mobile)',
    sector: 'Technology & Electronics',
    logo: 'https://billrothhospitals.com/wp-content/uploads/2024/05/bharat-fih.png',
    services: ['Mass Employee Health Checkups', 'On-Site Medical Booths', 'Priority Emergency Dispatch'],
    description: 'Leading electronics manufacturing services provider with world-class facilities in Tamil Nadu.'
  },
  {
    id: 20,
    name: 'BGR Energy',
    fullName: 'BGR Energy Systems Ltd.',
    sector: 'Engineering & Manufacturing',
    logo: 'https://billrothhospitals.com/wp-content/uploads/2024/05/bgr-energy.png',
    services: ['Site Personnel Medical Fitness', 'Executive Health Checkups', 'Cashless Hospitalization'],
    description: 'Major manufacturer of capital equipment for Power, Oil & Gas, and turnkey infrastructure projects.'
  },
  {
    id: 21,
    name: 'Asahi India Glass Ltd.',
    fullName: 'Asahi India Glass Ltd. (AIS)',
    sector: 'Materials & Construction',
    logo: 'https://billrothhospitals.com/wp-content/uploads/2024/05/ais.png',
    services: ['Annual Industrial Eye & Health Exams', 'Cashless Emergency Care', 'Ergonomics Training'],
    description: 'India’s leading integrated glass company supplying automotive, architectural, and consumer glass.'
  }
];

const corporateServices = [
  {
    title: 'Executive Master Health Checkups',
    desc: 'Tailored multi-system health screenings for executives and managers, conducted in VIP suites with same-day reports.',
    icon: HeartPulse,
    badge: 'Popular'
  },
  {
    title: '100% Cashless Corporate Admission',
    desc: 'Hassle-free direct corporate billing and hospitalization for employees and dependents upon authorized sponsorship.',
    icon: ShieldCheck,
    badge: 'Seamless'
  },
  {
    title: 'On-Site Occupational Health Centers (OHC)',
    desc: 'Turnkey setup and complete staffing of factory/office medical rooms with certified industrial physicians & nurses.',
    icon: Building2,
    badge: 'Turnkey'
  },
  {
    title: 'Pre-Employment Medical Screening',
    desc: 'Standardized candidate medical fitness tests, vision & audiometry, drug screenings, and digitized report generation within 24 hours.',
    icon: CheckCircle2,
    badge: 'Fast-Track'
  },
  {
    title: 'Workplace Wellness & Ergonomics',
    desc: 'Preventive health webinars, posture & ergonomics workshops, stress management sessions, and BLS/CPR certified trainings.',
    icon: Activity,
    badge: 'Interactive'
  },
  {
    title: 'Priority Corporate Help Desk & SPOC',
    desc: 'Dedicated single-point-of-contact (SPOC) desk for 24/7 emergency admissions, OPD fast-tracking, and administrative clearance.',
    icon: Users,
    badge: '24/7 Support'
  }
];

const sectors = ['All Sectors', 'Automotive & Manufacturing', 'IT & Enterprise Consulting', 'Technology & Electronics', 'Engineering & Manufacturing', 'Materials & Construction', 'Industrial & Engineering'];

const Corporates = () => {
  const [search, setSearch] = useState('');
  const [selectedSector, setSelectedSector] = useState('All Sectors');
  const [activeModalClient, setActiveModalClient] = useState(null);

  // Empanelment Form State
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    designation: '',
    email: '',
    phone: '',
    employeeCount: '100-500',
    serviceRequired: 'Executive Health Checkups',
    message: ''
  });

  const filteredClients = useMemo(() => {
    return corporateClients.filter((c) => {
      const matchSearch =
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.fullName.toLowerCase().includes(search.toLowerCase()) ||
        c.sector.toLowerCase().includes(search.toLowerCase());
      const matchSector = selectedSector === 'All Sectors' || c.sector === selectedSector;
      return matchSearch && matchSector;
    });
  }, [search, selectedSector]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        companyName: '',
        contactPerson: '',
        designation: '',
        email: '',
        phone: '',
        employeeCount: '100-500',
        serviceRequired: 'Executive Health Checkups',
        message: ''
      });
    }, 4500);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden text-white py-16 sm:py-20 lg:py-26 min-h-[520px] flex items-center">
        {/* Background Image with Refined Clear Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/corporate-hero-bg.jpg"
            alt="Corporate Healthcare & Employee Wellness"
            className="w-full h-full object-cover object-center transform scale-100"
          />
          {/* Subtle Directional Overlay for Contrast on Left Text while keeping Right Image Crystal Clear */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#021824]/85 via-[#063248]/55 to-slate-900/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#021824]/80 via-transparent to-black/20" />
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
              <Briefcase size={14} />
              <span>Patients & Visitors &bull; Enterprise Healthcare</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-black tracking-tight leading-tight"
            >
              Corporate Healthcare & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-teal-200 to-[#8cc63f]">
                Employee Wellness Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal"
            >
              Empowering India’s top multinationals, automotive conglomerates, and IT enterprises with customized master health screenings, 100% cashless corporate hospitalization, on-site factory OHC setups, and rapid executive care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-3"
            >
              <a
                href="#corporate-directory"
                className="px-6 py-3 rounded-full text-white font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 flex items-center gap-2"
                style={{
                  background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)'
                }}
              >
                <span>Explore 21+ Empanelled Corporates</span>
                <ArrowRight size={14} />
              </a>
              <a
                href="#empanelment-desk"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-black text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
              >
                <Building2 size={14} />
                <span>Empanel Your Organization</span>
              </a>
            </motion.div>
          </div>

          {/* Key Metrics Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 mt-10 pt-8 border-t border-white/15"
          >
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center hover:bg-white/10 transition-colors">
              <div className="text-2xl sm:text-3xl font-black text-[#8cc63f]">200+</div>
              <div className="text-xs text-slate-300 font-bold mt-0.5">Empanelled Corporates</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center hover:bg-white/10 transition-colors">
              <div className="text-2xl sm:text-3xl font-black text-white">50,000+</div>
              <div className="text-xs text-slate-300 font-bold mt-0.5">Annual Health Checks</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center hover:bg-white/10 transition-colors">
              <div className="text-2xl sm:text-3xl font-black text-sky-300">24/7</div>
              <div className="text-xs text-slate-300 font-bold mt-0.5">Dedicated Corporate SPOC</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center hover:bg-white/10 transition-colors">
              <div className="text-2xl sm:text-3xl font-black text-[#8cc63f]">100%</div>
              <div className="text-xs text-slate-300 font-bold mt-0.5">Direct Cashless Clearance</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. INFINITE LOGO MARQUEE SLIDER */}
      <section className="bg-white border-b border-slate-200/80 py-6 overflow-hidden relative">
        <div className="container-custom mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-widest">
            <Sparkles size={14} className="text-[#0095da]" />
            <span>Trusted By India’s Leading Industry Titans</span>
          </div>
          <span className="text-[11px] font-bold text-[#10a877] hidden sm:inline-block">
            21+ Official Partners Empanelled
          </span>
        </div>

        {/* Marquee Wrapper with soft gradient fade edges */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex gap-8 items-center animate-[marquee_35s_linear_infinite] whitespace-nowrap w-max">
            {[...corporateClients, ...corporateClients].map((client, i) => (
              <div
                key={`${client.id}-${i}`}
                onClick={() => setActiveModalClient(client)}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-[#0095da]/50 hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer group"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-8 max-w-[90px] object-contain transition-transform group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <span className="text-xs font-black text-slate-700 group-hover:text-[#0095da] transition-colors">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORPORATE SERVICES PILLARS */}
      <section className="container-custom py-14 sm:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-[#0095da] text-xs font-black uppercase tracking-widest mb-2">
            <Layers size={13} />
            <span>End-to-End Enterprise Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Tailored Healthcare for Your Entire Workforce
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Comprehensive corporate medical packages designed to boost productivity, eliminate absenteeism, and safeguard employee health.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {corporateServices.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={srv.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#0095da]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle top accent gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0095da] via-[#10a877] to-[#8cc63f] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0095da] group-hover:bg-[#0095da] group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                      <Icon size={22} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 group-hover:text-[#0095da] transition-colors leading-snug">
                    {srv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-[#0095da] transition-colors">
                  <span>Learn more</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. MAIN CORPORATE DIRECTORY & LOGOS (MATCHING THE ORIGINAL WEBSITE LAYOUT) */}
      <section id="corporate-directory" className="bg-white border-y border-slate-200/80 py-16 sm:py-24">
        <div className="container-custom">
          {/* Header matching original website layout */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#8cc63f]">
              OUR CORPORATE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0095da] tracking-tight mt-1">
              List Of Corporates
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 font-normal">
              Click on any corporate partner card to view tie-up details, sector expertise, and corporate health benefits.
            </p>
          </div>

          {/* Search & Sector Filter Bar */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-5 mb-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search company (e.g., TCS, Samsung)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-bold focus:outline-none focus:border-[#0095da] focus:ring-2 focus:ring-[#0095da]/15 transition-all"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Sector Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-1 md:pb-0">
              {sectors.map((sec) => (
                <button
                  key={sec}
                  onClick={() => setSelectedSector(sec)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                    selectedSector === sec
                      ? 'text-white shadow-md'
                      : 'bg-white text-slate-600 border border-slate-200/80 hover:border-slate-300 hover:text-slate-900'
                  }`}
                  style={
                    selectedSector === sec
                      ? { background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)' }
                      : {}
                  }
                >
                  {sec}
                </button>
              ))}
            </div>
          </div>

          {/* Corporate Cards Grid matching the screenshot with high-fidelity animations */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6">
            <AnimatePresence>
              {filteredClients.map((client, idx) => (
                <motion.div
                  key={client.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: idx * 0.025, duration: 0.3 }}
                  onClick={() => setActiveModalClient(client)}
                  className="group relative bg-white rounded-2xl sm:rounded-3xl border-2 border-slate-200/80 hover:border-[#8cc63f] hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-between p-6 sm:p-8 cursor-pointer overflow-hidden text-center min-h-[240px] sm:min-h-[260px]"
                >
                  {/* Subtle hover gradient background glow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-sky-50/40 via-emerald-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Shine overlay animation on card hover */}
                  <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_1s_ease-in-out] pointer-events-none" />

                  {/* Top Status Tag */}
                  <div className="w-full flex items-center justify-between text-[10px] font-bold text-slate-400 relative z-10">
                    <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-[#8cc63f]/15 group-hover:text-[#10a877] transition-colors">
                      Empanelled Partner
                    </span>
                    <span className="text-[#0095da] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5">
                      <span>View</span>
                      <ChevronRight size={12} />
                    </span>
                  </div>

                  {/* Center Logo Container */}
                  <div className="flex-1 flex items-center justify-center p-3 sm:p-4 w-full relative z-10 my-auto">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-20 sm:max-h-24 max-w-[170px] sm:max-w-[190px] w-auto object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-xs"
                      loading="lazy"
                    />
                  </div>

                  {/* Bottom Text Label */}
                  <div className="w-full pt-4 border-t border-slate-100 relative z-10">
                    <h3 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-[#0095da] transition-colors truncate">
                      {client.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-semibold truncate mt-0.5">
                      {client.sector}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredClients.length === 0 && (
            <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200">
              <Building2 size={36} className="text-slate-300 mx-auto mb-2" />
              <h3 className="text-base font-bold text-slate-700">No Corporate Partners Found</h3>
              <p className="text-xs text-slate-400 mt-1">
                Try searching for another keyword or reset the sector filter.
              </p>
              <button
                onClick={() => {
                  setSearch('');
                  setSelectedSector('All Sectors');
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-300 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 5. DIRECT CORPORATE CASHLESS ADMISSION FLOWCHART */}
      <section className="bg-white border-y border-slate-200/80 py-16 sm:py-20">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-[#0095da]">
              Workflow & SLA
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
              4-Step Cashless Hospitalization Journey
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Zero out-of-pocket delays for emergency and planned admissions of your workforce.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              {
                step: '01',
                title: 'Corporate Authorization',
                desc: 'Employee presents employee ID card or HR credit letter at the Billroth Corporate Desk.'
              },
              {
                step: '02',
                title: 'Instant SPOC Clearance',
                desc: 'Dedicated Corporate SPOC verifies empanelment parameters and initiates instant cashless admission.'
              },
              {
                step: '03',
                title: 'Priority Clinical Care',
                desc: 'Patient receives state-of-the-art medical treatment, VIP room allotment, and round-the-clock doctor care.'
              },
              {
                step: '04',
                title: 'Direct HR Billing Clearance',
                desc: 'Final itemized billing forwarded directly to corporate accounts with digital discharge documentation.'
              }
            ].map((item, idx) => (
              <div
                key={item.step}
                className="bg-slate-50 rounded-3xl p-6 border border-slate-200 hover:border-[#0095da]/50 hover:bg-white hover:shadow-xl transition-all duration-300 relative group"
              >
                <div className="text-4xl font-black text-slate-200 group-hover:text-[#0095da]/30 transition-colors mb-3">
                  {item.step}
                </div>
                <h3 className="text-base font-black text-slate-900 group-hover:text-[#0095da] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CORPORATE INQUIRY & EMPANELMENT FORM */}
      <section id="empanelment-desk" className="container-custom py-16 sm:py-24">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl sm:rounded-[36px] p-6 sm:p-10 lg:p-14 border border-slate-200 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-[#0095da] text-xs font-black uppercase tracking-wider mb-2">
                <Building2 size={14} />
                <span>Empanelment & Corporate Relations Desk</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Corporate Tie-Up Inquiry
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Partner with Billroth Hospitals to customize healthcare packages, on-site OHC management, or direct credit billing for your organization.
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
                <h3 className="text-xl font-black text-emerald-900">Empanelment Request Received!</h3>
                <p className="text-xs sm:text-sm text-emerald-700 max-w-md mx-auto">
                  Our Head of Corporate Relations will contact you within 24 hours with custom corporate tariff packages and empanelment documentation.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-bold text-slate-700">Company / Organization Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme Tech Solutions Pvt Ltd"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0095da] focus:ring-2 focus:ring-[#0095da]/20"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-bold text-slate-700">Contact Person Name & Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Suresh Raman (Head - HR & Admin)"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0095da] focus:ring-2 focus:ring-[#0095da]/20"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-bold text-slate-700">Official Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. hr@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0095da] focus:ring-2 focus:ring-[#0095da]/20"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-bold text-slate-700">Phone / Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98410 99887"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0095da] focus:ring-2 focus:ring-[#0095da]/20"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-bold text-slate-700">Employee Strength *</label>
                    <select
                      value={formData.employeeCount}
                      onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0095da] focus:ring-2 focus:ring-[#0095da]/20 bg-white"
                    >
                      <option value="50-100">50 - 100 Employees</option>
                      <option value="100-500">100 - 500 Employees</option>
                      <option value="500-2000">500 - 2,000 Employees</option>
                      <option value="2000+">2,000+ Employees</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-bold text-slate-700">Service of Primary Interest *</label>
                  <select
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0095da] focus:ring-2 focus:ring-[#0095da]/20 bg-white"
                  >
                    <option value="Executive Health Checkups">Annual Master / Executive Health Checkups</option>
                    <option value="Cashless Inpatient Admission">Direct Corporate Cashless Hospitalization</option>
                    <option value="On-Site OHC & Medical Center">On-Site Factory / Office OHC Center Setup</option>
                    <option value="Pre-employment Screening">Pre-Employment Health Screening</option>
                    <option value="Workplace Wellness & Workshops">Ergonomic Workshops & BLS/CPR Training</option>
                  </select>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-bold text-slate-700">Additional Requirements / Locations</label>
                  <textarea
                    rows={3}
                    placeholder="Provide details about your plant/office locations or specific healthcare package needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
                  <span>Submit Corporate Tie-Up Inquiry</span>
                </button>
              </form>
            )}

            {/* Direct Corporate Hotline info */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-slate-500">
              <div className="flex items-center gap-2">
                <Headphones size={16} className="text-[#0095da]" />
                <span>Corporate Desk SPOC: <strong className="text-slate-800">+91 7299 404040 / 9566 607100</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#10a877]" />
                <span>Email: <strong className="text-slate-800">corporate@billrothhospitals.com</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE CORPORATE MODAL POPUP */}
      <AnimatePresence>
        {activeModalClient && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative overflow-hidden"
            >
              <button
                onClick={() => setActiveModalClient(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors"
              >
                <X size={16} />
              </button>

              <div className="flex items-center gap-4 mb-5 pb-5 border-b border-slate-100">
                <div className="w-20 h-16 rounded-2xl bg-slate-50 border border-slate-200/80 p-2 flex items-center justify-center">
                  <img
                    src={activeModalClient.logo}
                    alt={activeModalClient.name}
                    className="max-h-12 max-w-[70px] object-contain"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase text-[#10a877] tracking-wider">
                    {activeModalClient.sector}
                  </span>
                  <h3 className="text-lg font-black text-slate-900 leading-tight">
                    {activeModalClient.fullName}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <h4 className="font-black text-slate-800 uppercase tracking-wider mb-1">
                    About Enterprise
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {activeModalClient.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-black text-slate-800 uppercase tracking-wider mb-1.5">
                    Active Healthcare Coverage at Billroth
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalClient.services.map((srv, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-sky-50 text-[#0095da] font-bold text-[11px]"
                      >
                        ✓ {srv}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-800">Need Similar Coverage for Your Team?</div>
                  <p className="text-slate-500">
                    Connect with our corporate desk to empanel your company with tailored terms.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setActiveModalClient(null);
                    const el = document.getElementById('empanelment-desk');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-3 rounded-xl text-white font-black text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2"
                  style={{
                    background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)'
                  }}
                >
                  <span>Inquire for Corporate Empanelment</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Corporates;
