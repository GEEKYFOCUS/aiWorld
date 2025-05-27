// import { NextRequest, NextResponse } from "next/server";
// // import { fetchUserProfile } from "./lib/data-service";
// import { authToken } from "./middlewares/authToken";

// //  next.js Middleware - Execute multiple middleware functions in sequence
// //  if any middleware returns a Response (not undefined), terminate the subsequent process but there is only one middlware for now .

// export default async function middleware(req: NextRequest) {
//   const { pathname } = req.nextUrl;
//   if (pathname.startsWith("/_next") || pathname.startsWith("/icon.ico")) {
//     return NextResponse.next();
//   }

//   // // 1. withAuthToken
//   const response = await authToken(req);
//   if (response) return response;
//   // If none of the middleware intercepts, proceed
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/home/:path*"],
// };

import { NextRequest, NextResponse } from "next/server";
import { authToken } from "./middlewares/authToken";

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ✅ Skip internal Next.js assets
  if (pathname.startsWith("/_next") || pathname.startsWith("/icon.ico")) {
    return NextResponse.next();
  }

  // ✅ Run auth check middleware
  const response = await authToken(req);
  if (response) return response;

  return NextResponse.next();
}

// ✅ Only apply middleware to protected routes
export const config = {
  matcher: ["/home/:path*"], // Protects all "/home/*" pages
};
