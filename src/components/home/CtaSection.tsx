import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">
            Pronto para transformar seu negócio com tecnologia?
          </h2>
          <p className="text-xl text-primary-100 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Vamos conversar sobre como podemos ajudar sua empresa a alcançar seus objetivos com soluções tecnológicas personalizadas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link to="/contato">
              <Button variant="primary" size="lg" className="bg-white text-primary-800 hover:bg-gray-100">
                Fale com um especialista
              </Button>
            </Link>
            <Link to="/servicos">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:bg-opacity-10">
                Conheça nossos serviços
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;