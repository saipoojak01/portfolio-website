export const links = {
  email: 'saipooja7368@gmail.com', phone: '+91 9042247977',
  github: 'https://github.com/saipoojak01',
  linkedin: 'https://www.linkedin.com/in/sai-pooja-k-65597a313',
  resume: '/Sai_Pooja_K_Resume.pdf',
}
export const summary = 'Third-year B.Tech Computer Science and Business Systems student with knowledge of Java, JavaScript, and frontend and backend development, and hands-on experience building practical web applications. Interested in software development and problem-solving, with a focus on learning new technologies and building real-world solutions.'
export const about = 'I am a third-year student at Panimalar Engineering College, Chennai, building toward a career as a Java, full-stack or backend developer. I learn best by building real projects, so most of what I know comes from solving problems in the applications listed below.'
export const education = { degree: 'B.Tech – Computer Science and Business Systems', school: 'Panimalar Engineering College, Chennai', years: '2024 – 2028', cgpa: '8.21' }
export const skills = [
  ['Languages', ['Java', 'JavaScript']],
  ['Frontend', ['HTML', 'CSS', 'React.js', 'Tailwind CSS']],
  ['Backend', ['Spring Boot', 'Node.js', 'Express.js']],
  ['Database', ['MySQL', 'SQL']],
  ['Tools & Platforms', ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Postman', 'Vercel']],
  ['Cloud', ['AWS Fundamentals']],
]
// Add screenshots by placing images in public/screenshots and setting image: '/screenshots/name.png'
export const projects = [
  { name: 'MediFind', subtitle: 'Pharmacy Availability & Inventory Platform',
    tech: ['React.js', 'Tailwind CSS', 'Java', 'Spring Boot', 'MySQL', 'JWT'],
    problem: 'Patients often do not know which pharmacies have a specific medicine in stock, so they visit or call several pharmacies. Pharmacies also need an organized way to keep stock information current.',
    solution: 'A web platform where users search for medicines and see which registered pharmacies have them, and pharmacies manage their own inventory.',
    features: ['User registration and login, with separate pharmacy authentication', 'JWT-based authentication and role-based access', 'Medicine search with pharmacy-wise availability', 'Pharmacy inventory management: add, update and manage stock', 'Separate user and pharmacy dashboards', 'Tesseract OCR for prescriptions explored as an experimental extension'],
    github: 'https://github.com/saipoojak01/Medifind-', live: 'https://medifind-fawn.vercel.app', image: '' },
  { name: 'WorkNexusAI', subtitle: 'AI Skill Matching & Workforce Platform',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Gemini API'],
    problem: 'Skilled youth struggle to find suitable work, while MSMEs and startups struggle to find candidates with the right skills. Resume-based hiring may not reflect real skills or potential.',
    solution: 'A platform that connects skilled youth with MSMEs through AI-powered skill assessment, skill-gap identification, learning recommendations and job matching.',
    features: ['AI-based skill assessment and verification', 'Skill-gap identification', 'Personalized learning roadmaps', 'Intelligent job matching', 'Candidate and employer dashboards, and employer job posting', 'Workforce analytics and skill-gap insights'],
    github: 'https://github.com/saipoojak01/worknexusAI', live: '', image: '' },
  { name: 'VernacLearn AI', subtitle: 'Vernacular Learning Platform',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    problem: 'Rural and tribal students face language barriers in digital education: lessons are often taught in Hindi or another language, while students understand best in their mother tongue.',
    solution: 'An educational platform that adapts content into students’ mother tongue, simplifies lessons by grade level and supports personalized learning.',
    features: ['Mother-tongue-based learning', 'Lesson simplification by grade level', 'Cultural-context explanations', 'Separate student and teacher interfaces', 'Assessments and learning-gap identification', 'Personalized remediation and reassessment'],
    github: 'https://github.com/saipoojak01/VernacLearnAI-project', live: '', image: '' },
]
export const experience = [
  { role: 'Java Developer Intern', org: 'InternPe', when: '', points: ['Completed an internship as a Java Developer, working with Java and strengthening core development skills.'] },
  { role: 'Freelance Web Developer', org: 'Startup', when: '4 months – Present', points: ['Working as a freelance web developer with a startup on an ongoing basis, building web application features.'] },
]
export const certifications = ['NPTEL – Database Management System (DBMS), IIT Kharagpur', 'AWS Cloud Practitioner Essentials', 'Oracle Java Foundation Badge', 'CII & HP Dreams Unlocked – AI/ML, Python, Data Analysis, and Generative AI (30 hours)']
export const achievements = [
  { title: 'Bingpot! – Invente ’26', text: 'Participated in a clue-based web development challenge at Invente ’26, a national-level tech fest organized by SSN College of Engineering and Shiv Nadar University Chennai, identifying requirements from clues and building an e-commerce shopping website.' },
]
