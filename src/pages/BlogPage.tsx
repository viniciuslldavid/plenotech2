import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string;
  author: string;
  imageUrl: string;
}

interface CategoryFilter {
  name: string;
  count: number;
}

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-0 left-0 m-4">
          <span className="inline-block bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.author}</span>
        </div>
        <h3 className="text-xl font-semibold mb-3 hover:text-primary-600 transition-colors">
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>
        <Link
          to={`/blog/${post.id}`}
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

const BlogPage: React.FC = () => {
  const allPosts: BlogPost[] = [
    {
      id: "ia-mercado-trabalho",
      title: "Como a Inteligência Artificial está transformando o mercado de trabalho",
      excerpt: "Descubra como a IA está criando novas oportunidades e transformando diversas indústrias.",
      category: "Tecnologia",
      tags: ["IA", "mercado", "futuro", "automação"],
      date: "12 Jun 2025",
      author: "Ana Silva",
      imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: "tendencias-desenvolvimento-web-2025",
      title: "5 tendências de desenvolvimento web para ficar de olho em 2025",
      excerpt: "Conheça as principais tendências que estão moldando o futuro do desenvolvimento web.",
      category: "Web",
      tags: ["desenvolvimento", "tendências", "frontend"],
      date: "05 Jun 2025",
      author: "Carlos Oliveira",
      imageUrl: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: "estrategia-ciberseguranca",
      title: "Como implementar uma estratégia de cibersegurança eficaz para sua empresa",
      excerpt: "Aprenda os passos essenciais para proteger sua empresa contra ameaças digitais.",
      category: "Segurança",
      tags: ["cibersegurança", "proteção", "dados"],
      date: "28 Mai 2025",
      author: "Juliana Martins",
      imageUrl: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: "cloud-pequenas-empresas",
      title: "Como a computação em nuvem pode beneficiar pequenas empresas",
      excerpt: "Descubra como soluções em nuvem podem reduzir custos e aumentar a eficiência do seu negócio.",
      category: "Cloud",
      tags: ["cloud", "pme", "infraestrutura"],
      date: "20 Mai 2025",
      author: "Ricardo Ferreira",
      imageUrl: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: "desenvolvimento-mobile-first",
      title: "Por que adotar uma abordagem mobile-first no desenvolvimento de sites",
      excerpt: "Entenda as vantagens de priorizar a experiência móvel no desenvolvimento web.",
      category: "Mobile",
      tags: ["mobile", "responsive", "ux"],
      date: "15 Mai 2025",
      author: "Ana Silva",
      imageUrl: "https://images.pexels.com/photos/8348457/pexels-photo-8348457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: "blockchain-além-criptomoedas",
      title: "Blockchain além das criptomoedas: aplicações para diversos setores",
      excerpt: "Explore como a tecnologia blockchain está revolucionando setores além das finanças.",
      category: "Blockchain",
      tags: ["blockchain", "inovação", "tecnologia"],
      date: "10 Mai 2025",
      author: "Carlos Oliveira",
      imageUrl: "https://images.pexels.com/photos/220301/pexels-photo-220301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];
  
  const categories: CategoryFilter[] = [
    { name: "Todos", count: allPosts.length },
    { name: "Tecnologia", count: 1 },
    { name: "Web", count: 1 },
    { name: "Mobile", count: 1 },
    { name: "Segurança", count: 1 },
    { name: "Cloud", count: 1 },
    { name: "Blockchain", count: 1 },
  ];
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  
  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
                         
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Blog & <span className="text-secondary-400">Insights</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 animate-fade-in-delay">
              Acompanhe as últimas notícias e tendências do mundo da tecnologia
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="sticky top-24">
                {/* Search */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <h3 className="text-lg font-semibold mb-4">Pesquisar</h3>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Buscar artigos..."
                      className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  </div>
                </div>
                
                {/* Categories */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <h3 className="text-lg font-semibold mb-4">Categorias</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <button
                          onClick={() => setSelectedCategory(category.name)}
                          className={`flex items-center justify-between w-full px-2 py-1 rounded-md transition-colors ${
                            selectedCategory === category.name
                              ? 'bg-primary-100 text-primary-700'
                              : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          <span>{category.name}</span>
                          <span className="bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-full">
                            {category.count}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Recent Posts */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-4">Posts Recentes</h3>
                  <ul className="space-y-4">
                    {allPosts.slice(0, 3).map((post, index) => (
                      <li key={index} className="flex items-start">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-16 h-16 rounded object-cover mr-3"
                        />
                        <div>
                          <h4 className="text-sm font-medium hover:text-primary-600 transition-colors">
                            <Link to={`/blog/${post.id}`}>{post.title}</Link>
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="mb-8">
                <SectionHeading
                  title={selectedCategory === "Todos" ? "Todos os artigos" : `Categoria: ${selectedCategory}`}
                  subtitle={`${filteredPosts.length} artigos encontrados`}
                  alignment="left"
                />
              </div>
              
              {searchTerm && filteredPosts.length === 0 ? (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <h3 className="text-xl font-semibold mb-2">Nenhum resultado encontrado</h3>
                  <p className="text-gray-600">
                    Não encontramos artigos correspondentes à sua pesquisa. Tente outros termos ou navegue pelas categorias.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post, index) => (
                    <div 
                      key={post.id}
                      className="animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <BlogCard post={post} />
                    </div>
                  ))}
                </div>
              )}
              
              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="inline-flex rounded-md shadow">
                  <a href="#" className="px-4 py-2 bg-white border border-gray-300 rounded-l-md text-gray-700 hover:bg-gray-50">
                    Anterior
                  </a>
                  <a href="#" className="px-4 py-2 bg-primary-600 border border-primary-600 text-white">
                    1
                  </a>
                  <a href="#" className="px-4 py-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                    2
                  </a>
                  <a href="#" className="px-4 py-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                    3
                  </a>
                  <a href="#" className="px-4 py-2 bg-white border border-gray-300 rounded-r-md text-gray-700 hover:bg-gray-50">
                    Próximo
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              title="Inscreva-se em nossa newsletter"
              subtitle="Receba as últimas novidades e artigos diretamente no seu e-mail"
              alignment="center"
            />
            
            <form className="mt-8 flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors"
              >
                Inscrever-se
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-500">
              Ao se inscrever, você concorda com nossa Política de Privacidade.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;