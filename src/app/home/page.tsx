import React from "react";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-4 text-gray-900">
      {/* Profile Section */}
      <section
        className="flex flex-col items-center justify-center mb-16"
        id="profile"
      >
        <Image
          src="/profile.jpeg"
          alt="Dinesh Bajgain portrait"
          width={140}
          height={140}
          className="rounded-full border-4 border-blue-500 shadow-lg mb-4"
        />
        <h1 className="text-5xl font-extrabold mb-2 text-center">
          Dinesh Bajgain
        </h1>
        <h2 className="text-xl text-blue-600 mb-4 text-center">
          Full Stack Developer & Designer
        </h2>
        <p className="max-w-xl text-center text-lg mb-4">
          Hi! I am Dinesh, a passionate developer who loves building scalable web
          applications and beautiful user experiences. I enjoy learning new
          technologies, solving real-world problems, and collaborating with
          creative teams.
        </p>
        <div className="max-w-xl text-center text-md text-gray-700 mb-4">
          <span className="font-semibold">Interests:</span> Web development,
          UI/UX design, open source, creative coding, and lifelong learning.
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16" id="skills">
        <h3 className="text-3xl font-bold mb-4">Skills</h3>
        <ul className="flex flex-wrap gap-4 justify-center">
          <li className="bg-gray-200 px-4 py-2 rounded">
            JavaScript / TypeScript
          </li>
          <li className="bg-gray-200 px-4 py-2 rounded">React / Next.js</li>
          <li className="bg-gray-200 px-4 py-2 rounded">Node.js</li>
          <li className="bg-gray-200 px-4 py-2 rounded">Tailwind CSS</li>
          <li className="bg-gray-200 px-4 py-2 rounded">MongoDB</li>
          <li className="bg-gray-200 px-4 py-2 rounded">REST APIs</li>
        </ul>
      </section>
    </main>
  );
}
