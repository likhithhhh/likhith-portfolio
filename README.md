# Likhith Chappati – Premium Developer Portfolio

A luxurious, cinematic, and interactive personal developer portfolio website designed for **Likhith Chappati** (Full Stack Developer & Backend Engineer).

Built with **React 18**, **Vite**, **Framer Motion**, and **Lucide React**, featuring a bespoke **Black & Gold Elegance** color system.

---

## 🌟 Live Demo & Local Access

- **Local Preview Server**: `http://localhost:5173/`
- **Resume Download Endpoint**: `http://localhost:5173/Likhith_Chappati_Resume.pdf`

---

## 🎨 Design System: Black & Gold Elegance

The interface maintains a 75–80% dark aesthetic with strategic metallic gold accents, geometric typography, and cinematic lighting:

| Token | Hex Value | Usage |
|---|---|---|
| **Primary Background** | `#080909` | Deep obsidian canvas |
| **Secondary Background** | `#111111` | Section contrast |
| **Card Background** | `#171717` | Cards, elevated surfaces |
| **Primary Gold** | `#C9A85B` | Key buttons, active states, borders |
| **Highlight Gold** | `#E8D5A3` | Accent headings, badges, glow |
| **Primary Text** | `#F5F1E8` | High contrast body and headings |
| **Secondary Text** | `#A6A19A` | Supporting descriptions |
| **Border Color** | `#34302A` | Refined metallic framing |

---

## 🚀 Key Features & Sections

1. **Sticky Glass Navigation (`Navbar.jsx`)**:
   - Monogram logo `LC` with gold orbital pulse
   - Active section tracking with smooth scroll
   - Mobile slide-in drawer
   - Direct verified resume download button
2. **Cinematic Hero (`Hero.jsx`)**:
   - Oversized typography with gold gradient mask
   - Layered portrait composition with concentric orbital rings and HUD badge chips
   - "Explore My Work" and "Download Resume" action buttons
   - Social connect links (GitHub, LinkedIn, Email)
   - Smooth scroll-down indicator
3. **About Me – Beyond the Code (`About.jsx`)**:
   - RGUKT B.Tech CSE Education Card (CGPA: 8.7/10)
   - Core engineering philosophy & 4 architectural focus pillars
   - Quick metadata matrix
4. **Interactive Tech Stack (`Skills.jsx`)**:
   - Category filter pills (Languages, Frontend, Backend, Databases, ServiceNow Enterprise, Tools, CS Fundamentals)
   - 35+ technology cards with custom icons, purpose tags, and descriptions
5. **Editorial Project Showcase (`Projects.jsx` & `ProjectModal.jsx`)**:
   - **EduCore LMS**: Full-featured LMS with role-based access & modular APIs
   - **WanderNest**: Responsive hotel booking system with session auth
   - **ClientFlowCRM**: End-to-end CRM with indexed MongoDB queries
   - **Flight Management System**: SmartBridge internship capstone (+40% search speed)
   - **Gatepass Management System**: RINL Steel Plant enterprise system (1,000+ staff)
   - **Interactive Modal**: Opens deep architectural specs, technical highlights, contributions, and code links
6. **Experience Timeline (`Experience.jsx`)**:
   - CubeSimple (ServiceNow Analyst Trainee, 2026)
   - SmartBridge Solutions (Full Stack Developer Intern, 2025)
   - Visakhapatnam Steel Plant / RINL (Web Developer Intern, 2025)
7. **Milestones & Achievements (`Achievements.jsx`)**:
   - Viewport-triggered animated number counters (8.7 CGPA, 100+ LeetCode, 3 Internships, +40% DB optimization)
8. **Verified Certifications (`Certifications.jsx`)**:
   - ServiceNow, RINL, SmartBridge, NPTEL OOAD, NPTEL LLM, IBM Generative AI with verification modals
9. **Interactive Contact Section (`Contact.jsx`)**:
   - Direct email & phone one-click copy with feedback states
   - Validated message form with golden confetti burst and pre-formatted mailto delivery
10. **Global Utilities**:
    - Top scroll progress indicator with gold light sweep (`ScrollProgress.jsx`)
    - Atmospheric ambient background lighting (`GoldGlow.jsx`)
    - Floating back-to-top button (`BackToTop.jsx`)
    - Custom gold `LC` favicon (`favicon.svg`)

---

## 🛠 Project Structure

```
Likhith_Portfolio/
├── public/
│   ├── favicon.svg                   # Gold LC monogram icon
│   └── Likhith_Chappati_Resume.pdf   # Verified uploaded resume PDF
├── src/
│   ├── assets/                       # Custom images and portraits
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Achievements.jsx
│   │   ├── BackToTop.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── GoldGlow.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── Projects.jsx
│   │   ├── ScrollProgress.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   └── portfolioData.js          # Central configuration & data source
│   ├── App.jsx                       # Root application component
│   ├── index.css                     # Black & Gold design system & utilities
│   └── main.jsx                      # Vite entry point
├── index.html                        # SEO, meta tags, Google fonts
├── package.json
└── vite.config.js
```

---

## 💻 Available Scripts

- **Run Dev Server**:
  ```bash
  npm run dev
  ```
- **Build for Production**:
  ```bash
  npm run build
  ```
- **Preview Production Build**:
  ```bash
  npm run preview
  ```

---

## 🔄 Easy Customization Guide

- **Update Info / Add Projects / Add Certifications**:
  Edit `src/data/portfolioData.js`. All headlines, bio text, project links, metrics, and contacts are centralized here.
- **Replace Resume**:
  Simply replace `public/Likhith_Chappati_Resume.pdf` with any new PDF while keeping the same filename.
- **Replace Profile Photo**:
  Drop your photo into `src/assets/avatar.png` and update the avatar in `Hero.jsx`.
