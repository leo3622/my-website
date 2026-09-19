import MotionEffects from "./motion-effects";

const experience = [
  {
    role: "Vision Systems Specialist I",
    company: "LG Energy Solution Michigan",
    location: "Holland, MI",
    period: "Jun 2026 — Present",
    current: true,
    description:
      "Keeping automated vision inspection reliable in lithium-ion battery production.",
    details: [
      "Support Omron and Keyence vision controllers and PC-based inspection software.",
      "Troubleshoot cameras, lighting, triggers, sensors, encoders, and I/O alarms to restore image acquisition.",
      "Tune inspection parameters for dimensional measurements and defect detection; document root causes with production and engineering teams.",
    ],
    tags: ["Machine vision", "Omron & Keyence", "Root-cause analysis"],
  },
  {
    role: "Research Assistant · Computer Vision & AI",
    company: "Grand Valley State University",
    location: "Allendale & Grand Rapids, MI",
    period: "Jan 2025 — Present",
    current: true,
    description:
      "Connecting computer vision research to hardware people can use.",
    details: [
      "Integrate object detection with smart glasses and mobile hardware for real-time use.",
      "Test and debug device interfaces, usability, and system performance; maintain Linux environments and automated Python workflows.",
      "Train and optimize document-understanding models with knowledge distillation, pruning, and quantization.",
    ],
    tags: ["Computer vision", "Python", "Linux", "Model optimization"],
  },
  {
    role: "Inventory Control Coordinator",
    company: "Meijer",
    location: "Holland, MI",
    period: "Jun 2024 — May 2026",
    description:
      "Managed stock accuracy, product flow, and replenishment. Investigated inventory discrepancies and coordinated across departments to keep daily operations running reliably.",
    tags: ["Inventory control", "Cross-functional support"],
  },
  {
    role: "Data Science Intern",
    company: "Yiddish Arts and Academics Association of North America",
    location: "Remote",
    period: "Aug — Dec 2024",
    description:
      "Maintained a Firebase data system with 500+ application records, user accounts, storage, and access controls. Documented workflows and translated stakeholder needs into analysis and visualizations.",
    tags: ["Firebase", "Data analysis", "Documentation"],
  },
  {
    role: "Machine Operator",
    company: "Gentex Corporation",
    location: "Zeeland, MI",
    period: "Summers 2022 & 2023",
    description:
      "Operated automotive production equipment, performed visual quality checks, monitored material flow, and reported faults while following standardized work and safety procedures.",
    tags: ["Manufacturing", "Quality inspection"],
  },
  {
    role: "Machine Technician",
    company: "Magna International",
    location: "Holland, MI",
    period: "May — Aug 2021",
    description:
      "Set up manufacturing equipment, performed machine checks and adjustments, inspected parts, and supported changeovers and production documentation.",
    tags: ["Equipment support", "Process quality"],
  },
];

