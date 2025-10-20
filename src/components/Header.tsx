import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="h-8 w-8 text-primary" />
            <div className="flex items-center">
              <img src="/logo.png" alt="Guardiões da Água" className="w-24 h-16 m-0"/>
              <span className="ml-2 text-3xl font-bold text-gray-800">
                Guardiões da água
              </span>
            </div>
          </div>
          
          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-600 hover:text-primary">
              Início
            </a>
            <a href="/artigos" className="text-gray-600 hover:text-primary">
              Artigos
            </a>
            <a href="/documentarios" className="text-gray-600 hover:text-primary">
              Documentários
            </a>
            <a href="/sobrenos" className="text-gray-600 hover:text-primary">
              Sobre
            </a>
            <a href="#" className="text-gray-600 hover:text-primary">
              Contato
            </a>
          </nav>
          
          {/* Botão Menu Mobile */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="/" 
                className="text-gray-600 hover:text-primary py-2 px-4 rounded-md hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a 
                href="/artigos" 
                className="text-gray-600 hover:text-primary py-2 px-4 rounded-md hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Artigos
              </a>
              <a 
                href="/documentario" 
                className="text-gray-600 hover:text-primary py-2 px-4 rounded-md hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Documentários
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-primary py-2 px-4 rounded-md hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-primary py-2 px-4 rounded-md hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>;
}