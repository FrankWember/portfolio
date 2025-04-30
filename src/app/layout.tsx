import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Frank Wember | Portfolio",
  description: "Portfolio website of Frank Wember",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body
        className={`${inter.className} bg-white text-gray-800 dark:bg-gray-900 dark:text-white transition-colors duration-300`}
      >
        {/* Fixed Navbar */}
        <header className="fixed top-0 w-full z-50 shadow bg-white dark:bg-gray-800">
          <Navbar />
        </header>

        {/* Main content (pushed below navbar height) */}
        <main className="pt-24 px-6 max-w-7xl mx-auto min-h-screen space-y-20">
          {children}
        </main>
      </body>
    </html>
  );
}
