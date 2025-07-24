import React from 'react';
import HeroSection from '../components/home/HeroSection';
import InnovationSection from '../components/home/InnovationSection';
import ProjectsSection from '../components/home/ProjectsSection';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-900 w-full overflow-x-hidden"> {/* Adicionei a classe overflow-x-hidden */}
      <HeroSection />
      <InnovationSection />
      <ProjectsSection />
    </div>
  );
};

export default HomePage;