const skills = [
  {
    number: "01",
    name: "Vision & automation",
    description: "From image acquisition to accurate inspection.",
    items: [
      "Omron",
      "Keyence",
      "Inspection software",
      "Cameras & lighting",
      "Sensors & encoders",
      "I/O boards",
      "Relays",
      "Servo drives",
    ],
  },
  {
    number: "02",
    name: "IT & software",
    description: "The tools behind connected, dependable systems.",
    items: [
      "Linux",
      "Python",
      "SQL",
      "TCP/IP & DNS",
      "APIs",
      "Git",
      "Firebase",
      "Microsoft Excel",
      "System troubleshooting",
    ],
  },
  {
    number: "03",
    name: "Production support",
    description: "Practical problem-solving on the production floor.",
    items: [
      "Machine operation",
      "Root-cause analysis",
      "Quality inspection",
      "Incident documentation",
      "SOPs",
      "5S3R",
      "Safety & PPE",
    ],
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function VisionGraphic() {
  return (
    <div
      className="vision-art"
      aria-label="Abstract illustration of a machine vision lens"
    >
      <div className="art-grid" />
      <div className="art-caption">
        <span className="small-dot" /> A DIFFERENT PERSPECTIVE
      </div>
      <div className="lens-orbit orbit-one" />
      <div className="lens-orbit orbit-two" />
      <div className="lens">
        <div className="lens-middle">
          <div className="lens-inner">
            <div className="lens-core" />
          </div>
        </div>
      </div>
      <div className="viewfinder">
        <i />
        <i />
        <i />
        <i />
        <span className="crosshair">+</span>
      </div>
      <span className="art-coordinate">
        42.7875° N<br />
        86.1089° W
      </span>
      <span className="art-label">HARDWARE × INTELLIGENCE</span>
      <div className="art-note">
        <span className="note-icon" aria-hidden="true">
          ⌘
        </span>
        <div>
          Real-world systems.
          <br />
          <strong>Thoughtful solutions.</strong>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <MotionEffects />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a href="#" className="wordmark" aria-label="Leo Ho, home">
          leo<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#publications">Publications</a>
          <a href="#skills">Skills</a>
        </nav>
        <a className="nav-contact" href="#contact">
          Let’s connect <Arrow />
        </a>
      </header>
      <main id="main">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="small-dot" /> VISION SYSTEMS · COMPUTER SCIENCE
            </p>
            <h1 id="hero-title">
              Hi, I’m Quoc.
              <br />
              You can call
              <br />
              me <span>Leo.</span>
              <span className="hello-dot">✳</span>
            </h1>
            <p className="hero-description">
              I connect hardware, software, and a little curiosity to make
              real-world systems work better.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#experience">
                Explore my experience <span aria-hidden="true">↓</span>
              </a>
              <a className="text-link" href="/Quoc_Ho_Resume.docx" download>
                Download résumé <span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className="location">
              <span aria-hidden="true">◎</span> Based in Holland, Michigan
            </p>
          </div>
          <VisionGraphic />
        </section>
        <div className="focus-strip">
          <div className="container">
            <span>HARDWARE MEETS SOFTWARE</span>
            <p>
              Machine vision <b>✳</b> Intelligent systems <b>✳</b> Hands-on
              problem solving
            </p>
          </div>
        </div>
        <section id="about" className="about section container">
          <div>
            <p className="eyebrow">01 / A LITTLE ABOUT ME</p>
            <h2>
              Curious by nature.
              <br />
              <span>Practical by training.</span>
            </h2>
          </div>
          <div className="about-copy">
            <p>
              I’m a vision systems and IT support professional with a computer
              science background and hands-on experience on the manufacturing
              floor.
            </p>
            <p>
              At LG Energy Solution Michigan, I support the vision systems
              behind battery quality inspection. At Grand Valley State
              University, I bring computer vision models to wearable devices and
              explore more efficient AI.
            </p>
            <p>
              My approach is simple: understand the problem, find the root
              cause, and leave the system—and its documentation—better than I
              found it.
            </p>
            <a
              className="text-link"
              href="https://www.linkedin.com/in/quocleoho/"
              target="_blank"
              rel="noopener noreferrer"
            >
              More about me on LinkedIn <Arrow />
            </a>
          </div>
        </section>
        <section id="experience" className="experience-section section">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">02 / THE JOURNEY SO FAR</p>
                <h2>
                  Experience that
                  <br />
                  <span>connects the dots.</span>
                </h2>
              </div>
              <p>
                From the production floor to the research lab.
                <br />A foundation built by doing.
              </p>
            </div>
            <div className="timeline">
              {experience.map((job, index) => (
                <article className="experience-row" key={job.role}>
                  <div className="experience-date">
                    <span>{job.period}</span>
                    {job.current && (
                      <span className="current-label">
                        <span className="small-dot" /> Current
                      </span>
                    )}
                  </div>
                  <div className="experience-content">
                    <span className="timeline-dot" />
                    <div className="job-heading">
                      <div>
                        <p className="company">{job.company}</p>
                        <h3>{job.role}</h3>
                      </div>
                      <span className="job-number">0{index + 1}</span>
                    </div>
                    <p className="job-location">{job.location}</p>
                    <p className="job-description">{job.description}</p>
                    {job.details && (
                      <ul>
                        {job.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    )}
                    <div className="tags">
                      {job.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          id="publications"
          className="section container"
          aria-labelledby="publications-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / PUBLISHED RESEARCH</p>
              <h2 id="publications-title">
                Research, <span>in print.</span>
              </h2>
            </div>
          </div>
          <article className="publication-card">
            <div className="publication-mark" aria-hidden="true">
              <span>ACM</span>
              <span>2026</span>
            </div>
            <div className="publication-content">
              <p className="publication-meta">
                Association for Computing Machinery{" "}
                <span aria-hidden="true">·</span>{" "}
                <time dateTime="2026-07-29">July 29, 2026</time>
              </p>
              <h3>
                <a
                  href="https://dl.acm.org/doi/10.1145/3815970.3815979"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Efficient Layout-Aware Document Understanding for Educational
                  Transcripts via Systematic Model Compression
                </a>
              </h3>
              <div className="tags">
                <span>Document understanding</span>
                <span>Model compression</span>
                <span>Educational transcripts</span>
              </div>
              <a
                className="text-link publication-link"
                href="https://dl.acm.org/doi/10.1145/3815970.3815979"
                target="_blank"
                rel="noopener noreferrer"
              >
                View publication on ACM <Arrow />
              </a>
              <p className="publication-doi">DOI: 10.1145/3815970.3815979</p>
            </div>
          </article>
        </section>
        <section id="skills" className="section container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">04 / MY TOOLKIT</p>
              <h2>
                Built to troubleshoot.
                <br />
                <span>Equipped to create.</span>
              </h2>
            </div>
            <p>
              A mix of technical depth
              <br />
              and practical know-how.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((group) => (
              <article className="skill-card" key={group.name}>
                <span className="skill-number">
                  {group.number} <span aria-hidden="true">↗</span>
                </span>
                <h3>{group.name}</h3>
                <p>{group.description}</p>
                <div className="tags">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section
          className="education container"
          aria-labelledby="education-title"
        >
          <div className="education-icon" aria-hidden="true">
            ⌁
          </div>
          <div className="education-main">
            <p className="eyebrow">05 / EDUCATION</p>
            <h2 id="education-title">A foundation in computer science.</h2>
            <p>
              Grand Valley State University <span>·</span> B.S. in Computer
              Science <span>·</span> Minor in Mathematics
            </p>
          </div>
          <div className="education-meta">
            <strong>
              3.72 <span>GPA</span>
            </strong>
            <p>Dean’s List · December 2025</p>
          </div>
        </section>
        <section id="contact" className="contact section container">
          <p className="eyebrow">06 / WHAT’S NEXT?</p>
          <h2>
            Good things start
            <br />
            with a <span>conversation.</span>
          </h2>
          <p>
            Have a technical challenge, an interesting opportunity,
            <br className="desktop-break" /> or just want to say hello? I’d love
            to hear from you.
          </p>
          <a className="button primary" href="mailto:quocleoho362@gmail.com">
            Say hello <Arrow />
          </a>
          <a className="email-link" href="mailto:quocleoho362@gmail.com">
            quocleoho362@gmail.com
          </a>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/quocleoho/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <Arrow />
            </a>
            <a
              href="https://github.com/leo3622"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <Arrow />
            </a>
            <a href="tel:+16162517124">
              616.251.7124 <Arrow />
            </a>
          </div>
        </section>
      </main>
      <footer className="container">
        <a className="wordmark" href="#">
          leo<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} Quoc (Leo) Ho</p>
        <a href="#">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </>
  );
}
