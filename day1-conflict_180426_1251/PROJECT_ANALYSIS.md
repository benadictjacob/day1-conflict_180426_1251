# ReVearth Website - Project Analysis & Setup Guide

## Project Overview
**ReVearth** is a sustainability/waste management company website built with modern web technologies. It features cinematic animations, responsive design, and is powered by `emergentintegrations` package for backend services.

**Status**: ✅ All 15 frontend tests PASSED (100% success rate)

---

## Architecture

### Frontend Stack
- **Framework**: React 19.0.0
- **Styling**: Tailwind CSS v3 + PostCSS
- **Animations**: Framer Motion 12.38.0
- **UI Components**: Radix UI (extensive component library)
- **Routing**: React Router DOM 7.5.1
- **Build Tool**: Create React App (CRA) with Craco
- **HTTP Client**: Axios 1.8.4

### Backend Stack
- **Framework**: FastAPI 0.110.1
- **Server**: Uvicorn 0.25.0
- **Database**: MongoDB (async via Motor 3.3.1)
- **Authentication**: JWT + bcrypt + passlib
- **Custom Integration**: emergentintegrations 0.1.0
- **Testing**: pytest 8.0.0
- **Code Quality**: Black, isort, flake8, mypy

---

## Project Structure

```
project/
├── frontend/                 # React SPA
│   ├── src/
│   │   ├── components/
│   │   │   ├── sections/     # Page sections (Hero, Story, CTA, etc.)
│   │   │   ├── ui/           # Radix UI component wrappers
│   │   │   ├── AnimatedText.js
│   │   │   ├── Navbar.js
│   │   │   └── Splash.js     # Loading screen with animations
│   │   ├── hooks/            # Custom React hooks
│   │   ├── lib/              # Utilities
│   │   └── App.js            # Main app component
│   ├── public/               # Static assets
│   ├── plugins/              # Webpack plugins (health-check)
│   └── package.json
│
├── backend/                  # FastAPI server
│   ├── server.py             # Main app & API routes
│   └── requirements.txt       # Python dependencies
│
├── tests/                    # Test suite
├── memory/
│   └── PRD.md               # Product Requirements Doc
└── README.md
```

---

## Key Features Implemented

### ✅ Frontend Features
- **Splash Screen**: 0-100% counter, logo pulse, letter-by-letter 3D reveal, smooth fade-out
- **Hero Section**: Word cycling animation ("REIMAGINE/REVIVE/RESTORE")
- **Navigation**: Sticky navbar with scroll state detection, mobile hamburger menu
- **Animations**: 
  - Character-by-character reveal (scroll-triggered)
  - Word-by-word reveal animations
  - Scale reveals, fade ups, line reveals
  - Hover effects on cards
- **Sections**: DualPanel, Belief, Story (with Unsplash images), Ticker, WhatWeDo, VisionMission, CTA, Footer
- **Design**: Grain texture overlay, grid patterns, decorative elements

### 🔧 Backend Features
- RESTful API with FastAPI
- MongoDB integration for data persistence
- JWT-based authentication
- Status check endpoints
- CORS enabled

---

## Setup Instructions

### Prerequisites
- **Python 3.9+** (for backend)
- **Node.js 18+** & npm (for frontend)
- **MongoDB** (local or cloud instance)

### Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
cat > .env << EOF
MONGO_URL=mongodb://localhost:27017/
DB_NAME=revearth_db
EOF

# Run development server
uvicorn server:app --reload --host 0.0.0.0 --port 8000
```

**Backend API**: http://localhost:8000
**API Docs**: http://localhost:8000/docs (Swagger UI)

### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Create .env file (if needed for API communication)
cat > .env << EOF
REACT_APP_API_URL=http://localhost:8000
EOF

# Run development server
npm start
```

**Frontend App**: http://localhost:3000

---

## Testing

### Frontend Tests
```bash
cd frontend
npm test
```
- ✅ All 15 test cases passing

### Backend Tests
```bash
cd backend
source venv/bin/activate  # Activate virtual environment
pytest
```

---

## What Needs to Be Done (Backlog)

### P1 (High Priority)
- [ ] Add smooth page transition effects between sections on navigation click
- [ ] Implement custom cursor effect on hover (reference: maelanlemeur.com)
- [ ] Optimize images with blur placeholders (lazy loading exists)

### P2 (Medium Priority)
- [ ] Performance optimization & bundle size reduction
- [ ] SEO optimization (meta tags, structured data)
- [ ] Analytics integration
- [ ] Email contact form integration

### P3 (Low Priority)
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Blog/News section
- [ ] Case studies section

---

## Important Configuration Files

### Frontend
- **tailwind.config.js**: Tailwind CSS configuration with custom theme
- **craco.config.js**: CRA configuration overrides
- **jsconfig.json**: Path aliases (@ = src/)
- **components.json**: Shadcn/ui configuration

### Backend
- **requirements.txt**: All Python dependencies including `emergentintegrations`
- **server.py**: FastAPI app setup with MongoDB connection

---

## Environment Variables Required

### Backend (.env)
```
MONGO_URL=mongodb://[user]:[password]@[host]:27017/
DB_NAME=revearth_db
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:8000
```

---

## Known Issues & Notes

1. **emergentintegrations Package**: Custom integration package (v0.1.0) - ensure MongoDB is running
2. **CORS**: Set up in FastAPI to allow frontend requests (currently configured)
3. **Environment Setup**: Backend requires MongoDB URL in `.env` file
4. **Images**: Uses Unsplash for real content images

---

## Quick Start Commands

```bash
# Terminal 1 - Backend
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
echo "MONGO_URL=mongodb://localhost:27017/
DB_NAME=revearth_db" > .env
uvicorn server:app --reload

# Terminal 2 - Frontend
cd frontend
npm install
npm start
```

---

## Deployment Checklist

- [ ] Set production environment variables
- [ ] Build frontend: `npm run build`
- [ ] Configure MongoDB instance
- [ ] Set up HTTPS/SSL
- [ ] Deploy backend to hosting service
- [ ] Deploy frontend to CDN/static hosting
- [ ] Update API endpoints to production
- [ ] Set up CI/CD pipeline
- [ ] Configure monitoring and logging

---

## Resources

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [React Documentation](https://react.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MongoDB](https://www.mongodb.com/)
