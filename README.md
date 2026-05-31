# PGG's Tournament Series

A modern web app to track friendly multi-sport tournaments — F1 seasons, football pools (Copa America / Eurocopa) and a global championship table with titles, points and standings across all editions.

> **Live site:** [https://pgg-tournament-series.web.app](https://pgg-tournament-series.web.app)

---

## Table of Contents

1. [About the app](#about-the-app)
2. [Features](#features)
3. [Tech stack](#tech-stack)
4. [Project structure](#project-structure)
5. [Getting started](#getting-started)
6. [Available scripts](#available-scripts)
7. [Deployment (Firebase Hosting)](#deployment-firebase-hosting)
8. [Routing reference](#routing-reference)
9. [Notes on the backend](#notes-on-the-backend)
10. [Roadmap ideas](#roadmap-ideas)

---

## About the app

PGG's Tournament Series is the home for an ongoing series of friendly tournaments played among a group of friends. It tracks:

- **Past tournaments** — historical archive of every competition played (game, platform, season, tier, champion, runner-up, players, date).
- **Live competitions** — currently active tournaments (F1 season in progress, football prediction pools).
- **Aggregated stats** — points, titles per tier and a global standings table accumulated across every tournament ever played.
- **Detailed sub-experiences** for big tournaments (F1: drivers, calendar, race results, standings per track; Copa America/Eurocopa: prediction pools, leaderboards per player).

The UI is bilingual-friendly (copy is mostly in Spanish), dark-themed with an animated ambient mesh background, glassmorphism cards, and a mobile-first layout.

---

## Features

- **Tournaments table** — full list of registered tournaments with filters and detail view.
- **Titles ranking** — campeones grouped by tier.
- **Standings** — accumulated points leaderboard.
- **Add tournament modal** — protected form to register new tournaments (champion, runner-up, season, tier, platform, players, date).
- **F1 hubs**
  - **F1 2023 (completed)** — rules, drivers, calendar, race results, standings.
  - **F1 2024 (live)** — drivers (with per-driver detail pages via `/driver/:name`), calendar, standings.
  - 16+ track pages (Bahrain, Saudi Arabia, Australia, Imola, Miami, Monaco, Spain, Canada, Austria, Great Britain, Hungary, Belgium, Netherlands, Italy, Singapore, Japan, Azerbaijan...) using a shared track template.
- **Quiniela Copa America / Eurocopa 2024** — football prediction pool with per-player tables and a derived champion via `getQuinielaChampion()`.
- **PWA-ready manifest** with theme color, dark color scheme, icons.
- **React Query** for data fetching, caching and revalidation.
- **Toast notifications** for create/delete feedback.

---

## Tech stack

| Layer | Tooling |
|---|---|
| Framework | **React 18** + **TypeScript** (Create React App / `react-scripts` 5) |
| Routing | `react-router-dom` v6 |
| Data fetching | `react-query` + `axios` |
| Styling | **Tailwind CSS** v3, `tailwind-merge`, `classnames`, `styled-components` + `twin.macro` |
| UI primitives | Custom components in `src/components/ui/*`, plus `@material-tailwind/react`, `keep-react`, `react-icons`, FontAwesome |
| Tables | `react-data-table-component` |
| Forms | `react-hook-form` |
| Toasts | `react-toast-notifications` |
| Tabs | `react-tabs` |
| Hosting | **Firebase Hosting** (CDN + SPA rewrites) |

---

## Project structure

```text
tournaments-table/
├── public/
│   ├── index.html              # SPA shell, fonts, manifest, meta
│   └── manifest.json           # PWA metadata
├── src/
│   ├── app.tsx                 # Router, providers (QueryClient, Toast, Helmet)
│   ├── index.tsx               # React DOM bootstrap
│   ├── index.css / App.css     # Tailwind layers + global styles
│   │
│   ├── components/
│   │   ├── add-tournaments-modal.tsx
│   │   ├── tournament-details-modal.tsx
│   │   ├── home/
│   │   │   ├── slider/slider.tsx
│   │   │   ├── tiers-points/tiers.tsx
│   │   │   └── tournament-rules/rules.tsx
│   │   └── ui/                 # Reusable primitives
│   │       ├── button.tsx, input.tsx, label.tsx, tabs.tsx
│   │       ├── container.tsx, titleBar.tsx, close-button.tsx
│   │       ├── modal/          # modal, form-ui, select, spinners
│   │       └── navBar/         # navBar + navBar-item
│   │
│   ├── pages/
│   │   ├── home.tsx
│   │   ├── tournaments-table.tsx
│   │   ├── tournament-details.tsx
│   │   ├── titles.tsx
│   │   ├── standings.tsx
│   │   ├── live-tournaments/
│   │   │   ├── live-tournaments.tsx
│   │   │   ├── formula-one-tournament/        # F1 2024 hub
│   │   │   └── euro-cup-and-americas-cup-pools/
│   │   └── completed-tournaments/
│   │       ├── completed-tournaments.tsx
│   │       └── formula-one-tournament/        # F1 2023 hub + per-track pages
│   │
│   ├── hooks/
│   │   └── use-tournaments.ts  # GET / POST / DELETE tournaments via react-query
│   │
│   └── domain/
│       ├── table-data/tables-columns.tsx
│       └── utils/quiniela-leaderboard.ts
│
├── firebase.json               # Hosting config (public dir, rewrites, headers)
├── .firebaserc                 # Pinned Firebase project: pgg-tournament-series
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## Getting started

### Prerequisites

- **Node.js 18+** (CRA 5 supports 14+, but 18 LTS is recommended)
- **npm 9+**
- A running backend that exposes a `/tournament` REST endpoint (see [Notes on the backend](#notes-on-the-backend))

### Install

This project has some legacy peer-dependency mismatches (`react-toast-notifications` predates React 18). Install with the legacy peer-deps flag:

```bash
npm install --legacy-peer-deps
```

### Run locally

```bash
npm start
```

Opens [http://localhost:3000](http://localhost:3000) with hot reload.

---

## Available scripts

| Command | What it does |
|---|---|
| `npm start` | Dev server on `:3000` with HMR. |
| `npm run build` | Production build into `build/` (minified, hashed assets). |
| `npm test` | Jest + React Testing Library in watch mode. |
| `npm run deploy` | Builds and deploys to Firebase Hosting (`firebase deploy --only hosting`). |
| `npm run deploy:preview` | Builds and pushes to a Firebase **preview channel** named `preview` (temporary URL, doesn't replace the live site). Great for sharing a WIP before going live. |

---

## Deployment (Firebase Hosting)

The app is hosted on **Firebase Hosting** under the project `pgg-tournament-series`.

- **Production URL:** [https://pgg-tournament-series.web.app](https://pgg-tournament-series.web.app)
- **Alternate URL:** [https://pgg-tournament-series.firebaseapp.com](https://pgg-tournament-series.firebaseapp.com)

### One-time setup (per developer machine)

1. Install the Firebase CLI globally (if you don't have it):
   ```bash
   npm install -g firebase-tools
   ```
2. Log in with the Google account that owns / has access to the Firebase project:
   ```bash
   firebase login
   ```
3. Sanity-check that the right project is selected:
   ```bash
   firebase projects:list
   firebase use pgg-tournament-series
   ```

### Deploying

```bash
npm run deploy
```

This runs the production build and pushes the contents of `build/` to Firebase Hosting. The script ends with a printout of the live URL.

### Preview channels (recommended for review before going live)

```bash
npm run deploy:preview
```

Firebase returns a temporary URL like `https://pgg-tournament-series--preview-abcd1234.web.app`. Channels expire automatically (default 7 days).

### Hosting configuration

See `firebase.json`. Highlights:

- `"public": "build"` — serves the CRA production bundle.
- **SPA rewrite** — every unknown path is rewritten to `/index.html` so client-side routing works on hard refresh / deep links.
- **Caching headers**:
  - Hashed static assets (`/static/**`) → `max-age=31536000, immutable` (cache forever).
  - `index.html` and `asset-manifest.json` → `no-cache` (always fresh).
  - Images/fonts → `max-age=2592000` (30 days).
- `"cleanUrls": true` — drops trailing `.html`.

> **Important:** Because the app is now served at the **root** of a domain, `src/app.tsx` uses a plain `<Router>` (no `basename`). If you ever serve under a subpath again (e.g. GitHub Pages), restore `<Router basename="/your-subpath">`.

---

## Routing reference

| Path | Page |
|---|---|
| `/` | Home — slider, rules, tiers, quick links |
| `/tournaments-table` | Full tournaments table |
| `/tournament-details` | Detail view for a selected tournament |
| `/titles` | Titles ranking by tier |
| `/standings` | Accumulated points leaderboard |
| `/live-tournaments` | Currently active tournaments hub |
| `/completed-tournaments` | Archive of finalized tournaments |
| `/formula-1-2023` | F1 2023 (completed) hub |
| `/formula-1-2024` | F1 2024 (live) hub |
| `/driver/:name` | Per-driver detail page |
| `/americas-and-euro-cup-2024` | Copa America / Eurocopa 2024 prediction pool |

---

## Notes on the backend

`src/hooks/use-tournaments.ts` calls a `common-http` instance against a `/tournament` REST endpoint. The backend is **not part of this repo** — it must be running and reachable for tournament data to load. If you're forking the project, point `common-http` at your own API (or stub `useGetTournaments` to read from a static JSON).

If you later want to use **Firebase services** (Firestore, Auth, Analytics) inside the app, install the SDK:

```bash
npm install firebase --legacy-peer-deps
```

…and create `src/firebase.ts` initializing it with the web config from the Firebase Console. Keep credentials in `.env.local` as `REACT_APP_FIREBASE_*` (the Firebase web API key isn't strictly a secret, but you should still restrict it to your domain in Google Cloud Console → APIs & Services → Credentials).

---

## Roadmap ideas

- Migrate `react-toast-notifications` → `sonner` or `react-hot-toast` to drop `--legacy-peer-deps`.
- Move tournament data into **Firestore** so the site becomes fully serverless (no separate backend).
- Add **Firebase Authentication** so only admins can use the "Add Tournament" modal.
- GitHub Actions workflow for **automatic deploy on push to `main`** (using a Firebase service account secret).
- Per-PR **preview channels** wired into GitHub for reviewable URLs on every PR.
- Add unit tests for `domain/utils/quiniela-leaderboard.ts` and the tournament hooks.
