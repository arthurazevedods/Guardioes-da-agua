
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function PaginaArtigo (){
    return(
        <>
            <Header />
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <article className="prose prose-zinc dark:prose-invert max-w-3xl mx-auto py-10">
                    <header className="mb-6">
                        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Título do artigo</h1>
                        <time className="block mt-2 text-sm text-zinc-500">15 de outubro de 2025</time>
                    </header>

                    <div className="my-6">
                        <div className="relative w-full overflow-hidden rounded-lg bg-zinc-100 aspect-video">
                           
                        <iframe
                            className="w-full aspect-video rounded-2xl shadow-lg"
                            src="https://www.youtube.com/embed/FsKN8wFErZg"
                            title="Documentário com a professora Aline Mayara"
                            allowFullScreen
                            />
                        
                        
                        </div>

                    </div>

                    <section aria-label="Conteúdo do artigo" className="space-y-4 leading-relaxed text-justify">
                        <p>
                            Texto introdutório do artigo. Este parágrafo apresenta o tema e convida o leitor
                            a continuar a leitura.
                        </p>
                        <p>
                            Corpo do texto do artigo. Adicione aqui os detalhes, dados, citações e análises
                            principais do conteúdo.
                        </p>
                        <p>
                            Considerações finais, próximos passos ou chamadas para ação.
                        </p>
                    </section>
                </article>
            </section>
            <Footer />
        
            
        </>
    )
}