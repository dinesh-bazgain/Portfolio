export interface NavItem {
  id: string;
  label: string;
  href: string;
  disabled?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About", href: "/about" },
  { id: "resume", label: "Resume", href: "/resume" },
  // { id: "credentials", label: "Credentials", href: "#credentials" },
  { id: "projects", label: "Projects", href: "/project" },
  { id: "skills", label: "Skills", href: "/skills" },
  { id: "testimonials", label: "Testimonials", href: "/testimonials" },
  { id: "contact", label: "Contact", href: "/contact" },
  // { id: "design-systems", label: "Design Systems", href: "#", disabled: true },
  // { id: "figma-templates", label: "Figma Templates", href: "#", disabled: true },
  // { id: "interaction-design", label: "Interaction Design", href: "#", disabled: true },
];
