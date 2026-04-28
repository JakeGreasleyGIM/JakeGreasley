import { site } from "../data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <span>© {year} {site.name}</span>
      <span>{site.domain}</span>
      <span>Built with intent.</span>
    </footer>
  );
}
