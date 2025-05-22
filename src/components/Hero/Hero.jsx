// src/components/Hero/Hero.jsx
import styles from './Hero.module.css';
import profileImageUrl from '../../assets/images/profile.png';
import downloadIconUrl from '../../assets/icons/download-icon.png';
// import myCvUrl from '../../assets/cv/Hamza_Awad_CV.pdf'; // Make sure this CV name is correct
import myCvUrl from '../../assets/cv/Sohaib Alkhatee_CV.pdf'; 


// Default (light theme) social icons
import facebookIconDefaultUrl from '../../assets/icons/facebook-icon.png';
import twitterIconDefaultUrl from '../../assets/icons/twitter-icon.png';
import instagramIconDefaultUrl from '../../assets/icons/instagram-icon.png';
import linkedinIconDefaultUrl from '../../assets/icons/linkedin-icon.png';

// Dark theme (light-colored) social icons
import facebookIconDarkThemeUrl from '../../assets/icons/facebook-icon-light.png';
import twitterIconDarkThemeUrl from '../../assets/icons/twitter-icon-light.png';
import instagramIconDarkThemeUrl from '../../assets/icons/instagram-icon-light.png';
import linkedinIconDarkThemeUrl from '../../assets/icons/linkedin-icon-light.png';


// Accept isDarkMode as a prop
const Hero = ({ isDarkMode }) => {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={`${styles.heroContainer} container`}>
        <div className={styles.heroContent}>
          <p className={styles.introText}>Hi I am</p>
          <h1 className={styles.nameText}>Sohaib Alkhateeb</h1>
          <h2 className={styles.titleText}>UI & UX Designer</h2>
          <div className={styles.buttonGroup}>
            <a href="#contact" className={`${styles.btn} ${styles.btnPrimary}`}>Hire Me</a>
            <a href={myCvUrl}  download="Sohaib_Alkhateeb_CV.pdf" className={`${styles.btn} ${styles.btnSecondary}`}>
              {downloadIconUrl ? <img src={downloadIconUrl} alt="Download CV" className={styles.btnIcon} /> : <span className={styles.btnIconPlaceholder}>⬇</span>}
              Download CV
            </a>
          </div>
        </div>

        <div className={styles.heroImageWrapper}>
          <div className={`${styles.blob} ${styles.blob1}`}></div>
          <div className={`${styles.blob} ${styles.blob2}`}></div>
          <img
            src={profileImageUrl}
            alt="Sohaib Alkhateeb - UI/UX Designer"
            className={styles.profileImage}
          />
        </div>
      </div>

      <div className={`${styles.socialLinksContainer} container`}>
        <a href="https://www.facebook.com/profile.php?id=100072648710279" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <img src={isDarkMode ? facebookIconDarkThemeUrl : facebookIconDefaultUrl} alt="Facebook" />
        </a>
       
        <a href="https://www.behance.net/sohaibalkhateb" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <img src={isDarkMode ? instagramIconDarkThemeUrl : instagramIconDefaultUrl} alt="behance" />
        </a>
        <a href="https://www.linkedin.com/in/sohaib-alkhateeb/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img src={isDarkMode ? linkedinIconDarkThemeUrl : linkedinIconDefaultUrl} alt="LinkedIn" />
        </a>
      </div>
    </section>
  );
};

export default Hero;