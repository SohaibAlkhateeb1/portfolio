import { useEffect, useRef, useState } from 'react';
import styles from './Navbar.module.css';

// Import both logo versions
import logoDefaultUrl from '../../assets/icons/logo.png';      // Your default (e.g., dark) logo for light mode
import logoDarkThemeUrl from '../../assets/icons/logo-light.png'; // Your light-colored logo for dark mode

// Optional: If you have actual SVG icons for Sun/Moon, import them like this:
// import SunIcon from '../../assets/icons/sun-icon.svg?react';
// import MoonIcon from '../../assets/icons/moon-icon.svg?react';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const navRef = useRef(null);

  // Define navLinks outside or memoize if it were dynamic, but for static it's fine here.
  const navLinks = [
    { id: 'home', text: 'Home' },
    { id: 'about', text: 'About' },
    { id: 'services', text: 'Services' },
    { id: 'projects', text: 'Projects' },
    { id: 'testimonials', text: 'Testimonials' },
    { id: 'contact', text: 'Contact Us' },
  ];

  // Scrollspy Effect
  useEffect(() => {
    const navHeight = navRef.current ? navRef.current.offsetHeight : 70;
    const observerOptions = {
      root: null,
      rootMargin: `-${navHeight + 10}px 0px -45% 0px`,
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean);

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    const currentHash = window.location.hash.substring(1);
    if (currentHash && navLinks.some(link => link.id === currentHash)) {
      setActiveSection(currentHash);
    } else if (window.scrollY < window.innerHeight / 2 && sections.find(s => s.id === 'home')) {
      setActiveSection('home');
    }

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [navLinks]); // navLinks is stable, so this runs effectively once like componentDidMount for observer setup

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handles click on nav links
  const handleNavLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false); // Close mobile menu on link click
    }
    // The href="#sectionId" will handle the actual scroll
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={styles.navbar} ref={navRef}>
      <div className={`${styles.navContainer} container`}> {/* Assuming .container is global */}
        <a
          href="#home"
          className={styles.navLogoLink}
          onClick={() => handleNavLinkClick('home')}
        >
          <img
            src={isDarkMode ? logoDarkThemeUrl : logoDefaultUrl}
            alt="Sohaib Alkhateeb Logo"
            className={styles.logoImage}
          />
        </a>

        <nav
          id="main-navigation-menu"
          className={`${styles.navMenu} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}
        >
           {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`${styles.navLink} ${activeSection === link.id ? styles.active : ''}`}
              onClick={() => handleNavLinkClick(link.id)}
            >
              {link.text}
            </a>
          ))}
        </nav>

        <div className={styles.navActions}>
          <button
            className={`${styles.themeToggle} ${isDarkMode ? styles.darkModeActive : ''}`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <div className={styles.themeToggleIcons}>
              <span className={styles.sunIcon}>☀️</span>
              <span className={styles.moonIcon}>🌙</span>
            </div>
            <div className={styles.themeToggleButton}></div>
          </button>

          <button
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="main-navigation-menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'} {/* Simple text icons: Close / Hamburger */}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;