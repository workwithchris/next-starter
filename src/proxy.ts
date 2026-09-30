import createMiddleware from "next-intl/middleware";
import { type NextRequest, NextResponse } from "next/server";
import { routing } from "./core/i18n/routing";

const handleI18n = createMiddleware(routing);

const PROTECTED_ROUTES = ["/dashboard"];
const AUTH_ROUTES = ["/login"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("auth_token")?.value;

  // Extract locale from URL segment
  const segments = pathname.split("/").filter(Boolean);
  const hasLocale = routing.locales.includes(segments[0] as (typeof routing.locales)[number]);
  const currentLocale = hasLocale ? segments[0] : routing.defaultLocale;

  // Normalized path without locale prefix (e.g. "/en/dashboard" -> "/dashboard")
  const pathWithoutLocale = hasLocale
    ? `/${segments.slice(1).join("/")}`
    : pathname;

  const isProtectedRoute = PROTECTED_ROUTES.some(
    (route) => pathWithoutLocale === route || pathWithoutLocale.startsWith(`${route}/`)
  );

  const isAuthRoute = AUTH_ROUTES.some(
    (route) => pathWithoutLocale === route || pathWithoutLocale.startsWith(`${route}/`)
  );

  // If unauthenticated user accesses protected route -> redirect to login
  if (isProtectedRoute && !token) {
    const loginUrl = new URL(`/${currentLocale}/login`, request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // If authenticated user visits login page -> redirect to dashboard
  if (isAuthRoute && token) {
    const dashboardUrl = new URL(`/${currentLocale}/dashboard`, request.url);
    return NextResponse.redirect(dashboardUrl);
  }

  return handleI18n(request);
}

export default proxy;

export const config = {
  // Match all pathnames except for internal Next.js assets, API routes, and static files
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
