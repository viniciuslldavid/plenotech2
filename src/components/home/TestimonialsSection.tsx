import React from 'react';
import SectionHeading from '../common/SectionHeading';
import TestimonialCard from '../common/TestimonialCard';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      content: "A parceria com a EmpresaTech foi transformadora para nosso negócio. Eles desenvolveram uma solução personalizada que aumentou nossa produtividade em 40%.",
      author: "Carlos Silva",
      role: "CEO",
      company: "TechnoSoft",
      rating: 5,
      imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      content: "Impressionante como eles entenderam nossas necessidades e entregaram um produto que superou nossas expectativas. O suporte pós-venda também é excelente.",
      author: "Mariana Santos",
      role: "Diretora de Marketing",
      company: "InnovateX",
      rating: 5,
      imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      content: "Desde que implementamos o sistema desenvolvido pela EmpresaTech, conseguimos reduzir custos e melhorar significativamente a experiência dos nossos clientes.",
      author: "Ricardo Oliveira",
      role: "CTO",
      company: "DataFlex",
      rating: 4,
      imageUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="O que nossos clientes dizem"
          subtitle="Veja como temos ajudado empresas a alcançar seus objetivos com soluções tecnológicas personalizadas"
          alignment="center"
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TestimonialCard
                content={testimonial.content}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                rating={testimonial.rating}
                imageUrl={testimonial.imageUrl}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="/contato"
            className="inline-block px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors"
          >
            Seja o próximo caso de sucesso
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;