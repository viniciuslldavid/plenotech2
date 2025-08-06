import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Banknote, Smartphone, PiggyBank, Clock, Shield } from 'lucide-react';

const PaymentCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  highlight?: boolean;
}> = ({ icon, title, description, delay, highlight }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className={`group relative p-6 rounded-3xl overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-transform ${
        highlight ? 'bg-gradient-to-br from-[#88c443]/10 to-gray-800 border-2 border-[#88c443]/30' : 'bg-gray-800'
      }`}
    >
      {highlight && (
        <div className="absolute top-4 right-4 bg-[#88c443] text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
          Recomendado
        </div>
      )}
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#88c443]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10 text-center">
        <div className="mb-4 p-3 bg-[#88c443]/20 rounded-2xl inline-block">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-white leading-relaxed">
          {title}
        </h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      
      <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-[#88c443]/20 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform" />
    </motion.div>
  );
};

const BenefitCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="flex items-start space-x-4 p-6 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-colors"
    >
      <div className="p-3 bg-[#88c443]/20 rounded-xl text-[#88c443] flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

const PaymentMethodsSection: React.FC = () => {
  const paymentMethods = [
    {
      icon: <Banknote className="w-6 h-6 text-[#88c443]" />,
      title: 'Dinheiro',
      description: 'Pagamento à vista com desconto especial',
      highlight: true,
    },
    {
      icon: <CreditCard className="w-6 h-6 text-[#88c443]" />,
      title: 'Cartão de Crédito',
      description: 'Parcelamos em até 12x',
    },
    {
      icon: <CreditCard className="w-6 h-6 text-[#88c443]" />,
      title: 'Cartão de Débito',
      description: 'Débito à vista com segurança',
    },
    {
      icon: <Smartphone className="w-6 h-6 text-[#88c443]" />,
      title: 'PIX',
      description: 'Transferência instantânea e segura',
    },
    {
      icon: <Banknote className="w-6 h-6 text-[#88c443]" />,
      title: 'Transferência',
      description: 'TED ou DOC bancário',
    },
    {
      icon: <PiggyBank className="w-6 h-6 text-[#88c443]" />,
      title: 'Parcelamento',
      description: 'Condições especiais para orçamentos maiores',
    },
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Pagamento Seguro',
      description: 'Todas as transações são processadas com máxima segurança e proteção de dados',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Parcelamento Flexível',
      description: 'Oferecemos condições de pagamento que cabem no seu orçamento',
    },
    {
      icon: <Banknote className="w-6 h-6" />,
      title: 'Desconto à Vista',
      description: 'Ganhe desconto especial pagando à vista em dinheiro ou PIX',
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Título Principal */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 leading-relaxed"
            style={{ color: '#88c443' }}
          >
            Formas de Pagamento
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Oferecemos diversas opções de pagamento para facilitar o acesso aos nossos serviços técnicos
          </p>
        </motion.div>

        {/* Grid de Formas de Pagamento */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {paymentMethods.map((method, index) => (
            <PaymentCard
              key={index}
              icon={method.icon}
              title={method.title}
              description={method.description}
              delay={index * 0.1}
              highlight={method.highlight}
            />
          ))}
        </div>

        {/* Seção de Benefícios */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Vantagens do Nosso Sistema de Pagamento
          </h3>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Priorizamos a transparência e flexibilidade para que você tenha a melhor experiência
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Informações Importantes */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gray-800 p-8 rounded-3xl border border-[#88c443]/20"
        >
          <h4 className="text-2xl font-bold text-[#88c443] mb-6 text-center">
            Informações Importantes
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
            <div>
              <h5 className="font-semibold text-white mb-2">💳 Parcelamento</h5>
              <p className="text-sm">
                Cartões de crédito: até 12x para serviços acima de R$ 300,00
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-2">💰 Desconto à Vista</h5>
              <p className="text-sm">
                5% de desconto para pagamentos em dinheiro ou PIX
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-2">🔒 Segurança</h5>
              <p className="text-sm">
                Todas as transações são processadas de forma segura e criptografada
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-2">📋 Orçamento</h5>
              <p className="text-sm">
                Diagnóstico sempre gratuito - você só paga se aprovar o orçamento
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/553497076805?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20formas%20de%20pagamento%20e%20solicitar%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#88c443] to-[#76ad3a] text-white font-medium rounded-full hover:from-[#76ad3a] hover:to-[#88c443] transition-all shadow-lg hover:shadow-xl"
          >
            Solicitar Orçamento Agora
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentMethodsSection;