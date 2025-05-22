// src/App.jsx
import { useState, useEffect } from 'react';
import './App.css'; // Keep or remove if not used
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Fallback to system preference if no saved theme
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Hero isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      {/* 👇👇👇 THIS IS THE LINE THAT NEEDS TO BE CHANGED 👇👇👇 */}
      <Services isDarkMode={isDarkMode} />
      {/* 👆👆👆 MAKE SURE isDarkMode={isDarkMode} IS ADDED HERE 👆👆👆 */}

      {/*
        Consider if these components also need the isDarkMode prop
        for any internal image swapping or style adjustments.
        If not, they can remain as they are.
      */}
      <Projects isDarkMode={isDarkMode} /> {/* Example: If Projects also needs it */}
      <Testimonials isDarkMode={isDarkMode} /> {/* Example: If Testimonials also needs it for its certificate image */}
      <Contact isDarkMode={isDarkMode} /> {/* Example: If Contact icons need swapping */}
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}

export default App;