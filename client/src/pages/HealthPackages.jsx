import { motion } from 'framer-motion';
import { CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import { healthPackages } from '../data/data';
import { Link } from 'react-router-dom';

const packageTests = {
  1: ['Complete Blood Count (CBC)', 'Blood Sugar (Fasting)', 'Lipid Profile', 'Urine Analysis', 'Blood Pressure'],
  2: ['Complete Blood Count', 'Blood Sugar (Fasting & PP)', 'Lipid Profile', 'Liver Function Test', 'Kidney Function Test', 'Thyroid (T3, T4, TSH)', 'ECG', 'Chest X-Ray', 'Urine & Stool Analysis'],
  3: ['Complete Blood Count', 'Blood Sugar', 'Lipid Profile', 'Liver Function Test', 'Kidney Function Test', 'Bone Density', 'Eye Screening', 'Audiometry Test'],
  4: ['ECG (Electrocardiogram)', 'Echo Cardiography', 'Stress Test (TMT)', 'Cardiac Enzymes', 'Lipid Profile', 'Blood Sugar'],
};

const HealthPackages = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div
        className="relative py-20 px-4 text-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0a1f4e 0%, #2f5aae 60%, #0095da 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Preventive Care
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Health <span className="text-[#a6ce39]">Packages</span>
          </h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            Preventive healthcare is the key to a vibrant and fulfilling life. Choose a package designed for you.
          </p>
        </motion.div>
      </div>

      {/* Info banner */}
      <div className="bg-[#a6ce39]/10 border-b border-[#a6ce39]/20 py-4 px-4">
        <p className="text-center text-sm text-gray-600 font-medium">
          📞 Call us at <a href="tel:+914426643000" className="font-bold text-[#2f5aae] hover:underline">+91 44 2664 3000</a> to book your health package today
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Packages grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {healthPackages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-300 flex flex-col ${
                pkg.highlight
                  ? 'shadow-2xl shadow-blue-100 ring-2 ring-[#2f5aae] scale-105'
                  : 'shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#2f5aae]/20'
              }`}
            >
              {pkg.highlight && (
                <div
                  className="text-white text-xs font-bold text-center py-2 tracking-widest uppercase"
                  style={{ background: 'linear-gradient(135deg, #2f5aae, #0095da)' }}
                >
                  ⭐ Most Popular
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                {/* Header */}
                <div className={`p-4 rounded-xl mb-5 ${pkg.highlight ? 'bg-blue-50' : 'bg-gray-50'}`}>
                  <h3 className="font-extrabold text-gray-900 text-base mb-3 leading-snug">{pkg.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-[#2f5aae]">₹{pkg.price.toLocaleString()}</span>
                    <span className="text-gray-400 text-xs">/ person</span>
                  </div>
                  <p className="text-gray-500 text-xs mt-1">{pkg.tests}+ tests included</p>
                </div>

                {/* Tests list */}
                <ul className="space-y-2.5 mb-6 flex-1">
                  {(packageTests[pkg.id] || []).map((test) => (
                    <li key={test} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={14} className="text-[#a6ce39] flex-shrink-0 mt-0.5" />
                      {test}
                    </li>
                  ))}
                  {pkg.tests > (packageTests[pkg.id] || []).length && (
                    <li className="text-xs text-[#2f5aae] font-semibold pl-5">
                      + {pkg.tests - (packageTests[pkg.id] || []).length} more tests
                    </li>
                  )}
                </ul>

                {/* CTA */}
                <a
                  href="tel:+914426643000"
                  className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm transition-all ${
                    pkg.highlight
                      ? 'text-white shadow-lg hover:shadow-xl'
                      : 'border-2 border-[#2f5aae] text-[#2f5aae] hover:bg-blue-50'
                  }`}
                  style={pkg.highlight ? { background: 'linear-gradient(135deg, #2f5aae, #0095da)' } : {}}
                >
                  <Phone size={14} /> Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div
          className="rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-white"
          style={{ background: 'linear-gradient(135deg, #0a1f4e 0%, #2f5aae 100%)' }}
        >
          <div>
            <h3 className="text-xl font-extrabold mb-2">Need a Custom Health Package?</h3>
            <p className="text-blue-200 text-sm">
              Talk to our health advisors for a package tailored specifically to your needs.
            </p>
          </div>
          <Link
            to="/contact"
            className="flex items-center gap-2 bg-[#a6ce39] hover:bg-[#89ac2a] text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all flex-shrink-0"
          >
            Contact Us <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HealthPackages;
