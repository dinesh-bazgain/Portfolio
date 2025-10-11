import React from "react";

export default function ContactPage() {
  return (
    <main className="max-w-xl mx-auto py-16 px-4 text-gray-900">
      <section className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-2">Contact Me</h1>
        <p className="text-lg text-gray-700 mb-4">
          Interested in working together, have a question, or just want to say
          hello? Fill out the form below or reach out directly!
        </p>
      </section>
      <form className="bg-gray-50 rounded shadow p-6 flex flex-col gap-4 mb-8">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="border px-4 py-2 rounded focus:outline-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="border px-4 py-2 rounded focus:outline-blue-500"
          required
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          className="border px-4 py-2 rounded focus:outline-blue-500"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
      <div className="text-center">
        <p className="mb-2">Or email me directly:</p>
        <a
          href="mailto:dineshbajgain@gmail.com"
          className="text-blue-600 hover:underline"
        >
          dineshbajgain@gmail.com
        </a>
        <div className="mt-6 flex justify-center gap-6">
          <a
            href="https://github.com/dinesh-bazgain"
            target="_blank"
            rel="noopener"
            className="text-gray-700 hover:text-blue-600"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/dineshbajgain"
            target="_blank"
            rel="noopener"
            className="text-gray-700 hover:text-blue-600"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </main>
  );
}
