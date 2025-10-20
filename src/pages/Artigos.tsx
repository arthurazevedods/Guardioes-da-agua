
import { ArticlesSection } from "../components/ArticlesSection";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function Artigos(): JSX.Element {
  
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ArticlesSection />
      </main>
      <Footer />
    </>
      
    
  );
}