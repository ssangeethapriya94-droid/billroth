import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { blogPosts } from '../data/blogData';

const BlogSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Show first 4 featured blog posts
  const featuredBlogs = blogPosts.slice(0, 4);

  return (
    <section ref={ref} className="py-12 sm:py-16 bg-slate-50/80 relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-sky-200/20 rounded-full blur-[90px]" />
        <div className="absolute bottom-10 -left-20 w-80 h-80 bg-emerald-200/20 rounded-full blur-[90px]" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 bg-sky-50 border border-sky-200/80 text-[#0095da] text-[11px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
              <BookOpen size={13} className="text-[#8cc63f]" />
              <span>Health Knowledge Hub</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Latest Insights & <span className="text-[#0095da]">Medical Articles</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              Stay informed with clinically reviewed medical guidance, surgical advances, and preventive health insights.
            </p>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#0095da] hover:text-[#0077b6] group shrink-0"
          >
            <span>View All Health Blogs</span>
            <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        {/* 4-Column Grid with Clickable Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {featuredBlogs.map((blog, i) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 hover:border-[#0095da]/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <Link to={`/blog/${blog.slug}`} className="block">
                {/* Image Container with Floating Category Badge */}
                <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-900">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="inline-block bg-white/95 backdrop-blur-md text-[#0095da] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-xs border border-white/60">
                      {blog.category}
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 right-3">
                    <span className="inline-flex items-center gap-1 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-white/20">
                      <Clock size={11} className="text-[#8cc63f]" />
                      {blog.readTime || '5 min read'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-semibold">
                    <Calendar size={12} />
                    <span>{blog.date}</span>
                  </div>

                  <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-[#0095da] transition-colors line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {blog.excerpt}
                  </p>
                </div>
              </Link>

              {/* Card Footer CTA */}
              <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 border-t border-slate-100">
                <Link
                  to={`/blog/${blog.slug}`}
                  className="w-full inline-flex items-center justify-between text-xs font-black text-[#0095da] group-hover:text-[#0077b6] transition-colors py-1"
                >
                  <span>Read Full Article</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
