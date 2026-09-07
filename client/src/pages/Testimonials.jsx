import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Star,
  Quote,
  Heart,
  Search,
  CheckCircle2,
  ThumbsUp,
  MessageSquare,
  Sparkles,
  Send,
  X,
  Award,
  Users,
  ShieldCheck,
  Building2,
  Calendar
} from 'lucide-react';

const realTestimonials = [
  {
    id: 1,
    name: 'KaavyaShankari',
    rating: 4,
    date: 'Recent Patient',
    department: 'General Medicine & Inpatient Care',
    image: 'https://billrothhospitals.com/wp-content/uploads/elementor/thumbs/ad9-qm0r34l5rb1p6ieb5qijz26n6wdfhewnhy480j2zcw.jpg',
    story: 'My sister was admitted and she recovered soon by the excellent treatment from the doctors and they were very kind and experienced.'
  },
  {
    id: 2,
    name: 'Varsha',
    rating: 5,
    date: 'Verified Patient',
    department: 'Super Specialty Care',
    image: 'https://billrothhospitals.com/wp-content/uploads/elementor/thumbs/av4-qm0r37eobt5k5ca7p9qfojh0z1zj4i7uic2ogcysu8.jpg',
    story: 'Billroth Hospital impressed me with its exceptional care and efficiency. The staff is highly professional and compassionate. The facility is clean, and the whole experience was reassuring. I highly recommend it.'
  },
  {
    id: 3,
    name: 'Ammu',
    rating: 5,
    date: 'Verified Patient',
    department: 'Inpatient Treatment',
    image: 'https://billrothhospitals.com/wp-content/uploads/elementor/thumbs/av4-qm0r37eobt5k5ca7p9qfojh0z1zj4i7uic2ogcysu8.jpg',
    story: 'I had a good experience at Billroth hospital. The staff were caring and attentive, and the facilities were clean and well-maintained. I would recommend this hospital as I was given a very good treatment here.'
  },
  {
    id: 4,
    name: 'Nishrin Jariwala',
    rating: 5,
    date: 'Transplant Family',
    department: 'Liver Transplant & Critical Care',
    image: 'https://billrothhospitals.com/wp-content/uploads/elementor/thumbs/av1-qm0r37eobt5k5ca7p9qfojh0z1zj4i7uic2ogcysu8.jpg',
    story: 'I recently had a positive experience at the hospital. My husband had a liver transplant and by god blessing and the staff hard work it was successful. The staff was attentive, compassionate, and professional. The facilities were clean, and the overall atmosphere was comforting. I appreciate the excellent care I received during my visit. The staff at the hospital demonstrated exceptional care and compassion throughout my experience. Their genuine concern and attentiveness made a significant difference in my comfort and recovery. I am grateful for their dedication and professionalism.'
  },
  {
    id: 5,
    name: 'Moses',
    rating: 5,
    date: 'Executive Health Checkup',
    department: 'Preventive Health & Diagnostics',
    image: 'https://billrothhospitals.com/wp-content/uploads/elementor/thumbs/ad7-qm0r33nbkh0euwfob83xekf6lii29psx5tgqj94dj4.jpg',
    story: 'We visited the hospital for a full-body checkup for my in-laws, where we were greeted by General Physician Dr. Rajendran, who was very pleasant. Throughout the day, we were assisted by Ms. Mumtaz, who displayed warmth and patience. She ensured that every test was conducted properly and that the reports were collected efficiently. Overall, it was excellent service.'
  },
  {
    id: 6,
    name: 'M.R.Gopalakrishnan',
    rating: 5,
    date: 'Senior Citizen Care',
    department: 'Cardiology & Internal Medicine',
    image: 'https://billrothhospitals.com/wp-content/uploads/elementor/thumbs/av1-qm0r37eobt5k5ca7p9qfojh0z1zj4i7uic2ogcysu8.jpg',
    story: 'Every employee is very courteous. They really show their concern on the illness and make you comfortable. The Doctors are top class and well experienced. Very clear and explained well. Highly recommended.'
  },
  {
    id: 7,
    name: 'Devi',
    rating: 5,
    date: 'Surgical Recovery',
    department: 'Surgical Specialty',
    image: 'https://billrothhospitals.com/wp-content/uploads/elementor/thumbs/ad7-qm0r33nbkh0euwfob83xekf6lii29psx5tgqj94dj4.jpg',
    story: "My overall experience with Billroth hospital was very good. Doctors Kumar's was very caring and gave the needed support. The nurse practitioners were very supportive."
  },
  {
    id: 8,
    name: 'Sashikala',
    rating: 5,
    date: 'Surgical & Insurance Claim',
    department: 'Surgical Gastroenterology',
    image: 'https://billrothhospitals.com/wp-content/uploads/elementor/thumbs/av1-qm0r37eobt5k5ca7p9qfojh0z1zj4i7uic2ogcysu8.jpg',
    story: 'Good and excellent care by all doctors, nursing staff, management staff, and maintenance staff, with special mention to surgeons Dr Kumaragurubaran, Dr Sivaran, and Dr Mani, and Dr Iniyan (took care from admission till discharge). Billing and insurance staffs were also so cooperative and took care to clear the insurance formalities.'
  },
  {
    id: 9,
    name: 'Senthil kumar',
    rating: 5,
    date: 'Operative Patient',
    department: 'Minimally Invasive Surgery',
    image: 'https://billrothhospitals.com/wp-content/uploads/elementor/thumbs/ad7-qm0r33nbkh0euwfob83xekf6lii29psx5tgqj94dj4.jpg',
    story: 'I had a very good experience. Doctors are very helpful and supportive. Nurses and other medical services are very good and awesome. We took treatment from Dr. Vinoth Kumar, very kind and gentle in explaining the issues and handling the surgery. Thank you All.'
  },
  {
    id: 10,
    name: 'Shivaprabhu',
    rating: 5,
    date: 'Surgical Inpatient',
    department: 'Orthopedics & Surgical Care',
    image: 'https://billrothhospitals.com/wp-content/uploads/elementor/thumbs/ad7-qm0r33nbkh0euwfob83xekf6lii29psx5tgqj94dj4.jpg',
    story: 'I had a very good experience, Hospital is bringing the name back. Doctors are very helpful and supportive. Nurses and other medical services are very good and awesome. We took treatment from Dr. Vinoth and Dr. Pablo, both are very kind and gentle in explaining the issues and handling the surgery.'
  },
  {
    id: 11,
    name: 'Mohammed Razeen',
    rating: 5,
    date: 'Executive Inpatient',
    department: 'Medical Specialty',
    image: 'https://billrothhospitals.com/wp-content/uploads/elementor/thumbs/av1-qm0r37eobt5k5ca7p9qfojh0z1zj4i7uic2ogcysu8.jpg',
    story: 'I recently had an experience at Billroth Hospital. I must say it was exceptional. The staff was incredibly caring and attentive, making me feel comfortable during my stay. The doctors were knowledgeable and took the time to explain the condition and treatment options thoroughly. The facilities were clean and well-maintained. Overall, I had a positive experience and I would highly recommend it for anyone seeking medical care.'
  },
  {
    id: 12,
    name: 'Karunagaran Saravanan',
    rating: 5,
    date: 'Hernia Surgery & TPA Desk',
    department: 'General & Laparoscopic Surgery',
    image: 'https://billrothhospitals.com/wp-content/uploads/elementor/thumbs/av1-qm0r37eobt5k5ca7p9qfojh0z1zj4i7uic2ogcysu8.jpg',
    story: 'Hi this is Saravanan I had admitted my daddy for hernia operation done by Dr kumaragurubaran and his service is really excellent and we are very much happy to have his advice and treatment. Thanks for the entire team of BILLROTH Hospital and during the admission, room allotment / insurance claim support, Uma madam, Hemalatha madam follow up was excellent up to the discharge process. The administration is very good. Thanks to BILLROTH TEAM.'
  }
];

