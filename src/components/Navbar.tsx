import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-extrabold tracking-tight text-gray-900">
          Frank Wember
        </div>
        <div className="flex gap-8 text-lg font-medium">
          <Link
            href="/"
            className="text-gray-500 hover:text-black transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-500 hover:text-black transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-gray-500 hover:text-black transition-colors duration-200"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-gray-500 hover:text-black transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
