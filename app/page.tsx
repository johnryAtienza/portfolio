"use client";

import { useEffect, useRef, useState } from "react";

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

function SocialIcon({ kind }: { kind: "github" | "linkedin" | "email" }) {
  if (kind === "github") {
    return <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.5-2.8 5.5-5.4 5.8.4.3.8 1 .8 2v2.9c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z" /></svg>;
  }
  if (kind === "linkedin") {
    return <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5.2 3.5a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2ZM3.4 9h3.6v11.5H3.4V9Zm5.8 0h3.4v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6v6.2H17v-5.5c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.6H9.2V9Z" /></svg>;
  }
  return <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M2.5 5.2h19v13.6h-19V5.2Zm1.9 2v9.6h15.2V7.2l-7.6 5.5-7.6-5.5Zm1.7-.1 5.9 4.2 5.9-4.2H6.1Z" /></svg>;
}

function ObjectiveIcon({ type }: { type: "objective" | "problem" | "detail" | "learning" }) {
  const iconProps = { className: "objective-icon", viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: 2.2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

  if (type === "objective") {
    return <svg {...iconProps}><circle cx="24" cy="24" r="16" /><circle cx="24" cy="24" r="10" /><circle cx="24" cy="24" r="4" /><path d="m24 24 12-12" /><path d="M30 12h6v6" /></svg>;
  }
  if (type === "problem") {
    return <svg {...iconProps}><path d="M10 10h8.5c0-2.8 2.2-5 5-5s5 2.2 5 5H37v8.5c2.8 0 5 2.2 5 5s-2.2 5-5 5V37h-8.5c0 2.8-2.2 5-5 5s-5-2.2-5-5H10v-8.5c-2.8 0-5-2.2-5-5s2.2-5 5-5V10Z" /></svg>;
  }
  if (type === "detail") {
    return <svg {...iconProps}><path d="M4 24s7-10 20-10 20 10 20 10-7 10-20 10S4 24 4 24Z" /><circle cx="24" cy="24" r="5" /><circle cx="24" cy="24" r="1" /></svg>;
  }
  return <svg {...iconProps}><path d="M8 38V29h7v9M20 38V23h7v15M32 38V17h7v21" /><path d="M8 24 18 18l6 3 12-11" /><path d="M29 10h7v7" /></svg>;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function useMotionEffects() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;

    root.classList.add("motion-ready");

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileViewport = window.matchMedia("(max-width: 900px)");
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const lowPowerDevice = (navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 4) || connection?.saveData === true;
    const revealElements = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    const parallaxElements = Array.from(root.querySelectorAll<HTMLElement>("[data-parallax-speed]"));
    const hero = root.querySelector<HTMLElement>(".hero");
    const heroContent = root.querySelector<HTMLElement>("[data-hero-content]");
    let frame = 0;

    const revealObserver = reducedMotion.matches
      ? undefined
      : new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver?.unobserve(entry.target);
          }
        });
      }, { rootMargin: "0px 0px -12% 0px", threshold: 0.12 });

    if (revealObserver) {
      revealElements.forEach((element) => revealObserver.observe(element));
    } else {
      revealElements.forEach((element) => element.classList.add("is-visible"));
    }

    const updateMotion = () => {
      frame = 0;
      const parallaxDisabled = reducedMotion.matches || mobileViewport.matches || lowPowerDevice;

      if (parallaxDisabled) {
        parallaxElements.forEach((element) => element.style.setProperty("--parallax-y", "0px"));
        if (heroContent) {
          heroContent.style.opacity = "";
          heroContent.style.transform = "";
        }
        return;
      }

      const viewportCenter = window.innerHeight / 2;
      parallaxElements.forEach((element) => {
        const section = element.closest<HTMLElement>("[data-parallax-section]");
        if (!section) return;
        const bounds = section.getBoundingClientRect();
        const distanceFromCenter = (bounds.top + bounds.height / 2 - viewportCenter) / window.innerHeight;
        const speed = Number(element.dataset.parallaxSpeed ?? 0);
        const offset = clamp(distanceFromCenter * speed * 120, -42, 42);
        element.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
      });

      if (hero && heroContent) {
        const bounds = hero.getBoundingClientRect();
        const progress = clamp(-bounds.top / (bounds.height * 0.72), 0, 1);
        heroContent.style.opacity = (1 - progress * 0.5).toFixed(3);
        heroContent.style.transform = `translate3d(0, ${(-progress * 26).toFixed(2)}px, 0)`;
      }
    };

    const scheduleMotion = () => {
      if (!frame) frame = window.requestAnimationFrame(updateMotion);
    };

    window.addEventListener("scroll", scheduleMotion, { passive: true });
    window.addEventListener("resize", scheduleMotion);
    updateMotion();

    return () => {
      revealObserver?.disconnect();
      window.removeEventListener("scroll", scheduleMotion);
      window.removeEventListener("resize", scheduleMotion);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return mainRef;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const mainRef = useMotionEffects();

  const closeMenu = () => setMenuOpen(false);

  return (
    <main ref={mainRef}>
      <header className={`site-header ${menuOpen ? "menu-is-open" : ""}`}>
        <a className="brand" href="#home" onClick={closeMenu}>JA<span>.</span></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <a className="header-cta" href="#contact">Let&apos;s connect <Arrow /></a>
        <button className="menu-button" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}><span /><span /><span /></button>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{navigation.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}<Arrow /></a>)}<a className="mobile-contact" href="mailto:hello@johnryatienza.dev" onClick={closeMenu}>Start a conversation <Arrow /></a></nav>}
      </header>

      <section className="hero" id="home" data-parallax-section>
        <div className="hero-photo" aria-hidden="true"><div className="hero-ray-layer" data-parallax-speed="0.08" /><div className="hero-fog-layer" data-parallax-speed="0.16" /><div className="hero-mountain-layer" data-parallax-speed="0.28" /><div className="hero-person"><i className="person-head" /><i className="person-body" /><i className="person-arm" /><i className="person-legs" /></div><div className="hero-horizon" /></div>
        <div className="hero-content page-width" data-hero-content>
          <p className="eyebrow">Hi, I&apos;m</p>
          <h1>Johnry Atienza</h1>
          <p className="hero-role">Frontend Developer</p>
          <p className="hero-copy">I build modern, responsive, and user-centric web applications with clean code and great experience.</p>
          <div className="hero-actions"><a className="button button-dark" href="#projects">View my work <Arrow /></a><a className="button button-light" href="#contact">Download CV <span className="download-icon" aria-hidden="true">⇩</span></a></div>
          <div className="social-links" aria-label="Social links"><a href="https://github.com" aria-label="GitHub"><SocialIcon kind="github" /></a><a href="https://linkedin.com" aria-label="LinkedIn"><SocialIcon kind="linkedin" /></a><a href="mailto:hello@johnryatienza.dev" aria-label="Email"><SocialIcon kind="email" /></a></div>
        </div>
        <div className="hero-scroll"><span>Scroll</span><b>＋</b></div>
        <div className="hero-dots" aria-hidden="true"><i className="active" /><i /><i /><i /></div>
      </section>

      <section className="intro-section page-width" id="about">
        <div className="intro-lead" data-reveal><p className="section-kicker">About me</p><h2>Crafting digital<br />experiences that<br />make an <em>impact.</em></h2><p>I&apos;m a passionate developer who loves turning ideas into interactive solutions. I focus on performance, accessibility and clean code.</p><a className="text-button" href="#contact">More about me <Arrow /></a></div>
        <div className="objective-grid"><div className="objective-main" data-reveal><ObjectiveIcon type="objective" /><div><p className="section-kicker">Objective</p><p>To leverage my skills in building scalable and efficient web applications while continuously learning and contributing to innovative projects that create real value for users and businesses.</p></div></div><div className="trait" data-reveal data-reveal-delay="1"><ObjectiveIcon type="problem" /><div><strong>Problem Solver</strong><p>I enjoy solving complex problems with simple, elegant solutions.</p></div></div><div className="trait" data-reveal data-reveal-delay="2"><ObjectiveIcon type="detail" /><div><strong>Detail Oriented</strong><p>I pay attention to details that create intuitive and seamless experiences.</p></div></div><div className="trait" data-reveal data-reveal-delay="3"><ObjectiveIcon type="learning" /><div><strong>Continuous Learner</strong><p>I stay up-to-date with modern technologies and best practices.</p></div></div></div>
      </section>

      <section className="projects-section" id="projects"><div className="page-width"><div className="section-heading"><div><p className="section-kicker">Featured projects</p><h2>Things I&apos;ve Built</h2></div><a className="button button-dark project-cta" href="#contact">View all projects <Arrow /></a></div><div className="project-grid">{projects.map((project, index) => <article className="project-card" data-reveal data-reveal-delay={index} key={project.title}><ProjectVisual type={project.type} /><div className="project-card-body"><div className="project-title-row"><h3>{project.title}</h3><Arrow diagonal /></div><p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div><div className="carousel-dots" aria-label="Project carousel"><i className="active" /><i /><i /></div></div></section>

      <section className="career-section page-width" id="experience"><div className="section-heading"><div><p className="section-kicker">Experience</p><h2>Where I&apos;ve Worked</h2></div><a className="view-all-mobile" href="#contact">View full experience <Arrow /></a></div><div className="timeline"><div className="timeline-line" data-reveal aria-hidden="true" />{[["S", "Solute Digital", "Senior Frontend Developer", "2023 — Present", "Lead frontend development for multiple projects using React, Next.js and TypeScript. Mentored junior developers and improved performance."], ["W", "WebCraft Studio", "Frontend Developer", "2021 — 2023", "Built responsive websites and web applications for clients across different industries. Focused on performance and SEO."], ["D", "Dev Solutions", "Junior Web Developer", "2019 — 2021", "Developed and maintained websites using HTML, CSS, JavaScript and PHP. Collaborated with designers and backend developers."], ["F", "Freelance", "Web Developer", "2016 — 2019", "Worked on various freelance projects ranging from landing pages to full website implementations."]].map(([initial, company, role, years, copy], index) => <article className="timeline-item" data-reveal data-reveal-delay={index} key={company}><div className="timeline-marker">{initial}</div><div><h3>{company}</h3><p className="role">{role}</p><p className="years">{years}</p><p>{copy}</p></div></article>)}</div></section>

      <section className="skills-section page-width" id="skills"><div className="section-heading"><div><p className="section-kicker">My skills</p><h2>Technologies I Use</h2></div></div><div className="skills-grid">{skills.map(([label, kind, color]) => <div className={`skill-card ${kind === "postgres" ? "wide-skill" : ""}`} key={label}><SkillIcon kind={kind} color={color} /><span>{label}</span></div>)}</div></section>

      <section className="contact-section" id="contact" data-parallax-section><div className="contact-backdrop" data-parallax-speed="0.12" aria-hidden="true" /><div className="contact-fog-layer" data-parallax-speed="0.2" aria-hidden="true" /><div className="contact-content"><p className="section-kicker">Let&apos;s work together</p><h2>Have a project in mind?</h2><p>I&apos;m currently open for new opportunities and exciting projects.<br />Let&apos;s build something great together.</p><a className="button button-dark" href="mailto:hello@johnryatienza.dev">Get in touch <Arrow /></a></div></section>

      <section className="contact-details page-width" id="blog"><div><p className="section-kicker">Get in touch</p><a href="mailto:hello@johnryatienza.dev">✉ <span>hello@johnryatienza.dev</span></a><a href="tel:+639123456789">⌕ <span>+63 912 345 6789</span></a><a href="#contact">⌖ <span>Philippines</span></a><a href="#contact">◷ <span>Available for new projects</span></a></div><div className="details-note"><p className="section-kicker">A few words</p><h3>Good work starts<br />with a good conversation.</h3><p>Have an idea, a challenge, or a blank canvas? I&apos;d love to hear what you&apos;re working on.</p></div></section>

      <footer className="site-footer page-width"><a className="brand" href="#home">JA<span>.</span></a><p>© {new Date().getFullYear()} Johnry Atienza. All rights reserved.</p><div className="social-links"><a href="https://github.com" aria-label="GitHub"><SocialIcon kind="github" /></a><a href="https://linkedin.com" aria-label="LinkedIn"><SocialIcon kind="linkedin" /></a><a href="mailto:hello@johnryatienza.dev" aria-label="Email"><SocialIcon kind="email" /></a></div></footer>
    </main>
  );
}
