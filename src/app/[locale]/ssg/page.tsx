import Link from "next/link"; // Always import Link from your custom navigation
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

/**
 * STATIC SITE GENERATION (SSG) PAGE TEMPLATE
 * * Use this structure for all Server Component pages inside the `[locale]` dynamic segment
 * to ensure they are compiled into fast, static HTML files during `npm run build`.
 * * CRITICAL RULES FOR THIS TEMPLATE:
 * 1. Must use `async/await` because `params` are asynchronous in Next.js 15/16.
 * 2. Must call `setRequestLocale(locale)` at the very top to lock the static context for this page.
 * 3. Must use `await getTranslations("Namespace")` instead of `useTranslations` to satisfy server execution and ESLint.
 * 4. Must use localized `<Link>` from `@/i18n/navigation` to maintain the current language on transition.
 */
export default async function Page({ params }: Props) {
  // Wait for the async URL parameters to resolve the current language
  const { locale } = await params;

  // Crucial for SSG: Informs Next.js which locale this specific static HTML chunk belongs to
  setRequestLocale(locale);

  // Fetch translations directly from the server's file system (messages/[locale].json)
  const t = await getTranslations("SSGPage");

  return (
    <div>
      <h1>{t("title")}</h1>

      {/* Localized navigation automatically prepends the current /locale to the href */}
      <Link href={"/"}>Back</Link>
    </div>
  );
}
