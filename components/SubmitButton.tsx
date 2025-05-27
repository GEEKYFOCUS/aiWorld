"use client";
import { useFormStatus } from "react-dom";
import { ReactNode } from "react";

function SubmitButton({
  pendingLabel,
  children,
}: {
  pendingLabel: string;
  children: ReactNode;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-[#1DA1F2] text-white px-6 py-2 rounded-full font-medium hover:bg-[#1879D2] transition"
    >
      {pending ? pendingLabel : children}
    </button>
  );
}

export default SubmitButton;
