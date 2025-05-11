import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';

const ContactInfoItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}> = ({ icon, title, content }) => {
  return (
    <div className="flex items-start p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="mr-4 p-3 bg-primary-100 text-primary-600 rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <div className="text-gray-600">{content}</div>
      </div>
    </div>
  );
};

const ContactForm: React.FC = () => {
  return (
    <form className="bg-white p-8 rounded-lg shadow-lg">
      <div className="mb-8">
        <SectionHeading
          title="Envie uma mensagem"
          subtitle="Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas"
          alignment="left"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nome completo *
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            placeholder="Seu nome"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-mail *
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            placeholder="exemplo@email.com"
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            placeholder="(00) 00000-0000"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Assunto *
          </label>
          <select
            id="subject"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            required
          >
            <option value="">Selecione um assunto</option>
            <option value="proposta">Solicitar proposta</option>
            <option value="duvida">Dúvidas sobre serviços</option>
            <option value="parceria">Proposta de parceria</option>
            <option value="outro">Outro assunto</option>
          </select>
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Mensagem *
        </label>
        <textarea
          id="message"
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
          placeholder="Como podemos ajudar?"
          required
        ></textarea>
      </div>
      
      <div className="flex items-center mb-6">
        <input
          type="checkbox"
          id="privacy"
          className="mr-2 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
          required
        />
        <label htmlFor="privacy" className="text-sm text-gray-600">
          Concordo com a <a href="#" className="text-primary-600 hover:underline">Política de Privacidade</a>
        </label>
      </div>
      
      <Button type="submit" variant="primary" size="lg" className="w-full">
        <Send size={18} className="mr-2" />
        Enviar mensagem
      </Button>
    </form>
  );
};

const ContatoPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Entre em <span className="text-secondary-400">Contato</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 animate-fade-in-delay">
              Estamos prontos para ajudar você a transformar seu negócio com soluções tecnológicas inovadoras
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <ContactInfoItem
              icon={<MapPin size={24} />}
              title="Endereço"
              content={
                <>
                  <p>Av. Paulista, 1000</p>
                  <p>Bela Vista, São Paulo - SP</p>
                  <p>CEP: 01310-100</p>
                </>
              }
            />
            
            <ContactInfoItem
              icon={<Phone size={24} />}
              title="Telefone"
              content={
                <>
                  <p>(11) 3000-1000</p>
                  <p>(11) 98765-4321</p>
                </>
              }
            />
            
            <ContactInfoItem
              icon={<Mail size={24} />}
              title="E-mail"
              content={
                <>
                  <p>contato@empresa.com</p>
                  <p>suporte@empresa.com</p>
                </>
              }
            />
            
            <ContactInfoItem
              icon={<Clock size={24} />}
              title="Horário de Atendimento"
              content={
                <>
                  <p>Segunda a Sexta</p>
                  <p>9h às 18h</p>
                </>
              }
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1">
              <ContactForm />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                <SectionHeading
                  title="Nossa Localização"
                  subtitle="Venha nos conhecer pessoalmente"
                  alignment="left"
                />
                
                <div className="mt-6 aspect-video rounded-lg overflow-hidden shadow-md">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0995376055273!2d-46.652455!3d-23.5646162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7f481fd9f%3A0x9982bfde4df54830!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1636129121333!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    title="Mapa da localização"
                  ></iframe>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Informações Adicionais</h3>
                  <p className="text-gray-600 mb-4">
                    Para informações sobre parcerias ou oportunidades de trabalho, entre em contato pelo e-mail: 
                    <a href="mailto:parcerias@empresa.com" className="text-primary-600 hover:underline ml-1">
                      parcerias@empresa.com
                    </a>
                  </p>
                  
                  <p className="text-gray-600">
                    Se preferir atendimento imediato, você também pode nos chamar pelo WhatsApp:
                  </p>
                  
                  <a 
                    href="https://wa.me/5511987654321" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Falar pelo WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Perguntas Frequentes"
            subtitle="Tire suas dúvidas mais comuns sobre nossos serviços"
            alignment="center"
          />
          
          <div className="mt-12 max-w-3xl mx-auto">
            {[
              {
                question: "Quanto tempo leva para desenvolver um projeto?",
                answer: "O prazo de entrega varia de acordo com a complexidade e escopo do projeto. Após a análise inicial, fornecemos um cronograma detalhado com os prazos para cada etapa do desenvolvimento."
              },
              {
                question: "Quais métodos de pagamento são aceitos?",
                answer: "Aceitamos pagamentos via boleto bancário, transferência PIX, cartão de crédito e, para projetos maiores, oferecemos planos de pagamento parcelados adaptados às necessidades do cliente."
              },
              {
                question: "Oferecem suporte após a entrega do projeto?",
                answer: "Sim, oferecemos diferentes planos de suporte e manutenção após a conclusão do projeto. Nosso objetivo é garantir que sua solução continue funcionando perfeitamente e possa evoluir conforme as necessidades do seu negócio."
              },
              {
                question: "Posso solicitar alterações durante o desenvolvimento?",
                answer: "Sim, trabalhamos com metodologias ágeis que permitem a adaptação às mudanças durante o projeto. Alterações dentro do escopo acordado são incorporadas naturalmente, enquanto mudanças significativas podem requerer ajustes no cronograma ou orçamento."
              },
              {
                question: "Vocês atendem empresas de qualquer segmento?",
                answer: "Sim, temos experiência em desenvolver soluções para diversos segmentos, como saúde, educação, comércio, finanças, indústria e muitos outros. Adaptamos nossas soluções às particularidades de cada setor."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="mb-6 bg-white rounded-lg shadow-md overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <h3 className="text-lg font-semibold">{item.question}</h3>
                    <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    {item.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContatoPage;