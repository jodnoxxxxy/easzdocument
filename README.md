# DocForge 🚀

DocForge is a modern document and LaTeX compilation engine with real-time editing, AI-assisted document/vision analysis, and PDF generation powered by Tectonic.

---

## 🚀 Quick Start

### Prerequisites
- **Node.js**: `v20` or higher
- **Package Manager**: `npm`, `yarn`, or `pnpm`
- **MongoDB**: Local instance running on `mongodb://127.0.0.1:27017/acadoc` or a MongoDB Atlas URI

---

### 1. Clone & Setup Project
```bash
git clone https://github.com/your-username/docfoge.git
cd docfoge
```

---

### 2. Configure Backend Environment
Navigate to the `backend/` directory and create `.env` based on `.env.example`:

```bash
cd backend
cp .env.example .env
```

Edit `backend/.env` with your credentials:
```env
PORT=3001
MONGO_URI=mongodb://127.0.0.1:27017/acadoc
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=7d
GEMINI_API_KEY=your_gemini_api_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Install backend dependencies (*downloads and configures the Tectonic binary automatically via postinstall*):
```bash
npm install
```

Start the backend development server:
```bash
npm run dev
```
> Backend will be running at `http://localhost:3001`

---

### 3. Setup & Start Frontend
Open a new terminal tab and navigate to `frontend/`:

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```
> Frontend will be running at `http://localhost:5173`

---

## 📡 Backend API Reference

### Core API Endpoints

| Category | Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- | :---: |
| **Health** | `GET` | `/api/health` | Backend status check | ❌ |
| **Auth** | `POST` | `/api/auth/register` | Register new user account | ❌ |
| **Auth** | `POST` | `/api/auth/login` | Authenticate user & receive JWT token | ❌ |
| **Auth** | `GET` | `/api/auth/me` | Fetch current user session | ✅ |
| **Projects** | `GET` | `/api/projects` | List all projects for authenticated user | ✅ |
| **Projects** | `POST` | `/api/projects` | Create or update user project | ✅ |
| **Projects** | `POST` | `/api/projects/sync` | Sync & merge guest local projects into account | ✅ |
| **Compile** | `POST` | `/api/compile` | Compile document into PDF via Tectonic engine | ❌ |
| **Vision** | `POST` | `/api/vision/analyze` | AI image-to-LaTeX / document analysis | ❌ |
| **Images** | `POST` | `/api/images/upload` | Upload image to Cloudinary CDN | ✅ |

---

## 📂 Project Structure

```text
docFoge/
├── backend/
│   ├── src/
│   │   ├── config/          # MongoDB database connection setup
│   │   ├── controllers/     # Express route handlers (auth, projects, compile, vision)
│   │   ├── middleware/      # Auth & file upload middleware
│   │   ├── models/          # Mongoose schemas (User, Project, Template)
│   │   ├── routes/          # Express API route declarations
│   │   └── services/        # Tectonic compiler & Cloudinary integrations
│   ├── server.js            # Express server initialization & keep-alive
│   ├── setup_tectonic.js    # Downloads and pre-configures Tectonic LaTeX binary
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/      # Shared UI widgets (Toast, Modal, Spinner)
│   │   ├── contexts/        # Zustand stores (projectStore, authStore)
│   │   ├── features/        # Main modules (Auth, Dashboard, Editor, NewProject)
│   │   ├── pages/           # Page routes (Home, PdfTesterPage)
│   │   ├── services/        # API client & fetch wrappers
│   │   ├── App.jsx          # React router setup & auth bootstrap
│   │   └── main.jsx         # React DOM root entry point
│   ├── package.json
│   └── vite.config.js
└── README.md                # Project documentation
```

---

## 🧪 Testing & Verification

### Verify Backend Health
```bash
curl http://localhost:3001/api/health
```

### Test PDF Compilation Engine
```bash
curl -X POST http://localhost:3001/api/compile \
  -H "Content-Type: application/json" \
  -d '{"content": "# Hello World\nThis is a Tectonic test compile."}'
```
