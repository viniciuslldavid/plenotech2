import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Globe, Lock } from 'lucide-react';

const InnovationCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="group relative bg-gray-900 p-8 rounded-3xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10">
        <div className="mb-6 p-4 bg-primary-900/30 rounded-2xl inline-block">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
      <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-primary-500/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform" />
    </motion.div>
  );
};

const InnovationSection: React.FC = () => {
  const innovations = [
    {
      icon: <Brain className="w-8 h-8 text-primary-400" />,
      title: "Inteligência Artificial",
      description: "Soluções avançadas de IA para automatizar e otimizar processos empresariais."
    },
    {
      icon: <Cpu className="w-8 h-8 text-primary-400" />,
      title: "Machine Learning",
      description: "Algoritmos inteligentes que aprendem e evoluem com seus dados."
    },
    {
      icon: <Globe className="w-8 h-8 text-primary-400" />,
      title: "Web 3.0",
      description: "Desenvolvimento de aplicações descentralizadas para a próxima geração da internet."
    },
    {
      icon: <Lock className="w-8 h-8 text-primary-400" />,
      title: "Blockchain",
      description: "Tecnologia segura e transparente para transações e contratos inteligentes."
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
            Inovação em Cada Pixel
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Exploramos as fronteiras da tecnologia para criar soluções que definem o futuro digital
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {innovations.map((item, index) => (
            <InnovationCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;