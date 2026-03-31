import { Link, useLocation } from "wouter";

export default function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="navbar">
      <h2>Centuary Fab</h2>

      <div className="links">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <a className={location === link.href ? "active" : ""}>
              {link.label}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
}
