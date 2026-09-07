// Structured clinical data for all Billroth Hospital Facilities and Diagnostic Services
export const facilitiesData = {
  'cath-lab': {
    slug: 'cath-lab',
    name: 'Cath Lab',
    tagline: 'For A 360 Degree View Of Your Heart',
    badge: 'Heart Revive Centre • Interventional Cardiology',
    heroImage: '/facilities/cath-lab.jpg',
    octImage: '/cath-lab-oct-bg.jpg',
    overview:
      'A catheterization laboratory or CATH lab is an examination room in a hospital with diagnostic imaging equipment used to visualize the arteries of the heart and the chambers of the heart and treat any stenosis or abnormality found.',
    detailedDescription:
      'The Billroth Hospital’s Heart Revive Centre has a digital Cath Lab with innovative OCT (Optical Coherence Tomography) guidance systems, which are superior to the conventional angiogram. These advanced systems aid both diagnostic and interventional procedures on patients in all age groups.',
    equipment: [
      { name: 'Patient Couch', desc: 'Ergonomic radiolucent carbon-fiber table with motorized multi-axis positioning.' },
      { name: 'Image Intensifier & Flat Panel Detector', desc: 'Floor/ceiling-mounted C-arm high-frequency X-ray generator for crystal-clear vascular imaging.' },
      { name: 'Multi-Screen Viewing Monitors', desc: 'High-definition live fluoroscopy, hemodynamic waveforms, and 3D roadmap displays.' },
      { name: 'Therapeutic ERCP Compatibility', desc: 'Integrated multi-disciplinary capability for complex endovascular & gastro-vascular interventions.' },
      { name: 'Hemodynamic Recording Workstation', desc: 'Real-time multi-channel ECG, arterial blood pressure, and continuous pulse oximetry monitoring.' },
      { name: 'Automated Injector Pump', desc: 'Precision contrast injection system for high-pressure left ventriculography and aortic root angiography.' },
      { name: 'Digital Fluoroscopy Software', desc: 'Instant playback, quantitative coronary analysis (QCA), and road-mapping software.' },
      { name: 'Diagnostic & Guide Catheters', desc: 'Complete inventory of Judkins, Amplatz, and extra-backup catheters for selective cannulation.' },
      { name: 'Guide Wires & Angioplasty Balloons', desc: 'Hydrophilic steerable wires and cutting, scoring, and non-compliant dilatation balloons.' },
      { name: 'Drug-Eluting & Bare Metal Stents', desc: 'Next-generation bio-absorbable polymer drug-eluting coronary stents (DES).' },
      { name: 'Vascular Sheaths & Closure Devices', desc: 'Radial and femoral access sheaths with Angio-Seal and Perclose vascular closure systems.' },
      { name: 'Emergency Defibrillator & Crash Cart', desc: 'Biphasic cardiac defibrillator with external pacing and emergency ACLS medication.' },
      { name: 'Wireless Headset Communication', desc: 'Noise-cancelling wireless inter-team communication headsets for seamless surgeon-nurse coordination.' },
      { name: 'Recovery Bays & Scrub Area', desc: 'Dedicated pre- and post-procedure telemetry recovery bays with 1:1 cardiac nursing care.' }
    ],
    services: [
      {
        title: 'Coronary Angiography (CAG)',
        desc: 'Gold-standard diagnostic catheterization to visualize coronary blockages with minimal radiation and trans-radial approach.'
      },
      {
        title: 'Coronary Angioplasty & Stenting (PCI)',
        desc: 'Percutaneous coronary intervention using balloon dilation and drug-eluting stents to restore vital heart blood flow.'
      },
      {
        title: 'Primary Angioplasty in Myocardial Infarction (PAMI)',
        desc: '24/7 emergency life-saving clot extraction and stenting within the critical golden hour with <60 min door-to-balloon time.'
      },
      {
        title: 'Optical Coherence Tomography (OCT) & IVUS',
        desc: 'Near-infrared light intracoronary imaging providing 10-micron microscopic resolution of plaque morphology.'
      },
      {
        title: 'Rotational Atherectomy (Rotablation)',
        desc: 'High-speed diamond-tipped burr rotational ablation to pulverize heavily calcified coronary artery lesions.'
      },
      {
        title: 'Pacemaker & ICD Implantation',
        desc: 'Permanent and temporary single/dual-chamber pacemakers, CRT-D, and implantable cardioverter defibrillators.'
      },
      {
        title: 'Congenital Heart Defect Closure',
        desc: 'Device closure of Atrial Septal Defect (ASD), Ventricular Septal Defect (VSD), and Patent Ductus Arteriosus (PDA).'
      },
      {
        title: 'Electrophysiology (EP) & AV Node Ablation',
        desc: 'Diagnostic 3D cardiac mapping and radiofrequency catheter ablation for supraventricular tachycardias (SVT) and AFib.'
      },
      {
        title: 'Valvuloplasty & Structural Heart Interventions',
        desc: 'Balloon mitral valvuloplasty (BMV) and treatment of stenotic heart valves without open surgery.'
      },
      {
        title: 'Left & Right-Sided Heart Pressure Studies',
        desc: 'Comprehensive hemodynamic evaluation for pulmonary hypertension and complex cardiomyopathy.'
      }
    ],
    patientCentric:
      'At Billroth Hospital, our patients are at the heart of everything we do. Our Cath Lab is designed with your comfort and well-being in mind. We prioritize a patient-centric approach, ensuring that you receive the care and attention you deserve throughout your journey with us.',
    contact: {
      emergency: '044-26264000',
      appointments: '7299404040',
      ambulance: '+91 (44) 40274027'
    }
  },

  'radiology-imaging': {
    slug: 'radiology-imaging',
    name: 'Radiology & Imaging Sciences',
    tagline: 'State-of-the-art diagnostic imaging with quality reporting and instant availability',
    badge: 'Advanced Diagnostic Sciences',
    heroImage: '/facilities/radiology-imaging.jpg',
    overview:
      'The Radiology and Imaging Institute provides state-of-the-art imaging services with quality reporting and instant availability. In order to deliver the most efficient and precise diagnostic services, Billroth Super Speciality Hospital has put in place the latest and cutting-edge technology and infrastructure.',
    detailedDescription:
      'A complete cardiac CT scan can be performed in less than five seconds. The MRI reduces scan time by half while providing far greater accuracy. The Institute has installed state-of-the-art technology like South Asia’s First Signa Artist MRI Wide Bore (70 cm) with Advanced Functional Imaging; South Asia’s First Revolution Frontier CT 256 Slice with Dual Energy & Spectral Imaging; CT Coronary Angiography with Plaque Characterisation; Advanced 3D / 4D Ultrasound Doppler with Elastography & Fusion Imaging; Digital Mammography; Interventional Radiology; DEXA Bone Densitometry; Digital Radiography and Digital Cine Fluoroscopy.',
    services: [
      { title: 'Wide Bore 3T / 1.5T MRI', desc: 'Ultra-fast neuro, spine, cardiac, and musculoskeletal scans with 70cm wide patient bore.' },
      { title: 'Revolution 256-Slice CT Scanner', desc: 'Cardiac CT in under 5 seconds with spectral imaging and ultra-low radiation dose.' },
      { title: 'Interventional Radiology', desc: 'Minimally invasive vascular and non-vascular image-guided catheter therapies.' },
      { title: '3D/4D Ultrasound & Color Doppler', desc: 'High-resolution fetal anomaly detection, elastography, and arterial/venous flow assessments.' },
      { title: 'Digital Mammography & Stereotactic Biopsy', desc: 'Zero-stress breast screening with high-resolution 3D tomosynthesis.' }
    ]
  },

  'tmt': {
    heroImage: '/facilities/tmt.jpg',
    image: '/facilities/tmt.jpg',
    slug: 'tmt',
    name: 'TMT (Treadmill Test)',
    tagline: 'Stress Electrocardiography for Early Cardiac Artery Disease Detection',
    badge: 'Non-Invasive Cardiology',
    overview:
      'A treadmill test is a form of exercise test method where a stress test is performed while the patient is exercising on a treadmill machine during the course of an electrocardiogram at Billroth Hospitals.',
    detailedDescription:
      'The main purpose of the test method is majorly to compare blood circulation in the heart when the patient is resting and when under optimum physical pressure in the presence of cardiologists and technologists. A TMT is performed to identify a congenital heart problem like CAD (coronary artery disease).\n\nIn this test patient is made to walk on a treadmill and electrical activity of the heart is measured with an ECG, and blood pressure recordings are taken every few minutes. As per a standard protocol patient is made to walk till the target heart rate is reached, but if the patient develops chest discomfort or ECG changes the test is terminated.',
    indications: [
      'Evaluate for coronary artery disease (CAD)',
      'Evaluate worsening angina or exertional chest heaviness',
      'Identify cardiac rhythm arrhythmias provoked by exercise',
      'Assess functional capacity post-infarction or bypass surgery',
      'The test is usually positive when coronary stenosis exceeds 70%.'
    ]
  },

  'eeg': {
    heroImage: '/facilities/eeg.jpg',
    image: '/facilities/eeg.jpg',
    slug: 'eeg',
    name: 'EEG (Electroencephalogram)',
    tagline: 'Precision Brain Electrical Wave Recording & Neuro-Diagnostics',
    badge: 'Neuro-Diagnostic Suite',
    overview:
      'Electroencephalogram (EEG) is a test that measures and records the electrical activity of your brain. Special sensors (electrodes) are attached to your head and hooked by wires to a computer.',
    detailedDescription:
      'The computer records your brain’s electrical activity on the screen or paper as wavy lines. Certain conditions, such as seizures, can be seen by the changes in the normal pattern of the brain’s electrical activity. An EEG is read by a senior neurologist specially trained to diagnose disorders affecting the central nervous system.',
    indications: [
      'Diagnose epilepsy and categorize exact seizure types',
      'Evaluate unexplained loss of consciousness, syncope, or dementia',
      'Study sleep disorders, narcolepsy, and parasomnias',
      'Intraoperative brain monitoring during neurosurgical anesthesia',
      'Prognostic recovery assessment after metabolic coma or encephalopathy'
    ]
  },

  'pft': {
    heroImage: '/facilities/pft.jpg',
    image: '/facilities/pft.jpg',
    slug: 'pft',
    name: 'PFT (Pulmonary Function Tests)',
    tagline: 'Comprehensive Lung Volume & Respiratory Diffusion Capacity Analysis',
    badge: 'Pulmonology Diagnostics',
    overview:
      'Pulmonary Function Tests are a broad range of tests that measure how well the lungs take in and exhale air and how efficiently they transfer oxygen into the blood.',
    detailedDescription:
      'Spirometry measures how well the lungs exhale. The information gathered during this test is useful in diagnosing certain types of lung disorders but is most useful when assessing for obstructive lung diseases (especially asthma and chronic obstructive pulmonary disease, COPD).\n\nLung volume measurement detects restrictive lung diseases (interstitial lung disease, chest wall deformities). Testing diffusion capacity (DLCO) estimates how efficiently gas transfers from alveoli into the capillary bloodstream.',
    indications: [
      'Diagnosis and grading of Asthma, COPD, and Bronchiectasis',
      'Assessment of Interstitial Lung Disease (ILD) & Pulmonary Fibrosis',
      'Pre-operative pulmonary risk clearance prior to major surgeries',
      'Occupational lung hazard screening and post-COVID lung monitoring'
    ]
  },

  'mammography': {
    heroImage: '/facilities/mammography.jpg',
    image: '/facilities/mammography.jpg',
    slug: 'mammography',
    name: 'Digital Mammography',
    tagline: 'Digital Mammography Suite – Zero Stress Breast Cancer Screening',
    badge: 'Women’s Health & Breast Care',
    overview:
      'Screening through mammography is the best way to stay safe when it comes to breast cancer. At Billroth Hospitals, we offer a dedicated Zero Stress Zone handled by an all-women clinical team.',
    detailedDescription:
      'From the moment you enter the Suite, you are taken care of by an all-women team. The state-of-the-art 3D Digital Mammography system auto-positions within seconds with ergonomically designed paddles for minimal discomfort. It senses breast density, customizes the low-dose radiation, and delivers crystal-clear 3D tomosynthesis images within 40 seconds directly to PACS.',
    indications: [
      'Routine annual screening for women above 40 years of age',
      'Early detection of non-palpable microcalcifications and lesions',
      'Evaluation of palpable lumps, localized pain, or nipple discharge',
      'High-resolution stereotactic localization for precision core needle biopsy'
    ]
  },

  'ct-scan': {
    heroImage: '/facilities/ct-scan.jpg',
    image: '/facilities/ct-scan.jpg',
    slug: 'ct-scan',
    name: 'CT Scan (Computed Tomography)',
    tagline: 'Ultra-High-Speed 256-Slice & 64-Slice Dual Source CT Imaging',
    badge: 'Advanced Cross-Sectional Imaging',
    overview:
      'Computed Tomography (CT) scan is a powerful X-ray procedure that produces detailed cross-sectional pictures, or slices, of the bones, muscles, blood vessels, and internal organs.',
    detailedDescription:
      'Utilizing Dual Source CT technology with 2 X-ray tubes and detectors, our scanner achieves an ultra-rapid temporal resolution of 83 ms. Whole body trauma scans are completed in seconds, and heart motion is frozen without requiring high-dose beta-blockers.',
    indications: [
      'Polytrauma, intracranial hemorrhage, and acute stroke intervention',
      'Cardiac CT Coronary Angiography with plaque characterization',
      'High-resolution chest CT (HRCT) for pulmonary and bronchial disorders',
      'Abdominal, pelvic, oncological staging, and CT-guided biopsies'
    ]
  },

  'mri': {
    heroImage: '/facilities/mri.jpg',
    image: '/facilities/mri.jpg',
    slug: 'mri',
    name: 'MRI (Magnetic Resonance Imaging)',
    tagline: 'Wide Bore 70cm 3.0T / 1.5T Advanced Functional MRI Suite',
    badge: 'High-Field Magnetic Resonance',
    overview:
      'An MRI scan uses powerful magnetic fields and radio waves to create microscopic-level detailed images of internal organs, brain, spine, and musculoskeletal soft tissues without ionizing radiation.',
    detailedDescription:
      'Billroth Hospital features state-of-the-art MRI enabling whole-body imaging, including spectroscopy, diffusion tensor tractography (DTI), MR angiography, dedicated breast MRI, cardiac MRI, and cartilage mapping in joints.',
    indications: [
      'Neuro-imaging for acute ischemic stroke, brain tumors, and epilepsy',
      'Spine imaging for disc herniation, spinal stenosis, and cord lesions',
      'Orthopedic joint imaging (ACL/meniscus tears, rotator cuff, cartilage)',
      'Multiparametric prostate MRI and contrast-enhanced MR Angiography'
    ]
  },

  '2d-echo': {
    heroImage: '/facilities/2d-echo.jpg',
    image: '/facilities/2d-echo.jpg',
    slug: '2d-echo',
    name: '2D Echocardiography',
    tagline: 'Real-Time Ultrasound Visualization of Cardiac Muscle & Valvular Function',
    badge: 'Non-Invasive Cardiac Imaging',
    overview:
      'A 2D echocardiogram is a non-invasive diagnostic ultrasound test that provides clear real-time images of heart chambers, valves, ejection fraction, and major cardiac blood vessels.',
    detailedDescription:
      'The 2D echo view provides real-time motion analysis of heart walls. It evaluates ventricular ejection fraction, detects valvular stenosis/regurgitation, identifies pericardial fluid accumulation, and evaluates congenital anomalies.',
    indications: [
      'Evaluation of Heart Failure and Left Ventricular Ejection Fraction (LVEF)',
      'Valvular heart diseases (Mitral/Aortic Stenosis & Regurgitation)',
      'Detection of intracardiac clots, vegetation, or pericardial effusion',
      'Screening for hypertensive cardiomyopathy and ischemic heart disease'
    ]
  },

  'x-ray': {
    heroImage: '/facilities/x-ray.jpg',
    image: '/facilities/x-ray.jpg',
    slug: 'x-ray',
    name: 'Digital X-Ray & Fluoroscopy',
    tagline: 'High-Definition Digital Radiography with Low-Dose Radiation',
    badge: 'Digital Radiography Suite',
    overview:
      'Digital X-ray is the foundational diagnostic modality used to detect bone fractures, chest infections, cardiomegaly, bowel obstruction, and renal calculi with instant digital image processing.',
    detailedDescription:
      'Our digital radiography suites provide ultra-sharp image clarity with minimal radiation exposure. Contrast fluoroscopy studies including Barium swallow, intravenous urogram (IVU), and hysterosalpingogram (HSG) are routinely performed.',
    indications: [
      'Evaluation of bone fractures, dislocations, and joint arthritis',
      'Chest X-rays for pneumonia, tuberculosis, and lung infections',
      'Abdominal erect and supine films for acute obstruction or calculi',
      'Specialized contrast examinations (Barium, IVU, MCU, HSG)'
    ]
  },

  'ultrasound': {
    heroImage: '/facilities/ultrasound.jpg',
    image: '/facilities/ultrasound.jpg',
    slug: 'ultrasound',
    name: 'Ultrasound & 4D USG',
    tagline: 'High-Resolution 3D/4D Sonography, Doppler & Shear-Wave Elastography',
    badge: 'Diagnostic Sonography',
    overview:
      'Billroth Hospitals offers high-end ultrasound machines with elastography, 3D/4D obstetric imaging, and vascular color Doppler for accurate non-invasive diagnosis.',
    detailedDescription:
      'Equipped with specialized high-frequency probes, our ultrasound suites deliver exceptional image clarity for abdominal organs, small parts (thyroid, breast, scrotum), musculo-skeletal joints, and 4D live-action fetal visualization.',
    indications: [
      'Comprehensive abdominal and pelvic ultrasound for liver, gallstones, kidneys',
      'Obstetric anomaly scans, Nuchal Translucency (NT), and 4D fetal growth scans',
      'Peripheral arterial and venous color Doppler for deep vein thrombosis (DVT)',
      'Ultrasound-guided diagnostic fine-needle aspirations (FNAC) and cyst drainage'
    ]
  },

  'ct-angiogram': {
    heroImage: '/facilities/ct-angiogram.jpg',
    image: '/facilities/ct-angiogram.jpg',
    slug: 'ct-angiogram',
    name: 'CT Angiogram',
    tagline: 'Non-Invasive 3D Vascular Imaging for Brain, Cardiac & Peripheral Arteries',
    badge: 'Advanced Vascular Diagnostics',
    overview:
      'CT angiography is a non-invasive medical test that combines high-speed CT scanning with IV contrast material to generate 3D reconstructions of blood vessels throughout the body.',
    detailedDescription:
      'The procedure is painless, non-invasive, and requires zero hospital recovery time. It accurately maps vascular aneurysms, atherosclerosis, artery narrowing, pulmonary embolism, and vascular malformations.',
    indications: [
      'Detection of coronary artery narrowing and calcified plaque without catheterization',
      'Cerebral angiography for intracranial aneurysms and AVMs',
      'Pulmonary CT angiography for suspected pulmonary thromboembolism',
      'Renal artery stenosis in severe hypertension and peripheral vascular disease'
    ]
  },

  'blood-transfusion-services': {
    heroImage: '/facilities/blood-transfusion.jpg',
    image: '/facilities/blood-transfusion.jpg',
    slug: 'blood-transfusion-services',
    name: 'Blood Transfusion Services',
    tagline: 'Lifesaving Care, Every Drop Matters – 24/7 State-of-the-Art Blood Centre',
    badge: 'NABH / NABL Accredited Blood Centre',
    overview:
      'Billroth’s Blood Bank is a state-of-the-art, 24-hour facility handling over 30,000 units annually with component separation, aphaeresis, and stringent infection screening.',
    detailedDescription:
      'Our blood center operates 24/7 to provide Whole Blood, Packed Red Blood Cells (PRBC), Platelet Concentrates, Single Donor Platelets (SDP via Aphaeresis), Fresh Frozen Plasma (FFP), and Cryoprecipitate. Stringent NAT and chemiluminescence screening guarantee total safety.',
    services: [
      { title: 'Component Separation & Aphaeresis', desc: 'Automated extraction of platelets, plasma, and red blood cells.' },
      { title: 'Transfusion Safety Screening', desc: 'Chemiluminescence & nucleic acid testing for HIV, Hepatitis B/C, and Malaria.' },
      { title: 'Leuco-Depleted & Irradiated Blood', desc: 'Specialized products for immunocompromised and pediatric patients.' },
      { title: '24/7 Emergency Blood Bank Supply', desc: 'Immediate cross-matching and delivery for surgeries and trauma.' }
    ]
  },

  'ambulance': {
    heroImage: '/facilities/ambulance.jpg',
    image: '/facilities/ambulance.jpg',
    slug: 'ambulance',
    name: '24/7 Ambulance Services',
    tagline: 'Advanced Cardiac Life Support (ACLS) Fleet on 24/7 Active Standby',
    badge: 'Emergency Medical Transport',
    overview:
      'We have three fully equipped ambulances available to transport patients to and from the hospital. In medical emergencies, contact us directly on +91 (44) 40274027.',
    detailedDescription:
      'Our ambulance fleet is manned by certified Emergency Medical Technicians (EMTs) qualified in ACLS, BLS, and ATLS. Vehicles are equipped with transport ventilators, cardiac monitors, defibrillators, oxygen, and emergency resuscitation drugs to begin critical treatment on-road.',
    services: [
      { title: '3 Fully Equipped ACLS Ambulances', desc: 'Mobile intensive care units capable of managing ventilated and cardiac patients.' },
      { title: 'Certified Paramedics & EMTs', desc: 'Experienced clinical team providing uninterrupted en-route resuscitation.' },
      { title: 'GPS Tracking & Green Corridor', desc: 'Fastest dispatch across Chennai metro and suburban highways.' }
    ]
  },

  'emergency-services-trauma-care': {
    heroImage: '/facilities/emergency.jpg',
    image: '/facilities/emergency.jpg',
    slug: 'emergency-services-trauma-care',
    name: 'Emergency Services & Trauma Care',
    tagline: 'Saving Lives Within The Golden Hour – 24/7 Level-1 Resuscitation Bay',
    badge: 'Round-the-Clock Critical Care',
    overview:
      'Our emergency department works around the clock with dedicated trauma physicians, emergency room intensivists, surgical residents, and nurses ready to respond to any crisis.',
    detailedDescription:
      'Equipped with a 4-bed resuscitation bay, 12-bed observation ward, minor operation theatre, bedside ultrasound, and direct links to the Cath Lab and Surgical OTs. Emergency helpline: +91 (44) 40274027.',
    services: [
      { title: 'Level-1 Polytrauma & Accident Center', desc: 'Multi-disciplinary trauma surgeons and orthopedists on 24/7 standby.' },
      { title: 'Code STEMI & Stroke Emergency', desc: 'Rapid triage for acute heart attack and stroke with rapid thrombolysis.' },
      { title: 'Pediatric & Toxicological Emergencies', desc: 'Specialized emergency care for poisoning, snakebites, and pediatric trauma.' }
    ]
  },

  'physiotherapy': {
    heroImage: '/facilities/physiotherapy.jpg',
    image: '/facilities/physiotherapy.jpg',
    slug: 'physiotherapy',
    name: 'Physiotherapy & Rehabilitation',
    tagline: 'Evidence-Based Physical Therapy for Restoring Mobility and Strength',
    badge: 'Rehabilitation Medicine',
    overview:
      'Billroth Hospital’s Physiotherapy and Rehabilitation Centre offers personalized post-operative rehabilitation, sports injury recovery, stroke neuro-rehabilitation, and pain management.',
    detailedDescription:
      'Our expert physical therapists utilize advanced electrotherapy, ultrasound therapy, interferential therapy (IFT), laser therapy, spinal traction, and manual therapy to accelerate musculoskeletal and neurological recovery.',
    services: [
      { title: 'Orthopedic & Joint Rehab', desc: 'Post-knee and hip replacement mobilization and ligament rehab.' },
      { title: 'Neuro-Rehabilitation', desc: 'Stroke paralysis recovery, gait training, and Parkinson’s therapy.' },
      { title: 'Cardio-Pulmonary Rehab', desc: 'Chest physiotherapy, incentive spirometry, and post-CABG conditioning.' }
    ]
  },

  'lab-facilities': {
    heroImage: '/facilities/lab-facilities.jpg',
    image: '/facilities/lab-facilities.jpg',
    slug: 'lab-facilities',
    name: 'Lab Facilities & NABL Diagnostics',
    tagline: 'Compassionate Care, Advanced Medicine, Close to Home – 24/7 Clinical Lab',
    badge: 'NABL Certified Central Laboratory',
    overview:
      'With over 50,000 happy patients annually, Billroth Central Laboratory offers 24/7 fully automated testing across Biochemistry, Hematology, Microbiology, Serology, and Histopathology.',
    detailedDescription:
      'Equipped with state-of-the-art automated analysers, Bactec blood culture systems, and enhanced Chemiluminescence Immunoassay (CLIA), we ensure rapid turnaround and stringent external quality control.',
    services: [
      { title: 'Clinical Biochemistry & Endocrinology', desc: 'Automated immunoassay analyzers for hormones, tumor markers, and cardiac enzymes.' },
      { title: 'Hematology & Coagulation', desc: 'Complete blood counts, peripheral smears, hemoglobin electrophoresis, and D-Dimer.' },
      { title: 'Microbiology & Infectious Diseases', desc: 'Automated Bactec blood cultures, mycology, TB PCR, and antibiotic sensitivity.' },
      { title: 'Histopathology & Cytology', desc: 'Precision biopsy reporting, frozen sections, and immunohistochemistry.' }
    ]
  },

  'dialysis': {
    heroImage: '/facilities/dialysis.jpg',
    image: '/facilities/dialysis.jpg',
    slug: 'dialysis',
    name: '24-Hour Dialysis Unit',
    tagline: 'Advanced Hemodialysis & Peritoneal Dialysis with Ultra-Pure RO Water',
    badge: 'Renal Replacement Therapy',
    overview:
      'Our 24-Hour Dialysis Unit features state-of-the-art Fresenius machines, RO water systems meeting AAMI standards, and dedicated machines for Hepatitis patients.',
    detailedDescription:
      'We provide acute hemodialysis, chronic maintenance hemodialysis, and bedside continuous renal replacement therapy (CRRT) in ICUs for critically ill kidney patients under senior nephrologist supervision.',
    services: [
      { title: 'Round-the-Clock Hemodialysis', desc: 'Comfortable motorized recliner stations with individual monitoring.' },
      { title: 'Segregated Hepatitis Suites', desc: 'Strict infection control with dedicated machines for HBsAg and HCV positive patients.' },
      { title: 'Bedside ICU Dialysis (SLED & CRRT)', desc: 'Gentle renal replacement for hemodynamically unstable ICU patients.' }
    ]
  },

  'endoscopy': {
    heroImage: '/facilities/endoscopy.jpg',
    image: '/facilities/endoscopy.jpg',
    slug: 'endoscopy',
    name: 'Endoscopy & Advanced GI Interventions',
    tagline: 'Minimally Invasive Video Endoscopy for Digestive and Biliary Disorders',
    badge: 'Gastroenterology Interventional Suite',
    overview:
      'Endoscopy is a minimally invasive diagnostic and therapeutic procedure used to visualize interior surfaces of the GI tract, obtain biopsies, and perform life-saving interventions.',
    detailedDescription:
      'Our advanced endoscopy suite provides Upper GI Endoscopy (OGD), Colonoscopy, Endoscopic Retrograde Cholangiopancreatography (ERCP), Endoscopic Ultrasound (EUS), and polypectomy under conscious sedation with zero pain.',
    services: [
      { title: 'Upper GI Endoscopy (Gastroscopy)', desc: 'Diagnosis and endoscopic treatment of ulcers, bleeding, reflux, and tumors.' },
      { title: 'Therapeutic ERCP', desc: 'Removal of bile duct stones, biliary stenting, and jaundice relief.' },
      { title: 'Endoscopic Hemostasis', desc: 'Band ligation of esophageal varices and hemoclip application for acute GI bleeding.' }
    ]
  },

  'intensive-care-units': {
    heroImage: '/facilities/icu-nicu.jpg',
    image: '/facilities/icu-nicu.jpg',
    slug: 'intensive-care-units',
    name: 'Intensive Care Units (ICU & NICU)',
    tagline: 'Multi-Disciplinary Critical Care Backbone Led by Senior Intensivists 24/7',
    badge: 'Level-3 Tertiary Critical Care',
    overview:
      'Our Critical Care Units are the backbone of all medical and surgical procedures, operating 24 hours with dedicated intensivists, nurse practitioners, HEPA filtration, and advanced telemetry.',
    detailedDescription:
      'The facility is structured into 4 dedicated units: Critical Care Unit I (Isolation & Specialized Care), Unit II (Level-1 Invasive Ventilation & Telemetry), Unit III (Step-Down & Non-Invasive NIV Care), and Unit IV (Post-Anesthesia Care & Recovery).',
    services: [
      { title: '1:1 Dedicated Nursing Care', desc: 'Individualized bedside clinical monitoring for unstable critically ill patients.' },
      { title: 'Advanced Mechanical Ventilation', desc: 'High-end invasive & non-invasive ventilators with arterial blood gas monitoring.' },
      { title: 'Neonatal Intensive Care Unit (NICU)', desc: 'Tertiary care for preterm infants with warmers, phototherapy, and neonatal ventilators.' }
    ]
  },

  'colonoscopy': {
    heroImage: '/facilities/colonoscopy.jpg',
    image: '/facilities/colonoscopy.jpg',
    slug: 'colonoscopy',
    name: 'Colonoscopy',
    tagline: 'Potentially Life-Saving Screening & Therapeutic Colorectal Examination',
    badge: 'Colorectal Diagnostic Center',
    overview:
      'Colonoscopy is a procedure used to examine the colon and rectum with a slim, flexible, high-definition lighted tube called a colonoscope to screen for and prevent colorectal cancer.',
    detailedDescription:
      'Colonoscopy provides your doctor a magnified, crystal-clear view of the large intestine from rectum to cecum. It enables instant removal of pre-cancerous polyps (polypectomy), stricture dilatation, colonic stenting, and hemorrhoidal banding under comfortable sedation.',
    services: [
      { title: 'Colorectal Cancer Screening', desc: 'Early detection and removal of benign and adenomatous polyps.' },
      { title: 'Endoscopic Polypectomy', desc: 'Painless snare removal of polyps to prevent malignant transformation.' },
      { title: 'Colonic Stricture Dilatation & Stenting', desc: 'Relief of large bowel obstructions using expanding metallic stents.' }
    ]
  },

  'ecg': {
    heroImage: '/facilities/ecg.jpg',
    image: '/facilities/ecg.jpg',
    slug: 'ecg',
    name: 'ECG (Electrocardiography)',
    tagline: '12-Lead Digital Electrocardiogram for Instant Cardiac Rhythm Analysis',
    badge: 'Primary Cardiac Diagnostics',
    overview:
      'An ECG is a fundamental test that measures the electrical activity of your heart, recording wave tracings on paper to detect arrhythmias, heart attacks, and heart enlargement.',
    detailedDescription:
      'Our 12-lead digital ECG machines provide instant automated computerized interpretation and cardiologist sign-off. It is essential for evaluating chest pain, palpitations, dizziness, and pre-operative cardiac fitness.',
    services: [
      { title: 'Emergency 12-Lead ECG', desc: 'Immediate detection of acute myocardial infarction and STEMI alerts.' },
      { title: 'Arrhythmia & Rhythm Analysis', desc: 'Identification of atrial fibrillation, heart blocks, and ectopic beats.' },
      { title: 'Pacemaker & Drug Monitoring', desc: 'Verification of pacemaker function and medication effects on cardiac conduction.' }
    ]
  }
};
