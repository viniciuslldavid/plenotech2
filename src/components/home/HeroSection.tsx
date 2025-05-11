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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Canvas para partículas animadas no fundo */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-2" // margem menor aqui
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
            className="text-5xl md:text-7xl font-bold -mt-2 mb-6 bg-clip-text text-transparent bg-[#88c443]"
          >
            Transformando o Futuro Digital
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12"
          >
            Criamos experiências digitais únicas que transcendem as expectativas
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-6 justify-center"
          >
            <a
              href="/contato"
              className="group relative px-8 py-4 bg-primary-600 text-white rounded-full overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                Iniciar Projeto
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </span>
              {/* Efeito de transição do botão */}
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

        {/* Indicador de scroll (bouncing line) */}
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
