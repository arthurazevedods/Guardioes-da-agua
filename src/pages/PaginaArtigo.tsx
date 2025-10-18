
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

// Importar os artigos do ArticlesSection
const articles = [
  {
    id: 1,
    title: 'AquaRevive: Tecnologia e educação para purificação de água em comunidades',
    excerpt: 'Projeto que combina filtração mecânica, carvão ativado e desinfecção UV-C para melhorar a qualidade da água em comunidades carentes.',
    category: 'Pesquisa',
    imageUrl: '/aquarevive.png',
    date: '17 Out 2024',
    externalUrl: '/artigo',
    isInternal: true,
    fullContent: {
      id: '1',
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
    id: 2,
    title: 'Eco Barreiras',
    excerpt: 'Projeto Eco Barreiras - iema axixá',
    category: 'Pesquisa',
    imageUrl: '/ecobarreira.png',
    date: '17 Out 2024',
    externalUrl: '/artigo',
    isInternal: true,
    fullContent: {
      id: '2',
    title: 'Eco Barreiras',
    date: '17 Out 2024',
    video: 'https://www.youtube.com/embed/agtWwB4okYo',
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
  }
];

export type Article = {
  id: string;
  title: string;
  date?: string;
  image?: string; // <-- adicionar imagem (URL ou caminho em public/)
  video?: string; // pode ser URL do iframe
  externalUrl?: string;
  content?: string[];
};

export function PaginaArtigo(): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  
  // Buscar artigo via state (navegação interna) ou via ID (acesso direto)
  const articleFromState = location.state?.article as Article | null;
  const articleFromId = articles.find(article => article.id === parseInt(id || '0'))?.fullContent;
  const article = articleFromState || articleFromId;

  if (!article) {
    return (
      <>
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p>Artigo não encontrado.</p>
          <p className="text-sm text-gray-500 mt-2">ID do artigo: {id}</p>
          <button onClick={() => navigate('/')} className="mt-4 px-3 py-2 bg-zinc-200 rounded">
            Voltar
          </button>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose prose-zinc dark:prose-invert max-w-3xl mx-auto py-10">
          <header className="mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {article.title}
            </h1>
            {article.date && (
              <time className="block mt-2 text-sm text-zinc-500">{article.date}</time>
            )}
          </header>

          {article.image && (
            <div className="my-6">
              <img
                src={article.image}
                alt={article.title}
                className="w-full rounded-lg object-cover max-h-96 shadow-md"
              />
            </div>
          )}

          {article.video && (
            <div className="my-6">
              <div className="relative w-full overflow-hidden rounded-lg bg-zinc-100 aspect-video">
                {article.video.includes('.mp4') || article.video.includes('.webm') || article.video.includes('.mov') ? (
                  <video
                    className="w-full aspect-video rounded-2xl shadow-lg"
                    controls
                    preload="metadata"
                  >
                    <source src={article.video} type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                  </video>
                ) : (
                  <iframe
                    className="w-full aspect-video rounded-2xl shadow-lg"
                    src={article.video}
                    title={article.title}
                    allowFullScreen
                  />
                )}
              </div>
            </div>
          )}

          <section aria-label="Conteúdo do artigo" className="space-y-4 leading-relaxed text-justify">
            {article.content && article.content.length > 0 ? (
              article.content.map((p, i) => <p key={i}>{p}</p>)
            ) : (
              <p>A ausência de oceanos desencadearia acontecimentos sem precedentes no planeta. Saiba quais impactos seriam esses e por que o naturalista David Attenborough se levantou (uma vez mais) para proteger os mares da Terra.</p>
            )}

          </section>

          <div className="mt-6">
            <button onClick={() => navigate('/')} className="px-4 py-2 rounded bg-zinc-200 hover:bg-zinc-300">
              Voltar para artigos
            </button>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}