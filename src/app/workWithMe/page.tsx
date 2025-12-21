import about from "../../data/about.json";
import servicesData from "../../data/services.json";
import { Briefcase, Code, Zap } from "lucide-react";

export default function WorkWithMe() {
  const iconMap = { Code, Zap, Briefcase };
  const services = servicesData.map((service) => ({
    ...service,
    icon: iconMap[service.icon as keyof typeof iconMap] || Code,
  }));

  return (
    <section className="work-section" id="WorkWithMe">
      <div className="work-container">
        {/* About Me Section */}
        <div className="work-header">
          <h2 className="work-title">About Me</h2>
          <p className="work-description">{about.tagline}</p>
          <div
            style={{
              margin: "1.5rem 0",
              fontSize: "1rem",
              color: "var(--muted-foreground)",
              lineHeight: 1.6,
            }}
          >
            <strong>{about.name}</strong> &mdash; {about.role}
            <br />
            <span>{about.bio}</span>
            <br />
            <span>{about.detailedBio}</span>
          </div>
          <div style={{ fontSize: "0.95rem", marginBottom: "1rem" }}>
            <span>Location: {about.location}</span>
            <br />
            <span>
              Email: <a href={`mailto:${about.email}`}>{about.email}</a>
            </span>
            <br />
            <span>Availability: {about.availability}</span>
          </div>
          <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
            <a
              href={about.social.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={about.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={about.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>

        {/* Work With Me Section */}
        <div className="work-header">
          <h2 className="work-title">How to Work With Me</h2>
          <p className="work-description">
            I love collaborating on innovative projects and helping teams bring
            their ideas to life. Here are some ways we can work together:
          </p>
        </div>

        <div className="work-services">
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

        <div className="work-cta">
          <p>Ready to start a project or explore opportunities?</p>
          <a href="#contact" className="btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
