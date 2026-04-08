# React + React Router DOM Migration Guide

## Project Conversion Summary

Your Global Crescent Recruitment website has been successfully converted from **Next.js** to **React + React Router DOM + Tailwind CSS**. This document provides an overview of the changes and deployment instructions.

## What Changed

### Before (Next.js)
- File-based routing in `app/` folder
- Built-in API routes
- Server-side rendering
- Next.js specific components (Link, Image)
- Next.js specific configuration

### After (React + React Router)
- Client-side routing with React Router
- Separate backend API server (Express.js)
- Pure React components
- Standard HTML/CSS practices
- Vite for faster development

## Project Structure

```
src/
├── main.jsx              # React entry point
├── App.jsx              # Main app with React Router
├── globals.css          # Global styles
├── pages/               # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Employers.jsx
│   ├── Workers.jsx
│   ├── Industries.jsx
│   └── OurApproach.jsx
└── components/
    ├── common/          # Shared components
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   └── WhatsAppButton.jsx
    └── contact/
        └── ContactForm.jsx

Configuration Files:
├── vite.config.js       # Vite build configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── package.json         # Dependencies
└── index.html          # HTML entry point
```

## Getting Started

### Step 1: Install Dependencies

```bash
cd global_crescent_recruitment
npm install
```

### Step 2: Set Up Backend

Follow the instructions in [BACKEND_SETUP.md](BACKEND_SETUP.md) to set up the Express.js backend server.

```bash
# Create backend directory
mkdir global_crescent_backend
cd global_crescent_backend
npm init -y
npm install express cors dotenv nodemailer

# Copy the code from BACKEND_INDEX.md into index.js
# Create .env file with credentials
```

### Step 3: Run Frontend Development Server

```bash
npm run dev
```

Access at: `http://localhost:3000`

### Step 4: Run Backend (in separate terminal)

```bash
cd global_crescent_backend
npm run dev
```

Backend will run at: `http://localhost:5000`

## Key Differences from Next.js

### 1. Routing

**Before (Next.js)**:
```jsx
// File structure: app/about/page.jsx
import Link from 'next/link'

export default function About() {
  return <Link href="/contact">Contact</Link>
}
```

**After (React Router)**:
```jsx
// File: src/pages/About.jsx
import { Link } from 'react-router-dom'

export default function About() {
  return <Link to="/contact">Contact</Link>
}
```

### 2. Image Handling

**Before (Next.js)**:
```jsx
import Image from 'next/image'

<Image
  src="/logo.png"
  alt="Logo"
  width={100}
  height={100}
/>
```

**After (React)**:
```jsx
<img
  src="/logo.png"
  alt="Logo"
  width="100"
  height="100"
/>
```

### 3. API Requests

**Before (Next.js)**:
```jsx
// Built-in API routes at api/contact/route.js
const response = await fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify(data)
})
```

**After (React + Express)**:
```jsx
// External API server at localhost:5000
import axios from 'axios'

const response = await axios.post('/api/contact', data)
```

### 4. Environment Variables

**Before (Next.js)**:
```
NEXT_PUBLIC_API_URL=...
```

**After (React + Vite)**:
```
VITE_API_URL=...
```

Access in code: `import.meta.env.VITE_API_URL`

## Running in Development

### Terminal 1: Frontend
```bash
npm run dev
# Running on http://localhost:3000
```

### Terminal 2: Backend
```bash
cd global_crescent_backend
npm run dev
# Running on http://localhost:5000
```

## Building for Production

### Frontend Build

```bash
npm run build
```

This creates an optimized `dist/` folder.

### Backend Build

No build needed for backend, just deploy the files.

## Deployment

### Deploy Frontend (React App)

**Option 1: Vercel**
```bash
npm install -g vercel
vercel
```

**Option 2: Netlify**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

**Option 3: GitHub Pages**
Update `vite.config.js`:
```javascript
export default {
  base: '/repo-name/',
  // ... other config
}
```

### Deploy Backend (Express Server)

See [HOSTING_CPANEL.md](HOSTING_CPANEL.md) for cPanel deployment instructions.

**Other Hosting Options:**
- Heroku
- DigitalOcean
- AWS EC2/Lambda
- Render.com
- Railway.app

