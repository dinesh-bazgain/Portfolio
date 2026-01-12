import PageNavigation from '@/components/navigation/PageNavigation';

export default function ResumePage() {
  return (
    <main className="resume-main">
      <section className="resume-section" id="resume">
        <div className="resume-content">
          <h1 className="resume-title">Resume</h1>
          <p className="resume-description">
            This is where the resume content will go.
          </p>
        </div>
      </section>
      <PageNavigation currentPage="/resume" />
    </main>
  );
}
