import React from 'react';
import { MailIcon } from 'lucide-react';
export function Newsletter() {
  return <section className="py-12 mb-12 border-t border-b border-gray-100">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Inscreva-se na nossa newsletter
        </h2>
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
          <button type="submit" className="bg-primary hover:bg-primary/90 transition text-white font-medium py-3 px-6 rounded-lg">
            Inscrever-se
          </button>
        </form>
      </div>
    </section>;
}