import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import SobrePage from './pages/SobrePage';
import WebPage from './pages/WebPage';
import MobilePage from './pages/MobilePage';
import ManutencaoPage from './pages/ManutencaoPage';
import PortfolioPage from './pages/PortfolioPage';
import ContatoPage from './pages/ContatoPage';
import ScrollToTop from './components/layout/ScrollToTop';

/**
 * Componente principal da aplicação. Inclui Header, Footer, rotas e scroll-to-top.
 */
function App(): JSX.Element {
  return (
    <Router>
      {/* Dispara scroll para topo a cada mudança de rota */}
      <ScrollToTop />

      <div className="flex flex-col min-h-screen">
        {/* Cabeçalho fixo */}
        <Header />

        {/* Conteúdo principal que expande */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/web" element={<WebPage />} />
            <Route path="/mobile" element={<MobilePage />} />
            <Route path="/manutencao" element={<ManutencaoPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contato" element={<ContatoPage />} />
          </Routes>
        </main>

        {/* Rodapé fixo */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;