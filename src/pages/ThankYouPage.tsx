import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Phone, MessageCircle, ArrowLeft, Star, Shield, Headphones } from 'lucide-react';

const ThankYouPage: React.FC = () => {
  const [timeRemaining, setTimeRemaining] = useState(24 * 60 * 60); // 24 horas em segundos

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Resposta Rápida',
      description: 'Nossa equipe entrará em contato em até 2 horas durante horário comercial'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Diagnóstico Gratuito',
      description: 'Avaliação completa sem custo - você só paga se aprovar o orçamento'
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: 'Suporte Especializado',
      description: 'Técnicos certificados com mais de 10 anos de experiência'
    }
  ];

  const nextSteps = [
    {
      step: '1',
      title: 'Análise do Problema',
      description: 'Nossa equipe analisará as informações fornecidas no formulário',
      time: 'Próximas 2 horas'
    },
    {
      step: '2',
      title: 'Contato Inicial',
      description: 'Entraremos em contato via WhatsApp ou telefone para agendar',
      time: 'Hoje'
    },
    {
      step: '3',
      title: 'Diagnóstico Técnico',
      description: 'Realizaremos o diagnóstico gratuito no local ou em nossa loja',
      time: 'Amanhã'
    },
    {
      step: '4',
      title: 'Solução Personalizada',
      description: 'Apresentaremos a melhor solução com orçamento transparente',
      time: 'Após diagnóstico'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        {/* Header de Sucesso */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <CheckCircle className="w-24 h-24 text-[#88c443] mx-auto" />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -top-2 -right-2 w-8 h-8 bg-[#88c443] rounded-full flex items-center justify-center"
              >
                <Star className="w-4 h-4 text-gray-900 fill-current" />
              </motion.div>
            </div>
          </motion.div>
          
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6 leading-relaxed"
            style={{ color: '#88c443' }}
          >
            Formulário Enviado com Sucesso!
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Obrigado por confiar na PlenoTech! Sua solicitação foi recebida e nossa equipe técnica 
            especializada já está analisando seu caso.
          </p>
        </motion.div>

        {/* Contador de Tempo */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-gradient-to-r from-[#88c443]/10 to-gray-800 p-8 rounded-3xl border border-[#88c443]/20 text-center mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Tempo Estimado para Primeiro Contato
          </h2>
          <div className="text-4xl md:text-6xl font-mono text-[#88c443] mb-4">
            {formatTime(timeRemaining)}
          </div>
          <p className="text-gray-400">
            Nossa equipe trabalha para responder todas as solicitações em até 24 horas
          </p>
        </motion.div>

        {/* Benefícios */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            O Que Você Pode Esperar
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.8 }}
                className="bg-gray-800 p-6 rounded-2xl text-center hover:bg-gray-700 transition-colors"
              >
                <div className="p-4 bg-[#88c443]/20 rounded-xl text-[#88c443] inline-block mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Próximos Passos */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Próximos Passos
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {nextSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2 + index * 0.2, duration: 0.8 }}
                className="flex items-start space-x-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#88c443] rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1 bg-gray-800 p-6 rounded-2xl">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    <span className="text-[#88c443] font-medium text-sm">{step.time}</span>
                  </div>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Informações de Contato de Emergência */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="bg-gray-800 p-8 rounded-3xl text-center mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Precisa de Atendimento Urgente?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Se o seu problema é crítico e precisa de atenção imediata, 
            entre em contato diretamente conosco pelos canais abaixo:
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/553497076805?text=Ol%C3%A1!%20Acabei%20de%20preencher%20o%20formul%C3%A1rio%20no%20site%20e%20preciso%20de%20atendimento%20urgente."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#88c443] to-[#76ad3a] text-white font-medium rounded-full hover:from-[#76ad3a] hover:to-[#88c443] transition-all shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp Urgente
            </a>
            <a
              href="tel:+553497076805"
              className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-[#88c443] text-[#88c443] font-medium rounded-full hover:bg-[#88c443] hover:text-gray-900 transition-all"
            >
              <Phone className="mr-2 w-5 h-5" />
              Ligar Agora
            </a>
          </div>
        </motion.div>

        {/* Botão de Voltar */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="text-center"
        >
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-gray-600 text-gray-300 font-medium rounded-full hover:border-[#88c443] hover:text-[#88c443] transition-all"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Voltar ao Site
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYouPage;