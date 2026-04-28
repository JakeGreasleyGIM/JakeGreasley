import { useEffect, useState } from "react";
import { site } from "../data/site";

const links = [
  { href: "#about", label: "Profile" },
  { href: "#ventures", label: "Works" },
  { href: "#timeline", label: "Chapters" },
  { href: "#principles", label: "Doctrine" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
      <a href="#top" className="nav__brand" aria-label={site.name}>
        <span className="nav__mark">{site.initials}</span>
        <span>{site.name}</span>
      </a>
      <nav className="nav__links" aria-label="Primary">
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>
      <a className="nav__cta" href={`mailto:${site.email}`}>
        Get in touch
      </a>
    </header>
  );
}
