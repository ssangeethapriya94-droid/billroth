// Central data file — all static content for the frontend
export const hospitalInfo = {
  name: 'Billroth Hospitals',
  tagline: 'Best Multi Specialty Hospital in Chennai',
  phone1: '+91 44 2664 3000',
  phone2: '+91 44 2664 4000',
  emergency: '044-26264000',
  email: 'info@billrothhospitals.com',
  address: '43, Lakshmi Talkies Road, Shenoy Nagar, Chennai – 600 030',
  social: {
    facebook: 'https://www.facebook.com/BillrothHospital',
    twitter: 'https://x.com/Billrothch',
    youtube: 'https://www.youtube.com/@billrothhospitals',
    instagram: 'https://www.instagram.com/billrothhospitals/',
  },
};

export const navLinks = [
  { label: 'HOME', lines: ['HOME'], path: '/' },
  {
    label: 'ABOUT US',
    lines: ['ABOUT', 'US'],
    path: '/about',
    dropdown: [
      { label: 'About Billroth', path: '/about' },
      { label: "Founder's Vision", path: '/about' },
      { label: 'Leadership & Management', path: '/about' },
      { label: 'Accreditations & Awards', path: '/about' },
    ],
  },
  {
    label: 'OUR SPECIALITIES',
    lines: ['OUR', 'SPECIALITIES'],
    path: '/departments',
    dropdown: [
      { label: 'Cardiology & Cardiac Surgery', path: '/departments/cardiology' },
      { label: 'Neurology & Neuro Surgery', path: '/departments/neurology' },
      { label: 'Orthopedics & Joint Replacement', path: '/departments/orthopedics' },
      { label: 'Medical & Surgical Gastroenterology', path: '/departments/gastroenterology' },
      { label: 'Cosmetic & Plastic Surgery', path: '/departments/cosmetic-surgery' },
      { label: 'Obstetrics & Gynecology', path: '/departments/gynecology' },
      { label: 'Pediatrics & Neonatology', path: '/departments/pediatrics' },
      { label: 'Oncology (Cancer Care)', path: '/departments/oncology' },
    ],
  },
  { label: 'OUR DOCTORS', lines: ['OUR', 'DOCTORS'], path: '/doctors' },
  {
    label: 'PATIENTS & VISITORS',
    lines: ['PATIENTS &', 'VISITORS'],
    path: '/health-packages',
    dropdown: [
      { label: 'Master Health Checkups', path: '/health-packages' },
      { label: 'Insurance & TPA Services', path: '/health-packages' },
      { label: 'Admission & Discharge Guide', path: '/health-packages' },
      { label: 'Visitor Guidelines', path: '/health-packages' },
    ],
  },
  {
    label: 'FACILITIES & DIAGNOSTICS',
    lines: ['FACILITIES &', 'DIAGNOSTICS'],
    path: '/departments',
    dropdown: [
      { label: '24/7 Emergency & Trauma Care', path: '/departments' },
      { label: 'Advanced Radiology & Imaging', path: '/departments' },
      { label: 'NABL Certified Laboratory', path: '/departments' },
      { label: 'State-of-the-art ICU & CCU', path: '/departments' },
    ],
  },
  {
    label: 'NEWS & EVENTS',
    lines: ['NEWS &', 'EVENTS'],
    path: '/events',
    dropdown: [
      { label: 'Health Blogs & Insights', path: '/blog' },
      { label: 'Medical Conferences & CME', path: '/events' },
      { label: 'Community Health Camps', path: '/events' },
    ],
  },
  { label: 'CONTACT US', lines: ['CONTACT', 'US'], path: '/contact' },
];

export const departments = [
  {
    id: 1,
    name: 'Cardiology',
    slug: 'cardiology',
    icon: '❤️',
    image: 'https://billrothhospitals.com/wp-content/uploads/2023/11/cardiology.gif',
    description: 'Comprehensive cardiac care with state-of-the-art cath labs and electrophysiology.',
  },
  {
    id: 2,
    name: 'Neurology',
    slug: 'neurology',
    icon: '🧠',
    image: 'https://billrothhospitals.com/wp-content/uploads/2023/11/neurology.gif',
    description: 'Advanced neuro-navigation, stroke intervention, and spine surgical expertise.',
  },
  {
    id: 3,
    name: 'Orthopedics',
    slug: 'orthopedics',
    icon: '🦴',
    image: 'https://billrothhospitals.com/wp-content/uploads/2023/11/ortho.gif',
    description: 'Precision robotic joint replacement, complex trauma surgery, and sports medicine.',
  },
  {
    id: 4,
    name: 'Gastroenterology',
    slug: 'gastroenterology',
    icon: '🫀',
    image: 'https://billrothhospitals.com/wp-content/uploads/2023/11/gastro.gif',
    description: 'Comprehensive endoscopic, bariatric, and liver care with advanced therapeutic technology.',
  },
  {
    id: 5,
    name: 'Cosmetic Surgery',
    slug: 'cosmetic-surgery',
    icon: '✨',
    image: 'https://billrothhospitals.com/wp-content/uploads/2023/11/cosmetic.gif',
    description: 'Aesthetic and reconstructive procedures by seasoned plastic surgery specialists.',
  },
  {
    id: 6,
    name: 'Gynecology',
    slug: 'gynecology',
    icon: '🌸',
    image: 'https://billrothhospitals.com/wp-content/uploads/2023/11/gynacology.gif',
    description: 'High-risk maternity care, fertility assistance, and minimally invasive laparoscopic surgery.',
  },
  {
    id: 7,
    name: 'Pediatrics',
    slug: 'pediatrics',
    icon: '👶',
    image: 'https://billrothhospitals.com/wp-content/uploads/2023/11/pediatric.gif',
    description: 'NICU, PICU, and holistic pediatric healthcare by loving, dedicated physicians.',
  },
  {
    id: 8,
    name: 'Oncology',
    slug: 'oncology',
    icon: '🎗️',
    image: 'https://billrothhospitals.com/wp-content/uploads/2023/11/oncology.gif',
    description: 'Multi-disciplinary tumour board, medical, surgical, and preventive cancer therapy.',
  },
];

