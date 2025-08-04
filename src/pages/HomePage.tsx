import React from 'react';
import HeroSection from '../components/home/HeroSection';
import InnovationSection from '../components/home/InnovationSection'; 
import ProjectsSection from '../components/home/ProjectsSection'; 
import PaymentMethodsSection from '../components/home/PaymentMethodsSection'; 
import HowltWorksSection from '../components/home/HowltWorksSection'; 
import TestimonialsSection from '../components/home/TestimonialsSection'; 
import TechnicalSupportForm from '../components/home/TechnicalSupportForm';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-900 w-full overflow-x-hidden"> {/* Adicionei a classe overflow-x-hidden */}
      <HeroSection /> 
      <HowltWorksSection /> 
      <TechnicalSupportForm /> 
      <InnovationSection /> 
      <TestimonialsSection />  
      <ProjectsSection />
      <PaymentMethodsSection />
    </div>
  );
};

export default HomePage;
