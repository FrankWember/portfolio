export default function ProjectsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Projects</h1>

      <div>
        <h2 className="text-xl font-semibold">🎵 Mood Tune</h2>
        <p>
          A Spotify recommendation engine using facial recognition, heart rate,
          and location to match the perfect vibe. Built with React, ML, and
          Spotify API.
        </p>
        <a
          href="https://github.com/FrankWember/Capstone"
          target="_blank"
          className="text-blue-600 underline"
        >
          View on GitHub
        </a>
      </div>

      <div>
        <h2 className="text-xl font-semibold">🛍️ UniHive</h2>
        <p>
          A TypeScript-powered campus platform for students to join study
          groups, buy/sell items, and connect with peers.
        </p>
        <a
          href="https://github.com/FrankWember/UniHive-v1"
          target="_blank"
          className="text-blue-600 underline"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}
