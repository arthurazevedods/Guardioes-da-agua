import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ArticlesSection } from './components/ArticlesSection';
import { PodcastSection } from './components/PodcastSection';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
export function App() {
  return <div className="min-h-screen bg-gradient-to-b from-aqua/20 to-white">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <ArticlesSection />
        <PodcastSection />
        <Newsletter />
      </main>
      <Footer />
    </div>;
}