import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "Can I recover deleted files from desktop with this software?",
    answer: "Yes, our software provides comprehensive file recovery solutions for desktop systems. The recovery process is designed to be user-friendly and efficient, with high success rates for recently deleted files."
  },
  {
    id: 2,
    question: "What types of business registrations do you handle?",
    answer: "We handle all types of business registrations including Private Limited Company, LLP, OPC, Partnership Firm, and Proprietorship. Our experts guide you through the entire process."
  },
  {
    id: 3,
    question: "How long does the company registration process take?",
    answer: "The typical company registration process takes 15-20 working days, depending on document readiness and government processing times. We work to expedite the process wherever possible."
  },
  {
    id: 4,
    question: "What documents are required for company registration?",
    answer: "Required documents include PAN card, ID proof, address proof, and passport-size photographs of directors. Our team will provide a detailed checklist based on your specific requirements."
  },
  {
    id: 5,
    question: "Do you provide post-registration compliance support?",
    answer: "Yes, we offer comprehensive post-registration compliance support including annual filings, GST returns, and other statutory requirements to keep your business compliant."
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleQuestion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <div className="text-orange-500 font-medium">FAQ</div>
        </div>
        <h2 className="text-4xl font-bold text-center mb-12">Frequent Ask Questions</h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <div 
              key={faq.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(faq.id)}
                className="w-full flex items-center justify-between p-6 text-left relative group"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="font-semibold text-lg pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`transform transition-transform ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openId === faq.id && (
                <div className="px-6 pb-6 text-gray-600 animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium">
            Show more
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;