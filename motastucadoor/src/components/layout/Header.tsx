import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";

import logo from "../../assets/logo/motastucadoor-logo.svg";
import Button from "../common/Button";
import Container from "../common/Container";
import { navigation } from "../../data/navigation";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-white/95 backdrop-blur">
      <Container>
        <div className="flex min-h-20 items-center justify-between gap-6">
          <Link
            to="/"
            className="inline-flex items-center no-underline"
            onClick={closeMenu}
            aria-label="Mota Stucadoor home"
          >
            <img
              src={logo}
              alt="Mota Stucadoor"
              className="h-12 w-auto"
              width="160"
              height="48"
            />
          </Link>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Hoofdnavigatie"
          >
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  [
                    "text-sm font-bold no-underline transition-colors hover:text-[var(--color-mota-orange)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-mota-orange)]",
                    isActive
                      ? "text-[var(--color-mota-orange)]"
                      : "text-[var(--color-mota-dark)]",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button to="/contact" className="px-4 py-2.5 text-sm">
              Offerte aanvragen
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[var(--color-border)] text-[var(--color-mota-dark)] transition-colors hover:border-[var(--color-mota-orange)] hover:text-[var(--color-mota-orange)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-mota-orange)] lg:hidden"
            aria-label={isMenuOpen ? "Menu sluiten" : "Menu openen"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMenuOpen ? (
          <nav
            id="mobile-navigation"
            className="border-t border-[var(--color-border)] py-4 lg:hidden"
            aria-label="Mobiele navigatie"
          >
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    [
                      "rounded-md px-2 py-3 text-base font-bold no-underline transition-colors hover:bg-[var(--color-background-muted)] hover:text-[var(--color-mota-orange)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-mota-orange)]",
                      isActive
                        ? "text-[var(--color-mota-orange)]"
                        : "text-[var(--color-mota-dark)]",
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Button to="/contact" className="mt-3 w-full" onClick={closeMenu}>
                Offerte aanvragen
              </Button>
            </div>
          </nav>
        ) : null}
      </Container>
    </header>
  );
}

export default Header;
