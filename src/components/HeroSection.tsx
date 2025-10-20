
export function HeroSection() {
  return <section className="py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Protegendo Nossos Oceanos,{' '}
            <span className="text-primary">Inspirando Mudanças</span>
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Heróis dedicados a proteção dos nossos rios e oceanos, lutando contra poluição 
            e preservando a vida aquática para as futuras gerações.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/artigos" className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition duration-300 inline-block">
              Explorar Artigos
            </a>
            <a href="/documentarios" className="px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/5 transition duration-300 inline-block">
              Assistir Documentário
            </a>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden">
          <img src="/praiacomlixos2.png" alt="Coletando lixo nas praias" className="w-full h-auto object-cover" />
        </div>
      </div>
    </section>;
}