import React from 'react';
import { motion } from 'framer-motion';
import { Home, Store, Phone, CheckCircle } from 'lucide-react';

const StepCard: React.FC<{
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
      className="group relative bg-gray-800 p-8 rounded-3xl overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-transform"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#88c443]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10 text-center">
        <div className="mb-6 p-4 bg-[#88c443]/20 rounded-2xl inline-block">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white leading-relaxed">
          {title}
        </h3>
        <p className="text-gray-400">{description}</p>
      </div>
      
      <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-[#88c443]/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform" />
    </motion.div>
  );
};

const ServiceTypeCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  delay: number;
  highlight?: boolean;
}> = ({ icon, title, description, features, delay, highlight }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className={`group relative p-8 rounded-3xl overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-transform ${
        highlight ? 'bg-gradient-to-br from-[#88c443]/10 to-gray-800 border-2 border-[#88c443]/30' : 'bg-gray-800'
      }`}
    >
      {highlight && (
        <div className="absolute top-4 right-4 bg-[#88c443] text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
          Mais Popular
        </div>
      )}
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#88c443]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10">
        <div className="mb-6 p-4 bg-[#88c443]/20 rounded-2xl inline-block">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white leading-relaxed">
          {title}
        </h3>
        <p className="text-gray-400 mb-6">{description}</p>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-300">
              <CheckCircle className="w-5 h-5 text-[#88c443] mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-[#88c443]/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform" />
    </motion.div>
  );
};

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: <Phone className="w-8 h-8 text-[#88c443]" />,
      title: 'Entre em Contato',
      description: 'Ligue ou mande mensagem pelo WhatsApp para solicitar o diagnóstico gratuito',
    },
    {
      icon: <Home className="w-8 h-8 text-[#88c443]" />,
      title: 'Escolha o Atendimento',
      description: 'Decidimos juntos se o atendimento será em domicílio ou na nossa loja',
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-[#88c443]" />,
      title: 'Solução Rápida',
      description: 'Realizamos o diagnóstico e apresentamos a melhor solução para seu equipamento',
    },
  ];

  const serviceTypes = [
    {
      icon: <Home className="w-8 h-8 text-[#88c443]" />,
      title: 'Atendimento Domiciliar',
      description: 'Vamos até você para maior comodidade e praticidade',
      features: [
        'Diagnóstico gratuito na sua casa',
        'Não precisa deslocar o equipamento',
        'Atendimento personalizado',
        'Horário flexível',
        'Ideal para PCs desktop e problemas de rede'
      ],
      highlight: true,
    },
    {
      icon: <Store className="w-8 h-8 text-[#88c443]" />,
      title: 'Atendimento na Loja',
      description: 'Traga seu equipamento para nossa loja especializada',
      features: [
        'Laboratório técnico completo',
        'Ferramentas especializadas',
        'Peças de reposição em estoque',
        'Ambiente controlado',
        'Ideal para notebooks e reparos complexos'
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Título Principal */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 leading-relaxed"
            style={{ color: '#88c443' }}
          >
            Como Funciona Nosso Atendimento
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Processo simples e transparente para resolver os problemas do seu equipamento com máxima comodidade
          </p>
        </motion.div>

        {/* Processo em 3 Passos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Tipos de Atendimento */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Escolha o Tipo de Atendimento
          </h3>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Oferecemos duas modalidades de atendimento para melhor atender suas necessidades
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {serviceTypes.map((service, index) => (
            <ServiceTypeCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              delay={index * 0.2}
              highlight={service.highlight}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="https://wa.me/553497076805?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20diagn%C3%B3stico%20gratuito%20para%20meu%20equipamento.%20Quando%20podemos%20agendar?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#88c443] to-[#76ad3a] text-white font-medium rounded-full hover:from-[#76ad3a] hover:to-[#88c443] transition-all shadow-lg hover:shadow-xl"
          >
            Solicitar Diagnóstico Gratuito
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;