/**
 * Main App Component - Assembles all portfolio sections
 */
import React from 'react';

// Theme Provider
import { ThemeProvider } from './context/ThemeContext';

// Layout Components
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Section Components
import {
  HeroSection,
  ProjectsSection,
  ExperienceSection,
  SkillsSection,
  AboutSection,
  BlogSection,
  ContactSection,
} from './components/sections';

// Effects
import { CustomCursor } from './components/effects/CustomCursor';

// Global Styles
import './App.css';

// ============================================
// APP COMPONENT
// ============================================
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <CustomCursor />
        <Navbar />
        <main>
          <HeroSection />
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
          <BlogSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
