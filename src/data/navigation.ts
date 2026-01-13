export interface NavItem {
  id: string;
  label: string;
  href: string;
  disabled?: boolean;
  isButton?: boolean;
  external?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  // { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About", href: "/about" },
  { id: "projects", label: "Projects", href: "/project" },
  { id: "skills", label: "Skills", href: "/skills" },
  { id: "experience", label: "Experience", href: "/experience" },
  { id: "contact", label: "Contact", href: "/contact" },
  { id: "resume", label: "Resume", href: "/resume.pdf", isButton: true, external: true },
];
