import { useEffect, useRef, useState } from 'react';
import styles from './Testimonials.module.css';

import certificateImage from '../../assets/images/certificate-uiux-design.png';
import certificateImage2 from '../../assets/images/pnmd_Sohaib alkhateeb.jpg';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const refs = [useRef(null), useRef(null)];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [refs]);

  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <div className={`${styles.testimonialsContainer} container`}>
        <h2 className={styles.sectionTitle}>Testimonials</h2>

        {/* الشهادة الأولى */}
        <p className={styles.sectionSubtitle}>
          Completing the UI/UX Design Course at Knowledge Academy was a transformative experience.
          Over the course of 70 hours, I gained hands-on skills in user interface and user experience design,
          learning how to craft intuitive and visually appealing digital experiences. The program provided
          in-depth knowledge and real-world application, preparing me to approach design challenges with
          confidence and creativity.
        </p>
        <div
          ref={refs[0]}
          className={`${styles.certificateWrapper} ${isVisible ? styles.visible : ''}`}
        >
          <img
            src={certificateImage}
            alt="UI/UX Design Course Certificate - Sohaib Issa Alkhateeb"
            className={styles.certificateImage} // نفس كلاس الصورة
          />
        </div>

        <br /><br /><br />

        {/* الشهادة الثانية */}
        <p className={styles.sectionSubtitle}>
  I contributed to creating the official website of the Palestinian Network for Media Development, 
  which was launched with 3D display technology and QR code integration.
  The website was developed following the latest digital technology standards, aiming to provide 
  an innovative and interactive platform for media professionals and the public. I worked as part of 
  a specialized team of software engineers and digital developers <br /><br />
  This contribution reflects our commitment to advancing digital media in Palestine and implementing 
  interactive, professional, and accessible web solutions.
</p>
        <div
          ref={refs[1]}
          className={`${styles.certificateWrapper} ${isVisible ? styles.visible : ''}`}
        >
          <img
            src={certificateImage2}
            alt="Contribution Certificate - Palestinian Network for Media Development"
            className={styles.certificateImage} // نفس الكلاس مثل الأولى
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
