import { useState, useEffect } from "react";
import "./App.css";
import { translations, type Lang } from "./i18n";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [lang, setLang] = useState<Lang>("en");

  const t = translations[lang];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = t.nav.links.map((l) => l.href.slice(1));
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
  }, [t.nav.links]);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <span className="nav-logo">{t.nav.logo}</span>
          <ul className="nav-links">
            {t.nav.links.map(({ label, href }) => (
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
          <button
            className={`lang-toggle${scrolled ? " scrolled" : ""}`}
            onClick={() => setLang((l) => (l === "en" ? "ja" : "en"))}
            aria-label="Switch language"
          >
            <span className={lang === "en" ? "lang-active" : ""}>EN</span>
            <span className="lang-divider">|</span>
            <span className={lang === "ja" ? "lang-active" : ""}>JP</span>
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-badge">{t.hero.badge}</div>
          <h1>{t.hero.title}</h1>
          <p className="tagline">{t.hero.tagline}</p>
          <p className="description">{t.hero.description}</p>
          <div className="hero-actions">
            <a href="#what-i-do" className="btn btn-primary">{t.hero.cta1}</a>
            <a href="#contact" className="btn btn-outline">{t.hero.cta2}</a>
          </div>
        </div>
      </header>

      <main>
        {/* About / Background */}
        <section id="about" className="section">
          <div className="section-header">
            <h2>{t.about.title}</h2>
            <p className="section-sub">{t.about.sub}</p>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p>
                {t.about.body1Text.split(t.about.body1Highlight).map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <span key={i}>
                      {part}
                      <strong>{t.about.body1Highlight}</strong>
                    </span>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
              </p>
              <p>
                {t.about.body2Text.split(t.about.body2Highlight).map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <span key={i}>
                      {part}
                      <strong>{t.about.body2Highlight}</strong>
                    </span>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
              </p>
              <div className="about-stats">
                {t.about.stats.map(({ number, label }) => (
                  <div key={label} className="stat">
                    <span className="stat-number">{number}</span>
                    <span className="stat-label">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="strengths-grid">
              {t.about.strengths.map(({ title, desc }) => (
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
            <h2>{t.whatIDo.title}</h2>
            <p className="section-sub">{t.whatIDo.sub}</p>
          </div>
          <div className="what-grid">
            <div className="what-card">
              <div className="what-icon">{t.whatIDo.pm.icon}</div>
              <h3>{t.whatIDo.pm.title}</h3>
              <ul className="capability-list">
                {t.whatIDo.pm.items.map((item) => (
                  <li key={item}>
                    <span className="li-bullet">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="what-card">
              <div className="what-icon">{t.whatIDo.tech.icon}</div>
              <h3>{t.whatIDo.tech.title}</h3>
              <p className="what-intro">{t.whatIDo.tech.intro}</p>
              <ul className="capability-list">
                {t.whatIDo.tech.items.map((item) => (
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
            <h2>{t.skills.title}</h2>
            <p className="section-sub">{t.skills.sub}</p>
          </div>
          <div className="skills-grid">
            {Object.entries(t.skills.categories).map(([category, items]) => (
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
            <h2>{t.techStack.title}</h2>
            <p className="section-sub">{t.techStack.sub}</p>
          </div>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>{t.techStack.categoryLabel}</th>
                  <th>{t.techStack.stackLabel}</th>
                </tr>
              </thead>
              <tbody>
                {t.techStack.items.map(({ category, stack }) => (
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
            <h2>{t.experience.title}</h2>
            <p className="section-sub">{t.experience.sub}</p>
          </div>
          <div className="experience-grid">
            {t.experience.items.map(({ domain, icon }) => (
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
            <h2>{t.approach.title}</h2>
            <p className="section-sub">{t.approach.sub}</p>
          </div>
          <div className="approach-grid">
            {t.approach.items.map(({ label, icon }) => (
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
            <h2>{t.contact.title}</h2>
            <p>{t.contact.body}</p>
            <a href="mailto:hello@example.com" className="btn btn-primary btn-lg">
              {t.contact.cta}
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <span className="footer-logo">{t.footer.logo}</span>
          <p>{t.footer.sub}</p>
        </div>
      </footer>
    </div>
  );
}
