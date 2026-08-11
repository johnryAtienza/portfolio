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
  ["TypeScript", "ts", "#3178c6"],
  ["JavaScript", "js", "#f0c500"],
  ["Next.js", "next", "#111111"],
  ["Node.js", "node", "#43853d"],
  ["Express.js", "express", "#111111"],
  ["Material UI", "material", "#007fff"],
  ["AngularJS", "angular", "#dd0031"],
  ["Vue.js", "vue", "#42b883"],
  ["React Native", "native", "#61dafb"],
  ["PHP", "php", "#777bb4"],
  ["MySQL", "mysql", "#4479a1"],
  ["jQuery", "jquery", "#0769ad"],
  ["Google Maps API", "maps", "#34a853"],
  ["WordPress", "wordpress", "#21759b"],
  ["Strapi", "strapi", "#4945ff"],
  ["Shopify", "shopify", "#95bf47"],
  ["HubSpot", "hubspot", "#ff7a59"],
  ["Zapier", "zapier", "#ff4f00"],
  ["AWS", "aws", "#ff9900"],
  ["Vercel", "vercel", "#111111"],
  ["Google Cloud", "gcp", "#4285f4"],
  ["Jenkins", "jenkins", "#d24939"],
  ["Figma", "figma", "#f14d8a"],
  ["Webpack", "webpack", "#8ed6fb"],
  ["HTML5", "html", "#ee6335"],
  ["CSS3", "css", "#397bdc"],
] as const;

const experience = [
  ["E", "Ezygos Global Services", "Sr. Frontend Developer", "September 2025 — Present", "Builds responsive React interfaces, reusable components, and API-driven experiences. Focuses on performance, analytics, testing, and cross-team delivery."],
  ["M", "Medilink", "Sr. Frontend Developer", "August 2023 — June 2025", "Improved a React and TypeScript product with Material UI, Node.js APIs, and Figma-based UI delivery. Led code reviews and maintained a consistent visual system."],
  ["G", "Gro Clinics", "Sr. Frontend Developer", "January 2023 — August 2023", "Built healthcare web experiences with React, Next.js, Node.js, and headless CMS tools. Supported CRM, Shopify, and workflow automation across the business."],
  ["U", "Upraxis Global Limited", "Team Lead, Front-End Developer", "June 2019 — December 2022", "Led front-end delivery across AngularJS, Vue, React/Next.js, and React Native projects. Mentored teammates and helped teams ship quality software in an Agile environment."],
  ["I", "Inteluck Corporation", "JavaScript/UX Developer", "September 2014 — May 2019", "Developed tracking systems and reusable libraries with JavaScript, React, Node.js, and Google Maps APIs. Shaped the product UI/UX for vehicle monitoring."],
  ["U", "Una Realidad", "PHP Web Developer", "January 2014 — July 2014", "Built e-commerce experiences with PHP, MySQL, Smarty, jQuery, and CSS3. Translated designs into web pages and handled QA, debugging, and client support."],
  ["M", "Mobext Inc.", "Web Developer", "September 2013 — November 2013", "Delivered responsive PHP websites integrated with Drupal CMS. Converted PSD designs into mobile-ready pages."],
  ["G", "Globalink Holding Corp.", "Programmer", "March 2013 — August 2013", "Maintained service systems and built monitoring, tracking, and client-checking features around business requirements."],
  ["P", "Philippine Navy", "PHP Programmer", "November 2011 — February 2013", "Maintained the Navy website, added PHP features, and trained staff in web development. Built a Java-based telephone and personnel directory."],
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
  const glyphs: Record<string, string> = { ts: "Ts", js: "JS", html: "5", css: "3", next: "N", react: "✣", node: "◆", express: "E", material: "M", angular: "A", vue: "V", native: "✣", php: "P", mysql: "◆", jquery: "jQ", maps: "⌖", wordpress: "W", strapi: "S", shopify: "S", hubspot: "H", zapier: "Z", aws: "▲", vercel: "▲", gcp: "G", jenkins: "J", figma: "✣", webpack: "◆" };
  return <span className={`skill-icon icon-${kind}`} style={{ color }} aria-hidden="true">{glyphs[kind] ?? "•"}</span>;
}

