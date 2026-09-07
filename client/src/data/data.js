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
    linkedin: 'https://www.linkedin.com/company/billroth-hospitals',
  },
};

export const navLinks = [
  { label: 'HOME', lines: ['HOME'], path: '/' },
  {
    label: 'ABOUT US',
    lines: ['ABOUT', 'US'],
    path: '/about',
    dropdown: [
      { label: 'Founder', path: '/founder' },
      { label: 'MD & Chairman', path: '/md-chairman' },
      { label: 'Vision & Mission', path: '/vision-mission' },
      { label: 'History', path: '/history' },
      { label: 'Milestone', path: '/milestone' },
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
    path: '/patient-guide',
    dropdown: [
      { label: 'Testimonials', path: '/testimonials' },
      { label: 'Corporates', path: '/corporates' },
      { label: 'International Patients', path: '/international-patients' },
      { label: 'Patient Guide', path: '/patient-guide' },
      { label: "TPA's", path: '/tpas' },
    ],
  },
  {
    label: 'FACILITIES & DIAGNOSTIC SERVICES',
    lines: ['FACILITIES &', 'DIAGNOSTIC SERVICES'],
    path: '/facilities',
    dropdown: [
      {
        label: 'Radiology and Imaging sciences',
        path: '/radiology-imaging',
        subItems: [
          { label: 'TMT', path: '/tmt' },
          { label: 'EEG', path: '/eeg' },
          { label: 'PFT', path: '/pft' },
          { label: 'Mammography', path: '/mammography' },
          { label: 'CT Scan', path: '/ct-scan' },
          { label: 'MRI', path: '/mri' },
          { label: '2D Echo', path: '/2d-echo' },
          { label: 'X-Ray', path: '/x-ray' },
          { label: 'Ultrasound', path: '/ultrasound' },
          { label: 'CT Angiogram', path: '/ct-angiogram' },
        ],
      },
      { label: 'Cath Lab', path: '/cath-lab' },
      { label: 'Blood Transfusion services', path: '/blood-transfusion-services' },
      { label: 'Ambulance', path: '/ambulance' },
      { label: 'Emergency Services&Trauma Care', path: '/emergency-services-trauma-care' },
      { label: 'Physiotherapy', path: '/physiotherapy' },
      { label: 'Lab Facilities', path: '/lab-facilities' },
      { label: 'Dialysis', path: '/dialysis' },
      { label: 'Endoscopy', path: '/endoscopy' },
      { label: 'Intensive Care Units ( ICU & NICU)', path: '/intensive-care-units' },
      { label: 'Colonoscopy', path: '/colonoscopy' },
      { label: 'ECG', path: '/ecg' },
    ],
  },
  {
    label: 'NEWS & EVENTS',
    lines: ['NEWS &', 'EVENTS'],
    path: '/events',
    dropdown: [
      { label: 'Newsletter', path: '/newsletter' },
      { label: 'Events', path: '/events' },
      { label: 'Terms and conditions', path: '/terms-and-conditions' },
    ],
  },
  {
    label: 'CONTACT US',
    lines: ['CONTACT', 'US'],
    path: '/contact',
    dropdown: [
      { label: 'Contact Us', path: '/contact' },
      { label: 'Careers', path: '/careers' },
    ],
  },
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

export const surgicalStats = [
  { value: 33, suffix: '+', label: 'Years of Experience', icon: 'Award', color: 'from-[#0095da] to-[#0077b6]' },
  { value: 410, suffix: 'K+', label: 'Hernia Surgeries', icon: 'ShieldCheck', color: 'from-[#0095da] to-[#8cc63f]' },
  { value: 20100, suffix: '+', label: 'Laparoscopy Surgeries', icon: 'Activity', color: 'from-[#3cb878] to-[#8cc63f]' },
  { value: 1000, suffix: '+', label: 'Reconstructive Surgeries', icon: 'HeartPulse', color: 'from-[#8cc63f] to-[#0095da]' },
];

export const founderData = {
  founder: {
    name: 'Dr. V. Jeganathan',
    honorific: 'Late Dr. V. Jeganathan',
    title: 'Founder of Billroth Hospitals',
    establishedDate: '30th November 1990',
    speciality: 'Surgical Gastroenterologist, LASER & Laparoscopic Surgeon',
    image: 'https://billrothhospitals.com/wp-content/uploads/2023/10/Jeganathan.png',
    bio: [
      'Billroth Hospital was established by late Dr. V. Jeganathan on 30th November 1990. A born leader, he turned several heads by employing cutting-edge medical technologies that make Billroth the most trusted healthcare provider in South India even today. Besides being the Chairman of Billroth hospitals, Dr. V. Jeganathan was one of the leading Surgical Gastroenterologists, LASER and Laparoscopic Surgeons in the country.',
      'He worked hard all his life and believed in uplifting others in the journey of his own growth. He was one of the major contributors to the medical relief efforts for those affected by the 2005 Tsunami. Even today the people of Vijayapuram remember him and have erected a statue in his honour.',
      "His only ambition was to develop a patient-centric approach that is transparent, ethical, respectful and compassionate. A true team builder, Dr. V. Jeganathan has been successful in establishing an organization wherein everyone is willing to walk the extra mile and feel empowered from within to make a positive difference in people's lives. Not only in India, today the name Billroth has defied boundaries and earned a global repute with satisfied patients all across the world."
    ],
    quote: 'Healthcare is not just medical treatment; it is a sacred commitment to uplift human lives with compassion, integrity, and uncompromised excellence.'
  },
  successor: {
    name: 'Dr. Rajesh Jeganathan',
    title: 'Chairman & Managing Director',
    tenure: '2007 – Present',
    leadershipStory: [
      "On May 17th, 2007, when the founder was living his dream of making quality healthcare accessible to the common man, he met his sad end. That is when his son Dr. Rajesh Jeganathan, who was only 26 years old then, had to shoulder the entire responsibility and carry forward his father's dream.",
      'In his able hands, Billroth continued to grow and has now become a name that reads synonymous to expert and most reliable healthcare in the country. Dr. Rajesh introduced the first Dual Source CT Scan in Tamil Nadu. He introduced several other departments and transformed Billroth from Multi-Specialty to Super Specialty Hospital.',
      "The hospital has emerged to be one of the pioneers in RapidArc Treatment for Cancer and NICU with sophisticated modern labor wards. Dr. Rajesh has also been undertaking several philanthropic projects offering free healthcare services for the poor and needy. It is this 'Giver's Gain' policy that has won millions of hearts and made Billroth what it is today."
    ],
    quote: "The organization's success lies in the collective success of every individual and the enduring trust of our patients."
  },
  theodorBillroth: {
    name: 'Dr. Christian Albert Theodor Billroth (1829 – 1894)',
    role: 'The Inspiration Behind the Name',
    description: "The name 'Billroth' was coined from Dr. V. Jeganathan's lifelong inspiration, Dr. Theodor Billroth, the visionary surgeon widely celebrated as the Father of Modern Abdominal Surgery, who pioneered the world's first successful stomach resection (Billroth I & II procedures)."
  },
  historyImage: 'https://billrothhospitals.com/wp-content/uploads/2023/11/history.png'
};

export const coreValues = [
  {
    id: 1,
    title: 'Ethical Healthcare',
    tagline: 'Transparent & Uncompromised Practice',
    description: 'Upholding strict medical ethics, evidence-based treatments, and honest, transparent clinical protocols across all disciplines.',
    icon: 'ShieldCheck',
    color: '#0095da',
    accentGradient: 'from-[#0095da] to-[#0077b6]'
  },
  {
    id: 2,
    title: 'Respect for Individuals',
    tagline: 'Valuing Every Human Dignity',
    description: 'Honoring every patient, family member, physician, nurse, and employee with sincere equality, warmth, and dignity.',
    icon: 'Users',
    color: '#0077b6',
    accentGradient: 'from-[#0077b6] to-[#0095da]'
  },
  {
    id: 3,
    title: 'Compassion',
    tagline: 'Empathy in Every Touch',
    description: 'Providing genuine empathy, attentive emotional support, and wholehearted care to patients in their most vulnerable moments.',
    icon: 'HeartHandshake',
    color: '#3cb878',
    accentGradient: 'from-[#0095da] to-[#8cc63f]'
  },
  {
    id: 4,
    title: 'Commitment to Quality',
    tagline: 'Excellence in Medical Outcomes',
    description: 'Relentless pursuit of clinical precision, advanced surgical technology, continuous medical training, and NABH/NABL standards.',
    icon: 'Sparkles',
    color: '#8cc63f',
    accentGradient: 'from-[#3cb878] to-[#8cc63f]'
  },
  {
    id: 5,
    title: 'Respect Patients',
    tagline: 'Patient-First Philosophy',
    description: 'Putting patient comfort, privacy, informed consent, and holistic recovery at the center of every clinical decision.',
    icon: 'Heart',
    color: '#0095da',
    accentGradient: 'from-[#004b77] to-[#0095da]'
  }
];

export const visionMission = {
  vision: {
    title: 'Our Vision',
    badge: 'Future-Focused Healing',
    statement: 'To be the most trusted, patient-centric super-specialty healthcare institution in South India and globally, providing accessible, compassionate, and world-class tertiary medical care to all sections of society.',
    points: [
      'Accessible tertiary healthcare for every citizen without economic discrimination.',
      'Global benchmark in laparoscopic, gastrointestinal, and oncological surgery.',
      'Pioneering precision robotic surgery and advanced diagnostic technologies.'
    ]
  },
  mission: {
    title: 'Our Mission',
    badge: 'Clinical & Human Excellence',
    statement: 'To provide clinical excellence through cutting-edge medical technologies, renowned specialists, ethical practices, and profound human empathy to heal, comfort, and empower lives.',
    points: [
      'Equip super-specialty departments with world-leading medical infrastructure.',
      'Sustain impactful community health camps and disaster relief initiatives.',
      'Deliver transparent, zero-error, compassionate care with a patient-first ethos.'
    ]
  }
};

export const timelineMilestones = [
  {
    year: '1953',
    date: '19th December 1953',
    category: 'Early Life',
    title: 'Humble Roots in Nerkunam Village',
    description: 'Dr. V. Jeganathan was born on 19th December 1953 in Nerkunam Village to a farmer; he once tied the tails of two cows to prevent them from running away.',
    tag: 'Birth & Childhood',
    icon: 'Home',
    image: 'https://billrothhospitals.com/wp-content/uploads/2023/11/Fonder-Timeline-Website-01.png'
  },
  {
    year: '1978 – 1981',
    date: '1978 – 1981',
    category: 'Education & Leadership',
    title: 'Madras Medical College & Chairman in 1977',
    description: 'Dr. V. Jeganathan completed his schooling in his village. 1978 – Completed MBBS at Madras Medical College where he became Chairman in 1977. 1981 – Pursued Masters in General Surgery.',
    tag: 'Medical Excellence',
    icon: 'GraduationCap',
    image: 'https://billrothhospitals.com/wp-content/uploads/2023/11/Fonder-Timeline-Website-02.png'
  },
  {
    year: '1987 – 1990',
    date: '1987 – 1990',
    category: 'Philanthropy',
    title: 'Free Consultations Across Chennai',
    description: 'Dr. V. Jeganathan returned to India & started giving free consultation in several hospitals between 1987 and 1990.',
    tag: 'Community Service',
    icon: 'Stethoscope',
    image: 'https://billrothhospitals.com/wp-content/uploads/2023/11/Fonder-Timeline-Website-03.png'
  },
  {
    year: '1990',
    date: 'Historic Inspiration',
    category: 'Genesis',
    title: "Origin of the Name 'Billroth'",
    description: "The name 'Billroth' was coined from Dr. V. Jeganathan's inspiration, Dr. Theodor Billroth, the father of modern Abdominal Surgery.",
    tag: 'Historic Inspiration',
    icon: 'BookOpen',
    image: 'https://billrothhospitals.com/wp-content/uploads/2023/11/Fonder-Timeline-Website-04.png'
  },
  {
    year: '1990 & 1996',
    date: 'Nov 30, 1990 & Dec 13, 1996',
    category: 'Hospital Genesis',
    title: "Inauguration of 'A' & 'B' Blocks",
    description: "November 30th 1990 – 'A' block was inaugurated, 13th December 1996 – 'B' Block was inaugurated and the outpatient consultation was free everywhere.",
    tag: 'Hospital Foundation',
    icon: 'Building2',
    image: 'https://billrothhospitals.com/wp-content/uploads/2023/11/Fonder-Timeline-Website-05.png'
  },
  {
    year: '1998',
    date: 'Surgical Milestones',
    category: 'Clinical Mastery',
    title: 'Pioneer in Laparoscopic & GI Surgeries',
    description: 'Billroth Hospitals established a name for itself in Basic and advanced laparoscopic surgeries / surgical gastroenterology.',
    tag: 'Pioneering Surgery',
    icon: 'Activity',
    image: 'https://billrothhospitals.com/wp-content/uploads/2023/11/Fonder-Timeline-Website-06.png'
  },
  {
    year: '2003 & 2007',
    date: '2003 – 2007',
    category: 'Expansion',
    title: 'Acquisition of Kaliappa Hospital & S Block',
    description: '2003 – Billroth Hospitals acquired a 100 bedded Chennai Kaliappa Hospital. Shenoy Nagar branch saw the addition of the S Block in 2007.',
    tag: 'Campus Expansion',
    icon: 'Building',
    image: 'https://billrothhospitals.com/wp-content/uploads/2023/11/Fonder-Timeline-Website-07.png'
  },
  {
    year: '2005',
    date: '2005 Disaster Relief',
    category: 'Disaster Relief',
    title: '2005 Tsunami Relief & Statue in Vijayapuram',
    description: 'Dr. V. Jeganathan conducted free medical camps for the poor, provided medical relief for the Tsunami hit victims in 2005, People of Vijayapuram have even erected a statue in his honour.',
    tag: 'Heroic Humanitarian',
    icon: 'HeartHandshake',
    image: 'https://billrothhospitals.com/wp-content/uploads/2023/11/Fonder-Timeline-Website-09.png'
  },
  {
    year: 'High End Tech',
    date: 'Linear Accelerator & CT',
    category: 'New Era',
    title: 'Linear Accelerator, Dual Source CT & Rapid Arc',
    description: 'Dr. V. Jeganathan introduced Linear Accelerator to combat cancer. Later, his son introduced the Rapid Arc and the Dual Source CT Scanner for the first time in Tamil Nadu.',
    tag: 'Technological Renaissance',
    icon: 'Zap',
    image: 'https://billrothhospitals.com/wp-content/uploads/2023/11/Fonder-Timeline-Website-08.png'
  }
];

export const hospitalHeritage = [
  {
    title: 'Shenoy Nagar Super-Specialty Campus',
    badge: 'Flagship Tertiary Care Facility',
    address: '43, Lakshmi Talkies Road, Shenoy Nagar, Chennai – 600 030',
    capacity: '350+ Beds & 8 Modular OTs',
    description: 'The monumental flagship center housing comprehensive cardiology, neurology, oncology, surgical gastroenterology, and emergency trauma facilities.',
    highlights: [
      '24/7 Emergency & Level 1 Trauma Care',
      'Tamil Nadu’s First Dual Source CT & RapidArc Suite',
      'Advanced High-Energy Linear Accelerator for Oncology',
      'Comprehensive NICU & PICU with Modern Labor Ward'
    ],
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'RA Puram Multi-Specialty Campus',
    badge: 'South Chennai Center of Excellence',
    address: '52, 2nd Main Road, RA Puram, Chennai – 600 028',
    capacity: '100+ Beds & Dedicated Daycare Suites',
    description: 'Acquired in 2003 as Chennai Kaliappa Hospital, this center provides premier orthopedics, women & childcare, master health checkups, and outpatient specialty clinics.',
    highlights: [
      'Heritage Kaliappa Multi-Specialty Center',
      'State-of-the-Art Joint Replacement & Arthroscopy',
      'Comprehensive Obstetric & Gynecological Care',
      'Master Health Checkups & Advanced Diagnostics'
    ],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80'
  }
];

export const founderMilestones = timelineMilestones;

