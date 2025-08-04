import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import logoImage from '../../assets/images/logop.png';

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null); // Referência para o canvas

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Define tamanho do canvas para preencher a tela
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Estrutura dos dados das partículas
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      dx: number;
      dy: number;
      color: string;
    }> = [];

    // Cores permitidas para as bolinhas
    const colors = ['#43c4c0', '#88c443', '#7f43c4'];

    // Criação inicial das partículas
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const animate = () => {
      requestAnimationFrame(animate);

      // Fundo semi-transparente para gerar efeito de rastro
      ctx.fillStyle = 'rgba(17, 24, 39, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Atualiza posição e desenha cada partícula
      particles.forEach(particle => {
        particle.x += particle.dx;
        particle.y += particle.dy;

        // Inverte direção se atingir a borda
        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
    };

    animate();

    // Atualiza tamanho do canvas ao redimensionar a janela
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-900 w-full overflow-x-hidden"> {/* Ajustei a classe */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      <div className="relative z-10 container mx-auto px-4 w-full">
        <div className="max-w-4xl mx-auto text-center w-full">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-2"
          >
            <img
              src={logoImage}
              alt="Descrição da imagem"
              className="mx-auto w-32 h-30 rounded-full object-cover"
            />
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold -mt-2 mb-6 text-transparent"
            style={{
              background: 'linear-gradient(to right, #88c443, #43c4c0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
              padding: '0 1rem',
              lineHeight: '1.2',
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Soluções Rápidas para Seu Equipamento
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12"
          >
            Oferecemos diagnóstico gratuito para identificar o problema do seu equipamento. Não deixe de aproveitar essa oportunidade de começar a solução sem compromisso.
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-6 justify-center"
          >
            <a
              href="https://wa.me/553497076805?text=Ol%C3%A1!%20Estou%20precisando%20de%20ajuda%20com%20meu%20computador/notebook.%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20diagn%C3%B3stico%20gratuito%20e%20como%20posso%20resolver%20o%20problema%20do%20meu%20equipamento.%20Agrade%C3%A7o%20desde%20j%C3%A1!"
              className="group relative px-8 py-4 bg-primary-600 text-white rounded-full overflow-hidden"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative z-10 flex items-center justify-center">
                Solicite Seu Orçamento Agora
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>

            <a
              href="/portfolio"
              className="group px-8 py-4 bg-transparent border-2 border-gray-500 text-gray-300 rounded-full hover:border-primary-500 hover:text-primary-500 transition-colors"
            >
              Ver Portfolio
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <div className="w-1 h-12 rounded-full bg-gradient-to-b from-primary-500 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;