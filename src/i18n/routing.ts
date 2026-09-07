import { defineRouting } from "next-intl/routing";

/**
 * MAIN ROUTING CONFIGURATION (Single Source of Truth)
 * * This object serves as the global configuration for internationalization (i18n).
 * It is consumed by:
 * 1. Middleware (middleware.ts) - Handles redirects and detects user locale.
 * 2. Request Config (request.ts) - Validates incoming URLs and loads messages.
 * 3. Navigation (navigation.ts) - Generates localized <Link>, useRouter, etc.
 * * COMMON OPTIONS TO ADD WHEN NEEDED:
 * * 1️ URL Localization (pathnames):
 * pathnames: {
 * '/about': { en: '/about', uk: '/pro-nas' }
 * }
 * * 2️ URL Locale Prefix (localePrefix):
 * localePrefix: 'as-needed' // Hides prefix for default locale (e.g., /about instead of /uk/about)
 * * 3️ Disable Browser Locale Detection:
 * localeDetection: false // Forces users to land strictly on the defaultLocale
 * * 4️ Custom Cookie Configuration (localeCookie):
 * localeCookie: { name: 'NEXT_LOCALE', maxAge: 31536000 }
 */
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "uk"],

  // Used when no locale matches (e.g. on /about)
  defaultLocale: "uk",
});

/**
 * ARCHITECTURE DECISION: Centralized Static Locale Parameter Generator
 * -------------------------------------------------------------------
 * Returns an array of parameter objects for `generateStaticParams` in App Router.
 * Centralizes the locale mapping logic to maintain a Single Source of Truth.
 */
export function getStaticLocaleParams() {
  return routing.locales.map((locale) => ({ locale }));
}
