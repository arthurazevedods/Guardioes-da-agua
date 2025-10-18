export function PodcastSection() {
  return <section className="py-12 bg-gradient-to-r from-aqua/20 to-sand rounded-xl my-12 p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Podcast Ondas de Mudança
        </h2>
        <a href="#" className="text-primary font-medium hover:text-primary/90 flex items-center">
          Todos os episódios
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <div className="text-center max-w-md">
          {/* Ícone de podcast */}
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
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" 
              />
            </svg>
          </div>
          
          {/* Título */}
          <h3 className="text-2xl font-bold text-gray-700 mb-3">
            Em breve
          </h3>
          
          {/* Descrição */}
          <p className="text-gray-500 mb-6 leading-relaxed">
            Estamos preparando episódios incríveis do podcast "Ondas de Mudança" com conversas inspiradoras sobre conservação marinha, tecnologia sustentável e histórias de quem está fazendo a diferença pelos nossos oceanos.
          </p>
          
          {/* Botão de notificação */}
          <button className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium">
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 1 0-15 0v5h5l-5 5-5-5h5v-5a10 10 0 1 1 20 0v5z" 
              />
            </svg>
            Me notifique quando estiver pronto
          </button>
        </div>
      </div>
    </section>;
}