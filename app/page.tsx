"use client";

import { useState } from "react";

const navigation = [
  ["Home", "home"],
  ["About", "about"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["Blog", "blog"],
  ["Contact", "contact"],
] as const;

const projects = [
  {
    type: "analytics",
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with customizable widgets and advanced filtering.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
  },
  {
    type: "collab",
    title: "Project Management App",
    description: "Task management application with team collaboration and file sharing.",
    tags: ["Next.js", "Supabase", "Tailwind CSS", "Zustand"],
  },
  {
    type: "commerce",
    title: "E-commerce Store",
    description: "Modern e-commerce platform with cart, checkout and order management.",
    tags: ["Next.js", "Stripe", "Tailwind CSS", "Framer Motion"],
  },
];

const skills = [
  ["React", "react", "#19aee5"],
  ["Next.js", "next", "#111111"],
  ["TypeScript", "ts", "#3178c6"],
  ["JavaScript", "js", "#f0c500"],
  ["Tailwind CSS", "tw", "#38bdf8"],
  ["HTML5", "html", "#ee6335"],
  ["CSS3", "css", "#397bdc"],
  ["Git", "git", "#ed4d34"],
  ["GitHub", "github", "#111111"],
  ["Figma", "figma", "#f14d8a"],
  ["Supabase", "supabase", "#23b47e"],
  ["Vercel", "vercel", "#111111"],
  ["PostgreSQL", "postgres", "#3b6d99"],
] as const;

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span className={diagonal ? "arrow arrow-diagonal" : "arrow"} aria-hidden="true">→</span>;
}

function ProjectVisual({ type }: { type: string }) {
  if (type === "collab") {
    return (
      <div className="project-visual visual-collab" aria-hidden="true">
        <div className="collab-top"><span>●</span><span>◌</span><span>◌</span><span className="mini-pill">Team space</span></div>
        <div className="collab-content"><div className="collab-copy"><small>Ship faster</small><strong>with better collaboration</strong><i /><i /></div><div className="collab-panel"><b>WORKSPACE</b><span /><span /><span /><span /></div></div>
      </div>
    );
  }
  if (type === "commerce") {
    return (
      <div className="project-visual visual-commerce" aria-hidden="true">
        <div className="commerce-nav"><b>●</b><span>New arrivals</span><span>Furniture</span><span>Journal</span><em>⌕ ♧</em></div>
        <div className="commerce-hero"><small>CHAIRS / 2024</small><strong>Form follows<br />function.</strong><div className="chair chair-one" /><div className="chair chair-two" /></div>
      </div>
    );
  }
  return (
    <div className="project-visual visual-analytics" aria-hidden="true">
      <div className="analytics-top"><b>⌘ dashboard</b><span>Overview  Reports  Teams  ◉</span></div>
      <div className="analytics-body"><aside><i /><i /><i /><i /><i /></aside><main><div className="chart-row"><div><small>Revenue</small><strong>$24,850</strong><span>↗ 12.4%</span></div><div><small>Visitors</small><strong>18,240</strong><span>↗ 8.2%</span></div><div className="pie"><small>Traffic</small><div /></div></div><div className="line-chart"><span /><span /><span /><span /><span /><span /><span /></div></main></div>
    </div>
  );
}

