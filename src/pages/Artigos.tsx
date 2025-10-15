import { ArticlesSection } from "../components/ArticlesSection";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function Artigos (){
    return(
        <>
            <Header/> 
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <ArticlesSection/>
            </section>
            <Footer />
        
            
        </>
    )
}