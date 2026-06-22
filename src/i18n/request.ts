import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

/**
 * SERVER-SIDE REQUEST CONFIGURATION
 * * This execution block runs ONCE PER REQUEST on the server side.
 * It acts as a bridge between the URL locale segment and your translation files.
 * * What it does:
 * 1. Resolves the requested locale from the URL segment (e.g., /uk/about -> 'uk').
 * 2. Validates the locale against supported ones; falls back to `defaultLocale` if invalid.
 * 3. Dynamically imports ONLY the required JSON translation file for performance.
 * 4. Provides `locale` and `messages` globally to `useTranslations()` hooks.
 */
export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return {
    locale,
    messages,
  };
});
