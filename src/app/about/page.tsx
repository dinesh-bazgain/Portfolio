import about from "../../data/about.json";
import servicesData from "../../data/services.json";
import projects from "../../data/projects.json";
import {
  Briefcase,
  Code,
  Zap,
  MapPin,
  Rocket,
  Heart,
  Target,
  Lightbulb,
  Coffee,
  ArrowRight,
} from "lucide-react";
import "./about.css";

export default function AboutPage() {
  const iconMap = { Code, Zap, Briefcase };
  const services = servicesData.map((service) => ({
    ...service,
    icon: iconMap[service.icon as keyof typeof iconMap] || Code,
  }));

  const featuredProjects = projects.slice(0, 3);

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
            <h2 className="section-title">My Story</h2>
          </div>
          <div className="story-content">
            <p className="story-text">{about.bio}</p>
            <p className="story-text">{about.detailedBio}</p>
          </div>
        </div>
      </section>

      {/* What You Do Section */}
      <section className="about-section services-section">
        <div className="section-container">
          <div className="section-header">
            <Code className="section-icon" size={24} />
            <h2 className="section-title">What I Do</h2>
          </div>
          <p className="section-subtitle">
            Transforming ideas into digital reality through code and creativity
          </p>
          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="service-card">
                  <Icon className="service-icon" size={32} />
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="about-section projects-section">
        <div className="section-container">
          <div className="section-header">
            <Rocket className="section-icon" size={24} />
            <h2 className="section-title">Featured Work</h2>
          </div>
          <p className="section-subtitle">
            A glimpse into some of the projects I've built
          </p>
          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <a
                key={index}
                href={project.demo || project.external || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
              >
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
          <a href="/project" className="view-all-link">
            View All Projects <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Mindset Section */}
      <section className="about-section mindset-section">
        <div className="section-container">
          <div className="section-header">
            <Lightbulb className="section-icon" size={24} />
            <h2 className="section-title">My Mindset</h2>
          </div>
          <div className="mindset-grid">
            <div className="mindset-card">
              <h3>Continuous Learning</h3>
              <p>
                I believe in learning concepts from scratch rather than just
                copying solutions. Understanding the "why" behind things leads
                to better problem-solving.
              </p>
            </div>
            <div className="mindset-card">
              <h3>User-Centric Approach</h3>
              <p>
                Every line of code I write is with the end user in mind.
                Creating meaningful, intuitive experiences is at the core of my
                work.
              </p>
            </div>
            <div className="mindset-card">
              <h3>Long-Term Thinking</h3>
              <p>
                I focus on building sustainable solutions that scale. Quick
                fixes are tempting, but robust architecture wins in the long
                run.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="about-section goals-section">
        <div className="section-container">
          <div className="section-header">
            <Target className="section-icon" size={24} />
            <h2 className="section-title">What Drives Me</h2>
          </div>
          <div className="goals-content">
            <div className="goal-item">
              <span className="goal-number">01</span>
              <div className="goal-text">
                <h3>Bridge AI & Web Development</h3>
                <p>
                  Creating intelligent web applications that leverage the power
                  of machine learning to solve real-world problems.
                </p>
              </div>
            </div>
            <div className="goal-item">
              <span className="goal-number">02</span>
              <div className="goal-text">
                <h3>Contribute to Open Source</h3>
                <p>
                  Giving back to the community that has helped me grow by
                  sharing knowledge and building tools for others.
                </p>
              </div>
            </div>
            <div className="goal-item">
              <span className="goal-number">03</span>
              <div className="goal-text">
                <h3>Build Impactful Products</h3>
                <p>
                  Working on projects that make a difference, whether it's
                  helping communities connect or solving everyday challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="about-section personal-section">
        <div className="section-container">
          <div className="section-header">
            <Coffee className="section-icon" size={24} />
            <h2 className="section-title">Beyond the Code</h2>
          </div>
          <div className="personal-content">
            <p>
              When I'm not coding, you'll find me exploring new technologies,
              reading about AI advancements, or contributing to community
              projects. I'm passionate about sharing knowledge and helping
              others grow in their tech journey.
            </p>
            <div className="interests-grid">
              {about.interests.map((interest, index) => (
                <span key={index} className="interest-tag">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="about-section cta-section">
        <div className="section-container">
          <div className="cta-content">
            <h2 className="cta-title">Let's Create Something Amazing</h2>
            <p className="cta-description">
              I'm currently {about.availability.toLowerCase()}. Whether you have
              a project in mind, want to collaborate, or just want to say hi —
              I'd love to hear from you!
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">
                Get In Touch
              </a>
              <a
                href={`mailto:${about.email}`}
                className="cta-button secondary"
              >
                {about.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
