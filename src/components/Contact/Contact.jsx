import styles from './Contact.module.css';

// --- IMPORT ICONS ---
// For PNGs, import them as URLs
import emailIconUrl from '../../assets/icons/contact-email-icon.png'; // Renamed for clarity
import phoneIconUrl from '../../assets/icons/contact-phone-icon.png'; // Renamed for clarity
// import locationIconUrl from '../../assets/icons/contact-location-icon.png'; // If you add location

// If you were using SVGs as React components, it would be:
// import EmailIconSVG from '../../assets/icons/contact-email-icon.svg?react';
// import PhoneIconSVG from '../../assets/icons/contact-phone-icon.svg?react';

const Contact = () => {
  const email = 'alkhatebsohaib68@gmail.com';
  const phone = '0593874920';
  const formattedPhoneForLink = phone.replace(/\s+/g, '');

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={`${styles.contactContainer} container`}>
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        <p className={styles.sectionSubtitle}>
          Have a project in mind or just want to say hi? I'd love to hear from you!
        </p>

        <div className={styles.contactInfoWrapper}>
          <a href={`mailto:${email}`} className={styles.contactItem}>
            <div className={styles.iconWrapper}>
              {/* Use img tag for PNG */}
              {emailIconUrl ? (
                <img src={emailIconUrl} alt="Email" className={styles.contactIcon} />
              ) : (
                <span className={styles.iconPlaceholder}>📧</span> // Fallback if image fails
              )}
            </div>
            <div className={styles.contactText}>
              <span className={styles.contactLabel}>Email Me</span>
              <span className={styles.contactDetail}>{email}</span>
            </div>
          </a>

          <a href={`tel:${formattedPhoneForLink}`} className={styles.contactItem}>
            <div className={styles.iconWrapper}>
              {/* Use img tag for PNG */}
              {phoneIconUrl ? (
                <img src={phoneIconUrl} alt="Phone" className={styles.contactIcon} />
              ) : (
                <span className={styles.iconPlaceholder}>📞</span> // Fallback if image fails
              )}
            </div>
            <div className={styles.contactText}>
              <span className={styles.contactLabel}>Call Me</span>
              <span className={styles.contactDetail}>{phone}</span>
            </div>
          </a>

          {/* Optional: Add Location
          <div className={styles.contactItem}>
            <div className={styles.iconWrapper}>
              {locationIconUrl ? (
                <img src={locationIconUrl} alt="Location" className={styles.contactIcon} />
              ) : (
                <span className={styles.iconPlaceholder}>📍</span>
              )}
            </div>
            <div className={styles.contactText}>
              <span className={styles.contactLabel}>Location</span>
              <span className={styles.contactDetail}>Your City, Country</span>
            </div>
          </div>
          */}
        </div>

        {/* Optional: Simple Contact Form Placeholder */}
        {/* ... form JSX ... */}
      </div>
      <div className={styles.backgroundShapes}>
        <div className={`${styles.shape} ${styles.shape1}`}></div>
        <div className={`${styles.shape} ${styles.shape2}`}></div>
        <div className={`${styles.shape} ${styles.shape3}`}></div>
      </div>
    </section>
  );
};

export default Contact;