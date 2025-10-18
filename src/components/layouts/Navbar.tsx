import Image from "next/image";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <Image src="/file.svg" alt="Logo" width={40} height={40} />
          <span className="navbar-title">Dinesh Bajgain</span>
        </div>
        <div className="navbar-links">
          <a href="#home" className="navbar-link">
            HomePage
          </a>
          <a href="#projects" className="navbar-link">
            Projects
          </a>
          <a href="#WorkWithMe" className="navbar-link">
            Work With Me
          </a>
          <a href="#contact" className="navbar-link">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
