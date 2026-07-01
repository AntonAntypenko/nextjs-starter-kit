import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

/**
 * CLIENT-FRIENDLY OR SIMPLE SERVER COMPONENT TEMPLATE
 * * This page represents a clean, lightweight component structure.
 * * CRITICAL RULES FOR THIS TEMPLATE:
 * 1. Synchronous execution: No `async/await` required if you don't need to read async `params` on this level.
 * 2. Next-intl compliance: Uses `useTranslations("Namespace")` which safely works on BOTH Server and Client components.
 * 3. Navigation: Always utilizes the localized `<Link>` to automatically preserve `/uk` or `/en` route prefixes.
 */
export default function Home() {
  // 1 Initialize the translation hook using the predefined JSON namespace
  const t = useTranslations("HomePage");

  return (
    <div className="p-8 space-y-4">
      {/* 2 Render translated text injected directly from the message files */}
      <h1 className="text-2xl font-bold">{t("title")}</h1>

      {/* 3 Localized link navigation: safely routes the user to our complex SSG page */}
      <Link
        href="/ssg"
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go to SSG Page
      </Link>
    </div>
  );
}
