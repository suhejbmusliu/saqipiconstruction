import { useState, useEffect, useRef } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const atTop = currentY <= 0;

      if (atTop) {
        setIsAtTop(true);
        setIsVisible(true);
      } else {
        setIsAtTop(false);

        if (currentY > lastScrollY.current + 5) {
          // scrolling down
          setIsVisible(false);
          setIsMobileMenuOpen(false);
        } else if (currentY < lastScrollY.current - 5) {
          // scrolling up
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentY;
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // 👇 smooth scroll handler
  const handleNavClick = (event, targetId) => {
    event.preventDefault();

    const section = document.getElementById(targetId);
    if (!section) return;

    // height of navbar so section title is not hidden under it
    const NAVBAR_OFFSET = 80;

    const sectionTop =
      section.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });

    closeMobileMenu();
  };

  const navbarClasses = [
    "navbar",
    isVisible ? "navbar--visible" : "navbar--hidden",
    isAtTop ? "navbar--transparent" : "navbar--solid",
  ].join(" ");

  return (
    <header className={navbarClasses}>
      <div className="container navbar__inner">
        {/* LEFT: LOGO */}
        <div className="navbar__logo">
          <span className="navbar__logo-main">SAQIPI</span>
          <span className="navbar__logo-sub">CONSTRUCTION</span>
        </div>

        {/* CENTER: LINKS (desktop & tablet) */}
        <nav className="navbar__links">
          <button
            className="navbar__link"
            onClick={(e) => handleNavClick(e, "home")}
          >
            Ballina
          </button>
          <button
            className="navbar__link"
            onClick={(e) => handleNavClick(e, "about")}
          >
            Rreth nesh
          </button>
          <button
            className="navbar__link"
            onClick={(e) => handleNavClick(e, "services")}
          >
            Sherbimet
          </button>
          <button
            className="navbar__link"
            onClick={(e) => handleNavClick(e, "contact")}
          >
            Kontakti
          </button>
        </nav>

        {/* RIGHT: SOCIAL + HAMBURGER */}
        <div className="navbar__right">
          <div className="navbar__social">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="navbar__social-link"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="navbar__social-link"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>

          <button
            className="navbar__menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="navbar__menu-bar" />
            <span className="navbar__menu-bar" />
            <span className="navbar__menu-bar" />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <nav
        className={`navbar__links-mobile ${
          isMobileMenuOpen ? "navbar__links-mobile--open" : ""
        }`}
      >
        <button
          className="navbar__link-mobile"
          onClick={(e) => handleNavClick(e, "home")}
        >
          Ballina
        </button>
        <button
          className="navbar__link-mobile"
          onClick={(e) => handleNavClick(e, "about")}
        >
          Rreth nesh
        </button>
        <button
          className="navbar__link-mobile"
          onClick={(e) => handleNavClick(e, "services")}
        >
          Sherbimet
        </button>
        <button
          className="navbar__link-mobile"
          onClick={(e) => handleNavClick(e, "contact")}
        >
          Kontakti
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
