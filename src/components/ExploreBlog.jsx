import React from 'react';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

const blogs = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
    author: "John Smith",
    date: "March 15, 2024",
    tag: "Today",
    title: "How to Register Your Company in India: A Complete Guide",
    description: "Learn about the step-by-step process of company registration in India, including all necessary documents and compliance requirements.",
    categories: ["Company Registration", "Legal"]
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80",
    author: "Sarah Johnson",
    date: "March 14, 2024",
    tag: "Featured",
    title: "Understanding GST Registration Process for Startups",
    description: "A comprehensive guide to GST registration for startups, including eligibility criteria and required documentation.",
    categories: ["Tax & Audit", "Startups"]
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80",
    author: "Mike Wilson",
    date: "March 13, 2024",
    tag: "Popular",
    title: "Essential Compliance Requirements for Indian Businesses",
    description: "Stay updated with the latest compliance requirements and regulations for businesses operating in India.",
    categories: ["Compliance", "Management"]
  }
];

const ExploreBlog = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-orange-500 font-medium mb-2">EXPLORE OUR BLOGS</div>
          <h2 className="text-4xl font-bold">Accelerate Digital Transformation</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog) => (
            <article key={blog.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <span className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                  {blog.tag}
                </span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span>{blog.author}</span>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {blog.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 hover:text-orange-500 transition-colors">
                  <a href="#">{blog.title}</a>
                </h3>
                
                <p className="text-gray-600 mb-4">{blog.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {blog.categories.map((category, index) => (
                    <span 
                      key={index}
                      className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                    >
                      <Tag size={12} />
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium">
            Show more blogs
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreBlog;