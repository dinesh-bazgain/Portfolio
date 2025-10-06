import Image from "next/image";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-16 px-4">
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full mb-6"
        />
        <h1 className="text-5xl font-extrabold mb-2">Dinesh Bajgain</h1>
        <h2 className="text-xl text-blue-600 mb-4">Full Stack Developer</h2>
        <p className="max-w-xl text-center text-lg mb-6">
          I build modern web applications with a focus on performance,
          accessibility, and great user experience.
        </p>
        <a
          href="#contact"
          className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
        >
          Contact Me
        </a>
      </section>

      {/* About Section */}
      <section className="py-12 px-4 bg-white" id="about">
        <h3 className="text-3xl font-bold mb-4">About Me</h3>
        <p className="max-w-2xl text-lg">
          Hi! I'm Dinesh, a passionate developer with experience in building
          scalable web applications using modern technologies like Next.js,
          React, and Node.js. I love solving problems and learning new things.
        </p>
      </section>

      {/* Skills Section */}
      <section className="py-12 px-4" id="skills">
        <h3 className="text-3xl font-bold mb-4">Skills</h3>
        <ul className="flex flex-wrap gap-4">
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

      {/* Projects Section */}
      <section className="py-12 px-4 bg-white" id="projects">
        <h3 className="text-3xl font-bold mb-8">Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Example Project Card */}
          <div className="bg-gray-100 p-6 rounded shadow">
            <h4 className="text-xl font-semibold mb-2">Portfolio Website</h4>
            <p className="mb-2">
              A personal portfolio built with Next.js and Tailwind CSS to
              showcase my work and skills.
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              View Project
            </a>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow">
            <h4 className="text-xl font-semibold mb-2">Blog Platform</h4>
            <p className="mb-2">
              A full-featured blog platform with authentication, markdown
              support, and REST API.
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              View Project
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4" id="contact">
        <h3 className="text-3xl font-bold mb-4">Contact</h3>
        <p className="mb-2">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>
        <a
          href="mailto:your.email@example.com"
          className="text-blue-600 hover:underline"
        >
          your.email@example.com
        </a>
      </section>
    </main>
  );
}
