import React, { useEffect, useState } from "react";

import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Mail,
  Menu,
  X,
  LayoutTemplate,
  Palette,
  PenTool,
  PanelsTopLeft,
  Smartphone,
  Users,
  Sun,
  Moon,
} from "lucide-react";
import "./styles.css";

const projects = [
  [
    "Bitcoin Mining Website",
    "ventusmine-intro.jpg",
    "ventusmine-full.jpg",
    ["UI Design", "Responsive Web"],
  ],
  [
    "Payment System Website",
    "payco-intro.jpg",
    "payco-full.jpg",
    ["UI/UX", "Web Application"],
  ],
  [
    "Trading Platform Website",
    "solotrader-intro.jpg",
    "solotrader-full.jpg",
    ["Dashboard UX", "Responsive UI"],
  ],
  [
    "E-commerce Website",
    "fw1-intro.jpg",
    "fw1-full.jpg",
    ["E-commerce UX", "UI Design"],
  ],
  [
    "Forex Dashboard",
    "stdash-intro.jpg",
    "stdash-full.jpg",
    ["Dashboard UX", "Data Visualization"],
  ],
  [
    "Chat System Website",
    "typochat-intro.jpg",
    "typochat-full.jpg",
    ["UI/UX", "Web Application"],
  ],
];
const skills = [
  [PenTool, "UI Design", ["Visual Design", "Design Systems", "Component Libraries", "Typography"]],
  [Users, "UX Design", ["User Flows", "Wireframing", "Information Architecture", "Usability"]],
  [LayoutTemplate, "Prototyping", ["Low-Fidelity", "High-Fidelity", "Interactive Prototypes", "Design Handoff"]],
  [Smartphone, "Responsive Design", ["Web", "Mobile", "Adaptive Layouts", "Accessibility"]],
  [PanelsTopLeft, "Product Design", ["Complex Workflows", "Dashboards", "Enterprise UI", "Data-Heavy Interfaces"]],
  [Palette, "Design Craft", ["Figma", "Adobe Creative Suite", "Visual Direction", "Design QA"]],
];

function App() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(null);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;

    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark",
    );
  };

  return (
    <>
      <header>
        <a className="brand brand-logo" href="#home" aria-label="Mark Lachica - Home">
          <picture>
            <source
              srcSet="/img/brand/mlogo-light.png"
              media="(prefers-color-scheme: light)"
            />
            <img
              src={theme === "dark"
                ? "/img/brand/mlogo-dark.png"
                : "/img/brand/mlogo-light.png"}
              alt="Mark Lachica"
            />
          </picture>
        </a>
        <nav className={menu ? "open" : ""}>
          {["about", "work", "skills", "contact"].map((x) => (
            <a key={x} href={"#" + x} onClick={() => setMenu(false)}>
              {x}
            </a>
          ))}
          <a className="nav-cta" href="#contact">
            Let's talk
          </a>
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
          className="menu"
          onClick={() => setMenu(!menu)}
          aria-label="Menu"
        >
          {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main>
        <section className="hero" id="home">
          <div className="hero-glow"></div>
          <div className="eyebrow">
            <i></i> Senior UI/UX Designer • Product & Experience Design
          </div>
          <h1>
            I design digital experiences that are{" "}
            <em>clear, intuitive & purposeful.</em>
          </h1>
          <p className="lead">
            Hi, I'm <b>Mark Lachica</b> — a Senior UI/UX Designer focused on
            transforming complex requirements into intuitive interfaces, thoughtful
            user journeys, and polished digital products.
          </p>
          <div className="hero-actions">
            <a className="primary" href="#work">
              View my work <ArrowUpRight size={18} />
            </a>
            <a className="secondary" href="#about">
              More about me
            </a>
          </div>
          <div className="hero-meta">
            <span>Based in the Philippines</span>
            <span>•</span>
            <span>Senior UI/UX Design</span>
            <span>•</span>
            <span>Product Design</span>
          </div>
        </section>
        <section id="about" className="section about">
          <div>
            <div className="kicker">01 / ABOUT</div>
            <h2>Designing products people can understand and enjoy using.</h2>
          </div>
          <div className="about-copy">
            <p>
              I'm a Senior UI/UX Designer who turns complex business needs into
              <strong> clear, intuitive and visually refined experiences</strong>. I
              focus on understanding the problem first, then shaping interfaces and
              user journeys that make digital products easier to use.
            </p>
            <p>
              My work spans product thinking, user flows, wireframes, high-fidelity UI,
              responsive design, prototyping and design systems — with a strong focus
              on usability, consistency and practical outcomes for real users.
            </p>
            <div className="stats">
              <div>
                <b>User-centered</b>
                <small>Design approach</small>
              </div>
              <div>
                <b>Responsive</b>
                <small>Web & mobile design</small>
              </div>
              <div>
                <b>Systems</b>
                <small>Scalable design thinking</small>
              </div>
            </div>
          </div>
        </section>
        <section id="work" className="section">
          <div className="section-head">
            <div>
              <div className="kicker">02 / SELECTED WORK</div>
              <h2>Selected interface design work.</h2>
            </div>
            <p>
              A selection of interface and product design work across websites,
              dashboards and digital platforms. Click a project to explore the design.
            </p>
          </div>
          <div className="projects">
            {projects.map((p, i) => (
              <button
                className="project"
                key={p[0]}
                onClick={() => setActive(p)}
              >
                <div className="shot">
                  <img src={"/img/works/" + p[1]} alt="" />
                  <span>
                    View project <ArrowUpRight size={16} />
                  </span>
                </div>
                <div className="project-info">
                  <small>0{i + 1}</small>
                  <h3>{p[0]}</h3>
                  <div>
                    {p[3].map((t) => (
                      <i key={t}>{t}</i>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>
        <section id="skills" className="section">
          <div className="section-head">
            <div>
              <div className="kicker">03 / DESIGN EXPERTISE</div>
              <h2>How I shape digital experiences.</h2>
            </div>
            <p>
              Core UI/UX disciplines I use to turn complex requirements into
              usable, consistent and polished product experiences.
            </p>
          </div>
          <div className="skills">
            {skills.map(([Icon, title, tags]) => (
              <article key={title}>
                <Icon />
                <h3>{title}</h3>
                <div>
                  {tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="contact" className="contact">
          <div className="kicker">04 / CONTACT</div>
          <h2>
            Have a product or experience to improve?
            <br />
            <em>Let's design it thoughtfully.</em>
          </h2>
          <p>
            I'm always interested in thoughtful products, complex UX challenges,
            design systems, and opportunities to create better digital experiences.
          </p>
          <a className="primary" href="mailto:lmarkpaulo@gmail.com">
            Send me an email <Mail size={18} />
          </a>
        </section>
      </main>
      <footer>
        <a className="brand brand-logo" href="#home" aria-label="Mark Lachica - Home">
          <img
            src={theme === "dark"
              ? "/img/brand/mlogo-dark.png"
              : "/img/brand/mlogo-light.png"}
            alt="Mark Lachica"
          />
        </a>
        <p>Designed by Mark Lachica • Senior UI/UX Designer.</p>
        <div>
          <a
            href="https://github.com/marklachica"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/mark-paulo-lachica-34268b170/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
      {active && (
        <div className="modal" onClick={() => setActive(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActive(null)}>
              <X />
            </button>
            <div>
              <small>SELECTED WORK</small>
              <h2>{active[0]}</h2>
            </div>
            <img src={"/img/works/" + active[2]} alt={active[0]} />
          </div>
        </div>
      )}
    </>
  );
}
createRoot(document.getElementById("root")).render(<App />);