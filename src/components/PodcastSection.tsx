import React from 'react';
import { PlayCircleIcon, ClockIcon } from 'lucide-react';
const episodes = [{
  id: 1,
  title: 'Entrevista com Capitão Paulo: 30 anos navegando pelos oceanos',
  description: 'Uma conversa com um dos maiores defensores dos mares brasileiros e suas experiências com conservação marinha.',
  imageUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNlYSUyMGNhcHRhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
  duration: '45 min',
  date: '15 Jun 2023'
}, {
  id: 2,
  title: 'Tecnologias para limpeza dos oceanos: inovações que estão fazendo a diferença',
  description: 'Exploramos as mais recentes tecnologias sendo desenvolvidas para combater a poluição marinha.',
  imageUrl: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG9jZWFuJTIwY2xlYW51cHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  duration: '38 min',
  date: '01 Jun 2023'
}, {
  id: 3,
  title: 'Baleias Jubarte: a jornada de recuperação de uma espécie quase extinta',
  description: 'A história de sucesso da conservação das baleias jubarte e os desafios que ainda persistem.',
  imageUrl: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtcGJhY2slMjB3aGFsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  duration: '52 min',
  date: '18 Mai 2023'
}];
export function PodcastSection() {
  return <section className="py-12 bg-gradient-to-r from-aqua/20 to-sand rounded-xl my-12 p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Podcast Ondas de Mudança
        </h2>
        <a href="#" className="text-primary font-medium hover:text-primary/90 flex items-center">
          Todos os episódios
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {episodes.map(episode => <div key={episode.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
            <div className="relative">
              <img src={episode.imageUrl} alt={episode.title} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-4 w-full flex justify-between items-center">
                  <button className="bg-primary hover:bg-primary/90 transition text-white p-2 rounded-full">
                    <PlayCircleIcon className="h-6 w-6" />
                  </button>
                  <div className="flex items-center text-white">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    <span className="text-sm">{episode.duration}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-500 text-sm mb-2">{episode.date}</p>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {episode.title}
              </h3>
              <p className="text-gray-600">{episode.description}</p>
            </div>
            <div className="px-6 pb-6 flex space-x-3">
              <a href="#" className="text-xs flex items-center text-gray-500 hover:text-primary">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Spotify_logo_without_text.svg" alt="Spotify" className="w-4 h-4 mr-1" />
                Spotify
              </a>
              <a href="#" className="text-xs flex items-center text-gray-500 hover:text-primary">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Apple_Podcasts_%28iOS%29.svg" alt="Apple Podcasts" className="w-4 h-4 mr-1" />
                Apple Podcasts
              </a>
              <a href="#" className="text-xs flex items-center text-gray-500 hover:text-primary">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/YouTube_play_button_icon_%282013%E2%80%932017%29.svg" alt="YouTube" className="w-4 h-4 mr-1" />
                YouTube
              </a>
            </div>
          </div>)}
      </div>
    </section>;
}