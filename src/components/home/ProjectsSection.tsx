import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard: React.FC<{
  title: string;
  category: string;
  image: string;
  delay: number;
  url?: string;
}> = ({ title, category, image, delay, url }) => {
  return (
    <motion.article
      initial={{ scale: 1.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      className="group relative overflow-hidden rounded-2xl shadow-lg bg-gray-800"
    >
      <a href={url} target="_blank" rel="noopener noreferrer" className="block h-full w-full">
        <div className="aspect-video overflow-hidden">
          <img
            src={`${image}?auto=compress&cs=tinysrgb&w=640`}
            alt={`Imagem do projeto: ${title}`}
            loading="lazy"
            width="640"
            height="360"
            className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-sm font-semibold mb-1" style={{ color: '#88c443' }}>
              {category}
            </p>
            <h3 className="text-xl font-bold text-white leading-tight">{title}</h3>
          </div>
        </div>
      </a>
    </motion.article>
  );
};

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'Web Site Ato Energia',
      category: 'Desenvolvimento Web',
      image: 'https://res.cloudinary.com/duzbjndww/image/upload/v1746997704/websiteatoenergia_kvcqjc.png',
      url: 'https://atoenergia.netlify.app/'
    }
  ];

  return (
    <section className="py-10 bg-gray-900" aria-labelledby="projects-heading">
      <div className="container mx-auto px-4 w-full">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 id="projects-heading" className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#88c443] to-secondary-400 bg-clip-text text-transparent">
            Projetos em Destaque
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Conheça algumas das nossas soluções inovadoras que estão transformando indústrias.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              category={project.category}
              image={project.image}
              delay={index * 0.15}
              url={project.url}
            />
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="/portfolio"
            className="inline-block px-6 py-3 bg-gradient-to-r from-[#88c443] to-primary-800 text-white font-medium rounded-full hover:from-[#76ad3a] hover:to-primary-900 transition"
          >
            Ver Todos os Projetos
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
