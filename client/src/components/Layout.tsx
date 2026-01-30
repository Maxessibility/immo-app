import type { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="app">
      <a className="skip-link" href="#main">
        Aller au contenu
      </a>
      <header className="header">
        <div className="container header__inner">
          <Link to="/" className="brand">
            Immo App
          </Link>
          <nav aria-label="Navigation principale">
            <Link to="/" className="nav-link">
              Annonces
            </Link>
          </nav>
        </div>
      </header>
      <main id="main" className="container main">
        {children}
      </main>
      <footer className="footer">
        <div className="container">
          <small>© 2026 Immo App — Démo</small>
        </div>
      </footer>
    </div>
  );
}
