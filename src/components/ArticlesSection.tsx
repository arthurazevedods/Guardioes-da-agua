import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArticleCard } from './ArticleCard';
import { ComingSoon } from './ComingSoon';
const categories = ['Todos', 'Conservação', 'Heróis', 'Iniciativas', 'Educação', 'Pesquisa'];
const articles = [
  {
    id: 1,
    title: 'AquaRevive: Tecnologia e educação para purificação de água em comunidades',
    excerpt: 'Projeto que combina filtração mecânica, carvão ativado e desinfecção UV-C para melhorar a qualidade da água em comunidades carentes.',
    category: 'Pesquisa',
    imageUrl: '/',
    date: '17 Out 2024',
    externalUrl: '/artigo',
    isInternal: true,
    fullContent: {
      id: '14',
      title: 'AquaRevive: Tecnologia e educação para purificação de água em comunidades',
      date: '17 Out 2024',
      video: '/aquarevive.mp4',
      content: [
        'O AquaRevive é um projeto inovador que busca melhorar a qualidade da água consumida por comunidades que dependem de fontes naturais sem tratamento adequado. Desenvolvido pelos alunos Roberta Emanuelle Pinho da Silva e Daniel Weslley Soares Santos da Silva, sob orientação da professora Karoline Costa Rodrigues, o projeto representa uma solução tecnológica aliada à responsabilidade social.',
        'Utilizando uma combinação de filtração mecânica, carvão ativado e desinfecção por luz UV-C, o sistema oferece uma solução acessível, eficiente e sustentável para a purificação da água. Esta abordagem multietapas garante a remoção de impurezas físicas, químicas e biológicas, proporcionando água segura para consumo humano.',
        'Além de apresentar uma alternativa prática para reduzir os riscos de contaminação e doenças de origem hídrica, o projeto também tem um forte caráter educativo. Ele promove a conscientização sobre a importância da preservação dos recursos hídricos e incentiva o engajamento de estudantes e da comunidade em ações voltadas ao cuidado com o meio ambiente.',
        'Com foco no ODS 6 da Agenda 2030 (Água Potável e Saneamento), o AquaRevive demonstra potencial para ser replicado em outras regiões com desafios semelhantes, unindo tecnologia, ciência e responsabilidade social. O projeto exemplifica como a educação e a inovação podem trabalhar juntas para resolver problemas reais da sociedade.',
        'A iniciativa representa um modelo de como estudantes podem contribuir ativamente para a solução de problemas ambientais, desenvolvendo não apenas conhecimento técnico, mas também consciência cidadã e compromisso com o desenvolvimento sustentável.'
      ]
    }
  },  

  {
  id: 6,
  title: 'Cidadãos Guardiões: A força da comunidade na preservação dos oceanos',
  excerpt: 'Como cidadãos comuns estão se unindo para proteger nossos mares e rios através de ações coletivas e conscientização.',
  category: 'Iniciativas',
  imageUrl: '/praiacomlixos2.png',
  date: '25 Abr 2023',
  externalUrl: '/PaginaArtigo',
  isInternal: true,
  fullContent: {
    id: '6',
    title: 'Cidadãos Guardiões: A força da comunidade na preservação dos oceanos',
    date: '25 Abr 2023',
    image: '/praiacomlixos2.png',
    content: [
      'Em todo o mundo, cidadãos comuns estão se unindo para proteger nossos oceanos e rios. Estes guardiões da água não são cientistas ou políticos, mas pessoas comuns que decidiram agir.',
      'A força da comunidade tem se mostrado uma das ferramentas mais poderosas na luta pela preservação dos recursos hídricos. Quando pessoas se unem com um objetivo comum, o impacto pode ser transformador.',
      'Muitas iniciativas começam pequenas: uma pessoa que decide limpar uma praia, um grupo de vizinhos que se organiza para monitorar a qualidade da água local, ou uma comunidade que se mobiliza contra a poluição industrial.',
      'O que torna esses movimentos especiais é a diversidade de pessoas envolvidas: pescadores, estudantes, aposentados, mães, crianças - todos unidos pela causa comum de proteger a água que sustenta a vida.',
      'Através de ações coletivas, essas comunidades estão criando mudanças reais e duradouras, provando que cada pessoa pode fazer a diferença na preservação dos nossos recursos hídricos.'
    ]
  }
},
{
  id: 7,
  title: '5 razões pelas quais um oceano saudável está ligado aos direitos humanos',
  excerpt: 'Relação entre saúde dos oceanos e direitos humanos. Uma breve introdução e pontos principais.',
  category: 'Educação',
  imageUrl: '/artigo1.jpeg',
  date: '10 Jan 2024',
  externalUrl: 'https://share.google/cFJ7Fwz05M4I6Z067'
},
{
  id: 8,
  title: '7 formas de combatermos a degradação do mar',
  excerpt: 'Estratégias práticas para reduzir a degradação marinha. Ações comunitárias, políticas públicas e iniciativas de conservação.',
  category: 'Conservação',
  imageUrl: '/artigo2.png',
  date: '15 Jan 2024',
  externalUrl: 'https://share.google/JbK7CVyFb8jNGXs3N'
},
{
  id: 9,
  title: 'Combate à poluição: práticas para minimizar os impactos ao meio ambiente',
  excerpt: 'Medidas para minimizar a poluição e proteger ecossistemas. Tecnologias, regulamentações e exemplos de casos de sucesso.',
  category: 'Conservação',
  imageUrl: '/artigo3.jpg',
  date: '20 Jan 2024',
  externalUrl: 'https://share.google/KoDLv3fixOYSuGdJY'
},
{
  id: 10,
  title: '18 ações práticas para você agir na Preservação do Meio Ambiente',
  excerpt: 'Lista de ações cotidianas para preservar o meio ambiente. Dicas simples e efetivas que qualquer pessoa pode aplicar hoje.',
  category: 'Educação',
  imageUrl: '/artigo4.png',
  date: '25 Jan 2024',
  externalUrl: 'https://share.google/ZyFGmfljeMsYKrpDA'
},
{
  id: 11,
  title: 'Água e surf: a importância da preservação dos oceanos para a nossa comunidade',
  excerpt: 'Conexão entre cultura do surf e conservação marinha, como as comunidades locais podem proteger praias e ecossistemas costeiros.',
  category: 'Heróis',
  imageUrl: '/artigo5.webp',
  date: '30 Jan 2024',
  externalUrl: 'https://share.google/yZZLJgJwa5cba0kuO'
},
{
  id: 12,
  title: '25 factos chocantes sobre a poluição da água',
  excerpt: 'Fatos e estatísticas sobre a poluição hídrica global e impactos sobre a saúde humana, vida marinha e economia local.',
  category: 'Pesquisa',
  imageUrl: '/artigo6.jpg',
  date: '05 Fev 2024',
  externalUrl: 'https://share.google/DhIl8ASJ7adNIUEu0'
},
{
  id: 13,
  title: 'O que aconteceria com a Terra se não existissem os oceanos?',
  excerpt: 'Cenário hipotético dos efeitos da ausência dos oceanos. Discussão sobre clima, biodiversidade e sobrevivência humana.',
  category: 'Pesquisa',
  imageUrl: '/artigo7.webp',
  date: '10 Fev 2024',
  externalUrl: 'https://share.google/rui9xrUfnpUP4MA4s'
},

];
export function ArticlesSection() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const navigate = useNavigate();
  const filteredArticles = activeCategory === 'Todos' ? articles : articles.filter(article => article.category === activeCategory);

  // Função para lidar com clique no artigo
  const handleArticleClick = (article: { id: number; isInternal?: boolean; fullContent?: { id: string; title: string; date?: string; image?: string; content?: string[] } }) => {
    if (article.isInternal && article.fullContent) {
      // Navegar para a rota /artigo/:id com os dados do artigo
      navigate(`/artigo/${article.id}`, { 
        state: { 
          article: article.fullContent 
        } 
      });
    }
  };
  


  return <section className="py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Artigos em Destaque
        </h2>
        <div className="flex items-center gap-4">
        
          <a href="#" className="text-primary font-medium hover:text-primary/90 flex items-center">
            Ver todos
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex overflow-x-auto pb-4 mb-6 scrollbar-hide">
        <div className="flex space-x-2">
          {categories.map(category => <button key={category} className={`px-4 py-2 rounded-full whitespace-nowrap ${activeCategory === category ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`} onClick={() => setActiveCategory(category)}>
              {category}
            </button>)}
        </div>
      </div>
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map(article => (
            <div 
              key={article.id} 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Clique no div do artigo:', article.id);
                handleArticleClick(article);
              }} 
              className="cursor-pointer"
            >
              <ArticleCard 
                title={article.title} 
                excerpt={article.excerpt} 
                category={article.category} 
                imageUrl={article.imageUrl} 
                date={article.date} 
                externalUrl={article.isInternal ? '#' : article.externalUrl} 
              />
            </div>
          ))}
        </div>
      ) : (
        <ComingSoon category={activeCategory} />
      )}
    </section>;
}