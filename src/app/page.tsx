import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import HomePage from "./home/page";
import WorkWithMe from "./workWithMe/page";
import ContactPage from "./contact/page";
import ProjectListPage from "./project/page";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <section id="home">
        <HomePage />
      </section>
      <section id="projects">
        <ProjectListPage />
      </section>
      <section id="WorkWithMe">
        <WorkWithMe />
      </section>
      <section id="contact">
        <ContactPage />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
