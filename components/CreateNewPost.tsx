// // For single image upload
// "use client";
// import { useState } from "react";
// import { createPost } from "../lib/actions";
// import SubmitButton from "./SubmitButton";

// export default function CreateNewPost({
//   onCloseModal,
// }: {
//   onCloseModal?: any;
// }) {
//   const [preview, setPreview] = useState<string | null>(null);
//   const [selectedFile, setSelectedFile] = useState<File | null>(null); // Track file

//   const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0]; // Get the selected file
//     if (file) {
//       setSelectedFile(file); // Store the file in state
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreview(reader.result as string); // Show image preview
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const removeImage = () => {
//     setPreview(null);
//     setSelectedFile(null);
//   };

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault(); // Prevent page reload

//     const formData = new FormData(event.currentTarget);

//     if (selectedFile) {
//       formData.append("postPhoto", selectedFile);
//     }

//     await createPost(formData);
//   };

//   return (
//     <form className="relative z-[50]" onSubmit={handleSubmit}>
//       <button
//         type="button"
//         onClick={() => onCloseModal?.()}
//         className="absolute right-0 -top-6 text-gray-500 text-4xl hover:text-red-500"
//       >
//         &times;
//       </button>
//       <h3 className="text-lg font-semibold text-red my-4">Create a Post</h3>

//       {/* Textarea */}
//       <textarea
//         rows={5}
//         placeholder="What's happening?"
//         name="content"
//         className="w-full border text-black border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#1DA1F2] resize-none"
//       ></textarea>

//       <div className="flex justify-between items-center">
//         {/* File Upload */}
//         <div className="flex flex-col sm:flex-row items-center gap-2">
//           <input
//             type="file"
//             accept="image/*"
//             id="postPhoto"
//             name="postPhoto"
//             hidden
//             onChange={handleImageChange}
//           />
//           <label
//             htmlFor="postPhoto"
//             className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
//           >
//             Select Photo
//           </label>

//           {/* Image Preview */}
//           {preview && (
//             <div className="relative mt-2">
//               <img
//                 src={preview}
//                 alt="Preview"
//                 className="mt-2 w-20 h-20 object-cover rounded"
//               />
//               <button
//                 type="button"
//                 onClick={removeImage}
//                 className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 text-white rounded-full text-xs sm:text-sm"
//               >
//                 &times;
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Buttons */}
//         <div className="mt-4 flex justify-end">
//           <button
//             type="button"
//             onClick={() => onCloseModal?.()}
//             className="bg-gray-300 text-black px-4 py-2 rounded-full font-medium mr-2 hover:bg-gray-400 transition"
//           >
//             Cancel
//           </button>

//           <SubmitButton pendingLabel="Processing">Post</SubmitButton>
//         </div>
//       </div>
//     </form>
//   );
// }

"use client";
import { useState } from "react";
import { createPost } from "../lib/actions";
import SubmitButton from "./SubmitButton";

export default function CreateNewPost({
  onCloseModal,
}: {
  onCloseModal?: any;
}) {
  const [previews, setPreviews] = useState<string[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      if (selectedFiles.length === 3) {
        return alert("You can only upload a max of three(3) images");
      }
      const newFiles = Array.from(files);
      setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);

      const newPreviews = newFiles.map((file) => {
        return URL.createObjectURL(file);
      });
      setPreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
    }
  };

  const removeImage = (index: number) => {
    setPreviews((prevPreviews) => prevPreviews.filter((_, i) => i !== index));
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.currentTarget);
  //   selectedFiles.forEach((file) => {
  //     if (file) formData.append("images", file);
  //   });
  //   await createPost(formData, event, setSelectedFiles, setPreviews);
  //   event.currentTarget.reset();
  //   setSelectedFiles([]);
  //   setPreviews([]);
  //   console.log("done...");
  // };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const fileInput = form.querySelector<HTMLInputElement>("#images"); // Get file input

    const formData = new FormData(form);
    selectedFiles.forEach((file) => {
      if (file) formData.append("images", file);
    });

    await createPost(formData);

    // Reset the form manually
    form.reset();
    if (fileInput) fileInput.value = "";
    setSelectedFiles([]);
    setPreviews([]);

    console.log("Form reset...");
  };

  return (
    <form className="relative z-[50]" onSubmit={handleSubmit}>
      <button
        type="button"
        onClick={() => onCloseModal?.()}
        className="absolute right-0 -top-6 text-gray-500 text-4xl hover:text-red-500"
      >
        &times;
      </button>
      <h3 className="text-lg font-semibold text-red my-4">Create a Post</h3>

      <textarea
        rows={5}
        placeholder="What's happening?"
        name="content"
        className="w-full border text-black border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#1DA1F2] resize-none"
      ></textarea>

      <div className="flex flex-col sm:flex-row items-center gap-2">
        <input
          type="file"
          accept="image/*"
          id="images"
          name="images"
          multiple
          hidden
          onChange={handleImageChange}
        />
        <label
          htmlFor="images"
          className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
        >
          Select Photos
        </label>
      </div>

      {/* Image Previews */}
      <div className="mt-2 flex flex-wrap gap-2">
        {previews.map((preview, index) => (
          <div key={index} className="relative">
            <img
              src={preview}
              alt="Preview"
              className="w-20 h-20 object-cover rounded"
            />
            <button
              type="button"
              onClick={() => removeImage(index)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 text-white rounded-full text-xs sm:text-sm"
            >
              &times;
            </button>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-4 flex justify-end">
        <button
          type="button"
          onClick={() => onCloseModal?.()}
          className="bg-gray-300 text-black px-4 py-2 rounded-full font-medium mr-2 hover:bg-gray-400 transition"
        >
          Cancel
        </button>
        <SubmitButton pendingLabel="Processing">Post</SubmitButton>
      </div>
    </form>
  );
}
