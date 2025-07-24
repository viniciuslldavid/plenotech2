import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Mail, Phone, MapPin,
  Facebook, Instagram, Linkedin,
  ArrowRight
} from 'lucide-react';
import Logo from '../common/Logo';

const Footer: React.FC = () => {
  // Configuração para animações
  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Fundo com gradientes suaves */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
      </div>

      {/* Conteúdo do rodapé */}
      <div className="relative">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Coluna: Logo + redes sociais */}
            <motion.div {...fadeInUp}>
              <Logo />
              <p className="mt-6 text-gray-400">
                Transformando ideias em soluções tecnológicas inovadoras para impulsionar seu negócio para o futuro.
              </p>

              {/* Redes sociais */}
              <div className="mt-8 flex space-x-4">
                <a href="https://www.facebook.com/plenotech?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#88c443] transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://www.instagram.com/pleno.tech?igsh=ZmZjMjNzODJ1dmhs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#88c443] transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#88c443] transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </motion.div>

            {/* Coluna: Navegação */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h3 className="text-lg font-semibold mb-6">Navegação</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-[#88c443] transition-colors flex items-center group">
                    <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Início
                  </Link>
                </li>
                <li>
                  <Link to="/sobre" className="text-gray-400 hover:text-[#88c443] transition-colors flex items-center group">
                    <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="text-gray-400 hover:text-[#88c443] transition-colors flex items-center group">
                    <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/contato" className="text-gray-400 hover:text-[#88c443] transition-colors flex items-center group">
                    <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Contato
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Coluna: Soluções (permanece igual) */}
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <h3 className="text-lg font-semibold mb-6">Soluções</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/web" className="text-gray-400 hover:text-[#88c443] transition-colors flex items-center group">
                    <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Desenvolvimento Web
                  </Link>
                </li>
                <li>
                  <Link to="/mobile" className="text-gray-400 hover:text-[#88c443] transition-colors flex items-center group">
                    <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Desenvolvimento de Aplicativos
                  </Link>
                </li>
                <li>
                  <Link to="/manutencao" className="text-gray-400 hover:text-[#88c443] transition-colors flex items-center group">
                    <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Manutenção de Computadores
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Coluna: Contato (permanece igual) */}
            <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
              <h3 className="text-lg font-semibold mb-6">Contato</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="mr-3 h-5 w-5 text-[#88c443] flex-shrink-0 mt-1" />
                  <span className="text-gray-400">
                    R. Atílio Valentini, 396<br />
                    Uberlândia - MG, 38408-214
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-3 h-5 w-5 text-[#88c443] flex-shrink-0" />
                  <a href="tel:+55349707685" className="text-gray-400 hover:text-[#88c443] transition-colors">
                    (34) 9707-6805
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-3 h-5 w-5 text-[#88c443] flex-shrink-0" />
                  <a href="mailto:contato@plenotech.com" className="text-gray-400 hover:text-[#88c443] transition-colors">
                    contato@plenotech.com
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Barra inferior com direitos autorais */}
      <div className="relative border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} PlenoTech. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
