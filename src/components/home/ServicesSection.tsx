import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Server, Database, LineChart, Shield } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="inline-block p-3 bg-primary-100 text-primary-600 rounded-lg mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to={link}
        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
      >
        Saiba mais
        <svg 
          className="ml-2 w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </Link>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Globe size={24} />,
      title: "Desenvolvimento Web",
      description: "Criamos sites e aplicações web responsivas, modernas e otimizadas para conversão de leads.",
      link: "/servicos#web"
    },
    {
      icon: <Smartphone size={24} />,
      title: "Aplicativos Móveis",
      description: "Desenvolvemos apps nativos e multiplataforma para iOS e Android com experiências intuitivas.",
      link: "/servicos#mobile"
    },
    {
      icon: <Server size={24} />,
      title: "Cloud Computing",
      description: "Oferecemos soluções em nuvem para escalabilidade, flexibilidade e redução de custos de infraestrutura.",
      link: "/servicos#cloud"
    },
    {
      icon: <Database size={24} />,
      title: "Banco de Dados",
      description: "Projetamos e otimizamos estruturas de banco de dados para alto desempenho e segurança.",
      link: "/servicos#database"
    },
    {
      icon: <LineChart size={24} />,
      title: "Business Intelligence",
      description: "Transformamos dados em insights acionáveis para tomada de decisões estratégicas.",
      link: "/servicos#bi"
    },
    {
      icon: <Shield size={24} />,
      title: "Cibersegurança",
      description: "Protegemos seus sistemas, dados e usuários contra ameaças digitais e vulnerabilidades.",
      link: "/servicos#security"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Nossos Serviços"
          subtitle="Soluções tecnológicas para impulsionar seu negócio"
          alignment="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link
            to="/servicos"
            className="inline-block px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors"
          >
            Ver Todos os Serviços
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;