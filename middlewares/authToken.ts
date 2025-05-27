// // import { API_BASE_URL } from "@/lib/data-service";
// import { NextRequest, NextResponse } from "next/server";

// const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
// export async function authToken(req: NextRequest) {
//   // Check if token exists
//   console.log(req.cookies);
//   const token = req.cookies.get("jwt")?.value;

//   //   /If token does not exist redirect to login page
//   if (!token) {
//     return NextResponse.redirect(new URL("/auth", req.url));
//   }

//   const response = await fetch(`${API_BASE_URL}/users/profile`, {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "application/json", // Ensure content type is set
//     },

//     credentials: "include", // Allow cookies to be sent
//   });

//   const initData = await response.json();
//   console.log(initData);
//   if (!response.ok) {
//     return NextResponse.redirect(new URL("/auth", req.url));
//   }
//   const data = await response.json();
//   console.log(data);
//   // If everything go well, Don't intercept , returned undefined
//   return undefined;
// }

import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function authToken(req: NextRequest) {
  // ✅ Get the cookies manually from headers (because Middleware runs on Edge)

  const cookieHeader = req.headers.get("cookie") || "";
  console.log(req.cookies.get("jwt"), "cookieExist");
  // Get raw cookie header
  // console.log(cookieHeader, "cookieheader");
  const cookies = new Map(
    cookieHeader
      ?.split("; ")
      .map((c: string) => c.split("=") as [string, string])
  );
  const token = cookies.get("jwt");

  console.log("Middleware Token:", token); // Debugging

  // ✅ If no token, redirect to auth  or the  req is not from "/auth"

  if (!token) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  try {
    // ✅ Fetch user profile to verify token
    const response = await fetch(`${API_BASE_URL}/users/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      console.error("Auth Failed:", response.statusText);
      return NextResponse.redirect(new URL("/auth", req.url));
    }

    // ✅ Middleware should NOT modify responses unless necessary
    return NextResponse.next();
  } catch (error) {
    console.error("Error in authToken middleware:", error);
    return NextResponse.redirect(new URL("/auth", req.url));
  }
}

// import { NextRequest, NextResponse } from "next/server";

// export async function authToken(req: NextRequest) {
//   const cookieHeader = req.headers.get("cookie") || "";
//   console.log("Cookies in Middleware:", cookieHeader); // Debugging

//   const token = req.cookies.get("jwt")?.value;
//   console.log("Middleware Token:", token); // Debugging

//   // ✅ If the token is missing, but this is the first request after login, allow it
//   const isLoginRequest = req.nextUrl.pathname === "/login"; // Adjust as needed

//   if (!token && !isLoginRequest) {
//     return NextResponse.redirect(new URL("/auth", req.url));
//   }

//   return NextResponse.next();
// }
