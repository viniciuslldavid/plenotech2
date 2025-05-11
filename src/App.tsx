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

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;