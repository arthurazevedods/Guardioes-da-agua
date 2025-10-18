import React, { useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PaginaArtigo, Article } from "./PaginaArtigo";

export function Artigos(): JSX.Element {
  const [selected, setSelected] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      id: "1",
      title: "5 razões pelas quais um oceano saudável está ligado aos direitos humanos",
      externalUrl: "https://share.google/cFJ7Fwz05M4I6Z067",
      content: [
        "Resumo: Relação entre saúde dos oceanos e direitos humanos. Uma breve introdução e pontos principais.",
      ],
      image: "/artigo1.jpeg",
    },
    {
      id: "2",
      title: "7 formas de combatermos a degradação do mar",
      externalUrl: "https://share.google/JbK7CVyFb8jNGXs3N",
      content: [
        "Resumo: Estratégias práticas para reduzir a degradação marinha. Ações comunitárias, políticas públicas e iniciativas de conservação.",
      ],
      image: "/artigo2.png",
    },
    {
      id: "3",
      title: "Combate à poluição: práticas para minimizar os impactos ao meio ambiente - Neoenergia",
      externalUrl: "https://share.google/KoDLv3fixOYSuGdJY",
      content: [
        "Resumo: Medidas para minimizar a poluição e proteger ecossistemas. Tecnologias, regulamentações e exemplos de casos de sucesso.",
      ],
      image: "/artigo3.jpg",
    },
    {
      id: "4",
      title: "18 ações práticas para você agir na Preservação do Meio Ambiente - Renapsi",
      externalUrl: "https://share.google/ZyFGmfljeMsYKrpDA",
      content: [
        "Resumo: Lista de ações cotidianas para preservar o meio ambiente. Dicas simples e efetivas que qualquer pessoa pode aplicar hoje.",
      ],
      image: "/artigo4.png",
    },
    {
      id: "5",
      title: "Água e surf: a importância da preservação dos oceanos para a nossa comunidade - Longboard Paradise",
      externalUrl: "https://share.google/yZZLJgJwa5cba0kuO",
      content: [
        "Resumo: Conexão entre cultura do surf e conservação marinha, como as comunidades locais podem proteger praias e ecossistemas costeiros.",
      ],
      image: "/artigo5.webp",
    },
    {
      id: "6",
      title: "25 factos chocantes sobre a poluição da água - Saber Surf",
      externalUrl: "https://share.google/DhIl8ASJ7adNIUEu0",
      content: [
        "Resumo: Fatos e estatísticas sobre a poluição hídrica global e impactos sobre a saúde humana, vida marinha e economia local.",
      ],
      image: "/artigo6.jpg",
    },
    {
      id: "7",
      title: "O que aconteceria com a Terra se não existissem os oceanos? | National Geographic",
      externalUrl: "https://share.google/rui9xrUfnpUP4MA4s",
      content: [
        "Resumo: Cenário hipotético dos efeitos da ausência dos oceanos. Discussão sobre clima, biodiversidade e sobrevivência humana.",
      ],
      image: "/artigo7.webp",
    },
    
  ];

  return (
    <>
      {!selected ? (
        <>
          <Header />

          {/* fundo abaixo do cabeçalho preenchendo toda a largura */}
          <section className="bg-gradient-to-b from-aqua/20 to-white w-full">
            {/* conteúdo centralizado com largura máxima e margens iguais */}
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <main className="artigo-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
                {articles.map((a) => (
                  <article
                    key={a.id}
                    className="flex flex-col overflow-hidden rounded-md bg-white border shadow-sm hover:shadow-md transition-shadow"
                  >
                    {/* imagem preenche todo o bloco, sem margens */}
                    <div className="w-full h-48 bg-zinc-100 overflow-hidden">
                      {a.image ? (
                        <img
                          src={a.image}
                          alt={a.title}
                          className="w-full h-full object-cover block"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-sm text-zinc-500">
                          Imagem (adicione a.image)
                        </div>
                      )}
                    </div>

                    <div className="p-4 flex-1 flex flex-col">
                      <h2 className="text-lg font-semibold mb-2 line-clamp-2">
                        {a.title}
                      </h2>

                      {a.content && a.content.length > 0 && (
                        <p className="text-sm text-zinc-600 mb-4 line-clamp-3">
                          {a.content[0]}
                        </p>
                      )}

                      <div className="mt-auto">
                        <button
                          className="w-full px-3 py-2 bg-zinc-200 rounded hover:bg-zinc-300 text-sm"
                          onClick={() => setSelected(a)}
                        >
                          Abrir no site
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </main>
            </div>
          </section>

          <Footer />
        </>
      ) : (
        <PaginaArtigo article={selected} onBack={() => setSelected(null)} />
      )}
    </>
  );
}