# Copilot / AI Agent Instructions

Purpose: help AI coding agents be immediately productive in this Vite + React + TypeScript app.

- Project type: Vite + React 19 + TypeScript (see [package.json](package.json)).
- Build & dev commands: `npm install`, `npm run dev` (vite), `npm run build` (runs `tsc -b` then `vite build`), `npm run preview`.
- Lint: `npm run lint` (ESLint config at `eslint.config.js`).

Key files & entrypoints
- App bootstrap: [src/main.tsx](src/main.tsx) → [src/App.tsx](src/App.tsx).
- HTTP client/service: [api.ts](api.ts) (axios instance, TheDogAPI, API key currently checked-in).
- Components: [src/components](src/components) — each component lives in its own folder with `Component.tsx` + `Component.css`.
- Shared types: [src/components/types](src/components/types) (e.g., `Post.ts` exports `DogPost`, `PostProps`).

Architecture & data flow
- Simple single-page app: `App` calls `fetchPosts()` (from `api.ts`), stores `DogPost[]` in state and passes down to `Feed` → `Post`.
- Network layer: `api.ts` creates an axios instance with `baseURL` and `x-api-key` header. Prefer adding new endpoints here or create `src/services/*`.
- UI composition: components are presentational + small local state. Use props + callbacks for interactions (e.g., `Post` exposes `onImageClick` for modal handling).

Project-specific conventions
- Component layout: folder-per-component with `Component.tsx` and `Component.css`. Keep styles as plain CSS files (not CSS modules).
- Types are centralized under `src/components/types/*`. When adding a new component that needs types, add a file there and import it from sibling components.
- Avoid duplicate network responses: `App` demonstrates deduplication by `id` after fetch — follow this pattern when handling list data.
- React Strict Mode: dev double-render is handled in `App` via `useRef` guarding fetches — mirror this pattern for one-off effects in development when necessary.

TypeScript & toolchain notes
- `tsconfig.app.json` is configured for bundler resolution, `noEmit: true`, and stricter checks (`noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`). Builds run `tsc -b` first, so ensure project-level type checks pass.
- Node + Vite: rely on `vite` dev server; imports use ES modules and allow importing `.tsx` paths (see `App` importing `../api`).

Known caveats and security
- `api.ts` contains a live API key in the repo. Treat it as sensitive: prefer moving secrets to env vars (`import.meta.env`) for production.
- File/folder casing: some folders use non-standard casing (e.g., `sideBar` folder but component named `SideBar`). This works on Windows but will break on case-sensitive filesystems — prefer matching folder and file casing exactly.

How to extend the project (short recipes)
- Add a new component:
  - Create `src/components/YourComponent/YourComponent.tsx` and `YourComponent.css`.
  - If you need props/types, add them to `src/components/types/` and import as `../types/YourType`.
  - Export default the component and import it from `src/App.tsx` or where needed.
- Add a new API call:
  - Extend `api.ts` or create `src/services/newService.ts` that imports the shared `api` axios instance.
  - Return typed results using the types in `src/components/types`.

Developer workflows
- Standard run: `npm install && npm run dev` (hot reload).
- Full production build: `npm run build` (performs type-checking via `tsc -b`).
- Linting: run `npm run lint` and fix TypeScript errors flagged by the build step before merging.

Examples in repo
- Deduplicate fetched posts: see `src/App.tsx` where fetched data is filtered by `id` before calling `setPosts`.
- Strict Mode fetch guard: `const fetchedRef = useRef(false)` then `if (fetchedRef.current) return` inside `useEffect`.

If something's missing or ambiguous
- Ask for the intended behavior (UI/UX or API contract). Point to the relevant file(s) and I will update these instructions.

---
Please review these instructions and tell me if you'd like more examples, CI rules, or PR guidance added.
