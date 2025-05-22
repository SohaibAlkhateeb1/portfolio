// src/components/Footer/Footer.jsx
import styles from './Footer.module.css';

// Default/Light theme assets
import logoDefaultUrl from '../../assets/icons/logo.png';
import facebookIconDefaultUrl from '../../assets/icons/facebook-icon.png';
import twitterIconDefaultUrl from '../../assets/icons/twitter-icon.png';
import instagramIconDefaultUrl from '../../assets/icons/instagram-icon.png';
import linkedinIconDefaultUrl from '../../assets/icons/linkedin-icon.png';

// Dark theme assets
import logoDarkThemeUrl from '../../assets/icons/logo-light.png';
import facebookIconDarkThemeUrl from '../../assets/icons/facebook-icon-light.png';
import twitterIconDarkThemeUrl from '../../assets/icons/twitter-icon-light.png';
import instagramIconDarkThemeUrl from '../../assets/icons/instagram-icon-light.png';
import linkedinIconDarkThemeUrl from '../../assets/icons/linkedin-icon-light.png';

const Footer = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();

  // ✅ Added navigation links
  const navLinks = [
    { id: 'home', text: 'Home' },
    { id: 'about', text: 'About' },
    { id: 'services', text: 'Services' },
    { id: 'projects', text: 'Projects' },
    { id: 'testimonials', text: 'Testimonials' },
    { id: 'contact', text: 'Contact Us' },
  ];

  const socialLinksData = [
    {
      name: 'Facebook',
      defaultIcon: facebookIconDarkThemeUrl,
      darkThemeIcon: facebookIconDarkThemeUrl,
      url: 'https://www.facebook.com/profile.php?id=100072648710279',
    },
    {
      name: 'Instagram',
      defaultIcon: instagramIconDarkThemeUrl,
      darkThemeIcon: instagramIconDarkThemeUrl,
      url: 'https://www.behance.net/sohaibalkhateb',
    },
    {
      name: 'LinkedIn',
      defaultIcon: linkedinIconDarkThemeUrl,
      darkThemeIcon: linkedinIconDarkThemeUrl,
      url: 'https://www.linkedin.com/in/sohaib-alkhateeb/',
    },
  ];

  return (
    <footer className={styles.footerSection}>
      <div className={`${styles.footerContainer} container`}>
        <div className={styles.footerTop}>
          <a href="#home" className={styles.footerLogoLink}>
            <img
              src={isDarkMode ? logoDarkThemeUrl : logoDarkThemeUrl}
              alt="Sohaib Alkhateeb Logo"
              className={styles.footerLogoImage}
            />
          </a>

          <nav className={styles.footerNavMenu}>
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className={styles.footerNavLink}>
                {link.text}
              </a>
            ))}
          </nav>

          <div className={styles.footerSocialLinks}>
            {socialLinksData.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className={styles.socialIconLink}
              >
                <img
                  src={isDarkMode ? social.darkThemeIcon : social.defaultIcon}
                  alt={social.name}
                  className={styles.socialIcon}
                />
              </a>
            ))}
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyrightText}>
            © {currentYear} <a href="#home" className={styles.copyrightName}>Sohaib</a>. All Rights Reserved, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
