export default function ContactPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Contact Me</h1>
      <p>You can reach me at:</p>
      <ul className="list-disc list-inside">
        <li>
          Email:{" "}
          <a href="mailto:fwember@siue.edu" className="text-blue-600 underline">
            fwember@siue.edu
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a
            href="https://github.com/FrankWember"
            target="_blank"
            className="text-blue-600 underline"
          >
            github.com/FrankWember
          </a>
        </li>
      </ul>
    </div>
  );
}
