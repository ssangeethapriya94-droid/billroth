// Official Billroth Hospitals Academics & Medical Education Data
// Sourced from https://billrothhospitals.com/masters-in-emergency-medicine/

export const memCourseDetails = {
  title: 'Masters in Emergency Medicine (MEM)',
  shortTitle: 'MEM (Emergency Medicine)',
  degree: 'Postgraduate 3-Year Residency Program',
  awardedBy: 'Billroth Hospitals in association with SEMI (Society for Emergency Medicine of India)',
  since: '2018',
  duration: '3 Years (Full-Time Clinical Residency)',
  location: 'Billroth Hospitals, Shenoy Nagar, Chennai (with RA Puram Trauma Center exposure)',
  department: 'Department of Emergency Medicine & Critical Trauma Care',
  eligibility:
    'Candidates must have completed their MBBS degree from an institution recognized by the National Medical Commission (NMC / erstwhile MCI), India, along with a completed 1-year compulsory rotatory internship.',
  email: 'academics@billrothhospitals.com',
  phone1: '044-42921777',
  phone2: '044-26641777',
  helpline: '+91 44 2664 3000',
  address: '43, Lakshmi Talkies Road, Shenoy Nagar, Chennai – 600 030',
  overview:
    'The Masters in Emergency Medicine (MEM) at Billroth Hospitals is a rigorous 3-year postgraduate clinical residency designed to train doctors in the rapid diagnosis, resuscitation, and definitive management of acute life-threatening medical and surgical emergencies. Offered in association with SEMI since 2018, this program equips residents with international standard emergency response capabilities.',
  edCapacity: '16-Bedded Level-1 Tertiary Emergency Center',
  keyHighlights: [
    {
      title: 'SEMI National Accreditation',
      desc: 'Society for Emergency Medicine of India is the oldest, premier national organization and a full member of the International Federation for Emergency Medicine (IFEM).',
    },
    {
      title: '16-Bedded Acute Care ED',
      desc: 'Comprehensive infrastructure handling poly-trauma, road traffic accidents, acute coronary syndromes, toxicology, burns, and pediatric resuscitations.',
    },
    {
      title: 'Hyper-Acute Thrombolysis Hub',
      desc: 'Dedicated acute code teams for rapid door-to-needle thrombolysis in Acute Myocardial Infarction (STEMI) and Acute Ischemic Stroke.',
    },
    {
      title: 'Point-of-Care Diagnostics (POCT)',
      desc: 'Bedside Arterial Blood Gas (ABG), 12-Lead ECG, Point-of-Care Ultrasound (POCUS/FAST), Echo, and Cardiac Biomarkers (Hs-Trop-T, CPK-MB).',
    },
    {
      title: '24/7 In-House Imaging & Blood Bank',
      desc: 'Round-the-clock bedside digital X-Ray, 128-slice CT scan, MRI, and dedicated attached Blood Bank & Component Separation unit.',
    },
    {
      title: 'Multi-Department Clinical Rotations',
      desc: 'Hands-on intensive postings across Radiology, Modular Operation Theatres (OT), Orthopedic Trauma, Medical ICU, Surgical ICU, and Pediatric Emergencies.',
    },
  ],
  rotations: [
    {
      year: 'Year 1: Foundation & Resuscitation',
      focus: 'Emergency Room Triage, Acute Resuscitation, Basic & Advanced Life Support (ACLS/ATLS), POCT Ultrasound, Minor Surgical Procedures.',
      postings: ['Emergency Department (Triage & Red Zone)', 'Medical Intensive Care Unit (MICU)', 'Radiology & Bedside Ultrasonography', 'Anaesthesiology & Airway Management'],
    },
    {
      year: 'Year 2: Specialized Emergency Care',
      focus: 'Complex Multi-trauma, Pediatric Emergencies, Coronary Interventions, Toxicology Management, Disaster Drills, and Emergency Ultrasound.',
      postings: ['Coronary Care Unit (ICCU) & Cath Lab', 'Surgical ICU (SICU) & Polytrauma', 'Pediatric & Neonatal ICU (PICU/NICU)', 'Orthopedic Trauma & Modular OT'],
    },
    {
      year: 'Year 3: Leadership & Senior Residency',
      focus: 'ED Administrative Leadership, Major Trauma Triage Coordination, Toxicology Research, Inter-hospital Retrieval Transport, Clinical Teaching.',
      postings: ['Senior Emergency Team Lead (ED)', 'Neuro Intensive Care & Stroke Unit', 'Disaster & Mass Casualty Protocol Management', 'Dissertation & Clinical Research Defense'],
    },
  ],
  curriculumTopics: [
    'Advanced Airway Management & Rapid Sequence Intubation (RSI)',
    'Mechanical Ventilation & Non-Invasive Positive Pressure Ventilation (NIV)',
    'Polytrauma Resuscitation & Damage Control Orthopedics',
    'Focused Assessment with Sonography in Trauma (FAST & E-FAST)',
    'Acute Stroke Care, CT Brain Perfusion & Thrombolysis Protocol',
    'Cardiovascular Emergencies, Defibrillation, Cardioversion & Pacing',
    'Toxicology, Poisoning Antidote Protocols & Snakebite Management',
    'Severe Burns Resuscitation, Fluid Dynamics & Wound Stabilization',
    'Sepsis Bundles, Central Venous Line & Arterial Line Placements',
    'Pediatric Advanced Life Support (PALS) & Neonatal Emergencies',
  ],
};

