import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <img className="footer-logo" src="/assets/brand/nadin-logo-transparent.png" alt="Nadin Isuf" />
        <h2>Less is more..., not in interior.</h2>
      </div>
      <div className="footer-links">
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Journal</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </footer>
  );
}
