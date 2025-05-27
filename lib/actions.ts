"use server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export async function createPost(formData: FormData) {
  try {
    const cookieStored = await cookies();
    const jwtCookie = cookieStored?.get("jwt")?.value;

    if (!jwtCookie) {
      throw new Error("No authentication token found.");
    }

    const content = formData.get("content"); // Get post content
    const images = formData.getAll("images") as File[]; // Ensure images are treated as File[]

    console.log("Raw Images:", images);
    console.log("Content:", content);

    if (!content) {
      throw new Error("Post Cannot be empty. Please provide content.");
    }

    // Create a new FormData instance to ensure only valid images are appended
    const formDataToSend = new FormData();
    formDataToSend.append("content", content as string);

    // Append images only if there's at least one valid image
    const validImages = images.filter(
      (img) => img instanceof File && img.size > 0
    );

    if (validImages.length > 0) {
      validImages.forEach((image) => formDataToSend.append("images", image));
    }

    console.log(
      "Final FormData:",
      Object.fromEntries(formDataToSend.entries())
    ); // Debugging

    const response = await fetch(`${API_BASE_URL}/posts/create-post`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwtCookie}`,
      },
      body: formDataToSend, // Send the updated FormData
    });

    if (!response.ok) {
      throw new Error(`Failed to create post: ${response.statusText}`);
    }
    revalidatePath("/home/profile");

    const data = await response.json();

    revalidatePath("/home/profile");
    console.log("Post created successfully:", data);
  } catch (error: any) {
    console.error("Error creating post:", error.message);
    throw new Error(error.message);
  }
}
