import React from 'react';
import { CheckCircle, Award, Users, Lightbulb } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

const AboutSection: React.FC = () => {
  const values = [
    {
      icon: <CheckCircle size={24} className="text-primary-600" />,
      title: "Excelência",
      description: "Buscamos a excelência em cada projeto, utilizando as melhores práticas e tecnologias mais avançadas."
    },
    {
      icon: <Award size={24} className="text-primary-600" />,
      title: "Qualidade",
      description: "Garantimos produtos e serviços de alta qualidade que superam as expectativas dos nossos clientes."
    },
    {
      icon: <Users size={24} className="text-primary-600" />,
      title: "Colaboração",
      description: "Trabalhamos em estreita colaboração com nossos clientes, garantindo transparência em todo o processo."
    },
    {
      icon: <Lightbulb size={24} className="text-primary-600" />,
      title: "Inovação",
      description: "Estamos sempre buscando soluções inovadoras para resolver os desafios mais complexos."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up" data-aos="fade-right">
            <SectionHeading
              title="Quem Somos"
              subtitle="Somos uma empresa de tecnologia focada em transformar ideias em soluções digitais inovadoras."
              alignment="left"
            />
            
            <p className="mt-6 text-gray-600">
              Fundada em 2018, a EmpresaTech nasceu com a missão de ajudar empresas a aproveitarem todo o potencial da tecnologia. Nossa equipe é formada por profissionais apaixonados por inovação e com ampla experiência no desenvolvimento de soluções tecnológicas para diversos segmentos.
            </p>
            
            <p className="mt-4 text-gray-600">
              Trabalhamos com metodologias ágeis para entregar resultados rápidos e de alta qualidade, sempre alinhados às necessidades específicas de cada cliente. Acreditamos que a tecnologia deve ser uma aliada para impulsionar os negócios, e não um desafio adicional.
            </p>
            
            <div className="mt-8">
              <a href="/sobre" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors">
                Conheça mais sobre nossa história
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="relative" data-aos="fade-left">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary-100 rounded-3xl"></div>
            <img
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Equipe EmpresaTech"
              className="rounded-lg shadow-xl relative z-10 animate-fade-in"
            />
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="p-6 border border-gray-200 rounded-lg transition-all hover:shadow-md hover:border-primary-200 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;