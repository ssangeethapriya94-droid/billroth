import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  CheckCircle2, 
  PhoneCall, 
  Sparkles, 
  BookOpen, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  Copy, 
  Check, 
  Stethoscope,
  HeartPulse,
  Award
} from 'lucide-react';
import { blogPosts } from '../data/blogData';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  // Find post by slug or fallback to first post
  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];

  // Related posts (excluding current)
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSocialShare = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(post.title);
    if (platform === 'whatsapp') {
      window.open(`https://api.whatsapp.com/send?text=${text}%20${url}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
    } else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Top Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200/80 py-3.5">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-[#0095da] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-[#0095da] transition-colors">Health Knowledge Hub</Link>
            <span>/</span>
            <span className="text-slate-400 truncate max-w-xs sm:max-w-md">{post.category}</span>
            <span>/</span>
            <span className="text-slate-900 font-bold truncate max-w-sm">{post.title}</span>
          </div>
        </div>
      </div>

      {/* Article Header Hero - Clean Light Theme */}
      <section className="bg-gradient-to-b from-sky-50/90 via-white to-slate-50 text-slate-900 py-10 lg:py-14 border-b border-slate-200/80 relative overflow-hidden">
        {/* Background ambient accents */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-sky-100 rounded-full blur-[90px]" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-100 rounded-full blur-[90px]" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto space-y-4">
            
            {/* Back Button & Category */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#0095da] bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-xs transition-all hover:bg-slate-50"
              >
                <ArrowLeft size={14} />
                <span>Back to All Articles</span>
              </Link>

              <span className="inline-block bg-sky-100 text-[#0095da] border border-sky-200 text-xs font-black px-3.5 py-1.2 rounded-full uppercase tracking-wider shadow-2xs">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-black text-slate-900 leading-tight tracking-tight">
              {post.title}
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              {post.subtitle}
            </p>

            {/* Author & Meta Bar */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-white border-2 border-sky-300 shadow-2xs overflow-hidden shrink-0">
                  <img
                    src={post.author.image}
                    alt={post.author.name}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80';
                    }}
                  />
                </div>
                <div>
                  <div className="text-sm font-black text-slate-900">{post.author.name}</div>
                  <div className="text-[11px] text-slate-500 font-medium">{post.author.title} • {post.author.department}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-500 font-semibold">
                <div className="flex items-center gap-1.5">
                  <Calendar size={13} className="text-[#0095da]" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={13} className="text-[#10a877]" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-10 lg:py-14">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Left Main Article Column (8 Cols) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Featured Hero Image */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xs border border-slate-200/80">
                <div className="relative h-64 sm:h-96 w-full bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-medium flex items-center justify-between">
                    <span className="bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      Billroth Clinical Knowledge Series
                    </span>
                    <span className="hidden sm:inline bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      Medically Reviewed
                    </span>
                  </div>
                </div>
              </div>

              {/* Key Takeaways Card - Fresh Light Accent */}
              {post.keyTakeaways && post.keyTakeaways.length > 0 && (
                <div className="bg-gradient-to-br from-sky-50 via-white to-emerald-50/50 rounded-3xl p-6 sm:p-7 border border-sky-200/80 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-[#0095da] font-black text-sm uppercase tracking-wider">
                    <Sparkles size={16} className="text-[#8cc63f]" />
                    <span>Key Medical Takeaways</span>
                  </div>
                  <ul className="space-y-2.5">
                    {post.keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        <CheckCircle2 size={16} className="text-[#10a877] shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Dynamic Article Sections */}
              <div className="bg-white rounded-3xl p-6 sm:p-9 border border-slate-200/80 shadow-xs space-y-8">
                {post.sections && post.sections.map((section, idx) => (
                  <div key={idx} className="space-y-4">
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                      {section.heading}
                    </h2>
                    
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {section.content}
                    </p>

                    {section.bullets && section.bullets.length > 0 && (
                      <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/60 space-y-2.5">
                        {section.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0095da] mt-2 shrink-0" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.tip && (
                      <div className="bg-emerald-50/90 border-l-4 border-[#10a877] rounded-r-2xl p-4 sm:p-5 text-xs sm:text-sm text-emerald-950 space-y-1">
                        <div className="font-black text-emerald-900 flex items-center gap-1.5">
                          <ShieldCheck size={16} className="text-[#10a877]" />
                          <span>Specialist Tip</span>
                        </div>
                        <p className="leading-relaxed text-emerald-800 font-medium">{section.tip}</p>
                      </div>
                    )}
                  </div>
                ))}

                {/* Social Share Bar */}
                <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                    <Share2 size={15} className="text-[#0095da]" />
                    <span>Share this medical article:</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleSocialShare('whatsapp')}
                      className="px-3.5 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-bold hover:bg-emerald-600 transition-colors shadow-xs"
                    >
                      WhatsApp
                    </button>
                    <button
                      onClick={() => handleSocialShare('twitter')}
                      className="px-3.5 py-1.5 rounded-full bg-sky-500 text-white text-xs font-bold hover:bg-sky-600 transition-colors shadow-xs"
                    >
                      Twitter
                    </button>
                    <button
                      onClick={() => handleSocialShare('linkedin')}
                      className="px-3.5 py-1.5 rounded-full bg-blue-700 text-white text-xs font-bold hover:bg-blue-800 transition-colors shadow-xs"
                    >
                      LinkedIn
                    </button>
                    <button
                      onClick={handleShare}
                      className="px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 transition-colors flex items-center gap-1.5"
                    >
                      {copied ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
                      <span>{copied ? 'Copied!' : 'Copy Link'}</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Frequently Asked Questions */}
              {post.faqs && post.faqs.length > 0 && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
                  <h3 className="text-lg sm:text-xl font-black text-slate-900">
                    Frequently Asked Questions
                  </h3>

                  <div className="space-y-3">
                    {post.faqs.map((faq, idx) => (
                      <div
                        key={idx}
                        className="border border-slate-200 rounded-2xl overflow-hidden transition-all"
                      >
                        <button
                          onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                          className="w-full p-4 text-left font-bold text-slate-800 text-sm flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors"
                        >
                          <span>{faq.q}</span>
                          {openFaq === idx ? <ChevronUp size={16} className="text-[#0095da]" /> : <ChevronDown size={16} />}
                        </button>
                        {openFaq === idx && (
                          <div className="p-4 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/50">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Doctor Author Bio & Appointment Booking CTA - Clean Light Card */}
              <div className="bg-gradient-to-br from-slate-50 via-white to-sky-50/50 rounded-3xl p-6 sm:p-8 text-slate-900 border border-slate-200/90 shadow-xs space-y-5">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white border-2 border-sky-300 shadow-sm overflow-hidden shrink-0">
                    <img
                      src={post.author.image}
                      alt={post.author.name}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80';
                      }}
                    />
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <span className="inline-block bg-sky-100 text-[#0095da] border border-sky-200 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase">
                      Medical Reviewer
                    </span>
                    <h4 className="text-lg sm:text-xl font-black text-slate-900">{post.author.name}</h4>
                    <p className="text-xs text-[#0095da] font-extrabold">{post.author.qualifications}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{post.author.title} at Billroth Hospitals Chennai.</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-600 font-medium">
                    Have questions or need a personalized specialist evaluation?
                  </div>
                  <Link
                    to="/appointment"
                    className="w-full sm:w-auto px-6 py-3 rounded-full font-black text-xs uppercase tracking-wider text-white shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-center hover:brightness-105"
                    style={{
                      background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)',
                    }}
                  >
                    <span>Book Doctor Appointment</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

            </div>

            {/* Right Sidebar (4 Cols) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Emergency Assistance Card - Clean Lite Theme */}
              <div className="bg-gradient-to-br from-rose-50 via-white to-red-50/60 rounded-3xl p-5 sm:p-6 border border-red-200/90 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-100/90 text-red-600 flex items-center justify-center shrink-0 shadow-2xs">
                    <PhoneCall size={18} className="animate-bounce" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-red-600">24/7 Medical Emergency</div>
                    <div className="text-sm font-black text-slate-900">Billroth Emergency Desk</div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  For acute cardiac symptoms, sudden trauma, or acute surgical needs, call immediately:
                </p>

                <div className="space-y-2.5">
                  <a
                    href="tel:04426264000"
                    className="w-full py-2.5 px-4 bg-white hover:bg-red-50 text-red-600 hover:text-red-700 border border-red-200 rounded-xl font-black text-xs flex items-center justify-center gap-2 shadow-2xs transition-all active:scale-[0.98]"
                  >
                    <PhoneCall size={14} className="text-red-500" />
                    <span>044–26264000 (Emergency)</span>
                  </a>
                  <a
                    href="tel:04440274027"
                    className="w-full py-2.5 px-4 bg-red-50/80 hover:bg-red-100 text-red-700 border border-red-200/80 rounded-xl font-black text-xs flex items-center justify-center gap-2 shadow-2xs transition-all active:scale-[0.98]"
                  >
                    <PhoneCall size={14} className="text-red-600" />
                    <span>044–40274027 (Ambulance)</span>
                  </a>
                </div>
              </div>

              {/* Health Packages Promo Card - Clean Lite Theme */}
              <div className="bg-gradient-to-br from-sky-50 via-white to-emerald-50/50 rounded-3xl p-5 sm:p-6 border border-sky-200/80 shadow-xs space-y-3.5">
                <div className="flex items-center gap-2 text-[#0095da] text-xs font-black uppercase">
                  <HeartPulse size={16} />
                  <span>Preventive Healthcare</span>
                </div>
                <h4 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                  Comprehensive Master Health Checkups
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  12+ specialized health packages starting from ₹1,200 with same-day digital reports and doctor consultations.
                </p>
                <Link
                  to="/health-checkup"
                  className="w-full py-2.5 px-4 rounded-xl font-black text-xs uppercase tracking-wider text-white shadow-xs hover:brightness-105 transition-all flex items-center justify-center gap-2"
                  style={{
                    background: 'linear-gradient(90deg, #0095da 0%, #10a877 50%, #8cc63f 100%)',
                  }}
                >
                  <span>Explore 12+ Packages</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Quick Navigation / Related Articles - Clean Lite Theme */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-slate-900 font-black text-sm">
                  <BookOpen size={16} className="text-[#0095da]" />
                  <span>More Medical Insights</span>
                </div>

                <div className="space-y-3">
                  {relatedPosts.map((rPost) => (
                    <Link
                      key={rPost.id}
                      to={`/blog/${rPost.slug}`}
                      className="group flex items-center gap-3 p-2 rounded-2xl hover:bg-slate-50 transition-colors"
                    >
                      <img
                        src={rPost.image}
                        alt={rPost.title}
                        className="w-14 h-14 rounded-xl object-cover shrink-0 group-hover:scale-105 transition-transform bg-slate-100"
                      />
                      <div className="space-y-0.5 min-w-0">
                        <span className="text-[10px] font-bold text-[#0095da] uppercase tracking-wider">
                          {rPost.category}
                        </span>
                        <h5 className="text-xs font-bold text-slate-800 line-clamp-2 group-hover:text-[#0095da] transition-colors leading-snug">
                          {rPost.title}
                        </h5>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Bottom Section: Related Articles Grid */}
      <section className="py-12 bg-white border-t border-slate-200/80">
        <div className="container-custom space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[#0095da] text-xs font-extrabold uppercase tracking-wider">
                Explore More Knowledge
              </span>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                Related Health & Medical Articles
              </h3>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0095da] hover:text-[#0077b6]"
            >
              <span>View All Health Blogs</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((rPost) => (
              <Link
                key={rPost.id}
                to={`/blog/${rPost.slug}`}
                className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/80 hover:border-[#0095da]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={rPost.image}
                      alt={rPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-[#0095da] text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase shadow-xs">
                      {rPost.category}
                    </span>
                  </div>
                  <div className="p-5 space-y-2">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                      <Calendar size={12} />
                      <span>{rPost.date}</span>
                    </div>
                    <h4 className="font-black text-slate-900 text-sm group-hover:text-[#0095da] transition-colors leading-snug line-clamp-2">
                      {rPost.title}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {rPost.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0095da] group-hover:translate-x-1 transition-transform">
                    <span>Read Full Article</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default BlogDetail;
