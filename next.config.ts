import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  reactCompiler: true,
};

/**
 * NEXT-INTL PLUGIN WRAPPER
 * * This plugin connects `next-intl` directly into the Next.js build and routing pipeline.
 * It works behind the scenes as a "black box" so you don't have to call i18n configs manually.
 * * What this wrapper actually does:
 * 1. Automatically locates and executes your `src/i18n/request.ts` on every page request.
 * 2. Creates internal Webpack/Turbopack aliases so Next.js server components can access translation strings.
 * 3. Integrates with Next.js App Router to coordinate server-side rendering (SSR) and routing inside the `[locale]` folder.
 * * NOTE: Because this plugin hooks into the compiler, whenever you modify i18n config files,
 * Turbopack (--turbo) might aggressively cache old states. If errors occur after changing configs,
 * always clear the cache and restart
 */
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
