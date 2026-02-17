# Wednesday Solutions

Minimal empty boilerplate: Next.js + Express.

## Structure

```
├── frontend/   # Next.js (App Router)
├── backend/    # Express (single file)
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Setup

```bash
cp .env.example .env
npm run install:all
```

## Run

```bash
npm run dev
```

Backend: http://localhost:3001 · Frontend: http://localhost:3000

## Build & start

```bash
npm run build
npm run start
```

## Env

`PORT` (default 3001), `NODE_ENV`

## API

`GET /api/health` → `{ "status": "ok" }`
