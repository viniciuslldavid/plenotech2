import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
  url: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  title,
  excerpt,
  category,
  date,
  imageUrl,
  url,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-0 left-0 m-4">
          <span className="inline-block bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-500 text-sm mb-2">{date}</p>
        <h3 className="text-xl font-semibold mb-3 hover:text-primary-600 transition-colors">
          <Link to={url}>{title}</Link>
        </h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <Link
          to={url}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
        >
          Ler mais
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      title: "Como a Inteligência Artificial está transformando o mercado de trabalho",
      excerpt: "Descubra como a IA está criando novas oportunidades e transformando diversas indústrias.",
      category: "Tecnologia",
      date: "12 Jun 2025",
      imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      url: "/blog/ia-mercado-trabalho"
    },
    {
      title: "5 tendências de desenvolvimento web para ficar de olho em 2025",
      excerpt: "Conheça as principais tendências que estão moldando o futuro do desenvolvimento web.",
      category: "Web",
      date: "05 Jun 2025",
      imageUrl: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      url: "/blog/tendencias-desenvolvimento-web-2025"
    },
    {
      title: "Como implementar uma estratégia de cibersegurança eficaz para sua empresa",
      excerpt: "Aprenda os passos essenciais para proteger sua empresa contra ameaças digitais.",
      category: "Segurança",
      date: "28 Mai 2025",
      imageUrl: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      url: "/blog/estrategia-ciberseguranca"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Blog & Insights"
          subtitle="Acompanhe as últimas notícias e tendências do mundo da tecnologia"
          alignment="center"
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <BlogPostCard
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                date={post.date}
                imageUrl={post.imageUrl}
                url={post.url}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-block px-6 py-3 border border-primary-600 text-primary-600 font-medium rounded-md hover:bg-primary-600 hover:text-white transition-colors"
          >
            Ver todos os artigos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;