const Testimonials = () => {
  const [search, setSearch] = useState('');
  const [selectedRating, setSelectedRating] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [feedbackData, setFeedbackData] = useState({
    name: '',
    department: '',
    rating: 5,
    story: ''
  });

  const filteredTestimonials = useMemo(() => {
    return realTestimonials.filter((item) => {
      const matchSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.story.toLowerCase().includes(search.toLowerCase()) ||
        (item.department && item.department.toLowerCase().includes(search.toLowerCase()));

      const matchRating =
        selectedRating === 'all' || item.rating === Number(selectedRating);

      return matchSearch && matchRating;
    });
  }, [search, selectedRating]);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
      setFeedbackData({ name: '', department: '', rating: 5, story: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">
      {/* 1. PHOTOREALISTIC HERO BANNER */}
      <section className="relative overflow-hidden text-white py-16 sm:py-20 lg:py-26 min-h-[520px] flex items-center">
        {/* Background Image with High-Clarity Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/testimonials-hero-bg.jpg"
            alt="Doctor and Patient Stories at Billroth Hospitals"
            className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-1000"
          />
          {/* Directional Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#021824]/90 via-[#063248]/65 to-slate-900/30" />
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
              <Heart size={14} />
              <span>Patients & Visitors &bull; Patient Stories</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-black tracking-tight leading-tight"
            >
              Heartfelt Words From Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-teal-200 to-[#8cc63f]">
                Healed Patients & Families
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow-xs"
            >
              Discover inspiring recovery stories from patients who experienced world-class clinical care, compassionate nursing, and life-saving treatments at Billroth Hospitals Chennai.
            </motion.p>

            {/* Action Buttons in Hero */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="flex flex-wrap items-center gap-3.5 pt-3"
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center gap-2 cursor-pointer active:scale-95"
                style={{
                  background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)',
                }}
              >
                <MessageSquare size={16} />
                <span>Share Your Experience</span>
              </button>

              <Link
                to="/appointment"
                className="px-6 py-3 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider bg-white/15 hover:bg-white/25 text-white border border-white/25 backdrop-blur-md transition-all flex items-center gap-2"
              >
                <Calendar size={16} />
                <span>Book Appointment</span>
              </Link>
            </motion.div>
          </div>

          {/* Key Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 mt-10 pt-8 border-t border-white/15 max-w-4xl">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 text-center">
              <div className="text-2xl sm:text-3xl font-black text-[#8cc63f]">4.9 / 5</div>
              <div className="text-xs text-slate-200 font-bold mt-0.5">Average Patient Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 text-center">
              <div className="text-2xl sm:text-3xl font-black text-white">50,000+</div>
              <div className="text-xs text-slate-200 font-bold mt-0.5">Satisfied Families</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 text-center">
              <div className="text-2xl sm:text-3xl font-black text-sky-300">30+ Yrs</div>
              <div className="text-xs text-slate-200 font-bold mt-0.5">Clinical Healing Trust</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 text-center">
              <div className="text-2xl sm:text-3xl font-black text-[#8cc63f]">100%</div>
              <div className="text-xs text-slate-200 font-bold mt-0.5">NABH & NABL Accredited</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FILTER & SEARCH CONTROL BAR */}
      <section className="bg-white border-b border-slate-200 sticky top-[60px] sm:top-[72px] z-20 shadow-xs">
        <div className="container-custom py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Rating Pill Filters */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {[
              { label: 'All Reviews', value: 'all' },
              { label: '5-Star Experiences', value: '5' },
              { label: '4-Star Experiences', value: '4' }
            ].map((tab) => (
              <button
                key={tab.value}
                type="button"
                onClick={() => setSelectedRating(tab.value)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedRating === tab.value
                    ? 'bg-[#0095da] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by patient, doctor, condition..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-hidden focus:border-[#0095da] focus:bg-white transition-all"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 3. TESTIMONIALS GRID */}
      <section className="container-custom py-12 sm:py-16 lg:py-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Verified Patient Experiences
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Showing {filteredTestimonials.length} authentic recovery stories from our hospital registers
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-3.5 py-1.5 rounded-full">
            <ShieldCheck size={14} />
            <span>100% Genuine Reviews</span>
          </div>
        </div>

        {filteredTestimonials.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto">
            <Quote className="mx-auto text-slate-300 mb-3" size={48} />
            <h3 className="text-base font-bold text-slate-800">No matching testimonials found</h3>
            <p className="text-xs text-slate-500 mt-1">
              Try searching with different keywords like doctor name, surgery, or hospital department.
            </p>
            <button
              type="button"
              onClick={() => { setSearch(''); setSelectedRating('all'); }}
              className="mt-4 px-4 py-2 bg-[#0095da] text-white text-xs font-bold rounded-xl cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredTestimonials.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.04, duration: 0.35 }}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#0095da]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Decorative Quote Mark */}
                <Quote className="absolute top-4 right-4 text-slate-100 group-hover:text-sky-50 transition-colors pointer-events-none" size={60} />

                <div>
                  {/* Department & Verified Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold text-[#0095da] bg-sky-50 px-2.5 py-1 rounded-md">
                      {item.department || 'Patient Care'}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600">
                      <CheckCircle2 size={12} />
                      Verified
                    </span>
                  </div>

                  {/* Golden Star Rating */}
                  <div className="flex items-center gap-1 mb-3.5" title={`${item.rating} out of 5 stars`}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={15}
                        className={i < item.rating ? 'fill-[#ff9900] text-[#ff9900]' : 'text-slate-200'}
                      />
                    ))}
                    <span className="text-xs font-black text-slate-700 ml-1.5">{item.rating}.0</span>
                  </div>

                  {/* Review Story Text */}
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-normal relative z-10 italic">
                    "{item.story}"
                  </p>
                </div>

                {/* Patient Profile Footer */}
                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between gap-3 relative z-10">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-100 border border-slate-200 shrink-0 shadow-2xs">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover object-center"
                        onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=0095da&color=fff&size=100&bold=true`;
                        }}
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#0095da] transition-colors truncate">
                        {item.name}
                      </h3>
                      <div className="text-[10px] text-slate-400 font-medium">
                        {item.date || 'Patient Story'}
                      </div>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-sky-50 text-[#0095da] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ThumbsUp size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* 4. SHARE YOUR STORY MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-100 relative"
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-sky-50 text-[#0095da] flex items-center justify-center">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">Share Your Experience</h3>
                  <p className="text-xs text-slate-500">Your feedback helps inspire other patients and improves our care</p>
                </div>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-base font-bold text-slate-800">Thank You For Your Review!</h4>
                  <p className="text-xs text-slate-500">
                    Your testimonial has been received and forwarded to our patient relationship team.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={feedbackData.name}
                      onChange={(e) => setFeedbackData({ ...feedbackData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-hidden focus:border-[#0095da] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Treated Department / Doctor</label>
                    <input
                      type="text"
                      required
                      value={feedbackData.department}
                      onChange={(e) => setFeedbackData({ ...feedbackData, department: e.target.value })}
                      placeholder="e.g. Cardiology / Dr. Vinoth Kumar"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-hidden focus:border-[#0095da] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Rating</label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFeedbackData({ ...feedbackData, rating: star })}
                          className="p-1 cursor-pointer transition-transform hover:scale-110"
                        >
                          <Star
                            size={24}
                            className={star <= feedbackData.rating ? 'fill-[#ff9900] text-[#ff9900]' : 'text-slate-200'}
                          />
                        </button>
                      ))}
                      <span className="text-xs font-black text-slate-700 ml-2">
                        {feedbackData.rating} of 5 Stars
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Story / Experience</label>
                    <textarea
                      rows={4}
                      required
                      value={feedbackData.story}
                      onChange={(e) => setFeedbackData({ ...feedbackData, story: e.target.value })}
                      placeholder="Describe your treatment experience, the care from nurses & doctors, and your recovery..."
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-hidden focus:border-[#0095da] focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl text-xs font-black uppercase tracking-wider text-white shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    style={{
                      background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)',
                    }}
                  >
                    <Send size={14} />
                    <span>Submit Testimonial</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Testimonials;
