"use client";

/* eslint-disable @next/next/no-img-element -- Vinext serves this local optimized hero asset directly. */

import { useEffect } from "react";

const evidence = [
  {
    mark: "01",
    title: "USAII Global AI Hackathon Finalist",
    detail: "Undergraduate track · 2026",
  },
  {
    mark: "02",
    title: "Dual-award BSc (Hons) Software Engineering",
    detail: "APU · De Montfort University",
  },
  {
    mark: "03",
    title: "9 Engineering Projects",
    detail: "Responsible AI · Backend · Data",
  },
];

const featuredProjects = [
  {
    number: "01",
    title: "SenoNav AI",
    field: "Healthcare AI · Care navigation",
    summary:
      "An evidence-aware breast-cancer triage and cross-border care-navigation prototype designed to turn fragmented reports into clearer next-step guidance.",
    problem:
      "Patients often receive complex reports but lack a structured path for urgency, referral readiness and international treatment planning.",
    built:
      "A Streamlit workflow for report ingestion, structured triage, referral preparation, multilingual access and safety-first explanations with human escalation.",
    evidence:
      "Built and submitted for AMD Developer Hackathon Act II, with a public working repository and demonstrated care-navigation flow.",
    stack: ["Python", "Streamlit", "AMD ROCm", "Qwen", "RAG", "Medical AI"],
    href: "https://github.com/Jxxy123/senonav-ai",
    label: "View repository",
    accent: "cyan",
  },
  {
    number: "02",
    title: "GharDisha AI",
    field: "Public-service AI · Human-in-the-loop",
    summary:
      "A trusted-helper system that converts disaster-displaced families’ housing stories into source-grounded PMAY-G preparation plans.",
    problem:
      "Rural families may struggle to explain urgent housing circumstances, collect evidence and prepare for Gram Panchayat or BDO verification.",
    built:
      "A responsive full-stack case interpreter with document/photo input, multilingual interaction, curated grounding, readiness scoring and explicit human authority boundaries.",
    evidence:
      "Advanced to the final round of the USAII Global AI Hackathon 2026 at undergraduate level.",
    stack: ["React", "FastAPI", "Python", "RAG", "Speechmatics", "Responsible AI"],
    href: "https://devpost.com/software/ghardisha-ai",
    label: "View case study",
    accent: "mint",
  },
  {
    number: "03",
    title: "Sentinel Web-Risk Intelligence",
    field: "Multi-agent AI · Live web intelligence",
    summary:
      "An autonomous third-party risk platform that gathers live evidence, verifies vendors and produces explainable predictive risk intelligence.",
    problem:
      "Traditional vendor assessments become outdated quickly and rarely connect fragmented public signals into a continuously updated risk picture.",
    built:
      "A six-agent investigation workflow covering reconnaissance, scraping, verification, intelligence, prediction and reporting, supported by live Bright Data infrastructure.",
    evidence:
      "Submitted to the Web Data Unlocked Hackathon with public source, a live-data architecture and an auditable multidimensional risk score.",
    stack: ["Next.js", "FastAPI", "CrewAI", "Bright Data", "ChromaDB", "Docker"],
    href: "https://github.com/Jxxy123/sentinel-web-risk-intelligence",
    label: "View repository",
    accent: "violet",
  },
  {
    number: "04",
    title: "Gamified Habit Tracker",
    field: "Final-year research project · Full stack",
    summary:
      "A research-informed productivity system that combines configurable habit tracking with points, streaks, badges, reminders and visual progress insights.",
    problem:
      "Habit formation often fails when motivation declines and users cannot see meaningful feedback or consistency over time.",
    built:
      "A layered Django application with secure authentication, domain rules, achievement logic, Chart.js insights, PostgreSQL persistence, Docker support and automated tests.",
    evidence:
      "Submitted as the BSc (Hons) Software Engineering final-year project on 30 April 2025, supported by requirements research and Kanban delivery.",
    stack: ["Django", "Python", "PostgreSQL", "Docker", "Chart.js", "CI/CD"],
    href: "https://github.com/Jxxy123/gamified-habit-tracker",
    label: "View repository",
    accent: "gold",
  },
];

