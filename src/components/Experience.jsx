import './Experience.css';

const experiences = [
  {
    title: 'Software Developer',
    company: 'Temenos',
    location: 'Orlando, Florida, USA',
    date: 'June 2025 – Present',
    bullets: [
  'Developed a React and Node.js based web application with secure login and project dashboard to enable AI-powered documentation updates and automated pull request workflows.',
  'Integrated Azure AI Foundry agents to fetch documentation files, analyze user inputs, and suggest line-level changes to ensure accurate and efficient updates.',
  'Implemented a Generation Screen allowing users to input Jira links, GitLab repo details, attachments, and descriptions, triggering automated commit and PR creation in two documentation repositories.',
  'Built a TypeScript backend to orchestrate file retrieval, AI recommendations, and PR creation, ensuring seamless synchronization between development and documentation workflows.',
  'Designed and executed unit and integration testing using Vitest and Jest to validate AI suggestions, PR generation, and dashboard functionality.',
  'Automated documentation updates, significantly reducing manual effort and accelerating review cycles for developers and technical writers.',
  'Collaborated with developers and stakeholders to refine requirements, improve UX, and ensure smooth integration between code repos, documentation repos, and Jira tickets.'
],
  },
  {
    title: 'Software Development Engineer - I',
    company: 'MassMutual GCC',
    location: 'Telangana, India',
    date: 'January 2022 – July 2023',
    bullets: [
      'Developed and maintained RESTful APIs using Java and Spring Boot to streamline email automation processes.',
      'Integrated Kong API Gateway with Okta for secure API traffic management and robust authentication.',
      'Built and integrated RESTful APIs with React.js front-end applications for seamless user interactions.',
      'Optimized cloud deployments using Kubernetes, Docker, and AWS Lambda to reduce downtime and improve scalability.',
      'Collaborated with cross-functional teams to align API functionalities with business requirements.',
      'Performed unit and integration testing to validate API functionality and robustness.',
      'Designed and optimized database schemas for PostgreSQL and MongoDB to improve query performance and data consistency.'
    ],
  },
  {
    title: 'Junior Software Engineer (Intern)',
    company: 'LTIMindtree',
    location: 'Telangana, India',
    date: 'Feb 2022 – May 2022',
    bullets: [
      'Participated in the full Software Development Life Cycle (SDLC) from requirements to deployment and maintenance.',
      'Worked on a full-stack Hospital Management System for appointment scheduling, doctor availability, and patient data management.',
      'Built scalable microservices in Java for high-performance distributed systems and developed cloud-based solutions with AWS S3, Lambda, and RDS.',
      'Applied industry-standard authentication and security practices to enhance system reliability and protect user data.',
      'Implemented CI/CD pipelines to automate builds, testing, and deployment, reducing release time and improving delivery consistency.'
    ],
  },
];

export default function Experience() {
  return (
    <section className="experience card">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, idx) => (
          <div className="experience-item" key={idx}>
            <div className="exp-header">
              <div className="exp-title">{exp.title}</div>
              <div className="exp-company">{exp.company} <span className="exp-location">- {exp.location}</span></div>
              <div className="exp-date">{exp.date}</div>
            </div>
            <ul className="exp-bullets">
              {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
} 