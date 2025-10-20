import { useState } from 'react';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { MailIcon, MapPinIcon, InstagramIcon, YoutubeIcon } from 'lucide-react';

export function Contato(): JSX.Element {
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000); // Remove a mensagem após 3 segundos
  };
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center py-16 bg-gradient-to-r from-aqua/10 to-white rounded-xl mb-12">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quer saber mais sobre nossos projetos? Tem uma ideia para colaborar? 
            Estamos sempre abertos para conversar sobre conservação da água e meio ambiente.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Informações de Contato</h2>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MailIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                    <a 
                      href="mailto:guardioesdaagua0@gmail.com" 
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      guardioesdaagua0@gmail.com
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      Respondemos em até 24 horas
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <InstagramIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Instagram</h3>
                    <a 
                      href="https://www.instagram.com/guardioes.da.agua0/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      @guardioes.da.agua0
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      Acompanhe nossas atividades e projetos
                    </p>
                  </div>
                </div>

                {/* YouTube */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <YoutubeIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">YouTube</h3>
                    <a 
                      href="https://www.youtube.com/@guardioesdaagua0" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      Guardiões da Água
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      Documentários e vídeos educativos
                    </p>
                  </div>
                </div>

                {/* Localização */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPinIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Localização</h3>
                    <p className="text-gray-700">
                      São Luís, Maranhão<br />
                      IEMA - Unidade Rio Anil
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      Instituto de Educação, Ciência e Tecnologia do Maranhão
                    </p>
                  </div>
                </div>
              </div>
            </div>

            
          </div>

          {/* Formulário de Contato */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Envie uma Mensagem</h2>
                <button className="inline-flex items-center px-4 py-2 mb-6 bg-primary text-white rounded-md hover:bg-primary/90 font-normal shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 text-sm">
                    <svg 
                    className="w-4 h-4 mr-1.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                    </svg>
                    Em breve
                </button>    
            </div>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-2">
                  Assunto *
                </label>
                <select
                  id="assunto"
                  name="assunto"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="colaboracao">Colaboração/Parceria</option>
                  <option value="duvida">Dúvida sobre projetos</option>
                  <option value="sugestao">Sugestão</option>
                  <option value="imprensa">Imprensa</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Conte-nos como podemos ajudar..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-400 text-white font-medium py-3 px-6 rounded-lg hover:bg-gray-500 transition duration-300 shadow-md hover:shadow-lg"
              >
                Enviar Mensagem
              </button>
            </form>

            
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800 text-sm">
                📧 O formulário de contato ainda não está em funcionamento. Em breve você poderá enviar mensagens diretamente através do site!
            </p>
            </div>
            

            <p className="text-sm text-gray-600 mt-4 text-center">
              * Campos obrigatórios. Responderemos em até 24 horas.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Perguntas Frequentes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Como posso participar dos projetos?
              </h3>
              <p className="text-gray-600">
                Entre em contato conosco através do formulário ou email. Estamos sempre 
                abertos para novas colaborações e parcerias.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Os projetos são abertos ao público?
              </h3>
              <p className="text-gray-600">
                Sim! Nossos projetos têm caráter educativo e comunitário. 
                Visite nossa página "Sobre Nós" para conhecer melhor nossa missão.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Como acompanhar as atividades?
              </h3>
              <p className="text-gray-600">
                Siga-nos no Instagram, YouTube e assine nossa Newsletter para ficar por dentro de todas as 
                nossas atividades e novidades.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Vocês oferecem palestras ou workshops?
              </h3>
              <p className="text-gray-600">
                Não! Mas estamos sempre abertos a novas ideias e colaborações. Entre em contato para conversar sobre isso.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
