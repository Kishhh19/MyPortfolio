# Mark Laurence M. Santos — BSIT Portfolio Website

A complete, production-ready personal developer portfolio built for **Mark Laurence M. Santos**, 4th-Year Bachelor of Science in Information Technology (BSIT) student and aspiring Full-Stack Web Developer.

Designed with clean typography, high visual hierarchy, structured project case studies, and modern developer aesthetics inspired by modern portfolios. Built strictly as a client-side static application—requiring **zero backend servers, PHP, MySQL, or local databases**—making it 100% deployable to **Vercel**, **Netlify**, and **GitHub Pages** with minimal setup.

---

## 🚀 Technology Stack

- **Framework**: [React 18+](https://react.dev/) (Single Page Application)
- **Build Tool**: [Vite](https://vitejs.dev/) (Ultra-fast development & optimized tree-shaken static production bundle)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Custom developer dark theme & responsive utility system)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment Targets**: Vercel, Netlify, GitHub Pages, or any static hosting provider.

---

## 📁 Project Structure

```
MyPortfolio/
├── public/
│   ├── favicon.svg                  # Modern developer SVG favicon
│   ├── _redirects                   # Netlify SPA redirect rules
│   ├── images/
│   │   ├── profile/
│   │   │   └── avatar.svg           # Profile avatar placeholder
│   │   └── projects/
│   │       ├── capstone-portal.svg  # Capstone system high-fidelity mockup
│   │       ├── campus-hub.svg       # Campus hub high-fidelity mockup
│   │       ├── e-commerce.svg       # Inventory platform high-fidelity mockup
│   │       └── project-template.svg # Next project placeholder mockup
│   └── resume/
│       └── Mark-Laurence-M-Santos-Resume.pdf # Downloadable resume file
│
├── src/
│   ├── assets/                      # Bundled project assets
│   ├── data/
│   │   └── portfolioData.js         # Single source of truth for all editable content
│   ├── components/
│   │   ├── Navbar.jsx               # Sticky navigation with active spy & mobile drawer
│   │   ├── Hero.jsx                 # Identity, custom headline, CTAs & code visual
│   │   ├── About.jsx                # 4th year BSIT bio & 4-card quick stats
│   │   ├── Skills.jsx               # Categorized skills & technology badges
│   │   ├── Projects.jsx             # Project cards with problem/solution highlights
│   │   ├── ProjectModal.jsx         # Full 6-stage lifecycle Case Study modal
│   │   ├── Education.jsx            # BSIT degree, coursework, & academic activities
│   │   ├── Experience.jsx           # Academic & development experience timeline
│   │   ├── Services.jsx             # 5 core developer capabilities
│   │   ├── ResumeSection.jsx        # Resume viewer & smart download handler
│   │   ├── Contact.jsx              # Validated contact form & direct reach links
│   │   ├── Footer.jsx               # Branding, navigation links & copyright
│   │   └── Toast.jsx                # Accessible user feedback notifications
│   ├── App.jsx                      # App component with state & modal management
│   ├── main.jsx                     # Application mount point
│   └── index.css                    # Tailwind directives & theme configuration
│
├── index.html                       # SEO meta tags, Open Graph, fonts
├── package.json                     # Dependencies and npm scripts
├── vite.config.js                   # Vite configuration with relative base paths
├── tailwind.config.js               # Design tokens, custom colors, animations
├── postcss.config.js                # PostCSS build pipeline
├── netlify.toml                     # Netlify build configuration & SPA redirects
├── vercel.json                      # Vercel configuration & SPA rewrites
├── .gitignore                       # Clean Git ignore definitions
└── README.md                        # Project documentation
```

---

## 🛠️ Getting Started & Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
This generates the optimized, production-ready static assets inside the `dist/` directory.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Option 1: Vercel (Recommended & Easiest)
1. Push your project code to a **GitHub repository**.
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **Add New** > **Project** and import your GitHub repository.
4. Vercel automatically detects **Vite**:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Your portfolio will be live in under 60 seconds with a free `.vercel.app` domain and automatic SSL!
*(The included `vercel.json` ensures all internal routing functions seamlessly).*

---

### Option 2: Netlify
1. Push your code to **GitHub**.
2. Go to [netlify.com](https://netlify.com) and log in.
3. Click **Add new site** > **Import an existing project** > **GitHub**.
4. Select your repository.
5. Netlify will auto-read settings from `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **Deploy Site**.
*(The included `netlify.toml` and `public/_redirects` prevent 404 errors when refreshing).*

---

### Option 3: GitHub Pages
1. In `vite.config.js`, ensure the `base` property matches your repository name:
   ```javascript
   // If your repo is https://github.com/your-username/my-portfolio
   base: '/my-portfolio/',
   ```
2. In `package.json`, add the `gh-pages` script if desired, or use GitHub Actions:
   - Go to your repository on GitHub.
   - Click **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, choose **GitHub Actions** and select the **Vite** workflow template.
3. Push to `main` and GitHub will automatically deploy your portfolio to `https://<username>.github.io/<repo-name>/`.

---

## ✏️ How to Customize Your Information

All personal information, project descriptions, skills, and contact details are stored in one single, clean configuration file:
👉 `src/data/portfolioData.js`

### 1. Personal Identity & Bio
Open `src/data/portfolioData.js` and modify `personalInfo`:
```javascript
export const personalInfo = {
  name: "Mark Laurence M. Santos",
  headline: "Building Digital Solutions Through Code and Technology.",
  email: "your-actual-email@example.com",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-profile",
};
```

### 2. Adding / Updating Projects
In `src/data/portfolioData.js`, add or edit items in the `projectsData` array:
```javascript
{
  id: "your-project-slug",
  title: "Your System Title",
  category: "Full-Stack Web App",
  shortDescription: "A short 1-2 sentence overview.",
  problem: "What problem does this project solve?",
  objective: "What was the purpose?",
  solution: "How does the architecture work?",
  features: ["Feature 1", "Feature 2", "Feature 3"],
  technologies: ["React", "JavaScript", "SQL", "Tailwind CSS"],
  image: "/images/projects/your-image.png",
  github: "https://github.com/your-username/repo-name",
  demo: "https://your-demo-link.com"
}
```

### 3. Replacing Project Screenshots
1. Save your screenshots/images into `public/images/projects/` (e.g. `public/images/projects/my-capstone.png`).
2. Update the `image` field in `src/data/portfolioData.js` to point to `/images/projects/my-capstone.png`.

### 4. Updating the Resume PDF
1. Save your official resume PDF as:
   `public/resume/Mark-Laurence-M-Santos-Resume.pdf`
2. The **Download Resume** buttons in the navigation, hero, and resume section will automatically download your PDF.

### 5. Configuring the Contact Form
In `src/data/portfolioData.js`, you can configure how messages are delivered:
- **Formspree (Instant email forwarding)**: Create a free form at [formspree.io](https://formspree.io) and paste your endpoint into `contactConfig.formspreeEndpoint`.
- **Netlify Forms**: Automatically captured when deployed on Netlify via the embedded `data-netlify="true"` tag.
- **Mailto Fallback**: Default mode—instantly launches the visitor's default email client with your subject and message prefilled!

---

## 🛡️ Security & Best Practices

- **Zero Client-Side Secrets**: No API keys, passwords, or database credentials are exposed in the frontend.
- **Accessible (A11y)**: Built with semantic HTML5, ARIA labels, keyboard focus rings, and `@media (prefers-reduced-motion: reduce)` support.
- **Fast & Lightweight**: Zero bloated heavy dependencies.

---

## 📄 License & Copyright

© 2026 Mark Laurence M. Santos. All rights reserved.
Academic and professional portfolio template created for BSIT capstone and career applications.
