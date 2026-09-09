import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  /**
   * ROUTE MATCHING PATTERN (Negative Lookahead Filter)
   * ---------------------------------------------------------------------------
   * Automatically intercepts all application routes while bypassing static
   * assets and internal framework endpoints.
   *
   * EXCLUSION RULES:
   * 1. System & API Routes: Bypasses `/api`, `/_next`, and `/_vercel` paths.
   * 2. Static File Requests: Bypasses URLs with file extensions (e.g., `.ico`, `.png`, `.svg`).
   *
   * RATIONALE:
   * Using a negative lookahead `(?!...)` eliminates the need to hardcode dynamic
   * locale codes (e.g., `/uk`, `/en`) in `matcher`. Locales added to `routing.ts`
   * are handled automatically without modifying `middleware.ts`.
   */
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
