import React from 'react';
import { Code, Globe, Smartphone, Monitor } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  category,
  technologies,
  url,
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-0 left-0 m-4">
          <span className="inline-block bg-emerald-600 text-white text-xs font-medium px-2 py-1 rounded">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

const PortfolioPage: React.FC = () => {
  const projects = [
    {
      title: "Ato Energia Website",
      description: "Site institucional da Ato Energia com informações sobre serviços, projetos e contato.",
      image: "https://res.cloudinary.com/duzbjndww/image/upload/v1746997704/websiteatoenergia_kvcqjc.png",
      category: "Web",
      technologies: [
        "React", 
        "TypeScript", 
        "Vite", 
        "Tailwind CSS", 
        "React Router",
      ],
      url: "https://atoenergia.netlify.app/"
    }
  ];

  const categories = [
    {
      icon: <Globe size={24} className="text-emerald-600" />, name: "Web", description: "Aplicações e sistemas web"
    },
    {
      icon: <Smartphone size={24} className="text-emerald-600" />, name: "Mobile", description: "Apps para iOS e Android"
    },
    {
      icon: <Monitor size={24} className="text-emerald-600" />, name: "Manutenção", description: "Suporte e manutenção"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-to-r from-emerald-900 to-emerald-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Nosso <span className="text-[#88c443]">Portfólio</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 animate-fade-in-delay">
              Conheça alguns dos projetos que desenvolvemos e as soluções que entregamos para nossos clientes
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Áreas de Atuação"
            subtitle="Desenvolvemos soluções para diferentes necessidades"
            alignment="center"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md border border-gray-200 transition-all hover:shadow-lg hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-block p-3 bg-emerald-100 rounded-lg mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Projetos em Destaque"
            subtitle="Conheça alguns dos nossos casos de sucesso"
            alignment="center"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900 to-emerald-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para começar seu projeto?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Entre em contato conosco para discutir como podemos ajudar a transformar suas ideias em realidade.
            </p>
            <a
              href="/contato"
              className="inline-block px-8 py-3 bg-white text-emerald-800 font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              Fale com nossa equipe
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
