"use client";

import Image from "next/image";
import { Download } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center bg- bg-gradient-to-b from-white to-gray-100">
      {/* Profile Image */}
      <div className="mb-10">
        <Image
          src="/profile.png"
          alt="Frank Wember"
          width={360}
          height={360}
          className="rounded-full shadow-md object-cover border-4 border-white"
        />
      </div>

      {/* Name */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
        Frank Wember
      </h1>

      {/* Tagline */}
      <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-xl">
        Junior Computer Science Student at SIUE | Passionate about building
        clean, scalable, and impactful software.
      </p>

      {/* Resume Button */}
      <a
        href="/Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-200"
      >
        <Download size={20} />
        Download Resume
      </a>
    </main>
  );
}
