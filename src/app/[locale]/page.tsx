import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

/**
 * CLIENT-COMPATIBLE PAGE TEMPLATE
 * -----------------------------------------------------------------------------
 * Use this structure for lightweight pages or entrypoints that do not perform
 * direct async data fetching or read route `params` at the top level.
 *
 * CRITICAL ARCHITECTURAL RULES:
 * 1. UNIVERSAL `useTranslations` HOOK:
 *    Uses `useTranslations("Namespace")` which safely works across BOTH Server (RSC)
 *    and Client Components without requiring async server calls.
 *
 * 2. MANDATORY LOCALIZED NAVIGATION:
 *    Always import `Link` from `@/i18n/navigation` (NEVER from `next/link`).
 *    Native `next/link` bypasses locale injection, triggering 307 redirects via middleware
 *    and breaking Next.js link prefetching.
 *
 * 3. COMPONENT NAMING CONVENTION:
 *    Always name the exported component `Page` to match Next.js App Router conventions.
 */
export default function Page() {
  // Synchronous translation hook for static/sync contexts
  const t = useTranslations("HomePage");

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
            href="/ssg"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            {t("goToSsg")}
          </Link>
        </div>
      </div>
    </main>
  );
}
