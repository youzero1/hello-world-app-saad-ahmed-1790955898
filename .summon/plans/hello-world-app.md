---
status: implemented
title: Hello World App
---

# Hello World App

A minimal single-page app that displays a centered, styled "Hello, World!" greeting on the home page. The project is currently empty (only README.md and env.example), so the plan starts with full scaffolding.

## Steps

1. **Create project configuration files**
   - Create `package.json` with the project name, ESM module type, and dependencies: react, react-dom, @tanstack/react-router, @tanstack/router-plugin, vite, @vitejs/plugin-react, typescript, tailwindcss, @tailwindcss/vite. Add npm scripts for dev, build, and preview.
   - Create `tsconfig.json` with strict TypeScript settings, bundler module resolution, and the `@/*` path alias mapped to `src/*`.
   - Create `vite.config.ts` registering `@tanstack/router-plugin/vite` (file-based routing), `@vitejs/plugin-react`, and `@tailwindcss/vite`, plus the `@` alias for `src/`.
   - Create `index.html` at the project root with a `<div id="root">` mount point and a module script pointing at `/src/main.tsx`.
   - Expected outcome: the project has a complete, valid toolchain configuration and can install dependencies with npm.

2. **Create the global stylesheet**
   - Create `src/styles/global.css` whose first line is exactly `@import "tailwindcss";`.
   - Expected outcome: Tailwind CSS v4 utilities are available across the whole app.

3. **Create the app entry point**
   - Create `src/main.tsx` that imports `src/styles/global.css` once, builds the TanStack Router instance from the generated route tree, and renders it into the `#root` element via React's client renderer.
   - Expected outcome: the app boots and the router takes over rendering.

4. **Create the root route (app shell)**
   - Create `src/routes/__root.tsx` defining the root route with a full-screen layout container and an `<Outlet />` where child routes render.
   - Expected outcome: every page shares one consistent full-screen shell.

5. **Create the home page with the Hello World greeting**
   - Create `src/routes/index.tsx` defining the `/` route. It renders a vertically and horizontally centered layout containing a large, bold "Hello, World!" heading and a short supportive subheading, styled with Tailwind utilities (pleasant background, readable typography, subtle accent).
   - Expected outcome: visiting `/` shows a polished, centered "Hello, World!" page.

6. **Verify the app end to end**
   - Install dependencies and start the dev server; confirm `src/routeTree.gen.ts` is generated automatically by the router plugin (never edited by hand) and that the home page renders the greeting without console errors.
   - Expected outcome: the app runs locally and displays "Hello, World!" at the root URL.
