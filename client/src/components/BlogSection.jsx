import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, BookOpen } from 'lucide-react';
import { blogs } from '../data/data';

const BlogSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 2xl:py-28 bg-slate-50 relative">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-sky-50 border border-sky-200/60 text-[#0095da] text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
              <BookOpen size={13} />
              <span>Health Knowledge Hub</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold text-slate-900 tracking-tight">
              Latest Insights & <span className="text-[#0095da]">Medical Articles</span>
            </h2>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm 2xl:text-base font-bold text-[#0095da] hover:text-[#0077b6] group"
          >
            <span>View All Health Blogs</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 2xl:gap-8">
          {blogs.map((blog, i) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:border-[#0095da]/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-white/90 backdrop-blur-md text-[#0095da] text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                    <Calendar size={13} />
                    <span>{blog.date}</span>
                  </div>

                  <h3 className="font-extrabold text-slate-900 text-base leading-snug group-hover:text-[#0095da] transition-colors line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-3 font-normal">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2">
                <Link
                  to={`/blog/${blog.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0095da] group-hover:text-[#0077b6]"
                >
                  <span>Read Full Article</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
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
