import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "RegisterKaro made our company registration process seamless and hassle-free. Their expert team guided us through every step, ensuring complete compliance and timely completion.",
    name: "David Chen",
    position: "CEO",
    company: "TechStart Solutions",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    quote: "Exceptional service! The team at RegisterKaro demonstrated profound knowledge in handling our tax compliance matters. Their attention to detail and professional approach is commendable.",
    name: "Sarah Williams",
    position: "CFO",
    company: "Innovation Hub",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    quote: "We've been using RegisterKaro's services for all our compliance needs for the past two years. Their expertise and prompt support have made them our trusted partner in business growth.",
    name: "Michael Rodriguez",
    position: "Managing Director",
    company: "Global Ventures",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">What people say about us</h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="flex items-center">
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 transform -translate-x-12 bg-white shadow-lg p-3 rounded-full hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="w-full">
              <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <img 
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 rounded-full border-4 border-white shadow-lg object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="flex justify-center mb-6 pt-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400" fill="currentColor" size={20} />
                  ))}
                </div>

                <blockquote className="text-lg text-gray-700 mb-6">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                <div className="space-y-2">
                  <div className="font-bold text-lg">{testimonials[currentIndex].name}</div>
                  <div className="text-gray-600">
                    {testimonials[currentIndex].position} at {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={nextTestimonial}
              className="absolute right-0 transform translate-x-12 bg-white shadow-lg p-3 rounded-full hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;