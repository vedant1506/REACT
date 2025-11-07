# React Learning Projects

This repository is a collection of small, focused React projects built while practicing core concepts of modern React (Hooks, Context, Routing, Composition) along with tooling (Vite, Tailwind CSS) and browser APIs (LocalStorage, Fetch).  
Each folder is an isolated Vite project you can open, install, and run independently.

---

## Project Index

1. **Basic_website_router**  
   Demonstrates client-side routing with `react-router-dom`. Covers:
   - Defining route trees with `createBrowserRouter`
   - Nested layouts using `<Outlet />`
   - Dynamic route params (`/user/:userid`)
   - Fetching external data (GitHub API) inside a routed component

2. **Bg_Changer**  
   A simple state-driven UI that allows changing the background color. Focus:
   - `useState` for UI state
   - Event handling and dynamic inline/Tailwind styling
   - Prop drilling vs local component state awareness

3. **Context_api**  
   Introduces the React Context API for global/shared state without prop drilling. Key points:
   - Creating and providing context
   - Consuming context via custom hooks
   - Separating provider logic from UI components

4. **Currency_Changer**  
   Illustrates data fetching and transformation for a currency conversion interface. Concepts:
   - `fetch` + async logic
   - Custom hooks abstraction (e.g., for conversion or fetching rates)
   - Controlled form inputs
   - Separation of concerns between conversion logic and display

5. **Pass_Generator**  
   A password generator app. Practices:
   - Generating randomized strings based on user-selected criteria (length, characters)
   - State updates and derived values
   - Clipboard API usage (`navigator.clipboard.writeText`)
   - UX around disabled/enabled actions

6. **Tailwind_props_understanding**  
   Sandbox for learning Tailwind utility classes in React. Focus:
   - Responsive classes (`sm:`, `lg:`)
   - Conditional class composition
   - Reusability patterns for styling
   - Comparing inline CSS vs utility-first approach

7. **Theme_Switcher**  
   Implements a light/dark theme toggle with persistence. Covers:
   - Theme state stored in Context
   - LocalStorage persistence
   - Conditional application of theme classes on root nodes
   - Accessibility considerations (contrast)

8. **To_Do_LocalStorage**  
   A Todo list with full CRUD and persistent storage. Concepts reinforced:
   - Array state manipulations (add/update/delete/toggle)
   - Immutability patterns
   - LocalStorage sync via `useEffect`
   - Component splitting (`TodoForm`, `TodoItem`)
   - Context-based state distribution (Provider pattern)

---

## Common Patterns Practiced

- React Hooks: `useState`, `useEffect`
- Context for global state (instead of Redux in small apps)
- Routing with `react-router-dom`
- Controlled form components
- Fetching remote data & handling JSON responses
- LocalStorage read/write and hydration logic
- Conditional rendering and dynamic class names
- Tailwind CSS utilities for rapid UI construction
- Basic accessibility considerations (contrast, focus styles)

---

## Running Any Project

Each folder is a standalone Vite setup.

```bash
cd <Project_Folder>
npm install
npm run dev
```

Then open the printed localhost URL (usually `http://localhost:5173`).

---

## Suggested Exploration / Next Steps

If you want to deepen learning using these bases:

- Add error/loading states to data-fetching components (e.g., GitHub fetch in `Basic_website_router`).
- Introduce form validation (client-side) to `To_Do_LocalStorage` or `Pass_Generator`.
- Convert the theme switcher to use a system preference fallback (`prefers-color-scheme`).
- Migrate shared logic in `Currency_Changer` to a fully reusable custom hook.
- Add unit tests with Vitest + React Testing Library for Todo operations.
- Introduce lazy-loaded routes in `Basic_website_router`.
- Explore performance optimizations (memoization with `useMemo` / `useCallback`) where re-renders occur frequently.

---

## Folder Overview (Quick Reference)

| Folder | Focus | Key Concepts |
|--------|-------|--------------|
| Basic_website_router | Routing & Layout | react-router-dom, dynamic params, layout nesting |
| Bg_Changer | UI Interaction | useState, event handlers |
| Context_api | Global State | Context Provider/Consumer |
| Currency_Changer | Data Fetching | fetch API, custom hooks |
| Pass_Generator | Utility Generation | state derivation, clipboard |
| Tailwind_props_understanding | Styling Practice | Tailwind utilities, responsive design |
| Theme_Switcher | Theming | Context, persistence, conditional classes |
| To_Do_LocalStorage | CRUD + Persistence | array state, localStorage, component composition |

---

## Why These Are Separate

Keeping each concept isolated:
- Reduces cognitive load when experimenting
- Encourages focused iteration
- Prevents cross-project dependency issues
- Makes it easier to compare patterns (e.g., local vs global state)

---

## Technologies Used

- React (Vite scaffold)
- Tailwind CSS (utility-first styling)
- Browser APIs (LocalStorage, Clipboard, Fetch)
- react-router-dom (routing and nested layouts)

---

## Conventions

- Functional components only (no class components)
- Hooks at top-level, no conditional invocation
- Use of descriptive component/file names
- Separation of concerns (form vs item vs provider)
- Minimal external dependencies beyond React + Tailwind + Router

---

## Purpose

This repository is **not** a production app—it’s a learning playground. Code intentionally favors clarity and exploration over micro-optimizations. As you refine, you may:
- Extract reusable hooks
- Introduce type safety (TypeScript)
- Add testing
- Harden error handling

---

## License / Usage

Feel free to copy, refactor, and build upon these examples for educational purposes.

---

Happy coding and iterative learning!