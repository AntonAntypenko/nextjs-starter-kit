# Advanced Next.js 16 + Tailwind v4 Production Boilerplate

A cutting-edge, production-ready starter kit built on top of Next.js 16 (App Router) and React 19, 
features full static internationalization (next-intl), Tailwind CSS v4, and the native React Compiler.

## Tech Stack & Features

* Framework: Next.js 16 (App Router) + React 19
* Internationalization: next-intl
* Styling: Tailwind CSS v4 (with @tailwindcss/postcss) + prettier-plugin-tailwindcss
* Performance: Native React Compiler enabled (babel-plugin-react-compiler)
* Animations: motion (Framer Motion v12) + tw-animate-css
* Forms & Validation: react-hook-form + @hookform/resolvers + zod
* Icons: lucide-react

---

## Getting Started

### 1. Installation
Clone the repository and install the dependencies using Bun:
```bash
bun install
```

### 2. Development Server
Run the local server with Next.js Turbopack enabled for blazingly fast hot-reloads:

```bash
bun run dev
```

Open http://localhost:3000 in your browser.

### 3. Production Build

```bash
bun run build
```

## Project Structure & i18n Architecture

This boilerplate separates translation dictionaries from the application source code and centralizes routing configuration inside the `src/i18n` directory.

```text
.
├── messages/               # Translation dictionaries (JSON files)
│   ├── en.json             # English translations
│   └── uk.json             # Ukrainian translations
└── src/
    ├── app/
    │   └── [locale]/       # Dynamic locale routing group
    │       ├── layout.tsx  # Root layout managing i18n providers
    │       ├── page.tsx    # Synchronous Home page template
    │       └── ssg/
    │           └── page.tsx # Asynchronous SSG page template
    └── i18n/               # Core internationalization setup
        ├── routing.ts      # Locale definition
        ├── navigation.ts   # Type-safe routing wrappers (Link, useRouter)
        └── request.ts      # Server-side message compilation configuration
```

