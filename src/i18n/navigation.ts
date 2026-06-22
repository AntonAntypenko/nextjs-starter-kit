import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/**
 * LOCALIZED NAVIGATION APIs
 * * These are lightweight wrappers around Next.js' native navigation APIs.
 * They automatically inject the current `locale` and handle localized `pathnames`.
 * * Always import Link, useRouter, usePathname, etc., from THIS file
 * instead of 'next/link' or 'next/navigation'.
 * * EXPORTED UTILITIES:
 * - Link: <Link href="/about"> -> automatically becomes /uk/pro-nas or /en/about
 * - useRouter: router.push('/dashboard') -> redirects to the localized dashboard
 * - usePathname: returns clean pathname without locale prefix (e.g., '/about' instead of '/uk/about')
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
