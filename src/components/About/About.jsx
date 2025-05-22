// src/components/About/About.jsx
import styles from './About.module.css';

// --- IMPORT YOUR ASSETS ---
import profileImageUrl from '../../assets/images/profile.png';

// Light mode (default) icons
import FigmaIconDefaultUrl from '../../assets/icons/figma-skill-icon.png';
import UxIconDefaultUrl from '../../assets/icons/ux-skill-icon.png';
import WebDesignIconDefaultUrl from '../../assets/icons/webdesign-skill-icon.png';
import MobileDesignIconDefaultUrl from '../../assets/icons/mobile-skill-icon.png';

// Dark mode icons (light-colored versions for dark background)
import FigmaIconDarkThemeUrl from '../../assets/icons/figma-skill-icon-light.png';
import UxIconDarkThemeUrl from '../../assets/icons/ux-skill-icon-light.png';
import WebDesignIconDarkThemeUrl from '../../assets/icons/webdesign-skill-icon-light.png';
import MobileDesignIconDarkThemeUrl from '../../assets/icons/mobile-skill-icon-light.png';


// Update skillsData to include both icon versions
const skillsData = [
  {
    name: 'Figma',
    percentage: 90,
    iconUrlLight: FigmaIconDefaultUrl,
    iconUrlDark: FigmaIconDarkThemeUrl,
  },
  {
    name: 'UX',
    percentage: 90,
    iconUrlLight: UxIconDefaultUrl,
    iconUrlDark: UxIconDarkThemeUrl,
  },
  {
    name: 'Website Design',
    percentage: 85,
    iconUrlLight: WebDesignIconDefaultUrl,
    iconUrlDark: WebDesignIconDarkThemeUrl,
  },
  {
    name: 'Mobile Design',
    percentage: 90,
    iconUrlLight: MobileDesignIconDefaultUrl,
    iconUrlDark: MobileDesignIconDarkThemeUrl,
  },
];

// Accept isDarkMode as a prop
const About = ({ isDarkMode }) => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={`${styles.aboutContainer} container`}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <p className={styles.sectionSubtitle}>User Interface And User Experience</p>

        <div className={styles.aboutContentWrapper}>
          <div className={styles.aboutImageContainer}>
            <div className={`${styles.blob} ${styles.blob1}`}></div>
            <div className={`${styles.blob} ${styles.blob2}`}></div>
            <img
              src={profileImageUrl}
              alt="Sohaib Alkhateeb"
              className={styles.profileImageInAbout}
            />
          </div>

          <div className={styles.aboutTextContainer}>
            <p>
              As a passionate UI/UX Designer, I focus on crafting intuitive,
              visually appealing, and user-centered digital experiences. My
              journey in design is driven by a deep ambition to understand
              user needs and translate them into seamless, engaging
              interfaces. I combine creativity with functionality, ensuring that
              every design not only looks beautiful but also provides an
              effortless experience. With proficiency in design tools like
              Figma, Sketch, I work on projects from concept to execution,
              creating responsive designs that perform well across all devices.
            </p>
            <p>
              My goal is to make technology more accessible and enjoyable.
              Whether it's designing mobile apps, websites, or digital products, I am always eager to
              solve problems through thoughtful and innovative design solutions.
            </p>
          </div>
        </div>

        {skillsData.length > 0 && (
          <div className={styles.skillsGrid}>
            {skillsData.map((skill, index) => (
              <div key={index} className={styles.skillItem}>
                <div className={styles.skillCircularProgress}>
                  <svg viewBox="0 0 36 36" className={styles.circularChart}>
                    <path
                      className={styles.circleBg}
                      d="M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className={styles.circle}
                      strokeDasharray={`${skill.percentage}, 100`}
                      d="M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  {/* Conditionally render the icon based on isDarkMode */}
                  {(isDarkMode ? skill.iconUrlDark : skill.iconUrlLight) && (
                    <img
                      src={isDarkMode ? skill.iconUrlDark : skill.iconUrlLight}
                      alt={`${skill.name} icon`}
                      className={styles.skillIconInsideCircle}
                    />
                  )}
                </div>
                <p className={styles.skillPercentageText}>{skill.percentage}%</p>
                <p className={styles.skillNameText}>{skill.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default About;