function SocialIcon({ kind }: { kind: "website" | "email" }) {
  if (kind === "website") {
    return <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" /><path fill="none" stroke="currentColor" strokeWidth="1.8" d="M3.5 12h17M12 3c2.5 2.3 3.7 5.3 3.7 9s-1.2 6.7-3.7 9c-2.5-2.3-3.7-5.3-3.7-9S9.5 5.3 12 3Z" /></svg>;
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
  const [experiencePage, setExperiencePage] = useState(0);
  const mainRef = useMotionEffects();
  const experiencePageSize = 4;
  const experiencePageCount = Math.ceil(experience.length / experiencePageSize);

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
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{navigation.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}<Arrow /></a>)}<a className="mobile-contact" href="mailto:johnry.atienza@gmail.com" onClick={closeMenu}>Start a conversation <Arrow /></a></nav>}
      </header>

      <section className="hero" id="home" data-parallax-section>
        <div className="hero-photo" aria-hidden="true"><div className="hero-ray-layer" data-parallax-speed="0.08" /><div className="hero-fog-layer" data-parallax-speed="0.16" /><div className="hero-mountain-layer" data-parallax-speed="0.28" /><div className="hero-person"><i className="person-head" /><i className="person-body" /><i className="person-arm" /><i className="person-legs" /></div><div className="hero-horizon" /></div>
        <div className="hero-content page-width" data-hero-content>
          <p className="eyebrow">Hi, I&apos;m</p>
          <h1>Johnry Atienza</h1>
          <p className="hero-role">Senior Frontend Developer</p>
          <p className="hero-copy">I build efficient, scalable, and maintainable web applications with thoughtful front-end engineering.</p>
          <div className="hero-actions"><a className="button button-dark" href="#projects">View my work <Arrow /></a><a className="button button-light" href="/Johnry-Atienza-CV-2026.pdf" download>Download CV <span className="download-icon" aria-hidden="true">⇩</span></a></div>
          <div className="social-links" aria-label="Social links"><a href="https://johnryatienza.com" aria-label="Personal website"><SocialIcon kind="website" /></a><a href="mailto:johnry.atienza@gmail.com" aria-label="Email"><SocialIcon kind="email" /></a></div>
        </div>
        <div className="hero-scroll"><span>Scroll</span><b>＋</b></div>
        <div className="hero-dots" aria-hidden="true"><i className="active" /><i /><i /><i /></div>
      </section>

      <section className="intro-section page-width" id="about">
        <div className="intro-lead" data-reveal><p className="section-kicker">About me</p><h2>Crafting digital<br />experiences that<br />make an <em>impact.</em></h2><p>I&apos;m a passionate, creative, and detail-oriented senior front-end developer focused on efficient, scalable, and maintainable web applications.</p><a className="text-button" href="#contact">More about me <Arrow /></a></div>
        <div className="objective-grid"><div className="objective-main" data-reveal><ObjectiveIcon type="objective" /><div><p className="section-kicker">Objective</p><p>To build reliable web products, keep learning modern technologies, and contribute to collaborative teams that create real value for users and businesses.</p></div></div><div className="trait" data-reveal data-reveal-delay="1"><ObjectiveIcon type="problem" /><div><strong>Problem Solver</strong><p>I turn complex requirements into clear, practical solutions.</p></div></div><div className="trait" data-reveal data-reveal-delay="2"><ObjectiveIcon type="detail" /><div><strong>Detail Oriented</strong><p>I care about quality, consistency, and polished user experiences.</p></div></div><div className="trait" data-reveal data-reveal-delay="3"><ObjectiveIcon type="learning" /><div><strong>Team Mentor</strong><p>I support teammates through coaching, reviews, and shared standards.</p></div></div></div>
      </section>

      <section className="projects-section" id="projects"><div className="page-width"><div className="section-heading"><div><p className="section-kicker">Featured projects</p><h2>Things I&apos;ve Built</h2></div><a className="button button-dark project-cta" href="#contact">View all projects <Arrow /></a></div><div className="project-grid">{projects.map((project, index) => <article className="project-card" data-reveal data-reveal-delay={index} key={project.title}><ProjectVisual type={project.type} /><div className="project-card-body"><div className="project-title-row"><h3>{project.title}</h3><Arrow diagonal /></div><p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div><div className="carousel-dots" aria-label="Project carousel"><i className="active" /><i /><i /></div></div></section>

      <section className="career-section page-width" id="experience"><div className="section-heading experience-heading"><div><p className="section-kicker">Experience</p><h2>Where I&apos;ve Worked</h2></div><div className="experience-controls" aria-label="Experience pages"><button type="button" aria-label="Previous experience page" disabled={experiencePage === 0} onClick={() => setExperiencePage((page) => Math.max(0, page - 1))}>← <span>Previous</span></button><span aria-live="polite">{experiencePage + 1} / {experiencePageCount}</span><button type="button" aria-label="Next experience page" disabled={experiencePage === experiencePageCount - 1} onClick={() => setExperiencePage((page) => Math.min(experiencePageCount - 1, page + 1))}><span>Next</span> →</button></div><a className="view-all-mobile" href="#contact">Let&apos;s connect <Arrow /></a></div><div className="timeline"><div className="timeline-line" data-reveal aria-hidden="true" />{experience.map(([initial, company, role, years, copy], index) => { const page = Math.floor(index / experiencePageSize); return <article className={`timeline-item ${page === experiencePage ? "experience-page-active" : ""}`} data-experience-page={page} key={company}><div className="timeline-marker">{initial}</div><div><h3>{company}</h3><p className="role">{role}</p><p className="years">{years}</p><p>{copy}</p></div></article>; })}</div></section>

      <section className="skills-section page-width" id="skills"><div className="section-heading"><div><p className="section-kicker">My skills</p><h2>Technologies I Use</h2></div></div><div className="skills-grid">{skills.map(([label, kind, color]) => <div className={`skill-card ${kind === "maps" ? "wide-skill" : ""}`} key={label}><SkillIcon kind={kind} color={color} /><span>{label}</span></div>)}</div></section>

      <section className="contact-section" id="contact" data-parallax-section><div className="contact-backdrop" data-parallax-speed="0.12" aria-hidden="true" /><div className="contact-fog-layer" data-parallax-speed="0.2" aria-hidden="true" /><div className="contact-content"><p className="section-kicker">Let&apos;s work together</p><h2>Have a project in mind?</h2><p>I&apos;m open to new opportunities and exciting projects.<br />Let&apos;s build something great together.</p><a className="button button-dark" href="mailto:johnry.atienza@gmail.com">Get in touch <Arrow /></a></div></section>

      <section className="contact-details page-width" id="blog"><div><p className="section-kicker">Get in touch</p><a href="mailto:johnry.atienza@gmail.com">✉ <span>johnry.atienza@gmail.com</span></a><a href="tel:+639171405646">⌕ <span>+63 917 140 5646</span></a><a href="https://johnryatienza.com">↗ <span>johnryatienza.com</span></a><a href="#contact">◷ <span>Available for new projects</span></a></div><div className="details-note"><p className="section-kicker">A few words</p><h3>Good work starts<br />with a good conversation.</h3><p>Have an idea, a challenge, or a blank canvas? I&apos;d love to hear what you&apos;re working on.</p></div></section>

      <footer className="site-footer page-width"><a className="brand" href="#home">JA<span>.</span></a><p>© {new Date().getFullYear()} Johnry Atienza. All rights reserved.</p><div className="social-links"><a href="https://johnryatienza.com" aria-label="Personal website"><SocialIcon kind="website" /></a><a href="mailto:johnry.atienza@gmail.com" aria-label="Email"><SocialIcon kind="email" /></a></div></footer>
    </main>
  );
}
