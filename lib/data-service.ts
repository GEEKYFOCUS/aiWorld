// // import axios from "axios";
// // "use server";

// const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL; // Ensure this is publicly accessible

// export async function fetchUserProfile() {
//   try {
//     const response = await fetch(`${API_BASE_URL}/users/profile`, {
//       credentials: "include",
//     });
//     const data = await response.json();
//     console.log("logging data", data);
//     return data;
//   } catch (error: unknown) {
//     if (error instanceof Error) {

// throw new Error(error.message)      console.error("Unexpected error:", error.message)
// ;

//       // throw new Error(error.message);
//     } else {
//       console.error("Unknown error:", error);
//       throw new Error("An unknown error occurred");
//     }
//   }
// }

"use server";

import { cookies } from "next/headers"; // Get cookies from request context

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchUserProfile() {
  console.log("fetching data")
  try {
    const cookieStored = await cookies();
    const jwtCookie = cookieStored?.get("jwt")?.value; // Get cookie manually
    if (!jwtCookie) {
      throw new Error("No authentication token found.");
    }
    const response = await fetch(`${API_BASE_URL}/users/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtCookie}`, // Manually pass the token // To include the cookies automatically "use client" directory in the user profile
        "Content-Type": "application/json",
      },

      cache: "force-cache", // default: 'force-cache' in next/js  regular fetch with no framework is 

      next: {
        revalidate: 3600,  // this revalidate every hour (3600s)
      },
     
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch user profile: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("logging data", data);
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Unexpected error:", error.message);
      throw new Error(error.message);
    } else {
      console.error("Unknown error:", error);
    }
  }
}

export async function getCurrentUserPost() {
  // loggedInUserPosts
  try {
    const cookieStored = await cookies();
    const jwtCookie = cookieStored?.get("jwt")?.value; // Get cookie manually
    if (!jwtCookie) {
      throw new Error("No authentication token found.");
    }

    const response = await fetch(`${API_BASE_URL}/posts/loggedInUserPosts`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtCookie}`, // Manually pass the token // To include the cookies automatically "use client" directory in the user profile
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Posts: ${response.statusText}`);
    }

    const { data } = await response.json();
    console.log("logging data", data);
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Unexpected error:", error.message);
      throw new Error(error.message);
    } else {
      console.error("Unknown error:", error);
    }
  }
}

export async function likePost(postId: string) {
  try {
    const cookieStored = await cookies();
    const jwtCookie = cookieStored?.get("jwt")?.value; // Get cookie manually
    if (!jwtCookie) {
      throw new Error("No authentication token found.");
    }

    const response = await fetch(`${API_BASE_URL}/posts/like-post/${postId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwtCookie}`, // Manually pass the token // To include the cookies automatically "use client" directory in the user profile
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to  like Post with ID: ${postId}: ${response.statusText}`
      );
    }

    const data = await response.json();
    console.log("logging data", data);
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Unexpected error:", error.message);
      throw new Error(error.message);
    } else {
      console.error("Unknown error:", error);
    }
  }
}
export async function unlikePost(postId: string) {
  try {
    const cookieStored = await cookies();
    const jwtCookie = cookieStored?.get("jwt")?.value; // Get cookie manually
    if (!jwtCookie) {
      throw new Error("No authentication token found.");
    }

    const response = await fetch(
      `${API_BASE_URL}/posts/unlike-post/${postId}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${jwtCookie}`, // Manually pass the token // To include the cookies automatically "use client" directory in the user profile
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to  unlike  Post with ID: ${postId}: ${response.statusText}`
      );
    }

    const data = await response.json();
    console.log("logging data", data);
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Unexpected error:", error.message);
      throw new Error(error.message);
    } else {
      console.error("Unknown error:", error);
    }
  }
}

export async function repost(postId: string) {
  try {
    const cookieStored = await cookies();
    const jwtCookie = cookieStored?.get("jwt")?.value; // Get cookie manually
    if (!jwtCookie) {
      throw new Error("No authentication token found.");
    }

    const response = await fetch(`${API_BASE_URL}/posts/repost/${postId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwtCookie}`, // Manually pass the token // To include the cookies automatically "use client" directory in the user profile
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to  Repost  Post with ID: ${postId}: ${response.statusText}`
      );
    }

    const data = await response.json();
    console.log("logging data", data);
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Unexpected error:", error.message);
      throw new Error(error.message);
    } else {
      console.error("Unknown error:", error);
    }
  }
}

export async function unRepost(postId: string) {
  try {
    const cookieStored = await cookies();
    const jwtCookie = cookieStored?.get("jwt")?.value; // Get cookie manually
    if (!jwtCookie) {
      throw new Error("No authentication token found.");
    }

    const response = await fetch(`${API_BASE_URL}/posts/unrepost/${postId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwtCookie}`, // Manually pass the token // To include the cookies automatically "use client" directory in the user profile
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to  UnRepost  Post with ID: ${postId}: ${response.statusText}`
      );
    }

    const data = await response.json();
    console.log("logging data", data);
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Unexpected error:", error.message);
      throw new Error(error.message);
    } else {
      console.error("Unknown error:", error);
    }
  }
}
