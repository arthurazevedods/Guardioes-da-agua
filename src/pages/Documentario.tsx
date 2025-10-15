import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function Documentario(): JSX.Element {
  return (
    <>
        <Header />
        <section className="flex flex-col items-center gap-8 p-6">
            <h1 className="text-3xl font-bold text-center">Documentários - Guardiões da Água</h1>
            
            <p className="text-center max-w-2xl"> 
                Proteger nossos mares e inspirar mudanças positivas em nossas comunidades. 
                Junte-se a nós na missão de preservar a vida marinha e garantir um futuro mais sustentável para todos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
                <iframe
                className="w-full aspect-video rounded-2xl shadow-lg"
                src="https://www.youtube.com/embed/5gk_ZM5sm-w"
                title="Entrevista com professores de surf - Mailson e Welber"
                allowFullScreen
                ></iframe>

                <iframe
                className="w-full aspect-video rounded-2xl shadow-lg"
                src="https://www.youtube.com/embed/FsKN8wFErZg"
                title="Documentário com a professora Aline Mayara"
                allowFullScreen
                ></iframe>

                <iframe
                className="w-full aspect-video rounded-2xl shadow-lg"
                src="https://www.youtube.com/embed/kKKNgpUnoA4"
                title="Entrevista com a oceanógrafa Kerlem"
                allowFullScreen
                ></iframe>
            </div>

            <a
                href="https://youtube.com/@guardioesdaagua0"
                target="_blank"
                className="text-blue-600 hover:underline mt-4"
            >
                Assista mais no canal oficial Guardiões da Água
            </a>
        </section>
        <Footer/>
    </>
  );
}