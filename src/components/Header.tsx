import React from 'react';
export function Header() {
  return <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-gray-800">
              OceanGuardians
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-primary">
              Início
            </a>
            <a href="#" className="text-gray-600 hover:text-primary">
              Artigos
            </a>
            <a href="#" className="text-gray-600 hover:text-primary">
              Podcast
            </a>
            <a href="#" className="text-gray-600 hover:text-primary">
              Heróis
            </a>
            <a href="#" className="text-gray-600 hover:text-primary">
              Sobre
            </a>
            <a href="#" className="text-gray-600 hover:text-primary">
              Contato
            </a>
          </nav>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>;
}