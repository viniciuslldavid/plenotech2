import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard: React.FC<{
  title: string;
  category: string;
  image: string;
  delay: number;
}> = ({ title, category, image, delay }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="group relative overflow-hidden rounded-3xl cursor-pointer"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <p className="text-primary-400 font-medium mb-2">{category}</p>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Plataforma de IA Generativa",
      category: "Inteligência Artificial",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
    },
    {
      title: "App de Realidade Aumentada",
      category: "Mobile",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
    },
    {
      title: "Blockchain para Supply Chain",
      category: "Blockchain",
      image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg"
    },
    {
      title: "Sistema de IoT Industrial",
      category: "Internet das Coisas",
      image: "https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
            Projetos em Destaque
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Conheça algumas das nossas soluções inovadoras que estão transformando indústrias
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              image={project.image}
              delay={index * 0.2}
            />
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="/portfolio"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-full hover:from-primary-700 hover:to-primary-900 transition-colors"
          >
            Ver Todos os Projetos
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;