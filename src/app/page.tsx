type Project = {
  title: string;
  period: string;
  description: string;
  stack: string[];
  link: string;
};

type Experience = {
  role: string;
  organization: string;
  period: string;
  bullets: string[];
};

const projects: Project[] = [
  {
    title: "Cal Poly Pomona Dining Dashboard",
    period: "CSU AI Summer Camp 2025 - First Place Winner",
    description:
      "Built an AI-powered dashboard that predicts dining staffing needs using historical trends, weather, and campus events. Added an AWS Bedrock + LangChain assistant for natural language analytics and planning support.",
    stack: ["Flask", "AWS Bedrock", "LangChain", "Chart.js", "XGBoost", "scikit-learn"],
    link: "https://github.com/Danielmart02/CPP-dining-agent-dashboard",
  },
  {
    title: "FDA Food Recall Web Application",
    period: "Academic Team Project",
    description:
      "Developed a full-stack Flask application using the FDA enforcement API to search and display real-time food recall data with a user-friendly interface and data processing workflows.",
    stack: ["Flask", "Python", "JavaScript", "HTML", "CSS"],
    link: "https://github.com/Danielmart02/CST-336-Final_Project",
  },
  {
    title: "Storybook Open-Source Contribution",
    period: "CodeDay Labs Internship, Summer 2024",
    description:
      "Contributed to Storybook by improving TypeScript + JSDoc extraction for React hooks, helping produce clearer generated documentation and better developer experience.",
    stack: ["TypeScript", "React", "JSDoc", "Open Source"],
    link: "https://github.com/Danielmart02/storybook",
  },
  {
    title: "Personal Portfolio Website",
    period: "2026",
    description:
      "Designed and built a Vercel-ready portfolio website to highlight experience in networking, security, and software engineering projects.",
    stack: ["Next.js", "TypeScript", "CSS", "Vercel"],
    link: "https://github.com/Danielmart02/Daniel_Martinez_Portfolio",
  },
];

const experience: Experience[] = [
  {
    role: "Telecom Engineering Analyst Student Technician",
    organization: "California State University Monterey Bay Network Services",
    period: "Nov 2023 - Present",
    bullets: [
      "Support day-to-day telecom and network operations across 80 campus buildings serving over 6,000 students and staff.",
      "Provide Tier 1 support by triaging Help Desk tickets, resolving incidents, and escalating complex issues.",
      "Perform structured cabling work (copper, fiber, coax), labeling, testing, and telecom room documentation updates.",
      "Install, configure, and test VoIP phones while supporting user moves, adds, and changes.",
    ],
  },
  {
    role: "Software Engineer Intern (Open Source)",
    organization: "CodeDay Labs - Storybook",
    period: "Jun 2024 - Aug 2024",
    bullets: [
      "Contributed to a major open-source frontend platform with over 2,000 contributors.",
      "Focused on TypeScript support and JSDoc integration for React custom hooks documentation.",
      "Proposed improvements to metadata extraction logic to strengthen generated docs maintainability.",
    ],
  },
];

const skillGroups: { label: string; values: string[] }[] = [
  {
    label: "Languages",
    values: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
  },
  {
    label: "Frameworks & Tools",
    values: ["React", "Node.js", "Next.js", "NestJS", "Flask", "Git", "GitHub", "Linux"],
  },
  {
    label: "Cloud & Security",
    values: ["AWS (Bedrock, CLI)", "Network Security Fundamentals", "Prompt Engineering"],
  },
  {
    label: "Networking",
    values: [
      "TCP/IP fundamentals",
      "VLAN concepts",
      "DHCP/DNS fundamentals",
      "VoIP",
      "Structured cabling",
      "Ticket triage and escalation",
      "Network documentation",
    ],
  },
];

export default function Home() {
  return (
    <main>
      <header className="hero" id="top">
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="hero-content">
          <p className="eyebrow">Computer Science (Network & Security) - CSUMB</p>
          <h1>Daniel Martinez</h1>
          <p className="subtitle">
            Network-focused software engineer building practical, secure, and user-friendly systems.
          </p>
          <div className="cta-row">
            <a href="#projects" className="button button-primary">
              View Projects
            </a>
            <a href="mailto:danny.mtnz7@gmail.com" className="button button-secondary">
              Email Me
            </a>
          </div>
          <div className="link-row">
            <a href="https://github.com/Danielmart02" target="_blank" rel="noreferrer">
              GitHub (Danielmart02)
            </a>
            <a href="https://github.com/Daniel-Martinez1" target="_blank" rel="noreferrer">
              GitHub (Daniel-Martinez1)
            </a>
          </div>
        </div>
      </header>

      <section id="about" className="section">
        <h2>About</h2>
        <p>
          Graduating Computer Science major with network operations and open-source engineering experience,
          currently seeking opportunities as a Network Engineer or Security Analyst. I enjoy solving
          real-world problems through full-stack development, reliable infrastructure practices, and clear
          documentation.
        </p>
      </section>

      <section id="experience" className="section">
        <h2>Experience</h2>
        <div className="grid">
          {experience.map((item) => (
            <article key={item.role} className="card">
              <h3>{item.role}</h3>
              <p className="muted">
                {item.organization} - {item.period}
              </p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="grid">
          {projects.map((project) => (
            <article key={project.title} className="card">
              <h3>{project.title}</h3>
              <p className="muted">{project.period}</p>
              <p>{project.description}</p>
              <div className="tag-wrap">
                {project.stack.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noreferrer">
                View on GitHub
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="grid">
          {skillGroups.map((group) => (
            <article key={group.label} className="card">
              <h3>{group.label}</h3>
              <p>{group.values.join(" | ")}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="section">
        <h2>Education</h2>
        <article className="card">
          <h3>California State University Monterey Bay</h3>
          <p className="muted">
            Bachelor of Science in Computer Science (Network and Security) - Expected May 2026
          </p>
          <p>GPA: 3.90</p>
          <p>
            Relevant coursework: Data Structures, Software Design, Algorithms, Database Systems, Operating
            Systems, Internet Programming, Computer Networks, Network Security, Advanced Cybersecurity.
          </p>
          <p>Honors: Dean&apos;s List, CSU AI Summer Camp 2025 First-Place Winner</p>
        </article>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <article className="card">
          <p>Email: danny.mtnz7@gmail.com</p>
          <p>Phone: (209) 312-3899</p>
          <p>
            GitHub:{" "}
            <a href="https://github.com/Danielmart02" target="_blank" rel="noreferrer">
              Danielmart02
            </a>{" "}
            and{" "}
            <a href="https://github.com/Daniel-Martinez1" target="_blank" rel="noreferrer">
              Daniel-Martinez1
            </a>
          </p>
        </article>
      </section>
    </main>
  );
}
