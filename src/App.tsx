import { useState, useEffect } from "react";
import "./App.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "What I Do", href: "#what-i-do" },
  { label: "Skills", href: "#skills" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const pmCapabilities = [
  "End-to-End Project Management (Planning, Design, Development, Testing, Release)",
  "Requirement Definition & External Design",
  "Agile / Scrum / Waterfall Project Execution",
  "Task & Progress Management (Jira, Backlog, Trello)",
  "Team Coordination (Developers, Designers, QA)",
  "Risk Management & Issue Resolution",
  "Client & Stakeholder Communication",
  "Quality Assurance & Testing Coordination",
];

const technicalStrengths = [
  "Communicate smoothly with engineers",
  "Understand system architecture and technical constraints",
  "Support technical discussions and decision-making",
  "Identify risks early from a technical perspective",
];

const skills: Record<string, string[]> = {
  "Project Management": [
    "Requirement Management",
    "Architectural Design",
    "Design Mockup",
    "Functional Prototype",
    "QA Engineering",
  ],
  Development: [
    "React",
    "React Native",
    "Flutter",
    "TypeScript",
    "Python",
    "Laravel",
  ],
  "Engineering & Infrastructure": [
    "API Development",
    "Database Architecture",
    "Architecture",
    "DevOps",
  ],
};

const techStack = [
  { category: "Languages", stack: "JavaScript / TypeScript, Java, Python" },
  { category: "Frontend", stack: "React, React Native, Flutter" },
  { category: "Backend", stack: "Node.js, Spring Boot, Laravel" },
  { category: "Architecture", stack: "REST APIs, Microservices" },
  { category: "Database", stack: "MySQL, PostgreSQL" },
  { category: "Cloud", stack: "AWS (EC2, S3, etc.)" },
  { category: "DevOps", stack: "Git, CI/CD" },
];

const experience = [
  { domain: "eCommerce", icon: "🛒" },
  { domain: "Finance", icon: "💹" },
  { domain: "Healthcare", icon: "🏥" },
  { domain: "Recruitment", icon: "🤝" },
  { domain: "Internal Systems / CRM", icon: "🏢" },
  { domain: "Data Management & Analytics", icon: "📊" },
];

const approaches = [
  { label: "On time", icon: "⏱" },
  { label: "Within scope", icon: "🎯" },
  { label: "High quality", icon: "✨" },
  { label: "Business-oriented", icon: "📈" },
];

const strengths = [
  { title: "Bridge Builder", desc: "Connect business and engineering teams with clear, effective communication." },
  { title: "Problem Solver", desc: "Drive projects forward and resolve blockers quickly before they escalate." },
  { title: "Full Ownership", desc: "Take complete responsibility of the project lifecycle from start to finish." },
  { title: "Tech-Aware PM", desc: "Identify technical risks early using a hands-on developer's perspective." },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <span className="nav-logo">PM Portfolio</span>
          <ul className="nav-links">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={activeSection === href.slice(1) ? "active" : ""}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-badge">Available for Projects</div>
          <h1>Project Manager</h1>
          <p className="tagline">Tech-Savvy · End-to-End Delivery · 2+ Years Experience</p>
          <p className="description">
            I help teams successfully deliver software projects — from external
            design to testing — with strong ownership, structured management,
            and solid technical understanding.
          </p>
          <div className="hero-actions">
            <a href="#what-i-do" className="btn btn-primary">What I Do</a>
            <a href="#contact" className="btn btn-outline">Get in Touch</a>
          </div>
        </div>
      </header>

      <main>
        {/* About / Background */}
        <section id="about" className="section">
          <div className="section-header">
            <h2>Background</h2>
            <p className="section-sub">Who I am and what I bring</p>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p>
                With <strong>2+ years of experience</strong> as a Project Manager and a
                hands-on background in software development, I specialize in managing
                the full development lifecycle while effectively bridging the gap between
                business and engineering teams.
              </p>
              <p>
                My experience spans <strong>eCommerce, Finance, Healthcare, Recruitment</strong>,
                and more — delivering projects end-to-end from planning through release.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">2+</span>
                  <span className="stat-label">Years as PM</span>
                </div>
                <div className="stat">
                  <span className="stat-number">6+</span>
                  <span className="stat-label">Domains</span>
                </div>
                <div className="stat">
                  <span className="stat-number">7+</span>
                  <span className="stat-label">Tech Stacks</span>
                </div>
              </div>
            </div>
            <div className="strengths-grid">
              {strengths.map(({ title, desc }) => (
                <div key={title} className="strength-card">
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What I Do Best */}
        <section id="what-i-do" className="section section-alt">
          <div className="section-header">
            <h2>What I Do Best</h2>
            <p className="section-sub">Core capabilities across PM and engineering</p>
          </div>
          <div className="what-grid">
            <div className="what-card">
              <div className="what-icon">📋</div>
              <h3>Project Management</h3>
              <ul className="capability-list">
                {pmCapabilities.map((item) => (
                  <li key={item}>
                    <span className="li-bullet">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="what-card">
              <div className="what-icon">💻</div>
              <h3>Technical Background</h3>
              <p className="what-intro">
                My hands-on programming experience enables me to:
              </p>
              <ul className="capability-list">
                {technicalStrengths.map((item) => (
                  <li key={item}>
                    <span className="li-bullet">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section">
          <div className="section-header">
            <h2>Skills</h2>
            <p className="section-sub">Areas of expertise</p>
          </div>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="card">
                <h3>{category}</h3>
                <div className="badges">
                  {items.map((item) => (
                    <span key={item} className="badge">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section id="tech-stack" className="section section-alt">
          <div className="section-header">
            <h2>Tech Stack</h2>
            <p className="section-sub">Technologies I work with</p>
          </div>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Stack</th>
                </tr>
              </thead>
              <tbody>
                {techStack.map(({ category, stack }) => (
                  <tr key={category}>
                    <td className="td-label">{category}</td>
                    <td>{stack}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="section">
          <div className="section-header">
            <h2>Project Experience</h2>
            <p className="section-sub">Domains I have delivered projects in</p>
          </div>
          <div className="experience-grid">
            {experience.map(({ domain, icon }) => (
              <div key={domain} className="experience-card">
                <span className="exp-icon">{icon}</span>
                <span>{domain}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Approach */}
        <section className="section section-alt">
          <div className="section-header">
            <h2>My Approach</h2>
            <p className="section-sub">Every project, every time</p>
          </div>
          <div className="approach-grid">
            {approaches.map(({ label, icon }) => (
              <div key={label} className="approach-card">
                <span className="approach-icon">{icon}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section contact-section">
          <div className="contact-inner">
            <h2>Let's Work Together</h2>
            <p>
              Looking for a PM who understands both business and engineering?
              Let's build well-managed, efficient, and successful projects together.
            </p>
            <a href="mailto:hello@example.com" className="btn btn-primary btn-lg">
              Get in Touch
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <span className="footer-logo">PM Portfolio</span>
          <p>Project Manager · Tech-Savvy · End-to-End Delivery</p>
        </div>
      </footer>
    </div>
  );
}
