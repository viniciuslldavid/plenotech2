import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, MonitorSmartphone, Globe } from 'lucide-react';

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  href: string;
}> = ({ icon, title, description, delay, href }) => {
  const handleClick = () => {
    window.location.href = href;
  };

  return (
    <motion.div
      onClick={handleClick}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="group relative bg-gray-900 p-8 rounded-3xl overflow-hidden cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-transform"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative z-10">
        <div className="mb-6 p-4 bg-primary-900/30 rounded-2xl inline-block">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white leading-relaxed">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>

        <span className="text-primary-400 font-semibold hover:underline">
          Ver serviço →
        </span>
      </div>

      <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-primary-500/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform" />
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Wrench className="w-8 h-8 text-primary-400" />,
      title: 'Manutenção de Computadores',
      description: 'Serviços técnicos de diagnóstico, reparo e otimização de computadores e notebooks.',
      href: '/manutencao',
    },
    {
      icon: <Globe className="w-8 h-8 text-primary-400" />,
      title: 'Desenvolvimento Web',
      description: 'Criação de sites modernos, responsivos e otimizados para SEO.',
      href: '/web',
    },
    {
      icon: <MonitorSmartphone className="w-8 h-8 text-primary-400" />,
      title: 'Desenvolvimento de Aplicativos',
      description: 'Apps personalizados para Android e iOS com foco em desempenho e usabilidade.',
      href: '/mobile',
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 w-full">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-relaxed" style={{ color: '#88c443' }}>
            Soluções em Tecnologia para o seu Negócio
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Oferecemos serviços profissionais em manutenção de computadores, desenvolvimento de sites e aplicativos, além de soluções digitais personalizadas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((item, index) => (
            <ServiceCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              delay={index * 0.2}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
