export type NavItem = {
  to: string;
  label: string;
  offset?: number;
};

export const NAV_LINKS: NavItem[] = [
  { to: "home", label: "Home", offset: -80 },
  { to: "about", label: "About", offset: -80 },
  { to: "service", label: "Services", offset: -80 },
  { to: "work", label: "Portfolio", offset: -80 },
  { to: "contact", label: "Contact", offset: -80 },
];
