// src/pages/SobrePage.tsx
// Página “Sobre” da Pleno Tech, com seções: Hero, Nossa História, Missão/Visão/Valores, Trajetória, Equipe e CTA.

import React from 'react';
import { Award, Users, Target } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';

// Componente para cada item da linha do tempo
const TimelineItem: React.FC<{ year: string; title: string; description: string; isLeft?: boolean }> = ({ year, title, description, isLeft = true }) => (
  <div className={`flex ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} mb-8`}>
    <div className="hidden md:block md:w-1/2"></div>
    <div className="w-full md:w-1/2 relative">
      <div className="absolute top-0 left-0 md:left-1/2 w-px h-full bg-primary-200 transform -translate-x-1/2"></div>
      <div className="absolute top-0 left-0 md:left-1/2 w-5 h-5 rounded-full bg-primary-600 border-4 border-primary-100 transform -translate-x-1/2"></div>
      <div className={`ml-8 md:ml-0 ${isLeft ? 'md:mr-8' : 'md:ml-8'} p-6 bg-white rounded-lg shadow-md`}>
        <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 text-sm font-semibold rounded-full mb-2">
          {year}
        </span>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

// Componente de membro de equipe
const TeamMember: React.FC<{ name: string; role: string; bio: string; imageUrl: string }> = ({ name, role, bio, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
    <div className="h-64 overflow-hidden">
      <img src={imageUrl} alt={`Foto de ${name}`} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-emerald-600 font-medium mb-4">{role}</p>
      <p className="text-gray-600">{bio}</p>
    </div>
  </div>
);

const SobrePage: React.FC = () => {
  // Dados de Missão, Visão e Valores
  const values = [
    { icon: <Target size={24} className="text-emerald-600" />, title: 'Missão', description: 'Transformar ideias em soluções tecnológicas inovadoras que impulsionem o crescimento e a eficiência dos nossos clientes.' },
    { icon: <Award size={24} className="text-emerald-600" />, title: 'Visão', description: 'Ser reconhecida como referência em inovação tecnológica, oferecendo soluções que antecipam as necessidades do mercado.' },
    { icon: <Users size={24} className="text-emerald-600" />, title: 'Valores', description: 'Excelência, inovação, ética, compromisso com resultados e foco no cliente são os pilares que orientam nossas ações.' },
  ];

  // Dados da equipe fundadora
  const team = [
    { name: 'Vinícius David', role: 'CEO & Fundador', bio: 'Com vasta experiência em desenvolvimento web e liderança de equipes técnicas.', imageUrl: 'https://via.placeholder.com/400x400' },
    { name: 'Heitor Silva', role: 'CTO & Co-Fundador', bio: 'Especialista em arquitetura de software e soluções em nuvem.', imageUrl: 'https://via.placeholder.com/400x400' },
  ];

  return (
    <div>
      {/* Hero Section com fundo verde */}
      <section className="relative pt-40 pb-20 bg-gradient-to-r from-emerald-900 to-emerald-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6476806/pexels-photo-6476806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Sobre a <span className="text-[#88c443]">Pleno Tech</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 animate-fade-in-delay">
              Conheça nossa história, nossa equipe e os valores que nos guiam para oferecer as melhores soluções em tecnologia para nossos clientes.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading title="Nossa História" subtitle="Como nos tornamos referência em tecnologia" />
              <p className="mt-6 text-gray-600">A Pleno Tech foi fundada em 2025 em Uberlândia - MG, com o objetivo de oferecer desenvolvimento de sites, aplicativos e serviços de manutenção de computadores.</p>
              <p className="mt-4 text-gray-600">Desde então, nosso compromisso é entregar soluções de alta qualidade, sempre focados na excelência e na satisfação do cliente.</p>
              <p className="mt-4 text-gray-600">Tecnologia é nossa paixão — e estamos prontos para transformar suas ideias em realidade. Conte com a Pleno Tech!</p>
            </div>
            <div className="relative">
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-emerald-100 rounded-3xl"></div>
              <img src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Nossa História" className="rounded-lg shadow-xl relative z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading title="Missão, Visão e Valores" subtitle="Os princípios que norteiam nosso trabalho" alignment="center" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-1 animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="inline-block p-3 bg-emerald-100 rounded-full mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Trajetória */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading title="Nossa Trajetória" subtitle="Os marcos importantes na história da Pleno Tech" alignment="center" />
          <div className="mt-16 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary-200 transform -translate-x-1/2"></div>
            <TimelineItem year="2025" title="Fundação da Pleno Tech" description="Início das operações com foco em desenvolvimento web, aplicativos e serviços de manutenção em TI." isLeft={true} />
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading title="Nossa Equipe" subtitle="Conheça os profissionais por trás das nossas soluções" alignment="center" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <TeamMember {...member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900 to-emerald-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos trabalhar juntos?</h2>
            <p className="text-xl text-emerald-100 mb-8">Entre em contato conosco para discutir como podemos ajudar a impulsionar seu negócio com soluções tecnológicas inovadoras.</p>
            <a href="/contato" className="inline-block px-8 py-3 bg-white text-emerald-800 font-medium rounded-md hover:bg-gray-100 transition-colors">Fale com nossa equipe</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobrePage;
