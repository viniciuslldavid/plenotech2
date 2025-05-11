import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import Logo from '../common/Logo';

const Footer: React.FC = () => {
  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Gradient Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
      </div>

      {/* Newsletter Section */}
      <div className="relative border-b border-gray-800">
        <div className="container mx-auto px-4 py-16">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            {...fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-4">
              Fique por dentro das novidades
            </h2>
            <p className="text-gray-400 mb-8">
              Assine nossa newsletter e receba as últimas notícias sobre tecnologia e inovação
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-grow px-6 py-4 bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="group px-8 py-4 bg-primary-600 rounded-full hover:bg-primary-700 transition-colors flex items-center justify-center"
              >
                Assinar
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <motion.div {...fadeInUp}>
              <Logo isFooter={true} />
              <p className="mt-6 text-gray-400">
                Transformando ideias em soluções tecnológicas inovadoras para impulsionar seu negócio para o futuro.
              </p>
              <div className="mt-8 flex space-x-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h3 className="text-lg font-semibold mb-6">Navegação</h3>
              <ul className="space-y-4">
                {['Início', 'Sobre Nós', 'Serviços', 'Portfolio', 'Blog', 'Contato'].map((item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase().replace(' ', '-')}`}
                      className="text-gray-400 hover:text-primary-400 transition-colors flex items-center group"
                    >
                      <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <h3 className="text-lg font-semibold mb-6">Soluções</h3>
              <ul className="space-y-4">
                {[
                  'Desenvolvimento Web',
                  'Aplicativos Móveis',
                  'Inteligência Artificial',
                  'Cloud Computing',
                  'Blockchain',
                  'Cibersegurança'
                ].map((item) => (
                  <li key={item}>
                    <Link
                      to="/servicos"
                      className="text-gray-400 hover:text-primary-400 transition-colors flex items-center group"
                    >
                      <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
              <h3 className="text-lg font-semibold mb-6">Contato</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="mr-3 h-5 w-5 text-primary-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-400">
                    Av. Paulista, 1000<br />
                    São Paulo - SP, 01310-100
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-3 h-5 w-5 text-primary-400 flex-shrink-0" />
                  <a href="tel:+551130001000" className="text-gray-400 hover:text-primary-400 transition-colors">
                    (11) 3000-1000
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-3 h-5 w-5 text-primary-400 flex-shrink-0" />
                  <a href="mailto:contato@empresa.com" className="text-gray-400 hover:text-primary-400 transition-colors">
                    contato@empresa.com
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} EmpresaTech. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;