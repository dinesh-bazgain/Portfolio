import React from "react";
import Image from "next/image";

export default function WorkWithMe() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4 text-gray-900">
      <section className="flex flex-col items-center gap-8 mb-12">
        <Image
          src="/profile.jpeg"
          alt="Dinesh Bajgain portrait"
          width={140}
          height={140}
          className="rounded-full border-4 border-blue-500 shadow-lg mb-4"
        />
        <h1 className="text-4xl font-bold mb-2 text-center">Work With Me</h1>
        <h2 className="text-xl text-blue-600 mb-4 text-center">
          Let's build something great together!
        </h2>
        <p className="max-w-xl text-center text-lg mb-4">
          I’m Dinesh, a full stack developer and designer who loves
          collaborating on creative projects and solving real-world problems. If
          you’re looking for a reliable partner to help bring your ideas to
          life, let’s connect!
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Skills</h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-md">
          <li className="bg-blue-50 px-4 py-2 rounded">
            JavaScript / TypeScript
          </li>
          <li className="bg-blue-50 px-4 py-2 rounded">React / Next.js</li>
          <li className="bg-blue-50 px-4 py-2 rounded">Node.js / Express</li>
          <li className="bg-blue-50 px-4 py-2 rounded">UI/UX Design</li>
          <li className="bg-blue-50 px-4 py-2 rounded">Tailwind CSS</li>
          <li className="bg-blue-50 px-4 py-2 rounded">Figma / Adobe XD</li>
        </ul>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-4">Contact</h3>
        <p className="mb-4 text-lg text-center">
          Interested in working together, collaborating, or just want to say
          hello? I’m always open to new opportunities and creative partnerships.
        </p>
        <div className="flex justify-center">
          <a
            href="mailto:dineshbajgain@gmail.com"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
          >
            Email Me
          </a>
        </div>
      </section>
    </main>
  );
}
