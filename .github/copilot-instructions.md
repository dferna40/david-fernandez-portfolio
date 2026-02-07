<!-- Auto-generated guidance for AI coding agents working on this repo -->
# Copilot / AI Agent Instructions — david-fernandez-portfolio

Purpose: Give concise, actionable guidance so an AI agent can be productive immediately.

- Project type: Single-page Vite + React (no backend). Entry: `index.html` → `src/main.jsx`.
- Primary UI files: `src/App.jsx` and other `.jsx` files under `src/`.

Quick commands
- Dev server (HMR): `npm run dev` (runs `vite`).
- Build production bundle: `npm run build` (runs `vite build`).
- Preview production build locally: `npm run preview`.
- Lint: `npm run lint` (uses the repo's `eslint.config.js`).

Big picture / architecture notes
- Vite serves an ES module SPA. `index.html` includes `<script type="module" src="/src/main.jsx">`.
- `src/main.jsx` mounts the React tree via `createRoot(...).render(...)`. Keep that entry stable.
- `src/App.jsx` is the primary demo/landing component; components import CSS directly.
- Styling is plain CSS files in the repo (`src/index.css`, `src/App.css`).
- Static assets:
  - `src/assets/` for component-scoped imports (e.g. `import reactLogo from './assets/react.svg'`).
  - Files referenced with absolute paths (e.g. `/vite.svg`) resolve from Vite's root/public.

Conventions & patterns specific to this repo
- Use `.jsx` for React components (not `.tsx`). The codebase uses modern React (hooks, `StrictMode`) — e.g. `src/App.jsx`.
- Prefer module-style imports and keep `type: "module"` in `package.json`.
- Minimal state: components use `useState` and small local state only. Follow that simple, component-driven pattern.
- Do not introduce a backend or server-runtime changes; this is a static frontend portfolio site.

Linting & formatting
- ESLint is configured via `eslint.config.js`. Run `npm run lint` before proposing code-style changes.
- Important rule: `no-unused-vars` is configured to ignore variables matching `^[A-Z_]` (see `eslint.config.js`).

Where to change things safely
- Add routes or components under `src/` and import them from `src/main.jsx` or `src/App.jsx`.
- Add shared components under `src/components/` (create the folder if missing). Example import: `import MyComp from './components/MyComp.jsx'`.
- For images/icons used site-wide, prefer `public/` for truly static assets; use `src/assets/` for module imports.

Examples (practical snippets)
- Add a new component file and import it in `src/App.jsx`:
  - `src/components/Hello.jsx` -> `export default function Hello(){ return <div>Hello</div> }`
  - In `src/App.jsx`: `import Hello from './components/Hello.jsx'` then use `<Hello />`.
- Test HMR: run `npm run dev`, edit `src/App.jsx`, save and observe the browser update.

Integration points / external deps
- Core deps: `react`, `react-dom`, dev uses `vite` and `@vitejs/plugin-react` (see `package.json`).
- No external APIs, servers, or database integrations are present in the repository.

Guidelines for PRs by AI agents
- Keep changes minimal and focused (one logical change per PR).
- Run `npm run dev` locally to sanity-check HMR changes and `npm run lint` to check ESLint.
- Do not modify `package.json` scripts or `vite.config.js` unless necessary and explain why.

What this doc does NOT cover
- There are no tests or test harnesses in the repo. If adding tests, document the framework and scripts you introduce.

If any section is unclear or you want examples for component structure, tell me which area to expand (routing, styling, components, or build).
