import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Phone,
  Clock,
  Globe2,
  ShieldCheck,
  MapPin,
  Stethoscope,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Award
} from 'lucide-react';
import { doctorsData } from '../data/doctorsData';
import { hospitalInfo } from '../data/data';

const DoctorDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find doctor by slug, name or id
  const doctor =
    doctorsData.find(
      (d) =>
        d.slug === slug ||
        d.slug.includes(slug || '') ||
        (slug && d.name.toLowerCase().includes(slug.toLowerCase().replace(/-/g, ' '))) ||
        String(d.id) === slug
    ) || doctorsData[0];

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4 bg-slate-50">
        <div>
          <h2 className="text-2xl font-bold text-slate-700 mb-4">Doctor profile not found</h2>
          <Link to="/doctors" className="text-[#0095da] font-bold hover:underline">
            ← Back to All Doctors
          </Link>
        </div>
      </div>
    );
  }

  // Related doctors in same department
  const relatedDoctors = doctorsData
    .filter((d) => d.id !== doctor.id && d.department === doctor.department)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Top Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200/80 relative z-20">
        <div className="container-custom py-3 px-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link to="/" className="hover:text-[#0095da] transition-colors">
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <Link to="/doctors" className="hover:text-[#0095da] transition-colors">
              Our Doctors
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-[#0095da] font-bold truncate max-w-[200px] sm:max-w-none">
              {doctor.name}
            </span>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#0095da] px-3 py-1.5 rounded-xl hover:bg-slate-100 transition-all"
          >
            <ArrowLeft size={14} />
            <span>Back</span>
          </button>
        </div>
      </div>

      {/* Main Profile Container */}
      <div className="container-custom py-6 sm:py-10 md:py-14 lg:py-16">
        <div className="bg-white rounded-2xl sm:rounded-3xl lg:rounded-[36px] border border-slate-200/90 shadow-sm p-4 sm:p-7 md:p-10 lg:p-12 xl:p-14 overflow-hidden relative">
          
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-bl from-sky-100/50 via-teal-50/30 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-14 items-start relative z-10">
            
            {/* Left Column (5 Cols) - Doctor Photo & Booking CTA */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 space-y-4 sm:space-y-6"
            >
              {/* Doctor Portrait Image Container (Clear & High-Resolution) */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-slate-100 via-sky-50 to-slate-200 border-2 border-white shadow-xl shadow-slate-200/60 p-2 sm:p-3 max-w-sm sm:max-w-md lg:max-w-none mx-auto">
                <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-200">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top filter brightness-100 contrast-[1.02] hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(doctor.name)}&background=0095da&color=fff&size=400&bold=true`;
                    }}
                  />
                  
                  {/* Verified Badge Overlay */}
                  <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-white flex items-center gap-1.5 text-xs font-black text-emerald-700">
                    <ShieldCheck size={14} className="text-emerald-600" />
                    <span>NABH Verified</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link
                  to={`/appointment?doctor=${encodeURIComponent(doctor.name)}&dept=${encodeURIComponent(doctor.department)}`}
                  className="w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-[#0095da]/20 hover:shadow-xl hover:shadow-[#0095da]/30 transition-all duration-300 active:scale-98 text-center group"
                  style={{
                    background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)',
                  }}
                >
                  <Calendar size={18} className="group-hover:scale-110 transition-transform" />
                  <span>Book an Appointment</span>
                </Link>

                <a
                  href={`tel:${hospitalInfo.emergency}`}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 font-bold text-xs uppercase tracking-wider transition-all text-center"
                >
                  <Phone size={15} className="text-red-500" />
                  <span>24/7 Helpline: 044-26264000</span>
                </a>
              </div>

              {/* Consultation Quick Facts */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 text-xs text-slate-700">
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-200/60">
                  <span className="text-slate-500 font-semibold">Available Campuses:</span>
                  <span className="font-bold text-slate-800 text-right">{doctor.campus || 'Shenoy Nagar & RA Puram'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-semibold">OPD Schedule:</span>
                  <span className="font-bold text-emerald-700">Mon - Sat (Available)</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column (7 Cols) - Doctor Profile Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-7 space-y-8"
            >
              {/* Header Profile Title */}
              <div className="space-y-2 border-b border-slate-100 pb-6">
                <div className="text-xs font-black uppercase tracking-widest text-[#0095da]">
                  PROFILE
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  {doctor.name}
                </h1>

                <p className="text-sm sm:text-base font-black text-[#0095da] uppercase tracking-wider">
                  {doctor.designation}
                </p>

                {/* Accent line divider */}
                <div className="w-16 h-1 bg-[#0095da] rounded-full my-3" />

                {/* Qualification */}
                {doctor.qualification && (
                  <p className="text-sm sm:text-base font-extrabold text-slate-700">
                    {doctor.qualification}
                  </p>
                )}
              </div>

              {/* Clinical Expertise Tags Section */}
              {doctor.expertise && doctor.expertise.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-widest text-[#0095da]">
                    CLINICAL EXPERTISE
                  </h3>

                  <div className="flex flex-wrap gap-2.5">
                    {doctor.expertise.map((exp, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-full bg-slate-100/90 hover:bg-[#0095da]/10 border border-slate-200/90 text-slate-800 text-xs sm:text-sm font-bold shadow-2xs hover:border-[#0095da]/40 transition-colors"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Detailed Attributes Grid (Exact Real Website Data) */}
              <div className="space-y-5 pt-4 border-t border-slate-100">
                
                {/* Experience */}
                {doctor.experience && (
                  <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 items-baseline">
                    <div className="sm:col-span-4 text-xs font-black uppercase tracking-widest text-[#0095da]">
                      EXPERIENCE
                    </div>
                    <div className="sm:col-span-8 text-sm sm:text-base font-bold text-slate-800">
                      {doctor.experience}
                    </div>
                  </div>
                )}

                {/* Languages */}
                {doctor.languages && (
                  <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 items-baseline">
                    <div className="sm:col-span-4 text-xs font-black uppercase tracking-widest text-[#0095da]">
                      LANGUAGES
                    </div>
                    <div className="sm:col-span-8 text-sm sm:text-base font-bold text-slate-800">
                      {doctor.languages}
                    </div>
                  </div>
                )}

                {/* Timings */}
                {doctor.timings && (
                  <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 items-baseline">
                    <div className="sm:col-span-4 text-xs font-black uppercase tracking-widest text-[#0095da]">
                      TIMINGS
                    </div>
                    <div className="sm:col-span-8 text-sm sm:text-base font-bold text-slate-800">
                      {doctor.timings}
                    </div>
                  </div>
                )}

                {/* Memberships */}
                {doctor.memberships && doctor.memberships.length > 0 && (
                  <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 items-start">
                    <div className="sm:col-span-4 text-xs font-black uppercase tracking-widest text-[#0095da] pt-1">
                      MEMBERSHIPS
                    </div>
                    <div className="sm:col-span-8 space-y-1.5">
                      {doctor.memberships.map((mem, idx) => (
                        <div key={idx} className="text-sm sm:text-base font-bold text-slate-800 leading-relaxed">
                          {mem}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Hospital Affiliation */}
                <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 items-baseline">
                  <div className="sm:col-span-4 text-xs font-black uppercase tracking-widest text-[#0095da]">
                    AFFILIATION
                  </div>
                  <div className="sm:col-span-8 text-sm sm:text-base font-bold text-slate-800">
                    Billroth Hospitals – Shenoy Nagar & R.A. Puram, Chennai
                  </div>
                </div>

              </div>

            </motion.div>

          </div>
        </div>

        {/* Related Specialists Section */}
        {relatedDoctors.length > 0 && (
          <div className="mt-16 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#0095da]">
                  Same Specialty
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">
                  Other Specialists in {doctor.department}
                </h3>
              </div>

              <Link
                to="/doctors"
                className="text-xs font-black uppercase tracking-wider text-[#0095da] hover:text-[#0077b6] flex items-center gap-1"
              >
                <span>View All Doctors</span>
                <ChevronRight size={14} />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedDoctors.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/doctors/${rel.slug}`}
                  className="group bg-white rounded-3xl p-5 border border-slate-200/90 hover:border-[#0095da]/50 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-16 h-20 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200 shadow-xs">
                      <img
                        src={rel.image}
                        alt={rel.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-black text-slate-900 group-hover:text-[#0095da] transition-colors line-clamp-1">
                        {rel.name}
                      </h4>
                      <p className="text-xs font-bold text-[#0095da] line-clamp-1 mt-0.5">
                        {rel.designation}
                      </p>
                      {rel.experience && (
                        <span className="text-[11px] text-slate-400 font-semibold block mt-1">
                          {rel.experience}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default DoctorDetail;
