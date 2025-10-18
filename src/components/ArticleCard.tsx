interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  date: string;
  featured?: boolean;
  externalUrl?: string;
}
export function ArticleCard({
  title,
  excerpt,
  category,
  imageUrl,
  date,
  featured = false,
  externalUrl
}: ArticleCardProps) {
  return <div className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 ${featured ? 'lg:col-span-2' : ''}`}>
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-52 object-cover" />
        <span className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
          {category}
        </span>
      </div>
      <div className="p-6">
        <p className="text-gray-500 text-sm mb-2">{date}</p>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <a 
          href={externalUrl || '#'} 
          className="inline-flex items-center text-primary font-medium hover:text-primary/90"
          onClick={(e) => {
            if (externalUrl === '#') {
              e.preventDefault();
            }
          }}
        >
          Ler artigo completo
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>;
}