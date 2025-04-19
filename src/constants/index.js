const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 56, suffix: "+", label: "Satisfied Clients" },
  { value: 83, suffix: "+", label: "Completed Projects" },
  { value: 93, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Chinedu's mobile innovation during his final year project was ahead of its time. He turned a civil engineering algorithm into a user-friendly app that’s now a reference for many students.",
    imgPath: "/images/person.png",
    logoPath: "/images/person.png",
    title: "Mobile Developer – DoE Concrete Mix Design App",
    date: "November 2022 – July 2023",
    responsibilities: [
      "Built a Flutter-based mobile app that automated the Department of Environment (DoE) concrete mix design method for civil engineers.",
      "Encoded calculation logic into reusable components and integrated result visualization using charts and dynamic UI updates.",
      "Tested and validated outputs with academic supervisors, aligning with industry standards for design precision.",
    ],
  },
  {
    review:
      "Chinedu’s contributions to AI research were inspiring. He took ownership of complex models and delivered solid results backed by deep experimentation and clean code.",
    imgPath: "/images/person.png",
    logoPath: "/images/person.png",
    title: "AI Research Intern – Environmental & Structural Modeling",
    date: "July 2022 – November 2022",
    responsibilities: [
      "Conducted research on river ice dynamics, developing early-stage neural network models for freeze-up and flood prediction.",
      "Simulated frazil and anchor ice formation using MATLAB and Python, focusing on hydrological data and river energy budgets.",
      "Documented findings in a mini-research paper, contributing to ongoing efforts in infrastructure resilience modeling.",
    ],
  },
  {
    review:
      "Chinedu impressed us with his initiative and ability to merge AI with structural engineering use cases. His backend APIs and Python models were well-documented and production-ready.",
    imgPath: "/images/person.png",
    logoPath: "/images/person.png",
    title: "AI/ML Backend Developer – Research & Engineering Tools",
    date: "December 2022 – April 2023",
    responsibilities: [
      "Developed Python-based machine learning models for predicting material strength and optimizing concrete mix design parameters.",
      "Built backend APIs using FastAPI to serve prediction endpoints to frontend interfaces used by civil engineers.",
      "Utilized pandas, scikit-learn, and TensorFlow for training, evaluation, and deployment of models within an engineering context.",
    ],
  },
  {
    review:
      "Chinedu’s contribution to our AI-powered exam prep tool was transformative. His mix of data science insight and frontend engineering led to a smart, intuitive platform that students love.",
    imgPath: "/images/person.png",
    logoPath: "/images/person.png",
    title: "AI-Focused Frontend Engineer – Student Exam Prep App",
    date: "May 2023 – October 2023",
    responsibilities: [
      "Designed and built a sleek exam preparation app using Flutter and Firebase, featuring past questions, intelligent test generators, and study paths.",
      "Applied basic machine learning logic to recommend study materials based on user behavior and performance.",
      "Worked directly with students to iterate on UI/UX design, dramatically increasing engagement and retention rates.",
    ],
  },
  {
    review:
      "Chinedu brought exceptional innovation and architectural clarity to the church management system. His expertise in full-stack development turned our vision into a seamless, scalable reality.",
    imgPath: "/images/person.png",
    logoPath: "/images/person.png",
    title: "Lead Full Stack Developer – Church Management App",
    date: "November 2023 – Present",
    responsibilities: [
      "Engineered a cross-platform mobile app with React Native and Expo Router, featuring admin/member dashboards, event feeds, and dynamic UI states.",
      "Integrated PayPal for real-time payments and built multi-step contribution flows using react-hook-form, NativeWind, and react-step-builder.",
      "Implemented modular, scalable codebase with seamless routing, bottom sheets, and API integration for user management and church operations.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Ngozi Okafor",
    mentions: "@ngoziokafor",
    review:
      "Chinedu is a rare talent. He built our web platform from the ground up, incorporating intelligent features and a smooth UI. His skillset in both frontend and AI integration blew us away.",
    imgPath: "/images/person.png",
  },
  {
    name: "Kwame Mensah",
    mentions: "@kwamemensah",
    review:
      "From the first meeting, Chinedu understood exactly what we needed. He designed a mobile-first solution for our startup and even integrated machine learning for personalized user experiences. Highly recommended!",
    imgPath: "/images/person.png",
  },
  {
    name: "Fatou Diallo",
    mentions: "@fatoudiallo",
    review:
      "It was a pleasure working with Chinedu. He revamped our data dashboard, added smart analytics using Python, and ensured everything was clean, fast, and scalable. Truly a data wizard.",
    imgPath: "/images/person.png",
  },
  {
    name: "Ibrahim Musa",
    mentions: "@ibrahimmusa",
    review:
      "Chinedu brought life to our mobile app idea. His React Native skills are top-notch and his UI work is clean, modern, and intuitive. His attention to performance was a big plus.",
    imgPath: "/images/person.png",
  },
  {
    name: "Zainab Abubakar",
    mentions: "@zainababubakar",
    review:
      "We hired Chinedu for our church app backend, and he delivered beyond expectations. He built APIs with authentication, PayPal integration, and structured everything for future scaling. Professional and dependable.",
    imgPath: "/images/person.png",
  },
  {
    name: "Thabo Ndlovu",
    mentions: "@thabondlovu",
    review:
      "Chinedu is the kind of developer every tech team dreams of. He handled both frontend and backend development with ease. His work ethic, technical depth, and friendly nature made him a standout on our project.",
    imgPath: "/images/person.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
