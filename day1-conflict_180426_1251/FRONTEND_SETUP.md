# ReVearth Frontend - Setup & Run Guide

## Prerequisites
You need **Node.js 18+** (which includes npm). Node.js is NOT currently installed on your system.

### Install Node.js

Choose one option:

#### Option 1: Download Installer (Recommended)
1. Go to https://nodejs.org/
2. Download the **LTS (Long Term Support)** version
3. Run the installer and follow the steps
4. Restart your terminal/VS Code after installation

#### Option 2: Using Windows Package Manager
```powershell
# If you have winget installed, run:
winget install OpenJS.NodeJS
```

#### Option 3: Using Chocolatey
```powershell
# If you have Chocolatey installed, run:
choco install nodejs
```

---

## Setup Frontend

Once Node.js is installed, run these commands:

```powershell
# Navigate to frontend directory
cd "c:\Users\HP\Downloads\day1-conflict_180426_1251\day1-conflict_180426_1251\frontend"

# Install dependencies
npm install

# Start development server
npm start
```

The website will open at: **http://localhost:3000**

---

## What You'll See

The ReVearth website with:
- ✅ Cinematic splash screen with animations
- ✅ Sticky navigation bar
- ✅ Hero section with word cycling animations
- ✅ Multiple content sections with scroll-triggered animations
- ✅ Professional design with Tailwind CSS
- ✅ Fully responsive (works on mobile, tablet, desktop)

---

## Available Commands

```bash
# Start development server (with hot reload)
npm start

# Run tests
npm test

# Build for production
npm run build

# Eject configuration (⚠️ cannot be undone)
npm run eject
```

---

## Troubleshooting

### "npm: command not found"
- Node.js is not installed or not in PATH
- Restart terminal/VS Code after installing Node.js
- Verify: `node --version`

### Port 3000 already in use
```bash
# Use a different port
PORT=3001 npm start
```

### Dependencies installation fails
```bash
# Clear npm cache and try again
npm cache clean --force
rm package-lock.json
npm install
```

### Module not found errors
```bash
# Delete node_modules and reinstall
rm -r node_modules
npm install
```

---

## Project Structure

```
frontend/
├── src/
│   ├── App.js                 # Main app component
│   ├── components/
│   │   ├── Splash.js          # Loading screen
│   │   ├── Navbar.js          # Navigation bar
│   │   ├── sections/          # Page sections (Hero, Story, etc.)
│   │   └── ui/                # Reusable UI components
│   └── index.js               # App entry point
├── public/
│   └── index.html             # HTML template
└── package.json
```

---

## Next Steps

1. ✅ Install Node.js
2. ✅ Run `npm install`
3. ✅ Run `npm start`
4. View the website at http://localhost:3000
5. Check [PROJECT_ANALYSIS.md](PROJECT_ANALYSIS.md) for what needs to be done next
