# Funngro Modern Website Redesign

This is a complete 2-page responsive website assignment for Funngro, built using modern web development practices. A full production-quality audit has been performed on this project.

## 🎯 Assignment Objective
Create a modern, professional, mobile-responsive redesign inspired by Funngro’s existing website with an original interface and layout, catering to two main audiences:
1. Teens (Teenlancers)
2. Companies

## 🛠️ Tech Stack
- **React (Vite):** Fast and modern UI development.
- **Tailwind CSS v4:** Utility-first CSS framework for rapid and clean styling.
- **React Router DOM:** For seamless client-side SPA navigation.
- **Lucide React:** Beautiful, clean SVGs for icons.
- **React Helmet Async:** For SEO optimization (meta tags, titles).

## ✨ Features & Fixes Included
- **Functional Navigation & Buttons:** All CTA buttons ("Explore Opportunities", "Post a Project", "Get Started", "View All") scroll or navigate to the correct sections. The Companies page includes a client-side project form with validation and a success message (no backend). Mobile menu auto-closes after navigation.
- **Cross-page Hash Routing:** Clicking anchor links correctly changes the route first (e.g. from `/companies` to `/`) and then smoothly scrolls to the element.
- **SEO Ready:** Unique `<title>`, `<meta description>`, Open Graph tags, and Canonical URLs dynamically handled per page. `robots.txt` and `sitemap.xml` are included.
- **Accessibility (a11y):** Formatted with readable color contrast, functional `aria-labels`, intuitive keyboard focus rings, and readable layout flows.
- **Responsive Design:** Mobile-first design perfectly fits 375px & 390px screens and cleanly scales to 768px, 1024px, and 1440px desktop displays. Overflows are fixed.
- **Cleaned Footer:** Quick links route to Teens, Companies, How It Works, and Contact (project form on the Companies page). No placeholder `#` links.
- **Vercel SPA Ready:** Added `vercel.json` rewrite configuration so direct navigation to subpages like `/companies` will not trigger a 404 error during production hosting.

## 🚀 How to Run

To run the project locally, follow these steps:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` to view the site in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Lint the codebase:**
   ```bash
   npm run lint
   ```

## 🌐 Deployment Instructions (Vercel / Netlify)

This project is fully ready to be deployed. Note: `node_modules` should NEVER be included in your repository. Only commit `package.json` and the source code.

**To deploy using Vercel:**
1. Push this project to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and create a new project.
3. Import your GitHub repository. Vercel will automatically detect Vite and apply the custom `vercel.json` routing configurations.
4. Leave the default settings (`Build Command: npm run build`, `Output Directory: dist`).
5. Click **Deploy**.

**To deploy using Netlify:**
1. Push this project to a GitHub repository.
2. Go to [Netlify](https://netlify.com/) and click "Add new site" -> "Import an existing project".
3. Select your repository.
4. Set Build command to `npm run build` and Publish directory to `dist`.
5. Click **Deploy site**. Netlify may require a `_redirects` file for SPA routing, though standard Vite deploys handle this well.

## 🎨 Design Decisions
- **Color Palette:** Used a youthful, energetic green (`#22C55E`) for the Teen page to inspire growth and learning. For the Company page, a trustworthy and professional blue gradient was used to appeal to corporate entities.
- **Typography:** Used `Inter` for a clean, highly legible SaaS/startup feel.
- **Visuals:** Instead of relying on stock photos which can feel generic, I utilized CSS-based dashboard mockups and floating cards to create a modern tech-platform aesthetic.
- **Code Modularity:** Separated pages and global components (Navbar, Footer) to keep code maintainable and extensible.
