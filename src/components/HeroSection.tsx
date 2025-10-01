import React from 'react';
export function HeroSection() {
  return <section className="py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Protegendo Nossos Oceanos,{' '}
            <span className="text-primary">Inspirando Mudanças</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Histórias inspiradoras de heróis anônimos e organizações que dedicam
            suas vidas à conservação dos ecossistemas aquáticos e preservação da
            biodiversidade marinha.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition duration-300">
              Explorar Artigos
            </button>
            <button className="px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/5 transition duration-300">
              Ouvir Podcast
            </button>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img src="/436e88c84684a4fbfab5c06df7618360.jpg" alt="Oceano cristalino com corais" className="w-full h-auto object-cover" />
        </div>
      </div>
    </section>;
}