export const stats = [
  { value: 33, suffix: '+', label: 'Years of Excellence' },
  { value: 300, suffix: 'K+', label: 'Happy Patients Treated' },
  { value: 150, suffix: '+', label: 'Senior Medical Specialists' },
  { value: 350, suffix: '+', label: 'Inpatient Hospital Beds' },
];

export const testimonials = [
  {
    id: 1,
    name: 'Mr. R. Parthasarathy',
    rating: 5,
    content:
      'The cardiac team at Billroth Hospitals saved my father during a midnight emergency. Their swift response, world-class ICU care, and compassionate doctors were truly miraculous.',
  },
  {
    id: 2,
    name: 'Mrs. Jayalakshmi Sundaram',
    rating: 5,
    content:
      'Underwent knee replacement surgery here. I was walking without pain within 3 days. The physiotherapy and nursing staff treated me like family throughout my stay.',
  },
  {
    id: 3,
    name: 'Dr. S. K. Venkatesh',
    rating: 5,
    content:
      'As a doctor myself, I trust Billroth Hospitals for my family. Their diagnostic precision, modern surgical theatres, and transparent protocols are commendable.',
  },
  {
    id: 4,
    name: 'Mr. Vigneshwaran K.',
    rating: 5,
    content:
      'Best multi-specialty hospital in Chennai with affordable, transparent pricing. The gastroenterology team treated my chronic illness with utmost expertise.',
  },
];

export const blogs = [
  {
    id: 1,
    title: 'Recognizing Early Signs of Heart Disease: What You Must Know',
    slug: 'early-signs-heart-disease',
    category: 'Cardiology',
    date: 'February 24, 2025',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Key cardiovascular warning indicators, lifestyle interventions, and when to seek urgent medical attention.',
  },
  {
    id: 2,
    title: 'Precision Robotic Surgery: Transforming Orthopedic Outcomes',
    slug: 'robotic-joint-replacement',
    category: 'Orthopedics',
    date: 'February 18, 2025',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    excerpt: 'How minimally invasive robotic assistance enables faster post-op recovery and sub-millimeter surgical accuracy.',
  },
  {
    id: 3,
    title: 'Gut Health & Immunity: Practical Dietary Guidelines by Specialists',
    slug: 'gut-health-immunity',
    category: 'Gastroenterology',
    date: 'February 10, 2025',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Exploring the vital gut-brain axis, microbiome balance, and nutritional strategies for optimal digestion.',
  },
  {
    id: 4,
    title: 'Essential Preventive Health Screenings for Every Age Group',
    slug: 'preventive-health-screening',
    category: 'Wellness',
    date: 'January 28, 2025',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Why regular master checkups prevent silent illnesses and help maintain peak vitality across all decades of life.',
  },
];

export const healthPackages = [
  {
    id: 1,
    name: 'Basic Health Package',
    price: 1499,
    tests: 28,
    highlight: false,
    description: 'Essential vital screenings for routine wellness checks.',
  },
  {
    id: 2,
    name: 'Master Health Checkup',
    price: 3999,
    tests: 65,
    highlight: true,
    description: 'Comprehensive whole-body checkup with specialist consultation.',
  },
  {
    id: 3,
    name: 'Senior Citizen Wellness',
    price: 4999,
    tests: 72,
    highlight: false,
    description: 'Targeted geriatric screenings including bone density & cardiac profile.',
  },
  {
    id: 4,
    name: 'Executive Cardiac Checkup',
    price: 5999,
    tests: 50,
    highlight: false,
    description: 'Echo, TMT, cardiac enzymes, and senior cardiologist consultation.',
  },
];

export const doctors = [
  {
    id: 1,
    name: 'Dr. Vinoth Kumar',
    department: 'Cardiology',
    designation: 'Senior Interventional Cardiologist',
    experience: 18,
  },
  {
    id: 2,
    name: 'Dr. Priya Shankar',
    department: 'Neurology',
    designation: 'Senior Consultant Neurosurgeon',
    experience: 15,
  },
  {
    id: 3,
    name: 'Dr. Ramesh Babu',
    department: 'Orthopedics',
    designation: 'Chief Joint Replacement Surgeon',
    experience: 22,
  },
  {
    id: 4,
    name: 'Dr. Uma Devi',
    department: 'Gynecology',
    designation: 'Senior Obstetrician & Laparoscopic Surgeon',
    experience: 16,
  },
  {
    id: 5,
    name: 'Dr. S. K. Aravind',
    department: 'Gastroenterology',
    designation: 'Senior Consultant Gastroenterologist',
    experience: 14,
  },
  {
    id: 6,
    name: 'Dr. Meenakshi Sundaram',
    department: 'Pediatrics',
    designation: 'Chief Pediatrician & Neonatologist',
    experience: 19,
  },
  {
    id: 7,
    name: 'Dr. Rajesh Kannan',
    department: 'Oncology',
    designation: 'Senior Surgical Oncologist',
    experience: 17,
  },
  {
    id: 8,
    name: 'Dr. Deepa Natarajan',
    department: 'Cosmetic Surgery',
    designation: 'Senior Plastic & Reconstructive Surgeon',
    experience: 13,
  },
];
