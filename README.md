<div align="center">

# Umme Fatima Sadia Hossain  
## AI & Backend Software Engineer

**Building responsible, evidence-grounded software systems for healthcare, public services and resilient communities.**

[![Live Portfolio](https://img.shields.io/badge/Live_Portfolio-View_Website-111827?style=for-the-badge&logo=vercel&logoColor=white)](https://umme-fatima-portfolio.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Jxxy123-181717?style=for-the-badge&logo=github)](https://github.com/Jxxy123)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Umme_Fatima_Sadia_Hossain-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/umme-fatima-sadia-hossain/)

</div>

---

## Overview

This repository contains my personal software-engineering portfolio.

The portfolio presents my work across:

- AI-assisted decision-support systems
- Backend and API engineering
- Responsible and human-supervised AI
- Retrieval-augmented generation
- Multi-agent workflows
- Document-processing systems
- Data, cloud and full-stack development

Instead of presenting projects only through screenshots or technology lists, the portfolio uses a case-study format that explains:

> **Problem → Engineering contribution → Architecture → Evidence → Limitations**

My current focus is designing software systems in which AI outputs remain traceable, evidence-grounded and appropriately supervised by qualified humans.

---

## Live Portfolio

### [Visit umme-fatima-portfolio.vercel.app](https://umme-fatima-portfolio.vercel.app)

The deployed portfolio includes:

- Selected engineering case studies
- Research interests and responsible-AI direction
- Academic and professional journey
- Technical skills
- Hackathon achievements
- Certificates and credentials
- Downloadable résumé
- GitHub, LinkedIn and contact links

<!--
Portfolio screenshot can be added later.

1. Save the screenshot as: public/portfolio-preview.png
2. Remove the comment markers around the line below.

![Portfolio website preview](public/portfolio-preview.png)
-->

---

## Featured Engineering Work

### 1. SenoNav AI

**Healthcare AI · Document intelligence · Care navigation**

An evidence-aware breast-cancer care-navigation prototype designed to organise fragmented medical reports into clearer referral-preparation information.

**Engineering focus:**

- PDF and image-document processing
- Structured information extraction
- Evidence-linked output
- Referral-readiness assessment
- Multilingual interaction
- Human-review and safety boundaries

**Technologies:** Python, Streamlit, RAG, Qwen, AMD ROCm, Pydantic

[View repository](https://github.com/Jxxy123/senonav-ai)

---

### 2. GharDisha AI

**Public-service AI · Human-in-the-loop systems**

A responsible-AI assistant designed to help disaster-displaced families organise housing circumstances, documents and supporting evidence before official human verification.

The system does not approve benefits or replace government decision-makers. It prepares information for authorised review.

**Engineering focus:**

- React and FastAPI architecture
- Document and image input
- Curated policy grounding
- Multilingual interaction
- Readiness scoring
- Source traceability
- Explicit human-authority boundaries

**Technologies:** React, FastAPI, Python, RAG, Speechmatics

[View repository](https://github.com/Jxxy123/ghardisha-ai)  
[View Devpost case study](https://devpost.com/software/ghardisha-ai)

---

### 3. Sentinel Web-Risk Intelligence

**AI orchestration · Backend engineering · Web intelligence**

A third-party risk-intelligence prototype that coordinates specialised agents to gather public web evidence, evaluate risk signals and produce structured reports for human review.

**Engineering focus:**

- FastAPI backend services
- Next.js interface
- Multi-agent task orchestration
- Live public-web data retrieval
- Structured risk dimensions
- Source-supported reporting
- Docker-based development

**Technologies:** Next.js, FastAPI, CrewAI, Bright Data, ChromaDB, Docker

[View repository](https://github.com/Jxxy123/sentinel-web-risk-intelligence)

---

### 4. Gamified Habit Tracker

**Final-year software-engineering project · Full-stack development**

A research-informed productivity system combining configurable habit tracking with points, streaks, achievements, reminders and progress visualisation.

**Engineering focus:**

- Layered Django architecture
- Secure user authentication
- Habit and achievement domain logic
- PostgreSQL persistence
- Data visualisation
- Automated testing
- Docker and CI/CD support

**Technologies:** Django, Python, PostgreSQL, Chart.js, Docker

---

## Additional Projects

The portfolio also presents selected experimental and hackathon projects:

| Project | Area |
|---|---|
| [MyBENTENG](https://github.com/Jxxy123/MyBENTENG) | Geospatial intelligence and flood resilience |
| [AgriNexus Operations Hub](https://github.com/Jxxy123/agrinexus-operations-hub) | Food-security and multi-agent operations |
| [NASA Vibe Station](https://github.com/Jxxy123/nasa-vibe-station) | Scientific interfaces and 3D visualisation |
| [Vanguard Milano](https://github.com/Jxxy123/vanguard-milano) | Logistics disruption analysis |
| [Galaxium Travels: Chronos](https://github.com/Jxxy123/Galaxium-Travels-Chronos) | Distributed-system and domain-modelling experiment |

These projects are labelled according to their current maturity, including research prototype, hackathon build or experimental build.

---

## Portfolio Technology Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Responsive CSS
- Accessible semantic HTML

### Tooling and Runtime

- Node.js
- Vite
- Vinext
- ESLint
- npm
- Git and GitHub

### Quality and Discoverability

- Automated rendered-page test
- Production build validation
- SEO metadata
- `robots.txt` generation
- XML sitemap generation
- Responsive navigation
- Accessible labels and page structure

### Deployment

- Vercel
- GitHub-based source control

---

## Design Principles

### Evidence over hype

Projects are presented with their implemented functionality, technology choices and available evidence rather than unsupported production-scale claims.

### Responsible AI

High-stakes projects distinguish between AI-generated assistance and decisions that must remain under qualified human authority.

### Engineering clarity

Each flagship project explains the problem, system boundary, engineering contribution and current prototype status.

### Accessibility

The interface uses semantic sections, descriptive alternative text, accessible navigation labels and keyboard-compatible links.

### Progressive enhancement

Animations support the visual experience without being required to access the main portfolio content.

---

## Repository Structure

```text
umme-fatima-portfolio/
├── app/
│   ├── page.tsx          # Portfolio content and page structure
│   ├── globals.css       # Visual design and responsive styling
│   ├── layout.tsx        # Root layout and metadata
│   ├── robots.ts         # Search-engine crawling configuration
│   └── sitemap.ts        # Sitemap generation
│
├── public/
│   ├── certificates/     # Credential images and documents
│   ├── resume/           # Downloadable résumé
│   ├── hero-portrait.png
│   └── favicon.svg
│
├── tests/                # Rendered-page verification
├── scripts/              # Installation and build validation scripts
├── db/                   # Optional data-layer scaffolding
├── types/                # Shared TypeScript definitions
├── package.json
└── README.md
```

---

## Running Locally

### Prerequisites

- Node.js 22.13 or later
- npm
- Git
- Linux, macOS or Windows with WSL/Git Bash for the repository helper scripts

### 1. Clone the repository

```bash
git clone https://github.com/Jxxy123/umme-fatima-portfolio.git
cd umme-fatima-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the local address shown in the terminal.

---

## Available Commands

```bash
# Start the development environment
npm run dev

# Run ESLint
npm run lint

# Build and validate the deployable application
npm run build

# Build using Next.js directly
npm run build:next

# Run the rendered-page test
npm test

# Validate an existing build artifact
npm run validate:artifact
```

---

## Current Status

This portfolio is actively maintained.

Current improvement areas include:

- Adding more measurable project-evaluation results
- Expanding automated testing
- Publishing technical architecture case studies
- Improving project documentation
- Adding open-source contribution evidence
- Continuing accessibility and performance review

---

## Education and Direction

I hold a dual-award **BSc (Hons) in Software Engineering** from:

- Asia Pacific University of Technology & Innovation
- De Montfort University

I am preparing for graduate study in Artificial Intelligence or Data Science while pursuing opportunities in:

- AI engineering
- Backend software engineering
- Applied AI
- Responsible-AI research
- Graduate software-engineering roles

---

## Recognition

- USAII Global AI Hackathon 2026 — Undergraduate Finalist
- AMD Developer Hackathon Act II — Project submission
- Web Data Unlocked Hackathon — Project submission
- GDG UTM Build with AI — Participation and mastery
- Cisco AI Technical Practitioner
- Cisco AI Business Practitioner

---

## Attribution

This repository began from a Vinext-based starter structure and was subsequently customised into a personal engineering portfolio.

The portfolio-specific information architecture, written content, project presentation, visual identity, assets, responsive styling, metadata and professional positioning were adapted for this website.

Third-party frameworks, libraries and tools remain subject to their respective licences.

---

## Connect

- **Portfolio:** [umme-fatima-portfolio.vercel.app](https://umme-fatima-portfolio.vercel.app)
- **GitHub:** [github.com/Jxxy123](https://github.com/Jxxy123)
- **LinkedIn:** [Umme Fatima Sadia Hossain](https://www.linkedin.com/in/umme-fatima-sadia-hossain/)

---

<div align="center">

### Responsible AI · Backend Systems · Evidence-Grounded Engineering

Built and maintained by **Umme Fatima Sadia Hossain**

</div>
