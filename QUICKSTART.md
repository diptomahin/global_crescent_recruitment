# Quick Start Guide - React Version

## 🚀 Get Up and Running in 5 Minutes

### Prerequisites
- Node.js v16+ installed
- GitHub account (optional, for version control)

### Step 1: Install Dependencies (2 min)

```bash
cd global_crescent_recruitment
npm install
```

### Step 2: Start Frontend Dev Server (1 min)

```bash
npm run dev
```

✅ Frontend running: http://localhost:3000

### Step 3: Set Up Backend (2 min)

**In a new terminal:**

```bash
# Create backend directory
mkdir global_crescent_backend
cd global_crescent_backend
npm init -y
npm install express cors dotenv nodemailer

# Copy code from BACKEND_INDEX.md into index.js file
# Create .env file with your Gmail credentials
```

Create `.env`:
```
PORT=5000
NODE_ENV=development
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-char-app-password
FRONTEND_URL=http://localhost:3000
```

### Step 4: Start Backend Server (1 min)

```bash
npm run dev
```

✅ Backend running: http://localhost:5000

### Done! 🎉

Access the application at: **http://localhost:3000**

---

## 📝 Common Tasks

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run dev preview
```

### Test Backend API
```bash
curl -X GET http://localhost:5000/api/health
```

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| [MIGRATION_GUIDE.md](MIGRATION_GUIDE.md) | Detailed migration from Next.js |
| [BACKEND_SETUP.md](BACKEND_SETUP.md) | Backend server setup guide |
| [BACKEND_INDEX.md](BACKEND_INDEX.md) | Express.js backend code |
| [HOSTING_CPANEL.md](HOSTING_CPANEL.md) | cPanel hosting instructions |

---

## 🎯 Next Steps

1. ✅ Customize pages with your content
2. ✅ Update hero sections and components
3. ✅ Test contact form
4. ✅ Deploy to production

---

**Project**: Global Crescent Recruitment  
**Framework**: React + React Router + Tailwind CSS  
**Backend**: Express.js + Nodemailer  
**Last Updated**: April 7, 2026
