import React from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">Guardiões da Água</span>
            </div>
            <p className="text-gray-400 mb-6">
              Inspirando e conectando pessoas para a conservação dos oceanos,
              mares e rios do nosso planeta.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/guardioes.da.agua0/" className="text-gray-400 hover:text-primary">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@guardioesdaagua0" className="text-gray-400 hover:text-primary">
                <YoutubeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">
                  Início
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">
                  Artigos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">
                  Podcast
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">
                  Heróis
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Categorias</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">
                  Conservação
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">
                  Heróis
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">
                  Iniciativas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">
                  Educação
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">
                  Pesquisa
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">
                  Voluntariado
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>https://www.instagram.com/guardioes.da.agua0/</li>
              <li>guardioesdaagua0@gmail.com</li>
              <li>Sao Luis, MA </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Guardiões da Água. Todos os direitos
            reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary text-sm">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-primary text-sm">
              Termos de Uso
            </a>
            <a href="#" className="text-gray-400 hover:text-primary text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>;
}