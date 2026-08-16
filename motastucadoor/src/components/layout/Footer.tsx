import { Link } from "react-router";

import logo from "../../assets/logo/motastucadoor-logo.svg";
import { navigation } from "../../data/navigation";
import Container from "../common/Container";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-footer-background)] py-12 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link
              to="/"
              className="theme-logo-link inline-flex no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              aria-label="Mota Stucadoor home"
            >
              <img
                src={logo}
                alt="Mota Stucadoor"
                className="h-12 w-auto"
                loading="lazy"
                width="160"
                height="48"
              />
            </Link>
            <p className="mt-5 max-w-sm text-base leading-7 text-white/80">
              Professioneel stuc- en pleisterwerk voor woningen en bedrijven in
              Valkenswaard en omgeving.
            </p>
          </div>

          <nav aria-label="Footer navigatie">
            <h2 className="text-base text-white">Navigatie</h2>
            <div className="mt-4 flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm text-white/80 no-underline transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/privacy"
                className="text-sm text-white/80 no-underline transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Privacy
              </Link>
            </div>
          </nav>

          <div>
            <h2 className="text-base text-white">Contact</h2>
            <address className="mt-4 flex flex-col gap-3 not-italic text-sm text-white/80">
              <a
                className="no-underline hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                href="tel:+31653230593"
              >
                06-53230593
              </a>
              <a
                className="no-underline hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                href="mailto:info@motastucadoor.nl"
              >
                info@motastucadoor.nl
              </a>
              <span>Valkenswaard</span>
            </address>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-sm text-white/70">
          &copy; {currentYear} Mota Stucadoor. Alle rechten voorbehouden.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
