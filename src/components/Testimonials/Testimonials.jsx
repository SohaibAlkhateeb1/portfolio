import { useEffect, useRef, useState } from 'react'; // Ensure these are imported
import styles from './Testimonials.module.css';

// --- IMPORT YOUR CERTIFICATE IMAGE ---
import certificateImage from '../../assets/images/certificate-uiux-design.png';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const certificateRef = useRef(null); // Ref for the certificate wrapper

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Important: stop observing once it's visible
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible (adjust as needed)
        // rootMargin: "-100px 0px -100px 0px" // Optional: adjust viewport for triggering
      }
    );

    // Ensure certificateRef.current exists before observing
    const currentRef = certificateRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup function to unobserve when the component unmounts
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <div className={`${styles.testimonialsContainer} container`}>
        <h2 className={styles.sectionTitle}>Testimonials</h2>
        <p className={styles.sectionSubtitle}>
      Completing the UI/UX Design Course at Knowledge Academy was a transformative experience.
      Over the course of 70 hours, I gained hands-on skills in user interface and user experience design,
      learning how to craft intuitive and visually appealing digital experiences. The program provided in-depth knowledge and real-world application,
      preparing me to approach design challenges with confidence and creativity.”
        </p>

        {/* Attach the ref and conditionally apply the 'visible' class */}
        <div
          ref={certificateRef}
          className={`${styles.certificateWrapper} ${isVisible ? styles.visible : ''}`}
        >
          {certificateImage ? (
            <img
              src={certificateImage}
              alt="UI/UX Design Course Certificate - Sohaib Issa Alkhateeb"
              className={styles.certificateImage}
            />
          ) : (
            <p className={styles.imagePlaceholder}>Certificate Image Here</p>
          )}
        </div>

        {/* ... (optional text testimonials) ... */}
      </div>
    </section>
  );
};

export default Testimonials;