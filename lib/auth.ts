export function logInWithGoogle(): void {
  const origin = process.env.NEXT_PUBLIC_API_BASE_URL; // Ensure this is a PUBLIC variable
  window.location.href = `${origin}/auth/google`; // Redirect user to Google login
}

