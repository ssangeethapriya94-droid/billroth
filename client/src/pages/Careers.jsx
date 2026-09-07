import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, Users, Award, Heart, CheckCircle2, 
  MapPin, Clock, ArrowRight, Mail, Phone, Upload, X, ShieldCheck,
  Search, GraduationCap, Building, Sparkles, Send, FileText, CheckCircle
} from 'lucide-react';

const jobOpenings = [
  {
    id: 'nurse-ct-icu',
    title: 'Staff Nurse (CT-ICU)',
    department: 'Nursing & Critical Care',
    category: 'nursing',
    location: 'R.A Puram – Chennai',
    openings: 5,
    type: 'Full-time',
    education: 'B.Sc (Nursing) / DGNM',
    experience: '0 to 5 years experience in CT-ICU',
    description: 'Provide tertiary critical care nursing for cardiothoracic ICU patients, hemodynamic monitoring, ventilator management, and post-cardiac surgical recovery under senior intensivist supervision.',
    emails: ['hr.rap@billrothhospitals.com', 'hr2@billrothhospitals.com'],
    contact: '044 42921777'
  },
  {
    id: 'nurse-emergency',
    title: 'Staff Nurse (EMERGENCY)',
    department: 'Emergency & Trauma Care',
    category: 'nursing',
    location: 'R.A Puram – Chennai',
    openings: 6,
    type: 'Full-time (Rotational Shifts)',
    education: 'B.Sc (Nursing) / DGNM',
    experience: '0 to 5 years experience in ER',
    description: 'Handle 24x7 emergency department triage, acute resuscitation protocols, trauma stabilization, IV cannulation, and rapid emergency intervention alongside emergency physicians.',
    emails: ['hr.rap@billrothhospitals.com', 'hr2@billrothhospitals.com'],
    contact: '044 42921777'
  },
  {
    id: 'nurse-ot',
    title: 'Staff Nurse (OT)',
    department: 'Surgical & Operation Theatre',
    category: 'nursing',
    location: 'R.A Puram – Chennai',
    openings: 5,
    type: 'Full-time',
    education: 'B.Sc (Nursing) / DGNM',
    experience: '0 to 5 years experience in OT',
    description: 'Perform scrub and circulating nurse duties across laminar airflow modular operation theatres, maintaining sterile field protocol, surgical instrumentation, and peri-operative patient care.',
    emails: ['hr.rap@billrothhospitals.com', 'hr2@billrothhospitals.com'],
    contact: '044 42921777'
  },
  {
    id: 'nurse-ward',
    title: 'Staff Nurse (WARD)',
    department: 'Inpatient Care & Wards',
    category: 'nursing',
    location: 'R.A Puram – Chennai',
    openings: 25,
    type: 'Full-time',
    education: 'B.Sc (Nursing) / DGNM',
    experience: '0 to 5 years experience in Ward',
    description: 'Deliver comprehensive patient bedside nursing, vital monitoring, doctor-prescribed medication administration, and coordinated post-operative ward care.',
    emails: ['hr.rap@billrothhospitals.com', 'hr2@billrothhospitals.com'],
    contact: '044 42921777'
  },
  {
    id: 'infection-control-nurse',
    title: 'Infection Control Nurse (ICN)',
    department: 'Quality & Infection Control',
    category: 'specialized',
    location: 'R.A Puram – Chennai',
    openings: 1,
    type: 'Full-time',
    education: 'B.Sc (Nursing) / DGNM + specialized certified course in infection control',
    experience: 'Minimum of 3 to 5 years of experience as ICN',
    description: 'Manage hospital-wide HAI surveillance, hand hygiene audits, antimicrobial stewardship coordination, biomedical waste management, and NABH infection control adherence.',
    emails: ['hr.rap@billrothhospitals.com', 'hr2@billrothhospitals.com'],
    contact: '044 42921777'
  },
  {
    id: 'nurse-liver-transplant',
    title: 'Liver Transplant - Staff Nurse',
    department: 'Transplant ICU & Hepato-Biliary',
    category: 'specialized',
    location: 'R.A Puram – Chennai',
    openings: 1,
    type: 'Full-time',
    education: 'B.Sc (Nursing) / DGNM',
    experience: '0 to 5 years experience in Transplant',
    description: 'Dedicated critical nursing for live and deceased donor liver transplant recipients, specialized graft monitoring, immunosuppressive drug management, and strict isolation asepsis.',
    emails: ['hr.rap@billrothhospitals.com', 'hr2@billrothhospitals.com'],
    contact: '044 42921777'
  },
  {
    id: 'anaesthesiologist',
    title: 'Anaesthesiologist',
    department: 'Medical Specialists & Anaesthesia',
    category: 'medical',
    location: 'Shenoy Nagar – Chennai',
    openings: 1,
    type: 'Full-time',
    education: 'MBBS, MD / DNB (Anaesthesiology)',
    experience: '0 - 3 years',
    description: 'Deliver comprehensive general, regional, and sedation anaesthesia across elective and emergency surgical cases. Competitive salaries and a great work environment.',
    emails: ['hr.rap@billrothhospitals.com', 'hr2@billrothhospitals.com'],
    contact: '044 42921777'
  }
];