const additionalProjects = [
  {
    title: "MyBENTENG",
    area: "Geospatial intelligence",
    description:
      "Automated geospatial intelligence for flood-resilient infrastructure planning in Malaysia, translating spatial indicators into decision-ready risk insights.",
    stack: ["Python", "GIS", "Flood resilience", "Data analysis"],
    href: "https://github.com/Jxxy123/MyBENTENG",
    status: "Research prototype",
  },
  {
    title: "AgriNexus Operations Hub",
    area: "Food security · Agent systems",
    description:
      "A proactive national food-security hub using a Google ADK multi-agent swarm for crop pathology, regional risk detection and agricultural logistics.",
    stack: ["Python", "Google ADK", "Gemini", "Multi-agent"],
    href: "https://github.com/Jxxy123/agrinexus-operations-hub",
    status: "Hackathon build",
  },
  {
    title: "NASA Vibe Station",
    area: "Scientific interfaces · 3D systems",
    description:
      "A mission-control simulator combining orbital telemetry, a Three.js Earth visualisation and a Gemini-powered autonomous science officer.",
    stack: ["React", "Three.js", "Gemini", "Cloud"],
    href: "https://github.com/Jxxy123/nasa-vibe-station",
    status: "Interactive prototype",
  },
  {
    title: "Vanguard Milano",
    area: "Enterprise logistics orchestration",
    description:
      "An experimental AI logistics orchestrator that detects transport disruption, evaluates rerouting choices and explores automated settlement workflows.",
    stack: ["Python", "AI orchestration", "Live feeds", "x402"],
    href: "https://github.com/Jxxy123/vanguard-milano",
    status: "Experimental build",
  },
  {
    title: "Galaxium Travels: Chronos",
    area: "Experimental software engineering",
    description:
      "A futuristic travel-booking concept exploring relativistic time synchronisation, created for IBM Dev Day with an emphasis on coherent domain modelling.",
    stack: ["Python", "IBM Bob", "Simulation", "Domain logic"],
    href: "https://github.com/Jxxy123/Galaxium-Travels-Chronos",
    status: "IBM Dev Day build",
  },
];

const credentials = [
  {
    year: "2026",
    title: "USAII Global AI Hackathon Finalist",
    issuer: "United States Artificial Intelligence Institute · Undergraduate level",
    kind: "Finalist",
    image: "/certificates/usaii-finalist-thumb.webp",
    href: "/certificates/usaii-finalist.png",
  },
  {
    year: "2026",
    title: "Google Cloud Gen AI Academy APAC — Cohort 2",
    issuer: "Google Cloud × Hack2skill · Completed 20 July 2026",
    kind: "Academy completion",
    image: "/certificates/google-cloud-gen-ai-academy-apac-2026-thumb.webp",
    href: "/certificates/google-cloud-gen-ai-academy-apac-2026.png",
  },
  {
    year: "2026",
    title: "Cisco AI Technical Practitioner",
    issuer: "Cisco U. · Issued 16 March 2026",
    kind: "Professional certificate",
    image: "/certificates/cisco-ai-technical-practitioner-thumb.webp",
    href: "/certificates/cisco-ai-technical-practitioner.pdf",
  },
  {
    year: "2026",
    title: "Web Data Unlocked",
    issuer: "Lablab.ai · Bright Data",
    kind: "Hackathon completion",
    image: "/certificates/web-data-unlocked-thumb.webp",
    href: "/certificates/web-data-unlocked.png",
  },
  {
    year: "2026",
    title: "AI Agent Olympics",
    issuer: "Lablab.ai · NativelyAI",
    kind: "Hackathon completion",
    image: "/certificates/ai-agent-olympics-thumb.webp",
    href: "/certificates/ai-agent-olympics.png",
  },
  {
    year: "2026",
    title: "Cisco AI Business Practitioner",
    issuer: "Cisco U. · Issued 27 February 2026",
    kind: "Professional certificate",
    image: "/certificates/cisco-ai-business-practitioner-thumb.webp",
    href: "/certificates/cisco-ai-business-practitioner.pdf",
  },
  {
    year: "2026",
    title: "Python for Data Science & Machine Learning",
    issuer: "LinkedIn Learning · 7 hours 44 minutes",
    kind: "Course completion",
    image: "/certificates/python-data-science-ml-thumb.webp",
    href: "/certificates/python-data-science-ml.pdf",
  },
  {
    year: "2026",
    title: "IBM Dev Day — Bob Edition",
    issuer: "IBM developer programme · 30 April—3 May 2026",
    kind: "Participation",
    image: "/certificates/ibm-dev-day-thumb.webp",
    href: "/certificates/ibm-dev-day.pdf",
  },
];

