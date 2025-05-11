// src/components/ScrollToTop.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Componente auxiliar que faz o scroll da janela até o topo
 * toda vez que a rota (location) muda.
 */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll imeditamente para o topo da página
    window.scrollTo(0, 0);
  }, [pathname]); // executa sempre que a URL muda

  return null; // não renderiza nada visível
};

export default ScrollToTop;
