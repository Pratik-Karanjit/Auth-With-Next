"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Header() {
  const router = useRouter();
  return (
    <div className="w-full flex items-center justify-center bg-blue-950 text-white">
      <div className="w-full flex items-center justify-center p-5 gap-20">
        <strong className="cursor-pointer" onClick={() => router.push("/")}>
          Home
        </strong>
        <strong
          className="cursor-pointer"
          onClick={() => router.push("/profile")}
        >
          Profile
        </strong>
        <strong
          className="cursor-pointer"
          onClick={() => router.push("/adminOps")}
        >
          Admin Ops
        </strong>
      </div>
    </div>
  );
}
