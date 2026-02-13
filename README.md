# Vo Hoang Minh Tri - AI Portfolio

A modern, performant portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features an AI lab aesthetic with glassmorphism design, dark/light mode, and optimized for Lighthouse scores >= 95.

## Features

- **Next.js 14 App Router** with static export (SSG)
- **TypeScript** for type safety
- **Tailwind CSS** with custom theme and glassmorphism effects
- **Dark/Light Mode** with system preference detection
- **SEO Optimized** with metadata, sitemap.xml, robots.txt
- **Responsive Design** for all screen sizes
- **Minimal JavaScript** for fast loading
- **Accessible** following WCAG guidelines
- **CV Download** available in header and about page

## Pages

- `/` - Home with hero, featured projects, and CTAs
- `/projects` - Full project list with search and tag filtering
- `/about` - Bio, education, experience timeline, awards, and skills
- `/contact` - Contact form with email integration

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build (after build)
npx serve out
```

## Deployment

### Vercel (Recommended - 2 minutes)

1. Push code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) and sign in with GitHub

3. Click **"Add New Project"** → Import your repository

4. Set environment variable (optional but recommended):
   - Name: `NEXT_PUBLIC_SITE_URL`
   - Value: `https://your-project.vercel.app` (update after first deploy)

5. Click **Deploy** - Your site will be live in ~1 minute

6. After deploy, copy the production URL and update `NEXT_PUBLIC_SITE_URL`

### Netlify (Alternative - 2 minutes)

1. Push code to GitHub (same as above)

2. Go to [netlify.com](https://netlify.com) and sign in with GitHub

3. Click **"Add new site"** → **"Import an existing project"**

4. Select your repository

5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `out`

6. Add environment variable:
   - Name: `NEXT_PUBLIC_SITE_URL`
   - Value: Your Netlify URL

7. Click **Deploy site**

### CLI Deployment (if logged in)

```bash
# Vercel
npx vercel --prod

# Set production URL after first deploy
npx vercel env add NEXT_PUBLIC_SITE_URL
```

## Customizing Content

All portfolio content is stored in `info/data.json`. Edit this file to update your information.

## Performance

Target Lighthouse scores (all >= 95):
- Performance: >= 95
- Accessibility: >= 95
- Best Practices: >= 95
- SEO: >= 95

## Project Structure

```
portfolio/
├── info/
│   ├── data.json          # Portfolio content
│   └── CV_vhmtri.pdf      # Original CV
├── public/
│   ├── avatar.jpg         # Profile photo
│   ├── cv.pdf             # Downloadable CV
│   ├── favicon.svg        # Site favicon
│   ├── og.png             # OG image (add this)
│   └── images/            # Project images (add these)
├── src/
│   ├── app/               # Next.js pages
│   ├── components/        # React components
│   └── lib/               # Data utilities
└── package.json
```

## License

MIT License
