import PageNavigation from "@/components/navigation/PageNavigation";

export default function TestimonalsPage() {
    return (
        <main className="testimonals-main">
            <section className="testimonals-section" id="testimonals">
                <div className="testimonals-content">
                    <h1 className="testimonals-title">Testimonials</h1>
                    <p className="testimonals-description">
                        This is where the testimonials content will go.
                    </p>
                </div>
            </section>
            <PageNavigation currentPage="/testimonals" />
        </main>
    );
}