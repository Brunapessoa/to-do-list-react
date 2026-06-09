# Tasks Management

A client-side task management app built with React 19. Supports creating, completing, and deleting tasks, with a detail view for each entry. State is persisted via localStorage — no backend required.

**Live:** https://brunapessoa.github.io/to-do-list-react

## Stack

| Layer | Tech |
|---|---|
| UI | React 19 + Tailwind CSS v4 |
| Routing | React Router v7 |
| Build | Vite 8 |
| Icons | Lucide React |
| IDs | uuid v14 |
| Deploy | gh-pages |

## Architecture

Single-page app with two routes:

- `/` — task list with add, complete, and delete actions
- `/details` — read-only detail view, receives task data via URL search params

State lives in `App.jsx` and is passed down as props. No global state manager — scope doesn't justify it. `localStorage` sync happens via `useEffect` on every state change.

## Running locally

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run deploy
```

Builds to `dist/` and pushes to the `gh-pages` branch.
