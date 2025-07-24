import React from 'react';
import { Globe, Smartphone, Server, Database, LineChart, Shield, Code, Cpu } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';

interface ServiceCardProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, icon, title, description, features }) => {
  return (
    <div id={id} className="bg-white rounded-lg shadow-lg p-8 scroll-mt-24 transition-all duration-300 hover:shadow-xl">
      <div className="inline-block p-4 bg-primary-100 text-primary-600 rounded-lg mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <h4 className="text-lg font-medium mb-3">Recursos e benefícios:</h4>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary-600 mr-2">•</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      
      <a 
        href="/contato" 
        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
      >
        Solicitar proposta
        <svg 
          className="ml-2 w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>
    </div>
  );
};

const ServicosPage: React.FC = () => {
  const services = [
    {
      id: "web",
      icon: <Globe size={32} />,
      title: "Desenvolvimento Web",
      description: "Criamos sites e aplicações web responsivas, modernas e otimizadas para conversão, adaptadas às necessidades específicas do seu negócio.",
      features: [
        "Sites institucionais e landing pages de alta conversão",
        "Sistemas web complexos e aplicações SaaS",
        "E-commerces completos com integração de pagamentos",
        "Portais corporativos e intranets",
        "Desenvolvimento frontend e backend com as tecnologias mais modernas"
      ]
    },
    {
      id: "mobile",
      icon: <Smartphone size={32} />,
      title: "Aplicativos Móveis",
      description: "Desenvolvemos apps nativos e multiplataforma para iOS e Android com foco em usabilidade e experiência do usuário.",
      features: [
        "Aplicativos nativos para iOS (Swift) e Android (Kotlin)",
        "Soluções multiplataforma com React Native e Flutter",
        "Design de interface alinhado às diretrizes atuais de UX/UI",
        "Integrações com APIs e serviços externos",
        "Publicação nas lojas e manutenção contínua"
      ]
    },
    {
      id: "cloud",
      icon: <Server size={32} />,
      title: "Cloud Computing",
      description: "Oferecemos soluções em nuvem para escalabilidade, flexibilidade e redução de custos de infraestrutura para seu negócio.",
      features: [
        "Migração para ambientes cloud (AWS, Azure, Google Cloud)",
        "Implementação de arquiteturas serverless",
        "Containers e orquestração com Docker e Kubernetes",
        "Otimização de custos e performance de infraestrutura",
        "Arquiteturas resilientes e de alta disponibilidade"
      ]
    },
    {
      id: "database",
      icon: <Database size={32} />,
      title: "Banco de Dados",
      description: "Projetamos e otimizamos estruturas de banco de dados para alto desempenho, segurança e integridade dos seus dados.",
      features: [
        "Modelagem de dados para bancos relacionais e NoSQL",
        "Otimização de consultas e performance",
        "Estratégias de backup e recuperação de desastres",
        "Migração e sincronização entre diferentes sistemas",
        "Implementação de políticas de segurança e conformidade"
      ]
    },
    {
      id: "bi",
      icon: <LineChart size={32} />,
      title: "Business Intelligence",
      description: "Transformamos dados em insights acionáveis para tomada de decisões estratégicas, impulsionando os resultados do seu negócio.",
      features: [
        "Dashboards interativos e relatórios personalizados",
        "ETL e processamento de grandes volumes de dados",
        "Análises preditivas e descritivas",
        "Visualização de dados com ferramentas modernas",
        "Integração com múltiplas fontes de dados"
      ]
    },
    {
      id: "security",
      icon: <Shield size={32} />,
      title: "Cibersegurança",
      description: "Protegemos seus sistemas, dados e usuários contra ameaças digitais e vulnerabilidades, garantindo a continuidade do seu negócio.",
      features: [
        "Avaliação de vulnerabilidades e testes de penetração",
        "Implementação de políticas de segurança e compliance",
        "Proteção contra malware e ataques cibernéticos",
        "Treinamento de equipes para práticas seguras",
        "Monitoramento contínuo e resposta a incidentes"
      ]
    },
    {
      id: "consultoria",
      icon: <Code size={32} />,
      title: "Consultoria em TI",
      description: "Oferecemos consultoria especializada para ajudar sua empresa a tomar decisões estratégicas e otimizar processos de TI.",
      features: [
        "Análise e mapeamento de processos",
        "Recomendações para transformação digital",
        "Avaliação e seleção de tecnologias",
        "Planejamento estratégico de TI",
        "Otimização de custos e recursos tecnológicos"
      ]
    },
    {
      id: "ai",
      icon: <Cpu size={32} />,
      title: "Inteligência Artificial",
      description: "Desenvolvemos soluções de IA personalizadas para automatizar processos, gerar insights e criar vantagens competitivas.",
      features: [
        "Machine Learning e modelos preditivos",
        "Processamento de linguagem natural e chatbots",
        "Visão computacional e reconhecimento de imagens",
        "Automação de processos com IA",
        "Análise de sentimentos e tendências"
      ]
    }
  ];

  return (
    <div className="overflow-x-hidden"> {/* Adicionado overflow-x-hidden */}
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Nossos <span className="text-secondary-400">Serviços</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 animate-fade-in-delay">
              Soluções tecnológicas completas e personalizadas para impulsionar o crescimento do seu negócio
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Services Navigation */}
      <section className="py-8 bg-gray-100 sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="inline-block px-4 py-2 bg-white text-gray-800 rounded-full shadow-sm hover:bg-primary-50 hover:text-primary-700 transition-colors whitespace-nowrap"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Soluções Completas para seu Negócio"
            subtitle="Conheça nosso portfolio de serviços especializados em tecnologia e transformação digital"
            alignment="center"
          />
          
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"> {/* Ajuste para grid responsivo */}
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard
                  id={service.id}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Como Trabalhamos"
            subtitle="Nossa metodologia para entregar soluções de alta qualidade"
            alignment="center"
          />
          
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 md:left-1/2 top-0 h-full w-1 bg-primary-200 transform md:-translate-x-1/2"></div>
               {/* Processo dividido em etapas, pode ser ajustado conforme o design */}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para transformar sua empresa com tecnologia?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Entre em contato para uma consulta gratuita e descubra como podemos ajudar a impulsionar seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="/contato"
                className="inline-block px-8 py-3 bg-white text-primary-800 font-medium rounded-md hover:bg-gray-100 transition-colors"
              >
                Falar com um especialista
              </a>
              <a
                href="#web"
                className="inline-block px-8 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:bg-opacity-10 transition-colors"
              >
                Ver serviços novamente
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicosPage;
