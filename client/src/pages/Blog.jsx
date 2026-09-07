import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { blogs } from '../data/data';

const Blog = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div
        className="relative py-20 px-4 text-center overflow-hidden text-white"
        style={{
          background: 'linear-gradient(135deg, #004b77 0%, #0077b6 35%, #0095da 65%, #3cb878 85%, #8cc63f 100%)',
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '36px 36px',
          }}
        />
        <div className="container-custom text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl 2xl:max-w-4xl mx-auto space-y-4"
          >
            <span className="inline-block bg-white/15 text-[#8cc63f] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider border border-white/20">
              Health Knowledge Hub
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white">
              Health <span className="text-[#8cc63f]">Articles & Blogs</span>
            </h1>
            <p className="text-white/90 text-base sm:text-lg 2xl:text-xl">
              Stay informed with the latest health insights, medical advances, and wellness tips from Billroth's expert team.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container-custom py-16 2xl:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 2xl:gap-10">
          {[...blogs, ...blogs].map((blog, i) => (
            <motion.article
              key={`${blog.id}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = 'https://billrothhospitals.com/wp-content/uploads/2024/02/hospital-care.png';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute bottom-3 left-3 bg-[#8cc63f] text-slate-950 text-xs font-bold px-3 py-1 rounded-full">
                  {blog.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-3">
                  <Calendar size={12} /> {blog.date}
                </div>
                <h3 className="font-extrabold text-gray-800 text-base leading-snug mb-3 group-hover:text-[#0095da] transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                  {blog.excerpt}
                </p>
                <Link
                  to={`/blog/${blog.slug}`}
                  className="inline-flex items-center gap-1.5 text-[#0095da] text-sm font-bold hover:gap-3 transition-all"
                >
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
