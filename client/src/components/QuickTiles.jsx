import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { GraduationCap, Heart, Newspaper, ArrowRight } from 'lucide-react';

const tiles = [
  {
    icon: GraduationCap,
    title: 'Academics & Nursing',
    subtitle: 'Training Next-Gen Medical Pioneers',
    description:
      'Offering advanced Masters, DNB, Nursing, and Allied Health Science programmes with clinical hands-on exposure.',
    link: '/academics',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    tag: 'Education',
  },
  {
    icon: Heart,
    title: 'Master Health Checkups',
    subtitle: 'Preventive Care Packages',
    description:
      'Comprehensive full-body health screening packages designed for women, men, seniors, and cardiac wellness.',
    link: '/health-packages',
    image:
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
    tag: 'Preventive Health',
    featured: true,
  },
  {
    icon: Newspaper,
    title: 'News, CME & Events',
    subtitle: 'Clinical Advancements & Research',
    description:
      'Stay updated with Billroth’s scientific conferences, health camps, breakthroughs, and community healthcare drives.',
    link: '/events',
    image:
      'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800&q=80',
    tag: 'Updates',
  },
];

const QuickTiles = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 2xl:py-28 bg-slate-50 relative">
      <div className="container-custom">
        
        <div className="text-center max-w-3xl 2xl:max-w-4xl mx-auto mb-16">
          <span className="inline-block bg-sky-50 border border-sky-200/60 text-[#0095da] text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
            Explore Billroth
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
            Beyond <span className="text-[#0095da]">Treatment</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg 2xl:text-xl">
            Empowering communities through medical education, preventive diagnostics, and ongoing clinical research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 2xl:gap-10">
          {tiles.map((tile, i) => (
            <motion.div
              key={tile.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <Link
                to={tile.link}
                className="group relative flex flex-col justify-end h-[420px] 2xl:h-[480px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 p-8 2xl:p-10 border border-slate-200/50"
              >
                {/* Background Image */}
                <img
                  src={tile.image}
                  alt={tile.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#002d52] via-[#002d52]/70 to-transparent group-hover:via-[#002d52]/80 transition-colors" />

                {/* Top Tag */}
                <div className="absolute top-6 left-6">
                  <span className="inline-block bg-white/20 backdrop-blur-md text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
                    {tile.tag}
                  </span>
                </div>

                {/* Card Content */}
                <div className="relative z-10 text-white space-y-2.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#8cc63f] text-slate-950 flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
                    <tile.icon size={22} />
                  </div>

                  <div className="text-xs font-semibold text-[#8cc63f] uppercase tracking-wider">
                    {tile.subtitle}
                  </div>

                  <h3 className="text-2xl font-extrabold text-white group-hover:text-sky-200 transition-colors">
                    {tile.title}
                  </h3>

                  <p className="text-sm text-slate-200/80 line-clamp-2 leading-relaxed font-normal">
                    {tile.description}
                  </p>

                  <div className="pt-3 flex items-center gap-2 text-sm font-bold text-[#8cc63f] group-hover:text-white transition-colors">
                    <span>Learn More</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default QuickTiles;
