"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/accompagnements", label: "Accompagnements" },
  { href: "/blog", label: "Blog" },
  { href: "/tarifs", label: "Tarifs & RDV" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <div className="inner">
          <span className="where">Cabinet à La Destrousse · 13112</span>
          <div className="social">
            <a
              href="https://wa.me/33676486927"
              target="_blank"
              rel="noopener"
              title="WhatsApp"
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 0 0-8.7 15L2 22l5.2-1.3A10 10 0 1 0 12 2Zm0 18.1a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.1 8.1 0 1 1 12 20.1Zm4.5-6c-.2-.1-1.4-.7-1.7-.8s-.4-.1-.5.1-.6.8-.8 1-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.8c-.2-.4.2-.4.6-1.2a.4.4 0 0 0 0-.4c0-.1-.5-1.3-.7-1.8s-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3A3 3 0 0 0 7 9.3a5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4 5.3 5.3 0 0 0 3.2.6 2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .2-1.2c-.1-.1-.2-.2-.4-.2Z" />
              </svg>
            </a>
            <a href="tel:+33676486927" title="Téléphone" aria-label="Téléphone">
              <svg viewBox="0 0 24 24">
                <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.2 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .6 3.6 1 1 0 0 1-.3 1Z" />
              </svg>
            </a>
            <span className="sep" />
            <a
              href="https://www.instagram.com/sante_physique_et_mentale/"
              target="_blank"
              rel="noopener"
              title="Instagram"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1a6.6 6.6 0 0 1 2.2.4 4.5 4.5 0 0 1 2.2 2.2 6.6 6.6 0 0 1 .4 2.2c.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9a6.6 6.6 0 0 1-.4 2.2 4.5 4.5 0 0 1-2.2 2.2 6.6 6.6 0 0 1-2.2.4c-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1a6.6 6.6 0 0 1-2.2-.4 4.5 4.5 0 0 1-2.2-2.2 6.6 6.6 0 0 1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9a6.6 6.6 0 0 1 .4-2.2 4.5 4.5 0 0 1 2.2-2.2 6.6 6.6 0 0 1 2.2-.4c1.3-.1 1.7-.1 4.9-.1Zm0 3.3A6.5 6.5 0 1 0 18.5 12 6.5 6.5 0 0 0 12 5.5Zm0 10.7A4.2 4.2 0 1 1 16.2 12 4.2 4.2 0 0 1 12 16.2Zm6.8-10.9a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5Z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/nawel.billali/"
              target="_blank"
              rel="noopener"
              title="Facebook"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24">
                <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5H16.7V4.6a21 21 0 0 0-2.4-.12c-2.4 0-4 1.45-4 4.12v2.3H7.6V14h2.7v8Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/nawel-billali-02a59422/"
              target="_blank"
              rel="noopener"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05a4.2 4.2 0 0 1 3.75-2c4 0 4.75 2.6 4.75 6V21h-4v-5.5c0-1.3-.03-3-1.85-3s-2.13 1.42-2.13 2.9V21h-4V9Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="nav">
        <div className="inner">
          <Link className="logo" href="/">
            <b>Alliance Corps Esprit</b>
            <span>Nawel Billali</span>
          </Link>
          <nav className="menu">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? "on" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <Link
              className="btn btn-p"
              href="/tarifs"
              style={{ height: 40, padding: "0 18px" }}
            >
              Rendez-vous
            </Link>
            <button
              type="button"
              className="burger"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              Menu
            </button>
          </div>
        </div>
      </div>
      <div id="mnav" className={open ? "open" : undefined}>
        <div className="inner">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
