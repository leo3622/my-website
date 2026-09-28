import Image from "next/image";
import MotionEffects from "./motion-effects";
import HeroArt from "./hero-art";
import FormStudy from "./form-study";

const experience = [
  {
    role: "Vision Systems Specialist I",
    company: "LG Energy Solution Michigan",
    location: "Holland, MI",
    period: "Jun 2026 - Present",
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
    period: "Jan 2025 - Present",
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
    period: "Jun 2024 - May 2026",
    description:
      "Managed stock accuracy, product flow, and replenishment. Investigated inventory discrepancies and coordinated across departments to keep daily operations running reliably.",
    tags: ["Inventory control", "Cross-functional support"],
  },
  {
    role: "Data Science Intern",
    company: "Yiddish Arts and Academics Association of North America",
    location: "Remote",
    period: "Aug - Dec 2024",
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
    period: "May - Aug 2021",
    description:
      "Set up manufacturing equipment, performed machine checks and adjustments, inspected parts, and supported changeovers and production documentation.",
    tags: ["Equipment support", "Process quality"],
  },
];

const skills = [
  {
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
  return <span aria-hidden="true" className="arrow">↗</span>;
}

export default function Home() {
  return (
    <>
      <MotionEffects />
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a href="#" className="wordmark" aria-label="Leo Ho, home">leo<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a><a href="#experience">Experience</a><a href="#publications">Publications</a><a href="#skills">Skills</a>
        </nav>
        <a className="nav-contact" href="#contact">Let’s connect <Arrow /></a>
      </header>
      <main id="main">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">QUOC (LEO) HO</p>
            <h1 id="hero-title"><span className="title-line">Curiosity,</span><span className="title-line accent">made tangible.</span></h1>
            <p className="hero-description">Exploring the space between thoughtful interfaces, computer vision, and the physical world.</p>
            <div className="hero-actions"><a className="button primary" href="#selected-work">Explore the work <Arrow /></a><a className="text-link" href="/Quoc_Ho_Resume.pdf" target="_blank" rel="noopener noreferrer">Résumé <span className="file-type">PDF</span></a></div>
          </div>
          <HeroArt />
        </section>

        <section id="selected-work" className="showcase section container" aria-labelledby="work-title">
          <div className="showcase-heading" data-reveal><p className="section-label">Selected explorations</p><h2 id="work-title">A place for ideas<br /><span>to take shape.</span></h2><p>Some built to be useful. Some made to be explored.</p></div>
          <div className="showcase-grid">
            <article className="study-project" data-reveal>
              <FormStudy />
              <div className="project-caption"><div><p className="project-type">Creative coding</p><h3>Form & flow</h3></div><p>A live study of shape and motion.<br />Change the form. Find your perspective.</p></div>
            </article>
            <article className="portfolio-project" data-reveal>
              <a className="portfolio-preview" href="#main" aria-label="Revisit the portfolio homepage"><Image src="/images/portfolio-preview.webp" alt="A preview of this portfolio’s airy typography and blue optical artwork" width={1200} height={900} sizes="(max-width: 767px) 100vw, 40vw" /></a>
              <div className="project-caption"><div><p className="project-type">Design & development</p><h3>A different perspective</h3></div></div>
              <p className="project-description">This portfolio. An exploration of space, light, and small details that make an interface feel alive.</p>
              <details className="build-details"><summary>Behind the design<span className="disclosure-mark" aria-hidden="true" /></summary><p>Built with Next.js, TypeScript, and Motion. Original artwork, a live canvas study, responsive composition, and considered keyboard and reduced-motion behavior.</p></details>
            </article>
          </div>
        </section>

        <div className="background-section container section">
          <section id="about" aria-labelledby="about-title" data-reveal>
            <p className="section-label">The person behind the pixels</p>
            <h2 id="about-title">An eye for detail.<br /><span>A mind for<br className="wide-break" /> how things work.</span></h2>
            <div className="about-copy"><p>I’m Leo, a computer science graduate who moves between vision systems, applied research, and the craft of building for the web.</p><p>I like understanding a problem deeply, then making the solution feel simple.</p><a className="text-link" href="https://www.linkedin.com/in/quocleoho/" target="_blank" rel="noopener noreferrer">More about me <Arrow /></a></div>
          </section>
          <section id="experience" className="experience-compact" aria-labelledby="experience-title" data-reveal>
            <p className="section-label">Experience</p><h2 id="experience-title">Grounded in<br />the real world.</h2>
            <div className="current-roles">{experience.filter(job => job.current).map(job => <div className="current-role" key={job.role}><p>{job.company}</p><h3>{job.role}</h3><span>{job.period}</span></div>)}</div>
            <details className="experience-details"><summary>Experience & background<span className="disclosure-mark" aria-hidden="true" /></summary>
              <div className="full-experience">{experience.map(job => <article key={job.role}><p className="company">{job.company}</p><h3>{job.role}</h3><p className="job-meta">{job.period} · {job.location}</p><p>{job.description}</p>{job.details && <ul>{job.details.map(detail => <li key={detail}>{detail}</li>)}</ul>}<div className="tags">{job.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div>
              <div className="education"><h3>B.S. in Computer Science</h3><p>Grand Valley State University · December 2025</p><p>Minor in Mathematics. GPA 3.72. Dean’s List.</p></div>
            </details>
          </section>
        </div>

        <div className="research-skills container section">
          <section id="publications" className="research-project" aria-labelledby="publications-title" data-reveal>
            <div className="research-heading"><p className="section-label">Published research</p><h2 id="publications-title">Making more<br /><span>from less.</span></h2></div>
            <div className="research-copy"><p className="publication-meta">ACM · <time dateTime="2026-07-29">July 29, 2026</time></p><h3>Efficient Layout-Aware Document Understanding for Educational Transcripts via Systematic Model Compression</h3><p>Exploring more efficient document-understanding models through distillation, pruning, and quantization.</p><a className="text-link" href="https://dl.acm.org/doi/10.1145/3815970.3815979" target="_blank" rel="noopener noreferrer">Read the publication <Arrow /></a><p className="publication-doi">DOI: 10.1145/3815970.3815979</p></div>
          </section>
          <section id="skills" className="skills-section" aria-labelledby="skills-title" data-reveal>
            <p className="section-label">Skills</p><h2 id="skills-title">A practical<br /><span>kind of curious.</span></h2>
            <div className="skills-list">{skills.map(group => <details className="skill-group" key={group.name}><summary><h3>{group.name}</h3><span className="disclosure-mark" aria-hidden="true" /></summary><p>{group.description}</p><div className="tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></details>)}</div>
          </section>
        </div>

        <section id="contact" className="contact section" aria-labelledby="contact-title" data-reveal>
          <div className="container"><p className="section-label">Good things start with a conversation.</p><a className="contact-title-link" href="mailto:quocleoho362@gmail.com"><h2 id="contact-title">Have an idea?<br /><span>Let’s make it real.</span></h2><span className="contact-arrow" aria-hidden="true">↗</span></a><div className="contact-bottom"><a className="email-link" href="mailto:quocleoho362@gmail.com">quocleoho362@gmail.com</a><div className="social-links"><a href="https://www.linkedin.com/in/quocleoho/" target="_blank" rel="noopener noreferrer">LinkedIn <Arrow /></a><a href="https://github.com/leo3622" target="_blank" rel="noopener noreferrer">GitHub <Arrow /></a><a href="/Quoc_Ho_Resume.docx" download>Résumé (DOCX) <Arrow /></a><a href="tel:+16162517124">616.251.7124 <Arrow /></a></div></div></div>
        </section>
      </main>
      <footer className="container"><a className="wordmark" href="#" aria-label="Leo Ho, home">leo<span>.</span></a><p>© {new Date().getFullYear()} Quoc (Leo) Ho · Holland, Michigan</p><a href="#">Back to top <span aria-hidden="true">↑</span></a></footer>
    </>
  );
}
