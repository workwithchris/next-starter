import createMiddleware from "next-intl/middleware";
import { routing } from "./core/i18n/routing";

export const proxy = createMiddleware(routing);

export default proxy;

export const config = {
  // Match all pathnames except for internal Next.js assets, API routes, and static files
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
