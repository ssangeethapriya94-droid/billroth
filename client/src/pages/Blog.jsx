import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Search, BookOpen, Sparkles, Stethoscope, ChevronRight } from 'lucide-react';
import { blogPosts } from '../data/blogData';

const categories = ['All Articles', 'Cardiology', 'Orthopedics', 'Gastroenterology', 'Wellness', 'Nephrology & Cardiology'];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Articles');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter posts
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All Articles' || post.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Header Banner */}
      <div
        className="relative py-16 sm:py-20 px-4 text-center overflow-hidden text-white"
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
            className="max-w-3xl mx-auto space-y-3.5"
          >
            <span className="inline-flex items-center gap-1.5 bg-white/15 text-[#8cc63f] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider border border-white/20">
              <BookOpen size={14} />
              <span>Billroth Health Knowledge Hub</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Medical <span className="text-[#8cc63f]">Insights & Articles</span>
            </h1>
            <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Clinically verified guides, doctor recommendations, surgical milestones, and healthy living tips from Chennai's premier medical specialists.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white border-b border-slate-200/80 sticky top-0 z-20 shadow-xs">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-black transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-[#0095da] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search medical topics..."
                className="w-full pl-9 pr-4 py-1.5 text-xs rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0095da] bg-slate-50"
              />
            </div>

          </div>
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="container-custom py-12 sm:py-16">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/80 p-8">
            <BookOpen size={36} className="mx-auto text-slate-300 mb-3" />
            <h3 className="text-lg font-bold text-slate-800 mb-1">No articles found</h3>
            <p className="text-xs text-slate-500 mb-4">Try adjusting your search terms or category filters.</p>
            <button
              onClick={() => { setSelectedCategory('All Articles'); setSearchQuery(''); }}
              className="px-4 py-2 bg-[#0095da] text-white text-xs font-bold rounded-full"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredPosts.map((blog, i) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-xl border border-slate-200/80 hover:border-[#0095da]/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <Link to={`/blog/${blog.slug}`} className="block">
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                    
                    <span className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md text-[#0095da] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-xs border border-white/60">
                      {blog.category}
                    </span>

                    <span className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-white/20 flex items-center gap-1">
                      <Clock size={11} className="text-[#8cc63f]" />
                      {blog.readTime || '5 min read'}
                    </span>
                  </div>

                  <div className="p-5 sm:p-6 space-y-2.5">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold">
                      <Calendar size={12} /> {blog.date}
                    </div>

                    <h3 className="font-extrabold text-slate-900 text-base leading-snug group-hover:text-[#0095da] transition-colors line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>
                </Link>

                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2 border-t border-slate-100">
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
        )}
      </div>

    </div>
  );
};

export default Blog;
