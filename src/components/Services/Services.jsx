// src/components/Services/Services.jsx
import styles from './Services.module.css';

// --- IMPORT YOUR SERVICE ICONS ---

// Default (light theme) icons
import uiUxIconDefaultUrl from '../../assets/icons/ux-skill-icon.png'; // Example path
import webDesignIconDefaultUrl from '../../assets/icons/webdesign-skill-icon.png';
import appDesignIconDefaultUrl from '../../assets/icons/mobile-skill-icon.png';

// Dark theme (light-colored) icons - REPLACE WITH YOUR ACTUAL FILENAMES
import uiUxIconDarkThemeUrl from '../../assets/icons/ux-skill-icon-light.png';
import webDesignIconDarkThemeUrl from '../../assets/icons/webdesign-skill-icon-light.png';
import appDesignIconDarkThemeUrl from '../../assets/icons/mobile-skill-icon-light.png';


// Data for services - now including both icon versions
const servicesData = [
  {
    iconUrlLight: uiUxIconDefaultUrl,
    iconUrlDark: uiUxIconDarkThemeUrl,
    title: 'UI/UX',
    description: 'I craft modern, user-friendly digital experiences that focus on clarity, usability, and aesthetic appeal. Whether for web or mobile, I design with users in mind and deliver intuitive, responsive, and engaging interfaces.',
  },
  {
    iconUrlLight: webDesignIconDefaultUrl,
    iconUrlDark: webDesignIconDarkThemeUrl,
    title: 'Web Design',
    description: 'I create responsive, modern, and user-friendly website designs with clear navigation, wireframes, and interactive prototypes to ensure a smooth and engaging user experience across all devices.',
  },
  {
    iconUrlLight: appDesignIconDefaultUrl,
    iconUrlDark: appDesignIconDarkThemeUrl,
    title: 'App Design',
    description: 'I design intuitive, accessible mobile interfaces for iOS and Android, enhanced with smooth animations and improved through user feedback and testing.',
  },
];

// Accept isDarkMode as a prop
const Services = ({ isDarkMode }) => {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={`${styles.servicesContainer} container`}>
        <h2 className={styles.sectionTitle}>Services</h2>
        <p className={styles.sectionSubtitle}>
          I specialize in creating user-centered, aesthetically pleasing digital experiences that not only look great — but also work intuitively.
          Whether you're launching a startup, redesigning an app, or building a website from scratch,
          I can help you bring your vision to life.
        </p>

        <div className={styles.servicesGrid}>
          {servicesData.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIconWrapper}>
                {/* Conditionally render the icon based on isDarkMode */}
                {(isDarkMode ? service.iconUrlDark : service.iconUrlLight) && (
                  <img
                    src={isDarkMode ? service.iconUrlDark : service.iconUrlLight}
                    alt={`${service.title} icon`}
                    className={styles.serviceIcon}
                  />
                )}
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;