function SkillIcon({ kind, color }: { kind: string; color: string }) {
  return <span className={`skill-icon icon-${kind}`} style={{ color }} aria-hidden="true">{kind === "ts" ? "Ts" : kind === "js" ? "JS" : kind === "html" ? "5" : kind === "css" ? "3" : kind === "github" ? "●" : kind === "next" ? "N" : kind === "postgres" ? "◉" : kind === "react" ? "✣" : kind === "tw" ? "≈" : kind === "git" ? "◆" : kind === "figma" ? "✣" : kind === "supabase" ? "↯" : "▲"}</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className={`site-header ${menuOpen ? "menu-is-open" : ""}`}>
        <a className="brand" href="#home" onClick={closeMenu}>JA<span>.</span></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <a className="header-cta" href="#contact">Let&apos;s connect <Arrow /></a>
        <button className="menu-button" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}><span /><span /><span /></button>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{navigation.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}<Arrow /></a>)}<a className="mobile-contact" href="mailto:hello@johnryatienza.dev" onClick={closeMenu}>Start a conversation <Arrow /></a></nav>}
      </header>

      <section className="hero" id="home">
        <div className="hero-photo" aria-hidden="true"><div className="hero-person"><i className="person-head" /><i className="person-body" /><i className="person-arm" /><i className="person-legs" /></div><div className="hero-horizon" /></div>
        <div className="hero-content page-width">
          <p className="eyebrow">Hi, I&apos;m</p>
          <h1>Johnry Atienza</h1>
          <p className="hero-role">Frontend Developer</p>
          <p className="hero-copy">I build modern, responsive, and user-centric web applications with clean code and great experience.</p>
          <div className="hero-actions"><a className="button button-dark" href="#projects">View my work <Arrow /></a><a className="button button-light" href="#contact">Download CV <span aria-hidden="true">⇩</span></a></div>
          <div className="social-links" aria-label="Social links"><a href="https://github.com" aria-label="GitHub">●</a><a href="https://linkedin.com" aria-label="LinkedIn">in</a><a href="mailto:hello@johnryatienza.dev" aria-label="Email">✉</a></div>
        </div>
        <div className="hero-scroll"><span>Scroll</span><b>＋</b></div>
        <div className="hero-dots" aria-hidden="true"><i className="active" /><i /><i /><i /></div>
      </section>

      <section className="intro-section page-width" id="about">
        <div className="intro-lead"><p className="section-kicker">About me</p><h2>Crafting digital<br />experiences that<br />make an <em>impact.</em></h2><p>I&apos;m a passionate developer who loves turning ideas into interactive solutions. I focus on performance, accessibility and clean code.</p><a className="text-button" href="#contact">More about me <Arrow /></a></div>
        <div className="objective-grid"><div className="objective-main"><span className="feature-symbol">◎</span><div><p className="section-kicker">Objective</p><p>To leverage my skills in building scalable and efficient web applications while continuously learning and contributing to innovative projects that create real value for users and businesses.</p></div></div><div className="trait"><span className="trait-icon">♧</span><div><strong>Problem Solver</strong><p>I enjoy solving complex problems with simple, elegant solutions.</p></div></div><div className="trait"><span className="trait-icon">◉</span><div><strong>Detail Oriented</strong><p>I pay attention to details that create intuitive and seamless experiences.</p></div></div><div className="trait"><span className="trait-icon">⌁</span><div><strong>Continuous Learner</strong><p>I stay up-to-date with modern technologies and best practices.</p></div></div></div>
      </section>

      <section className="projects-section" id="projects"><div className="page-width"><div className="section-heading"><div><p className="section-kicker">Featured projects</p><h2>Things I&apos;ve Built</h2></div><a className="button button-dark desktop-only" href="#contact">View all projects <Arrow /></a><a className="view-all-mobile" href="#contact">View All <Arrow /></a></div><div className="project-grid">{projects.map((project) => <article className="project-card" key={project.title}><ProjectVisual type={project.type} /><div className="project-card-body"><div className="project-title-row"><h3>{project.title}</h3><Arrow diagonal /></div><p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div><div className="carousel-dots" aria-label="Project carousel"><i className="active" /><i /><i /></div></div></section>

      <section className="career-section page-width" id="experience"><div className="section-heading"><div><p className="section-kicker">Experience</p><h2>Where I&apos;ve Worked</h2></div><a className="view-all-mobile" href="#contact">View full experience <Arrow /></a></div><div className="timeline">{[["S", "Solute Digital", "Senior Frontend Developer", "2023 — Present", "Lead frontend development for multiple projects using React, Next.js and TypeScript. Mentored junior developers and improved performance."], ["W", "WebCraft Studio", "Frontend Developer", "2021 — 2023", "Built responsive websites and web applications for clients across different industries. Focused on performance and SEO."], ["D", "Dev Solutions", "Junior Web Developer", "2019 — 2021", "Developed and maintained websites using HTML, CSS, JavaScript and PHP. Collaborated with designers and backend developers."], ["F", "Freelance", "Web Developer", "2016 — 2019", "Worked on various freelance projects ranging from landing pages to full website implementations."]].map(([initial, company, role, years, copy]) => <article className="timeline-item" key={company}><div className="timeline-marker">{initial}</div><div><h3>{company}</h3><p className="role">{role}</p><p className="years">{years}</p><p>{copy}</p></div></article>)}</div></section>

      <section className="skills-section page-width" id="skills"><div className="section-heading"><div><p className="section-kicker">My skills</p><h2>Technologies I Use</h2></div></div><div className="skills-grid">{skills.map(([label, kind, color]) => <div className={`skill-card ${kind === "postgres" ? "wide-skill" : ""}`} key={label}><SkillIcon kind={kind} color={color} /><span>{label}</span></div>)}</div></section>

      <section className="contact-section" id="contact"><div className="contact-backdrop" aria-hidden="true" /><div className="contact-content"><p className="section-kicker">Let&apos;s work together</p><h2>Have a project in mind?</h2><p>I&apos;m currently open for new opportunities and exciting projects.<br />Let&apos;s build something great together.</p><a className="button button-dark" href="mailto:hello@johnryatienza.dev">Get in touch <Arrow /></a></div></section>

      <section className="contact-details page-width" id="blog"><div><p className="section-kicker">Get in touch</p><a href="mailto:hello@johnryatienza.dev">✉ <span>hello@johnryatienza.dev</span></a><a href="tel:+639123456789">⌕ <span>+63 912 345 6789</span></a><a href="#contact">⌖ <span>Philippines</span></a><a href="#contact">◷ <span>Available for new projects</span></a></div><div className="details-note"><p className="section-kicker">A few words</p><h3>Good work starts<br />with a good conversation.</h3><p>Have an idea, a challenge, or a blank canvas? I&apos;d love to hear what you&apos;re working on.</p></div></section>

      <footer className="site-footer page-width"><a className="brand" href="#home">JA<span>.</span></a><p>© 2025 Johnry Atienza. All rights reserved.</p><div className="social-links"><a href="https://github.com" aria-label="GitHub">●</a><a href="https://linkedin.com" aria-label="LinkedIn">in</a><a href="mailto:hello@johnryatienza.dev" aria-label="Email">✉</a></div></footer>
    </main>
  );
}
