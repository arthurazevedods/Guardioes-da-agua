import React from 'react';

interface ComingSoonProps {
  category?: string;
}

export function ComingSoon({ category }: ComingSoonProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="text-center max-w-md">
        {/* Ícone de relógio */}
        <div className="mb-6">
          <svg 
            className="w-16 h-16 mx-auto text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
        </div>
        
        {/* Título */}
        <h3 className="text-2xl font-bold text-gray-700 mb-3">
          Em breve
        </h3>
        
        {/* Descrição */}
        <p className="text-gray-500 mb-6 leading-relaxed">
          {category 
            ? `Estamos preparando conteúdo incrível sobre ${category.toLowerCase()}. Em breve você encontrará artigos, pesquisas e histórias inspiradoras aqui.`
            : 'Estamos preparando conteúdo incrível para você. Em breve você encontrará artigos, pesquisas e histórias inspiradoras aqui.'
          }
        </p>
        
       
      </div>
    </div>
  );
}