## Environment Variables

### Frontend (.env)
```
VITE_API_URL=http://api.yourdomain.com
```

### Backend (.env)
```
PORT=5000
NODE_ENV=production
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=xxxx-xxxx-xxxx-xxxx
FRONTEND_URL=https://yourdomain.com
```

## Common Issues & Solutions

### Issue: CORS Error
**Solution**: Update `FRONTEND_URL` in backend `.env`
```
FRONTEND_URL=http://localhost:3000
```

### Issue: API calls not working
**Solution**: Ensure backend is running on port 5000 and vite proxy is configured

### Issue: Styling not applied
**Solution**: Ensure Tailwind CSS is properly configured
```bash
npm run build  # Rebuild to compile Tailwind
```

### Issue: Images not showing
**Solution**: Check images are in `public/` folder and use correct path

## Migrating from Next.js Features

### SEO Meta Tags

**Before (Next.js)**:
```jsx
export const metadata = {
  title: 'Home',
  description: 'Welcome'
}
```

**After (React)**:
Add to `index.html`:
```html
<meta name="description" content="Welcome" />
```

Or use `react-helmet`:
```bash
npm install react-helmet
```

```jsx
import { Helmet } from 'react-helmet'

<Helmet>
  <title>Home</title>
  <meta name="description" content="Welcome" />
</Helmet>
```

### API Routes

**Before (Next.js)**:
- API at `app/api/contact/route.js`

**After (Express)**:
- API at `global_crescent_backend/index.js`
- Endpoint: `POST /api/contact`

## Development Workflow

### Creating New Pages

1. Create file in `src/pages/PageName.jsx`:
```jsx
export default function PageName() {
  return <div>Page content</div>
}
```

2. Add route in `src/App.jsx`:
```jsx
import PageName from './pages/PageName'

<Route path="/pagename" element={<PageName />} />
```

### Creating New Components

1. Create file in `src/components/ComponentName.jsx`:
```jsx
export default function ComponentName() {
  return <div>Component content</div>
}
```

2. Import and use in pages/components:
```jsx
import ComponentName from '../components/ComponentName'

<ComponentName />
```

## Scripts Reference

```json
{
  "dev": "vite",              // Start dev server
  "build": "vite build",      // Build for production
  "preview": "vite preview"   // Preview production build
}
```

## Performance Tips

1. **Code Splitting**: React Router automatically handles route-based code splitting
2. **Image Optimization**: Use WebP format, compress images before use
3. **Caching**: Backend automatically handles caching headers
4. **Bundling**: Vite provides optimal bundle size

## Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Set up backend (see BACKEND_SETUP.md)
3. ✅ Run development servers
4. ✅ Test contact form
5. ✅ Customize pages with your content
6. ✅ Deploy frontend and backend separately

## Support Resources

- React Documentation: https://react.dev/
- React Router Documentation: https://reactrouter.com/
- Vite Documentation: https://vitejs.dev/
- Tailwind CSS Documentation: https://tailwindcss.com/
- Express.js Documentation: https://expressjs.com/

## File Changes Summary

| Old Path | New Path | Status |
|----------|----------|--------|
| `app/page.jsx` | `src/pages/Home.jsx` | ✅ Migrated |
| `app/about/page.jsx` | `src/pages/About.jsx` | ✅ Migrated |
| `app/contact/page.jsx` | `src/pages/Contact.jsx` | ✅ Migrated |
| `app/employers/page.jsx` | `src/pages/Employers.jsx` | ✅ Migrated |
| `app/workers/page.jsx` | `src/pages/Workers.jsx` | ✅ Migrated |
| `app/industries/page.jsx` | `src/pages/Industries.jsx` | ✅ Migrated |
| `app/our-approach/page.jsx` | `src/pages/OurApproach.jsx` | ✅ Migrated |
| `app/api/contact/route.js` | Backend Express | ✅ Migrated |
| `app/components/*` | `src/components/*` | ✅ Migrated |
| `next.config.js` | `vite.config.js` | ✅ Migrated |

---

**Project**: Global Crescent Recruitment  
**Conversion Date**: April 7, 2026  
**Migration Type**: Next.js → React + React Router  
**Status**: ✅ Complete
