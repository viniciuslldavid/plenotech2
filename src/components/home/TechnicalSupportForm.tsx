import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Wrench, Cpu, CheckCircle, ArrowRight, MessageCircle, ArrowLeft, Settings, Sparkles, User, Phone, Mail } from 'lucide-react';

interface FormData {
  problem: string;
  customProblem: string;
  additionalInfo: string;
  name: string;
  phone: string;
  email: string;
  currentStep: number;
}

const TechnicalSupportForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    problem: '',
    customProblem: '',
    additionalInfo: '',
    name: '',
    phone: '',
    email: '',
    currentStep: 1
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const problems = [
    { id: 'O computador está travando', label: 'O computador está travando', icon: <Monitor className="w-6 h-6" /> },
    { id: 'O computador não está ligando', label: 'O computador não está ligando', icon: <Cpu className="w-6 h-6" /> },
    { id: 'O computador está lento', label: 'O computador está lento', icon: <Wrench className="w-6 h-6" /> },
    { id: 'Montagem de computador', label: 'Montagem de computador', icon: <Settings className="w-6 h-6" /> },
    { id: 'Higienização do PC ou notebook', label: 'Higienização do PC ou notebook', icon: <Sparkles className="w-6 h-6" /> },
    { id: 'Outro problema (descreva abaixo)', label: 'Outro problema', icon: <MessageCircle className="w-6 h-6" /> }
  ];

  const handleProblemSelect = (problemId: string) => {
    setFormData(prev => ({
      ...prev,
      problem: problemId,
      currentStep: problemId === 'other' ? 2 : 3
    }));
  };

  const handleCustomProblemSubmit = () => {
    if (formData.customProblem.trim()) {
      setFormData(prev => ({ ...prev, currentStep: 3 }));
    }
  };

  const handleContactSubmit = async () => {
    if (formData.name.trim() && formData.phone.trim()) {
      // Enviar os dados para o backend
      const response = await fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.problem,
          message: formData.additionalInfo || formData.customProblem,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error('Erro ao enviar o formulário.');
      }
    }
  };

  const handleBack = () => {
    if (formData.currentStep === 2) {
      setFormData(prev => ({ ...prev, currentStep: 1, problem: '', customProblem: '' }));
    } else if (formData.currentStep === 3) {
      if (formData.problem === 'other') {
        setFormData(prev => ({ ...prev, currentStep: 2 }));
      } else {
        setFormData(prev => ({ ...prev, currentStep: 1, problem: '' }));
      }
    }
  };

  const handleReset = () => {
    setFormData({
      problem: '',
      customProblem: '',
      additionalInfo: '',
      name: '',
      phone: '',
      email: '',
      currentStep: 1
    });
    setIsSubmitted(false);
  };

  const getProblemLabel = () => {
    if (formData.problem === 'other') {
      return formData.customProblem;
    }
    return problems.find(p => p.id === formData.problem)?.label || '';
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 p-12 rounded-3xl text-center max-w-2xl mx-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <CheckCircle className="w-20 h-20 text-[#88c443] mx-auto" />
          </motion.div>
          
          <h2 className="text-3xl font-bold text-white mb-6">
            Formulário Enviado com Sucesso!
          </h2>
          
          <div className="bg-gray-700 p-6 rounded-2xl mb-8 text-left">
            <h3 className="text-xl font-semibold text-[#88c443] mb-4">Resumo:</h3>
            <p className="text-gray-300 mb-2">
              <strong>Problema identificado:</strong> {getProblemLabel()}
            </p>
            <p className="text-gray-300 mb-2">
              <strong>Nome:</strong> {formData.name}
            </p>
            <p className="text-gray-300 mb-2">
              <strong>Telefone:</strong> {formData.phone}
            </p>
            {formData.email && (
              <p className="text-gray-300 mb-2">
                <strong>Email:</strong> {formData.email}
              </p>
            )}
            {formData.additionalInfo && (
              <p className="text-gray-300">
                <strong>Informações adicionais:</strong> {formData.additionalInfo}
              </p>
            )}
          </div>
          
          <p className="text-gray-400 text-lg">
            Nossa equipe técnica entrará em contato em breve para oferecer a solução mais adequada para o seu caso.
          </p>
          
          <button
            onClick={handleReset}
            className="mt-8 px-6 py-3 bg-transparent border-2 border-gray-600 text-gray-300 rounded-full hover:border-[#88c443] hover:text-[#88c443] transition-colors"
          >
            Fazer Nova Solicitação
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 
            className="text-4xl md:text-5xl font-bold mb-6 leading-relaxed"
            style={{ color: '#88c443' }}
          >
            Suporte Técnico PlenoTech
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Olá, sou o assistente técnico da PlenoTech. Como posso ajudá-lo com o seu PC ou notebook hoje?
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Step 1: Problem Selection */}
          {formData.currentStep === 1 && (
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-8 text-center">
                Por favor, escolha uma das opções abaixo que melhor descreve o problema:
              </h2>
              

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {problems.map((problem, index) => (
                  <motion.button
                    key={problem.id}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onClick={() => handleProblemSelect(problem.id)}
                    className="group relative bg-gray-800 p-6 rounded-2xl overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-300 text-left"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#88c443]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative z-10 flex items-center space-x-4">
                      <div className="p-3 bg-[#88c443]/20 rounded-xl text-[#88c443]">
                        {problem.icon}
                      </div>
                      <span className="text-white font-medium">{problem.label}</span>
                    </div>
                    
                    <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-[#88c443]/20 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Custom Problem Description */}
          {formData.currentStep === 2 && (
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800 p-8 rounded-3xl"
            >
              <button
                onClick={handleBack}
                className="mb-6 flex items-center text-gray-400 hover:text-[#88c443] transition-colors"
              >
                <ArrowLeft className="mr-2 w-5 h-5" />
                Voltar
              </button>
              

              <h2 className="text-2xl font-bold text-white mb-6">
                Por favor, descreva o problema com o seu computador ou notebook:
              </h2>
              

              <textarea
                value={formData.customProblem}
                onChange={(e) => setFormData(prev => ({ ...prev, customProblem: e.target.value }))}
                placeholder="Descreva detalhadamente o problema que você está enfrentando..."
                className="w-full h-32 bg-gray-700 text-white p-4 rounded-xl border border-gray-600 focus:border-[#88c443] focus:outline-none resize-none"
              />
              

              <button
                onClick={handleCustomProblemSubmit}
                disabled={!formData.customProblem.trim()}
                className="mt-6 px-8 py-3 bg-gradient-to-r from-[#88c443] to-[#76ad3a] text-white font-medium rounded-full hover:from-[#76ad3a] hover:to-[#88c443] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                Continuar
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </motion.div>
          )}

          {/* Step 3: Contact Information */}
          {formData.currentStep === 3 && (
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800 p-8 rounded-3xl"
            >
              <div className="flex justify-start mb-6">
                <button
                  onClick={handleBack}
                  className="flex items-center text-gray-400 hover:text-[#88c443] transition-colors"
                >
                  <ArrowLeft className="mr-2 w-5 h-5" />
                  Voltar
                </button>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-8 text-center">
                Para finalizar, precisamos dos seus dados de contato:
              </h2>
              

              <div className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">
                    <User className="inline w-5 h-5 mr-2" />
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Digite seu nome completo"
                    className="w-full bg-gray-700 text-white p-4 rounded-xl border border-gray-600 focus:border-[#88c443] focus:outline-none"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">
                    <Phone className="inline w-5 h-5 mr-2" />
                    Telefone de contato *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="(00) 00000-0000"
                    className="w-full bg-gray-700 text-white p-4 rounded-xl border border-gray-600 focus:border-[#88c443] focus:outline-none"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">
                    <Mail className="inline w-5 h-5 mr-2" />
                    Email (opcional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="seu@email.com"
                    className="w-full bg-gray-700 text-white p-4 rounded-xl border border-gray-600 focus:border-[#88c443] focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">
                    Informações adicionais (opcional)
                  </label>
                  <textarea
                    value={formData.additionalInfo}
                    onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
                    placeholder="Descreva mais detalhes sobre o problema ou suas necessidades..."
                    className="w-full h-24 bg-gray-700 text-white p-4 rounded-xl border border-gray-600 focus:border-[#88c443] focus:outline-none resize-none"
                  />
                </div>
              </div>
              
              <button
                onClick={handleContactSubmit}
                disabled={!formData.name.trim() || !formData.phone.trim()}
                className="mt-8 px-8 py-4 bg-gradient-to-r from-[#88c443] to-[#76ad3a] text-white font-medium rounded-full hover:from-[#76ad3a] hover:to-[#88c443] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center mx-auto"
              >
                Enviar Formulário
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechnicalSupportForm;
