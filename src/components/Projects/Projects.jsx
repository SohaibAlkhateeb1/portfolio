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

// Project Data
const allProjectsData = [
  {
    id: 1,
    title: 'AuraStride',
    image: auraStrideImg,
    categories: ['all', 'ui/ux', 'mobile app'],
    description: 'A sleek mobile application for tracking fitness and well-being.', // Optional
    link: 'https://www.behance.net/gallery/221025965/AuraStride', 
  },
  {
    id: 2,
    title: 'Anime Saga',
    image: animeSagaImg,
    categories: ['all', 'ui/ux', 'mobile app'], // Based on your description, this might also be 'web' if it's a website.
    description: 'Engaging platform for anime enthusiasts.',
    link: 'https://www.behance.net/gallery/220967637/AnimeSaga',
  },
  {
    id: 3,
    title: 'Pal Store',
    image: palStoreImg,
    categories: ['all', 'ui/ux', 'web'],
    description: 'E-commerce website for unique Palestinian products.',
    link: 'https://www.behance.net/gallery/220751353/PalStore',
  },
  {
    id: 4,
    title: 'TrackIt',
    image:  TrackItImg , 
    categories: ['all', 'mobile app'],
    description: 's a smart tracking and management application designed to help users monitor activities, tasks, or assets in real-time.',
    link: 'https://www.figma.com/design/HESYf1dmiQzqte1ElkRzsC/TrackIt?node-id=0-1&t=fchxFLLLuR04GGm9-1',
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