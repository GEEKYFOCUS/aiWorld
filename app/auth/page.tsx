"use client";
import { logInWithGoogle } from "@/lib/auth";

const SignIn = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-[#2D2A7A] via-[#654EA3] to-[#11998E] text-white">
      <div className="container mx-auto flex flex-col justify-center items-center px-4">
        <h1 className="text-3xl font-bold mb-6">Sign in to AiWorld</h1>

        <div className="py-4 space-y-4 w-full max-w-sm">
          <button
            onClick={logInWithGoogle}
            className="bg-white text-black hover:bg-transparent border hover:text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 w-full transition"
          >
            <svg
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6"
            >
              <path
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                fill="#FFC107"
              ></path>
              <path
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                fill="#FF3D00"
              ></path>
              <path
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                fill="#4CAF50"
              ></path>
              <path
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                fill="#1976D2"
              ></path>
            </svg>
            <p className="text-sm font-medium">Sign in with Google</p>
          </button>
          <button className="bg-white text-black hover:bg-transparent border hover:text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 w-full transition">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6"
            >
              <path
                d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                fill="black"
              ></path>
            </svg>
            <p className="text-sm font-medium">Sign in with GitHub</p>
          </button>
        </div>

        <div className="flex justify-center items-center py-6 space-x-4 w-full max-w-sm">
          <div className="w-full h-[2px] bg-gray-600"></div>
          <p className="text-sm">or</p>
          <div className="w-full h-[2px] bg-gray-600"></div>
        </div>

        <div className="py-4 flex flex-col justify-center items-center space-y-4 w-full max-w-sm">
          <input
            type="text"
            placeholder="Email or username"
            className="w-full px-4 py-2 rounded-md text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#654EA3]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-md text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#654EA3]"
          />

          <button className="w-full bg-[#654EA3] hover:bg-[#2D2A7A] text-white px-4 py-2 rounded-lg font-medium transition">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
