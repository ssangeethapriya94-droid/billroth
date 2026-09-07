import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Phone } from 'lucide-react';
import { departments } from '../data/data';

const DepartmentDetail = () => {
  const { slug } = useParams();
  const dept = departments.find((d) => d.slug === slug);

  if (!dept) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Department not found</h2>
          <Link to="/departments" className="text-[#2f5aae] font-bold hover:underline">
            ← Back to Departments
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={dept.image}
          alt={dept.name}
          className="w-full h-full object-cover"
          onError={(e) => { e.target.src = 'https://billrothhospitals.com/wp-content/uploads/2024/02/hospital-care.png'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f4e]/90 to-[#2f5aae]/70" />
        <div className="absolute inset-0 flex items-end p-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <Link
              to="/departments"
              className="inline-flex items-center gap-2 text-blue-200 hover:text-white text-sm mb-4 transition-colors"
            >
              <ArrowLeft size={16} /> Back to Departments
            </Link>
            <h1 className="text-4xl font-extrabold">{dept.name}</h1>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
                About {dept.name}
              </h2>
              <p className="text-gray-600 leading-relaxed text-base mb-6">
                {dept.description} Our team of highly qualified specialists uses the latest diagnostic tools and treatment protocols to deliver the best possible outcomes for every patient.
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                At Billroth Hospitals, our {dept.name} department is equipped with state-of-the-art technology and staffed by experienced medical professionals who are committed to providing compassionate, evidence-based care. We offer comprehensive services from diagnosis through treatment and follow-up care.
              </p>
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-5"
          >
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="font-extrabold text-gray-900 mb-4">Book an Appointment</h3>
              <p className="text-gray-600 text-sm mb-5">
                Schedule your visit with our {dept.name} specialists today.
              </p>
              <Link
                to="/appointment"
                className="flex items-center justify-center gap-2 bg-[#2f5aae] hover:bg-[#1e3d7a] text-white py-3 rounded-xl font-bold text-sm w-full transition-all"
              >
                <Calendar size={15} /> Book Appointment
              </Link>
              <a
                href="tel:+914426643000"
                className="flex items-center justify-center gap-2 mt-3 border-2 border-[#2f5aae] text-[#2f5aae] py-3 rounded-xl font-bold text-sm w-full hover:bg-blue-50 transition-all"
              >
                <Phone size={15} /> Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetail;