const toolkit = [
  { title: "Backend", items: ["Python", "FastAPI", "Django", "REST APIs", "PostgreSQL", "SQLite"] },
  { title: "AI systems", items: ["RAG", "Multi-agent workflows", "Gemini", "Qwen", "CrewAI", "Google ADK"] },
  { title: "Data & cloud", items: ["Docker", "Bright Data", "ChromaDB", "GIS", "AWS", "CI/CD"] },
  { title: "Interfaces", items: ["React", "Next.js", "Streamlit", "JavaScript", "Three.js", "Chart.js"] },
];

export default function Home() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".motionRoot");
    const targets = Array.from(document.querySelectorAll<HTMLElement>(".scrollReveal"));

    if (!root || !targets.length) return;

    root.classList.add("motionEnabled");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("inView");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -9% 0px" },
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      root.classList.remove("motionEnabled");
    };
  }, []);

  return (
    <main className="motionRoot">
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="aurora auroraOne" aria-hidden="true" />
        <div className="aurora auroraTwo" aria-hidden="true" />
        <div className="gridField" aria-hidden="true" />

        <header className="siteHeader">
          <a className="monogram" href="#home" aria-label="Umme Fatima Sadia Hossain, home">
            <span>UF</span><span>SH</span>
          </a>
          <nav aria-label="Primary navigation">
            <a className="active" href="#home">Home</a>
            <a href="#work">Work</a>
            <a href="#research">Research</a>
            <a href="#journey">Journey</a>
            <a href="#credentials">Credentials</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <div className="heroInner">
          <div className="heroCopy">
            <p className="eyebrow">Responsible AI <span>•</span> Backend Systems</p>
            <h1 id="hero-title">Umme Fatima<br />Sadia Hossain</h1>
            <div className="titleRule" aria-hidden="true"><span /></div>
            <p className="role">AI &amp; Backend Software Engineer</p>
            <p className="statement">
              I build responsible, evidence-grounded systems for healthcare,
              public services and resilient communities.
            </p>
            <div className="heroActions">
              <a className="button primary" href="#work">Explore projects <span aria-hidden="true">→</span></a>
              <a className="button primary" href="#research">Research profile <span aria-hidden="true">→</span></a>
            </div>
            <div className="availabilityRow">
              <span className="availability"><i aria-hidden="true" /> AI/backend roles &amp; graduate research</span>
            </div>
          </div>

          <div className="portraitStage" aria-label="Portrait of Umme Fatima Sadia Hossain">
            <div className="portraitGlow" aria-hidden="true" />
            <div className="orbit orbitOne" aria-hidden="true" />
            <div className="orbit orbitTwo" aria-hidden="true" />
            <div className="portraitMedia">
              <img src="/hero-portrait.png" alt="Umme Fatima Sadia Hossain" />
            </div>
          </div>
        </div>

        <div className="evidenceRow" aria-label="Selected evidence">
          {evidence.map((item) => (
            <article key={item.mark}>
              <span className="evidenceMark">{item.mark}</span>
              <div><strong>{item.title}</strong><small>{item.detail}</small></div>
              <span className="evidenceArrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="signalSection contentSection" aria-labelledby="signal-title">
        <div className="sectionIntro scrollReveal revealLeft">
          <p className="sectionKicker">Engineering + research profile</p>
          <h2 id="signal-title">Engineering depth with a responsible-AI research direction.</h2>
          <p>
            My work connects software engineering discipline with responsible AI: defining a real problem,
            designing the system boundary, building the backend, grounding outputs in evidence and showing where
            human judgement must remain in control.
          </p>
        </div>
        <div className="signalGrid">
          <article className="scrollReveal revealUp delayOne"><span>01</span><h3>Technical depth</h3><p>Full-stack systems, backend APIs, data pipelines, deployment and testing—not interface mock-ups alone.</p></article>
          <article className="scrollReveal revealUp delayTwo"><span>02</span><h3>Research intent</h3><p>Projects are framed around uncertainty, evidence provenance, safety constraints and evaluable user needs.</p></article>
          <article className="scrollReveal revealUp delayThree"><span>03</span><h3>Public impact</h3><p>Healthcare, housing, food security, infrastructure resilience and trustworthy organisational decisions.</p></article>
          <article className="scrollReveal revealUp delayFour"><span>04</span><h3>Evidence &amp; reflection</h3><p>Public repositories, demos, finalist recognition, academic documentation and transparent project limitations.</p></article>
        </div>
      </section>

      <section className="workSection contentSection" id="work" aria-labelledby="work-title">
        <div className="sectionHeading splitHeading scrollReveal revealLeft">
          <div><p className="sectionKicker">Selected engineering work</p><h2 id="work-title">Case studies built around consequential problems.</h2></div>
          <p>Each project is presented through the same lens: the problem, my engineering contribution and the evidence that the work exists.</p>
        </div>

        <div className="featuredProjects">
          {featuredProjects.map((project, index) => (
            <article className={`projectCase ${project.accent} scrollReveal ${index % 2 === 0 ? "revealLeft" : "revealRight"}`} key={project.title}>
              <div className="projectMeta"><span>{project.number}</span><p>{project.field}</p></div>
              <div className="projectLead"><h3>{project.title}</h3><p>{project.summary}</p></div>
              <div className="caseGrid">
                <div><span>Problem</span><p>{project.problem}</p></div>
                <div><span>My engineering contribution</span><p>{project.built}</p></div>
                <div><span>Evidence</span><p>{project.evidence}</p></div>
              </div>
              <div className="projectFooter">
                <div className="tagList">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                {project.href ? <a href={project.href} target="_blank" rel="noreferrer">{project.label} <span aria-hidden="true">↗</span></a> : <span className="academicLabel">{project.label}</span>}
              </div>
            </article>
          ))}
        </div>

        <div className="projectAtlas">
          <div className="atlasIntro scrollReveal revealLeft"><p className="sectionKicker">Project atlas</p><h3>Five more systems across AI, data and software engineering.</h3></div>
          <div className="atlasGrid">
            {additionalProjects.map((project, index) => (
              <article className={`scrollReveal revealUp delay${["One", "Two", "Three"][index % 3]}`} key={project.title}>
                <div className="atlasTop"><span>0{index + 5}</span><p>{project.area}</p></div>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <span className="projectStatus">{project.status}</span>
                <div className="tagList">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                <a href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} repository`}>Repository <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="researchSection" id="research" aria-labelledby="research-title">
        <div className="contentSection researchInner">
          <div className="researchCopy scrollReveal revealLeft">
            <p className="sectionKicker">Graduate research direction</p>
            <h2 id="research-title">Reliable AI decision support for high-stakes, imperfect-information environments.</h2>
            <p className="researchLead">
              I want to investigate how retrieval, agent orchestration and human oversight can produce useful
              assistance without hiding uncertainty or overstating authority.
            </p>
            <blockquote>
              “The goal is not to automate every decision. It is to design systems that help people reason with
              better evidence, clearer boundaries and accountable human control.”
            </blockquote>
          </div>
          <div className="researchFramework scrollReveal revealRight" aria-label="Research framework">
            <div><span>01</span><strong>Evidence grounding</strong><p>Trace outputs back to curated or live sources.</p></div>
            <div><span>02</span><strong>Uncertainty handling</strong><p>Separate confirmed, missing and conflicting information.</p></div>
            <div><span>03</span><strong>Human oversight</strong><p>Keep consequential decisions with qualified people.</p></div>
            <div><span>04</span><strong>Evaluation</strong><p>Measure usefulness, safety, reliability and user trust.</p></div>
          </div>
        </div>
      </section>

      <section className="journeySection contentSection" id="journey" aria-labelledby="journey-title">
        <div className="sectionHeading splitHeading scrollReveal revealLeft">
          <div><p className="sectionKicker">Academic journey</p><h2 id="journey-title">A software-engineering foundation shaped into an AI research profile.</h2></div>
          <p>Educated in Malaysia through a dual-award Software Engineering degree from Asia Pacific University and De Montfort University, with interests in graduate research and AI/backend engineering.</p>
        </div>
        <div className="timeline">
          <article className="scrollReveal revealLeft"><time>2022—2026</time><div><h3>Dual-award BSc (Hons) Software Engineering</h3><p>Asia Pacific University of Technology &amp; Innovation and De Montfort University. Academic foundation in architecture, testing, requirements, databases, programming and data analysis.</p></div></article>
          <article className="scrollReveal revealRight"><time>30 Apr 2025</time><div><h3>Final-year research submission</h3><p><em>A Gamified Solution for Habit Formation and Productivity Enhancement</em>—a full-stack Django system supported by user research, software design and iterative Kanban delivery.</p></div></article>
          <article className="scrollReveal revealLeft"><time>May—Aug 2024</time><div><h3>Professional and collaborative practice</h3><p>Completed a 16-week APU Career Centre internship supporting cross-functional programmes, stakeholder coordination, event operations and student engagement.</p></div></article>
          <article className="scrollReveal revealRight"><time>2026</time><div><h3>Applied AI portfolio</h3><p>Built systems across health navigation, public services, web-risk intelligence, geospatial resilience, food security and scientific interfaces; advanced to the USAII Global AI Hackathon final round.</p></div></article>
        </div>

        <div className="toolkit">
          <div className="toolkitIntro scrollReveal revealLeft"><p className="sectionKicker">Engineering toolkit</p><h3>Tools I use to build reliable, testable systems.</h3></div>
          <div className="toolkitGrid">
            {toolkit.map((group, index) => <article className={`scrollReveal revealUp delay${["One", "Two", "Three", "Four"][index]}`} key={group.title}><h4>{group.title}</h4><div className="tagList">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}
          </div>
        </div>
      </section>

      <section className="credentialsSection" id="credentials" aria-labelledby="credentials-title">
        <div className="contentSection">
          <div className="sectionHeading splitHeading scrollReveal revealLeft">
            <div><p className="sectionKicker">Verified credentials</p><h2 id="credentials-title">Selected awards and professional learning.</h2></div>
            <p>Every item below links to the original certificate evidence. Sensitive academic records remain private.</p>
          </div>
          <div className="credentialGrid">
            {credentials.map((item, index) => (
              <a className={`credentialCard scrollReveal revealUp delay${["One", "Two", "Three"][index % 3]}`} href={item.href} target="_blank" rel="noreferrer" key={item.title} aria-label={`Open ${item.title} certificate`}>
                <div className="credentialMedia"><img src={item.image} alt={`${item.title} certificate preview`} loading="lazy" /></div>
                <div className="credentialBody">
                  <div className="credentialTop"><span className="credentialIndex">0{index + 1}</span><time>{item.year}</time></div>
                  <h3>{item.title}</h3><p>{item.issuer}</p>
                  <div className="credentialFooter"><span className="credentialKind">{item.kind}</span><span className="credentialView">View evidence ↗</span></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="contactSection" id="contact" aria-labelledby="contact-title">
        <div className="contactOrb" aria-hidden="true" />
        <div className="contentSection contactInner scrollReveal revealUp">
          <p className="sectionKicker">Let&apos;s connect</p>
          <h2 id="contact-title">Let&apos;s build reliable AI and backend systems that matter.</h2>
          <p>
            Open to AI and backend engineering roles, graduate research opportunities and collaborations in
            responsible AI, decision support and public-impact technology.
          </p>
          <div className="contactActions">
            <a className="button primary" href="mailto:fatimasadiahossain@gmail.com">Email me <span aria-hidden="true">→</span></a>
            <a className="button primary" href="https://www.linkedin.com/in/umme-fatima-sadia-hossain" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            <a className="button primary" href="https://github.com/Jxxy123" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            <a className="button primary" href="/resume/Umme-Fatima-Sadia-Hossain-Resume.pdf" download>Download résumé <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </section>

      <footer><a className="monogram footerMark" href="#home" aria-label="Back to top"><span>UF</span><span>SH</span></a><p>Designed around evidence, responsibility and public impact.</p><p>© 2026 Umme Fatima Sadia Hossain</p></footer>
    </main>
  );
}
