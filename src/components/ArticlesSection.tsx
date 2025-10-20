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
    imageUrl: '/aquarevive.png',
    date: 'Jun 2025',
    externalUrl: '/artigo',
    isInternal: true,
    fullContent: {
      id: '1',
      title: 'AquaRevive: Tecnologia e educação para purificação de água em comunidades',
      date: 'Jun 2025',
      video: 'https://www.youtube.com/embed/9m8Dvc5rLXw',
      content: [
        'O AquaRevive é um projeto inovador que busca melhorar a qualidade da água consumida por comunidades que dependem de fontes naturais sem tratamento adequado. Desenvolvido pela turma 302 do Instituto Federal de Educação, Ciência e Tecnologia do Maranhão - Unidade Axixá e liderado pelos alunos Roberta Emanuelle Pinho da Silva e Daniel Weslley Soares Santos da Silva, sob orientação da professora Karoline Costa Rodrigues, o projeto representa uma solução tecnológica aliada à responsabilidade social.',
        'Utilizando uma combinação de filtração mecânica, carvão ativado e desinfecção por luz UV-C, o sistema oferece uma solução acessível, eficiente e sustentável para a purificação da água. Esta abordagem multietapas garante a remoção de impurezas físicas, químicas e biológicas, proporcionando água segura para consumo humano.',
        'Além de apresentar uma alternativa prática para reduzir os riscos de contaminação e doenças de origem hídrica, o projeto também tem um forte caráter educativo. Ele promove a conscientização sobre a importância da preservação dos recursos hídricos e incentiva o engajamento de estudantes e da comunidade em ações voltadas ao cuidado com o meio ambiente.',
        'Com foco no ODS 6 da Agenda 2030 (Água Potável e Saneamento), o AquaRevive demonstra potencial para ser replicado em outras regiões com desafios semelhantes, unindo tecnologia, ciência e responsabilidade social. O projeto exemplifica como a educação e a inovação podem trabalhar juntas para resolver problemas reais da sociedade.',
        'A iniciativa representa um modelo de como estudantes podem contribuir ativamente para a solução de problemas ambientais, desenvolvendo não apenas conhecimento técnico, mas também consciência cidadã e compromisso com o desenvolvimento sustentável.'
      ]
    }
  },  
  {
    id: 2,
    title: 'Eco Barreiras',
    excerpt: 'As ecobarreiras têm como objetivo reter plásticos e outros materiais antes que atinjam trechos críticos ou o litoral, contribuindo para a melhoria da qualidade da água, conservação da biodiversidade e redução de impactos como assoreamento e contaminação.',
    category: 'Pesquisa',
    imageUrl: '/ecobarreira.png',
    date: 'Jun 2025',
    externalUrl: '/artigo',
    isInternal: true,
    fullContent: {
      id: '2',
    title: 'Eco Barreiras',
    date: 'Jun 2025',
    video: 'https://www.youtube.com/embed/agtWwB4okYo',
    content: [
      'O rio Munim drena uma ampla bacia no Maranhão e enfrenta desafios ambientais associados ao uso do solo, à poluição por resíduos e à retirada de areia. Como parte de estratégias de conservação e mitigação da poluição fluvial, as alunas do curso de Redes de Computadores do IEMA Axixá desenvolveram o projeto de uso de ecobarreiras — estruturas flutuantes instaladas transversalmente em cursos d’água para interceptar resíduos sólidos flutuantes.',
      'As ecobarreiras têm como objetivo reter plásticos e outros materiais antes que atinjam trechos críticos ou o litoral, contribuindo para a melhoria da qualidade da água, conservação da biodiversidade e redução de impactos como assoreamento e contaminação.',
      'A técnica foi apresentada aos gestores municipais, que se comprometeram a apoiar o projeto e sua implementação no rio Munim, fortalecendo o diálogo entre escola e poder público em prol da sustentabilidade hídrica.',
      'A iniciativa evidencia o protagonismo das alunas e a integração entre a escola e a sociedade na promoção de práticas ambientais de preservação e conscientização.',
      'Alunas envolvidas: Ana Clara Melo de Matos; Aline Cristina Silva e Silva; Melissa Vitória Pires Costa; Glenda Rafiza Sousa Cabral; Jamylly Pereira Sampaio.'
    ]
    }
  },  

  {
  id: 6,
  title: 'Um mar de consciência: quando pequenas ações fazem grande diferença',
  excerpt: 'Durante uma manhã ensolarada, Eduane Silva e Maria Luísa participaram de uma ação ambiental em parceria com a Escola de Surf MSV, coordenada pelo professor Welber.',
  category: 'Iniciativas',
  imageUrl: '/praiacomlixos2.png',
  date: 'Out 2025',
  externalUrl: '/artigo',
  isInternal: true,
  fullContent: {
    id: '6',
    title: 'Um mar de consciência: quando pequenas ações fazem grande diferença',
    date: 'Out 2025',
    image: '/praiacomlixos2.png',
    content: [
      'Durante uma manhã ensolarada, Eduane Silva e Maria Luísa participaram de uma ação ambiental em parceria com a Escola de Surf MSV, coordenada pelo professor Welber. Em apenas cinco minutos de coleta, foram recolhidas quatro sacolas cheias de lixo, entre elas garrafas plásticas, embalagens, vidros quebrados e outros materiais descartáveis espalhados pela areia.',
      'A quantidade e o tipo de resíduos encontrados evidenciaram o impacto negativo do descarte incorreto de lixo nas praias e o risco que isso representa para o meio ambiente, os animais marinhos e os próprios frequentadores. A atividade proporcionou uma reflexão profunda sobre a responsabilidade individual e coletiva na preservação dos oceanos, ressaltando a importância de práticas sustentáveis no cotidiano.',
      'Mais do que uma simples coleta, a ação simbolizou um ato de cidadania, respeito e compromisso com o planeta. Ao final, ficou a certeza de que pequenas iniciativas, quando unidas, são capazes de gerar grandes transformações e inspirar uma nova consciência ambiental.',
      'A parceria com a Escola de Surf MSV demonstra como diferentes setores da sociedade podem se unir em prol de um objetivo comum: a preservação dos nossos recursos hídricos e a conscientização sobre a importância de cuidar do meio ambiente.',
      'Por: Eduane Silva e Maria Luísa'
    ]
  }
},
{
  id: 7,
  title: 'Biofiltração com Plantas Nativas da Ilha Guarapirá: Uma Alternativa Sustentável para o Tratamento da Água de Lastro no Porto do Itaqui',
  excerpt: 'Projeto que propõe o desenvolvimento de um sistema de biofiltração natural, inspirado nos manguezais da Ilha Guarapirá, como alternativa sustentável para o tratamento da água de lastro.',
  category: 'Pesquisa',
  imageUrl: '/bio.jpeg',
  date: 'Out 2025',
  externalUrl: '/artigo',
  isInternal: true,
  fullContent: {
    id: '7',
    title: 'Biofiltração com Plantas Nativas da Ilha Guarapirá: Uma Alternativa Sustentável para o Tratamento da Água de Lastro no Porto do Itaqui',
    date: 'Out 2025',
    image: '/bio.jpeg',
    content: [
      'A Ilha Guarapirá, próxima ao Porto do Itaqui (MA), abriga rica biodiversidade em um ecossistema de manguezal essencial para a purificação da água e a retenção de sedimentos. A água de lastro, usada por navios para estabilidade, representa um dos principais vetores de bioinvasão marinha, podendo introduzir espécies invasoras, patógenos e poluentes — como o caramujo africano (Achatina fulica), que ameaça a biodiversidade e a saúde pública.',
      'O projeto propõe o desenvolvimento de um sistema de biofiltração natural, inspirado nos manguezais da Ilha Guarapirá, como alternativa sustentável para o tratamento da água de lastro. A pesquisa inclui quatro etapas: revisão bibliográfica, visita técnica ao Porto do Itaqui, ensaios laboratoriais com espécies nativas e modelagem de um protótipo digital do biossistema.',
      'Espera-se que o sistema apresente alta eficiência na remoção de contaminantes e organismos invasores, reduzindo custos e impactos ambientais, além de fortalecer as práticas de gestão portuária sustentável. Assim, o estudo alia ecologia e tecnologia, contribuindo para a conservação ambiental e servindo de referência para outros portos brasileiros.',
      'A iniciativa representa uma abordagem inovadora que combina conhecimento tradicional sobre manguezais com tecnologia moderna, demonstrando como a natureza pode ser nossa maior aliada na solução de problemas ambientais complexos.',
      'Este projeto contribui diretamente para os Objetivos de Desenvolvimento Sustentável (ODS) 6 (Água Potável e Saneamento) e 14 (Vida na Água), promovendo práticas sustentáveis na gestão portuária e conservação dos ecossistemas marinhos.'
    ]
  }
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