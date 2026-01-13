import about from "../../data/about.json";
import { MapPin, Heart } from "lucide-react";
import PageNavigation from "@/components/navigation/PageNavigation";
import "./about.css";

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <span className="hero-greeting">Hello, I'm</span>
          <h1 className="hero-name">{about.name}</h1>
          <p className="hero-role">{about.role}</p>
          <p className="hero-tagline">{about.tagline}</p>
          <div className="hero-location">
            <MapPin size={16} />
            <span>{about.location}</span>
          </div>
        </div>
      </section>
      {/* Your Story Section */}
      <section className="about-section story-section">
        <div className="section-container">
          <div className="section-header">
            <Heart className="section-icon" size={24} />
            <h1 className="section-title">My Story</h1>
          </div>
          <div className="story-content">
            <p className="story-text">{about.bio}</p>
            <p className="story-text">{about.detailedBio}</p>
          </div>
        </div>
      </section>
      <PageNavigation currentPage="/about" />
    </main>
  );
}
