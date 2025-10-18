import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export type Article = {
  id: string;
  title: string;
  date?: string;
  image?: string; // <-- adicionar imagem (URL ou caminho em public/)
  video?: string; // pode ser URL do iframe
  externalUrl?: string;
  content?: string[];
};

export function PaginaArtigo({
  article,
  onBack,
}: {
  article: Article | null;
  onBack: () => void;
}): JSX.Element {
  if (!article) {
    return (
      <>
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p>Artigo não encontrado.</p>
          <button onClick={onBack} className="mt-4 px-3 py-2 bg-zinc-200 rounded">
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
                <iframe
                  className="w-full aspect-video rounded-2xl shadow-lg"
                  src={article.video}
                  title={article.title}
                  allowFullScreen
                />
              </div>
            </div>
          )}

          <section aria-label="Conteúdo do artigo" className="space-y-4 leading-relaxed text-justify">
            {article.content && article.content.length > 0 ? (
              article.content.map((p, i) => <p key={i}>{p}</p>)
            ) : (
              <p>A ausência de oceanos desencadearia acontecimentos sem precedentes no planeta. Saiba quais impactos seriam esses e por que o naturalista David Attenborough se levantou (uma vez mais) para proteger os mares da Terra.</p>
            )}

            {article.externalUrl && (
              <p>
                <a href={article.externalUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Ler artigo completo
                </a>
              </p>
            )}
          </section>

          <div className="mt-6">
            <button onClick={onBack} className="px-4 py-2 rounded bg-zinc-200 hover:bg-zinc-300">
              Voltar para artigos
            </button>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}