export const allAcademicPrograms = [
  {
    id: 'mem',
    title: 'Masters in Emergency Medicine (MEM)',
    duration: '3 Years',
    type: 'Postgraduate Clinical Residency',
    accreditation: 'SEMI (Society for Emergency Medicine of India)',
    eligibility: 'MBBS with completed 1-year Internship',
    featured: true,
    tag: '⭐ Flagship Program',
    desc: 'Premier emergency residency with hands-on training in high-volume Level-1 trauma, acute stroke, and intensive resuscitation.',
    link: '/masters-in-emergency-medicine',
  },
  {
    id: 'dnb-programs',
    title: 'DNB Postgraduate Training Programs',
    duration: '3 Years',
    type: 'National Board of Examinations (NBE)',
    accreditation: 'National Board of Examinations in Medical Sciences (NBEMS)',
    eligibility: 'MBBS + NEET PG Qualified',
    featured: false,
    tag: 'NBE Certified',
    desc: 'Accredited DNB residency in General Medicine, General Surgery, Orthopaedics, and Anaesthesiology.',
    link: '/academics',
  },
  {
    id: 'nursing-allied',
    title: 'Billroth College of Nursing & Paramedical',
    duration: '2 - 4 Years',
    type: 'Undergraduate & Diploma Courses',
    accreditation: 'Tamil Nadu Dr. M.G.R. Medical University & TNC',
    eligibility: 'Higher Secondary (10+2) with Science / Biology',
    featured: false,
    tag: 'Nursing & Allied Health',
    desc: 'B.Sc Nursing, Post-Basic Nursing, GNM, Dialysis Technology, Operation Theatre & Anaesthesia Tech, and Medical Lab Tech (MLT).',
    link: '/academics',
  },
  {
    id: 'fellowships',
    title: 'Clinical Fellowships & Observerships',
    duration: '1 - 2 Years',
    type: 'Sub-Specialty Advanced Training',
    accreditation: 'Billroth Institute of Medical Sciences',
    eligibility: 'MD / MS / DNB in relevant clinical specialty',
    featured: false,
    tag: 'Post-Doctoral',
    desc: 'Advanced fellowships in Interventional Gastroenterology, Minimal Access Surgery, Critical Care, and Interventional Cardiology.',
    link: '/academics',
  },
];

export const academicsFaqs = [
  {
    q: 'What is the recognition and value of the MEM degree awarded by Billroth Hospitals?',
    a: 'The Masters in Emergency Medicine (MEM) is awarded by Billroth Hospitals in direct academic affiliation with the Society for Emergency Medicine of India (SEMI). SEMI is India’s oldest and foremost emergency medicine organization and a full member of the International Federation for Emergency Medicine (IFEM). MEM graduates are highly sought after by corporate tertiary hospitals, emergency departments, and international healthcare institutions.',
  },
  {
    q: 'What is the selection procedure for the MEM course at Billroth Hospitals?',
    a: 'Admission is based on an entrance assessment followed by a personal clinical interview evaluating the candidate’s clinical acumen, basic resuscitation knowledge, and aptitude for emergency care. Candidates must possess a valid MBBS degree recognized by NMC and valid state medical council registration.',
  },
  {
    q: 'Are residents provided with a monthly stipend during the 3-year MEM residency?',
    a: 'Yes, enrolled MEM postgraduate residents receive a competitive monthly stipend in accordance with institutional academic policy and standard hospital residency norms across all 3 years.',
  },
  {
    q: 'What clinical facilities and diagnostic tools are available to MEM residents in the ED?',
    a: 'Residents have hands-on access to a 16-bedded acute emergency department, dedicated Point-of-Care Testing (ABG, High-sensitivity Troponin-I, D-Dimer), bedside sonography (POCUS/FAST), 12-lead ECG, 24/7 digital X-ray, multi-slice CT, MRI, and an attached emergency blood transfusion bank.',
  },
  {
    q: 'How can I apply for the upcoming MEM academic session?',
    a: 'Interested MBBS candidates can fill out the online admission enquiry form on this portal or email their detailed CV and MBBS credentials directly to academics@billrothhospitals.com. You can also call the academic cell at 044-42921777 / 26641777.',
  },
];