const categories = [
  { id: 'all', label: 'All Positions' },
  { id: 'nursing', label: 'Nursing & Critical Care' },
  { id: 'specialized', label: 'Specialized Nursing & Quality' },
  { id: 'medical', label: 'Medical Specialists / Doctors' }
];

const Careers = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantExp, setApplicantExp] = useState('');
  const [fileName, setFileName] = useState('');

  const filteredJobs = useMemo(() => {
    return jobOpenings.filter((job) => {
      const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
      const matchesSearch = 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.education.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleApply = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedJob(null);
      setApplicantName('');
      setApplicantEmail('');
      setApplicantPhone('');
      setApplicantExp('');
      setFileName('');
    }, 4000);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Hero Header */}
      <section 
        className="relative text-white py-16 md:py-24 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #002d4c 0%, #004870 30%, #00689b 60%, #0087bf 85%, #0095da 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#8cc63f] text-xs font-black uppercase tracking-wider mb-5 shadow-sm">
            <Briefcase size={14} />
            <span>Join Billroth Healthcare Family</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-5">
            Careers at Billroth Hospitals
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-8 max-w-2xl mx-auto">
            Build a purposeful career in clinical excellence, compassionate patient care, and continuous medical learning across our Shenoy Nagar and R.A Puram campuses.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-white/95">
            <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full">
              <ShieldCheck size={14} className="text-[#8cc63f]" /> NABH &amp; NABL Accredited Environment
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full">
              <Award size={14} className="text-[#8cc63f]" /> Competitive Remuneration &amp; Growth
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full">
              <Users size={14} className="text-[#8cc63f]" /> 44+ Active Openings Available
            </span>
          </div>
        </div>
      </section>

      {/* 2. Openings Section */}
      <section className="container-custom py-12 md:py-20 px-4">
        {/* Search & Filter Bar */}
        <div className="max-w-5xl mx-auto mb-10 space-y-6">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Current Career Opportunities
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                Official vacancies across Nursing, Critical Care, Surgical OT, and Medical Specialties.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative min-w-[260px] sm:min-w-[300px]">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                placeholder="Search job title, skill, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0095da] shadow-xs"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-b border-slate-200 pb-4">
            {categories.map((cat) => {
              const count = cat.id === 'all' 
                ? jobOpenings.length 
                : jobOpenings.filter(j => j.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#0095da] text-white shadow-md shadow-[#0095da]/20'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    selectedCategory === cat.id 
                      ? 'bg-white/25 text-white' 
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Job Cards Grid */}
        {filteredJobs.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 max-w-2xl mx-auto p-8 shadow-xs">
            <Briefcase size={40} className="text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 mb-1">No vacancies found</h3>
            <p className="text-xs text-slate-500 mb-4">
              We could not find any active job matching your filter. Please try searching for another role or email our HR team directly.
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="px-4 py-2 bg-[#0095da] text-white text-xs font-bold rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#0095da]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Category Pill & Work Type */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="bg-[#0095da]/10 text-[#0095da] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
                      {job.department}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded-md border border-emerald-200">
                        {job.openings} {job.openings === 1 ? 'Opening' : 'Openings'}
                      </span>
                      <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
                        <Clock size={12} /> {job.type}
                      </span>
                    </div>
                  </div>

                  {/* Job Title */}
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug group-hover:text-[#0095da] transition-colors">
                    {job.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {job.description}
                  </p>

                  {/* Details Block */}
                  <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
                    {/* Education */}
                    <div className="flex items-start gap-2 text-slate-700">
                      <GraduationCap size={15} className="text-[#0095da] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-slate-900">Education: </span>
                        <span className="text-slate-600">{job.education}</span>
                      </div>
                    </div>

                    {/* Experience */}
                    <div className="flex items-start gap-2 text-slate-700">
                      <Award size={15} className="text-[#8cc63f] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-slate-900">Experience: </span>
                        <span className="text-slate-600">{job.experience}</span>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-slate-700">
                      <MapPin size={15} className="text-rose-500 shrink-0" />
                      <div>
                        <span className="font-bold text-slate-900">Location: </span>
                        <span className="text-slate-600">{job.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-6 border-t border-slate-100 mt-5 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedJob(job)}
                    className="px-5 py-2.5 rounded-xl bg-[#0095da] hover:bg-[#0077b6] text-white text-xs font-black uppercase tracking-wider shadow-sm transition-all cursor-pointer active:scale-95 flex items-center gap-1.5"
                  >
                    <span>Apply Now</span>
                    <ArrowRight size={13} />
                  </button>

                  <a
                    href={`mailto:${job.emails.join(';')}?subject=Application for ${encodeURIComponent(job.title)} - Billroth Hospitals`}
                    className="text-xs font-bold text-slate-500 hover:text-[#0095da] flex items-center gap-1 transition-colors"
                  >
                    <Mail size={13} />
                    <span>Direct Email</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* HR Contact & Walk-In Information Banner */}
        <div className="mt-14 max-w-5xl mx-auto bg-gradient-to-r from-[#002d4c] via-[#004870] to-[#005a87] text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none -mr-20 -mt-20" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8cc63f]/20 border border-[#8cc63f]/30 text-[#8cc63f] text-[11px] font-black uppercase tracking-wider">
                <Mail size={13} />
                <span>Direct HR Communication</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Interested Candidate? Share Your Updated CV
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Send your resume directly to our official Human Resources department for immediate consideration, or contact our HR helpdesk.
              </p>
              
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-200">
                <span className="flex items-center gap-1.5">
                  <Building size={14} className="text-[#8cc63f]" /> R.A Puram &amp; Shenoy Nagar
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-[#8cc63f]" /> Quick HR Interview Turnaround
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 space-y-3.5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#8cc63f]/20 border border-[#8cc63f]/30 flex items-center justify-center text-[#8cc63f] shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-[11px] text-slate-300 font-semibold">Official HR Email:</div>
                  <a href="mailto:hr.rap@billrothhospitals.com" className="text-xs sm:text-sm font-bold text-white hover:text-[#8cc63f] transition-colors block">
                    hr.rap@billrothhospitals.com
                  </a>
                  <a href="mailto:hr2@billrothhospitals.com" className="text-xs sm:text-sm font-bold text-white hover:text-[#8cc63f] transition-colors block">
                    hr2@billrothhospitals.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#0095da]/30 border border-[#0095da]/40 flex items-center justify-center text-white shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[11px] text-slate-300 font-semibold">HR Contact Hotline:</div>
                  <a href="tel:04442921777" className="text-sm font-black text-white hover:text-[#8cc63f] transition-colors">
                    044 42921777
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200 z-10 p-6 sm:p-8 my-8"
            >
              <button
                type="button"
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="text-[11px] font-black uppercase tracking-wider text-[#0095da] mb-1">
                {selectedJob.department}
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-1">
                Apply for {selectedJob.title}
              </h3>
              <p className="text-xs text-slate-500 mb-5">
                Location: <span className="font-semibold text-slate-700">{selectedJob.location}</span> | Vacancies: <span className="font-semibold text-emerald-600">{selectedJob.openings}</span>
              </p>

              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800">Application Submitted!</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you <span className="font-bold">{applicantName}</span>. Your application for <span className="font-semibold">{selectedJob.title}</span> has been registered. Our HR department will review your credentials and contact you at <span className="font-semibold">{applicantEmail}</span>.
                  </p>
                  <div className="pt-3 text-[11px] text-slate-400">
                    You can also email your CV directly to <span className="font-mono text-slate-600">{selectedJob.emails[0]}</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder="e.g. Nurse / Dr. Priya Sharma"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#0095da] bg-slate-50 focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        placeholder="priya@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#0095da] bg-slate-50 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Contact Phone *</label>
                      <input
                        type="tel"
                        required
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#0095da] bg-slate-50 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Years of Relevant Experience</label>
                    <input
                      type="text"
                      value={applicantExp}
                      onChange={(e) => setApplicantExp(e.target.value)}
                      placeholder="e.g. 2 Years in Critical Care"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#0095da] bg-slate-50 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Upload Resume / CV (PDF, DOCX)</label>
                    <label className="border-2 border-dashed border-slate-200 hover:border-[#0095da] rounded-xl p-4 text-center hover:bg-sky-50/50 cursor-pointer transition-all flex flex-col items-center justify-center gap-1 block">
                      <input 
                        type="file" 
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden" 
                      />
                      <Upload size={20} className="text-[#0095da]" />
                      <span className="text-xs text-slate-700 font-bold">
                        {fileName ? fileName : 'Click to browse and upload resume'}
                      </span>
                      <span className="text-[10px] text-slate-400">Max file size 5MB</span>
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0095da] to-[#8cc63f] hover:brightness-105 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send size={14} />
                      <span>Submit Application</span>
                    </button>
                  </div>

                  <div className="text-center pt-1">
                    <a
                      href={`mailto:${selectedJob.emails.join(';')}?subject=Application for ${encodeURIComponent(selectedJob.title)} - Billroth Hospitals`}
                      className="text-[11px] text-slate-500 hover:text-[#0095da] underline transition-colors"
                    >
                      Or email resume directly to {selectedJob.emails[0]}
                    </a>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Careers;
