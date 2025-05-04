import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    {
      title: "🎵 Mood Tune",
      description:
        "A Spotify recommendation engine using facial recognition, heart rate, and location to match the perfect vibe. Built with React, ML, and the Spotify API.",
      github: "https://github.com/FrankWember/Capstone",
      image: "/moodtune.png",
    },
    {
      title: "🛍️ Dormbiz",
      description:
        "A TypeScript-powered campus platform where students can join study groups, buy/sell items, and connect with peers across their university.",
      github: "https://github.com/FrankWember/UniHive-v1",
      image: "/Dormbiz.png",
    },
    {
      title: "🧠 LLM Web Scraper",
      description:
        "A Python-based web scraper integrated with a local LLM (TinyLlama & Phi3) to extract and analyze sentiment from headlines using Dockerized microservices.",
      github: "https://github.com/FrankWember/llm-scraper",
      image: "/webscapper.png",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 bg-white text-gray-900">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-12">
        My Projects
      </h1>

      <div className="space-y-10">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-gray-100 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out overflow-hidden flex flex-col md:flex-row items-center"
          >
            <div className="relative w-full md:w-1/2 h-64">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 w-full md:w-1/2 space-y-3">
              <h2 className="text-2xl font-semibold text-indigo-800">
                {project.title}
              </h2>
              <p className="text-gray-700 text-sm">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-indigo-600 hover:text-indigo-800 text-sm font-medium underline"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
