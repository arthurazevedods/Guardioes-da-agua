import { useState } from 'react';
import { MailIcon } from 'lucide-react';
export function Newsletter() {
  const [showMessage, setShowMessage] = useState(false);

  const handleButtonClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000); // Remove a mensagem após 3 segundos
  };

  return <section className="py-12 mb-12 border-t border-b border-gray-100">
      <div className="text-center max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-3">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Inscreva-se na nossa newsletter
          </h2>
          <button className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 font-normal shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 text-sm">
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
        
        
        
        <p className="text-gray-600 mb-8">
          Receba atualizações sobre novos artigos, episódios de podcast e ações
          de conservação dos oceanos diretamente no seu email.
        </p>
        <form className="flex flex-col sm:flex-row gap-2 justify-center">
          <div className="flex-grow max-w-md">
            <div className="relative">
              <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input type="email" placeholder="Seu endereço de email" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" required />
            </div>
          </div>
          <button 
            type="button" 
            onClick={handleButtonClick}
            className="bg-gray-400 hover:bg-gray-500 transition text-white font-medium py-3 px-6 rounded-lg cursor-pointer"
          >
            Inscrever-se
          </button>
          
          
        </form>
        {/* Mensagem que aparece quando clicado */}
        {showMessage && (
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-800 text-sm">
                📧 A newsletter ainda não está em funcionamento. Em breve você poderá se inscrever para receber nossas atualizações!
              </p>
            </div>
          )}
      </div>
    </section>;
}