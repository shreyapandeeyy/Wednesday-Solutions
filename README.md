# Wednesday Solutions

## Project overview

Minimal empty full-stack boilerplate: Next.js (frontend) and Express (backend). Use it as a starting point for new projects.

## Folder structure

```
├── frontend/   # Next.js (App Router)
├── backend/    # Express (single file)
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Setup steps

1. Clone the repo and open the project folder.
2. Copy the example env file:
   ```bash
   cp .env.example .env
   ```
3. Install dependencies for root, backend, and frontend:
   ```bash
   npm run install:all
   ```
   Or install in each folder: `npm install` in project root, then in `backend/`, then in `frontend/`.

## How to run backend

From the project root:

```bash
npm run dev:backend
```

Or from the backend folder:

```bash
cd backend
npm run dev
```

Backend runs at **http://localhost:3001**. Health check: `GET /api/health` → `{ "status": "ok" }`.

## How to run frontend

From the project root:

```bash
npm run dev:frontend
```

Or from the frontend folder:

```bash
cd frontend
npm run dev
```

Frontend runs at **http://localhost:3000**.

**Run both together:**

```bash
npm run dev
```

## Environment variable setup

1. Copy `.env.example` to `.env` in the project root (or in `backend/` if you run the backend from there).
2. Edit `.env` if needed:

| Variable   | Description           | Default  |
|-----------|------------------------|----------|
| `PORT`    | Backend server port    | `3001`   |
| `NODE_ENV`| `development` or `production` | `development` |

## How to build

From the project root:

```bash
npm run build
```

This builds the frontend (Next.js) into `frontend/.next/`. The backend has no build step and runs from source.

## How to deploy

1. **Build** the frontend: `npm run build` (or `cd frontend && npm run build`).
2. **Backend**: Run `node index.js` in the `backend/` folder on your server. Set `NODE_ENV=production` and `PORT` as needed.
3. **Frontend**: Run `npm run start` in the `frontend/` folder, or serve the output with a Node server / static host depending on your setup.
4. Point your frontend to the deployed backend URL (e.g. via env or config) if the app calls the API.

For platform-specific steps (Vercel, Railway, etc.), follow their docs for Node.js and Next.js.
