const contactLinks = [
  { label: "Email", href: "mailto:quocleoho362@gmail.com" },
  { label: "Phone", href: "tel:16162517124" },
  { label: "LinkedIn", href: "https://linkedin.com/in/quocleoho/" },
  { label: "GitHub", href: "https://github.com/leo3622" }
];

const metrics = [
  { label: "Workflow efficiency gain", value: "50%" },
  { label: "Model size reduction", value: "40%" },
  { label: "Accuracy in model selection", value: "95%" }
];

const experiences = [
  {
    role: "Research Assistant",
    place: "Grand Valley State University",
    period: "Jan 2025 – Present",
    bullets: [
      "Documented and maintained data collection protocols for AI experiments, boosting reproducibility and efficiency by 30%.",
      "Built automated data collection and analysis workflows with Python, Pandas, and Scikit-learn, halving processing time and reaching 95% accuracy in model selection.",
      "Applied knowledge distillation, quantization, and fine-tuning to shrink model size by 40% and accelerate inference by 50%."
    ]
  },
  {
    role: "Software Developer",
    place: "Grand Valley State University",
    period: "Aug 2025 – Dec 2025",
    bullets: [
      "Designed and optimized REST/GraphQL routers to cut response latency and improve throughput under production-like load.",
      "Built reusable API adapters and middleware for auth, validation, and error handling to speed up integration for new endpoints.",
      "Aligned backend contracts and typing with frontend adapters to deliver reliable, typed client-facing features."
    ]
  },
  {
    role: "Data Analyst Intern",
    place: "Yiddish Arts and Academics Association of North America",
    period: "Aug 2024 – Dec 2024",
    bullets: [
      "Implemented scalable data collection and storage on Firebase for 500+ user-generated records across accounts, media, and messaging.",
      "Produced clear technical documentation that streamlined onboarding and reduced knowledge transfer time.",
      "Partnered with cross-functional stakeholders to convert requirements into analytical frameworks and data visualizations."
    ]
  }
];

const projects = [
  {
    name: "arXiv Citation Network Analysis",
    link: "https://github.com/leo3622/arxiv-citation-network",
    summary:
      "Transformed citation data with Python (Pandas, NumPy) and built a Neo4j graph for visualization and influence analysis.",
    impact: "Highlighted key academic influencers and trend insights."
  },
  {
    name: "Plant Disease Classification with Knowledge Distillation",
    link: "https://github.com/leo3622/plant_disease_classification",
    summary:
      "Fine-tuned EfficientNet on PlantVillage and distilled to a lightweight deployable model.",
    impact: "Reduced inference latency by 40% while keeping accuracy deployment-ready."
  }
];

const skills = {
  core: ["Python", "SQL", "Git", "Linux", "APIs", "VS Code", "Jupyter"],
  data: ["Apache Airflow", "ETL/ELT", "Snowflake", "Data Modeling"],
  ml: ["Scikit-learn", "PyTorch", "TensorFlow/Keras"],
  platforms: ["AWS", "Neo4j", "Firebase"]
};

export default function Home() {
  return (
    <main className="page">
      <section className="hero glass">
        <div className="eyebrow">Data Engineering · Machine Learning</div>
        <div className="hero-top">
          <div>
            <p className="tagline">QUOC (LEO) HO</p>
            <h1>
              Building reliable data pipelines and production-ready ML systems.
            </h1>
            <p className="lede">
              Data Engineer and Machine Learning Engineer who turns raw data
              into deployable, high-impact solutions across ingestion, modeling,
              and delivery.
            </p>
            <div className="contact-row">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="pill"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="metrics">
            {metrics.map((metric) => (
              <div key={metric.label} className="metric-card glass">
                <span className="metric-value">{metric.value}</span>
                <span className="metric-label">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section glass">
        <div className="section-header">
          <p className="eyebrow">Experience</p>
          <h2>Shipping data and ML that scale</h2>
          <p className="muted">
            From research to production APIs, I align data pipelines, modeling,
            and developer experience to deliver measurable impact.
          </p>
        </div>
        <div className="card-grid">
          {experiences.map((exp) => (
            <article key={exp.role} className="card">
              <header className="card-header">
                <div>
                  <p className="pill subtle">{exp.period}</p>
                  <h3>{exp.role}</h3>
                  <p className="muted">{exp.place}</p>
                </div>
              </header>
              <ul className="bullet-list">
                {exp.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section glass projects">
        <div className="section-header">
          <p className="eyebrow">Projects</p>
          <h2>Selected builds</h2>
          <p className="muted">
            Experiments and production-minded prototypes that explore data
            systems, graph analytics, and efficient ML.
          </p>
        </div>
        <div className="card-grid two">
          {projects.map((project) => (
            <article key={project.name} className="card">
              <div className="card-header">
                <a
                  className="link"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </a>
                <p className="muted">{project.summary}</p>
              </div>
              <div className="pill subtle">{project.impact}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section glass">
        <div className="section-header">
          <p className="eyebrow">Skills</p>
          <h2>Data & ML toolkit</h2>
          <p className="muted">
            A stack tuned for building, shipping, and observing data-intensive
            systems.
          </p>
        </div>
        <div className="skills-grid">
          <div>
            <h4>Programming & DevOps</h4>
            <div className="pill-row">
              {skills.core.map((item) => (
                <span key={item} className="pill subtle">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4>Data Engineering</h4>
            <div className="pill-row">
              {skills.data.map((item) => (
                <span key={item} className="pill subtle">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4>Machine Learning</h4>
            <div className="pill-row">
              {skills.ml.map((item) => (
                <span key={item} className="pill subtle">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4>Platforms & Databases</h4>
            <div className="pill-row">
              {skills.platforms.map((item) => (
                <span key={item} className="pill subtle">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section glass education">
        <div className="section-header">
          <p className="eyebrow">Education</p>
          <h2>Grand Valley State University</h2>
          <p className="muted">
            B.S. in Computer Science · Minor in Mathematics · GPA: 3.82 · Dean’s
            List · Graduation: December 2025
          </p>
        </div>
      </section>

      <section className="cta glass">
        <div>
          <p className="eyebrow">Let&apos;s build</p>
          <h3>Ready to design and deploy your next data or ML system.</h3>
          <p className="muted">
            I love hard problems at the intersection of data infrastructure,
            modeling, and product impact.
          </p>
        </div>
        <div className="contact-row">
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="pill"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
