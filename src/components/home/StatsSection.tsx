import React from 'react';
import { Award, Briefcase, Users, Code } from 'lucide-react';
import StatsCard from '../common/StatsCard';

const StatsSection: React.FC = () => {
  const stats = [
    {
      value: "+200",
      label: "Projetos entregues",
      icon: <Briefcase size={24} className="text-primary-600" />
    },
    {
      value: "+50",
      label: "Clientes satisfeitos",
      icon: <Users size={24} className="text-primary-600" />
    },
    {
      value: "+15",
      label: "Anos de experiência",
      icon: <Award size={24} className="text-primary-600" />
    },
    {
      value: "+30",
      label: "Especialistas",
      icon: <Code size={24} className="text-primary-600" />
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos números</h2>
          <p className="text-primary-100 max-w-2xl mx-auto">
            Conheça os resultados do nosso trabalho ao longo dos anos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="animate-slide-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <StatsCard
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;