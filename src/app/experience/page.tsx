import PageNavigation from "@/components/navigation/PageNavigation";

export default function ExperiencePage() {
  return (
    <main className="experience-main">
      <section className="experience-section" id="experience">
        <div className="experience-content">
          <h1 className="experience-title">Experience</h1>
          <p className="experience-description">
            This is where the experience content will go.
          </p>
        </div>
      </section>
      <PageNavigation currentPage="/experience" />
    </main>
  );
}
