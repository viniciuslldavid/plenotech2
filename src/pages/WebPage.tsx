import React from 'react';
import SectionHeading from '../components/common/SectionHeading';
import { Code, Layout, Smartphone, Globe } from 'lucide-react';

const WebPage: React.FC = () => {
  const services = [
    {
      icon: <Layout size={32} className="text-emerald-600" />,
      title: "Sites Responsivos",
      description: "Desenvolvimento de sites adaptáveis a qualquer dispositivo, garantindo a melhor experiência para seus usuários."
    },
    {
      icon: <Code size={32} className="text-emerald-600" />,
      title: "Sistemas Web",
      description: "Criação de sistemas web personalizados para automatizar e otimizar os processos do seu negócio."
    },
  ];

  return (
    <div>
      <section className="relative pt-40 pb-20 bg-gradient-to-r from-emerald-900 to-emerald-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Desenvolvimento <span className="text-[#88c443]">Web</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 animate-fade-in-delay">
              Soluções web modernas e personalizadas para impulsionar seu negócio no mundo digital
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Nossos Serviços Web"
            subtitle="Desenvolvemos soluções web completas e personalizadas"
            alignment="center"
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-block p-3 bg-emerald-100 rounded-lg mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Por que escolher nossos serviços web?"
                subtitle="Desenvolvemos soluções que transformam sua presença digital"
                alignment="left"
              />
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <span className="inline-block p-1 bg-emerald-100 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-600">Sites otimizados para mecanismos de busca (SEO)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block p-1 bg-emerald-100 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-600">Design responsivo e adaptável a todos os dispositivos</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block p-1 bg-emerald-100 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-600">Performance otimizada e carregamento rápido</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block p-1 bg-emerald-100 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-600">Integração com sistemas e APIs existentes</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-emerald-100 rounded-3xl"></div>
              <img
                src="https://res.cloudinary.com/duzbjndww/image/upload/v1747000180/design-responsivo_ih8ve0.png"
                alt="Desenvolvimento Web"
                className="rounded-lg shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebPage;