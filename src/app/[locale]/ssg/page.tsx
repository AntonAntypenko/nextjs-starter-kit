import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getStaticLocaleParams } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

/**
 * STATIC SITE GENERATION (SSG) PAGE TEMPLATE
 * -----------------------------------------------------------------------------
 * Use this structure for fully static, SEO-critical Server Component pages
 * inside the `[locale]` dynamic segment to ensure pre-rendering at build time.
 *
 * CRITICAL ARCHITECTURAL RULES:
 * 1. MANDATORY `generateStaticParams`:
 *    Must export `generateStaticParams` to enumerate all locales. Without it,
 *    Next.js will default to dynamic rendering (ISR/SSR) instead of pure SSG.
 *
 * 2. `setRequestLocale(locale)` EXECUTION:
 *    Must be called at the top of the component tree before any async operations
 *    or `getTranslations` to lock the static context for `next-intl`.
 *
 * 3. ASYNCHRONOUS PARAMS & TRANSLATIONS:
 *    - `params` is a Promise in Next.js 15/16 and MUST be awaited: `const { locale } = await params`.
 *    - Uses `await getTranslations("Namespace")` for async server-side translation fetching.
 *
 * 4. MANDATORY LOCALIZED NAVIGATION:
 *    Always import `Link` from `@/i18n/navigation` (NEVER from `next/link`).
 *    Native `next/link` bypasses locale injection, triggering 307 redirects via middleware
 *    and breaking Next.js link prefetching.
 *
 * 5. COMPONENT NAMING CONVENTION:
 *    Always name the exported component `Page` to match Next.js App Router conventions.
 */

export function generateStaticParams() {
  return getStaticLocaleParams();
}

export default async function Page({ params }: Props) {
  const { locale } = await params;

  // Locks the locale context for static generation
  setRequestLocale(locale);

  const t = await getTranslations("SSGPage");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <div className="max-w-md space-y-4 rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          {t("title")}
        </h1>

        <p className="text-sm text-gray-600 dark:text-gray-400">
          {t("description")}
        </p>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            {t("back")}
          </Link>
        </div>
      </div>
    </main>
  );
}
