import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from '../common/Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Verificação inicial e listener de scroll
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { path: '/', label: 'Início' },
    { path: '/web', label: 'Desenvolvimento Web' },
    { path: '/mobile', label: 'Apps Móveis' },
    { path: '/manutencao', label: 'Manutenção de TI' },
    { path: '/sobre', label: 'Sobre Nós' },
    { path: '/portfolio', label: 'Portfolio' },
  ];

  // Agora o header só muda de transparente para opaco se isScrolled for true
  const headerClass = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled
      ? 'bg-white/80 backdrop-blur-lg shadow-lg py-4'
      : 'bg-transparent py-6'
  }`;

  return (
    <motion.header initial={false} animate={{ y: 0 }} className={headerClass}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Logo />

          {/* Navegação Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-2 px-4 rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary-600'
                    : 'text-gray-800 hover:text-primary-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contato"
              className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Fale Conosco
            </Link>
          </div>

          {/* Botão Menu Mobile (sempre visível em <lg) */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-primary-600 transition-colors"
            onClick={() => setIsMenuOpen(prev => !prev)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Navegação Mobile */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden mt-4"
            >
              <div className="bg-white rounded-lg shadow-lg p-4">
                {navLinks.map(link => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block py-2 text-gray-800 hover:text-primary-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/contato"
                  className="block mt-4 px-6 py-2 bg-primary-600 text-white text-center rounded-lg hover:bg-primary-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Fale Conosco
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
