import React, { useState } from 'react';
import { ArticleCard } from './ArticleCard';
const categories = ['Todos', 'Conservação', 'Heróis', 'Iniciativas', 'Educação', 'Pesquisa'];
const articles = [{
  id: 1,
  title: 'Guardiões do Recife: A luta para salvar os corais brasileiros',
  excerpt: 'Conheça o trabalho dos pesquisadores que dedicam suas vidas à preservação dos recifes de coral na costa brasileira.',
  category: 'Heróis',
  imageUrl: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29yYWwlMjByZWVmfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  date: '12 Jun 2023',
  featured: true
}, {
  id: 2,
  title: 'Projeto Tamar: 40 anos de proteção às tartarugas marinhas',
  excerpt: 'Uma história de sucesso na conservação marinha que se tornou referência mundial.',
  category: 'Iniciativas',
  imageUrl: 'https://images.unsplash.com/photo-1591025207163-942350e47db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHVydGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  date: '28 Aug  2023'
}, {
  id: 3,
  title: 'Os rios amazônicos e seus defensores indígenas',
  excerpt: 'Comunidades tradicionais que lutam pela preservação dos ecossistemas fluviais da maior floresta tropical do mundo.',
  category: 'Conservação',
  imageUrl: 'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW1hem9uJTIwcml2ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
  date: '15 Mai 2023'
}, {
  id: 4,
  title: 'Mergulhadores contra a poluição: limpeza subaquática nos litorais urbanos',
  excerpt: 'Grupos voluntários que dedicam seus fins de semana para limpar o que não deveria estar no fundo do mar.',
  category: 'Heróis',
  imageUrl: 'https://images.unsplash.com/photo-1586164383881-d01525b539d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGl2ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
  date: '03 Mai 2023'
}, {
  id: 5,
  title: 'Economia circular nas comunidades pesqueiras: transformando resíduos em oportunidades',
  excerpt: 'Iniciativas que estão mudando a relação entre pesca, consumo e descarte em pequenas vilas costeiras.',
  category: 'Iniciativas',
  imageUrl: 'https://images.unsplash.com/photo-1545671953-0e564e4838a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmlzaGluZyUyMHZpbGxhZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
  date: '25 Abr 2023'
},

{
  id: 6,
  title: 'gsdgsdfsdfsdfsdades',
  excerpt: 'Indfsfdfsfsfdfsfsddddddddddddddddddosteiras.',
  category: 'Iniciativas',
  imageUrl: '/praiacomlixos2.png',
  date: '25 Abr 2023'
}

];
export function ArticlesSection() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const filteredArticles = activeCategory === 'Todos' ? articles : articles.filter(article => article.category === activeCategory);
  return <section className="py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Artigos em Destaque
        </h2>
        <a href="#" className="text-primary font-medium hover:text-primary/90 flex items-center">
          Ver todos
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      <div className="flex overflow-x-auto pb-4 mb-6 scrollbar-hide">
        <div className="flex space-x-2">
          {categories.map(category => <button key={category} className={`px-4 py-2 rounded-full whitespace-nowrap ${activeCategory === category ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`} onClick={() => setActiveCategory(category)}>
              {category}
            </button>)}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map(article => <ArticleCard key={article.id} title={article.title} excerpt={article.excerpt} category={article.category} imageUrl={article.imageUrl} date={article.date} featured={article.featured} />)}
      </div>
    </section>;
}