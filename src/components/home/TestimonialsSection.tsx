import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, User, MapPin } from 'lucide-react';

const TestimonialCard: React.FC<{
  name: string;
  location: string;
  rating: number;
  comment: string;
  service: string;
  delay: number;
  highlight?: boolean;
}> = ({ name, location, rating, comment, service, delay, highlight }) => {
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
          Destaque
        </div>
      )}
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#88c443]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10">
        {/* Quote Icon */}
        <Quote className="w-8 h-8 text-[#88c443] mb-4" />
        
        {/* Rating */}
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < rating ? 'text-[#88c443] fill-current' : 'text-gray-600'
              }`}
            />
          ))}
        </div>
        
        {/* Comment */}
        <p className="text-gray-300 mb-6 leading-relaxed text-lg">
          "{comment}"
        </p>
        
        {/* Service Tag */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-[#88c443]/20 text-[#88c443] rounded-full text-sm font-medium">
            {service}
          </span>
        </div>
        
        {/* Customer Info */}
        <div className="flex items-center">
          <div className="p-3 bg-[#88c443]/20 rounded-full mr-4">
            <User className="w-6 h-6 text-[#88c443]" />
          </div>
          <div>
            <h4 className="text-white font-semibold">{name}</h4>
            <div className="flex items-center text-gray-400 text-sm">
              <MapPin className="w-4 h-4 mr-1" />
              {location}
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-[#88c443]/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform" />
    </motion.div>
  );
};

const StatsCard: React.FC<{
  number: string;
  label: string;
  delay: number;
}> = ({ number, label, delay }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="text-center p-6 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-colors"
    >
      <div
        className="text-4xl md:text-5xl font-bold mb-2"
        style={{ color: '#88c443' }}
      >
        {number}
      </div>
      <p className="text-gray-400 font-medium">{label}</p>
    </motion.div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Elizer',
      location: 'Perdizes, MG',
      rating: 5,
      comment: 'Monteiro meu PC gamer com a PlenoTech e ficou show! A equipe ajudou na escolha dos componentes e a montagem ficou perfeita. O desempenho tá incrível, tudo roda tranquilo. Entrega no prazo e atendimento top. Super recomendo!',
      service: 'Montagem PC Gamer',
      highlight: true,
    },
    {
      name: 'Josef',
      location: 'Rio Pardo de Minas, MG',
      rating: 5,
      comment: 'Montaram meu PC do zero com as peças que eu escolhi. Explicaram tudo detalhadamente e o resultado ficou excelente. Preço muito competitivo!',
      service: 'Montagem PC Gamer',
    },
    {
      name: 'Yuri',
      location: 'Uberlândia, MG',
      rating: 5,
      comment: 'Excelente atendimento! Meu notebook estava muito lento e eles conseguiram deixar como novo. O técnico veio na minha casa e resolveu tudo no mesmo dia. Super recomendo!',
      service: 'Manutenção',
    },
    {
      name: 'João Pereira',
      location: 'Uberlândia, MG',
      rating: 5,
      comment: 'Serviço de higienização do meu notebook foi impecável. Estava fazendo muito barulho e esquentando demais. Agora está funcionando perfeitamente e muito mais silencioso.',
      service: 'Higienização',
    },
  ];

  const stats = [
    { number: '100+', label: 'Clientes Atendidos' },
    { number: '99%', label: 'Satisfação' },
    { number: '6h', label: 'Tempo Médio de Resposta' },
    { number: '5★', label: 'Avaliação Média' },
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
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A satisfação de nossos clientes é nossa maior recompensa. Veja alguns depoimentos de quem já confiou em nossos serviços.
          </p>
        </motion.div>

        {/* Estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              number={stat.number}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              location={testimonial.location}
              rating={testimonial.rating}
              comment={testimonial.comment}
              service={testimonial.service}
              delay={index * 0.1}
              highlight={testimonial.highlight}
            />
          ))}
        </div>

        {/* Seção de Convite para Avaliar */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#88c443]/10 to-gray-800 p-8 rounded-3xl border border-[#88c443]/20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Você também pode fazer parte dessa história!
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Junte-se aos nossos clientes satisfeitos e experimente nossos serviços técnicos de qualidade. 
            Diagnóstico gratuito e soluções personalizadas para suas necessidades.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/553497076805?text=Ol%C3%A1!%20Vi%20os%20depoimentos%20no%20site%20e%20gostaria%20de%20conhecer%20os%20servi%C3%A7os%20da%20PlenoTech."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#88c443] to-[#76ad3a] text-white font-medium rounded-full hover:from-[#76ad3a] hover:to-[#88c443] transition-all shadow-lg hover:shadow-xl"
            >
              Solicitar Atendimento
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;