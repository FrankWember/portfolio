"use client";

import Image from "next/image";
import {
  GraduationCap,
  Briefcase,
  Trophy,
  Users,
  Smile,
  PenSquare,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-16 bg-white text-gray-800">
      {/* Intro */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">About Me</h1>
        <p className="text-lg text-gray-600">
          I&apos;m Frank Wember — a junior CS student, tech builder, and
          innovation enthusiast creating systems that solve real-world problems.
        </p>
      </section>

      {/* Education & Skills */}
      <section>
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-indigo-600 mb-4">
          <GraduationCap /> Education & Skills
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>SIUE (Expected Dec 2026)</strong> – B.S. in Honors Computer
            Science; Minor in Math & Business
          </li>
          <li>
            <strong>GPA:</strong> 3.92 (4.0 in major)
          </li>
          <li>
            <strong>Tech:</strong> Python, C++, React, JavaScript, R,
            PostgreSQL, AWS, CI/CD, Pandas, NumPy
          </li>
          <li>
            <strong>Languages:</strong> English (Fluent), French (Native)
          </li>
        </ul>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-indigo-600 mb-4">
          <Briefcase /> Experience
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Meta Software Engineering Intern</strong> – Built a
            recommendation system by integrating APIs and databases.
          </li>
          <li>
            <strong>AI Research Assistant</strong> – Analyzed AI’s impact on
            corporate decision-making and strategy.
          </li>
          <li>
            <strong>Calculus Enrichment Leader</strong> – Mentored students in
            advanced calculus with personalized sessions.
          </li>
          <li>
            <strong>Library Supervisor</strong> – Trained staff and improved
            operations at Lovejoy Library.
          </li>
        </ul>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-indigo-600 mb-4">
          <Trophy /> Projects
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>DormBiz:</strong> Student services marketplace. Built with
            Next.js, Convex, and Tailwind.
          </li>
          <li>
            <strong>Spotify Mood App:</strong> React + ML powered music
            recommender using facial recognition & location.{" "}
            <a
              className="text-indigo-600 underline hover:text-indigo-800"
              href="https://github.com/FrankWember/Capstone"
              target="_blank"
            >
              [GitHub]
            </a>
          </li>
          <li>
            <strong>University Student Platform:</strong> A TypeScript app for
            student collaboration and campus trade.{" "}
            <a
              className="text-indigo-600 underline hover:text-indigo-800"
              href="https://github.com/FrankWember/UniHive-v1"
              target="_blank"
            >
              [GitHub]
            </a>
          </li>
        </ul>
      </section>

      {/* Voluntary Work */}
      <section className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-indigo-600 mb-4">
          <Users /> Voluntary Work
        </h2>
        <div className="grid sm:grid-cols-2 gap-10">
          <div>
            <Image
              src="/hackathon.jpg"
              alt="Tutoring Students"
              width={500}
              height={420}
              className="rounded-xl shadow-xl"
            />
            <div className="mt-4 text-gray-800 space-y-2">
              <p className="text-lg font-semibold">
                Excited to share that our team clinched the most innovative
                project at the eHacks 2023 with our groundbreaking Audio
                Analyzer project!
              </p>
              <p>
                Leveraging Fourier Transform, we used mathematical analysis to
                accurately detect and analyze phonemes in real-time. Our
                approach opens new possibilities for advanced speech recognition
                and audio processing.
              </p>
              <p className="text-sm text-gray-600 italic">
                Tutored middle schoolers in coding basics – Spring 2024
              </p>
              <p className="text-sm text-blue-700">
                #HackathonWinner #AudioAnalysis #Innovation #team #project
              </p>
            </div>
          </div>

          <div>
            <Image
              src="/hackathon2.jpg"
              alt="Hackathon"
              width={500}
              height={420}
              className="rounded-xl shadow-xl"
            />
            <div className="mt-4 text-gray-800 space-y-2">
              <p className="text-lg font-semibold">
                Celebrating Innovation at St. Louis eHacks
              </p>
              <p>
                I’m thrilled to share our success at the St. Louis eHacks, where
                we secured the "Most Ambitious Project" award for the second
                year in a row.
              </p>
              <p>
                Our team tackled challenges head-on, embraced new learning
                curves, and pushed boundaries to bring our vision to life.
              </p>
              <p className="text-sm text-gray-600 italic">
                Helped organize and judge at eHacks Hackathon – Spring 2023
              </p>
              <p className="text-sm text-blue-700">
                #innovation #ambition #trex #hackathon #teamwork
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Stuff */}
      <section>
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-indigo-600 mb-4">
          <Smile /> Fun Stuff
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <Image
              src="/boxing.png"
              alt="Boxing Club"
              width={500}
              height={300}
              className="rounded-lg shadow"
            />
            <p className="mt-2 text-gray-700">
              Leading the SIUE Boxing Club 🥊
            </p>
          </div>
          <div>
            <Image
              src="/travel.png"
              alt="Traveling"
              width={500}
              height={300}
              className="rounded-lg shadow"
            />
            <p className="mt-2 text-gray-700">
              Capturing life moments with my camera 📸
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section>
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-indigo-600 mb-4">
          <PenSquare /> Posts
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>How I Built DormBiz During College</strong> – From concept
            to campus traction.
          </li>
          <li>
            <strong>Lessons from My Meta Internship</strong> – What helped me
            thrive.
          </li>
          <li>
            <strong>Why I Think College Marketplaces Are the Future</strong> –
            My take on the opportunity.
          </li>
        </ul>
      </section>
    </main>
  );
}
