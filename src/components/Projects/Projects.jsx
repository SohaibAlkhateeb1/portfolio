import { useState, useEffect } from 'react';
import styles from './Projects.module.css';

// --- IMPORT YOUR PROJECT IMAGES ---
// Make sure these paths are correct
import auraStrideImg from '../../assets/images/project-aurastride.png'; // Example
import animeSagaImg from '../../assets/images/project-animesaga.png';
import palStoreImg from '../../assets/images/project-palstore.png';
import TrackItImg from '../../assets/images/project-TrackIt.png';
import pawfectionImg from '../../assets/images/project-pawfection.png';
import sohaibPortfolioImg from '../../assets/images/project-sohaibportfolio.png';
import khadamatiImg from '../../assets/images/project-khadamati.png';
import fuloosiImg from '../../assets/images/project-fuloosi.png';
import ta3leemImg from '../../assets/images/project-Ta3leem.png';

// Project Data
const allProjectsData = [
  {
    id: 1,
    title: 'Khadamati',
    image: khadamatiImg,
    categories: ['all', 'ui/ux', 'app design'],
    description: 'Khadamati is a bilingual, mobile-first platform designed to connect people across Palestine with trusted local service providers such as electricians, tutors, and carpenters. Addressing the common challenges of relying on word of mouth or social media groups, Khadamati offers a centralized and reliable database featuring verified professionals and user reviews. By bridging the gap between customers and freelancers or small businesses, the app aims to improve service quality, expand reach, and build trust within communities. Available as a mobile app, Khadamati empowers users to easily find and book local services with confidence.',
    link: 'https://www.behance.net/gallery/229224089/Khadamati',
  },
  {
    id: 2,
    title: 'فلوسي (My Money)',
    image: fuloosiImg,
    categories: ['all', 'ui/ux', 'mobile app'],
    description: 'Fuloosi is a modern Arabic finance app designed to help you manage your money with ease. Whether you\'re tracking daily expenses, monitoring income, or setting savings goals, Fuloosi gives you full control over your budget. With a simple dark-mode interface, insightful analytics, and smart alerts, Fuloosi makes managing your finances easier, clearer, and smarter — all in your native language.',
    link: 'https://www.behance.net/gallery/229274819/-(My-money)',
  },
  {
    id: 3,
    title: 'Ta3leem',
    image: ta3leemImg,
    categories: ['all', 'ui/ux', 'web'],
    description: 'Ta3leem is a modern web-based learning platform designed for students and young professionals in Palestine and the Arab world. We offer practical, skill-based courses in both Arabic and English — covering topics like design, programming, freelancing, and digital marketing — all delivered through a simple, mobile-friendly interface. Unlike generic global platforms, Ta3leem is culturally tailored, locally relevant, and focused on helping learners gain real-world skills that lead to certifications, freelance opportunities, and career growth. Whether you\'re looking to build your first portfolio or upskill for the job market, Ta3leem empowers you to learn at your own pace, in your preferred language, and on your own terms.',
    link: 'https://www.behance.net/gallery/229695975/Ta3leem',
  },
  {
    id: 4,
    title: 'Pal Store',
    image: palStoreImg,
    categories: ['all', 'ui/ux', 'web'],
    description: 'E-commerce website for unique Palestinian products.',
    link: 'https://www.behance.net/gallery/220751353/PalStore',
  },
  {
    id: 5,
    title: 'Pawfection',
    image: pawfectionImg,
    categories: ['all', 'ui/ux', 'mobile app'],
    description: 'Adorable and functional app for pet owners.',
    link: 'https://www.behance.net/gallery/225841905/PawFection',
  },
  {
    id: 6,
    title: 'AuraStride',
    image: auraStrideImg,
    categories: ['all', 'ui/ux', 'mobile app'],
    description: 'A sleek mobile application for tracking fitness and well-being.',
    link: 'https://www.behance.net/gallery/221025965/AuraStride',
  },
  {
    id: 7,
    title: 'Anime Saga',
    image: animeSagaImg,
    categories: ['all', 'ui/ux', 'mobile app'],
    description: 'Engaging platform for anime enthusiasts.',
    link: 'https://www.behance.net/gallery/220967637/AnimeSaga',
  },
  {
    id: 8,
    title: 'TrackIt',
    image: TrackItImg,
    categories: ['all', 'mobile app'],
    description: 'A smart tracking and management app for real-time monitoring of tasks and activities.',
    link: 'https://www.figma.com/design/HESYf1dmiQzqte1ElkRzsC/TrackIt?node-id=0-1&t=fchxFLLLuR04GGm9-1',
  },
  {
    id: 9,
    title: 'Sohaib Portfolio',
    image: sohaibPortfolioImg,
    categories: ['all', 'web'],
    description: 'Personal portfolio website showcasing design work.',
    link: 'https://www.figma.com/design/kcOvjXNSpLmsKs30OSgMMh/Personal-portfolio?node-id=0-1&t=fchxFLLLuR04GGm9-1',
  },
];



// Define filter categories based on your project data
const filterCategories = ['All', 'UI/UX', 'Website Design', 'App Design'];
// Map display names to data categories (lowercase, with slashes if needed)
const categoryMap = {
  'All': 'all',
  'UI/UX': 'ui/ux',
  'Website Design': 'web',
  'App Design': 'mobile app', // Or 'app' if you prefer shorter tags
};


const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(allProjectsData);

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(allProjectsData);
    } else {
      const dataCategory = categoryMap[activeFilter];
      setFilteredProjects(
        allProjectsData.filter(project => project.categories.includes(dataCategory))
      );
    }
  }, [activeFilter]);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={`${styles.projectsContainer} container`}>
        <h2 className={styles.sectionTitle}>My Projects</h2>
        <p className={styles.sectionSubtitle}>
          A curated collection of user-centered UX/UI design projects, each focused on creating intuitive,
           accessible, and visually compelling digital experiences.
            From mobile apps to web platforms, these designs showcase thoughtful research,
             wireframing, prototyping, and interface design aimed at solving real user problems.
        </p>

        <div className={styles.filterButtons}>
          {filterCategories.map((category) => (
            <button
              key={category}
              className={`${styles.filterButton} ${activeFilter === category ? styles.active : ''}`}
              onClick={() => handleFilterClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.projectsGrid}>
          {filteredProjects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <a href={project.link || '#'} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                <img src={project.image} alt={project.title} className={styles.projectImage} />
                <div className={styles.projectInfo}>
                  <span className={styles.projectCategory}>
                    {/* Display the first relevant category (not 'all') */}
                    {project.categories.find(cat => cat !== 'all')?.toUpperCase() || project.categories[0].toUpperCase()}
                  </span>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  {/* <p className={styles.projectDescription}>{project.description}</p> */}
                </div>
              </a>
            </div>
          ))}
          {filteredProjects.length === 0 && (
            <p className={styles.noProjectsFound}>No projects found for this category.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;